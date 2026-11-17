import { calcularDesconto, CalculadoraVoucher } from '../../src/calculadoraVoucher.js';

describe('calcularDesconto', () => {
  test.each([
    ['DEZ', 100, 10],
    ['TRINTA', 100, 30],
    ['natal10', 100, 0],
    [' desconhecido ', 49.99, 0],
    [' DEZ ', 19.99, 2],
  ])('calculates %s for total %s', (code, total, expected) => {
    expect(calcularDesconto(code, total)).toBe(expected);
  });

  test.each([-1, NaN, Infinity, '100'])('rejects invalid totals: %s', total => {
    expect(() => calcularDesconto('DEZ', total)).toThrow(RangeError);
  });

  test('is also available through CalculadoraVoucher', () => {
    expect(new CalculadoraVoucher().calcularDesconto('TRINTA', 50)).toBe(15);
  });
});

