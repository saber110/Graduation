BIN = PortDistribute
CC = g++

LIBS   = -Iusr/include/mysql -lmysqlclient #-lwiringPi
OBJS   = mysql.o server.o Port.o
CFLAGS = -c ${LIBS} -std=c++11

${BIN} : ${OBJS}
	${CC} ${OBJS} ${LIBS} -o ${BIN}
server.o : server.cpp PortAll.h server.h mysqlF.h
	${CC} server.cpp ${CFLAGS}
mysql.o : mysql.c mysqlF.h
	${CC} mysql.c ${CFLAGS} ${LIBS}
Port.o : Port.cpp PortAll.h mysqlF.h
	${CC} Port.cpp ${CFLAGS}

clean:
	rm *.o ${BIN}
