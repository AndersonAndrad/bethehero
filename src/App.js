// dependencies
import express from 'express';

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
  }

  routes(){
    this.server.use(router);
  }
}

export default new App().server;