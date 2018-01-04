#include <stdio.h>
#include <wiringPi.h>
#include <wiringPiI2C.h>
#include "mlx90614.h"


//��ʼ״̬
void SMBus_StartBit(void)
{
	pinMode(SDA,OUTPUT);
	pinMode(SCL,OUTPUT);
    digitalWrite(SDA,1);               // Set SDA line
    delayMicroseconds(1);      // Wait a few microseconds
    digitalWrite(SCL,1);               // Set SCK line
    delayMicroseconds(5);      // Generate bus free time between Stop
    digitalWrite(SDA,0);               // Clear SDA line
    delayMicroseconds(10);     // Hold time after (Repeated) Start
                         // Condition. After this period, the first clock is generated.
                         //(Thd:sta=4.0us min)
    digitalWrite(SCL,0);               // Clear SCK line
    delayMicroseconds(2);      // Wait a few microseconds
}

/*******************************************************************************
* Function Name  : SMBus_StopBit
* Description    : Generate STOP condition on SMBus
* Input          : None
* Output         : None
* Return         : None
*******************************************************************************/


//����һ��λ
void SMBus_StopBit(void)
{
	pinMode(SDA,OUTPUT);
	pinMode(SCL,OUTPUT);
    // digitalWrite(SCL,0);                // Clear SCK line
    // delayMicroseconds(5);       // Wait a few microseconds
    digitalWrite(SDA,0);                // Clear SDA line
    delayMicroseconds(5);       // Wait a few microseconds
    digitalWrite(SCL,1);                // Set SCK line
    delayMicroseconds(10);      // Stop condition setup time(Tsu:sto=4.0us min)
    digitalWrite(SDA,1);                // Set SDA line
}

/*******************************************************************************
* Function Name  : SMBus_SendByte
* Description    : Send a byte on SMBus
* Input          : Tx_buffer
* Output         : None
* Return         : None
*******************************************************************************/
u8 SMBus_SendByte(u8 Tx_buffer)
{
    u8        Bit_counter;
    u8        Ack_bit;
    u8        bit_out;


    for(Bit_counter=8; Bit_counter; Bit_counter--)
    {
        if (Tx_buffer&0x80)
        {
            bit_out=1;       // If the current bit of Tx_buffer is 1 set bit_out
        }
        else
        {
            bit_out=0;      // else clear bit_out
        }
        SMBus_SendBit(bit_out);           // Send the current bit on SDA
        Tx_buffer<<=1;                    // Get next bit for checking
    }
    Ack_bit=SMBus_ReceiveBit(); 	// Get acknowledgment bit
		// printf("%d\t",Ack_bit);
    return        Ack_bit;
}

/*******************************************************************************
* Function Name  : SMBus_SendBit
* Description    : Send a bit on SMBus
* Input          : bit_out
* Output         : None
* Return         : None
*******************************************************************************/
void SMBus_SendBit(u8 bit_out)
{
		pinMode(SDA,OUTPUT);
		digitalWrite(SCL,0);
		delayMicroseconds(2);
    if(bit_out==0)
    {
      digitalWrite(SDA,0);
    }
    else
    {
    	digitalWrite(SDA,1);
    }
    delayMicroseconds(2);                            // Tsu:dat = 250ns minimum
    digitalWrite(SCL,1);                                     // Set SCK line
    delayMicroseconds(5);                           // High Level of Clock Pulse
    // digitalWrite(SCL,0);                                     // Clear SCK line
    // delayMicroseconds(10);                           // Low Level of Clock Pulse
		//        SMBUS_digitalWrite(SDA,1)();                       // Master release SDA line ,
    return;
}
/*******************************************************************************
* Function Name  : SMBus_ReceiveBit
* Description    : Receive a bit on SMBus
* Input          : None
* Output         : None
* Return         : Ack_bit
*******************************************************************************/
u8 SMBus_ReceiveBit()
{
    u8 Ack_bit;

    pinMode(SDA,INPUT);             //���ſ��ⲿ������������������
    digitalWrite(SCL,1);             // Set SCL line
    delayMicroseconds(2);    // High Level of Clock Pulse
    if (!digitalRead(SDA))
    {
        Ack_bit=0;
    }
    else
    {
        Ack_bit=1;
    }
    digitalWrite(SCL,0);                    // Clear SCL line
    delayMicroseconds(4); 	// Low Level of Clock Pulse

		// printf("%d\n",Ack_bit);
    return   Ack_bit;
}
/*******************************************************************************
* Function Name  : SMBus_ReceiveByte
* Description    : Receive a byte on SMBus
* Input          : ack_nack
* Output         : None
* Return         : RX_buffer
*******************************************************************************/
u8 SMBus_ReceiveByte(u8 ack_nack)
{
    u8        RX_buffer;
    u8        Bit_Counter;
    for(Bit_Counter=8; Bit_Counter; Bit_Counter--)
    {
        if(SMBus_ReceiveBit())         // Get a bit from the SDA line
        {
            RX_buffer <<= 1;           // If the bit is HIGH save 1  in RX_buffer
            RX_buffer |=0x01;
        }
        else
        {
            RX_buffer <<= 1;           // If the bit is LOW save 0 in RX_buffer
            RX_buffer &=0xfe;
        }
    }
    SMBus_SendBit(ack_nack);           // Sends acknowledgment bit
    return RX_buffer;
}


