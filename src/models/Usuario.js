import Sequelize from "sequelize";

import { sequelize } from "../database/database";
import Cliente from "./Cliente";

const Usuario = sequelize.define(
  "catalogo_usuarios",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.TEXT
    },
    equipo_id: {
      type: Sequelize.INTEGER
    }
  },
  { timestamps: false }
);

//esta es para decirle la relacion entre las diferentes tablas
Usuario.hasMany(Cliente, {
  foreignKey: "usuario_id",
  sourceKey: "id"
}); //tiene mmuchas tareas
Cliente.belongsTo(Usuario, {
  foreignKey: "usuario_id",
  sourceKey: "id"
}); //

export default Usuario;
