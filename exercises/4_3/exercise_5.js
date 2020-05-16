//bloco 4 / dia 3
// Exercicio_5
//programa que  desenha na tela um triangulo retangulo  de asterisco com meiovazio, sendo n o valor definido como impar.

//Declarando algumas variaveis e calculando  a quantidade de linhas a imprimir pra formatar o triangulo especifico.
let n = 7;
let espaco ;
let linhaDoMeio= Math.round(n+1)/2;
//declarando mais variaveis que vao servir de eixo para espelhar a formatacao
let linhaDireita = linhaDoMeio;
let linhaEsquerda = linhaDoMeio;

// primeiro estrutura de repeticao para imprimir as quantidades de linhas necessarias. e inicializando variavel
    for( let i = 0; i < linhaDoMeio; i++){
        espaco="";

//segundo estrutura de repeticao para preencher as linhas
        for( let j = n; j > 0; j--){
    
//caso seja a ultima linha a ser impressa, preenche a linha com asteriscos            
            if(i==linhaDoMeio-1){
                espaco +="*";
                 }
 //caso contrario formata o triangulo com espacos e asteriscos armazenando tudo dentro de uma variavel
            else if(( j == linhaEsquerda-i) || (j == linhaDireita+i)){
                espaco +="*";
                 }
            else {
                espaco +=" ";
            }
}
//imprime no console o conteudo armazenado anteriormenteda variavel
console.log(espaco);
}
    
/*
​
    *    
   * *  
  *   *
 *     *
*********

​
*/