"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("nodereactor/react");

require("./style.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RenderMenus =
/*#__PURE__*/
function (_Component) {
  _inherits(RenderMenus, _Component);

  function RenderMenus(props) {
    var _this;

    _classCallCheck(this, RenderMenus);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RenderMenus).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RenderMenus, [{
    key: "handleClick",
    value: function handleClick(e) {
      var el = e.currentTarget;

      if (!el.href || /\S+/.test(el.href) == false || el.href == '#') {
        e.preventDefault();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = props,
          _props$menus = _props.menus,
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
            onClick: _this2.handleClick,
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
            onClick: _this2.handleClick,
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
    }
  }]);

  return RenderMenus;
}(_react.Component);

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