## 智能座椅

1. 检测人体到达就进行语音播报天气，温度，湿度等数据
2. 摁上心率传感器即进行心率数据的收集
3. musicbox直接搜索

### 内网穿透

1. [frp](https://github.com/fatedier/frp/)  废弃
2. [Sunny-Ngrok](https://www.ngrok.cc/)
	```
	./sunny clientid 隧道id
	```
3. ssh reserve proxy

### 硬件引脚
```
采用树莓派的 wPi 引脚编码
```
1. DHT11
	- pin 25 : Data
2. MLX90614
	- pin 27 : SDA
	- pin 28 : SCL
3. MAX30102
	- pin 7 : SCL
	- pin 0 : SDA
	- pin x : INT
4. MOTOR
	- pin 1 : pwm
5. hcsr501
	- pin 6  : hcsr501


**C语言操作pwm要用sudo**

**电源：3.3v**

### 椅子动作控制

放在operation文件夹下面，接收网络参数，控制椅子动作
3333 端口
