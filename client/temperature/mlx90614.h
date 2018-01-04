#ifndef _MLX90614_H_
#define _MLX90614_H_

#define SDA 0//��GPIO_7��MLX90614��SDA����
#define SCL 7//��GPIO_0��MLX90614��SCL����
#define ACK 0
#define NACK 1

typedef signed char int8_t;
typedef unsigned char   u8;
typedef short  int16_t;
typedef unsigned short  u16;
typedef int  int32_t;
typedef unsigned   uint32_t;

void SMBus_StartBit(void);
void SMBus_StopBit(void);
void SMBus_SendBit(u8);
u8 SMBus_SendByte(u8);
u8 SMBus_ReceiveBit(void);
u8 SMBus_ReceiveByte(u8);
u16 SMBus_ReadMemory(u8, u8);
u8 PEC_Calculation(u8*);
float SMBus_ReadTemp(void);

void getMLX90614(void);

#endif
