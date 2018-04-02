#ifndef _SYNC_H_
#define _SYNC_H_
#include <netinet/in.h>

#define SERVER_ADDR "123.206.64.174"
#define DATAIN_ADDR "/api/DataSync/"
#define PORT "7777"
#define MSGSIZE 1024  //收发缓冲区的大小

class NetworkSync {
private:
  char * Uuid;
  char buff[MSGSIZE];
  struct sockaddr_in server;

public:
  // NetworkSync ();
  // virtual ~NetworkSync ();
  void InitConnection();
  int SendToServer(
  const char * uuid,
  unsigned int HeartRate,
  unsigned int SpO2,
  unsigned int Temperature,
  unsigned int Humidity,
  const char * Weather,
  const char * UsageTime);
};
int syncMain(
  const char * uuid,
  unsigned int HeartRate,
  unsigned int SpO2,
  unsigned int Temperature,
  unsigned int Humidity,
  const char * Weather,
  const char * UsageTime
);
#endif
