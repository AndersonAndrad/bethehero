// dependencies

// DataBase connection
import connection from '../../database/connection';

class IncidentController {
  async store(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.auth;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return response.json({ id });
  }
}

export default new IncidentController();