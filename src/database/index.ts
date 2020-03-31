import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';

import config from '../config/typeorm';

class Database {
  public connection: Connection;

  constructor() {
    this.init();
  }

  async init(): Promise<void> {
    this.connection = await createConnection(config);
  }
}

export default new Database();
