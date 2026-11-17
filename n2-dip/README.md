# 🟡 Nível 2: DIP com mocks e stubs

`ServicoNotificacao` depende do contrato `gatewayEmail.enviar` e recebe a implementação pelo construtor. Assim, a regra de boas-vindas não cria nem acopla a infraestrutura de e-mail.

Os testes usam um **mock** (`jest.fn`) para verificar a interação e um **stub** para fornecer respostas controladas sem rede ou envio real. Também cobrem propagação de falha e validação da dependência.

### Como rodar

```bash
npm install && npm test
```
