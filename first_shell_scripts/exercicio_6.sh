#!/bin/bash

echo "Digite o nome de um arquivo ou diretório"
read ARQUIVO
printf "\n"

if [ -f $ARQUIVO ]
        then
        printf "$ARQUIVO é um arquivo!\n\n"

elif [ -d $ARQUIVO ]
        then
        printf  "$ARQUIVO é um diretório\n\n"

else print "$ARQUIVO é um outro de arquivo qualquer!\n"
fi
ls -ld $ARQUIVO
                      












