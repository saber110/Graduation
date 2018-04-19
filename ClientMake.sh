#!/bin/bash
path=$(cd `dirname $0`; pwd)

cd $path/client
make clean
make

cd $path/client/cmdOpt
make clean
make

cd $path/client/ReserveProxyPort
make clean
make

cd $path/client/networkStatus
make clean
make
