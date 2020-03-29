// dependencies

// database connection
import connection from '../../database/connection';

class SessionController {
  async create (request, response) {
    const { id } = request.body;

    const ong = await connection('ongs')
    .where('id', id)
    .select('name')
    .first();

    if (!ong) {
      return response.status(400).json({Status: 'error, no ONG found this id'});
    }

    return response.status(200).json(ong);
  
  }
}

export default new SessionController();