const express = require('express');

const routes = express.Router();

const QuestionController = require('./controllers/QuestionController');
const OptionController = require('./controllers/OptionController');
const UserController = require('./controllers/UserController');
const TestController = require('./controllers/TestController');

routes.get('/', (req, res) => {
    res.send('Eng. de Software: Adolpho Cavalcanti');
});

//Questões
routes.post('/questions', QuestionController.store);
routes.get('/questions', QuestionController.show);

//Opções
routes.post('/questions/:id/options', OptionController.store);
routes.get('/options', OptionController.show);

//Usuário
routes.post('/users', UserController.store);
routes.get('/users/:id', UserController.show);

//Teste
routes.post('/tests/:id/users', TestController.store);

module.exports = routes;