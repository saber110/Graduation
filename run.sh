#!/bin/bash
path=$(cd `dirname $0`; pwd)

system=`uname -a`
result=$(echo $system | grep "raspberrypi")
if [ "$result" != "" ]; then
  # run CMD parse
  cd $path/client/cmdOpt
  ./cmdparse > cmdparse.log &
  # run ssh reserve proxy
  cd $path/client/ReserveProxyPort
  port=`./PortApply`
  ssh -N -f -R $port:localhost:3333 ubuntu@123.206.64.174 -i /home/pi/laptop_win10 > ReserveProxyPort.log &
else
  # run python
  cd $path/server
  python Graduation.py > PythonServer.log &
  # run CmdDistribution
  cd $path/server/CmdDistribution/
  ./CmdDistribute > CmdDistribute.log &
  # run PortDistribution
  cd $path/server/PortDistribution
  ./PortDistribute > PortDistribute.log&
fi
