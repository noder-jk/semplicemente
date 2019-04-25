"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Footer = function Footer() {
  return _react["default"].createElement("footer", {
    id: "colophon",
    className: "site-footer"
  }, _react["default"].createElement("div", {
    className: "site-info"
  }, _react["default"].createElement("span", {
    className: "custom"
  }, "Powered By ", _react["default"].createElement("a", {
    href: "http://nodereactor.com",
    rel: "nofollow noopener noreferrer",
    target: "_blank"
  }, "Node Reactor")), _react["default"].createElement("span", {
    className: "sep"
  }, " | "), "Theme: ", _react["default"].createElement("a", {
    title: "Semplicemente Theme",
    href: "https://crestaproject.com/downloads/semplicemente/",
    rel: "nofollow noopener noreferrer",
    target: "_blank"
  }, "Semplicemente"), " by CrestaProject."));
};

exports.Footer = Footer;