/*******************************************************************************
* Function Name  : delayMicroseconds
* Description    : ��ʱ  һ��ѭ��Լ1us
* Input          : time
* Output         : None
* Return         : None
*******************************************************************************/

/*******************************************************************************
 * Function Name  : SMBus_ReadMemory
 * Description    : READ DATA FROM RAM/EEPROM
 * Input          : slaveAddress, command
 * Output         : None
 * Return         : Data
*******************************************************************************/
u16 SMBus_ReadMemory(u8 slaveAddress, u8 command)
{
    u16 data;               // Data storage (DataH:DataL)
    u8 Pec;                 // PEC byte storage
    u8 DataL=0;             // Low data byte storage
    u8 DataH=0;             // High data byte storage
    u8 arr[6];              // Buffer for the sent bytes
    u8 PecReg;              // Calculated PEC byte storage
    u8 ErrorCounter;        // Defines the number of the attempts for communication with MLX90614


    ErrorCounter=0x00;                                // Initialising of ErrorCounter
    slaveAddress <<= 1;        //2-7λ��ʾ�ӻ���ַ

    do
    {
repeat:
        SMBus_StopBit();                //If slave send NACK stop comunication
        -- ErrorCounter;                 //Pre-decrement ErrorCounter
        if(!ErrorCounter)               //ErrorCounter=0?
        {
           break;                      //Yes,go out from do-while{}
       	}

        SMBus_StartBit();               //Start condition
        if(SMBus_SendByte(slaveAddress))//Send SlaveAddress ����λWr=0��ʾ������д����
        {
            goto  repeat;               //Repeat comunication again
        }
        if(SMBus_SendByte(command))     //Send command
        {
            goto  repeat;             //Repeat comunication again
        }

        SMBus_StartBit();                //Repeated Start condition
        if(SMBus_SendByte(slaveAddress+1))  //Send SlaveAddress ����λRd=1��ʾ������������
        {
            goto  repeat;           //Repeat comunication again
        }

        DataL = SMBus_ReceiveByte(ACK);
//printf("%X\n",DataL);		//Read low data,master must send ACK
        DataH = SMBus_ReceiveByte(ACK);
//printf("%X\n",DataH);		//Read high data,master must send ACK
        Pec = SMBus_ReceiveByte(NACK);    //Read PEC byte, master must send NACK
        SMBus_StopBit();                  //Stop condition

        arr[5] = slaveAddress;
        arr[4] = command;
        arr[3] = slaveAddress+1;         //Load array arr
        arr[2] = DataL;
        arr[1] = DataH;
        arr[0] = 0;
	        PecReg=PEC_Calculation(arr); 		//Calculate CRC
				// delay(100);
   }
    while(PecReg != Pec);                //If received and calculated CRC are equal go out from do-while{}
        data = (DataH*256) + DataL;       //data=DataH:DataL
    return data;
}

