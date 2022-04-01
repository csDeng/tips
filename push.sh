#! /bin/bash
currentDate = "`date + %Y-%m-%d`"
git add .
git commit -m "$currentDate"
git push
