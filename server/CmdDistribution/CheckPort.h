#ifndef _CHECKPORT_H_
#define _CHECKPORT_H_
const char mysqlCmd[] = "select Port from User where uid = %s";
class CheckPort
{
public:
  // CheckPort();
  int getPort(const char * uuid);
};
#endif
