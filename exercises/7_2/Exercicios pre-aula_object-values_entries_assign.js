/* Parte III - Object.values
O Object.values segue a mesma lógica que o Object.keys,
 a diferença está em que ele lista os valores de cada chave.
 */

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithFor = (student) => {

const nivel = Object.values(student)
console.log(nivel)
  
const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsWithFor(student));

// Com Object.values
console.log(listSkillsWithValues(student));

//===================================================
/* Veja como fica muito mais fácil obter os valores de um objeto com o uso do Object.
values através do exemplo abaixo, em que foram implementadas, de formas diferentes, 
duas funções que retornam a mesma lista de valores. */


/* Parte IV - Object.entries
Esse método funciona de forma diferente dos anteriores.
O método Object.entries retorna um array com os pares chave / valor do objeto. 
Para visualizar seu retorno, veja o exemplo abaixo:
*/
const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

/*Observe que o retorno dele é um array e que cada um de seus elementos 
é um segundo array com apenas dois dados, a chave do objeto e o seu valor. 
Para ver os valores separadamente, adicione o for abaixo ao código anterior 
e execute-o novamente. */

for(i in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[i][0]);
  console.log('Capital:', pairKeyValue[i][1]);
};


const par = Object.entries(student)
console.log(par) 
for(item in par){
  console.log(`Nome da habilidade: ${ par[item][0]} ,Nível: ${par[item][1]}`)
}

/* Parte V - Object.assign
Esse método é utilizado para copiar os valores de todas as propriedades de 
um ou mais objetos para um objeto destino. Sua estrutura é:

*/
// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);
/*
Como você pode ver, ele recebe pelo menos dois parâmetros, de forma que 
o primeiro sempre será o objeto de destino, e os parâmetros restantes serão 
os valores que serão adicionados a esse objeto destino.

Veja o exemplo abaixo:
*/

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  child: [ 'Maria', 'João' ],
  wife: 'Ana'
  } 

  Como você pode ver, o método Object.assign adicionou as propriedades de info e de family 
  ao objeto person. Observe também que a chave age aparece tanto em person como em 
  info e é sobrescrita pelo valor contido em info. Isso acontece 
  quando há propriedades repetidas entre o objeto destino e os objetos passados 
  por parâmetro, de forma que a propriedade do objeto destino sempre utilizará o último valor disponível.

Agora, observe o exemplo abaixo.
  */
 const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

/* Como pôde ver acima, o clone é exatamente igual ao objeto person, 
e se você mudar qualquer propriedade nele, observará que o objeto person também 
será modificado. Isso ocorre devido ao fato de que o objeto retornado pelo 
método Object.assign é o próprio objeto destino, que foi alterado adicionando 
as novas propriedades.

Que tal fazer um teste para confirmar isso?
*/
clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }
/*
Quando se faz o que foi feito no exemplo mais acima, ao criar uma nova variável 
para armazenar o retorno do método Object.assign, cria-se apenas um outro “caminho” 
para modificar ou acessar os dados do objeto destino (nesse caso, person). 
No exemplo abaixo, é apresentada outra forma de se copiar um objeto.
*/
const obj = { value1: 10, value2: 11 };
const cloneObj = obj;

/*
Se você modificar o cloneObj, verá que novamente teremos o mesmo resultado anterior, 
de forma que o obj também é alterado. Ok, tendo isso em vista, como faremos para 
mudar os dados do novo objeto criado sem modificar o objeto inicial?

Para resolver esse problema, podemos passar como primeiro parâmetro do Object.assign 
um objeto vazio {} e armazenar seu retorno em uma nova variável. Veja como fazer isso 
no exemplo abaixo.
*/
const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);

//Agora, apenas o objeto newPerson será modificado.

