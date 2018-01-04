#include <stdio.h>
#include <wiringPi.h>

#define SDA 17//��GPIO_7��MLX90614��SDA����
#define SCL 4//��GPIO_0��MLX90614��SCL����

//��ʼ״̬
void start()
{
	pinMode(SDA,OUTPUT);
	pinMode(SCL,OUTPUT);
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
	pinMode(SCL,OUTPUT);
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
	pinMode(SCL,OUTPUT);
	if(bit==0)
		digitalWrite(SDA,0);
	else
		digitalWrite(SDA,1);
	delayMicroseconds(3);
	digitalWrite(SCL,1);
	delayMicroseconds(4);
	digitalWrite(SCL,0);
	delayMicroseconds(4);
}
//��ȡһ���ֽ�
unsigned char read_bit()
{
	unsigned char bit;
	pinMode(SDA,INPUT);
	pinMode(SCL,OUTPUT);
	digitalWrite(SCL,1);
	delayMicroseconds(2);
	if(digitalRead(SDA)==0)
		bit=0;
	else
		bit=1;
	delayMicroseconds(2);
	digitalWrite(SCL,0);
	delayMicroseconds(4);
	return bit;
}
//Ӧ��
unsigned char slave_ack()
{
	unsigned char i;
	unsigned char ack;
	pinMode(SDA,INPUT);
	pinMode(SCL,OUTPUT);
	digitalWrite(SCL,1);
	delayMicroseconds(2);
	i=digitalRead(SDA);
	if(i==0)
		ack=1;
	else
		ack=0;
	delayMicroseconds(2);
	delayMicroseconds(4);
	//printf("%d\n",ack);
	//delay(5);
	return ack;
}
//����һ���ֽ�
void write_byte(unsigned char byte)
{
	int i;
	unsigned char bit;
	for(i=0;i<8;i++)
	{
		if(byte&0x80)
			bit=1;
		else
			bit=0;
		write_bit(bit);
		byte=byte<<1;
	}
}
//����һ���ֽ�
unsigned char read_byte()
{
	unsigned char byte;
	int i;
	for(i=0;i<8;i++)
	{
		unsigned char bit;
		bit=read_bit();
		if(bit!=0)
		{
			byte<<=1;
			byte|=0x01;
		}
		else
		{
			byte<<=1;
			byte&=0xfe;
		}
	}
	write_bit(0);
	return byte;

}
//PEC�ļ���
unsigned char PEC_cal(unsigned char a[],int n)
{
	unsigned char crc[6];
	int Bitposition=47;
	unsigned char shift;
	int i;
	int j;
	int temp;
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
		while(a[i]&(0x80>>j)==0&&(i>0))
		{
			Bitposition--;
			if(i<7)
			{
				j++;
			}
			else
			{
				j=0x00;
				i--;
			}
		}
		shift=Bitposition-8;
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
		}
		for(i=0;i<=5;i++)
		{
			a[i]^=crc[i];
		}
	}while (Bitposition>8);
	return a[0];
}

//��EEPROM�ж�ȡ��ַ���ݺ���ROM�ж�ȡ�¶�����
unsigned long int read_mem(unsigned char slave_add,unsigned char command)
{
	unsigned char Data_L;
	unsigned char Data_H;
	unsigned char PEC;
	unsigned long int data;
	unsigned char a[6];
	unsigned char pecreg;
	unsigned char nack;
	unsigned char SLA;
	SLA=(slave_add<<1);
begin:
	start();
	write_byte(SLA);
	if(slave_ack()==0)
	{
		//printf("1\n");
		stop();
		goto begin;
	}

	write_byte(command);
	if(slave_ack()==0)
	{
		//printf("2\n");
		stop();
		goto begin;
	}
	start();
	write_byte(SLA+1);
	if(slave_ack()==0)
	{
		//printf("3\n");
		stop();
		goto begin;
	}
	Data_L=read_byte();
	Data_H=read_byte();
	PEC=read_byte(nack);
	if(nack==1)
	{
		//printf("4\n");
		stop();
		goto begin;
	}
	stop();

	a[5]=(SLA);
	a[4]=command;
	a[3]=(SLA+1);
	a[2]=Data_L;
	a[1]=Data_H;
	a[0]=0;


	pecreg=PEC_cal(a,6);
	if(PEC==pecreg)
		nack=0;
	else
		nack=1;
	data=(Data_H*256)+Data_L;
	return data;
}
//������
int main(void)
{
	unsigned char address;
	unsigned long int data;
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
	while(1)
	{
		/*address=read_mem(0x00,0x2E);
		//printf("%c\n",address);
		data=read_mem(address,0x07);
		printf("kaishicewen\n");
		tem=data*0.02-237.15;
		printf("%d",tem);
		delay(1000);*/
	}

	return 0;
}
