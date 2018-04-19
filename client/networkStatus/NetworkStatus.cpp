#include <iostream>
#include <cstdio>
#include <netdb.h>
#include <cstring>
#include <cstdlib>
#define PORT 80
#define CONNECTED 3
#define OUTOFCONN 1
#define AGAINCONN 2

// 联网则返回0，否则返回-1；
int TestNetwork()
{
    struct hostent* host = NULL;
    host = gethostbyname("www.baidu.com");
    if(NULL == host)
    {
        return OUTOFCONN;
    }
    ///定义sockfd
     int sock_cli = -1;
     sock_cli = socket(AF_INET,SOCK_STREAM, 0);

     ///定义sockaddr_in
     struct sockaddr_in servaddr;
     memset(&servaddr, 0, sizeof(servaddr));
     servaddr.sin_family = AF_INET;
     servaddr.sin_port = htons(PORT);  ///服务器端口
     //servaddr.sin_addr.s_addr = inet_addr();  ///服务器ip
     servaddr.sin_addr = *((struct in_addr *)host->h_addr);

     ///连接服务器，成功返回0，错误返回-1
     if (connect(sock_cli, (struct sockaddr *)&servaddr, sizeof(servaddr)) < 0)
     {
         return OUTOFCONN;
     }
     return CONNECTED;
}

int PrintCmd(int status)
{
  std::cout << status << '\n';
  return 0;
}
int main(int argc, char const *argv[])
{
  int temp = TestNetwork();
  if(temp == CONNECTED && atoi(argv[1]) == OUTOFCONN)
  {
    return PrintCmd(AGAINCONN);
  }
  else if(temp == CONNECTED && atoi(argv[1]) == AGAINCONN)
  {
    return PrintCmd(CONNECTED);
  }
  else if(temp == CONNECTED && atoi(argv[1]) == CONNECTED)
  {
    return PrintCmd(CONNECTED);
  }
  else if(temp == OUTOFCONN && atoi(argv[1]) == CONNECTED)
  {
    return PrintCmd(OUTOFCONN);
  }
  return PrintCmd(OUTOFCONN);
}
