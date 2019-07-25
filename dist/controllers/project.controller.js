"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProject = exports.deleteProject = exports.getOneProject = exports.createProject = exports.getProjects = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Projects = _interopRequireDefault(require("../models/Projects"));

var getProjects =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var projects;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Projects["default"].findAll();

          case 3:
            projects = _context.sent;
            return _context.abrupt("return", res.send({
              data: projects
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

  return function getProjects(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProjects = getProjects;

var createProject =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, name, priority, description, deliverydate, newProject;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(req.body);
            _req$body = req.body, name = _req$body.name, priority = _req$body.priority, description = _req$body.description, deliverydate = _req$body.deliverydate;
            _context2.prev = 2;
            _context2.next = 5;
            return _Projects["default"].create({
              name: name,
              priority: priority,
              description: description,
              deliverydate: deliverydate
            }, {
              fields: ["name", "priority", "description", "deliverydate"]
            });

          case 5:
            newProject = _context2.sent;

            if (!newProject) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.send({
              message: "Project created succesful",
              data: newProject
            }));

          case 8:
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            return _context2.abrupt("return", res.status(500).send({
              message: "hay un problema con la aplicación"
            }));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 10]]);
  }));

  return function createProject(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createProject = createProject;

var getOneProject =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(req, res) {
    var id, project;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Projects["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            project = _context3.sent;
            return _context3.abrupt("return", res.send({
              project: project
            }));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getOneProject(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOneProject = getOneProject;

var deleteProject =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(req, res) {
    var id, projectDeleted;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Projects["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            projectDeleted = _context4.sent;
            return _context4.abrupt("return", res.send({
              projectDeleted: projectDeleted
            }));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteProject(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteProject = deleteProject;

var updateProject =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(req, res) {
    var id, _req$body2, name, priority, description, deliverydate, projects;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, priority = _req$body2.priority, description = _req$body2.description, deliverydate = _req$body2.deliverydate;
            _context6.next = 4;
            return _Projects["default"].findAll({
              where: {
                id: id
              },
              attributes: ["id", "name", "priority", "description", "deliverydate"]
            });

          case 4:
            projects = _context6.sent;

            if (projects.length > 0) {
              projects.forEach(
              /*#__PURE__*/
              function () {
                var _ref6 = (0, _asyncToGenerator2["default"])(
                /*#__PURE__*/
                _regenerator["default"].mark(function _callee5(project) {
                  return _regenerator["default"].wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return project.update({
                            name: name,
                            priority: priority,
                            description: description,
                            deliverydate: deliverydate
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref6.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.send({
              message: "project updated succesfully",
              data: projects
            }));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateProject(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateProject = updateProject;