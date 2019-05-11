#ifndef _BSP_I2C_GPIO_H
#define _BSP_I2C_GPIO_H
#include "main.h"

#define I2C_WR	0		/* ÐŽ¿ØÖÆbit */
#define I2C_RD	1		/* ¶Á¿ØÖÆbit */

#define I2C_SCL_PIN		7
#define I2C_SDA_PIN		0
#define MAX30102_INT  2

#define I2C_SCL_1()   digitalWrite(I2C_SCL_PIN, HIGH)			/* SCL = 1 */
#define I2C_SCL_0()   digitalWrite(I2C_SCL_PIN, LOW)				/* SCL = 0 */

#define I2C_SDA_1()  	digitalWrite(I2C_SDA_PIN, HIGH)			/* SDA = 1 */
#define I2C_SDA_0()  	digitalWrite(I2C_SDA_PIN, LOW)			  /* SDA = 0 */

#define I2C_SDA_READ() digitalRead(I2C_SDA_PIN)
#define I2C_SCL_READ() digitalRead(I2C_SCL_PIN)

extern void bsp_InitI2C(void);
extern void i2c_Start(void);
extern void i2c_Stop(void);
extern void i2c_Delay(void);
extern void i2c_SendByte(uint8_t _ucByte);
extern uint8_t i2c_ReadByte(void);
extern uint8_t i2c_WaitAck(void);
extern void i2c_Ack(void);
extern void i2c_NAck(void);
extern uint8_t i2c_CheckDevice(uint8_t _Address);
#endif
