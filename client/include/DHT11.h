#ifndef _DHT11_H_
#define _DHT11_H_

typedef unsigned char uint8;
typedef unsigned int  uint16;
typedef unsigned long uint32;

#define HIGH_TIME       32
#define pinNumber       1  //use gpio1 to read data
#define temperature     0
#define humidity        1

int DHT11Result[2];
uint8 readSensorData(void);
void getDHT11Result(int * DHT11Temp, int * Humidity);
#endif
