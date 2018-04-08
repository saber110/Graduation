#include <iostream>
#include <unistd.h>
#include <arpa/inet.h>
#include <cstring>
#include "sync.h"
#include <stdlib.h>
#include <stdio.h>
using namespace std;
class NetworkSync {
private:
  char * Uuid;
  char buff[MSGSIZE];
  struct sockaddr_in server;

public:
  // NetworkSync ();
  // virtual ~NetworkSync ();
  void InitConnection()
  {
    memset(&server, '0', sizeof(server));
    server.sin_addr.s_addr = inet_addr(SERVER_ADDR);
    server.sin_family = AF_INET;
    server.sin_port = htons(atoi(PORT));
  }
  /**
   * @ return : -1 : fail, 0 : success
   *
   */

  int SendToServer(
  const char * uuid,
  unsigned int HeartRate,
  unsigned int SpO2,
  unsigned int Temperature,
  unsigned int Humidity,
  const char * Weather,
  const char * UsageTime)
  {
    int fd = -1;
    char PostHead[1024] = {0};
    char length[5] = {0};
    string Post = "GET ";
    string NewLine = "\r\n";
    string Host = "Host: ";
    string HTTPVersion = " HTTP/1.1";
    string ContentType = "Content-Type: application/x-www-form-urlencoded";
    string ContentLength = "Content-Length: ";

    fd = socket(AF_INET, SOCK_STREAM, 0);
    if(fd == -1)
    {
      perror("socket init error");
    }
    if(connect(fd, (struct sockaddr *)&server, sizeof(server)) < 0)
    {
      perror("connect server error");
    }

    memset(buff, 0, sizeof(buff));
    snprintf(buff, sizeof(buff),
              "%s/%d/%d/%d/%d/%s/%s",
              uuid,HeartRate, SpO2, Temperature, Humidity, Weather, UsageTime);

    strncat(PostHead, Post.c_str(), strlen(Post.c_str()) + 1);
    strncat(PostHead, DATAIN_ADDR, strlen(DATAIN_ADDR) + 1);
    strncat(PostHead, buff, 500);
    strncat(PostHead, HTTPVersion.c_str(), strlen(HTTPVersion.c_str()) + 1);
    strncat(PostHead, NewLine.c_str(), strlen(NewLine.c_str()) + 1);
    strncat(PostHead, Host.c_str(), strlen(Host.c_str()) + 1);
    strncat(PostHead, SERVER_ADDR, strlen(SERVER_ADDR) + 1);
    strncat(PostHead, ":", 2);
    strncat(PostHead, PORT, strlen(PORT) + 1);
    strncat(PostHead, NewLine.c_str(), strlen(NewLine.c_str()) + 1);
    strncat(PostHead, ContentType.c_str(), strlen(ContentType.c_str()) + 1);
    strncat(PostHead, NewLine.c_str(), strlen(NewLine.c_str()) + 1);
    strncat(PostHead, ContentLength.c_str(), strlen(ContentLength.c_str()) + 1);
    snprintf(length, sizeof(length), "%d", (int)(strlen(buff) + 1));
    strncat(PostHead, length, strlen(length) + 1);
    strncat(PostHead, "\r\n\r\n", 500);
    cout << PostHead << endl;

    if(send(fd, PostHead, strlen(PostHead), 0) == -1)
    {
      return -1;
    }

    memset(buff, 0, sizeof(buff));
    recv(fd, buff, sizeof(buff),0);
    cout << "recv: " << buff << endl;
    sleep(1);
    close(fd);
    return 0;
  }
};

extern int syncMain(
    const char * uuid,
    unsigned int HeartRate,
    unsigned int SpO2,
    unsigned int Temperature,
    unsigned int Humidity,
    const char * Weather,
    const char * UsageTime
)
{
  NetworkSync sync;
  sync.InitConnection();
  sync.SendToServer(uuid,HeartRate,SpO2,Temperature,Humidity, Weather,UsageTime);
  return 0;
}
