#!/bin/bash
path="/home/pi/BiYeSheJi"
# run ssh reserve proxy
cd $path/client/ReserveProxyPort
port=`./PortApply`
ssh -N -f -R $port:localhost:3333 ubuntu@123.206.64.174 -i /home/pi/laptop_win10 > $path/log/ReserveProxyPort.log &