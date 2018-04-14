#!/bin/bash
path=$(cd `dirname $0`; pwd)
cd $path/client/ReserveProxyPort
port=`./PortApply`
result=$(echo $port)

echo $result
