import { Router } from "express";
import { registro, login } from "../controllers/authController"

const routes = Router()

routes.post("/auth/registro", registro)
routes.post("/auth/login", login)

export default routes