// Agrega todas as rotas da aplicação em um único Router
import Router from 'express'
import tarefaRoutes from './tarefaRoutes'
import funcionarioRoutes from './funcionarioRoutes'
import contatoRoutes from './contatoRoutes'
import reuniaoRoutes from './reuniaoRoutes'
import usuarioRoutes from './usuarioRoutes'
import authRoutes from './authRoutes'


const router = Router()

router.use(tarefaRoutes)
router.use(funcionarioRoutes)
router.use(contatoRoutes)
router.use(reuniaoRoutes)
router.use(usuarioRoutes)
router.use(authRoutes)

export default router