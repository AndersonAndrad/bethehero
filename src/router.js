// dependencies
import { Router } from 'express';

// controllers
// your code is here ex: import User from './controllers/User.Controller.js'
import Ong from './app/controllers/ongController';
import Incident from './app/controllers/incidentController';
import Profile from './app/controllers/ProfileController';
import Session from './app/controllers/SessionController';
// middlewares
// your code is here ex: import User from './middlewares/Auth.middlewares.js'

const router = Router();

router.get('/', (request, response) => {
  return response.status(200).json({
    Api_Version: 'v1',
    Status_server: 'Online',
    Documentation_Api: 'https://github.com/AndersonAndrad/betheheroBackend',
    Frontend_Aplication: 'https://be-the-hero-we.herokuapp.com/',
    Developer_API: ['Anderson Andrade'],
    Developer_linkedin: ['https://www.linkedin.com/in/andersonandrad/'],
    End: 'Thanks you for using my API',
  });
});

router.get('/test', (request, response) => {
  return response.status(200).json({ Status: 'Your application is running' });
});

router.post('/sessions', Session.create);

router.post('/ongs', Ong.store);
router.get('/ongs', Ong.index);

router.post('/incidents', Incident.store);
router.get('/incidents', Incident.index);
router.delete('/incidents/:id', Incident.delete);

router.get('/profile', Profile.index);

export default router;
