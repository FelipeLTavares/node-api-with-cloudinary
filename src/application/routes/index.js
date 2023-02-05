import express from "express";

import ImoveisRouter from "./Imoveis/index.js";

const rootRouter = express.Router();

rootRouter.use("/imoveis", ImoveisRouter);

export default rootRouter;
