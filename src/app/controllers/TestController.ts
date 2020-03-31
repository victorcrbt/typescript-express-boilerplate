import { ControllerMethod } from 'express';

class TestController {
  public index: ControllerMethod = async (req, res) =>
    res.send('Hello, ESLint!');
}

export default new TestController();
