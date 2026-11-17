export class EmailValidator {
  isValid(email) {
    return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

export class PasswordValidator {
  isValid(password) {
    return typeof password === 'string' && password.length >= 8;
  }
}

export class AgeValidator {
  isValid(age) {
    return typeof age === 'number' && Number.isFinite(age) && age >= 18;
  }
}

export function validadorUsuario(usuario) {
  if (!usuario || typeof usuario !== 'object') return false;

  return new EmailValidator().isValid(usuario.email)
    && new PasswordValidator().isValid(usuario.password)
    && new AgeValidator().isValid(usuario.age);
}
