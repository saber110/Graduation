#!/bin/bash

# run npm
path=$(cd `dirname $0`; pwd)
# cd $path/server/admin
# npm start &

# run python
cd $path/server
python Graduation.py &
