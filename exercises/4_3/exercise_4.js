//bloco 4 / dia 3
//programa que  desenha na tela um triangulo retangulo  de asterisco ao contrario do exercicio anterior, sendo n o valor definido.
let n = 10;
//let contador=0;
let espaco = "", simbolo="";

if (n > 1){
    for( let i = 0; i < n; i++){
        simbolo += "*";
        espaco = '';
       for( let j =n-i,k=n; j >0; j--,k--){

        espaco += " ";
        }
        if(i>0){
        simbolo += "*";

    }
   console.log(espaco+simbolo);

}



}
//else console.log("Digite um numero maior que 1: ");