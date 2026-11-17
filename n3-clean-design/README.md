# 🔴 Nível 3: Clean Design pelo ciclo RGR

Este exercício parte da função legada `calcularDesconto`, que inicialmente retornava sempre zero. A refatoração é guiada pelos testes de comportamento:

1. **Red:** testes de aceitação para `DEZ` (10%), `TRINTA` (30%) e cupom desconhecido (0%) descrevem as regras e falham contra o retorno legado.
2. **Green:** implementação mínima calcula os percentuais esperados e rejeita valores inválidos.
3. **Refactor:** percentuais ficam numa tabela de consulta, a entrada do cupom é normalizada, o cálculo é arredondado a centavos e a função fica coberta também pela classe `CalculadoraVoucher`.

O teste antigo de exemplo com `NATAL10` não correspondia às regras do desafio; ele agora verifica que cupons não reconhecidos não dão desconto.

### Como rodar

```bash
npm install && npm test
```
