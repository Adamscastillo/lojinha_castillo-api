const mongoose = require('mongoose'); //chamando o mongoose
const bcrypt = require('bcrypt');


//colecao que irar ser guardada dentro do banco de dados com as inforaçoes que irao ser necessárias no front-end
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  cep: {
    type: Number,
    require: true
  },
  adress: {
    type: String,
    require: true
  },
  number: {
    type: Number,
    require: true
  },
  district: {
    type: String,
    require: true
  },
  city: {
    type: String,
    require: true
  },
  uf: {
    type: String,
    require: true
  },
  createrdAt: {
    type: Date,
    default: Date.now,
  },


});

// hash de passwaord
UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
})

const User = mongoose.model('User', UserSchema) //schema de usuario

module.exports = User;
