const app = require('./src/config/express'); //export do app da configuracao de rotos

const connection = require('./src/config/connection');//conexao com o arquivo de bando de dados

connection() //execução da funcao connection 

const PORT_CONECTION = 4000 //importe da rota

//iniciando a rota em qual rota vai funcionar
app.listen(PORT_CONECTION, ()=>{
    //funçao de callback depois que tiver funcioando excuta o console.log
    console.log ('Meu servidor esta funcionando');
;
})



