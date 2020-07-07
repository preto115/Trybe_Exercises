/*Uma vez que mockarmos todo o arquivo math.js e, portanto, passemos a simular o comportamento de todas as 
suas funções, caso passemos os parâmetros 1 e 2 para a função somar, por exemplo, o retorno será "undefined". 
Isso se dá porque a simulação deixou de acessar o comportamento da função original do math.js. Apesar de podermos 
definir um retorno com mockReturnValue, há casos em que é útil ir além dessa capacidade de retornar valores e 
criar um novo comportamento para a função simulada. É o que o método mockImplementation(func) faz. 
Ele aceita uma função que deve ser usada como implementação.

*/
const math = require('./jest.mock()');
jest.mock("./jest.mock()");

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});