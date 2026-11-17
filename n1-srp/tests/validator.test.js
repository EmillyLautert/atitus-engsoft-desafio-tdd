import { AgeValidator, EmailValidator, PasswordValidator, validadorUsuario } from '../src/validador.js';

describe('EmailValidator', () => {
  const validator = new EmailValidator();
  test.each(['test@atitus.edu.br', 'a+b@example.co'])('accepts %s', email => expect(validator.isValid(email)).toBe(true));
  test.each(['', 'invalid', 'a@b', 'a b@example.com', null])('rejects %s', email => expect(validator.isValid(email)).toBe(false));
});

describe('PasswordValidator', () => {
  const validator = new PasswordValidator();
  test('accepts passwords with at least 8 characters', () => expect(validator.isValid('12345678')).toBe(true));
  test('rejects shorter or non-string values', () => {
    expect(validator.isValid('1234567')).toBe(false);
    expect(validator.isValid(null)).toBe(false);
  });
});

describe('AgeValidator', () => {
  const validator = new AgeValidator();
  test('requires age 18 or older', () => {
    expect(validator.isValid(18)).toBe(true);
    expect(validator.isValid(17)).toBe(false);
  });
});

describe('validadorUsuario', () => {
  const user = { email: 'test@atitus.edu.br', password: 'password123', age: 20 };
  test('accepts a valid user', () => expect(validadorUsuario(user)).toBe(true));
  test.each([
    [{ ...user, email: 'invalid' }],
    [{ ...user, password: 'short' }],
    [{ ...user, age: 17 }],
    [null],
  ])('rejects invalid user data', invalidUser => expect(validadorUsuario(invalidUser)).toBe(false));
});
