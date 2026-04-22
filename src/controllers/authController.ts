import {UsuarioRepository} from '../repositorios/UsuarioRepository'
import { NextFunction, Request, Response  } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'


export const registro = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {email, senha} = req.body

        const hashed = await bcrypt.hash(senha, 10)
        const usuario = UsuarioRepository.create({email, senha: hashed})
        await UsuarioRepository.save(usuario)

        return res.status(201).json({id: usuario.id, email: usuario.email})
    } catch (error) {
        next(error)
    }
}

export const login = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {email, senha} = req.body
        const usuario = await UsuarioRepository.findOneBy({email})

        if(!usuario){
            return res.status(404).json({error: "Credenciais Inválidas"})
        }
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha)

        if(!senhaCorreta){
            return res.status(401).json({error: "Senha Incorreta"})
        }
        const token = jwt.sign(
            {id: usuario.id},
            process.env.JWT_SECRET as string,
            {expiresIn: '8h'}
        )
        return res.json({token})
        
    } catch (error) {
        next(error)
    }
}