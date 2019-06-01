#!/bin/bash
# 每隔60s测试一次网络状态，输出为2的时候需要重新建立反向代理
path=$(cd `dirname $0`; pwd)
system=`$path/client/networkStatus/NetworkStatus 1`
while true ; do
  if [ "$system" = "2" ]; then
    # run ssh reserve proxy
    cd $path/client/ReserveProxyPort
    port=`./PortApply`
    ssh -N -f -R $port:localhost:3333 root@139.180.142.16 -i /home/pi/.ssh/graduate > $path/log/ReserveProxyPort.log &
  fi
  sleep 1
  system=`$path/client/networkStatus/NetworkStatus $system`
done
