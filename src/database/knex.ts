import knex from 'knex';

export default knex({
  client: process.env.SQL_DIALECT,
  connection: {
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: process.env.SQL_DB_NAME,
  },
});
