//chamando express que chamma as rotas
const router = require('express').Router(); // busca no pacote node_modules o pacote express
const userController = require('../controllers/userController');
const projectControler = require('../controllers/projectControler')
const authMiddleware = require ('../middlewares/auth')

//criado a primeira rota pra onde iremos requisitar ou enviar alguma coisa,

router.get('/', userController.find);//rota que exibe todos os registro/dados
router.post('/', userController.create);//criar um registro com post
router.get('/:id', userController.findById);//rota que pega registro pelo id
router.delete('/:id', authMiddleware, userController.delete);//delete somente registro com id
router.put('/:id', authMiddleware, userController.updade);//rotas de atualizacao é importa esta com id pois e atraves dele que iremos fazer a modifiçação

router.post('/auth', userController.auth) //rota de autenticação

router.get('/projects', projectControler.find) // rota do project








module.exports = router;
