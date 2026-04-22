//neste arquivo, temos uma camada que acessa o banco de dados
//Estamos ligados à entidade ORM e ao Database
import { AppDataSource } from "../database/database";
import { Tarefa } from "../entities/Tarefa";

export const TarefaRepository = AppDataSource.getRepository(Tarefa)
