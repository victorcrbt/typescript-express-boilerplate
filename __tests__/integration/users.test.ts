import request from 'supertest';
import { createConnection, Connection } from 'typeorm';

import App from '../../src/App';
import typeormConfig from '../../src/config/typeorm';

import truncate from '../util/truncate';

describe('Users route', () => {
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

  it('should register a new user', async () => {
    const response = await request(App).post('/users');

    expect(response.status).toEqual(201);
    expect(response.body).toHaveProperty('id', 1);
  });
});
