//*frameworks - gerenciador de rotas
const express = require ('express'); // busca da lib express em node_modules
const bodyParser = require('body-parser');//vai me dizer com que iremos trabalhar tipo json
const morgan = require('morgan') //monitora rotas que estao sendo acessadas no app
const cors = require('cors')//permite a conexao do mesmo local
const app = express();  // executa o express e guardando em uma variavel chamada App
//import axios from "axios";
//import qs from "query-string";




require('dotenv').config() // chamando o dotenv


const routerManager = require('../routes') // import da rotas




app.use(cors({allowedHeaders:"*",origin:'https://ecomerce-lojinha-castillo.vercel.app',  optionsSuccessStatus: 200,})); //chamando o cors
app.use(bodyParser.json()); //executa o bodyPaser para usar o json
app.use(morgan('dev'))//ambiente de desenvolvimento 
app.use('/v1', routerManager); // rota geral de versao, vai ser usado depois do Barra

module.exports = app