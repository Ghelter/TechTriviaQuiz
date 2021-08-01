const express = require('express');
const route = express.Router();

const services = require('../services/render')
const controller = require('../controller/controller')


//home route
route.get('/', services.homeroutes);

route.get('/highscores', services.highscores)

route.get('/iTGame', services.iTGame)

route.get('/awsQuiz', services.awsQuiz)

route.get('/endIT', services.endIT)

route.get('/awsEnd', services.awsEnd)

//calls to create
route.post('/api/name', controller.create);
route.post('/api/AWSname', controller.create);
//call to find highscores
route.get('/api/name', controller.find);

module.exports = route;