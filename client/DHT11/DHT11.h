#ifndef _DHT11_H_
#define _DHT11_H_

typedef unsigned char uint8;
typedef unsigned int  uint16;
typedef unsigned long uint32;

#define HIGH_TIME       32
#define pinNumber       25  //use gpio1 to read data
#define temperature     0
#define humidity        1

extern float DHT11Result[2];
extern uint8 readSensorData(void);
extern void getResult(void);
#endif
