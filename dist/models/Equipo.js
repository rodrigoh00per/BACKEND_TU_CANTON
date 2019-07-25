"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Usuario = _interopRequireDefault(require("./Usuario"));

var Equipo = _database.sequelize.define("catalogo_equipos", {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
}); //esta es para decirle la relacion entre las diferentes tablas


Equipo.hasMany(_Usuario["default"], {
  foreignKey: "equipo_id",
  sourceKey: "id"
}); //tiene mmuchas tareas

_Usuario["default"].belongsTo(Equipo, {
  foreignKey: "equipo_id",
  sourceKey: "id"
}); //


var _default = Equipo;
exports["default"] = _default;