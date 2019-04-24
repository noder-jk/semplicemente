"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _react2 = require("nodereactor/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(props) {
  var _props$posts = props.posts,
      posts = _props$posts === void 0 ? [] : _props$posts,
      _props$is_singular = props.is_singular,
      is_singular = _props$is_singular === void 0 ? false : _props$is_singular;
  return _react.default.createElement("div", {
    id: "primary",
    className: "content-area"
  }, _react.default.createElement("main", {
    id: "main",
    className: "site-main"
  }, posts.length === 0 ? _react.default.createElement("article", {
    className: "post type-post status-publish format-standard hentry category-mechanism"
  }, _react.default.createElement("div", {
    className: "entry-content"
  }, _react.default.createElement("span", null, "Sorry, Desired Content Not Found.")), _react.default.createElement("footer", {
    className: "entry-footer"
  })) : null, posts.map(function (item) {
    return _react.default.createElement("article", {
      key: item.post_id,
      className: "post type-post status-publish format-standard hentry category-mechanism"
    }, _react.default.createElement("header", {
      className: "entry-header"
    }, _react.default.createElement("h1", {
      className: "entry-title"
    }, (0, _react2.the_title)(item)), _react.default.createElement("div", {
      className: "entry-meta"
    }, _react.default.createElement("span", {
      className: "posted-on"
    }, _react.default.createElement("i", {
      className: "fa fa-clock-o spaceRight",
      "aria-hidden": "true"
    }), _react.default.createElement("a", null, _react.default.createElement("time", {
      className: "entry-date published"
    }, (0, _react2.the_time)(item)))), _react.default.createElement("span", {
      className: "byline"
    }, _react.default.createElement("span", {
      className: "fa fa-user spaceRight",
      "aria-hidden": "true"
    }), _react.default.createElement("span", {
      className: "author vcard"
    }, _react.default.createElement("a", {
      className: "url fn n"
    }, (0, _react2.the_author)(item)))))), _react.default.createElement("div", {
      className: "entry-content"
    }, (0, _react2.the_content)(item)), _react.default.createElement("footer", {
      className: "entry-footer"
    }, is_singular ? _react.default.createElement("span", {
      className: "edit-link floatLeft"
    }, _react.default.createElement("i", {
      className: "fa fa-pencil-square-o spaceRight",
      "aria-hidden": "true"
    }), _react.default.createElement("a", {
      className: "post-edit-link",
      href: "http://localhost/w5/wp-admin/post.php?post=7&action=edit"
    }, "Edit")) : _react.default.createElement("div", {
      className: "readMoreLink"
    }, _react.default.createElement("a", {
      href: ""
    }, "Read More", _react.default.createElement("i", {
      className: "fa spaceLeft fa-angle-double-right",
      "aria-hidden": "true"
    })))));
  }), _react.default.createElement("nav", {
    className: "navigation post-navigation"
  }, _react.default.createElement("h2", {
    className: "screen-reader-text"
  }, "Post navigation"), _react.default.createElement("div", {
    className: "nav-links"
  }, _react.default.createElement("div", {
    className: "nav-previous"
  }, _react.default.createElement("a", {
    href: "http://localhost/w5/2019/03/15/sdf/",
    rel: "prev"
  }, _react.default.createElement("i", {
    className: "fa spaceRight fa-angle-double-left"
  }), " Previous")), _react.default.createElement("div", {
    className: "nav-next"
  }, _react.default.createElement("a", {
    href: "#",
    rel: "next"
  }, "\xA0"))))));
};

exports.Content = Content;