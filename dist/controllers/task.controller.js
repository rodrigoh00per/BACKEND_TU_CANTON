"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProjectTask2 = exports.getProjectTask = exports.updateTask = exports.deleteTask = exports.getOneTask = exports.createTask = exports.getTasks = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Tasks = _interopRequireDefault(require("../models/Tasks"));

var _Projects = _interopRequireDefault(require("../models/Projects"));

var getTasks =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Tasks["default"].findAll();

          case 3:
            tasks = _context.sent;
            return _context.abrupt("return", res.send({
              data: tasks
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

  return function getTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTasks = getTasks;

var createTask =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, name, done, projectid, newTask;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, done = _req$body.done, projectid = _req$body.projectid;
            _context2.prev = 1;
            _context2.next = 4;
            return _Tasks["default"].create({
              name: name,
              done: done,
              projectid: projectid
            }, {
              fields: ["name", "done", "projectid"]
            });

          case 4:
            newTask = _context2.sent;

            if (!newTask) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.send({
              message: "task created succesful",
              data: newTask
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

  return function createTask(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createTask = createTask;

var getOneTask =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(req, res) {
    var id, task;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Tasks["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            task = _context3.sent;
            return _context3.abrupt("return", res.send({
              task: task
            }));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getOneTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOneTask = getOneTask;

var deleteTask =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(req, res) {
    var id, taskDeleted;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Tasks["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            taskDeleted = _context4.sent;
            return _context4.abrupt("return", res.send({
              taskDeleted: taskDeleted
            }));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteTask = deleteTask;

var updateTask =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(req, res) {
    var id, _req$body2, name, done, projectid, tasks;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, done = _req$body2.done, projectid = _req$body2.projectid;
            _context6.next = 4;
            return _Tasks["default"].findAll({
              where: {
                id: id
              },
              attributes: ["id", "name", "done", "projectid"]
            });

          case 4:
            tasks = _context6.sent;

            if (tasks.length > 0) {
              tasks.forEach(
              /*#__PURE__*/
              function () {
                var _ref6 = (0, _asyncToGenerator2["default"])(
                /*#__PURE__*/
                _regenerator["default"].mark(function _callee5(task) {
                  return _regenerator["default"].wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return task.update({
                            name: name,
                            done: done,
                            projectid: projectid
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
              message: "task updated succesfully",
              data: tasks
            }));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateTask = updateTask;

var getProjectTask =
/*#__PURE__*/
function () {
  var _ref7 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(req, res) {
    var projectid, tasks;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            projectid = req.params.projectid;
            _context7.prev = 1;
            _context7.next = 4;
            return _Tasks["default"].findAll({
              attributes: ["id", "projectid", "done", "name"],
              where: {
                projectid: projectid
              }
            });

          case 4:
            tasks = _context7.sent;
            return _context7.abrupt("return", res.send({
              data: tasks
            }));

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](1);
            return _context7.abrupt("return", res.status(500).send({
              message: "hay un problema con la aplicación"
            }));

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 8]]);
  }));

  return function getProjectTask(_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getProjectTask = getProjectTask;

var getProjectTask2 =
/*#__PURE__*/
function () {
  var _ref8 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8(req, res) {
    var projectid, respuestaFin;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            projectid = req.params.projectid;
            _context8.next = 3;
            return _Tasks["default"].findAll({
              include: [{
                model: _Projects["default"],
                required: true,
                attributes: ["description"]
              }],
              attributes: ["name"],
              where: {
                projectid: projectid
              }
            });

          case 3:
            respuestaFin = _context8.sent;
            return _context8.abrupt("return", res.send(respuestaFin));

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function getProjectTask2(_x14, _x15) {
    return _ref8.apply(this, arguments);
  };
}();

exports.getProjectTask2 = getProjectTask2;