import express from "express";
import cors from "cors";
import "dotenv/config";

import { db } from "./src/db/index.js";
import rootRouter from "./src/application/routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", rootRouter);

db.sync(() => console.log(`Banco de dados sincronizado`));

app.listen(process.env.PORT || 5000, () =>
  console.log("Servidor rodando na porta: ", process.env.PORT || 5000)
);
