#include <wiringPi.h>
#include <stdio.h>
#include <stdlib.h>
#include "motor.h"
#include "Unique.h"

void MotorInit()
{
  pinMode(PWM,PWM_OUTPUT);
  pwmSetMode(PWM_MODE_MS);
  pwmSetClock(192);
  pwmSetRange(200);
  pwmWrite(PWM, 0);
}

void MotorDuty(int value)
{
  char command[100] = {0};

  switch (value)
  {
    case MOTORONE:  snprintf(command, sizeof(command),"%s%s %s %s %s", ClientPATH, TTS, "temp.wav", "慢速按摩", "&"); break;
    case MOTORTWO:  snprintf(command, sizeof(command),"%s%s %s %s %s", ClientPATH, TTS, "temp.wav", "中速按摩", "&"); break;
    case MOTORTHR:  snprintf(command, sizeof(command),"%s%s %s %s %s", ClientPATH, TTS, "temp.wav", "快速按摩", "&"); break;
    default:;;
  }
  printf("%s\n", command);
  system(command);
  pwmWrite(PWM, value);
}

void MotorStop()
{
  char command[100] = {0};
  snprintf(command, sizeof(command),"%s%s %s %s %s", ClientPATH, TTS, "temp.wav", "按摩结束", "&");
  printf("%s\n", command);
  system(command);
  MotorDuty(0);
}
