import Sequelize from "sequelize";
import { db } from "../../index.js";

export const ImovelModel = db.define("imoveis", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  titulo: {
    type: Sequelize.STRING,
  },
  descricao: {
    type: Sequelize.STRING,
  },
  valor: {
    type: Sequelize.DOUBLE,
  },
});
