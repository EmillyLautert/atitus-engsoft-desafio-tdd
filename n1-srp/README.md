# 🟢 Nível 1: SRP e persistência

As regras de validação ficam em validadores especializados (`EmailValidator`, `PasswordValidator` e `AgeValidator`). `UserService` coordena a regra de cadastro e só chama `UserRepository.save` depois de validar o usuário. A persistência fica atrás do contrato `UserRepository`; `InMemoryUserRepository` é um adaptador simples para demonstrar essa separação sem banco externo.

Os testes cobrem a regra de validação, o fluxo de cadastro, persistência de usuário válido e ausência de persistência para usuário inválido. O fluxo de desenvolvimento segue Red (testes do comportamento esperado), Green (implementação mínima) e Refactor (extração dos validadores e da fronteira de persistência).

### Como rodar

```bash
npm install && npm test
```
