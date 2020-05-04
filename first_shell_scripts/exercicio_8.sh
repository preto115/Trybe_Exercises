#!/bin/bash
#ARQUIVO=$@
ARQUIVO=`ls $@` 

for item in $ARQUIVO
do
if [ -f "$item" ]
        then
        printf "$item é um arquivo!\n"

elif [ -d "$item" ]
        then
        printf  "$item é um diretório\n"

else
        printf "$item é um outro tipo de arquivo qualquer!\n"
fi
#ls -lad "$item"
done









