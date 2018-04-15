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
#include "CheckPort.h"
#include "CmdDistribution.h"
// 接收网页端的控制请求
// 查找应该转发到的端口并转发进而控制树莓派
const static char http_html_hdr[] = "HTTP/1.1 200 OK\r\nContent-type: text/html\r\nAccess-Control-Allow-Origin: *\r\n\r\n";
using namespace std;

int main()
{
    int sock_fd,client_fd;  // sock_fd：监听socket；client_fd：数据传输socket
    int sin_size, port;
    char buff[MAXDATASIZE] = {0};
    struct sockaddr_in my_addr; // 本机地址信息
    struct sockaddr_in remote_addr; // 客户端地址信息
    char UUID[UUIDLENGTH + 1] = {0}, CMD[CMDLENGTH + 1] = {0};

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
        printf("received a connection from %s:%u\n", inet_ntoa(remote_addr.sin_addr), ntohs(remote_addr.sin_port));
        Motion(client_fd, buff, UUID, CMD);
        if(validate(UUID, CMD))
        {
          CheckPort CPort;
          CmdDistribution Cmd;
          int cPort = CPort.getPort(UUID);
          Cmd.SendCmd(cPort, CMD);
          cout << "UUID"<< UUID << "\tCMD " << CMD << "\t port"<< cPort<< endl;
        }

        memset(buff, 0, sizeof(buff));
        snprintf(buff, UUIDLENGTH, "%d", port);
        Responce(client_fd, buff);
        close(client_fd);
    }
    return 0;
}

void Responce(int sockfd, const char * msg)
{
  write(sockfd, http_html_hdr, strlen(http_html_hdr));
  write(sockfd, msg, strlen(msg));
  write(sockfd, "\r\n", strlen("\r\n"));
}
// 根据请求作出相应响应
void Motion(int sock_fd, char *buff, char *UuidRecv, char *cmd)
{
  read(sock_fd, buff, MAXDATASIZE);
  // 截取接口参数
  if(!strncmp(buff, "GET", 3))
  {
    strncpy(UuidRecv, buff + 5, UUIDLENGTH); // 跳过GET后面的第一个空格和第一个斜杠
    UuidRecv[UUIDLENGTH] = '\0';
    strncpy(cmd, buff + UUIDLENGTH + 6, CMDLENGTH);
    cmd[CMDLENGTH] = '\0';
  }
}
// uuid和命令校验
bool validate(const char *uuid, const char* cmd)
{
  if(strlen(uuid) != UUIDLENGTH || strlen(cmd) != CMDLENGTH)
    return false;

  for(int i = 0; i < UUIDLENGTH; i++)
  {
    if(uuid[i] < 48 || uuid[i] > 57)
      return false;
  }
  for(int i = 0; i < CMDLENGTH; i++)
  {
    if(cmd[i] < 48 || cmd[i] > 57)
      return false;
  }
  return true;
}
