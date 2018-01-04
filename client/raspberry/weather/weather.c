#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "cJSON.h"

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
  FILE * fp;
  char * p = NULL;
  int res = -1;
  if (cmd == NULL || pRetMsg == NULL || msg_len < 0)
  {
    printf("Param Error!\n");
    return -1;
  }
  if ((fp = popen(cmd, "r") ) == NULL)
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

int main()
{
  char *cmd = "w3m -dump http://wthrcdn.etouch.cn/weather_mini?city=合肥";
  char a8Result[1024];
  int ret = 0;
  cJSON * weather[5] = {0};
  ret = _System(cmd, a8Result, sizeof(a8Result));
  // printf("a8Result = %s\nlength = %d \n", a8Result, (int)strlen(a8Result));
  cJSON * root = cJSON_Parse(a8Result);
  cJSON * data = cJSON_GetObjectItemCaseSensitive(root, "data");

  cJSON * foreast = cJSON_GetObjectItemCaseSensitive(data, "forecast");
  int size = cJSON_GetArraySize(foreast);
  for (int i = 0; i < size; i++) {
    weather[i] = cJSON_GetArrayItem(foreast,i);
  }


  char *json_data = NULL;
  print_preallocated(weather[0]);
  printf("size:%d\n",size);
  free(json_data);
  cJSON_Delete(root);
  return 0;
}
