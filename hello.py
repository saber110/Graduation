#!/usr/bin/env python
# coding=utf-8
import os
import json
import pycurl
from mysql.mysql import Mysql
from flask import Flask

app = Flask(__name__)
mysql = Mysql()

@app.route('/')
def index():
    # JokeContent = getKJokeContentById(1)
    # username = request.cookies.get('username')
    return render_template('index.html',JokeTitle = JokeTitle)

@app.route('/api/temperature/<uuid>')
def getTemperature(uuid='UuidExample'):
    return getDataLastly('Temperature',uuid)

@app.route('/api/humidity/<uuid>')
def gethumidity(uuid = 'UuidExample'):
    return getDataLastly('Humidity',uuid)
    pass

@app.route('/api/heartRate/<uuid>')
def getheartRate(uuid = 'UuidExample'):
    return getDataLimit('HeartRate',uuid)
    pass

def getDataLastly(field = 'Temperature', table = 'UuidExample'):
    db = mysql.connect()
    data = mysql.getData(db, "select "+ field +" from "+table +" where id = (select max(id) from "+table+")", table)
    mysql.close(db)
    return json.dumps(data)
    pass

def getDataLimit(field = 'HeartRate', table = 'UuidExample',limit=10):
    db = mysql.connect('data')
    data = mysql.getData(db, "select "+ field +" from "+table +" ORDER BY id DESC limit " + str(limit) + " ;", table)
    mysql.close(db)

    # result = ''
    # for value in data:
    #     result += str(value[0])
    #     result += ","
    #     pass

    return json.dumps(data)
    pass

def getData(table):
    db = mysql.connect()
    data = mysql.getData(db, "select * from "+table, table)
    mysql.close(db)
    return data

def query(query):
    db = mysql.connect()
    mysql.query(db,query)
    mysql.close(db)

@app.route('/login', methods=['POST', 'GET'])
def login():
    error = None
    if request.method == 'POST':
        if valid_login(request.form['username'],
                       request.form['password']):
            return log_the_user_in(request.form['username'])
        else:
            error = 'Invalid username/password'
    return render_template('login.html', error=error)

def getSoup():
    """读取网路接口，获取心灵鸡汤"""
    c = pycurl.Curl()
    c.setopt(pycurl.FORBID_REUSE, 1)
    c.setopt(pycurl.URL,"http://open.iciba.com/dsapi/")
    c.setopt(pycurl.USERAGENT,"Mozilla/5.2 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50324)")
    b = StringIO.StringIO()
    c.setopt(c.WRITEFUNCTION, b.write)
    c.perform()
    return json.loads(b.getvalue())

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port = 7777)
