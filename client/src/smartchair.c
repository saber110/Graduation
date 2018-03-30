#include <wiringPi.h>
#include <stdio.h>
#include <math.h>
#include "bsp_i2c_gpio.h"
#include "algorithm.h"
#include "max30102.h"
#include "main.h"
#include "DHT11.h"
#include "mlx90614.h"
#include "weather.h"

#define MAX_BRIGHTNESS 255
#define DetectedMin 10000
#define UnDetectedMax 1000

uint32_t aun_ir_buffer[150]; //infrared LED sensor data
uint32_t aun_red_buffer[150];  //red LED sensor data
int32_t n_ir_buffer_length; //data length
int32_t n_spo2;  //SPO2 value
int8_t ch_spo2_valid;  //indicator to show if the SPO2 calculation is valid
int32_t n_heart_rate; //heart rate value
int8_t  ch_hr_valid;  //indicator to show if the heart rate calculation is valid
uint8_t uch_dummy;

int32_t hr_buf[16];
int32_t hrSum;
int32_t hrAvg;
int32_t hrAvg_his = 0;

int32_t spo2_buf[16];
int32_t spo2Sum ;
int32_t spo2Avg ;
int32_t spo2Avg_his = 0;

int32_t spo2BuffFilled;
int32_t hrBuffFilled;
int32_t hrValidCnt = 0;
int32_t spo2ValidCnt = 0;
int32_t hrThrowOutSamp = 0;
int32_t spo2ThrowOutSamp = 0;
int32_t spo2Timeout = 0;
int32_t hrTimeout = 0;

//进一步滤波取平均值
int32_t HrArg_Sum = 0;
int32_t SpoAVG_Sum = 0;
int8_t DataCount = 0;
int32_t HrData = 0;
int32_t Spo2Data = 0;

int Avg_counter = 0;


void loop(void);
void interrupt(void);
void humanInterrupt(void);

void main_init(void)
{
	//Usart_Init();
	bsp_InitI2C();
	//delay_init(72);
}


u8 EffNum_count = 0;
u8 Count_flag = 0;
u8 Key0 = 0;
u8 humanCheckNum0 = 0;
char lock = 0;

PI_THREAD(humanCheck)
{
	u8 history = 0, num0 = 0, num1 = 0;
	pinMode(human,OUTPUT);
	digitalWrite(human,0);
	pinMode(human,INPUT);
	pullUpDnControl(human,PUD_DOWN);
	while(wiringPiISR(human,INT_EDGE_FALLING,humanInterrupt) < 0);
	while(1)
	{
		u8 i = digitalRead(human);
		if(i == history)
		{
			num0 ++;num1 = 0;
		}
		else
		{
			humanCheckNum0 = num0;
			num1 ++;num0 = 0;
		}
		delay(100);
		history = i;
	}
}

int main_main(void)
{
	u8 temp_num=0;
	u8 temp_num1=0;
	char Max30102Init = 0;
	int32_t i;int j = 0;
  n_ir_buffer_length = 150;
	wiringPiSetup();
	main_init();

	pinMode(MAX30102_INT,INPUT);
	pullUpDnControl(MAX30102_INT,PUD_UP);
	while(wiringPiISR(MAX30102_INT,INT_EDGE_FALLING,interrupt) < 0);
	Max30102Init = maxim_max30102_init();
	while(!Max30102Init)
	{
		Max30102Init = maxim_max30102_init();
		delayMicroseconds(50);
	}
	printf("init %d !\n",Max30102Init);
	while (!piThreadCreate(humanCheck));
	printf("init ok !\n");
	while(1)
	{
		 loop();
	}
}

void humanInterrupt(void)
{
	printf("humanCheckNum0 %d\n",humanCheckNum0);
	if(lock == 0 && humanCheckNum0 > humanCritical)
	{
		lock = 1;
		getMLX90614();
		getWeatherString("长沙");
		getDHT11Result();
		lock = 0;
	}
}
void interrupt(void)
{
	u8 Mode = max30102_Bus_Read(REG_INTR_STATUS_1);
	printf("%d\n", Mode);
	if(Mode & 0x40) //判断新数据到达
		Key0 = 1;
}

