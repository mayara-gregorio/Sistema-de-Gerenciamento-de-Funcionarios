import { Router } from "express";
import { usuarioController } from "../controllers/usuarioController"


const routes = Router()
const controller = new usuarioController();

routes.get("/usuario", controller.findAll)
routes.get("/usuario/:id", controller.findOne)
routes.post("/usuario", controller.create)
routes.put("/usuario/:id", controller.update)
routes.delete("/usuario/:id", controller.delete)

export default routes