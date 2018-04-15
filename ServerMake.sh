#!/bin/bash
path=$(cd `dirname $0`; pwd)

cd $path/server/CmdDistribution
make clean
make

cd $path/server/PortDistribution
make clean
make
