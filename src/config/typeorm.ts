import { ConnectionOptions } from 'typeorm';
import { resolve } from 'path';

const config: ConnectionOptions = {
  type: process.env.SQL_DIALECT as 'postgres' | 'mysql',
  host: process.env.SQL_HOST,
  port: Number(process.env.SQL_PORT),
  username: process.env.SQL_USER,
  password: process.env.SQL_PASS,
  database: process.env.SQL_DB_NAME,
  synchronize: false,
  entities: [resolve(__dirname, '..', 'app', 'models', '*')],
};

export default config;
