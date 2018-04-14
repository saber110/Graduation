#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <cerrno>
#include <cstring>
#include <sys/types.h>
#include <netinet/in.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>
#include "server.h"

const static char http_html_hdr[] = "HTTP/1.1 200 OK\r\nContent-type: text/html\r\nAccess-Control-Allow-Origin: *\r\n\r\n";
using namespace std;

int main()
{
    int sock_fd,client_fd;  // sock_fd：监听socket；client_fd：数据传输socket
    int sin_size;
    char buff[MAXDATASIZE] = {0};
    struct sockaddr_in my_addr; // 本机地址信息
    struct sockaddr_in remote_addr; // 客户端地址信息

    if((sock_fd = socket(AF_INET, SOCK_STREAM, 0)) == -1) {
        perror("socket创建出错！");
        exit(1);
    }

    long flag = 1;
    setsockopt(sock_fd, SOL_SOCKET, SO_REUSEADDR, (char *)&flag, sizeof(flag));

    my_addr.sin_family=AF_INET;
    my_addr.sin_port=htons(SERVPORT);
    my_addr.sin_addr.s_addr = INADDR_ANY;
    bzero(&(my_addr.sin_zero),8);
    if(bind(sock_fd, (struct sockaddr *)&my_addr, sizeof(struct sockaddr)) == -1) {
        perror("bind出错！");
        exit(1);
    }
    if(listen(sock_fd, BACKLOG) == -1) {
        perror("listen出错！");
        exit(1);
    }
    while(1) {
        sin_size = sizeof(struct sockaddr_in);
        if((client_fd = accept(sock_fd, (struct sockaddr *)&remote_addr, (socklen_t*)&sin_size)) == -1) {
            perror("accept出错");
            continue;
        }
        Motion(client_fd, buff);
        printf("received a connection from %s:%u\n", inet_ntoa(remote_addr.sin_addr), ntohs(remote_addr.sin_port));
        Responce(client_fd, "success\r\n");
        close(client_fd);
    }
    return 0;
}

void Responce(int sockfd, const char * msg)
{
  write(sockfd, http_html_hdr, strlen(http_html_hdr));
  write(sockfd, msg, strlen(msg));
}
// 根据请求作出相应响应
void Motion(int sock_fd, char *buff)
{
  read(sock_fd, buff, MAXDATASIZE);
  // 截取接口参数
  if(!strncmp(buff, "GET", 3))
  {
    char *param = buff + 5;
    char *space = strchr(param, ' ');
    *space = '\0';
    // Menu(atoi(param));
  }
}

// void Menu(int cmd)
// {
//   switch (cmd)
//   {
//     case STOPMOTOR: MotorStop(); break;
//     case MOTORONE:  MotorDuty(MOTORONE * GradeToDuty); break;
//     case MOTORTWO:  MotorDuty(MOTORTWO * GradeToDuty); break;
//     case MOTORTHR:  MotorDuty(MOTORTHR * GradeToDuty); break;
//     default:;;
//   }
// }
