//neste arquivo, temos uma camada que acessa o banco de dados
//Estamos ligados à entidade ORM e ao Database
import { AppDataSource } from "../database/database";
import { Reuniao } from "../entities/Reuniao";

export const ReuniaoRepository = AppDataSource.getRepository(Reuniao)
