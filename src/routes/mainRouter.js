const express = require('express');
const mainRouter = express.Router();
const clientRoute = require('../routes/clientRoute')


mainRouter.use("/" , clientRoute);



module.exports = {mainRouter};
