import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader)
    return res.status(401).json({ error: 'Token ausente' })

  const [, token] = authHeader.split(' ') 

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as { id: number }
    ;(req as any).userId = payload.id
    next()
  } catch {
    return res.status(401).json({ error: 'Token inválido ou expirado' })
  }
}