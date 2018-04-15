BIN = CmdDistribute
CC = g++

LIBS   = -Iusr/include/mysql -lmysqlclient #-lwiringPi
OBJS   = mysql.o server.o CmdDistribution.o CheckPort.o
CFLAGS = -c ${LIBS}

${BIN} : ${OBJS}
	${CC} ${OBJS} ${LIBS} -o ${BIN}
server.o : server.cpp
	${CC} server.cpp ${CFLAGS}
mysql.o : mysql.cpp
	${CC} mysql.cpp ${CFLAGS} ${LIBS}
CmdDistribution.o : CmdDistribution.cpp
	${CC} CmdDistribution.cpp ${CFLAGS}
CheckPort.o : CheckPort.cpp
	${CC} CheckPort.cpp ${CFLAGS}

clean:
	rm *.o ${BIN}
