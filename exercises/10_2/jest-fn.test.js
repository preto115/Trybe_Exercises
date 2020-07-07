const service = require('./jest-fn.js');
/*
Ao declarar service.randomRgbColor = jest.fn();, estamos dizendo ao teste que, a partir daquele momento, 
estamos tomando controle da função service.randomRgbColor e que ela será uma simulação da função original.
*/
test("#randomRgbColor", () => {
// testando se a função foi chamada
// ===>  service.randomRgbColor();    // dessa maneira o teste vai dar erro
  service.randomRgbColor = jest.fn();     // maneira correta de chamr uma funcao.
// testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, 
// para esse teste, isso não importa! Queremos saber se ela foi chamada e ponto final.
service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});

/*
Duas propriedades nos permitem fazer essa declaração: mockReturnValue(value) e mockReturnValueOnce(value). 
O mockReturnValue define um valor padrão de retorno. Já o mockReturnValueOnce retorna o valor definido apenas uma vez, 
e é importante, pois pode ser encadeado para que chamadas sucessivas retornem valores diferentes.
*/

test("#randomRgbColor", () => {
  // testando se a função foi chamada e qual seu retorno
  service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
  expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
});
/*
Na terceira linha do exemplo acima, estamos manualmente chamando a função service.randomRgbColor();.
 Caso isso não seja feito, o teste expect(service.randomRgbColor).toHaveBeenCalled() irá falhar. 
 Isso acontece porque mockar uma função redefine seu comportamento, mas não a executa.
*/

/*
Além disso, podemos também testar quantas vezes a função foi chamada. Para isso, 
utilizamos a propriedade toHaveBeenCalledTimes(number):
*/


test("#randomRgbColor", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  service.randomRgbColor = jest.fn()
    .mockReturnValue('default value')  // neste caso .mockReturnValueOnce tem precedencia em cima de mockReturnValue na execucao dos testes
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(service.randomRgbColor()).toBe("first call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(service.randomRgbColor()).toBe("second call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(service.randomRgbColor()).toBe("default value");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
});
/*
É possível implementar vários comportamentos em uma simulação. No exemplo acima, note que 
a implementação mockReturnValueOnce se sobrepõe em relação a mockReturnValue, que se torna 
um padrão apenas após os retornos de mockReturnValueOnce serem executados.

*/