// dependencies
import Crypto from 'crypto';

// DataBase connection
import connection from '../../database/connection';

class OngController{
  async store(request, response) {
    const {name, email, whatsapp, city, uf} = request.body;

    const id = Crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  }

  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  }
}

export default new OngController();