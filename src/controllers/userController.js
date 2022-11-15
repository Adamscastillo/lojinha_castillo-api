const queryUser = require("../database/query/user");
const bcrypt = require('bcrypt')

module.exports = {

   //funcao que vai retorna todos os usuarios
  async find(req, res) {
    
    try {
      const user = await queryUser.find(); //find busca e lista todos os usuarios
      res.json({ error: false, user }); //resposta do corpo body
    } catch (err) {
      res.json({ error: true, message: err.message }); //resposta do corpo body
    }
  },

  // funcao que cria os usuarios
  async create(req, res) {
    try {
      const user = req.body; //recebe o do corpo da requisição
      const responde = await queryUser.save(user);
      res.json({ error: false, message: "Usuário cadastrado com Sucesso" }); //resposta do corpo body
    } catch (err) {
      res.json({ error: true, message: "e-mail já registardo" }); //resposta do corpo body
    }
  },

 //auth de usuario

 async auth (req, res) {

  try {

    const {email, password} = req.body; //buscar pelo email e password no banco de dados e faz a autenticação
    const user = await queryUser.findOne(email, true)
   
    
    if (!user) //se o usuario nao exister retorna a mensagem de error
      return res.status(400).send({error: "Usuário não cadastrado"});
    
    if (!await bcrypt.compare(password, user.password)) //ele verica se a senha digita e igual a senha criada e que esta no banco de dados usando o campare
      return res.status(400).send({error: "Senha ou Email invalidos"})    
      
    user.password = undefined;
    return res.json({user})  // da uma resposta se o usuario logou normalmente com o usuario
      
  } catch (err) {

    res.json({ error: true, message: err.message })
    
          
  }
},










  


  // funcao de update, atualização
  async updade(req, res) {
    try {
      const id = req.params.id; //requer os parametro da requisição pelo id
      const UserUpdated = await new queryUser.update(id); //iniciando a class user
      res.json({ error: false, user: UserUpdated }); //resposta do corpo body
    } catch (err) {
      res.json({ error: true, message: err.message }); //resposta do corpo body
    }
  },
  // funcao de Delete
  async delete(req, res) {
    try {
      const id = req.params.id; //requer os parametro da requisição pelo id

      await queryUser.delete(id);
      return res.status(200).json({ message: "usuario deletado" }); //resposta do corpo body
    } catch (err) {
      res.json({ error: true, message: err.message }); //resposta do corpo body
    }
  },
  // buscar pelo ID
  async findById(req, res) {
    try {
      const id = req.params.id; //requer os parametro da requisição pelo id
      const user = await queryUser.findById(id); //iniciando a class user
      res.json({ error: false, user }); //resposta do corpo body
    } catch (err) {
      res.json({ error: true, message: err.message }); //resposta do corpo body
    }
  },

  



};
