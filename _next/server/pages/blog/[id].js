module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0QCG":
/***/ (function(module, exports) {

module.exports = require("remark-gfm");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FNPP");


/***/ }),

/***/ "88KH":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

/***/ }),

/***/ "A3cP":
/***/ (function(module, exports) {

module.exports = require("remark-math");

/***/ }),

/***/ "FNPP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// EXTERNAL MODULE: ./styles/PostDetail.module.scss
var PostDetail_module = __webpack_require__("MvUg");
var PostDetail_module_default = /*#__PURE__*/__webpack_require__.n(PostDetail_module);

// EXTERNAL MODULE: external "remark-gfm"
var external_remark_gfm_ = __webpack_require__("0QCG");
var external_remark_gfm_default = /*#__PURE__*/__webpack_require__.n(external_remark_gfm_);

// EXTERNAL MODULE: external "remark-toc"
var external_remark_toc_ = __webpack_require__("bRUn");
var external_remark_toc_default = /*#__PURE__*/__webpack_require__.n(external_remark_toc_);

// EXTERNAL MODULE: external "remark-math"
var external_remark_math_ = __webpack_require__("A3cP");
var external_remark_math_default = /*#__PURE__*/__webpack_require__.n(external_remark_math_);

// EXTERNAL MODULE: ./node_modules/katex/dist/katex.min.css
var katex_min = __webpack_require__("vg9a");

// EXTERNAL MODULE: external "@matejmazur/react-katex"
var react_katex_ = __webpack_require__("VyA6");
var react_katex_default = /*#__PURE__*/__webpack_require__.n(react_katex_);

// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__("RyM3");

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/styles/prism"
var prism_ = __webpack_require__("88KH");

// CONCATENATED MODULE: ./components/blog/renderers.tsx

var __jsx = external_react_default.a.createElement;





const BlockQuoteBlock = props => {
  return __jsx("blockquote", null, props.children);
};

const CodeBlock = ({
  language,
  value
}) => {
  return __jsx("div", {
    className: PostDetail_module_default.a.codeblock
  }, __jsx(external_react_syntax_highlighter_["Prism"], {
    language: language,
    style: prism_["tomorrow"],
    customStyle: {
      margin: "2rem auto",
      width: "90%",
      borderRadius: "10px",
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)"
    },
    showLineNumbers: true,
    wrapLongLines: true
  }, value), __jsx("div", {
    className: PostDetail_module_default.a.codeblock_language
  }, language));
};

const InlineCodeBlock = props => {
  return __jsx("code", null, props.value);
};

const InlineMathBlock = props => {
  return __jsx(react_katex_default.a, {
    math: props.value,
    errorColor: "#cc0000"
  });
};

const MathBlock = props => {
  return __jsx(react_katex_default.a, {
    block: true,
    math: props.value,
    errorColor: "#cc0000"
  });
};

const renderers = {
  inlineMath: InlineMathBlock,
  math: MathBlock,
  inlineCode: InlineCodeBlock,
  blockquote: BlockQuoteBlock,
  code: CodeBlock
};
/* harmony default export */ var blog_renderers = (renderers);
// CONCATENATED MODULE: ./components/blog/PostDetail.tsx
var PostDetail_jsx = external_react_["createElement"];









const PostDetail = ({
  post: post
}) => PostDetail_jsx("div", {
  className: PostDetail_module_default.a.container
}, PostDetail_jsx("div", {
  className: PostDetail_module_default.a.hgroup
}, PostDetail_jsx("div", {
  className: PostDetail_module_default.a.category
}, post.category.map(cat => PostDetail_jsx("span", {
  key: cat
}, cat))), PostDetail_jsx("h1", null, post.title), PostDetail_jsx("div", {
  className: PostDetail_module_default.a.post_meta
}, PostDetail_jsx("span", null, post.date))), PostDetail_jsx(external_react_markdown_default.a, {
  className: PostDetail_module_default.a.post_style,
  plugins: [external_remark_gfm_default.a, external_remark_math_default.a, external_remark_toc_default.a],
  renderers: blog_renderers
}, post.content));

/* harmony default export */ var blog_PostDetail = (PostDetail);
// EXTERNAL MODULE: ./utils/getPostsData.ts
var getPostsData = __webpack_require__("c4fU");

// CONCATENATED MODULE: ./pages/blog/[id].tsx

var _id_jsx = external_react_default.a.createElement;



const PostDetailPage = ({
  post,
  errors
}) => {
  if (errors) {
    return _id_jsx(external_react_default.a.Fragment, null, _id_jsx("p", null, _id_jsx("span", {
      style: {
        color: "red"
      }
    }, "Error:"), " ", errors));
  }

  return _id_jsx(external_react_default.a.Fragment, null, post && _id_jsx(blog_PostDetail, {
    post: post
  }));
};

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (PostDetailPage);
const getStaticPaths = async () => {
  const allPosts = Object(getPostsData["a" /* default */])();
  const paths = allPosts.map(post => ({
    params: {
      id: post.id.toString()
    }
  }));
  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async ({
  params
}) => {
  try {
    const allPosts = Object(getPostsData["a" /* default */])();
    const id = params === null || params === void 0 ? void 0 : params.id;
    const post = allPosts.find(post => post.id === id);
    return {
      props: {
        post
      }
    };
  } catch (err) {
    return {
      props: {
        errors: err.message
      }
    };
  }
};

/***/ }),

/***/ "MvUg":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "PostDetail_container__ujxfI",
	"hgroup": "PostDetail_hgroup__ssOxH",
	"category": "PostDetail_category__21SrY",
	"post_meta": "PostDetail_post_meta__rGy52",
	"post_style": "PostDetail_post_style__24l-o",
	"codeblock": "PostDetail_codeblock__jZCjC",
	"codeblock_language": "PostDetail_codeblock_language__2mpDI",
	"ir": "PostDetail_ir__1pr7P"
};


/***/ }),

/***/ "RyM3":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "VyA6":
/***/ (function(module, exports) {

module.exports = require("@matejmazur/react-katex");

/***/ }),

/***/ "bRUn":
/***/ (function(module, exports) {

module.exports = require("remark-toc");

/***/ }),

/***/ "c4fU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uo/4");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const postDIR = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), "content/posts");

const getPostsData = () => {
  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync(postDIR);
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(postDIR, fileName);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(fullPath, "utf8");
    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      category: matterResult.data.category,
      content: matterResult.content
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (getPostsData);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "uo/4":
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "vg9a":
/***/ (function(module, exports) {



/***/ })

/******/ });