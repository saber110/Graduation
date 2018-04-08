#ifndef _DHT11_H_
#define _DHT11_H_

typedef unsigned char uint8;
typedef unsigned int  uint16;
typedef unsigned long uint32;

#define HIGH_TIME       32
#define pinNumber       1  //use gpio1 to read data
#define TEMPERATURE     0
#define HUMIDITY        1

uint8 readSensorData(void);
void getDHT11Result(int * DHT11Temp, int * Humidity);
#endif
