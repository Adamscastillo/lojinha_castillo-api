const queryUser = require('../database/query/user');
const {generateToken} = require('../utils')


module.exports = {


  async find(req, res) {

    res.send({ ok: true }); //resposta do corpo body


  },


};


