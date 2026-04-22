import { Router } from "express";
import { FuncionarioController } from "../controllers/funcionarioController"

const routes = Router()
const controller = new FuncionarioController();

routes.get("/funcionario", controller.findAll)
routes.get("/funcionario/:id", controller.findOne)
routes.post("/funcionario", controller.create)
routes.put("/funcionario/:id", controller.update)
routes.delete("/funcionario/:id", controller.delete)

export default routes