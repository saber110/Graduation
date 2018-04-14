#ifndef _PORTALL_H_
#define _PORTALL_H_

#include <string>
#define MAXPORT 65535
#define CLIENTSLIMITS (MAXPORT - 2000)    // 最大允许两千个客户端连接
const char mysqlCmd[] = "update User set Port =%d WHERE uid =%s";

class PortAll
{
private:

public:
  int PortGenerator();
  bool PortValidation(int port);
  void PortRegister(int port, std::string uuid);
};

#endif
