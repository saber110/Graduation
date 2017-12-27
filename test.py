#!/usr/bin/env python
# -*- coding: utf-8 -*-
from mysql.mysql import Mysql

a = Mysql()

def start():
    print a.connect()

if __name__ == '__main__':
    start()
