for k in $( seq 1 100 )
do
  curl http://123.206.64.174:6565/10 &
  curl http://123.206.64.174:6565/20 &
  curl http://123.206.64.174:6565/40 &
  curl http://123.206.64.174:6565/60 &
  curl http://123.206.64.174:6565/100000 &
  curl http://123.206.64.174:6565/105864890 &
  curl http://123.206.64.174:6565/105989625 &
  curl http://123.206.64.174:6565/10998568956986569856223 &
  curl http://123.206.64.174:6565/1098529562956gyhnjkmcvgbhjkuyhjk &
  curl http://123.206.64.174:6565/10tcvhjbkgfchgvhbnigyftcgvbn &
  curl http://123.206.64.174:6565/10erdtfyguhinjkmtygubhijn &
done
