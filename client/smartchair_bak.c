#include <wiringPi.h>
#include <stdio.h>
#include <math.h>

#include "DHT11.h"
#include "mlx90614.h"
#include "weather.h"

int main(int argc, char const *argv[]) {
  getWeatherString("长沙");
  getResult();
  return 0;
}
