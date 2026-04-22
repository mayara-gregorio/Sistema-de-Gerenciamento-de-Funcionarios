import { Request, Response } from "express";
import { ReuniaoRepository } from '../repositorios/ReuniaoRepository'

export class reuniaoController{
    async findAll(req: Request, res: Response){
        try{
            const reunioes = await ReuniaoRepository.find({
                relations: {participantes: true}
            })
            return res.json(reunioes)
        }catch(error){
            return res.status(500).json({error: "Erro ao buscar reuniao"})
        }
    }

    async findOne(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const reuniao = await ReuniaoRepository.findOne({
                where: {id},
                relations: {participantes: true}
            })
            if(!reuniao){
                return res.status(404).json({error: "reuniao não encontrada"})
            }
            return res.json(reuniao)

        }catch(error){
            return res.status(500).json({error: "Erro ao buscar reuniao"})
        }
    }

    async create(req: Request, res: Response){
        try{
            const reuniao = ReuniaoRepository.create(req.body)
            const result = await ReuniaoRepository.save(reuniao)
            return res.status(201).json(result)
        }catch(error){
            return res.status(500).json({error: "Erro ao criar reuniao"})
        }
    }

    async update(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const reuniao = await ReuniaoRepository.findOneBy({id})
            if(!reuniao){
                return res.status(404).json({error: "reuniao não encontrada"})
            }
            ReuniaoRepository.merge(reuniao, req.body)//mistura os dados
            const result = await ReuniaoRepository.save(reuniao)
            return res.json(result) //retorna o resultado editado

        }catch(error){
            return res.status(500).json({error: "Erro ao buscar reuniao"})
        }
    }

    async delete(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const reuniao = await ReuniaoRepository.findOneBy({id})
            if(!reuniao){
                return res.status(404).json({error: "reuniao não encontrada"})
            }
            const result = await ReuniaoRepository.delete(id)

            if(result.affected === 0){//verifica as linhas afetadas pelo delete
                return res.status(404).json({error: "reuniao não encontrada"})
            }
            return res.status(204).send()//envia um corpo vazio de volta
        }catch(error){
            return res.status(500).json({error: "Erro ao buscar reuniao"})
        }
    }
}