const jwt = require('jsonwebtoken') // import gerar token
const authConfig = require('../config/auth.config') // import hash unico de nossa aplicação


module.exports = (req, res, next) => { // 
    
    const authHeader = req.headers.authorization //busca o header de autorização

    if(!authHeader)
        return res.status(401).send({error: "token Não autorizado"});// verifaca se existe o token valido ou infromado

    const parts = authHeader.split(' '); // verifica o token e divide em 2 partes 

    if(!parts.length === 2) // verifica se o teken esta divido em 2 partes
        return res.status(401).send({error: "Token error"});
    
    const [scheme, token ] = parts; //vefricar se o teken tem 2 partes;
    
    if (!/^Bearer$/i.test(scheme))  //faz um regex e se a parte tem o Bearer
        return res.status(401).send({error: "Token mal formado"});
    
        
    jwt.verify(token, authConfig.secret, (err, decoded)=>{ // verica o token da requicao, e o hash
        if(err) return res.status(401).send({error: "Token invalido"});

        req.userId = decoded.id;

        return next();
    })


}