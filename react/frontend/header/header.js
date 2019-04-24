"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("nodereactor/react");

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var RenderMenus = function RenderMenus(props) {
  var _props$menus = props.menus,
      menus = _props$menus === void 0 ? [] : _props$menus;
  var nest = 0;
  /* Loop through all menus recursively */

  var recurs = function recurs(menu) {
    if (Array.isArray(menu)) {
      nest++;
      return _react.default.createElement("ul", {
        key: menu.key,
        className: nest <= 1 ? 'main-menu clearfix' : 'sub-menu'
      }, menu.map(function (m) {
        return recurs(m);
      }));
    } else if (_typeof(menu) == 'object') {
      return _react.default.createElement("li", {
        key: menu.key
      }, Array.isArray(menu.children) && menu.children.length > 0 ? [_react.default.createElement("a", {
        key: "toggler_a",
        href: menu.url
      }, menu.title, _react.default.createElement("span", {
        className: "drop-icon"
      }, "\u25BE"), _react.default.createElement("label", {
        title: "Toggle Drop-down",
        className: "drop-icon",
        htmlFor: menu.key
      }, " \u25BE")), _react.default.createElement("input", {
        key: "toggler_inp",
        type: "checkbox",
        id: menu.key
      })] : _react.default.createElement("a", {
        href: menu.url
      }, menu.title), Array.isArray(menu.children) && menu.children.length > 0 ? recurs(menu.children) : null);
    }

    return null;
  };

  return _react.default.createElement("nav", {
    id: "menu"
  }, _react.default.createElement("label", {
    htmlFor: "top_menu_toggler",
    id: "toggle-menu"
  }, "Navigation ", _react.default.createElement("span", {
    className: "drop-icon"
  }, "\u25BE")), _react.default.createElement("input", {
    type: "checkbox",
    id: "top_menu_toggler"
  }), menus.map(function (item) {
    return recurs(item);
  }));
};

var Header = function Header() {
  return _react.default.createElement("header", {
    id: "masthead",
    className: "site-header semp-header"
  }, _react.default.createElement("div", {
    className: "site-branding"
  }, _react.default.createElement("p", {
    className: "site-title"
  }, _react.default.createElement("a", {
    href: "/",
    rel: "home"
  }, "NR")), _react.default.createElement("p", {
    className: "site-description"
  }, "Just another WordPress site")), _react.default.createElement("div", {
    style: {
      'clear': 'both'
    }
  }, (0, _react2.nr_nav_menu)({
    'id': 'semp_nav_menu',
    'Renderer': RenderMenus
  })));
};

exports.Header = Header;