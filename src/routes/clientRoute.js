const {Router} = require('express')
const axios = require('axios')

const clientRoute = Router()

clientRoute.get( "/client" , async (req, res) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const data = response.data;
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Hubo un error al obtener los datos.' });
    }
  });


  module.exports = clientRoute;