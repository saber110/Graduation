#!/bin/bash
# 每隔60s测试一次网络状态，输出为2的时候需要重新建立反向代理
path=$(cd `dirname $0`; pwd)
system=`./NetworkStatus 1`
while (( true )); do
  if [ "$system" = "2" ]; then
    # run ssh reserve proxy
    cd $path/client/ReserveProxyPort
    port=`./PortApply`
    ssh -N -f -R $port:localhost:3333 ubuntu@123.206.64.174 -i /home/pi/laptop_win10 > $path/log/ReserveProxyPort.log &
  fi
  sleep 60
  system=`./NetworkStatus $system`
done
