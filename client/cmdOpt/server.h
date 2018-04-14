#ifndef _SERVER_H
#define _SERVER_H

#define SERVPORT 3333   // 服务器监听端口号
#define BACKLOG 10  // 最大同时连接请求数
#define MAXDATASIZE 1000

#define STOPMOTOR 10    // 马达停止
#define MOTORONE  20    // 马达一档运行
#define MOTORTWO  40    // 马达二档运行
#define MOTORTHR  60    // 马达三档运行
#define GradeToDuty 10  // 档和占空比的比例系数

void Responce(int sockfd, const char * msg);
void Motion(int sock_fd, char *buff);
void Menu(int cmd);
#endif
