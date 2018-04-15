#include <iostream>
#include <cstdlib>
#include <cstdio>
#include "mysqlF.h"
#include "CheckPort.h"

using namespace std;

int CheckPort::getPort(const char * uuid)
{
  char cmd[100] = {0};
  MysqlOpt mysql;
  mysql.mysql_ready();
  snprintf(cmd, 100, mysqlCmd, uuid);
  char *port = mysql.cvpn_mysql_select(cmd);
  mysql.cvpn_mysql_close();
  return atoi(port);
}
