#! /bin/bash
cur_date=`date '+%Y-%m-%d'`

git add .
git commit -m "$cur_date"
git push -f
sleep 2
