export class UserRepository {
  async save(_usuario) {
    throw new Error('UserRepository.save deve ser implementado pelo adaptador de persistência');
  }
}

export class InMemoryUserRepository extends UserRepository {
  constructor() {
    super();
    this.users = [];
  }

  async save(usuario) {
    this.users.push({ ...usuario });
  }
}
