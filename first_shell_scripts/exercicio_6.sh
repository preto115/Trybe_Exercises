#!/bin/bash

echo "Digite o nome de um arquivo ou diretório"
read ARQUIVO
printf "\n"
if [ -e $ARQUIVO ]
then
if [ -f $ARQUIVO ]
        then
        printf "$ARQUIVO é um arquivo!\n\n"

elif [ -d $ARQUIVO ]
        then
        printf  "$ARQUIVO é um diretório\n\n"

else printf "$ARQUIVO é um outro tipo de arquivo qualquer!\n"
fi
ls -lda $ARQUIVO
else printf "$ARQUIVO não existe!\n"
fi
                      












