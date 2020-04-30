#!/bin/bash

echo "Digite o nome de um arquivo ou diretório"
read ARQUIVO

if [ -d $ARQUIVO ]
then
	echo "diretório existe!"

elif [ -f $ARQUIVO ]
then 
	echo "arquivo existe!"
else	
	printf "Não foi encontrado nenhum arquivo ou diretótio"

fi

