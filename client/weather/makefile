
objects = cJSON.o weather.o
main : $(objects)
	cc -o main $(objects)
cJSON.o : cJSON.h
weather.o : weather.h

clean :
	rm $(objects) main
