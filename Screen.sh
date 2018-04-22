#!/bin/bash

path=$(cd `dirname $0`; pwd)
cd $path

screen_name=$"SmartChair"
screen -dmS $screen_name

cmd=$"$path/run.sh";
screen -x -S $screen_name -p 0 -X stuff "$cmd"
screen -x -S $screen_name -p 0 -X stuff $'\n'
