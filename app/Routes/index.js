/* É necessáro Routes para acessar os controladores. */

/* Juntando todas as rotas */

/* Variável constante "UserRoute" que como exigência, nos permite
acessar o "UserRoutes e sua rotas" */
const UserRoute = require('./UserRoute');

module.exports = (app) => {
    UserRoute(app)
}