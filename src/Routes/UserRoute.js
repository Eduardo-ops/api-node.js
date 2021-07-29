/* 
Arquivo referente a todas as rotas do usuário. 
Toda vez que criarmos uma rota para um determinado
objeto, seja ele um product ou qualquer outro a mais
devemos importar ele em index.js como está feito com 
Usuario
*/

/* Variável constante "UserController" que tem por exigência,
permitir o acesso aos métodos de UserController em Controller. */
const UserController = require('../Controllers/UserController');

/* Rotas de cada método */
module.exports = (app) => {
    app.post('/user', UserController.post);
    app.put('/user/:id', UserController.put);
    app.delete('/user/:id', UserController.delete);
    app.get('/users', UserController.get);
    app.get('/user/:id', UserController.getbyId);
}