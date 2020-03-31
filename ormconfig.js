const { join } = require('path');

module.exports = {
  type: process.env.SQL_DIALECT,
  host: process.env.SQL_HOST,
  port: process.env.SQL_PORT,
  username: process.env.SQL_USER,
  password: process.env.SQL_PASS,
  database: process.env.SQL_DB_NAME,
  synchronize: false,
  entities: [join(__dirname, 'src', 'app', 'models', '**', '*.{ts,js}')],
  migrations: [join(__dirname, 'src', 'database', 'migrations', '**', '*.ts')],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
