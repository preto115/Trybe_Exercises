#!/bin/bash

echo "Digite um número: "
read num1
echo "Digite outro número: "
read num2
printf "===================\n\n "

echo "$num1 + $num2  = $[num1 + num2]"
echo "$num1 - $num2  = $[num1 - num2]"
echo "$num1 X $num2  = $[num1 * num2]"
printf "$num1 / $num2  =" 
echo "scale=2; $num1 / $num2" | bc
printf "==================="


