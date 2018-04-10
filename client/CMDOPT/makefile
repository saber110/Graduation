BIN = cmdparse
CC = g++

LIBS   = -lwiringPi
OBJS   = motor.o server.o
CFLAGS = -c ${LIBS}

${BIN} : server.o motor.o
	${CC} server.o motor.o ${LIBS} -o ${BIN}
server.o : server.cpp motor.h server.h
	${CC} server.cpp ${CFLAGS}
motor.o : motor.cpp motor.h
	${CC} motor.cpp ${CFLAGS}

clean:
	rm *.o ${BIN}
