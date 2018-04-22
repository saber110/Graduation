#include <iostream>
#include <cstring>
#include <cstdlib>
#include <cstdio>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include "PortApply.h"
#include "Unique.h"
using namespace std;
class PortApply
{
private:
  char buff[MSGSIZE];
  struct sockaddr_in server;
public:
  PortApply()
  {
    memset(&server, '0', sizeof(server));
    server.sin_addr.s_addr = inet_addr(SERVER_ADDR);
    server.sin_family = AF_INET;
    server.sin_port = htons(atoi(PORT));
  }

  int getPort(const char * uuid)
  {
    int fd = -1;
    char PostHead[1024] = {0};
    char length[5] = {0};
    string Post = "GET ";
    string Host = "Host: ";
    string NewLine = "\r\n";

    fd = socket(AF_INET, SOCK_STREAM, 0);
    if(fd == -1)
    {
      perror("socket init error");
    }
    if(connect(fd, (struct sockaddr *)&server, sizeof(server)) < 0)
    {
      perror("connect server error");
    }

    strncat(PostHead, Post.c_str(), strlen(Post.c_str()) + 1);
    strncat(PostHead, uuid, strlen(uuid) + 1);
    strncat(PostHead, " ", strlen(" ") + 1);
    strncat(PostHead, NewLine.c_str(), strlen(NewLine.c_str()) + 1);
    strncat(PostHead, Host.c_str(), strlen(Host.c_str()) + 1);
    strncat(PostHead, SERVER_ADDR, strlen(SERVER_ADDR) + 1);
    strncat(PostHead, ":", 2);
    strncat(PostHead, PORT, strlen(PORT) + 1);
    strncat(PostHead, NewLine.c_str(), strlen(NewLine.c_str()) + 1);
    strncat(PostHead, NewLine.c_str(), strlen(NewLine.c_str()) + 1);

    if(send(fd, PostHead, strlen(PostHead), 0) == -1)
    {
      return -1;
    }

    memset(PostHead, 0, sizeof(PostHead));
    recv(fd, PostHead, sizeof(PostHead),0);
    cout << PostHead << endl;
    sleep(1);
    close(fd);
  }
};

int main()
{
  PortApply app;
  app.getPort(UUID);
  return 0;
}
