#include <wiringPi.h>
#include "motor.h"

void MotorInit()
{
  pinMode(pwm,PWM_OUTPUT);
  pwmSetMode(PWM_MODE_MS);
  pwmSetClock(192);
  pwmSetRange(200);
  pwmWrite(pwm, 0);
}

void MotorDuty(int value)
{
  pwmWrite(pwm, value);
}

void MotorStop()
{
  MotorDuty(0);
}
