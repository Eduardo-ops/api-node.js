/* Arquivo referente a todas as rotas do usuário. */

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