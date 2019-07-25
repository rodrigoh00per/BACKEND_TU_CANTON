"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuarios = require("../controllers/usuarios.controller");

var router = (0, _express.Router)();
router.get("/equipos/:equipo_id", _usuarios.getEquiposUsuarios);
var _default = router;
exports["default"] = _default;