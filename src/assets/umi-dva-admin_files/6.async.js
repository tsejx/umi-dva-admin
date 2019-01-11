(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/pages/Main/Login.js":
/*!*********************************!*\
  !*** ./src/pages/Main/Login.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! antd/es/button/style */ "./node_modules/antd/es/button/style/index.js");

var _button = _interopRequireDefault(__webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js"));

__webpack_require__(/*! antd/es/checkbox/style */ "./node_modules/antd/es/checkbox/style/index.js");

var _checkbox = _interopRequireDefault(__webpack_require__(/*! antd/es/checkbox */ "./node_modules/antd/es/checkbox/index.js"));

__webpack_require__(/*! antd/es/form/style */ "./node_modules/antd/es/form/style/index.js");

var _form = _interopRequireDefault(__webpack_require__(/*! antd/es/form */ "./node_modules/antd/es/form/index.js"));

__webpack_require__(/*! antd/es/input/style */ "./node_modules/antd/es/input/style/index.js");

var _input = _interopRequireDefault(__webpack_require__(/*! antd/es/input */ "./node_modules/antd/es/input/index.js"));

__webpack_require__(/*! antd/es/icon/style */ "./node_modules/antd/es/icon/style/index.js");

var _icon = _interopRequireDefault(__webpack_require__(/*! antd/es/icon */ "./node_modules/antd/es/icon/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _dva = __webpack_require__(/*! dva */ "./node_modules/dva/index.js");

var _link = _interopRequireDefault(__webpack_require__(/*! umi/link */ "./node_modules/umi/lib/link.js"));

var _Login = _interopRequireDefault(__webpack_require__(/*! ./Login.less */ "./src/pages/Main/Login.less"));

class LoginPage extends _react.default.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };

    this.state = {};
  }

  render() {
    var getFieldDecorator = this.props.form.getFieldDecorator;
    return _react.default.createElement("div", {
      className: _Login.default.main
    }, _react.default.createElement(_form.default, {
      onSubmit: this.handleSubmit,
      className: _Login.default['login-form']
    }, _react.default.createElement(_form.default.Item, null, getFieldDecorator('userName', {
      rules: [{
        required: true,
        message: 'Please input your username!'
      }]
    })(_react.default.createElement(_input.default, {
      prefix: _react.default.createElement(_icon.default, {
        type: "user",
        style: {
          color: 'rgba(0,0,0,.25)'
        }
      }),
      placeholder: "Username"
    }))), _react.default.createElement(_form.default.Item, null, getFieldDecorator('password', {
      rules: [{
        required: true,
        message: 'Please input your Password!'
      }]
    })(_react.default.createElement(_input.default, {
      prefix: _react.default.createElement(_icon.default, {
        type: "lock",
        style: {
          color: 'rgba(0,0,0,.25)'
        }
      }),
      type: "password",
      placeholder: "Password"
    }))), _react.default.createElement(_form.default.Item, null, getFieldDecorator('remember', {
      valuePropName: 'checked',
      initialValue: true
    })(_react.default.createElement(_checkbox.default, null, "Remember me")), _react.default.createElement("a", {
      className: _Login.default['login-form-forgot'],
      href: ""
    }, "Forgot password"), _react.default.createElement(_button.default, {
      type: "primary",
      htmlType: "submit",
      className: _Login.default['login-form-button']
    }, "Log in"), "Or ", _react.default.createElement("a", {
      href: ""
    }, "register now!"))));
  }

}

var _default = _form.default.create()((0, _dva.connect)(Login => Login)(LoginPage));

exports.default = _default;

/***/ }),

/***/ "./src/pages/Main/Login.less":
/*!***********************************!*\
  !*** ./src/pages/Main/Login.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"Login__main___1raYj","login-form":"Login__login-form___3hbDO","login-form-forgot":"Login__login-form-forgot___1BLhj","login-form-button":"Login__login-form-button___1F2xu"};
    if(true) {
      // 1547213595568
      var cssReload = __webpack_require__(/*! ../../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ })

}]);
//# sourceMappingURL=6.async.js.map