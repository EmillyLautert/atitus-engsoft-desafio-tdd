import { ServicoNotificacao } from '../../src/servicoNotificacao.js';
import { jest } from '@jest/globals';

describe('ServicoNotificacao', () => {
  test('envia boas-vindas pelo gateway injetado e repassa o resultado', async () => {
    const gatewayEmail = { enviar: jest.fn().mockResolvedValue(true) };
    const service = new ServicoNotificacao(gatewayEmail);

    await expect(service.enviarBoasVindas({ email: 'ana@example.com' })).resolves.toBe(true);
    expect(gatewayEmail.enviar).toHaveBeenCalledTimes(1);
    expect(gatewayEmail.enviar).toHaveBeenCalledWith('ana@example.com', 'Bem-vindo!');
  });

  test('propaga falhas do gateway', async () => {
    const error = new Error('Falha no envio');
    const service = new ServicoNotificacao({ enviar: jest.fn().mockRejectedValue(error) });
    await expect(service.enviarBoasVindas({ email: 'ana@example.com' })).rejects.toBe(error);
  });

  test('rejeita uma dependência sem contrato de envio', () => {
    expect(() => new ServicoNotificacao({})).toThrow(TypeError);
  });
});

