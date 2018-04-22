#!/bin/bash
path=$(cd `dirname $0`; pwd)
system=`uname -a`
result=$(echo $system | grep "raspberrypi")
if [ "$result" != "" ]; then
  # 保证导入 LD_LIBRARY_PATH 环境变量
  ldconfig
  cd $path
  ./ReserveProxy.sh &
  # run CMD parse
  cd $path/client/cmdOpt
  ./cmdparse
else
  # run python
  cd $path/server
  python Graduation.py >> $path/log/PythonServer.log &
  # run CmdDistribution
  cd $path/server/CmdDistribution/
  ./CmdDistribute >> $path/log/CmdDistribute.log &
  # run PortDistribution
  cd $path/server/PortDistribution
  ./PortDistribute >> $path/log/PortDistribute.log&
fi
