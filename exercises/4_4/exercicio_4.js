// exercicio_4 parte_2 funcoes bloco 4_4
// verifica e retorna a maior string dentro de um array

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let maior="", indice = 0;
// variaveis pra armazer o maior nome e seu indice

function retornaMaiorNome( nomes){
    //laco para percorrer o vetor 
    for (i = 0; i < nomes.length ; i++){
    // pegando a primeira posicao como referencia    
        
           // menor[i] += nomes[i].length;
            if(i == 0){
                maior = nomes[i].length;
                indice = i
            }
        // testando se a posicao tem nome maior que a anterior e se é menor que o menor nome ja armazenado 
            else if( nomes[i].length > (nomes[i - 1].length && maior)){
                maior = nomes[i].length;
                 indice = i; // guardando o indice ddo maior nome
            }
        }
    return nomes[indice];
    }
        let resultado = retornaMaiorNome(nomes);
        console.log(resultado);
