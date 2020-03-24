// dependencies
import {Router} from 'express';

// controllers
  // your code is here ex: import User from './controllers/User.Controller.js'

// middlewares
  // your code is here ex: import User from './middlewares/Auth.middlewares.js'

const router = Router();

router.get('/test', (request, response) => {
  return response.status(200).json({Status: 'Your application is running'});
})

export default router;