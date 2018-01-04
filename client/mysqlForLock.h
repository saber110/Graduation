#ifndef  _MYSQL_LOCK_
#define  _MYSQL_LOCK_

#define mysql  t_mysql        //mysql句柄
#define host_name   "localhost"    //数据库服务器地址
#define username    "username"         //数据库用户名
#define password    "password"     //数据库密码
#define db_name     "compare"           //数据库名
#define port        3306           //数据库端口
#define record      "|"
#define field       "."

extern MYSQL_RES *res;
extern MYSQL_ROW row;
extern MYSQL *t_mysql;
extern char * mysqlReturn;
int mysql_ready();

int cvpn_mysql_init(MYSQL *conn_ptr, const char *host, const char *user, const char *    pwd, const char *db);
int cvpn_mysql_close(MYSQL *conn_ptr);
char * cvpn_mysql_select(MYSQL *conn_ptr, const char *sql);
int cvpn_mysql_execute(MYSQL *conn_ptr, const char *sql);

#endif
