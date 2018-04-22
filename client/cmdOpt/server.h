#ifndef _SERVER_H
#define _SERVER_H

#define SERVPORT 3333   // 服务器监听端口号
#define BACKLOG 10  // 最大同时连接请求数
#define MAXDATASIZE 1000

void Responce(int sockfd, const char * msg);
void Motion(int sock_fd, char *buff);
void Menu(int cmd);
#endif
