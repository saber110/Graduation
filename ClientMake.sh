#!/bin/bash
path=$(cd `dirname $0`; pwd)

# cd $path/client
# make

cd $path/client/cmdOpt
make

cd $path/client/ReserveProxyPort
make

cd $path/client/networkStatus
make

cd $path/client/tts/samples/tts_sample
make
