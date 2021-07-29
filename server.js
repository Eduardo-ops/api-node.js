/* Configuração que permite aceitar requisições
 de qualquer origem com o cors e retorna tudo em json. */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
require('./app/Routes/index')(app);

app.use(cors());
app.use(express.json());
/* app.listen(port); */

/* Exibindo uma mensagem de sucesso no console ao funcionamento de êxito da api */
app.listen(port, function () {
    console.log('Server ON Port ' + port);
});