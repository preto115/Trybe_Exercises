/* NodeJS Assert
O módulo Assert provê uma forma de testar expressões. Se essa expressão é avaliada 
com o valor 0 ou false, o teste falhará e o programa será terminado. 
Esse módulo já vem junto com o NodeJS.
Esse módulo possui vários métodos que nos auxiliam nos testes:

assert.equal()
assert.deepStrictEqual()
assert.notEqual()
assert.ok()
assert.fail()

assert() , assert.equal() , assert.ok() e  assert.notEqual() fazem praticamente a mesma coisa.

Um exemplo simples do uso do módulo Assert:
*/
const assert = require('assert');

assert.equal(50, 50); // OK
//assert.equal(50, 70); // AssertionError: 50 == 70
/* 
Os dois códigos acima utilizam o método assert.equal. 
Esse método compara o primeiro e o segundo parâmetro e, 
se forem diferentes, mostra um erro com a mensagem que está no terceiro parâmetro, 
se houver (o terceiro parâmetro é opcional).
*/
function division(x, y) {
  return x / y;
}

const expected = division(9, 3);

assert.equal(expected, 3, 'Mensagem customizada do erro');

//===================================
function add(a, b) {
  return a + b;
}

const expectedSoma = add(1, 2);

assert(expectedSoma === 3, 'one plus two is three');
assert.ok(expectedSoma === 3, 'one plus two is three');
assert.equal(expectedSoma, 3, 'one plus two is three');
assert.notEqual(expectedSoma, 4, 'one plus two is three (NOT Four!)');
//===================================
//É possível também testar estruturas:

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];
// deepEqual checks the elements in the arrays are identical
assert.deepEqual(list1, list2, 'deepEqual checks the elements in the arrays are identical');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.deepEqual(person1, person2, 'these two objects are the same');

const person3 = { name: 'john', age: 19 };

assert.notDeepEqual(person1, person3, 'these two objects are different');
//====================================
// declaração da função division, definida anteriormente...

assert.equal(division(10, 2), 5); // OK
//assert.equal(division(10, 0), 0); // 💣
/* O primeiro assert.equal funciona e não apresenta erro, mas o segundo deixa evidente
 uma fragilidade na implementação da função division, pois não poderia ser 
 possível realizar a divisão por 0. Nesse caso, devemos melhorar a implementação 
 da função division, a fim de não termos mais esse estado inconsistente.
 */

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}


assert.equal(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK
console.log(division(10,0));

/*
Atualizamos o teste para refletir a mudança de implementação, ou seja, 
os testes unitários também nos ajudam a identificar 
casos especiais que podem levar nossas funções a estados inválidos.
*/