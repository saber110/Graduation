#ifndef _SERVER_H
#define _SERVER_H

#define SERVPORT 33330   // 服务器监听端口号
#define BACKLOG 10  // 最大同时请求数
#define MAXDATASIZE 1000
#define UUIDLENGTH 15
#define CMDLENGTH  2

void Responce(int sockfd, const char * msg);
void Motion(int sock_fd, char *buff, char *UuidRecv, char *cmd);
void Menu(int cmd);
bool validate(const char *uuid, const char* cmd);
#endif
