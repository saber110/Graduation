#ifndef _PORTALL_H_
#define _PORTALL_H_

#include <string>
#include <vector>
#include <algorithm>
#define MAXPORT 65535
#define CLIENTSLIMITS (MAXPORT - 2000)    // 最大允许两千个客户端连接
const char mysqlCmd[] = "update User set Port =%d WHERE uid =%s";
const char mysqlFindPortCmd[] = "SELECT Port FROM User where uid =%s";

class PortAll
{
private:
  int VectorToInt(std::vector<int> v);
  int FindPIDByPort(int port);
  bool PortCycleByPID(int pid);
public:
  int PortGenerator();
  bool PortValidation(int port);
  void PortRegister(int port, std::string uuid);
};

#endif