/*******************************************************************************
* Function Name  : PEC_calculation
* Description    : Calculates the PEC of received bytes
* Input          : pec[]
* Output         : None
* Return         : pec[0]-this byte contains calculated crc value
*******************************************************************************/
u8 PEC_Calculation(u8 pec[])
{
    u8         crc[6];
    u8        BitPosition=47;
    u8        shift;
    u8        i;
    u8        j;
    u8        temp;


    do
    {
        /*Load pattern value 0x000000000107*/
        crc[5]=0;
        crc[4]=0;
        crc[3]=0;
        crc[2]=0;
        crc[1]=0x01;
        crc[0]=0x07;
        /*Set maximum bit position at 47 ( six bytes byte5...byte0,MSbit=47)*/
        BitPosition=47;
        /*Set shift position at 0*/
        shift=0;
        /*Find first "1" in the transmited message beginning from the MSByte byte5*/
        i=5;
        j=0;
        while((pec[i]&(0x80>>j))==0 && i>0)
        {
            BitPosition--;
            if(j<7)
            {
                j++;
            }
            else
            {
                j=0x00;
                i--;
            }
        }/*End of while */


        /*Get shift value for pattern value*/
        shift=BitPosition-8;
        /*Shift pattern value */
        while(shift)
        {
            for(i=5; i<0xFF; i--)
            {
                if((crc[i-1]&0x80) && (i>0))
                {
                    temp=1;
                }
                else
                {
                    temp=0;
                }
                crc[i]<<=1;
                crc[i]+=temp;
            }/*End of for*/
            shift--;
        }/*End of while*/
        /*Exclusive OR between pec and crc*/
        for(i=0; i<=5; i++)
        {
            pec[i] ^=crc[i];
        }/*End of for*/
    }
    while(BitPosition>8); /*End of do-while*/

    return pec[0];
}

 /*******************************************************************************
 * Function Name  : SMBus_ReadTemp
 * Description    : Calculate and return the temperature
 * Input          : None
 * Output         : None
 * Return         : SMBus_ReadMemory(0x00, 0x07)*0.02-273.15
*******************************************************************************/
float SMBus_ReadTemp(void)
{
    return SMBus_ReadMemory(0x00, 0x07)*0.02-273.15;
}
/*********************************END OF FILE*********************************/


void getMLX90614(void)
{
	int fd;
	wiringPiSetup();
	pinMode(SCL,OUTPUT);
	pinMode(SDA,OUTPUT);
	digitalWrite(SDA,1);
	digitalWrite(SCL,1);
	delayMicroseconds(4);
	digitalWrite(SCL,0);
	delay(4);
	digitalWrite(SCL,1);
	float Temperature=10;

	fd = wiringPiI2CSetup(0x5a);
	Temperature = wiringPiI2CReadReg16(fd,0x07);
	Temperature = (Temperature*0.02-237.15);
	printf("%d\n",Temperature);
}


int main(void)
{
	int fd;
	wiringPiSetup();
	pinMode(SCL,OUTPUT);
	pinMode(SDA,OUTPUT);
	digitalWrite(SDA,1);
	digitalWrite(SCL,1);
	delayMicroseconds(4);
	digitalWrite(SCL,0);
	delay(4);
	digitalWrite(SCL,1);


	float Temperature=10;
	/* *************************������ʼ������*****************/
	//RCC_Configuration();//����ϵͳ�͸�����ʱ��
	//GPIO_Configuration();//GPIO�˿�����

	//USART_Configuration();//USART����
	//S/YSTICK_Configuration();//SYSTICK����

	//Mlx96014_Configuration();

    printf(" now its beginning\t");
		while(1)
   {
			// Temperature=SMBus_ReadTemp();
			// printf("The Temperature is:%f\n",Temperature);
			fd = wiringPiI2CSetup(0x5a);
			Temperature=wiringPiI2CReadReg16(fd,0x07);
			Temperature = (Temperature*0.02-237.15);
			printf("%d\n",Temperature);
	}
}
