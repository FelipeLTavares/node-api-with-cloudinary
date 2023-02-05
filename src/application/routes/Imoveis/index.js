import express from "express";

import ImoveisController from "../../controllers/Imoveis/index.js";

const ImoveisRouter = express.Router();
const imoveisController = new ImoveisController();

ImoveisRouter.get("/", imoveisController.get);
ImoveisRouter.post("/", imoveisController.create);
ImoveisRouter.put("/", imoveisController.update);
ImoveisRouter.delete("/", imoveisController.delete);
ImoveisRouter.post("/v2", imoveisController.createV2);

export default ImoveisRouter;
