#include <wiringPi.h>
#include <stdio.h>
#include <stdlib.h>
#include "DHT11.h"
#include "Unique.h"

uint32 databuf;
int DHT11Result[2] = {0};

void init(void)
{
  pinMode(pinNumber, OUTPUT); // set mode to output
  digitalWrite(pinNumber, 1); // output a high level
}

uint8 readSensorData(void)
{
    uint8 crc;
    uint8 i;

    pinMode(pinNumber,OUTPUT); // set mode to output
    digitalWrite(pinNumber, 0); // output a high level
    delay(25);
    digitalWrite(pinNumber, 1); // output a low level
    pinMode(pinNumber, INPUT); // set mode to input
    pullUpDnControl(pinNumber,PUD_UP);

    delayMicroseconds(27);
    if(digitalRead(pinNumber)==0) //SENSOR ANS
       {
         while(!digitalRead(pinNumber)); //wait to high

      for(i=0;i<32;i++)
       {
          while(digitalRead(pinNumber)); //data clock start
          while(!digitalRead(pinNumber)); //data start
          delayMicroseconds(HIGH_TIME);
          databuf*=2;
          if(digitalRead(pinNumber)==1) //1
          {
              databuf++;
          }
        }

      for(i=0;i<8;i++)
       {
       while(digitalRead(pinNumber)); //data clock start
       while(!digitalRead(pinNumber)); //data start
          delayMicroseconds(HIGH_TIME);
          crc*=2;
          if(digitalRead(pinNumber)==1) //1
           {
                crc++;
           }
        }
    return 1;
       }
   else
        {
        return 0;
         }
}

void getDHT11Result(int * DHT11Temp, int * Humidity)
{
  char command[200] = {0};
  init();
  while(readSensorData() == 0);
  DHT11Result[HUMIDITY]    = (databuf>>24)&0xff;
  DHT11Result[TEMPERATURE] = (databuf>>8)&0xff;  //只取整数部分
  databuf = 0;
  *DHT11Temp = DHT11Result[TEMPERATURE];
  *Humidity  = DHT11Result[HUMIDITY];
  snprintf(command,sizeof(command),"%s %s:%d。%s:%d %s",TTS, "现在的室内温度为", DHT11Result[TEMPERATURE],"现在的室内湿度为", DHT11Result[HUMIDITY],"&");
  // system(command);
}
// int main (void)
// {
//
//   init();
//
//   while(1) {
//     pinMode(pinNumber,OUTPUT); // set mode to output
//     digitalWrite(pinNumber, 1); // output a high level
//     delay(3000);
//     if(readSensorData())
//     {
//        printf("Congratulations ! Sensor data read ok!\n");
//        printf("RH:%d.%d\n",(databuf>>24)&0xff,(databuf>>16)&0xff);
//        printf("TMP:%d.%d\n",(databuf>>8)&0xff,databuf&0xff);
//        databuf=0;
//      }
//     else
//      {
//         printf("Sorry! Sensor dosent ans!\n");
//        databuf=0;
//       }
//   }
//   return 0;
// }
