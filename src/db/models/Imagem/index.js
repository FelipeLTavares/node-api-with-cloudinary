import Sequelize from "sequelize";
import { db } from "../../index.js";

export const ImovelModel = db.define("imagens", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  public_id: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});