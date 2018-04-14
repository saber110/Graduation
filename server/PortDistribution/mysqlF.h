#ifndef  _MYSQL_LOCK_
#define  _MYSQL_LOCK_

#include <mysql/mysql.h>

#define mysql  t_mysql        //mysql句柄
#define host_name   "127.0.0.1"    //数据库服务器地址
#define username    "root"         //数据库用户名
#define password    "yycx1996"     //数据库密码
#define db_name     "SmartChair"   //数据库名
#define mysqlPort   3306           //数据库端口
#define record      "|"
#define field       "."

class MysqlOpt
{
private:
  MYSQL_RES *res;
  MYSQL_ROW row;
  MYSQL *t_mysql;
  char * mysqlReturn;
  int cvpn_mysql_init(MYSQL *conn_ptr, const char *host, const char *user, const char *    pwd, const char *db);
public:
  int mysql_ready();
  int cvpn_mysql_close();
  char * cvpn_mysql_select(const char *sql);
  int cvpn_mysql_execute(const char *sql);
};

#endif
