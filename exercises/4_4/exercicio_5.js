// exercicio_5 parte_2 funcoes bloco 4_4
// verifica e retorna o numero com  a quantidade maior de repeticoes dentro de um array

let arr = [ 2, 3, 4, 5, 8, 2, 4, 3, 1, 2, 4];
let maisVezes = 0, contador = 0, maior = [];
// variaveis pra armazer o maior 

function retornaQtNumeroRepete(numeros){
    for (i = 0; i < numeros.length ; i++){   //laco para percorrer o vetor 
        contador = 0;
        for (j = 0; j < numeros.length ; j++){  
            if( numeros[i] === numeros[j]){
                contador++;
                if(i === 0 && j ===0 ){     // pegando a primeira posicao como referencia no primeiro laco
                    maior[0] = numeros[i];
                    maisVezes = contador;
                } 
            }
            if( contador > maisVezes){  // comparando o numero de repeticoes com os demais e guardando o valor se maior
                maior[0] = numeros[i];
                maisVezes = contador;
            }
            else if ( contador === maisVezes){      //trantado situacao no caso de existir  2 numeros com mesmo n/repeticoes 
                if( maior[0] == numeros[i]){
                }
                else{
                maior[1] = numeros[i];
                maisVezes = contador;
                }
            }
        }
    } 
        return maior;       // retornando os resultados
}
let resultado = retornaQtNumeroRepete(arr);
    for( a = 0; a < resultado.length; a++){
            console.log(resultado[a]);
    }