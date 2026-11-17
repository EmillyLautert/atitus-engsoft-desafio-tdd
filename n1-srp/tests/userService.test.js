import { UserService } from '../src/userService.js';
import { InMemoryUserRepository } from '../src/userRepository.js';

const validUser = { email: 'ana@example.com', password: 'password123', age: 20 };

describe('UserService and persistence boundary', () => {
  test('persists valid users through the injected repository', async () => {
    const repository = new InMemoryUserRepository();
    const service = new UserService(repository);

    await expect(service.register(validUser)).resolves.toBe(true);
    expect(repository.users).toEqual([validUser]);
  });

  test('does not persist invalid users', async () => {
    const repository = new InMemoryUserRepository();
    const service = new UserService(repository);

    await expect(service.register({ ...validUser, password: 'short' })).resolves.toBe(false);
    expect(repository.users).toEqual([]);
  });

  test('requires a repository with the save contract', () => {
    expect(() => new UserService({})).toThrow(TypeError);
  });
});
