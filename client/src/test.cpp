#include <iostream>
#include <cstring>
#include "sync.h"
using namespace std;

int main() {
  NetworkSync sync;
  string Weather = "晴";
  string shijian = "20110809";
  string uuid = "UuidExample";
  sync.InitConnection();
  sync.SendToServer(uuid.c_str(),2,3,4,5, Weather.c_str(),shijian.c_str());
  return 0;
}
