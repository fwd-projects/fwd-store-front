import { Express } from 'express';
import { requireAuth } from '../../middlewares/require-auth';
import { validateRequest } from '../../middlewares/validate-request';

import UserController from './user.controller';
import { getUserValidation } from './user.schemas';

const userRouter = (app: Express) => {

  app.get('/me', requireAuth, UserController.getProfile);
  app.get('/users', requireAuth, UserController.getUsers);
  app.get('/users/:id', requireAuth, validateRequest(getUserValidation), UserController.getUser);
  app.get('/users/:id/orders', requireAuth, UserController.getUserOrders);
  app.get('/users/:id/completed-orders', requireAuth, UserController.getUserCompletedOrders);
  app.get('/users/:id/current-order', requireAuth, UserController.getUserCurrentOrder);

  // Auth
  app.post('/users', UserController.signUp);
  app.post('/users/login', UserController.login);

};

export default userRouter;