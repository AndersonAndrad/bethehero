// dependencies
import Knex from 'knex';
import config from '../../knexfile';

const connection = Knex(config.development);



export default connection;