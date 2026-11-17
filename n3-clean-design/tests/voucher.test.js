import { calcularDesconto, CalculadoraVoucher } from '../src/calculadoraVoucher.js';

describe('calcularDesconto', () => {
  test.each([
    ['DEZ', 100, 10],
    ['TRINTA', 100, 30],
    ['NATAL10', 100, 0],
    [' desconhecido ', 49.99, 0],
    [' DEZ ', 19.99, 2],
  ])('calcula o desconto do cupom %s sobre %s', (codigo, valor, esperado) => {
    expect(calcularDesconto(codigo, valor)).toBe(esperado);
  });

  test.each([-1, NaN, Infinity, '100'])('rejeita valor inválido: %s', valor => {
    expect(() => calcularDesconto('DEZ', valor)).toThrow(RangeError);
  });

  test('oferece a operação pela calculadora', () => {
    expect(new CalculadoraVoucher().calcularDesconto('TRINTA', 50)).toBe(15);
  });
});
