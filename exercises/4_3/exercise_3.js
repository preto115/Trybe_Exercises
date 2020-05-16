//bloco 4 / dia 3
//exercicio_3
//programa que  desenha na tela um triangulo retangulo  de asterisco ao contrario do exercicio anterior, sendo n o valor definido.
/*
​     *
    **
   ***
  ****
 *****
​*/

let n = 5;
//let contador=0;
let espaco = "", simbolo="";

if (n > 1){
    for( let i = 0; i < n; i++){
        simbolo += "*";
        espaco = '';

       for( let j =n-i; j >0; j--){

    espaco += " ";
    }
   console.log(espaco+simbolo);

}



}
//else console.log("Digite um numero maior que 1: ");