"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _clientes = require("../controllers/clientes.controller");

var router = (0, _express.Router)();
router.get("/:usuario_id", _clientes.getOneClient);
router.get("/:equipo_id/:usuario_id", _clientes.getClientesEquipoUsuario);
var _default = router;
exports["default"] = _default;