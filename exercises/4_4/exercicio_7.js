// exercicio_7 parte_2 funcoes bloco 4_4
// compara duas strings e retorna verdadeiro se a segunda string for exatamente o fim da primeira string.

let stringWord = "Paralelepipedo";
let stringEnding= "pipedo";


function verificaFimPalavra( word , ending){
let igual = 0, verdade = false;     // variaveis para teste
let difTam = word.length - ending.length;       //difTam => variavel para armazenar a diferenca do tamanho das duas strings
    
if( word.length > ending.length){               // condicao para realizar o teste
    for(w = difTam, e = 0; w < word.length; w++,e++ ){      //laco com duas variaveis de incremento andando juntos
        if( ending[e] == word[w]){      // comparando cada caracter das palavras  inicio: "e" indice "0" / "w" indice "9"
        igual ++;                       // incrementando variavel p/ cada vez que condicao e' satisfeita
// console.log(ending[e], word[w]);
        }
    }
    if( igual == (ending.length)){      // validando se o teste foi bem sucedido
        verdade = true;
    }       
}
else console.log("Impossível comparar as strings"); 
return verdade;
}
console.log(verificaFimPalavra( stringWord , stringEnding));  //imprimindo o retorno da funcao direto