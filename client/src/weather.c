#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "cJSON.h"
#include "weather.h"

char weatherString[200] = {0};

static int print_preallocated(cJSON *root)
{
    /* declarations */
    char *out = NULL;
    char *buf = NULL;
    char *buf_fail = NULL;
    size_t len = 0;
    size_t len_fail = 0;

    /* formatted print */
    out = cJSON_Print(root);

    /* create buffer to succeed */
    /* the extra 5 bytes are because of inaccuracies when reserving memory */
    len = strlen(out) + 5;
    buf = (char*)malloc(len);
    if (buf == NULL)
    {
        printf("Failed to allocate memory.\n");
        exit(1);
    }

    /* create buffer to fail */
    len_fail = strlen(out);
    buf_fail = (char*)malloc(len_fail);
    if (buf_fail == NULL)
    {
        printf("Failed to allocate memory.\n");
        exit(1);
    }

    /* Print to buffer */
    if (!cJSON_PrintPreallocated(root, buf, (int)len, 1)) {
        printf("cJSON_PrintPreallocated failed!\n");
        if (strcmp(out, buf) != 0) {
            printf("cJSON_PrintPreallocated not the same as cJSON_Print!\n");
            printf("cJSON_Print result:\n%s\n", out);
            printf("cJSON_PrintPreallocated result:\n%s\n", buf);
        }
        free(out);
        free(buf_fail);
        free(buf);
        return -1;
    }

    /* success */
    printf("%s\n", buf);

    /* force it to fail */
    if (cJSON_PrintPreallocated(root, buf_fail, (int)len_fail, 1)) {
        printf("cJSON_PrintPreallocated failed to show error with insufficient memory!\n");
        printf("cJSON_Print result:\n%s\n", out);
        printf("cJSON_PrintPreallocated result:\n%s\n", buf_fail);
        free(out);
        free(buf_fail);
        free(buf);
        return -1;
    }

    free(out);
    free(buf_fail);
    free(buf);
    return 0;
}

/* just get lastest info */
int _System(const char * cmd, char *pRetMsg, int msg_len)
{
  FILE * fp = NULL;
  int res = -1;
  if (cmd == NULL || pRetMsg == NULL || msg_len < 0)
  {
    printf("Param Error!\n");
    return -1;
  }
  fp = popen(cmd, 'r');
  if (fp == NULL)
  {
    printf("Popen Error!\n");
    return -2;
  }
  else
  {
    memset(pRetMsg, 0, msg_len);
    //get lastest result
    while(fgets(pRetMsg, msg_len, fp) != NULL)
    {
    //printf("%s",pRetMsg); //print all info
    }

    if ( (res = pclose(fp)) == -1)
    {
      printf("close popenerror!\n");
      return -3;
    }
    pRetMsg[strlen(pRetMsg)-1] = '\0';
    return 0;
  }
}

void getWeatherString(const char * city, char * TypeChar)
{
  char command[100] = {0};
  char a8Result[2048];
  int ret = 0;
  cJSON * weather[5] = {0};

  memset(TypeChar, 0, sizeof(TypeChar));
  snprintf(command,sizeof(command),"%s%s","w3m -dump http://wthrcdn.etouch.cn/weather_mini?city=", city);
  ret = _System(command, a8Result, sizeof(a8Result));
  // printf("a8Result = %s\nlength = %d \n", a8Result, (int)strlen(a8Result));
  cJSON * root = cJSON_Parse(a8Result);
  cJSON * data = cJSON_GetObjectItemCaseSensitive(root, "data");

  cJSON * foreast = cJSON_GetObjectItemCaseSensitive(data, "forecast");
  int size = cJSON_GetArraySize(foreast);
  for (int i = 0; i < size; i++) {
    weather[i] = cJSON_GetArrayItem(foreast,i);
  }
  cJSON * high = cJSON_GetObjectItemCaseSensitive(weather[0],"high");
  cJSON * low  = cJSON_GetObjectItemCaseSensitive(weather[0],"low");
  cJSON * type = cJSON_GetObjectItemCaseSensitive(weather[0],"type");

  char * highChar = cJSON_Print(high);
  char * lowChar  = cJSON_Print(low);
  char * typeChar = cJSON_Print(type);

  // print_preallocated(weather[0]);
  strcpy_s(TypeChar, strlen(typeChar), typeChar);
  snprintf(weatherString,sizeof(weatherString),"%s %s%s,%s,%s,%s","espeak -vzh","您好，现在为您播报天气，今天",typeChar,lowChar,highChar,"请注意增减衣物");
  // system(weatherString);
  printf("%s\n", weatherString);

  free(highChar);
  free(lowChar);
  free(typeChar);

  cJSON_Delete(root);

}

// int main()
// {
//   char *cmd = "w3m -dump http://wthrcdn.etouch.cn/weather_mini?city=长沙";
//   char a8Result[2048];
//   int ret = 0;
//   cJSON * weather[5] = {0};
//
//   ret = _System(cmd, a8Result, sizeof(a8Result));
//   // printf("a8Result = %s\nlength = %d \n", a8Result, (int)strlen(a8Result));
//   cJSON * root = cJSON_Parse(a8Result);
//   cJSON * data = cJSON_GetObjectItemCaseSensitive(root, "data");
//   cJSON * foreast = cJSON_GetObjectItemCaseSensitive(data, "forecast");
//   int size = cJSON_GetArraySize(foreast);
//   for (int i = 0; i < size; i++) {
//     weather[i] = cJSON_GetArrayItem(foreast,i);
//   }
//   cJSON * high = cJSON_GetObjectItemCaseSensitive(weather[0],"high");
//   cJSON * low  = cJSON_GetObjectItemCaseSensitive(weather[0],"low");
//   cJSON * type = cJSON_GetObjectItemCaseSensitive(weather[0],"type");
//
//   char * highChar = cJSON_Print(high);
//   char * lowChar  = cJSON_Print(low);
//   char * typeChar = cJSON_Print(type);
//
//   // print_preallocated(weather[0]);
//
//   printf("%s %s %s\n", highChar,lowChar,typeChar);
//
//   free(highChar);
//   free(lowChar);
//   free(typeChar);
//
//   cJSON_Delete(root);
//
//   // getWeatherString("长沙");
//   // system(weatherString);
//   return 0;
// }
