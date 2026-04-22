import express from 'express'
import cors from 'cors'
import router from './routes/index'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/v1', router) //a partir deste prefixo, pega as rotas do index.ts, que está sendi importado


export default app