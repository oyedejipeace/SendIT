/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./auth.js":
/*!*****************!*\
  !*** ./auth.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./controller.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar controller = new _controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('https://sendit-courier.herokuapp.com/api/v1');\nvar token = localStorage.getItem('token');\nvar method = {\n  method: 'POST',\n  headers: {\n    Accept: 'text/plain, application/json, */*',\n    'Content-type': 'application/json',\n    'x-access-token': token\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_asyncToGenerator(\n/*#__PURE__*/\nregeneratorRuntime.mark(function _callee() {\n  var data;\n  return regeneratorRuntime.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return controller.post('/auth', method);\n\n        case 3:\n          data = _context.sent;\n          console.log(data); // eslint-disable-next-line quotes\n\n          if (!(data.auth === \"false\")) {\n            _context.next = 7;\n            break;\n          }\n\n          return _context.abrupt(\"return\", 'Failed');\n\n        case 7:\n          if (data.auth === 'true') {\n            localStorage.setItem('token', data.token);\n          }\n\n          if (!(data.user.userRole === 'User')) {\n            _context.next = 10;\n            break;\n          }\n\n          return _context.abrupt(\"return\", 'User');\n\n        case 10:\n          return _context.abrupt(\"return\", 'Admin');\n\n        case 13:\n          _context.prev = 13;\n          _context.t0 = _context[\"catch\"](0);\n\n          if (!_context.t0) {\n            _context.next = 17;\n            break;\n          }\n\n          return _context.abrupt(\"return\", 'Failed');\n\n        case 17:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, this, [[0, 13]]);\n})));\n\n//# sourceURL=webpack:///./auth.js?");

/***/ }),

/***/ "./controller.js":
/*!***********************!*\
  !*** ./controller.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Controller =\n/*#__PURE__*/\nfunction () {\n  function Controller(baseUrl) {\n    _classCallCheck(this, Controller);\n\n    this.baseUrl = baseUrl;\n  }\n\n  _createClass(Controller, [{\n    key: \"get\",\n    value: function () {\n      var _get = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(getRoute) {\n        var _this = this;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                this.getUrl = this.baseUrl + getRoute;\n                _context.next = 3;\n                return fetch(this.getUrl).then(function (res) {\n                  return res.json();\n                }).then(function (data) {\n                  _this.data = data;\n                });\n\n              case 3:\n                return _context.abrupt(\"return\", this.data);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      return function get(_x) {\n        return _get.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"post\",\n    value: function () {\n      var _post = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(postRoute, method) {\n        var _this2 = this;\n\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                this.postUrl = this.baseUrl + postRoute;\n                this.method = method;\n                _context2.next = 4;\n                return fetch(this.postUrl, method).then(function (res) {\n                  return res.json();\n                }).then(function (data) {\n                  _this2.data = data;\n                });\n\n              case 4:\n                return _context2.abrupt(\"return\", this.data);\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      return function post(_x2, _x3) {\n        return _post.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"put\",\n    value: function () {\n      var _put = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3(putRoute, method) {\n        var _this3 = this;\n\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                this.puUrl = this.baseUrl + putRoute;\n                this.method = method;\n                _context3.next = 4;\n                return fetch(this.putUrl, method).then(function (res) {\n                  return res.json();\n                }).then(function (data) {\n                  _this3.data = data;\n                });\n\n              case 4:\n                return _context3.abrupt(\"return\", this.data);\n\n              case 5:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      return function put(_x4, _x5) {\n        return _put.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"delete\",\n    value: function () {\n      var _delete2 = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee4(deleteRoute, method) {\n        var _this4 = this;\n\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                this.deleteUrl = this.baseUrl + deleteRoute;\n                this.method = method;\n                _context4.next = 4;\n                return fetch(this.deleteUrl, method).then(function (res) {\n                  return res.json();\n                }).then(function (data) {\n                  _this4.data = data;\n                });\n\n              case 4:\n                return _context4.abrupt(\"return\", this.data);\n\n              case 5:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, this);\n      }));\n\n      return function _delete(_x6, _x7) {\n        return _delete2.apply(this, arguments);\n      };\n    }()\n  }]);\n\n  return Controller;\n}();\n\n\n\n//# sourceURL=webpack:///./controller.js?");

/***/ }),

/***/ "./home.js":
/*!*****************!*\
  !*** ./home.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./controller.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./auth.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar logout = document.getElementById('logout');\nvar previewButton = document.getElementById('previewButton');\nvar fromName = document.getElementById('fromName');\nvar fromAddress = document.getElementById('fromAddress');\nvar fromEmail = document.getElementById('fromEmail');\nvar toName = document.getElementById('toName');\nvar toAddress = document.getElementById('toAddress');\nvar toEmail = document.getElementById('toEmail');\nvar type = document.getElementById('type');\nvar weight = document.getElementById('weight');\nvar baseUrl = 'https://sendit-courier.herokuapp.com/api/v1';\nvar controller = new _controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"](baseUrl); // initiate login when the token is invalid or has expired\n\nwindow.onload =\n/*#__PURE__*/\n_asyncToGenerator(\n/*#__PURE__*/\nregeneratorRuntime.mark(function _callee() {\n  var validity;\n  return regeneratorRuntime.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return Object(_auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n        case 2:\n          validity = _context.sent;\n\n          if (!(validity === 'Failed')) {\n            _context.next = 5;\n            break;\n          }\n\n          return _context.abrupt(\"return\", logout.click());\n\n        case 5:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, this);\n}));\npreviewButton.addEventListener('click',\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(e) {\n    var body, method, data;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            e.preventDefault();\n            _context2.prev = 1;\n            body = JSON.stringify({\n              fromName: fromName.value,\n              fromAddress: fromAddress.value,\n              fromEmail: fromEmail.value,\n              toName: toName.value,\n              toAddress: toAddress.value,\n              toEmail: toEmail.value,\n              type: type.value,\n              weight: weight.value\n            });\n            method = {\n              method: 'POST',\n              headers: {\n                Accept: 'text/plain, application/json, */*',\n                'Content-type': 'application/json'\n              },\n              body: body\n            };\n            _context2.next = 6;\n            return controller.post('/parcels/', method);\n\n          case 6:\n            data = _context2.sent;\n            console.log(data);\n            _context2.next = 13;\n            break;\n\n          case 10:\n            _context2.prev = 10;\n            _context2.t0 = _context2[\"catch\"](1);\n\n            if (_context2.t0) {\n              alert('Network Error, Please check your network connection and try again');\n            }\n\n          case 13:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this, [[1, 10]]);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}()); // window.onclick = function () {\n//   if (event.target === loginSection) {\n//     alert('Session timeout, Please login');\n//   }\n// };\n\n//# sourceURL=webpack:///./home.js?");

/***/ })

/******/ });