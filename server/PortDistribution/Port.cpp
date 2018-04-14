#include <iostream>
#include <string>
#include <cstring>
#include <cstdio>
#include <cstdlib>
#include "mysqlF.h"
#include "PortAll.h"

using namespace std;
// 分配完成后注册到mysql
void PortAll::PortRegister(int port, string uuid)
{
  char cmd[100] = {0};
  MysqlOpt mysql;
  mysql.mysql_ready();
  snprintf(cmd, 100, mysqlCmd, port, uuid.c_str());
  mysql.cvpn_mysql_execute(cmd);
  mysql.cvpn_mysql_close();
}

// 验证所需要的port是否可用  lsof -i:port
// 控制最大连接数量
bool PortAll::PortValidation(int port)
{
  FILE *fstream = NULL;
  char buff[1024];
  memset(buff, 0, sizeof(buff));
  char cmd[100] = {0};

  if(port < MAXPORT - CLIENTSLIMITS)
    return false;
  snprintf(cmd, 100, "%s%d","lsof -i:",port);
  // cout << "port check cmd " << cmd << endl;

  if(NULL == (fstream = popen(cmd,"r")))
  {
      perror("error ");
      return false;
  }
  fgets(buff,1024,fstream);
  if(strlen(buff) == 0)
    return true;
  else
    return false;

  pclose(fstream);
}

// 随机产生端口
int PortAll::PortGenerator()
{
  // 产生[CLIENTSLIMITS, MAXPORT)的随机数
  int port = rand()%(MAXPORT - CLIENTSLIMITS) + CLIENTSLIMITS;
  // cout << "------------------------------\r\n" << "port " << port <<endl<<"--------------------------------" << endl;
  return port;
}
