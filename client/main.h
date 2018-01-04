#ifndef __MAIN_H
#define __MAIN_H

#include<wiringPi.h>

typedef signed char int8_t;
typedef signed short int  int16_t;
typedef signed int int32_t;

typedef unsigned  char uint8_t;
typedef unsigned short int uint16_t;
typedef unsigned int uint32_t;

#define u8 uint8_t
#define u16 uint16_t
#define u32 uint32_t

#define I2C_WR	0		/* ÐŽ¿ØÖÆbit */
#define I2C_RD	1		/* ¶Á¿ØÖÆbit */
#define human   29
#define humanCritical 20

extern u16 Already_Rotation_Number;
extern u8 Bit_Test;
extern u8 Bit_Limit;

extern u8  Bit_Coder_add;//ŒÓ
extern u8  Bit_Coder_red;//Œõ
extern u8 dis_data[5];




#endif
