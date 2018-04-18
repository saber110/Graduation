#!/bin/bash
path=$(cd `dirname $0`; pwd)
pathOfInternet="/etc/network/if-up.d/"
system=`uname -a`
result=$(echo $system | grep "raspberrypi")
if [ "$result" != "" ]; then
  mv ClientRunAfterInternetConnect.sh pathOfInternet
else
  # run python
  cd $path/server
  python Graduation.py > $path/log/PythonServer.log &
  # run CmdDistribution
  cd $path/server/CmdDistribution/
  ./CmdDistribute > $path/log/CmdDistribute.log &
  # run PortDistribution
  cd $path/server/PortDistribution
  ./PortDistribute > $path/log/PortDistribute.log&
fi
