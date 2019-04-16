1. mysql/mysql.h: No such file or directory
  ```
  apt install libmariadbclient-dev
  ```
2. cannot find -lmysqlclient
  ```
  搜索所需要的东西所在的包
  apt search xxx(eg : lmysqlclient)
  spt install ××(搜索的结果)
  ```

3. ImportError: No module named pycurl
  ```
  apt install libcurl4-openssl-dev libssl-dev
  pip install pycurl
  ```
4. ImportError: No module named mysqlconfig
