#include "stdio.h"
#include "wiringPi.h"

#define out 1

int main_hcsr501()
{
	unsigned char i;
	wiringPiSetup();
	pinMode(out,OUTPUT);
	digitalWrite(out,0);
	delay(6000);
	pinMode(out,INPUT);
	while(1)
	{
		i = digitalRead(out);
		printf("%d\n",i);
		delay(100);
	}
}
