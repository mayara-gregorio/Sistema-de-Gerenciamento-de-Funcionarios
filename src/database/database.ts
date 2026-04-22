import 'reflect-metadata' 
//Arquivo de configuração do banco de dados
import { DataSource }  from 'typeorm'
import { Funcionario } from '../entities/Funcionario'
import { Contato } from '../entities/Contato'
import { Tarefa } from '../entities/Tarefa'
import { Reuniao } from '../entities/Reuniao'
import { Usuario } from '../entities/Usuario'

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'database.sqlite',
    synchronize: true, //Apenas em desenvolvimento, não usar em produção
    logging: true, //adicionar logs
    //dropSchema: true, //apagar o banco de dados a cada reinicio do servidor, apenas para desenvolvimento
    entities: [Funcionario, Contato, Tarefa, Reuniao, Usuario],
})

