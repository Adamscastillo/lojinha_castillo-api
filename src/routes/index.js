//
const routerManager = require('express').Router()// gerencia as rotas, chama uma função especifca do express
const user = require('./user.routes') // import das rotas de usuarios

routerManager.use('/user', user ) // implementando a rota de usuarios

module.exports = routerManager