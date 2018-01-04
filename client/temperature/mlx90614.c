#include <stdio.h>
#include <wiringPi.h>
#include "mlx90614.h"



//��ʼ״̬
void start()
{
	pinMode(SDA,OUTPUT);
	//pinMode(SCL,OUTPUT);
	digitalWrite(SDA,1);
	delayMicroseconds(5);
	digitalWrite(SCL,1);
	delayMicroseconds(5);//��ֹ����ʼ״̬���߿���ʱ������������4.7us
	digitalWrite(SDA,0);
	delayMicroseconds(5);//����4usΪ��Сֵ
	digitalWrite(SCL,0);
	delayMicroseconds(5);

}
//��ֹ״̬
void stop()
{
	pinMode(SDA,OUTPUT);
	//pinMode(SCL,OUTPUT);
	digitalWrite(SCL,0);
	delayMicroseconds(5);
	digitalWrite(SDA,0);
	delayMicroseconds(5);
	digitalWrite(SCL,1);
	delayMicroseconds(5);//����4usΪ��Сֵ
	digitalWrite(SDA,1);
}
//����һ��λ
void write_bit(unsigned char bit)
{
	pinMode(SDA,OUTPUT);
	//pinMode(SCL,OUTPUT);
	if(bit==0)
		digitalWrite(SDA,0);
	else
		digitalWrite(SDA,1);
	delayMicroseconds(2);
	digitalWrite(SCL,1);
	delayMicroseconds(4);
	digitalWrite(SCL,0);
	delayMicroseconds(2);
}
//��ȡһ���ֽ�
unsigned char read_bit()
{
	unsigned char bit;
	pinMode(SDA,INPUT);
	//pinMode(SCL,OUTPUT);
	delayMicroseconds(2);
	digitalWrite(SCL,1);
	delayMicroseconds(2);
	if(digitalRead(SDA)==0)
		bit=0;
	else
		bit=1;
	delayMicroseconds(2);
	digitalWrite(SCL,0);
	delayMicroseconds(2);
	return bit;
}
//����һ���ֽ�
unsigned char write_byte(unsigned char byte)
{
	char i;
	unsigned char bit;
	for(i=0;i<8;i++)
	{
		if(byte&0x80)
			bit=1;
		else
			bit=0;
		write_bit(bit);
		//printf("%d",bit);
		byte=byte<<1;
	}
	//printf("\n");
	bit=read_bit();
	return bit;
}
//����һ���ֽ�
unsigned char read_byte(unsigned char ack)
{

	unsigned char byte=0x00;
	unsigned char  i;
	for(i=0;i<8;i++)
	{
		unsigned char bit;
		bit=read_bit();
		if(bit==0)
		{
			byte<<=1;
			byte&=0xfe;
		}
		else
		{
			byte<<=1;
			byte|=0x01;
		}
	}
	write_bit(ack);
	//printf("%d\n",byte);
	return byte;


}
//PEC�ļ���
unsigned char PEC_cal(unsigned char a[],char n)
{
	unsigned char crc[6];
	char Bitposition=47;
	char shift;
	unsigned char i;
	unsigned char j;
	unsigned char temp;
	do
	{
		crc[5]=0;
		crc[4]=0;
		crc[3]=0;
		crc[2]=0;
		crc[1]=0x01;
		crc[0]=0x07;
		Bitposition=47;
		shift=0;
		i=5;
		j=0;
		// printf("Bitposition:%d\n",Bitposition);

		// printf("a[5]:%d\n",a[i]);

		// printf("(a[i]&(0x80>>j):%d\n",a[i]&(0x80>>j));
		// printf("(0&0xff):%d\n",(0&0xff));
		// printf("a[5]&(0x80>>j)==0:%d\n",((a[5]&(0x80>>j))==0));
		// printf("bool �ж�:%d\n",((a[5]&(0x80>>j))==0)&&(i>0));
		//��ѭ��δ����
		while((a[i]&(0x80>>j))==0&&i>0)
		{
			Bitposition--;
			if(j<7)
			{
				j++;
			}
			else
			{
				j=0x00;
				i--;

			}
			//printf("i:%d,j:%d\n",i,j);
			//printf("Bitposition:%d\n",Bitposition);
		}
		shift=Bitposition-8;

		//printf("shift:%d\n",shift);
		while(shift)
		{
			for(i=5;i<0xFF;i--)
			{
				if((crc[i-1]&0x80)&&(i>0))
					temp=1;
				else
					temp=0;
				crc[i]<<=1;
				crc[i]+=temp;
			}
			shift--;
			//printf("shift:%d\n",shift);
		}
		for(i=0;i<=5;i++)
		{
			a[i]^=crc[i];
		}
		//printf("%c\n",Bitposition);
	}while (Bitposition>8);
	return a[0];
}

