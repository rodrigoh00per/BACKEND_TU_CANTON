"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var Cliente = _database.sequelize.define("clientes", {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  usuario_id: {
    type: _sequelize["default"].INTEGER
  },
  email: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

var _default = Cliente;
exports["default"] = _default;