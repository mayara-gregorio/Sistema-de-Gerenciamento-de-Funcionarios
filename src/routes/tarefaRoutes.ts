import { Router } from "express";
import { TarefaController } from "../controllers/tarefaController"

const routes = Router()
const controller = new TarefaController();

routes.get("/tarefas", controller.findAll)
routes.get("/tarefas/:id", controller.findOne)
routes.post("/tarefas", controller.create)
routes.put("/tarefas/:id", controller.update)
routes.delete("/tarefas/:id", controller.delete)

export default routes