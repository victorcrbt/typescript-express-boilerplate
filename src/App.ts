import './bootstrap';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import './database';

import routes from './routes';
import globalExceptionHandler from './error/globalExceptionHandler';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private routes(): void {
    this.server.use(routes);
    this.server.use(globalExceptionHandler);
  }
}

export default new App().server;
