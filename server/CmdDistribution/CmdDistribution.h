#ifndef _PORTAPPLY_H_
#define _PORTAPPLY_H_

#define SERVER_ADDR "127.0.0.1"
#define PORT "4444"
#define MSGSIZE 1024  //收发缓冲区的大小

class CmdDistribution
{
private:
  char buff[MSGSIZE];
  struct sockaddr_in server;
public:
  int SendCmd(const int port, const char * cmd);
};
#endif
