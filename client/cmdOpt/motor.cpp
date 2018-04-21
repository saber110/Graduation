#include <wiringPi.h>
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
  snprintf(command, sizeof(command),"%s %s %s", TTS, "开始按摩", "&");
  pwmWrite(PWM, value);
}

void MotorStop()
{
  char command[100] = {0};
  snprintf(command, sizeof(command),"%s %s %s", TTS, "按摩结束", "&");
  MotorDuty(0);
}
