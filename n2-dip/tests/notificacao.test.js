import { ServicoNotificacao } from '../src/servicoNotificacao.js';
import { jest } from '@jest/globals';

describe('ServicoNotificacao', () => {
  test('mock verifica que o gateway recebe os dados corretos', async () => {
    const gatewayEmail = { enviar: jest.fn().mockResolvedValue(true) };
    const service = new ServicoNotificacao(gatewayEmail);

    await expect(service.enviarBoasVindas({ email: 'ana@example.com' })).resolves.toBe(true);
    expect(gatewayEmail.enviar).toHaveBeenCalledTimes(1);
    expect(gatewayEmail.enviar).toHaveBeenCalledWith('ana@example.com', 'Bem-vindo!');
  });

  test('stub fornece uma resposta controlada sem enviar email real', async () => {
    const gatewayStub = { enviar: async () => 'queued-by-stub' };
    const service = new ServicoNotificacao(gatewayStub);

    await expect(service.enviarBoasVindas({ email: 'ana@example.com' })).resolves.toBe('queued-by-stub');
  });

  test('propaga falhas do gateway', async () => {
    const error = new Error('Falha no envio');
    const gatewayStub = { enviar: async () => { throw error; } };
    const service = new ServicoNotificacao(gatewayStub);

    await expect(service.enviarBoasVindas({ email: 'ana@example.com' })).rejects.toBe(error);
  });

  test('rejeita uma dependência sem contrato de envio', () => {
    expect(() => new ServicoNotificacao({})).toThrow(TypeError);
  });
});
