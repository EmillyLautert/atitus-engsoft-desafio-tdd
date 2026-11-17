const DESCONTOS = new Map([
  ['DEZ', 0.10],
  ['TRINTA', 0.30],
]);

export function calcularDesconto(codigo, valor) {
  if (typeof valor !== 'number' || !Number.isFinite(valor) || valor < 0) {
    throw new RangeError('valor deve ser um número finito não negativo');
  }

  const percentual = typeof codigo === 'string' ? (DESCONTOS.get(codigo.trim().toUpperCase()) ?? 0) : 0;
  return Math.round(valor * percentual * 100) / 100;
}

export class CalculadoraVoucher {
  calcularDesconto(codigo, valor) {
    return calcularDesconto(codigo, valor);
  }
}
