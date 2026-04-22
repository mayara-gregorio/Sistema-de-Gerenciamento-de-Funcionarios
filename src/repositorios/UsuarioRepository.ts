//neste arquivo, temos uma camada que acessa o banco de dados
//Estamos ligados à entidade ORM e ao Database
import { AppDataSource } from "../database/database";
import { Usuario } from "../entities/Usuario";

export const UsuarioRepository = AppDataSource.getRepository(Usuario)
