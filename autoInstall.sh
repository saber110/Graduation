#!/bin/bash
path=$(cd `dirname $0`; pwd)
system=`uname -a`
result=$(echo $system | grep "raspberrypi")
if [ "$result" != "" ]; then
  apt install w3m
else
  apt install mysql
fi
