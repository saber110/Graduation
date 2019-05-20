#include<wiringPi.h>
#include<iostream>
#define IRLED 1
#define HRIN 2
#define DEBUGSTATUS true
using namespace std;

unsigned int OldTimes;
unsigned int NewTimes;

void output(unsigned int OldTimes, unsigned int NewTimes ){
	int DeltaTime = NewTimes - OldTimes;
	int BMP = DeltaTime!=0?(1000 / DeltaTime) * 60:0;


#if(DEBUGSTATUS)
	cout << "OldTimes\t" << OldTimes << "\tNewTimes\t" << NewTimes << endl;
	cout << "DeltaTime\t" << DeltaTime << endl;
	cout << "BMP\t" << BMP << endl;
#endif
}
void Timing() {

	NewTimes = millis();

	output(OldTimes, NewTimes);

	OldTimes = NewTimes;
}
int main(int argc, char const *argv[]) {
	wiringPiSetup();
	pinMode(IRLED, OUTPUT);
	wiringPiISR(HRIN, INT_EDGE_RISING, Timing);
	while(1){
		digitalWrite(IRLED, HIGH);
		delayMicroseconds(100);
	}

	return 0;
}
