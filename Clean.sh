#!/bin/bash
path=$(cd `dirname $0`; pwd)

cd $path/client
make clean

cd $path/client/cmdOpt
make clean

cd $path/client/ReserveProxyPort
make clean

cd $path/server/CmdDistribution
make clean

cd $path/server/PortDistribution
make clean

cd $path/client/networkStatus
make clean

# 禁止在开发环境下执行，会破坏虚拟的python环境
# find  .  -name  '*.pyc'  -type  f  -print  -exec  rm  -rf  {} \;
