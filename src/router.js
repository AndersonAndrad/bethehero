// dependencies
import {Router} from 'express';

// controllers
  // your code is here ex: import User from './controllers/User.Controller.js'
  import Ong from './app/controllers/ongController';
  import Incident from './app/controllers/incidentController';

// middlewares
  // your code is here ex: import User from './middlewares/Auth.middlewares.js'

const router = Router();

router.get('/test', (request, response) => {
  return response.status(200).json({Status: 'Your application is running'});
});

router.post('/ongs', Ong.store);
router.get('/ongs', Ong.index);

router.post('/incidents', Incident.store);
export default router;