//��EEPROM�ж�ȡ��ַ���ݺ���ROM�ж�ȡ�¶�����
unsigned int read_mem(unsigned char slave_add,unsigned char command)
{
	unsigned char Data_L;
	unsigned char Data_H;
	unsigned char PEC;
	unsigned int data;
	unsigned char a[6];
	unsigned char pecreg;
	unsigned char SLA;
	//char ErrorCounter= 0x00;
	SLA=(slave_add<<1)&0xff;

	//printf("SLA:%d,slave_add:%x",SLA,slave_add);
do{
begin:
	stop();
	delay(10);
	//-- ErrorCounter;                 //Pre-decrement ErrorCounter
        //if(!ErrorCounter)               //ErrorCounter=0?
       // {
        //   break;                      //Yes,go out from do-while{}
      // 	}
	start();

	//prcharf("1\n");
	if(write_byte(SLA))
	{
		printf("1\n");
		stop();
		goto begin;
	}


	if(write_byte(command))
	{
		printf("2\n");
		stop();
		goto begin;
	}
	start();

	if(write_byte(SLA+1))
	{
		printf("3\n");
		stop();
		goto begin;
	}
	Data_L=read_byte(0);
	Data_H=read_byte(0);
	PEC=read_byte(1);
	stop();
	//printf("%d\n",Data_L);
	//printf("%d\n",Data_H);
	//printf("%d\n",PEC);

	a[5]=(SLA);
	a[4]=command;
	a[3]=(SLA+1);
	a[2]=Data_L;
	a[1]=Data_H;
	a[0]=0;
//printf("5\n");
	pecreg=PEC_cal(a,6);
	//printf("%d\n",pecreg);
}while(PEC!=pecreg);


	data=(Data_H*256)+Data_L;
	//printf("%d\n",data);
	return data;
}

void getMLX90614(void)
{
	unsigned char address;
	int data;
	int tem;
	wiringPiSetup();
	pinMode(SCL,OUTPUT);
	pinMode(SDA,OUTPUT);
	digitalWrite(SDA,1);
	digitalWrite(SCL,1);
	delayMicroseconds(4);
	digitalWrite(SCL,0);
	delay(4);
	digitalWrite(SCL,1);

	data=read_mem(0x00,0x07);
	tem=data*0.02-273.15;
	printf("%d\n",tem);
}


// //������
// char main(void)
// {
// 	unsigned char address;
// 	int data;
// 	int tem;
// 	wiringPiSetup();
// 	pinMode(SCL,OUTPUT);
// 	pinMode(SDA,OUTPUT);
// 	digitalWrite(SDA,1);
// 	digitalWrite(SCL,1);
// 	delayMicroseconds(4);
// 	digitalWrite(SCL,0);
// 	delay(4);
// 	digitalWrite(SCL,1);
// 	while(1)
// 	{
// 		data=read_mem(0x00,0x07);
// 		//printf("%d\n",data);
// 		printf("kaishicewen\n");
// 		tem=data*0.02-273.15;
// 		printf("%d\n",tem);
// 		delay(100);
// 	}
//
// 	return 0;
// }
