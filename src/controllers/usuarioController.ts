import { Request, Response } from "express";
import { UsuarioRepository } from '../repositorios/UsuarioRepository'

export class usuarioController{
    async findAll(req: Request, res: Response){
        try{
            const usuarios = await UsuarioRepository.find({
                relations: {funcionario: true}
            })
            return res.json(usuarios)
        }catch(error){
            return res.status(500).json({error: "Erro ao buscar usuario"})
        }
    }

    async findOne(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const usuario = await UsuarioRepository.findOneBy({id})
            if(!usuario){
                return res.status(404).json({error: "usuario não encontrado"})
            }
            return res.json(usuario)

        }catch(error){
            return res.status(500).json({error: "Erro ao buscar usuario"})
        }
    }

    async create(req: Request, res: Response){
        try{
            const usuario = UsuarioRepository.create(req.body)
            const result = await UsuarioRepository.save(usuario)
            return res.status(201).json(result)
        }catch(error){
            return res.status(500).json({error: "Erro ao criar usuario"})
        }
    }

    async update(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const usuario = await UsuarioRepository.findOneBy({id})
            if(!usuario){
                return res.status(404).json({error: "usuario não encontrado"})
            }
            UsuarioRepository.merge(usuario, req.body)//mistura os dados
            const result = await UsuarioRepository.save(usuario)
            return res.json(result) //retorna o resultado editado

        }catch(error){
            return res.status(500).json({error: "Erro ao buscar usuario"})
        }
    }

    async delete(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const usuario = await UsuarioRepository.findOneBy({id})
            if(!usuario){
                return res.status(404).json({error: "usuario não encontrado"})
            }
            const result = await UsuarioRepository.delete(id)

            if(result.affected === 0){//verifica as linhas afetadas pelo delete
                return res.status(404).json({error: "usuario não encontrado"})
            }
            return res.status(204).send()//envia um corpo vazio de volta
        }catch(error){
            return res.status(500).json({error: "Erro ao buscar usuario"})
        }
    }
}