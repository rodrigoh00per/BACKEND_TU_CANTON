"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Cliente = _interopRequireDefault(require("./Cliente"));

var Usuario = _database.sequelize.define("catalogo_usuarios", {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].TEXT
  },
  equipo_id: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
}); //esta es para decirle la relacion entre las diferentes tablas


Usuario.hasMany(_Cliente["default"], {
  foreignKey: "usuario_id",
  sourceKey: "id"
}); //tiene mmuchas tareas

_Cliente["default"].belongsTo(Usuario, {
  foreignKey: "usuario_id",
  sourceKey: "id"
}); //


var _default = Usuario;
exports["default"] = _default;