import { validadorUsuario } from './validador.js';

export class UserService {
  constructor(userRepository, validator = validadorUsuario) {
    if (!userRepository || typeof userRepository.save !== 'function') {
      throw new TypeError('userRepository deve implementar save(usuario)');
    }
    this.userRepository = userRepository;
    this.validator = validator;
  }

  async register(usuario) {
    if (!this.validator(usuario)) return false;
    await this.userRepository.save(usuario);
    return true;
  }
}
