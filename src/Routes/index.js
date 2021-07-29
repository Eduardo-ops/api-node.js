/* É necessáro Routes para acessar os controladores. */

/* Juntando todas as rotas */
const UsuarioRoute = require('./UsuarioRoute');

module.exports = (app) => {
    UsuarioRoute(app)
}