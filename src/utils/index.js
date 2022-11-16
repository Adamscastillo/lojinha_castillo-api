const jwt = require('jsonwebtoken') // import gerar token
const authConfig = require('../config/auth.config') // import hash unico de nossa aplicação


function generateToken(params = {}){
    return jwt.sign( params, authConfig.secret, {
      expiresIn:86400, //24 horas
    });
  
  }

module.exports = {generateToken}