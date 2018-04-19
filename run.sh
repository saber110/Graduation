#!/bin/bash
path=$(cd `dirname $0`; pwd)
system=`uname -a`
result=$(echo $system | grep "raspberrypi")
if [ "$result" != "" ]; then
  cd $path
  ./ReserveProxy.sh &
  # run CMD parse
  cd $path/client/cmdOpt
  ./cmdparse >> $path/log/cmdparse.log &
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
