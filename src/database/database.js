import Sequelize from "sequelize";

/*  export const sequelize = new Sequelize("examen_tu_canton", "rodrigoh00per", "123456", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
}); */


export const sequelize = new Sequelize(
  "postgres://sjmdwsmr:3ZktIWF9PeQxeoXrcX9g_8DyVkafDOuU@raja.db.elephantsql.com:5432/sjmdwsmr"
);
