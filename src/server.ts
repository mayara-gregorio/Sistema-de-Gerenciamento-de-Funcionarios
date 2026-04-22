//Inicializa o servidor e o banco de dados, importa o app servidor do arquivo app.ts

import app from './app'
import { AppDataSource } from './database/database'
import 'dotenv/config'

const PORT = process.env.PORT

try{
    await AppDataSource.initialize()
    app.listen(PORT, ()=> {
        console.log(`Servidor Rodando em ${PORT}`)
    })
}catch(error){
    console.error('Erro ao conectar o banco de dados', error)
}

