//bloco 4_4
// exercicio_parte_2 Funcoes, programa diz se palavra eh um palindromo ( se a palavra lida de traz pra frente eh a mesma coisa)

let str = "arara";

function verificaSeEhPalindromo(palavra){
    let palindromo="";
    for(i = palavra.length-1; i >= 0; i--){ // laco de repeticao decrescente pra inverter a palavra.
        palindromo += palavra[i];
    }
   // retorna o resultado da verificacao da palavra inserida
    
        return (palavra === palindromo);
}

// chamando a funcao para fazer a verificacao.
let palindrome = verificaSeEhPalindromo(str);
console.log( palindrome);