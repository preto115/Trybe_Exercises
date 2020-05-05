#!/bin/bash

#echo "Digite o nome de um arquivo ou diretório" 
ARQUIVO=`ls -d ./*` 
printf "\n"

for item in $ARQUIVO
do
if [ -f $item ]
        then
        printf "$item é um arquivo!\n\n"

elif [ -d $item ]
        then
        printf  "$item é um diretório\n\n"

else
	 print "$item é um outro de arquivo qualquer!\n"
fi
done
#ls -ld $ARQUIVO
                      












