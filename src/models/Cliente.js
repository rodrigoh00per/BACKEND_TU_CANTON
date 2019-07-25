import Sequelize from "sequelize";

import { sequelize } from "../database/database";

const Cliente = sequelize.define(
  "clientes",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    usuario_id: {
      type: Sequelize.INTEGER
    },
    email: {
      type: Sequelize.TEXT
    }
  },
  { timestamps: false }
);

export default Cliente;
