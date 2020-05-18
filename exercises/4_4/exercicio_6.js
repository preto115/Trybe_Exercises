// exercicio_6 parte_2 funcoes bloco 4_4
// Retorna o soma de um numero ( soma sequencial de todos os numeros abaixo do numero dado, incluise o proprio numero)

let num = 5;

function fatorialDeNum( numero){
    let soma = 0;
    for (i = 0; i <= numero ; i++){ //laco para percorrer somar todos os numeros entre 1 - num; 
        soma += i;
    }
    return soma;
} 
console.log(fatorialDeNum(num));  //imprimindo o retorno da funcao direto