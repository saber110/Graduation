#ifndef _MOTOR_H_
#define _MOTOR_H_

#define PWM 1
#define STOPMOTOR 10    // 马达停止
#define MOTORONE  20    // 马达一档运行
#define MOTORTWO  40    // 马达二档运行
#define MOTORTHR  60    // 马达三档运行
#define GradeToDuty 10  // 档和占空比的比例系数

void MotorInit();
void MotorDuty(int value);
void MotorStop();

#endif
