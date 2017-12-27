#!/usr/bin/env python
# -*- coding: utf-8 -*-
import MySQLdb
import MySQLdb.cursors

import mysqlconfig

class Mysql(object):
    """docstring for MySQLDB."""
    def __init__(self):
        super(Mysql, self).__init__()

    def connect(self):
        db = MySQLdb.connect(mysqlconfig.host,mysqlconfig.username, mysqlconfig.password, mysqlconfig.database, charset='utf8',cursorclass=MySQLdb.cursors.DictCursor)
        return db

    def getData(self,db, query, table):
        c = db.cursor()
        c.execute(query)
        data = c.fetchall()
        c.close()
        return data

    def query(self,db,query):
        c = db.cursor()
        c.execute(query)
        db.commit()
        c.close()


    def close(self,db):
        db.close()
