"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

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
var sequelize = new _sequelize["default"]("postgres://sjmdwsmr:3ZktIWF9PeQxeoXrcX9g_8DyVkafDOuU@raja.db.elephantsql.com:5432/sjmdwsmr");
exports.sequelize = sequelize;