// the loop routine runs over and over again forever:
void loop(void)
{
    uint32_t un_min, un_max, un_prev_data, un_brightness;  //variables to calculate the on-board LED brightness that reflects the heartbeats
    int32_t i;
    float f_temp;

    un_brightness = 0;
    un_min = 0x3FFFF;
    un_max = 0;

    n_ir_buffer_length = 150; //buffer length of 150 stores 3 seconds of samples running at 50sps

    //read the first 150 samples, and determine the signal range
    for(i = 0; i < n_ir_buffer_length; i++)
    {
        // while(Key0 == 1); //wait until the interrupt pin asserts
        maxim_max30102_read_fifo((aun_red_buffer + i), (aun_ir_buffer + i)); //read from MAX30102 FIFO

				Key0 = 0;
				//printf("red[%d] =%d  ir = %d\n", i-100,aun_red_buffer[i], aun_ir_buffer[i] );
			   if(aun_red_buffer[i]==0 && i!=0)
					 aun_red_buffer[i] = aun_red_buffer[i-1];
				 else if(aun_red_buffer[i])
				 if(aun_ir_buffer[i]==0 && i!=0)
					 aun_ir_buffer[i] = aun_ir_buffer[i-1];

        if(un_min > aun_red_buffer[i])
            un_min = aun_red_buffer[i]; //update signal min
        if(un_max < aun_red_buffer[i])
            un_max = aun_red_buffer[i]; //update signal max
    }
    un_prev_data = aun_red_buffer[i];
    //calculate heart rate and SpO2 after first 150 samples (first 3 seconds of samples)
    maxim_heart_rate_and_oxygen_saturation(aun_ir_buffer, n_ir_buffer_length, aun_red_buffer, &n_spo2, &ch_spo2_valid, &n_heart_rate, &ch_hr_valid);

    //Continuously taking samples from MAX30102.  Heart rate and SpO2 are calculated every 1 second
    while(1)
    {
        i = 0;
        un_min = 0x3FFFF;
        un_max = 0;

        //dumping the first 50 sets of samples in the memory and shift the last 100 sets of samples to the top
        for(i = 50; i < 150; i++)
        {
            aun_red_buffer[i - 50] = aun_red_buffer[i];
            aun_ir_buffer[i - 50] = aun_ir_buffer[i];
						//printf("red[%d] =%d  ir = %d\n", i,aun_red_buffer[i], aun_ir_buffer[i] );
            //update the signal min and max
            if(un_min > aun_red_buffer[i])
                un_min = aun_red_buffer[i];
            if(un_max < aun_red_buffer[i])
                un_max = aun_red_buffer[i];
        }

        //take 50 sets of samples before calculating the heart rate.
        for(i = 100; i < 150; i++)
        {
            un_prev_data = aun_red_buffer[i - 1];
             // while(Key0 == 1);

            maxim_max30102_read_fifo((aun_red_buffer + i), (aun_ir_buffer + i));
						Key0 = 0;
					//ÂËÈ¥¶ÁÈ¡ŽíÎóµÄÊýÖµ£¬ÓÃÇ°Ò»Î»Êý×éÖµŽúÌæ
					if(aun_red_buffer[i-2]>DetectedMin && aun_red_buffer[i-1]<UnDetectedMax && aun_red_buffer[i]>DetectedMin)
						aun_red_buffer[i-1] = aun_red_buffer[i-2];
			   if(aun_red_buffer[i]==0 )
					 aun_red_buffer[i] = aun_red_buffer[i-1];

					 if(aun_ir_buffer[i-2]>DetectedMin && aun_ir_buffer[i-1]<UnDetectedMax && aun_ir_buffer[i]>DetectedMin)
	 					aun_ir_buffer[i-1] = aun_ir_buffer[i-2];
				 if(aun_ir_buffer[i]==0 )
					 aun_ir_buffer[i] = aun_ir_buffer[i-1];

					//ŽòÓ¡µÆÊýÖµ
				  //printf("red[%d] =%d  ir = %d\n", i-100,aun_red_buffer[i], aun_ir_buffer[i] );
					//delay(2.5);
            //calculate the b（100）rightness of the LED
            if(aun_red_buffer[i] > un_prev_data)
            {
                f_temp = aun_red_buffer[i] - un_prev_data;
                f_temp /= (un_max - un_min);
                f_temp *= MAX_BRIGHTNESS;
                f_temp = un_brightness - f_temp;
                if(f_temp < 0)
                    un_brightness = 0;
                else
                    un_brightness = (int)f_temp;
            }
            else
            {
                f_temp = un_prev_data - aun_red_buffer[i];
                f_temp /= (un_max - un_min);
                f_temp *= MAX_BRIGHTNESS;
                un_brightness += (int)f_temp;
                if(un_brightness > MAX_BRIGHTNESS)
                    un_brightness = MAX_BRIGHTNESS;
            }
        }
  		for(i = 0; i < n_ir_buffer_length; i++)
			{
				if(aun_red_buffer[i]>DetectedMin)
				EffNum_count++;
			}
			if(EffNum_count>=(n_ir_buffer_length-10))
			{
				Count_flag = 1;
				EffNum_count = 0;
			}
			else
			{
				Count_flag = 0;
				EffNum_count = 0;
			}


			//就算心率与血氧

		if(Count_flag == 1)
		{
        maxim_heart_rate_and_oxygen_saturation(aun_ir_buffer, n_ir_buffer_length, aun_red_buffer, &n_spo2, &ch_spo2_valid, &n_heart_rate, &ch_hr_valid);

 			// if(ch_hr_valid==1 && ch_spo2_valid == 1)
			// {
			// 		printf(", HR=%i, ", n_heart_rate);
			// 		printf("HRvalid=%i, ", ch_hr_valid);
			// 		printf("SpO2=%i, ", n_spo2);
			// 		printf("SPO2Valid=%i\n\r", ch_spo2_valid);
			// 	}
        if ((ch_hr_valid == 1) && (n_heart_rate < 190) && (n_heart_rate > 40))
        {
            hrTimeout = 0;

            if (hrValidCnt == 4)
            {
                hrThrowOutSamp = 1;
                hrValidCnt = 0;
                for (i = 12; i < 16; i++)
                {
                    if (n_heart_rate < hr_buf[i] + 10)
                    {
                        hrThrowOutSamp = 0;
                        hrValidCnt   = 4;
                    }
                }
            }
            else
            {
                hrValidCnt = hrValidCnt + 1;
            }

            if (hrThrowOutSamp == 0)
            {

                for(i = 0; i < 15; i++)
                {
                    hr_buf[i] = hr_buf[i + 1];
                }
                hr_buf[15] = n_heart_rate;

                if (hrBuffFilled < 16)
                {
                    hrBuffFilled = hrBuffFilled + 1;
                }

                hrSum = 0;
                if (hrBuffFilled < 2)
                {
                    hrAvg = 0;
                }
                else if (hrBuffFilled < 4)
                {
                    for(i = 14; i < 16; i++)
                    {
                        hrSum = hrSum + hr_buf[i];
                    }
                    hrAvg = hrSum >> 1;
                }
                else if (hrBuffFilled < 8)
                {
                    for(i = 12; i < 16; i++)
                    {
                        hrSum = hrSum + hr_buf[i];
                    }
                    hrAvg = hrSum >> 2;
                }
                else if (hrBuffFilled < 16)
                {
                    for(i = 8; i < 16; i++)
                    {
                        hrSum = hrSum + hr_buf[i];
                    }
                    hrAvg = hrSum >> 3;
                }
                else
                {
                    for(i = 0; i < 16; i++)
                    {
                        hrSum = hrSum + hr_buf[i];
                    }
                    hrAvg = hrSum >> 4;
                }
            }
            hrThrowOutSamp = 0;
        }
        else
        {
            hrValidCnt = 0;
            if (hrTimeout == 4)
            {
                hrAvg = 0;
                hrBuffFilled = 0;
            }
            else
            {
                hrTimeout++;
            }
        }

        if ((ch_spo2_valid == 1) && (n_spo2 > 59))
        {
            spo2Timeout = 0;

            if (spo2ValidCnt == 4)
            {
                spo2ThrowOutSamp = 1;
                spo2ValidCnt = 0;
                for (i = 12; i < 16; i++)
                {
                    if (n_spo2 > spo2_buf[i] - 10)
                    {
                        spo2ThrowOutSamp = 0;
                        spo2ValidCnt   = 4;
                    }
                }
            }
            else
            {
                spo2ValidCnt = spo2ValidCnt + 1;
            }

            if (spo2ThrowOutSamp == 0)
            {

                for(i = 0; i < 15; i++)
                {
                    spo2_buf[i] = spo2_buf[i + 1];
                }
             	spo2_buf[15] = n_spo2;

                if (spo2BuffFilled < 16)
                {
                    spo2BuffFilled = spo2BuffFilled + 1;
                }

                spo2Sum = 0;
                if (spo2BuffFilled < 2)
                {
                    spo2Avg = 0;
                }
                else if (spo2BuffFilled < 4)
                {
                    for(i = 14; i < 16; i++)
                    {
                        spo2Sum = spo2Sum + spo2_buf[i];
                    }
                    spo2Avg = spo2Sum >> 1;
                }
                else if (spo2BuffFilled < 8)
                {
                    for(i = 12; i < 16; i++)
                    {
                        spo2Sum = spo2Sum + spo2_buf[i];
                    }
                    spo2Avg = spo2Sum >> 2;
                }
                else if (spo2BuffFilled < 16)
                {
                    for(i = 8; i < 16; i++)
                    {
                        spo2Sum = spo2Sum + spo2_buf[i];
                    }
                    spo2Avg = spo2Sum >> 3;
                }
                else
                {
                    for(i = 0; i < 16; i++)
                    {
                        spo2Sum = spo2Sum + spo2_buf[i];
                    }
                    spo2Avg = spo2Sum >> 4;
                }
            }
            spo2ThrowOutSamp = 0;
        }
        else
        {
            spo2ValidCnt = 0;
            if (spo2Timeout == 4)
            {
                spo2Avg = 0;
                spo2BuffFilled = 0;
            }
            else
            {
                spo2Timeout++;
            }
        }

				if(hrAvg !=0 && spo2Avg!= 0 )
				{
					if(Avg_counter >=20)
					{
						if(hrAvg_his == 0)
								hrAvg_his = hrAvg;
						if(spo2Avg_his == 0)
								spo2Avg_his = spo2Avg;

						if(hrAvg_his !=0 && spo2Avg_his != 0 )
						{
							hrAvg = hrAvg*0.2 + hrAvg_his*0.8;
							spo2Avg = spo2Avg*0.2 + spo2Avg_his*0.8;
					   printf("hrAvg = %d   ", hrAvg );
							printf("spo2Avg = %d\n", spo2Avg);
							hrAvg_his = hrAvg;
							spo2Avg_his = spo2Avg;
							//进一步滤波
							// if(DataCount < 20)
							// {
							// HrArg_Sum += hrAvg;
							// SpoAVG_Sum	+= spo2Avg;
							// DataCount ++;
							// }
							// else
							// {
							// 	HrData = HrArg_Sum/20;
							// 	Spo2Data = SpoAVG_Sum/20;
							// 	//printf("hrAvgD = %d   ", HrData );
							// 	//printf("spo2AvgD = %d\n", Spo2Data);
							// 	HrArg_Sum = 0;
							// 	SpoAVG_Sum = 0;
							// 	DataCount = 0;
							// }
						}
					}
					else
						Avg_counter++;
				}
    }
	}
}
