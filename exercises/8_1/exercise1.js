/*
Agora a prática
Estes exercícios praticam os conceitos de Higher Order Functions
 associados a outros já vistos, como arrow functions, 
 template literals, objetos e temas dos fundamentos. 
 Essa mistura de conceitos é muito importante para seu 
 aprendizado, então use tudo o que sabe para resolver os exercícios!
*/
//Encontre o nome da pessoa autora do livro nascida no ano de 1947.
//Dica: use a função find.
const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const authorBornIn1947 = (ano) => {
    const author = books.find((book) => book.author.birthYear === ano)
    return author.author.name;
}
console.log(authorBornIn1947(1947))

assert.equal(authorBornIn1947(1947), 'Stephen King');
