"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _equipos = _interopRequireDefault(require("./routes/equipos"));

var _usuarios = _interopRequireDefault(require("./routes/usuarios"));

var _clientes = _interopRequireDefault(require("./routes/clientes"));

var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.use((0, _express.json)());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,token_public_conekta");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
  next();
});
app.use("/api/equipos", _equipos["default"]);
app.use("/api/usuarios", _usuarios["default"]);
app.use("/api/clientes", _clientes["default"]);
/* app.use("/api/clientes", rutasUsuarios); */

var _default = app;
exports["default"] = _default;