BIN = NetworkStatus
CC = g++
LIBS = -I../include
OBJS   = NetworkStatus.o
CFLAGS = -c ${LIBS}

${BIN} : ${OBJS}
	${CC} ${OBJS} ${LIBS} -o ${BIN}
NetworkStatus.o : NetworkStatus.cpp
	${CC} NetworkStatus.cpp ${CFLAGS}

clean:
	rm *.o ${BIN}
