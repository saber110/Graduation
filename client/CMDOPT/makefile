BIN = cmdparse
CC = g++

LIBS    := -lwiringPi
INCLUDE := -I.
OBJS    := motor.o server.o
CFLAGS = -g -O2 -Wall ${INCLUDE} ${LIBS}

motor.o: motor.cpp
	${CC} ${CFLAGS} motor.cpp

${cmdparse}: motor.o
	${CC} ${CFLAGS} server.cpp

clean:
	rm *.o cmdparse
