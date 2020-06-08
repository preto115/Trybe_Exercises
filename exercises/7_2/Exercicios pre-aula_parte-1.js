const pessoa = {
  firstName: 'Elisângelo',
  age: 39,
  job: 'Web Developer'
};

function AdicionaDadosPessoa(pessoa, dado, valor){
  let novoDado = dado;
  dado = valor
  pessoa[novoDado] = dado
}

AdicionaDadosPessoa(pessoa, 'lastName', 'Alves Ferreira');
AdicionaDadosPessoa(pessoa, 'casado', 'Sim');
AdicionaDadosPessoa(pessoa, 'filhos', 1);
AdicionaDadosPessoa(pessoa, 'fullName', `${pessoa.firstName} ${pessoa.lastName}`);

console.log(pessoa)
