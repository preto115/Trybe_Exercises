const math = require('./jest-mock');
/*
jest.mock('./jest-mock')
math.somar.mockImplementation((a, b) => a + b)
*/
test("#somar", () => {
  // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  const mockSomar = jest.spyOn(math,'somar').mockImplementation((a, b) => a + b);

  math.somar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(2, 2)).toBe(4);
// neste caso como existe uma funcao sleep em soma , o retorno nao funciona
// no caso para funcionar, uma implementacao na linha 3 e 4 deveria alterar isso pra funcionar
// ou como foi feito na linha 8 com um .mockImplementation((a, b) => a + b) depois de chmar spyOn()

});
// Podemos notar no exemplo que a simulação da função é criada, mas sua implementação é mantida, e a soma realizada.