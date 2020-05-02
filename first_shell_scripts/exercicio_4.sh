#!/bin/bash

echo "Digite o nome de um arquivo ou diretório"
read ARQUIVO

if [ -e $ARQUIVO ]
	then
	printf "O caminho `pwd`/$ARQUIVO está HABILITADO!\n"
	if [ -w  $ARQUIVO ]
		then	
			printf "Você tem permissão para editar `pwd`/$ARQUIVO\n"
		else	
			printf "Você não foi autorizado a editar `pwd`/$ARQUIVO\n"
		fi
else 
	echo "Nunhum caminho ou arquivo encontrado!"
fi

