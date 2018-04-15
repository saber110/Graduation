#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <malloc.h>
#include "mysqlF.h"

// 用此gcc -o t test.c -Iusr/include/mysql -lmysqlclient命令编译，会出现错误：fatal error: mysql.h: 没有那个文件或目录

// 经查询是缺少libmysqlclient-dev

// 安装：sudo apt-get install libmysqlclient-dev sudo apt-get install libmysql++-dev

unsigned long *lengths;
char None[] = "NULL", Failure[] = "ERROR";

// 准备mysql环境

int MysqlOpt::mysql_ready()
{
	mysql = mysql_init(NULL);
	if(NULL == mysql)
	{
		printf("mysql init failed\n");
		return -1;
	}
								//* mysql  *host        *user    *passwd    *db        port
	if(! mysql_real_connect(mysql, host_name, username, password, db_name, mysqlPort, NULL, 0))
	{
		printf("%s\n",mysql_error(mysql));
    return -1;
	}
	return 0;
}
//init mysql and connect mysql
int MysqlOpt::cvpn_mysql_init(MYSQL *conn_ptr, const char *host, const char *user, const char *pwd, const char *db) {

    if ((conn_ptr = mysql_init(NULL)) == NULL) {
        fprintf(stderr, "mysql_init failed\n");
        return EXIT_FAILURE;
    }
    if (mysql_real_connect(conn_ptr, host, user, pwd, db, 3306, NULL, 0)) {
        printf("Connection success\n");
    } else {
        fprintf(stderr, "Connection failed\n");
    }
    return EXIT_SUCCESS;
}
//close MYSQL
int MysqlOpt::cvpn_mysql_close(){
    mysql_close(mysql);
    return EXIT_SUCCESS;
}

//selct mysql
//最好一个字段一个字段取非重复的记录
char * MysqlOpt::cvpn_mysql_select(const char *sql){

    MYSQL_RES *res_ptr;
    MYSQL_ROW sqlrow;
    int i, j;
		char validation = 0;
    int cvpn_yes = 1;
		int rowLength = 0;

    if (mysql_query(mysql, sql))
		{
        printf("SELECT error:%s\n",mysql_error(mysql));
        cvpn_yes = 0;
    }
		else
		{
      res_ptr = mysql_store_result(mysql);             //取出结果集
      if(res_ptr) {
          // printf("%lu Rows\n",(unsigned long)mysql_num_rows(res_ptr));
					j = mysql_num_fields(res_ptr);
          while((sqlrow = mysql_fetch_row(res_ptr)))
					{   //依次取出记录
							if(cvpn_yes != 2)
							{
									lengths = mysql_fetch_lengths(res_ptr);
									for(int a = 0;a < j; a ++)
									{
										 rowLength += lengths[a];
									}
									mysqlReturn = (char *)malloc(rowLength*sizeof(char));
									memset(mysqlReturn,0,rowLength*sizeof(char));
									cvpn_yes = 2;
							}

              for(i = 0; i < j; i++)
							{
									strcat(mysqlReturn,sqlrow[i]);
									// if(i < j-1)									//填写列分隔符
									// 		strcat(mysqlReturn,field);
							}
							// strcat(mysqlReturn,record);			//填写行分隔符
							validation = 1;
          }
					if(validation == 0)
					{
						return None;			//数据库里没有符合要求的数据
					}
          if (mysql_errno(mysql)) {
              fprintf(stderr,"Retrive error:%s\n",mysql_error(mysql));
              return Failure;
          }
      }
      mysql_free_result(res_ptr);
    }
	return mysqlReturn;
}
//insert and update and delete
int MysqlOpt::cvpn_mysql_execute(const char *sql){
    int res;
    int cvpn_yes = 1;
    res = mysql_query(mysql, sql);
    if (!res) {     //输出受影响的行数
        printf("%lu rows affected\n",(unsigned long)mysql_affected_rows(mysql));
    } else {       //打印出错误代码及详细信息
        fprintf(stderr, "Insert error %d: %sn",mysql_errno(mysql),mysql_error(mysql));
        cvpn_yes = 0;
    }
    if (cvpn_yes != 1){
        return EXIT_SUCCESS;
    }
    else {
        return EXIT_FAILURE;
    }

}
int main_mysql()
{
	MysqlOpt mysql1;
	mysql1.mysql_ready();
	printf("%s\n",mysql1.cvpn_mysql_select("select * from Photo where id = 3"));
	mysql1.cvpn_mysql_close();
	return 0;
}
