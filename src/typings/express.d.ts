import * as express from 'express';

declare module 'express' {
  export interface ControllerMethod {
    (req: express.Request, res: express.Response): Promise<express.Response>;
  }
}
