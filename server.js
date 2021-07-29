/* Configuração que permite aceitar requisições
 de qualquer origem com o cors e retorna tudo em json. */
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.listen(3333);