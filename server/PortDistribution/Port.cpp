#include <iostream>
#include <string>
#include <cstring>
#include <cstdio>
#include <cstdlib>
#include "mysqlF.h"
#include "PortAll.h"

using namespace std;
// 分配完成后注册到mysql
// 释放该设备本来占用的端口
void PortAll::PortRegister(int port, string uuid)
{
  char cmd[100] = {0};
  MysqlOpt mysql;
  mysql.mysql_ready();
  snprintf(cmd, 100, mysqlFindPortCmd, uuid.c_str());
  char * PortBefore = mysql.cvpn_mysql_select(cmd);
  memset(cmd, 0, sizeof(cmd));
  snprintf(cmd, 100, mysqlCmd, port, uuid.c_str());
  mysql.cvpn_mysql_execute(cmd);
  mysql.cvpn_mysql_close();
  PortCycleByPID(FindPIDByPort(atoi(PortBefore)));
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
  return rand()%(MAXPORT - CLIENTSLIMITS) + CLIENTSLIMITS;
}

int PortAll::VectorToInt(vector<int> v)
{
    reverse(v.begin(), v.end());
    int decimal = 1;
    int total = 0;
    for (int i = 0; i < v.size(); i++)
    {
        total += v[i] * decimal;
        decimal *= 10;
    }
    return total;
}

int PortAll::FindPIDByPort(int port)
{
  FILE *fstream = NULL;
  vector<int> pid;
  bool FirstNum = false;
  char buff[1024] = {0};
  string cmd = "lsof -i:";
  cmd.append(to_string(port));
  if(NULL == (fstream = popen(cmd.c_str(),"r")))
  {
      perror("error ");
      return false;
  }
  fgets(buff,1024,fstream);  // 删除标题栏
  fgets(buff,1024,fstream);
  cout << "buff\n" << buff << endl;
  for(int i = 0; i < strlen(buff); i++)
  {
    if(buff[i] > 47 && buff[i] < 58)
    {
      FirstNum = true;
      pid.push_back(buff[i] - 48);
    }
    else
    {
      if(FirstNum) break;
      else continue;
    }
  }
  return VectorToInt(pid);
}

bool PortAll::PortCycleByPID(int pid)
{
  FILE *fstream = NULL;
  string cmd = "kill ";
  if(pid == 0)
    return true;                 // 该端口本来没有被占用
  cmd.append(to_string(pid));
  if(NULL == (fstream = popen(cmd.c_str(),"r")))
  {
      perror("error ");
      return false;
  }
  return true;
}
