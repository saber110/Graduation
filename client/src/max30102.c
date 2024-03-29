#include "bsp_i2c_gpio.h"
#include "main.h"
#include "max30102.h"
#include <stdio.h>
#include <wiringPi.h>

#define INTERRUPT_REG 0X00
#define max30102_WR_address 0xAE
#define I2C_WR 0
#define I2C_RD 1

u8 max30102_Bus_Write(u8 Register_Address, u8 Word_Data) {
  i2c_Start();

  i2c_SendByte(max30102_WR_address | I2C_WR);
  if (i2c_WaitAck() != 0) {
    goto cmd_fail;
  }
  i2c_SendByte(Register_Address);
  if (i2c_WaitAck() != 0) {
    goto cmd_fail;
  }
  i2c_SendByte(Word_Data);
  if (i2c_WaitAck() != 0) {
    goto cmd_fail;
  }
  i2c_Stop();
  return 1;

cmd_fail:
  i2c_Stop();
  return 0;
}

u8 max30102_Bus_Read(u8 Register_Address) {
  u8 data;

  i2c_Start();
  i2c_SendByte(max30102_WR_address | I2C_WR);
  if (i2c_WaitAck() != 0) {
    goto cmd_fail;
  }
  i2c_SendByte((uint8_t)Register_Address);
  if (i2c_WaitAck() != 0) {
    goto cmd_fail;
  }

  i2c_Start();
  i2c_SendByte(max30102_WR_address | I2C_RD);
  if (i2c_WaitAck() != 0) {
    goto cmd_fail;
  }
  {
    data = i2c_ReadByte();
    i2c_NAck();
  }
  i2c_Stop();
  return data;
cmd_fail:
  i2c_Stop();
  return 0;
}

int maxim_max30102_read_fifo(uint32_t *pun_red_led, uint32_t *pun_ir_led) {
  uint32_t un_temp;
  *pun_ir_led = 0;
  *pun_red_led = 0;
  max30102_Bus_Read(REG_INTR_STATUS_1);
  max30102_Bus_Read(REG_INTR_STATUS_2);

  i2c_Start();

  i2c_SendByte(max30102_WR_address | I2C_WR);
  if (i2c_WaitAck() != 0) {
    printf("fifo failed1\n");
    goto cmd_fail;
  }
  i2c_SendByte((uint8_t)REG_FIFO_DATA);
  if (i2c_WaitAck() != 0) {
    printf("fifo failed2\n");
    goto cmd_fail;
  }

  i2c_Start();
  i2c_SendByte(max30102_WR_address | I2C_RD);
  if (i2c_WaitAck() != 0) {
    printf("fifo failed3\n");
    goto cmd_fail;
  }
  un_temp = i2c_ReadByte();
  i2c_Ack();
  un_temp <<= 16;
  *pun_red_led += un_temp;
  un_temp = i2c_ReadByte();
  i2c_Ack();
  un_temp <<= 8;
  *pun_red_led += un_temp;
  un_temp = i2c_ReadByte();
  i2c_Ack();
  // printf("un_temp %d\n", sizeof(un_temp));
  *pun_red_led += un_temp;

  un_temp = i2c_ReadByte();
  i2c_Ack();
  un_temp <<= 16;
  *pun_ir_led += un_temp;
  un_temp = i2c_ReadByte();
  i2c_Ack();
  un_temp <<= 8;
  *pun_ir_led += un_temp;
  un_temp = i2c_ReadByte();
  i2c_Ack();
  *pun_ir_led += un_temp;
  printf("pun_red_led1 = %d  ", pun_red_led);
  printf("pun_ir_led1 = %d\n", pun_ir_led);
  *pun_red_led &= 0x03FFFF;
  *pun_ir_led &= 0x03FFFF;
  printf("pun_red_led2 = %d  ", pun_red_led);
  printf("pun_ir_led2 = %d\n", pun_ir_led);
  i2c_Stop();
  return true;
cmd_fail:
  i2c_Stop();
  return false;
}

int maxim_max30102_init(void) {
  if (!maxim_max30102_write_reg(REG_INTR_ENABLE_1, 0xc0)) // INTR setting  1101 0000
    return false;
  delayMicroseconds(5);
  if (!maxim_max30102_write_reg(REG_INTR_ENABLE_2, 0x00))
    return false;
  delayMicroseconds(5);
  printf("%d\n", max30102_Bus_Read(REG_INTR_ENABLE_2));
  delayMicroseconds(5);
  if (!maxim_max30102_write_reg(REG_FIFO_WR_PTR, 0x00)) // FIFO_WR_PTR[4:0]
    return false;
  delayMicroseconds(5);
  if (!maxim_max30102_write_reg(REG_OVF_COUNTER, 0x00)) // OVF_COUNTER[4:0]
    return false;
  delayMicroseconds(5);
  if (!maxim_max30102_write_reg(REG_FIFO_RD_PTR, 0x00)) // FIFO_RD_PTR[4:0]
    return false;
  delayMicroseconds(5);
  if (!maxim_max30102_write_reg(
          REG_FIFO_CONFIG,
          0x0f)) // sample avg = 8, fifo rollover=false, fifo almost full = 17
    return false;
  delayMicroseconds(5);
  if (!maxim_max30102_write_reg(
          REG_MODE_CONFIG,
          0x03)) // 0x02 for HR mode only, 0x03 for SpO2 mode 0x07 multimode LED
    return false;
  delayMicroseconds(5);
  printf("%d\n", max30102_Bus_Read(REG_MODE_CONFIG));
  delayMicroseconds(5);
  if (!maxim_max30102_write_reg(REG_SPO2_CONFIG,
                                0x27)) // SPO2_ADC range = 4096nA, SPO2 sample
                                       // rate (400 Hz), LED pulseWidth (411uS)
    return false;
  delayMicroseconds(5);
  if (!maxim_max30102_write_reg(REG_LED1_PA,
                                0x24)) // Choose value for ~ 4.5mA for LED1
    return false;
  delayMicroseconds(5);
  if (!maxim_max30102_write_reg(REG_LED2_PA,
                                0x24)) // Choose value for ~ 4.5mA for LED2
    return false;
  delayMicroseconds(5);
  if (!maxim_max30102_write_reg(REG_PILOT_PA,
                                0x7f)) // Choose value for ~ 25mA for Pilot LED
    return false;
  delayMicroseconds(5);
  return true;
}
