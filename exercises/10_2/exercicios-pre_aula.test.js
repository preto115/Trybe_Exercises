

const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

test('quando o número aleatório é par, a função retorna `true`', () => {
  expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
})

/*
Para fixar
Baseando-se nos códigos acima, defina uma função que retorna um número aleatório entre 1 e 100. 
A seguir, defina uma outra função que recebe um parâmetro e checa se o número aleatório é divisível pelo número do parâmetro. Assim:
*/
let randomNumber = () => Math.floor(Math.random() * 100);// Lógica de gerar o número

const isDivisible = (number) => (randomNumber() % number) === 0;

test(' verifica que a função randomNumber() é chamada quando invocamos a isDivisible()', () =>{
  randomNumber = jest.fn()
    .mockReturnValue(4)
    .mockReturnValueOnce(6)
    .mockReturnValueOnce(5);


  expect(randomNumber).toHaveBeenCalledTimes(0);

  expect(isDivisible(2)).toBe(true);
  expect(randomNumber).toHaveBeenCalledTimes(1);

  expect(isDivisible(2)).toBe(false);
  expect(randomNumber).toHaveBeenCalledTimes(2);

  expect(isDivisible(3)).toBe(false);
  expect(randomNumber).toHaveBeenCalledTimes(3);
  expect(isDivisible(2)).toBe(true);
  expect(isDivisible(4)).toBe(true);
  expect(randomNumber).toHaveBeenCalledTimes(5);
});