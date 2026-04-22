import { Router } from "express";
import { TarefaController } from "../controllers/tarefaController"

const routes = Router()
const controller = new TarefaController();

routes.get("/contato", controller.findAll)
routes.get("/contato/:id", controller.findOne)
routes.post("/contato", controller.create)
routes.put("/contato/:id", controller.update)
routes.delete("/contato/:id", controller.delete)

export default routes