/*Bônus
Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

Dicas:

Uma string é um array de caracteres, então cada elemento do array é uma letra.
Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

//bloco 4_4
//exercicio bonus: recebe uma string em algarismo romana e retorna um numero que a string representa.

| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |

*/
let algRomano = "MMXIX";
let numero =0;
let numRomano = {
    I   :   1,    
    IV  :   4,
    V   :   5,
    IX  :   9,
    X   :   10,   
    XL  :   40,  
    L   :   50,   
    XC  :   90,   
    C   :   100,  
    CD  :   400,  
    D   :   500,  
    CM  :   900,  
    M   :   1000
}

for(alg in algRomano){ 
    console.log(alg, algRomano[alg]);
    //console.log(alg, numRomano[alg]);
    //console.log(algRomano.alg);
    //console.log(numRomano.alg);

    for( i in numRomano){
    
        //numero -= numRomano["i"];
        //.log(numRomano["i"]);
    if((numRomano[alg-1]) < numRomano[alg]){
       // console.log(numRomano["i"]);
        console.log(numRomano[i]);
       // console.log(numRomano[alg]);
        //console.log(numRomano[algRomano]);

           numero += numRomano[i];
           
        }
        else {
            numero += numRomano["i"];
          /*  console.log(numRomano["i"]);
            console.log(numRomano[i]);
            console.log(numRomano[alg]);
            console.log(numRomano[algRomano]);
            console.log(numRomano[numero]);
*/
        }

    } 
    
}