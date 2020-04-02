import { ControllerMethod } from 'express';

import User from 'models/User';

class TestController {
  public store: ControllerMethod = async (req, res) => {
    const user = User.create({
      name: 'John Doe',
      password_hash: '123456',
    });

    await user.save();

    return res.status(201).json(user);
  };
}

export default new TestController();
