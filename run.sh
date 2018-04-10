#!/bin/bash
path=$(cd `dirname $0`; pwd)

system=`uname -a`
result=$(echo $system | grep "raspberrypi")
if [ "$result" != "" ]; then
  # run CMD parse
  cd $path/client/CMDOPT
  ./cmdparse &
  # run ssh reserve proxy
  ssh -N -f -R 6565:localhost:3333 ubuntu@123.206.64.174 -i /home/pi/laptop_win10 &
else
  # run python
  cd $path/server
  python Graduation.py &
fi
