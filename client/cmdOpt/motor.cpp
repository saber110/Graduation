#include <wiringPi.h>
#include "motor.h"

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
  pwmWrite(PWM, value);
}

void MotorStop()
{
  MotorDuty(0);
}
