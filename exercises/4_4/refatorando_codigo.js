//bloco 4.4

// programa feito para refatorar a primeira parte dos exercicios do bloco 4.1 e implementa-los como funcoes.

let num1 = 4, num2 = 15;

console.log(`A soma de ${num1} e ${num2} é:`,soma( num1, num2));
console.log(`A subtracao de ${num1} e ${num2} é:`,subtracao( num1, num2));
console.log(`A multiplicação de ${num1} por ${num2} é:`,multiplicacao( num1, num2));
console.log(`A divisao de ${num1} por ${num2} é:`,divisao( num1, num2));
console.log(`O módulo de ${num1} por ${num2} é:`,modulo( num1, num2));
console.log(`A exponenciação de ${num1} elevado á ${num2} é:`,exponenciacao( num1, num2));

// FUNÇÕES IMPLEMENTADAS.

// programa de exponenciação do exercicio_1 
function exponenciacao( a, b){
   let exponenciacao = 0;
   exponenciacao = num1 ** num2;
   return exponenciacao;
}


// programa de modulo do exercicio_1 
function modulo( a, b){

    let modulo = "";
    if ( num1 > num2){
    modulo = num1 % num2;
}
   else modulo = "módulo não válido";
    return modulo;

}


// programa de divisao do exercicio_1 
function divisao( a, b){

    let divisao = 0;
    divisao = a / b;
    return divisao;
}


// programa de multiplicacao do exercicio_1 

function multiplicacao( a, b){
    let multiplicacao =0;
    
     multiplicacao = a * b;
    return multiplicacao;
    }


// exercicio_1 programa de adição

function soma( a, b){
let soma =0;
soma = a + b;
return soma;
}


// programa de subtração do exercicio_1 
function subtracao( a, b){
let subtracao =0;

subtracao = a - b;
return subtracao;

}
