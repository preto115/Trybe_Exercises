const itemPrimario = [1, 2, 3, 4, 5];
let mutacaoTeste = itemPrimario;
// [].push() faz alteração diretamente em um array, de modo que se usarmos este metodo em uma copia de um determinado array, 
// o array de origem tambem sofrera mutacao.

mutacaoTeste.push(6);
console.log(mutacaoTeste); // [1, 2, 3, 4, 5, 6]
console.log(itemPrimario); // [1, 2, 3, 4, 5, 6]

const itemSecundario = [1, 2, 3, 4, 5];
let clonagemTeste = itemSecundario;
// [].concat() por sua vez nao faz alteração diretamente em um array, ao invez disso ele retorna um novo array , 
// sendo que estes novo array ,  é uma copia identica ao de origem

clonagemTeste.concat(itemPrimario);
console.log(clonagemTeste); // [1, 2, 3, 4, 5]
console.log(itemSecundario); // [1, 2, 3, 4, 5]

// Dessa forma, ao utilizarmos este metodo temos que fazer uma reassociacao para que a modificacao do metodo cause efeito
// o array de origem ficara intacto entao o novo array tera a copia da origem mais a alteracao depois do metodo.
clonagemTeste = itemSecundario.concat(6);
console.log(clonagemTeste); // [1, 2, 3, 4, 5, 6]
console.log(itemSecundario); // [1, 2, 3, 4, 5]

//exemplos com outros valores: 

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

array1.concat(array2);
console.log(array1); // [ 'a', 'b', 'c' ]


array2.concat(array1);
console.log(array2); // [ 'd', 'e', 'f' ]


// agora vamos usar o console.log() como saida de um novo array... 
// como se fosse const array = array1 + array2 / const array = array1.concat(array2) e assim teriamos console.log(array);

console.log(array1.concat(array2)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]


/* 
sendo assim temos metodos como: push(), splice(), sort()  ...etc, que fazem alteracoes em um dado array e
metodos como: concat(), slice(), filter() que fazem o contrário, ou seja , eles retornam um novo array */

// um site de alguns exemplos de metodos para array que alteram ou nao a origem: https://doesitmutate.xyz/

const array9 = ['a', 'b', 'c'];
const iterator = array9.values();

for (const value of iterator) {
  console.log(value); // expected output: "a" "b" "c"
}

console.log(iterator) // expected output: Object [Array Iterator] {}


console.log(typeof iterator); // expected output: object
console.log(typeof array9); // expected output: object

console.log(Array.isArray( array9)); // expected output: true
console.log(Array.isArray( iterator)); // expected output: false

// resumindo: em JavaScript todo array é um objeto, mas nem todo objeto é um array.
