import { Router } from "express";
import { reuniaoController } from "../controllers/reuniaoController"

const routes = Router()
const controller = new reuniaoController();

routes.get("/reuniao", controller.findAll)
routes.get("/reuniao/:id", controller.findOne)
routes.post("/reuniao", controller.create)
routes.put("/reuniao/:id", controller.update)
routes.delete("/reuniao/:id", controller.delete)

export default routes