//bloco 4 / dia 3
//programa que faz desenha na tela um quadrado de hashtags de lado e tamnho = n, sendo n o valor definido.
/*
# # # # # 
# # # # # 
# # # # # 
# # # # # 
# # # # # 
*/

let n = 5;
let contador=0;

if (n > 1){
while(contador < n){
let linha =''
for( let cont = 0; cont < n; cont++){
linha +="# ";
}
console.log(linha);
contador++;
}
}
