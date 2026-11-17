export class ServicoNotificacao {
  constructor(gatewayEmail) {
    if (!gatewayEmail || typeof gatewayEmail.enviar !== 'function') {
      throw new TypeError('gatewayEmail deve implementar enviar(email, mensagem)');
    }
    this.gatewayEmail = gatewayEmail;
  }

  enviarBoasVindas(usuario) {
    if (!usuario || typeof usuario.email !== 'string' || usuario.email.length === 0) {
      throw new TypeError('usuario deve possuir um email válido');
    }
    return this.gatewayEmail.enviar(usuario.email, 'Bem-vindo!');
  }
}
