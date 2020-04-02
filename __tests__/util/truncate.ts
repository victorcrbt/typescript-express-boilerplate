import { Connection } from 'typeorm';
import database from '../../src/database';

import knex from '../../src/database/knex';

export default function truncate(connection?: Connection) {
  if (connection) {
    return Promise.all(
      connection.entityMetadatas.map(async (entity) => {
        const { name, tableName } = entity;

        await connection.getRepository(name).clear();

        await knex(tableName).truncate();

        // if (connection.options.type === 'sqlite') {
        //   connection.query(
        //     `UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='${tableName}'`
        //   );
        // } else if (connection.options.type === 'postgres') {
        //   connection.query(`ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`);
        // } else if (
        //   connection.options.type === 'mysql' ||
        //   connection.options.type === 'mariadb'
        // ) {
        //   connection.query(`ALTER TABLE ${tableName} AUTO_INCREMENT = 1`);
        // }
      })
    );
  }

  return Promise.all(
    database.connection.entityMetadatas.map(async (entity) => {
      const { name, tableName } = entity;

      await database.connection.getRepository(name).clear();

      await knex(tableName).truncate();

      // if (database.connection.options.type === 'sqlite') {
      //   database.connection.query(
      //     `UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='${tableName}'`
      //   );
      // } else if (database.connection.options.type === 'postgres') {
      //   database.connection.query(
      //     `ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`
      //   );
      // } else if (
      //   database.connection.options.type === 'mysql' ||
      //   database.connection.options.type === 'mariadb'
      // ) {
      //   database.connection.query(
      //     `ALTER TABLE ${tableName} AUTO_INCREMENT = 1`
      //   );
      // }
    })
  );
}