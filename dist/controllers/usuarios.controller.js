"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEquiposUsuarios = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Usuario = _interopRequireDefault(require("../models/Usuario"));

var _Equipo = _interopRequireDefault(require("../models/Equipo"));

var getEquiposUsuarios =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var equipo_id, respuestaFin;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            equipo_id = req.params.equipo_id;
            _context.next = 3;
            return _Usuario["default"].findAll((0, _defineProperty2["default"])({
              where: {
                id: 1
              },
              include: [{
                model: _Equipo["default"],
                required: true,
                attributes: ["id", "nombre"]
              }],
              attributes: ["id", "nombre", "equipo_id"],
              order: [// Will escape title and validate DESC against a list of valid direction parameters
              ["equipo_id", "ASC"]]
            }, "where", {
              equipo_id: equipo_id
            }));

          case 3:
            respuestaFin = _context.sent;
            return _context.abrupt("return", res.send({
              equipos_usuario: respuestaFin
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getEquiposUsuarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getEquiposUsuarios = getEquiposUsuarios;