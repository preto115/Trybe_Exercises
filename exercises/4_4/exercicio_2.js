// exercicio_2 parte_2 funcoes bloco 4_4
// verifica qual o indice do maior valor no array

let arr = [ 21, 3, 6, 19, 20 ];
let maior= "", indice = 0;
// variaveis pra armazer o maior valor e seu indice

function retornaIndiceDoMaiorValor( vetor){
    //laco para percorrer o vetor 
    for (i = 0; i < vetor.length ; i++){
    // pegando a primeira posicao como referencia    
        if(i == 0){
            maior = vetor[i];
            indice = i
        }
    // tentando se a posicao é maior que a anterior e se é maior que o maior valor ja armazenado 
        else if( vetor[i] > (vetor[i - 1] && maior)){
            maior = vetor[i];
             indice = i; // guardando o indice ddo maior valor
        }
    }
return indice; // retornando o indice do maior valor 
}

//chamando a funcao.
let resultado= retornaIndiceDoMaiorValor(arr)
console.log(resultado);