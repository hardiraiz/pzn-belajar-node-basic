import { UserRepository } from '../src/user-repository.js';
import { UserService } from '../src/user-service.js';


jest.mock('../src/user-repository.js');

const repository = new UserRepository();
const service = new UserService(repository);

test('test mock user save', () => {
    const user = {id: 1, name: 'Hardi'}

    service.save(user);
    expect(repository.save).toHaveBeenCalled();
    expect(repository.save).toHaveBeenCalledWith(user);
});

test('test mock class findById', () => {
    const user = {id: 1, name: 'Hardi'};
    repository.findById.mockReturnValueOnce(user);
    expect(service.findById()).toEqual(user);
    expect(repository.findById).toHaveBeenCalled();
});

test('test mock class findAll', () => {
    const users = [{id: 1, name: 'Hardi'}, {id: 2, name: 'Raiz'}];
    repository.findAll.mockReturnValueOnce(users);
    expect(service.findAll()).toEqual(users);
    expect(repository.findAll).toHaveBeenCalled();
});
