import { Request, Response } from "express";
import { ContatoRepository } from '../repositorios/ContatoRepository'

export class contatoController{
    async findAll(req: Request, res: Response){
        try{
            const contatos = await ContatoRepository.find()
            return res.json(contatos)
        }catch(error){
            return res.status(500).json({error: "Erro ao buscar contato"})
        }
    }

    async findOne(req: Request, res: Response){
        try{
            const funcionarioId = Number(req.params.id)
            const contato = await ContatoRepository.findOneBy({funcionarioId})
            if(!contato){
                return res.status(404).json({error: "contato não encontrada"})
            }
            return res.json(contato)
        }catch(error){
            return res.status(500).json({error: "Erro ao buscar contato"})
        }
    }

    async create(req: Request, res: Response){
        try{
            const contato = ContatoRepository.create(req.body)
            const result = await ContatoRepository.save(contato)
            return res.status(201).json(result)
        }catch(error){
            return res.status(500).json({error: "Erro ao criar contato"})
        }
    }

    async update(req: Request, res: Response){
        try{
            const funcionarioId = Number(req.params.id)
            const contato = await ContatoRepository.findOneBy({funcionarioId})
            if(!contato){
                return res.status(404).json({error: "contato não encontrada"})
            }
            ContatoRepository.merge(contato, req.body)//mistura os dados
            const result = await ContatoRepository.save(contato)
            return res.json(result) //retorna o resultado editado

        }catch(error){
            return res.status(500).json({error: "Erro ao buscar contato"})
        }
    }

    async delete(req: Request, res: Response){
        try{
            const funcionarioId = Number(req.params.id)
            const contato = await ContatoRepository.findOneBy({funcionarioId})
            if(!contato){
                return res.status(404).json({error: "contato não encontrada"})
            }
            const result = await ContatoRepository.delete(funcionarioId)

            if(result.affected === 0){//verifica as linhas afetadas pelo delete
                return res.status(404).json({error: "contato não encontrada"})
            }
            return res.status(204).send()//envia um corpo vazio de volta
        }catch(error){
            return res.status(500).json({error: "Erro ao buscar contato"})
        }
    }
}