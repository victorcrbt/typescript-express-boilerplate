import { Router } from 'express';

import TestController from 'controllers/TestController';

const routes = Router();

routes.get('/', TestController.index);

export default routes;
