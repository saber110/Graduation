LIBS = -lwiringPi
objects = smartchair.o algorithm.o bsp_i2c_gpio.o max30102.o cJSON.o DHT11.o mlx90614.o weather.o
smartchair : $(objects)
	cc -o smartchair -g $(objects) $(LIBS)
smartchair.o : main.h bsp_i2c_gpio.h algorithm.h max30102.h
bsp_i2c_gpio.o : bsp_i2c_gpio.h main.h
algorithm.o : algorithm.h main.h
max30102.o : max30102.h main.h bsp_i2c_gpio.h
cJSON.o : cJSON.h
DHT11.o : DHT11.h
mlx90614.o : mlx90614.h
weather.o : weather.h cJSON.h

clean :
	rm smartchair $(objects)
