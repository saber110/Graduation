BIN = cmdparse
CC = g++

INCLUDE := -I. -I../include
LIBS   = -lwiringPi
OBJS   = motor.o server.o
CFLAGS = -c ${LIBS}

${BIN} : server.o motor.o
	${CC} server.o motor.o ${LIBS} -o ${BIN} ${INCLUDE}
server.o : server.cpp motor.h server.h
	${CC} server.cpp ${CFLAGS} ${INCLUDE}
motor.o : motor.cpp motor.h
	${CC} motor.cpp ${CFLAGS} ${INCLUDE}

clean:
	rm *.o ${BIN}
