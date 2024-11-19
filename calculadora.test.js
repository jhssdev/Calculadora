const { soma, subtracao, multiplicacao, divisao } = require('./script.js');


describe("Testes da Calculadora", () => {
  test("Soma de 2 + 3 deve ser 5", () => {
    expect(soma(2, 3)).toBe(5);
  });

  test("Subtração de 5 - 3 deve ser 2", () => {
    expect(subtracao(5, 3)).toBe(2);
  });

  test("Multiplicação de 2 * 3 deve ser 6", () => {
    expect(multiplicacao(2, 3)).toBe(6);
  });

  test("Divisão de 6 / 3 deve ser 2", () => {
    expect(divisao(6, 3)).toBe(2);
  });

  test("Divisão por zero deve lançar erro", () => {
    expect(() => divisao(6, 0)).toThrow("Não é possível dividir por zero");
  });
});
