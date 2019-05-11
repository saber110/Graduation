#include <stdio.h>
#include "bsp_i2c_gpio.h"
#include"main.h"

void bsp_InitI2C(void)
{
	wiringPiSetup();
	pinMode (I2C_SDA_PIN, OUTPUT);
	pinMode (I2C_SCL_PIN, OUTPUT);
	i2c_Stop();
}

 void i2c_Delay(void)
{
	delayMicroseconds(5);
}


void i2c_Start(void)
{
	wiringPiSetup();
	pinMode (I2C_SDA_PIN, OUTPUT);
	I2C_SDA_1();
	delayMicroseconds(5);
	I2C_SCL_1();
	delayMicroseconds(5);
	I2C_SDA_0();
	delayMicroseconds(5);
	I2C_SCL_0();
	delayMicroseconds(5);
}

void i2c_ReStart(void){
	i2c_Start();
}


void i2c_Stop(void)
{
	wiringPiSetup();
	pinMode (I2C_SDA_PIN, OUTPUT);

	I2C_SDA_0();
	delayMicroseconds(5);
	I2C_SCL_1();
	delayMicroseconds(5);
	I2C_SDA_1();
	delayMicroseconds(5);
}


void i2c_SendByte(uint8_t _ucByte)
{
	pinMode (I2C_SDA_PIN, OUTPUT);

	uint8_t i;

	for (i = 0; i < 8; i++)
	{
		if (_ucByte & 0x80)
		{
			I2C_SDA_1();
		}
		else
		{
			I2C_SDA_0();
		}
		delayMicroseconds(5);
		I2C_SCL_1();
		delayMicroseconds(5);
		I2C_SCL_0();
		if (i == 7)
		{
			 I2C_SDA_1(); // ÊÍ·Å×ÜÏß
		}
		_ucByte <<= 1;	/* ×óÒÆÒ»žöbit */
		delayMicroseconds(5);
	}
}


uint8_t i2c_ReadByte(void)
{

	pinMode (I2C_SDA_PIN, INPUT);

	uint8_t i;
	uint8_t value;

	/* ¶ÁµœµÚ1žöbitÎªÊýŸÝµÄbit7 */
	value = 0;
	for (i = 0; i < 8; i++)
	{
		value <<= 1;
		I2C_SCL_1();
		delayMicroseconds(20);
		if (I2C_SDA_READ())
		{
			value++;
		}

		I2C_SCL_0();
		delayMicroseconds(20);
	}
	delayMicroseconds(20);
	// printf("byte %d\t",value);
	pinMode (I2C_SDA_PIN, OUTPUT);
	return value;
}

uint8_t i2c_WaitAck(void)
{
	uint8_t re;

	I2C_SDA_1();	/* CPUÊÍ·ÅSDA×ÜÏß */
	i2c_Delay();
	I2C_SCL_1();	/* CPUÇý¶¯SCL = 1, ŽËÊ±Æ÷Œþ»á·µ»ØACKÓŠŽð */
	i2c_Delay();
	if (I2C_SDA_READ())	/* CPU¶ÁÈ¡SDA¿ÚÏß×ŽÌ¬ */
	{
		re = 1;
	}
	else
	{
		re = 0;
	}
	I2C_SCL_0();
	i2c_Delay();
	return re;
}


void i2c_Ack(void)
{
	I2C_SDA_0();	/* CPUÇý¶¯SDA = 0 */
	i2c_Delay();
	I2C_SCL_1();	/* CPU²úÉú1žöÊ±ÖÓ */
	i2c_Delay();
	I2C_SCL_0();
	i2c_Delay();
	I2C_SDA_1();	/* CPUÊÍ·ÅSDA×ÜÏß */
}


void i2c_NAck(void)
{
	I2C_SDA_1();	/* CPUÇý¶¯SDA = 1 */
	i2c_Delay();
	I2C_SCL_1();	/* CPU²úÉú1žöÊ±ÖÓ */
	i2c_Delay();
	I2C_SCL_0();
	i2c_Delay();
}


uint8_t i2c_CheckDevice(uint8_t _Address)
{
	uint8_t ucAck;

	if (I2C_SDA_READ() && I2C_SCL_READ())
	{
		i2c_Start();		/* ·¢ËÍÆô¶¯ÐÅºÅ */

		/* ·¢ËÍÉè±žµØÖ·+¶ÁÐŽ¿ØÖÆbit£š0 = w£¬ 1 = r) bit7 ÏÈŽ« */
		i2c_SendByte(_Address | I2C_WR);
		ucAck = i2c_WaitAck();	/* Œì²âÉè±žµÄACKÓŠŽð */

		i2c_Stop();			/* ·¢ËÍÍ£Ö¹ÐÅºÅ */

		return ucAck;
	}
	return 1;	/* I2C×ÜÏßÒì³£ */
}
