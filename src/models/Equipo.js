import Sequelize from "sequelize";

import { sequelize } from "../database/database";
import Usuario from "./Usuario";

const Equipo = sequelize.define(
  "catalogo_equipos",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.TEXT
    }
  },
  { timestamps: false }
);
//esta es para decirle la relacion entre las diferentes tablas
Equipo.hasMany(Usuario, {
  foreignKey: "equipo_id",
  sourceKey: "id"
}); //tiene mmuchas tareas
Usuario.belongsTo(Equipo, {
  foreignKey: "equipo_id",
  sourceKey: "id"
}); //

export default Equipo;
