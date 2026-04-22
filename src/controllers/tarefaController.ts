import { Request, Response } from "express";
import { TarefaRepository } from '../repositorios/TarefaRepository'

export class TarefaController{
    async findAll(req: Request, res: Response){
        try{
            const tarefas = await TarefaRepository.find({
                relations: {funcionario: true}
            })
            return res.json(tarefas)
        }catch(error){
            return res.status(500).json({error: "Erro ao buscar tarefa"})
        }
    }

    async findOne(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const tarefa = await TarefaRepository.findOneBy({id})
            if(!tarefa){
                return res.status(404).json({error: "Tarefa não encontrada"})
            }
            return res.json(tarefa)

        }catch(error){
            return res.status(500).json({error: "Erro ao buscar tarefa"})
        }
    }

    async create(req: Request, res: Response){
        try{
            const tarefa = TarefaRepository.create(req.body)
            const result = await TarefaRepository.save(tarefa)
            return res.status(201).json(result)
        }catch(error){
            return res.status(500).json({error: "Erro ao criar tarefa"})
        }
    }

    async update(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const tarefa = await TarefaRepository.findOneBy({id})
            if(!tarefa){
                return res.status(404).json({error: "Tarefa não encontrada"})
            }
            TarefaRepository.merge(tarefa, req.body)//mistura os dados
            const result = await TarefaRepository.save(tarefa)
            return res.json(result) //retorna o resultado editado

        }catch(error){
            return res.status(500).json({error: "Erro ao buscar tarefa"})
        }
    }

    async delete(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const tarefa = await TarefaRepository.findOneBy({id})
            if(!tarefa){
                return res.status(404).json({error: "Tarefa não encontrada"})
            }
            const result = await TarefaRepository.delete(id)

            if(result.affected === 0){//verifica as linhas afetadas pelo delete
                return res.status(404).json({error: "Tarefa não encontrada"})
            }
            return res.status(204).send()//envia um corpo vazio de volta
        }catch(error){
            return res.status(500).json({error: "Erro ao buscar tarefa"})
        }
    }
}