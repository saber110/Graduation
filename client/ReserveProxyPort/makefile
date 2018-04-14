BIN = PortApply
CC = g++
LIBS = -I../include
OBJS   = PortApply.o
CFLAGS = -c ${LIBS}

${BIN} : ${OBJS}
	${CC} ${OBJS} ${LIBS} -o ${BIN}
PortApply.o : PortApply.cpp PortApply.h
	${CC} PortApply.cpp ${CFLAGS}

clean:
	rm *.o ${BIN}
