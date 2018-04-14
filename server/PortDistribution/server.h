#ifndef _SERVER_H
#define _SERVER_H

#define SERVPORT 4444   // 服务器监听端口号
#define BACKLOG 10  // 最大同时请求数
#define MAXDATASIZE 1000
#define UUIDLENGTH 15

void Responce(int sockfd, const char * msg);
int Motion(int sock_fd, char *buff);
void Menu(int cmd);
#endif
