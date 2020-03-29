// dependencies
import express from 'express';
import cors from 'cors';

// files
import router from './router';

class App {
  constructor(){
    this.server = express();

    this.middleware();
    this.routes();
  }

  middleware(){
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes(){
    this.server.use(router);
  }
}

export default new App().server;