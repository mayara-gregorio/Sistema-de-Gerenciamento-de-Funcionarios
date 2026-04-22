import { Request, Response } from "express";
import { FuncionarioRepository } from '../repositorios/FuncionarioRepository'

export class FuncionarioController{
    async findAll(req: Request, res: Response){
        try{
            const funcionarios = await FuncionarioRepository.find({
                relations: {gerente: true}
            })

            return res.json(funcionarios)
        }catch(error){
            return res.status(500).json({error: "Erro ao buscar funcionario"})
        }
    }

    async findOne(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const funcionario = await FuncionarioRepository.findOneBy({id})
            if(!funcionario){
                return res.status(404).json({error: "funcionario não encontrada"})
            }
            return res.json(funcionario)

        }catch(error){
            return res.status(500).json({error: "Erro ao buscar funcionario"})
        }
    }

    async create(req: Request, res: Response){
        try{
            const funcionario = FuncionarioRepository.create(req.body)
            const result = await FuncionarioRepository.save(funcionario)
            return res.status(201).json(result)
        }catch(error){
            return res.status(500).json({error: "Erro ao criar funcionario"})
        }
    }

    async update(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const funcionario = await FuncionarioRepository.findOneBy({id})
            if(!funcionario){
                return res.status(404).json({error: "funcionario não encontrada"})
            }
            FuncionarioRepository.merge(funcionario, req.body)//mistura os dados
            const result = await FuncionarioRepository.save(funcionario)
            return res.json(result) //retorna o resultado editado

        }catch(error){
            return res.status(500).json({error: "Erro ao buscar funcionario"})
        }
    }

    async delete(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const funcionario = await FuncionarioRepository.findOneBy({id})
            if(!funcionario){
                return res.status(404).json({error: "funcionario não encontrada"})
            }
            const result = await FuncionarioRepository.delete(id)

            if(result.affected === 0){//verifica as linhas afetadas pelo delete
                return res.status(404).json({error: "funcionario não encontrada"})
            }
            return res.status(204).send()//envia um corpo vazio de volta
        }catch(error){
            return res.status(500).json({error: "Erro ao buscar funcionario"})
        }
    }
}