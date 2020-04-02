import { createConnection, Connection } from 'typeorm';

import typeormConfig from '../../src/config/typeorm';

import User from '../../src/app/models/User';

import truncate from '../util/truncate';

describe('User Model', () => {
  let connection: Connection;

  beforeAll(async () => {
    connection = await createConnection(typeormConfig);
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    await truncate(connection);
  });

  it('should add new user', async () => {
    const user = User.create({
      name: 'John Doe',
      password_hash: '123456',
    });

    await user.save();

    expect(user.id).toEqual(1);
    expect(user.name).toEqual('John Doe');
    expect(user.password_hash).toEqual('123456');
  });
});
