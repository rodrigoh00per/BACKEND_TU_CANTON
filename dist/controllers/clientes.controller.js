"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClientesEquipoUsuario = exports.getOneClient = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Cliente = _interopRequireDefault(require("../models/Cliente"));

var _Usuario = _interopRequireDefault(require("../models/Usuario"));

var _Equipo = _interopRequireDefault(require("../models/Equipo"));

var getOneClient =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var usuario_id, cliente;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            usuario_id = req.params.usuario_id;
            _context.next = 3;
            return _Cliente["default"].findOne({
              where: {
                usuario_id: usuario_id
              }
            });

          case 3:
            cliente = _context.sent;
            return _context.abrupt("return", res.send({
              cliente: cliente
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getOneClient(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getOneClient = getOneClient;

var getClientesEquipoUsuario =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var _req$params, usuario_id, equipo_id, respuestaCliente;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$params = req.params, usuario_id = _req$params.usuario_id, equipo_id = _req$params.equipo_id;
            _context2.next = 3;
            return _Cliente["default"].findAll({
              where: {
                usuario_id: usuario_id
              },
              include: [{
                model: _Usuario["default"],
                where: {
                  equipo_id: equipo_id
                },
                required: true,
                include: [{
                  model: _Equipo["default"]
                }]
              }]
            });

          case 3:
            respuestaCliente = _context2.sent;
            return _context2.abrupt("return", res.send({
              respuestaCliente: respuestaCliente
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getClientesEquipoUsuario(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getClientesEquipoUsuario = getClientesEquipoUsuario;