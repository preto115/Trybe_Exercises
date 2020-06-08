const aluno1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};
const aluno2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

/* Tente criar uma função que exiba as habilidades do objeto student. 
Cada habilidade deve ser exibida no formato “Nome da habilidade, 
Nível: valor da chave referente à habilidade”. Após tentar criar a função, 
veja a sugestão de resposta logo abaixo e compare com a sua solução.

*/
const mostraDados = (pessoa) =>{
  const skills = Object.keys(pessoa);
  for(item in skills){
  console.log(`Nome da habilidade: ${skills[item]} , Nível: ${pessoa[skills[item]]}`)
  }
}
console.log('Aluno1');
mostraDados(aluno1);
console.log('Aluno2');
mostraDados(aluno2);
