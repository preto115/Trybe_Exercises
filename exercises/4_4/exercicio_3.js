// exercicio_3 parte_2 funcoes bloco 4_4
// verifica qual o indice do menor valor no array

let arr = [ -7, 4, -2, 7, 10, -5,-10 ];
let maior= "", indice = 0;
// variaveis pra armazer o maior valor e seu indice

function retornaIndiceDoMenorValor( vetor){
    //laco para percorrer o vetor 
    for (i = 0; i < vetor.length ; i++){
    // pegando a primeira posicao como referencia    
        if(i == 0){
            menor = vetor[i];
            indice = i
        }
    // testando se a posicao tem valor menor que a anterior e se é menor que o menor valor ja armazenado 
        else if(( vetor[i] < menor) && ( vetor[i] < vetor[i - 1])){
            menor = vetor[i];
             indice = i; // guardando o indice ddo menor valor
        }
    }
return indice; // retornando o indice do menor valor 
}

//chamando a funcao.
let resultado= retornaIndiceDoMenorValor(arr)
console.log(resultado);
