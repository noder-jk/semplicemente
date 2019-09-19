"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("nodereactor/react");

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Bb = function Bb(props) {
  var children = props.children;
  return _react["default"].createElement("b", null, children);
};

var Content = function Content(props) {
  var _props$posts = props.posts,
      posts = _props$posts === void 0 ? [] : _props$posts,
      _props$is_singular = props.is_singular,
      is_singular = _props$is_singular === void 0 ? false : _props$is_singular,
      _props$pagination = props.pagination,
      pagination = _props$pagination === void 0 ? {} : _props$pagination;
  var next_url = (0, _react2.the_next_url)(pagination);
  var prev_url = (0, _react2.the_previous_url)(pagination);
  return _react["default"].createElement("div", {
    id: "primary",
    className: "content-area"
  }, _react["default"].createElement("main", {
    id: "main",
    className: "site-main"
  }, posts.length === 0 ? _react["default"].createElement("article", {
    className: "post type-post status-publish format-standard hentry category-mechanism"
  }, _react["default"].createElement("div", {
    className: "entry-content"
  }, _react["default"].createElement("span", null, "Sorry, Desired Content Not Found.")), _react["default"].createElement("footer", {
    className: "entry-footer"
  })) : null, posts.map(function (item) {
    return _react["default"].createElement("article", {
      key: item.post_id,
      className: "post type-post status-publish format-standard hentry category-mechanism"
    }, _react["default"].createElement("header", {
      className: "entry-header"
    }, _react["default"].createElement("h1", {
      className: "entry-title"
    }, (0, _react2.the_title)(item)), _react["default"].createElement("div", {
      className: "entry-meta"
    }, _react["default"].createElement("span", {
      className: "posted-on"
    }, _react["default"].createElement("i", {
      className: "fa fa-clock-o spaceRight",
      "aria-hidden": "true"
    }), _react["default"].createElement("a", null, _react["default"].createElement("time", {
      className: "entry-date published"
    }, (0, _react2.the_date)(item)))), _react["default"].createElement("span", {
      className: "byline"
    }, _react["default"].createElement("i", {
      className: "fa fa-user spaceRight",
      "aria-hidden": "true"
    }), _react["default"].createElement("span", {
      className: "author vcard"
    }, _react["default"].createElement("a", {
      className: "url fn n"
    }, (0, _react2.the_author)(item)))))), _react["default"].createElement("div", {
      className: "entry-content"
    }, is_singular ? (0, _react2.the_content)(item) : (0, _react2.the_excerpt)(item)), is_singular ? _react["default"].createElement("br", null) : _react["default"].createElement("footer", {
      className: "entry-footer"
    }, _react["default"].createElement("div", {
      className: "readMoreLink"
    }, _react["default"].createElement("a", {
      href: (0, _react2.the_permalink)(item)
    }, "Read More", _react["default"].createElement("i", {
      className: "fa spaceLeft fa-angle-double-right",
      "aria-hidden": "true"
    })))));
  }), prev_url || next_url ? _react["default"].createElement("nav", {
    className: "navigation post-navigation"
  }, _react["default"].createElement("h2", {
    className: "screen-reader-text"
  }, "Post navigation"), _react["default"].createElement("div", {
    className: "nav-links"
  }, _react["default"].createElement("div", {
    className: "nav-previous"
  }, prev_url ? _react["default"].createElement("a", {
    href: prev_url,
    rel: "prev"
  }, _react["default"].createElement("i", {
    className: "fa spaceRight fa-angle-double-left"
  }), " Previous") : _react["default"].createElement("a", {
    href: "#",
    rel: "next"
  }, "\xA0")), _react["default"].createElement("div", {
    className: "nav-next"
  }, next_url ? _react["default"].createElement("a", {
    href: next_url,
    rel: "prev"
  }, "Next ", _react["default"].createElement("i", {
    className: "fa spaceRight fa-angle-double-right"
  })) : _react["default"].createElement("a", {
    href: "#",
    rel: "next"
  }, "\xA0")))) : null));
};

exports.Content = Content;