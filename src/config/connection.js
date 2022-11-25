const mongoose = require('mongoose');//gerencia conexao com banco de dados, chamdo a lib mongosse

/* module.exports = ()=> { //exportação de funcao pois a connection e uma função que precisa ser executada
    mongoose.connect('mongodb://localhost:27017/lojinha-castillo',
    {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    }).then(()=>{
        console.log('conectou ao BANCO!!!');
    }).catch((err)=> console.log(err)) 
}   
 */

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS


module.exports=()=>{

    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ty5gs71.mongodb.net/?retryWrites=true&w=majority`
    ).then(()=>{
        console.log('conectou ao BANCO!!!');
    }).catch((err)=> console.log(err))
} 
