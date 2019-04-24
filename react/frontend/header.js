"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("nodereactor/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react.default.createElement("header", {
    id: "masthead",
    className: "site-header"
  }, _react.default.createElement("div", {
    className: "site-branding"
  }, _react.default.createElement("p", {
    className: "site-title"
  }, _react.default.createElement("a", {
    href: "http://localhost/w5/",
    rel: "home"
  }, "NR")), _react.default.createElement("p", {
    className: "site-description"
  }, "Just another WordPress site")), _react.default.createElement("div", {
    style: {
      'clear': 'both'
    }
  }, _react.default.createElement("ul", {
    id: "nvvvvvvvvv"
  }, _react.default.createElement("li", null, _react.default.createElement("a", null, "sdfsdf")), _react.default.createElement("li", {
    className: ".menu-item-has-children"
  }, _react.default.createElement("a", null, "sdfsdf2"), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("a", null, "sdfsdf")), _react.default.createElement("li", null, _react.default.createElement("a", null, "sdfsdf2")), _react.default.createElement("li", null, _react.default.createElement("a", null, "sdfsdf")))), _react.default.createElement("li", null, _react.default.createElement("a", null, "sdfsdf")))));
};

exports.Header = Header;