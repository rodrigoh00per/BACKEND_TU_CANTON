"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearEquipo = exports.getEquipos = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Equipo = _interopRequireDefault(require("../models/Equipo"));

var getEquipos =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var equipos;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Equipo["default"].findAll();

          case 3:
            equipos = _context.sent;
            return _context.abrupt("return", res.send({
              equipos: equipos
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).send({
              message: "hay un problema con la aplicación"
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getEquipos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getEquipos = getEquipos;

var crearEquipo =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var nombre, nuevoEquipo;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            nombre = req.body.nombre;
            _context2.prev = 1;
            _context2.next = 4;
            return _Equipo["default"].create({
              nombre: nombre
            }, {
              fields: ["nombre"]
            });

          case 4:
            nuevoEquipo = _context2.sent;

            if (!nuevoEquipo) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.send({
              message: "Equipo creado correctamente",
              data: nuevoEquipo
            }));

          case 7:
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.status(500).send({
              message: "hay un problema con la aplicación"
            }));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function crearEquipo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.crearEquipo = crearEquipo;