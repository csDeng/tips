#! /bin/bash
cur_date=`date '+%Y-%m-%d'`
echo csjerry.cn > CNAME

git add .
git commit -m "$cur_date"
git push -f
sleep 2
