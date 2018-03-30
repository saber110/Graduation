CC = gcc

DIR_INC = ./include
DIR_SRC = ./src
DIR_OBJ = ./obj
DIR_BIN = ./bin

SRC = $(wildcard ${DIR_SRC}/*.c ${DIR_SRC}/daemon/*.c)
OBJ = $(patsubst %.c,${DIR_OBJ}/%.o,$(notdir ${SRC}))

TARGET = main

BIN_TARGET = ${DIR_BIN}/${TARGET}

CFLAGS = -g -O2 -Wall -I${DIR_INC} -lwiringPi -Iusr/include/mysql -lmysqlclient

${BIN_TARGET} : ${OBJ}
	${CC} ${CFLAGS} ${OBJ}  -o $@

${DIR_OBJ}/%.o : ${DIR_SRC}/%.c
	$(CC) ${CFLAGS} -c $< -o $@


${DIR_OBJ}/%.o : ${DIR_SRC}/daemon/%.c
	$(CC) ${CFLAGS} -c $< -o $@

.PHONY : clean run
clean:
	rm -f ${DIR_OBJ}/*.o ${BIN_TARGET}

run:
	${BIN_TARGET}
