"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Widget = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("nodereactor/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SdContainer = function SdContainer(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? '' : _props$title,
      _props$children = props.children,
      children = _props$children === void 0 ? null : _props$children;
  return _react.default.createElement("aside", {
    id: "wordjs_mechanism-2",
    className: "widget widget_wordjs_mechanism"
  }, _react.default.createElement("div", {
    className: "widget-title"
  }, _react.default.createElement("h3", null, title)), children);
};

var Widget = function Widget() {
  return _react.default.createElement("div", {
    id: "secondary",
    className: "widget-area"
  }, _react.default.createElement("aside", {
    id: "search-2",
    className: "widget widget_search"
  }, _react.default.createElement("form", {
    role: "search",
    method: "get",
    className: "search-form",
    action: "/"
  }, _react.default.createElement("input", {
    type: "search",
    className: "search-field",
    placeholder: "Search \u2026",
    name: "search"
  }), _react.default.createElement("input", {
    type: "submit",
    className: "search-submit",
    value: "Search"
  }))), _react.default.createElement("aside", {
    id: "wordjs_mechanism-2",
    className: "widget widget_wordjs_mechanism"
  }, _react.default.createElement("div", {
    className: "widget-title"
  }, _react.default.createElement("h3", null, "Mechanism")), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "http://localhost/w5/2019/03/15/sdf/"
  }, "sdf")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "http://localhost/w5/2019/03/15/df/"
  }, _react.default.createElement("b", {
    "data-element": "current_post",
    style: {
      "color": "#006469"
    }
  }, "df"))))), (0, _react2.dynamic_sidebar)('right_side_panel_theme', SdContainer));
};

exports.Widget = Widget;