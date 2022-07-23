"use strict";
(self["webpackChunkwebpack_project_to_do_list"] = self["webpackChunkwebpack_project_to_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./1.jpg */ "./src/1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n  min-height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  width: 1.5rem;\r\n  filter: invert(100%) hue-rotate(180deg) brightness(1.7);\r\n}\r\n\r\nmain {\r\n  border: 1px lightgray solid;\r\n  max-width: 60%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 50px auto;\r\n}\r\n\r\nh3 {\r\n  position: relative;\r\n  margin: 20px 5px;\r\n  padding: 5px;\r\n  border-bottom: 1px lightgray solid;\r\n  color: aliceblue;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.inputtext {\r\n  border: none;\r\n  padding: 3px;\r\n  font-size: 1.2rem;\r\n  min-width: 90%;\r\n  background-color: rgb(205, 225, 218);\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  margin: 10px 0;\r\n  padding: 10px;\r\n  border-bottom: 1px lightgray solid;\r\n  position: relative;\r\n  display: flex;\r\n}\r\n\r\nbutton {\r\n  position: absolute;\r\n  right: 10px;\r\n  border: none;\r\n  padding-top: 9px;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-icon {\r\n  position: absolute;\r\n  right: 10px;\r\n  border: none;\r\n  padding: 0 5px;\r\n}\r\n\r\n.fa-arrows-rotate {\r\n  color: aliceblue;\r\n}\r\n\r\nli:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n#add::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n#add {\r\n  padding: 10px;\r\n  margin-bottom: 20px;\r\n  border: none;\r\n  background-color: aliceblue;\r\n  border-bottom: 1px lightgray solid;\r\n}\r\n\r\n#add:focus {\r\n  outline: none;\r\n}\r\n\r\n.checkboxitem {\r\n  margin-right: 10px;\r\n}\r\n\r\n.clear {\r\n  text-align: center;\r\n  cursor: pointer;\r\n  color: aliceblue;\r\n}\r\n\r\n.clearlist {\r\n  background-color: rgb(40, 83, 120);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 50px;\r\n}\r\n\r\n.editdiv {\r\n  display: none;\r\n}\r\n\r\n.inputextedit {\r\n  padding: 10px 0;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n  width: 80%;\r\n}\r\n\r\n.taskdiv {\r\n  display: flex;\r\n  width: 90%;\r\n}\r\n\r\n@media screen and (max-width: 1100px) {\r\n  input[type=\"checkbox\"] {\r\n    width: 1.5rem;\r\n    filter: invert(100%) hue-rotate(18deg) brightness(1.7);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 540px) {\r\n  .inputtext {\r\n    min-width: 70%;\r\n    margin-right: 9px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,mDAAwB;EACxB,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uDAAuD;AACzD;;AAEA;EACE,2BAA2B;EAC3B,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,kCAAkC;EAClC,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,cAAc;EACd,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,aAAa;EACb,kCAAkC;EAClC,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,2BAA2B;EAC3B,kCAAkC;AACpC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,UAAU;AACZ;;AAEA;EACE;IACE,aAAa;IACb,sDAAsD;EACxD;AACF;;AAEA;EACE;IACE,cAAc;IACd,iBAAiB;EACnB;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n  min-height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n  background: url(./1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  width: 1.5rem;\r\n  filter: invert(100%) hue-rotate(180deg) brightness(1.7);\r\n}\r\n\r\nmain {\r\n  border: 1px lightgray solid;\r\n  max-width: 60%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 50px auto;\r\n}\r\n\r\nh3 {\r\n  position: relative;\r\n  margin: 20px 5px;\r\n  padding: 5px;\r\n  border-bottom: 1px lightgray solid;\r\n  color: aliceblue;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.inputtext {\r\n  border: none;\r\n  padding: 3px;\r\n  font-size: 1.2rem;\r\n  min-width: 90%;\r\n  background-color: rgb(205, 225, 218);\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  margin: 10px 0;\r\n  padding: 10px;\r\n  border-bottom: 1px lightgray solid;\r\n  position: relative;\r\n  display: flex;\r\n}\r\n\r\nbutton {\r\n  position: absolute;\r\n  right: 10px;\r\n  border: none;\r\n  padding-top: 9px;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-icon {\r\n  position: absolute;\r\n  right: 10px;\r\n  border: none;\r\n  padding: 0 5px;\r\n}\r\n\r\n.fa-arrows-rotate {\r\n  color: aliceblue;\r\n}\r\n\r\nli:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n#add::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n#add {\r\n  padding: 10px;\r\n  margin-bottom: 20px;\r\n  border: none;\r\n  background-color: aliceblue;\r\n  border-bottom: 1px lightgray solid;\r\n}\r\n\r\n#add:focus {\r\n  outline: none;\r\n}\r\n\r\n.checkboxitem {\r\n  margin-right: 10px;\r\n}\r\n\r\n.clear {\r\n  text-align: center;\r\n  cursor: pointer;\r\n  color: aliceblue;\r\n}\r\n\r\n.clearlist {\r\n  background-color: rgb(40, 83, 120);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 50px;\r\n}\r\n\r\n.editdiv {\r\n  display: none;\r\n}\r\n\r\n.inputextedit {\r\n  padding: 10px 0;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n  width: 80%;\r\n}\r\n\r\n.taskdiv {\r\n  display: flex;\r\n  width: 90%;\r\n}\r\n\r\n@media screen and (max-width: 1100px) {\r\n  input[type=\"checkbox\"] {\r\n    width: 1.5rem;\r\n    filter: invert(100%) hue-rotate(18deg) brightness(1.7);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 540px) {\r\n  .inputtext {\r\n    min-width: 70%;\r\n    margin-right: 9px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_todoObjectClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todoObjectClass.js */ "./src/modules/todoObjectClass.js");
/* harmony import */ var _modules_mainContainerClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mainContainerClass.js */ "./src/modules/mainContainerClass.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const task = new _modules_todoObjectClass_js__WEBPACK_IMPORTED_MODULE_0__.OneTaskListItem();
const addListItem = document.querySelector('#add');
addListItem.addEventListener('change', () => {
  const MyToDo = new _modules_mainContainerClass_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const AddedItem = new _modules_todoObjectClass_js__WEBPACK_IMPORTED_MODULE_0__.OneTaskListItem();
  AddedItem.addNewToDo(MyToDo.tasks, addListItem.value);
});
const clearSelectedTasks = document.querySelector('.clear');
clearSelectedTasks.addEventListener('click', () => {
  const MyToDo = new _modules_mainContainerClass_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const task = new _modules_todoObjectClass_js__WEBPACK_IMPORTED_MODULE_0__.OneTaskListItem();
  const myArray = task.clearTasks(MyToDo.tasks);
  localStorage.setItem('todotasks', JSON.stringify(myArray));
  task.updateToDoIndex();
  task.displayToDoList();
});
window.onload = () => {
  task.displayToDoList();
};

/***/ }),

/***/ "./src/modules/createTasksAndEvents.js":
/*!*********************************************!*\
  !*** ./src/modules/createTasksAndEvents.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoObjectClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoObjectClass.js */ "./src/modules/todoObjectClass.js");
/* harmony import */ var _mainContainerClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainContainerClass.js */ "./src/modules/mainContainerClass.js");



const createTodoListComponents = (todoListComponent) => {
  const listContainer = document.querySelector('.listContainer');
  const addInput = document.querySelector('#add');
  addInput.value = '';
  // create list element
  const oneTask = document.createElement('li');
  listContainer.appendChild(oneTask);
  // create div for the checkbox and input values
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('taskdiv');
  taskDiv.setAttribute('id', todoListComponent.index);
  oneTask.appendChild(taskDiv);
  // checkbox
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', todoListComponent.index);
  checkbox.classList.add('checkboxitem');
  checkbox.checked = `${todoListComponent.completed ? 'checked' : ''}`;
  taskDiv.appendChild(checkbox);
  // input
  const inputText = document.createElement('input');
  inputText.className = 'inputtext';
  inputText.setAttribute('type', 'text');
  inputText.setAttribute('id', todoListComponent.index);
  inputText.setAttribute('value', todoListComponent.description);
  inputText.setAttribute('disabled', '');
  taskDiv.appendChild(inputText);
  // ellipsis button
  const ellipsis = document.createElement('button');
  ellipsis.setAttribute('type', 'button');
  ellipsis.classList.add('editButton');
  ellipsis.classList.add(todoListComponent.index);
  ellipsis.style.color = 'aliceblue';
  ellipsis.innerHTML = '<i class="fa-solid fa-ellipsis-vertical fa-icon fa-lg"></i>';
  oneTask.appendChild(ellipsis);
  // delete button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('deleteButton');
  deleteButton.style.color = 'red';
  deleteButton.classList.add(todoListComponent.index);
  deleteButton.setAttribute('type', 'button');
  deleteButton.setAttribute('id', todoListComponent.index);
  deleteButton.innerHTML = `<i id="${todoListComponent.index}" class="fas fa-trash-alt fa-icon fa-lg"></i>`;
  // hide delete button
  deleteButton.style.display = 'none';
  oneTask.appendChild(deleteButton);
  ellipsis.addEventListener('click', (e) => {
    const siblingDeleteBtn = document.getElementsByClassName(
      `deleteButton ${todoListComponent.index}`,
    )[0];
    inputText.disabled = false;
    inputText.focus();
    ellipsis.style.display = 'none';
    siblingDeleteBtn.style.display = 'block';
    inputText.style.backgroundColor = 'white';
    inputText.style.outline = 'none';
  });
  // delete from to do list
  deleteButton.addEventListener('click', (e) => {
    const DeleteItem = new _todoObjectClass_js__WEBPACK_IMPORTED_MODULE_0__.OneTaskListItem();
    DeleteItem.removeFromToDo(e.target.id);
  });
  // check items
  checkbox.addEventListener('change', (e) => {
    const checkedTasks = new _todoObjectClass_js__WEBPACK_IMPORTED_MODULE_0__.OneTaskListItem();
    checkedTasks.checkTasks(e.target.id, e.target.checked);
  });

  // edit text Item
  inputText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      // make the current input text the actual input value
      inputText.placeholder = inputText.value;
      ellipsis.style.display = 'block';
      deleteButton.style.display = 'none';
      inputText.removeAttribute('disabled');
      const ListTask = new _todoObjectClass_js__WEBPACK_IMPORTED_MODULE_0__.OneTaskListItem();
      ListTask.editItem(inputText.id, inputText.value);
      // set input field back to disabled
      inputText.setAttribute('disabled', '');
      inputText.style.backgroundColor = 'aliceblue';
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoListComponents);


/***/ }),

/***/ "./src/modules/mainContainerClass.js":
/*!*******************************************!*\
  !*** ./src/modules/mainContainerClass.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Main container class - Array of Objects
class MyToDoList {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('todotasks')) ? JSON.parse(localStorage.getItem('todotasks')) : [];
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyToDoList);

/***/ }),

/***/ "./src/modules/todoObjectClass.js":
/*!****************************************!*\
  !*** ./src/modules/todoObjectClass.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyToDo": () => (/* binding */ MyToDo),
/* harmony export */   "OneTaskListItem": () => (/* binding */ OneTaskListItem)
/* harmony export */ });
/* harmony import */ var _createTasksAndEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTasksAndEvents.js */ "./src/modules/createTasksAndEvents.js");
/* harmony import */ var _mainContainerClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainContainerClass.js */ "./src/modules/mainContainerClass.js");


// initiate new instance of main class container
const MyToDo = new _mainContainerClass_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
// call the ul element that contains all list items
const listContainer = document.querySelector('.listContainer');
class OneTaskListItem {
  constructor(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }

  // add
  addNewToDo(mainArr, newToDo) {
    this.description = newToDo;
    this.index = mainArr.length + 1;
    this.completed = false;
    // create task object
    mainArr.push({
      index: this.index,
      description: this.description,
      completed: this.completed,
    });
    // save to local storage
    localStorage.setItem('todotasks', JSON.stringify(mainArr));
    // update the length of the container
    (0,_createTasksAndEvents_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this);
  }

  // remove
  removeFromToDo(index) {
    const MyToDo = new _mainContainerClass_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const listContainer = document.querySelector('.listContainer');

    MyToDo.tasks = MyToDo.tasks.filter((task) => task.index !== Number(index));
    // update local storage
    localStorage.setItem('todotasks', JSON.stringify(MyToDo.tasks));
    // set container to empty in order to update the index
    listContainer.innerHTML = '';
    // update index
    this.updateToDoIndex();
    // display results
    this.displayToDoList();
  }

  // update Index
  updateToDoIndex = () => {
    const MyToDo = new _mainContainerClass_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    // map through the array of objects
    MyToDo.tasks = MyToDo.tasks.map((node, index) => {
      // increase the index of each task by one after the deletion of an item
      node.index = index + 1;
      return node;
    });
    // save changes to local storage
    localStorage.setItem('todotasks', JSON.stringify(MyToDo.tasks));
  };

  // display
  displayToDoList = () => {
    const MyToDo = new _mainContainerClass_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const listContainer = document.querySelector('.listContainer');
    listContainer.innerHTML = '';
    JSON.parse(localStorage.getItem('todotasks')).forEach((task, index) => {
      (0,_createTasksAndEvents_js__WEBPACK_IMPORTED_MODULE_0__["default"])(task);
    });
  };

    // check
    checkTasks = (id, done) => {
      const MyToDo = new _mainContainerClass_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      const foundIndex = MyToDo.tasks.findIndex(
        (task) => task.index === Number(id),
      );
      MyToDo.tasks[foundIndex] = {
        ...MyToDo.tasks[foundIndex],
        completed: done,
      };
      // save changes to local storage
      localStorage.setItem('todotasks', JSON.stringify(MyToDo.tasks));
      if (done === MyToDo.tasks[foundIndex].completed) {
        return true;
      }
      return false;
    }

  // edit
  editItem = (id, inputValue) => {
    const MyToDo = new _mainContainerClass_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const foundIndex = MyToDo.tasks.findIndex(
      (task) => task.index === Number(id),
    );
    MyToDo.tasks[foundIndex] = {
      ...MyToDo.tasks[foundIndex],
      description: inputValue,
    };
    // save changes to local storage
    localStorage.setItem('todotasks', JSON.stringify(MyToDo.tasks));
  };

  // clear tasks
  clearTasks = (myArray) => {
    myArray = myArray.filter((task) => task.completed === false);
    return myArray;
  }
}



/***/ }),

/***/ "./src/1.jpg":
/*!*******************!*\
  !*** ./src/1.jpg ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6a661dc02f435973a55.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC0tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LS10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LS10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC0tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LS10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC0tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LS10by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlVGFza3NBbmRFdmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LS10by1kby1saXN0Ly4vc3JjL21vZHVsZXMvbWFpbkNvbnRhaW5lckNsYXNzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC0tdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9PYmplY3RDbGFzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8xLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIHdpZHRoOiAxLjVyZW07XFxyXFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBodWUtcm90YXRlKDE4MGRlZykgYnJpZ2h0bmVzcygxLjcpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGJvcmRlcjogMXB4IGxpZ2h0Z3JheSBzb2xpZDtcXHJcXG4gIG1heC13aWR0aDogNjAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luOiAyMHB4IDVweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBsaWdodGdyYXkgc29saWQ7XFxyXFxuICBjb2xvcjogYWxpY2VibHVlO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0dGV4dCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIG1pbi13aWR0aDogOTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMjI1LCAyMTgpO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGxpZ2h0Z3JheSBzb2xpZDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmctdG9wOiA5cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5mYS1hcnJvd3Mtcm90YXRlIHtcXHJcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxufVxcclxcblxcclxcbmxpOmxhc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZDo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGxpZ2h0Z3JheSBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3hpdGVtIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxufVxcclxcblxcclxcbi5jbGVhcmxpc3Qge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA4MywgMTIwKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5lZGl0ZGl2IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dGV4dGVkaXQge1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza2RpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XFxyXFxuICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgaHVlLXJvdGF0ZSgxOGRlZykgYnJpZ2h0bmVzcygxLjcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xcclxcbiAgLmlucHV0dGV4dCB7XFxyXFxuICAgIG1pbi13aWR0aDogNzAlO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbURBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0RBQXNEO0VBQ3hEO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguLzEuanBnKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIHdpZHRoOiAxLjVyZW07XFxyXFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBodWUtcm90YXRlKDE4MGRlZykgYnJpZ2h0bmVzcygxLjcpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGJvcmRlcjogMXB4IGxpZ2h0Z3JheSBzb2xpZDtcXHJcXG4gIG1heC13aWR0aDogNjAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luOiAyMHB4IDVweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBsaWdodGdyYXkgc29saWQ7XFxyXFxuICBjb2xvcjogYWxpY2VibHVlO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0dGV4dCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIG1pbi13aWR0aDogOTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMjI1LCAyMTgpO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGxpZ2h0Z3JheSBzb2xpZDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmctdG9wOiA5cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5mYS1hcnJvd3Mtcm90YXRlIHtcXHJcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxufVxcclxcblxcclxcbmxpOmxhc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZDo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGxpZ2h0Z3JheSBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3hpdGVtIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxufVxcclxcblxcclxcbi5jbGVhcmxpc3Qge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA4MywgMTIwKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5lZGl0ZGl2IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dGV4dGVkaXQge1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza2RpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XFxyXFxuICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgaHVlLXJvdGF0ZSgxOGRlZykgYnJpZ2h0bmVzcygxLjcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xcclxcbiAgLmlucHV0dGV4dCB7XFxyXFxuICAgIG1pbi13aWR0aDogNzAlO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IE9uZVRhc2tMaXN0SXRlbSB9IGZyb20gJy4vbW9kdWxlcy90b2RvT2JqZWN0Q2xhc3MuanMnO1xuaW1wb3J0IE15VG9Eb0xpc3QgZnJvbSAnLi9tb2R1bGVzL21haW5Db250YWluZXJDbGFzcy5qcyc7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCB0YXNrID0gbmV3IE9uZVRhc2tMaXN0SXRlbSgpO1xuY29uc3QgYWRkTGlzdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkJyk7XG5hZGRMaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gIGNvbnN0IE15VG9EbyA9IG5ldyBNeVRvRG9MaXN0KCk7XG4gIGNvbnN0IEFkZGVkSXRlbSA9IG5ldyBPbmVUYXNrTGlzdEl0ZW0oKTtcbiAgQWRkZWRJdGVtLmFkZE5ld1RvRG8oTXlUb0RvLnRhc2tzLCBhZGRMaXN0SXRlbS52YWx1ZSk7XG59KTtcbmNvbnN0IGNsZWFyU2VsZWN0ZWRUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhcicpO1xuY2xlYXJTZWxlY3RlZFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBNeVRvRG8gPSBuZXcgTXlUb0RvTGlzdCgpO1xuICBjb25zdCB0YXNrID0gbmV3IE9uZVRhc2tMaXN0SXRlbSgpO1xuICBjb25zdCBteUFycmF5ID0gdGFzay5jbGVhclRhc2tzKE15VG9Eby50YXNrcyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvdGFza3MnLCBKU09OLnN0cmluZ2lmeShteUFycmF5KSk7XG4gIHRhc2sudXBkYXRlVG9Eb0luZGV4KCk7XG4gIHRhc2suZGlzcGxheVRvRG9MaXN0KCk7XG59KTtcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIHRhc2suZGlzcGxheVRvRG9MaXN0KCk7XG59OyIsImltcG9ydCB7IE9uZVRhc2tMaXN0SXRlbSB9IGZyb20gJy4vdG9kb09iamVjdENsYXNzLmpzJztcbmltcG9ydCBNeVRvRG9MaXN0IGZyb20gJy4vbWFpbkNvbnRhaW5lckNsYXNzLmpzJztcblxuY29uc3QgY3JlYXRlVG9kb0xpc3RDb21wb25lbnRzID0gKHRvZG9MaXN0Q29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdENvbnRhaW5lcicpO1xuICBjb25zdCBhZGRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQnKTtcbiAgYWRkSW5wdXQudmFsdWUgPSAnJztcbiAgLy8gY3JlYXRlIGxpc3QgZWxlbWVudFxuICBjb25zdCBvbmVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChvbmVUYXNrKTtcbiAgLy8gY3JlYXRlIGRpdiBmb3IgdGhlIGNoZWNrYm94IGFuZCBpbnB1dCB2YWx1ZXNcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tkaXYnKTtcbiAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgdG9kb0xpc3RDb21wb25lbnQuaW5kZXgpO1xuICBvbmVUYXNrLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAvLyBjaGVja2JveFxuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgdG9kb0xpc3RDb21wb25lbnQuaW5kZXgpO1xuICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveGl0ZW0nKTtcbiAgY2hlY2tib3guY2hlY2tlZCA9IGAke3RvZG9MaXN0Q29tcG9uZW50LmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnfWA7XG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAvLyBpbnB1dFxuICBjb25zdCBpbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dFRleHQuY2xhc3NOYW1lID0gJ2lucHV0dGV4dCc7XG4gIGlucHV0VGV4dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKCdpZCcsIHRvZG9MaXN0Q29tcG9uZW50LmluZGV4KTtcbiAgaW5wdXRUZXh0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0b2RvTGlzdENvbXBvbmVudC5kZXNjcmlwdGlvbik7XG4gIGlucHV0VGV4dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKGlucHV0VGV4dCk7XG4gIC8vIGVsbGlwc2lzIGJ1dHRvblxuICBjb25zdCBlbGxpcHNpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlbGxpcHNpcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGVsbGlwc2lzLmNsYXNzTGlzdC5hZGQoJ2VkaXRCdXR0b24nKTtcbiAgZWxsaXBzaXMuY2xhc3NMaXN0LmFkZCh0b2RvTGlzdENvbXBvbmVudC5pbmRleCk7XG4gIGVsbGlwc2lzLnN0eWxlLmNvbG9yID0gJ2FsaWNlYmx1ZSc7XG4gIGVsbGlwc2lzLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsIGZhLWljb24gZmEtbGdcIj48L2k+JztcbiAgb25lVGFzay5hcHBlbmRDaGlsZChlbGxpcHNpcyk7XG4gIC8vIGRlbGV0ZSBidXR0b25cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVCdXR0b24nKTtcbiAgZGVsZXRlQnV0dG9uLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRvZG9MaXN0Q29tcG9uZW50LmluZGV4KTtcbiAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCB0b2RvTGlzdENvbXBvbmVudC5pbmRleCk7XG4gIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBgPGkgaWQ9XCIke3RvZG9MaXN0Q29tcG9uZW50LmluZGV4fVwiIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdCBmYS1pY29uIGZhLWxnXCI+PC9pPmA7XG4gIC8vIGhpZGUgZGVsZXRlIGJ1dHRvblxuICBkZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgb25lVGFzay5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICBlbGxpcHNpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3Qgc2libGluZ0RlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICBgZGVsZXRlQnV0dG9uICR7dG9kb0xpc3RDb21wb25lbnQuaW5kZXh9YCxcbiAgICApWzBdO1xuICAgIGlucHV0VGV4dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGlucHV0VGV4dC5mb2N1cygpO1xuICAgIGVsbGlwc2lzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc2libGluZ0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBpbnB1dFRleHQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICBpbnB1dFRleHQuc3R5bGUub3V0bGluZSA9ICdub25lJztcbiAgfSk7XG4gIC8vIGRlbGV0ZSBmcm9tIHRvIGRvIGxpc3RcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBEZWxldGVJdGVtID0gbmV3IE9uZVRhc2tMaXN0SXRlbSgpO1xuICAgIERlbGV0ZUl0ZW0ucmVtb3ZlRnJvbVRvRG8oZS50YXJnZXQuaWQpO1xuICB9KTtcbiAgLy8gY2hlY2sgaXRlbXNcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICBjb25zdCBjaGVja2VkVGFza3MgPSBuZXcgT25lVGFza0xpc3RJdGVtKCk7XG4gICAgY2hlY2tlZFRhc2tzLmNoZWNrVGFza3MoZS50YXJnZXQuaWQsIGUudGFyZ2V0LmNoZWNrZWQpO1xuICB9KTtcblxuICAvLyBlZGl0IHRleHQgSXRlbVxuICBpbnB1dFRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAvLyBtYWtlIHRoZSBjdXJyZW50IGlucHV0IHRleHQgdGhlIGFjdHVhbCBpbnB1dCB2YWx1ZVxuICAgICAgaW5wdXRUZXh0LnBsYWNlaG9sZGVyID0gaW5wdXRUZXh0LnZhbHVlO1xuICAgICAgZWxsaXBzaXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBkZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGlucHV0VGV4dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICBjb25zdCBMaXN0VGFzayA9IG5ldyBPbmVUYXNrTGlzdEl0ZW0oKTtcbiAgICAgIExpc3RUYXNrLmVkaXRJdGVtKGlucHV0VGV4dC5pZCwgaW5wdXRUZXh0LnZhbHVlKTtcbiAgICAgIC8vIHNldCBpbnB1dCBmaWVsZCBiYWNrIHRvIGRpc2FibGVkXG4gICAgICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICAgIGlucHV0VGV4dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYWxpY2VibHVlJztcbiAgICB9XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvZG9MaXN0Q29tcG9uZW50cztcbiIsIi8vIE1haW4gY29udGFpbmVyIGNsYXNzIC0gQXJyYXkgb2YgT2JqZWN0c1xuY2xhc3MgTXlUb0RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvdGFza3MnKSkgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvdGFza3MnKSkgOiBbXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeVRvRG9MaXN0OyIsImltcG9ydCBjcmVhdGVUb2RvTGlzdENvbXBvbmVudHMgZnJvbSAnLi9jcmVhdGVUYXNrc0FuZEV2ZW50cy5qcyc7XG5pbXBvcnQgTXlUb0RvTGlzdCBmcm9tICcuL21haW5Db250YWluZXJDbGFzcy5qcyc7XG4vLyBpbml0aWF0ZSBuZXcgaW5zdGFuY2Ugb2YgbWFpbiBjbGFzcyBjb250YWluZXJcbmNvbnN0IE15VG9EbyA9IG5ldyBNeVRvRG9MaXN0KCk7XG4vLyBjYWxsIHRoZSB1bCBlbGVtZW50IHRoYXQgY29udGFpbnMgYWxsIGxpc3QgaXRlbXNcbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdENvbnRhaW5lcicpO1xuY2xhc3MgT25lVGFza0xpc3RJdGVtIHtcbiAgY29uc3RydWN0b3IoaW5kZXgsIGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICB9XG5cbiAgLy8gYWRkXG4gIGFkZE5ld1RvRG8obWFpbkFyciwgbmV3VG9Ebykge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdUb0RvO1xuICAgIHRoaXMuaW5kZXggPSBtYWluQXJyLmxlbmd0aCArIDE7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAvLyBjcmVhdGUgdGFzayBvYmplY3RcbiAgICBtYWluQXJyLnB1c2goe1xuICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIGNvbXBsZXRlZDogdGhpcy5jb21wbGV0ZWQsXG4gICAgfSk7XG4gICAgLy8gc2F2ZSB0byBsb2NhbCBzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG90YXNrcycsIEpTT04uc3RyaW5naWZ5KG1haW5BcnIpKTtcbiAgICAvLyB1cGRhdGUgdGhlIGxlbmd0aCBvZiB0aGUgY29udGFpbmVyXG4gICAgY3JlYXRlVG9kb0xpc3RDb21wb25lbnRzKHRoaXMpO1xuICB9XG5cbiAgLy8gcmVtb3ZlXG4gIHJlbW92ZUZyb21Ub0RvKGluZGV4KSB7XG4gICAgY29uc3QgTXlUb0RvID0gbmV3IE15VG9Eb0xpc3QoKTtcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RDb250YWluZXInKTtcblxuICAgIE15VG9Eby50YXNrcyA9IE15VG9Eby50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaW5kZXggIT09IE51bWJlcihpbmRleCkpO1xuICAgIC8vIHVwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG90YXNrcycsIEpTT04uc3RyaW5naWZ5KE15VG9Eby50YXNrcykpO1xuICAgIC8vIHNldCBjb250YWluZXIgdG8gZW1wdHkgaW4gb3JkZXIgdG8gdXBkYXRlIHRoZSBpbmRleFxuICAgIGxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgLy8gdXBkYXRlIGluZGV4XG4gICAgdGhpcy51cGRhdGVUb0RvSW5kZXgoKTtcbiAgICAvLyBkaXNwbGF5IHJlc3VsdHNcbiAgICB0aGlzLmRpc3BsYXlUb0RvTGlzdCgpO1xuICB9XG5cbiAgLy8gdXBkYXRlIEluZGV4XG4gIHVwZGF0ZVRvRG9JbmRleCA9ICgpID0+IHtcbiAgICBjb25zdCBNeVRvRG8gPSBuZXcgTXlUb0RvTGlzdCgpO1xuICAgIC8vIG1hcCB0aHJvdWdoIHRoZSBhcnJheSBvZiBvYmplY3RzXG4gICAgTXlUb0RvLnRhc2tzID0gTXlUb0RvLnRhc2tzLm1hcCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCBvZiBlYWNoIHRhc2sgYnkgb25lIGFmdGVyIHRoZSBkZWxldGlvbiBvZiBhbiBpdGVtXG4gICAgICBub2RlLmluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSk7XG4gICAgLy8gc2F2ZSBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoTXlUb0RvLnRhc2tzKSk7XG4gIH07XG5cbiAgLy8gZGlzcGxheVxuICBkaXNwbGF5VG9Eb0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgTXlUb0RvID0gbmV3IE15VG9Eb0xpc3QoKTtcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RDb250YWluZXInKTtcbiAgICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG90YXNrcycpKS5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgY3JlYXRlVG9kb0xpc3RDb21wb25lbnRzKHRhc2spO1xuICAgIH0pO1xuICB9O1xuXG4gICAgLy8gY2hlY2tcbiAgICBjaGVja1Rhc2tzID0gKGlkLCBkb25lKSA9PiB7XG4gICAgICBjb25zdCBNeVRvRG8gPSBuZXcgTXlUb0RvTGlzdCgpO1xuICAgICAgY29uc3QgZm91bmRJbmRleCA9IE15VG9Eby50YXNrcy5maW5kSW5kZXgoXG4gICAgICAgICh0YXNrKSA9PiB0YXNrLmluZGV4ID09PSBOdW1iZXIoaWQpLFxuICAgICAgKTtcbiAgICAgIE15VG9Eby50YXNrc1tmb3VuZEluZGV4XSA9IHtcbiAgICAgICAgLi4uTXlUb0RvLnRhc2tzW2ZvdW5kSW5kZXhdLFxuICAgICAgICBjb21wbGV0ZWQ6IGRvbmUsXG4gICAgICB9O1xuICAgICAgLy8gc2F2ZSBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvdGFza3MnLCBKU09OLnN0cmluZ2lmeShNeVRvRG8udGFza3MpKTtcbiAgICAgIGlmIChkb25lID09PSBNeVRvRG8udGFza3NbZm91bmRJbmRleF0uY29tcGxldGVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAvLyBlZGl0XG4gIGVkaXRJdGVtID0gKGlkLCBpbnB1dFZhbHVlKSA9PiB7XG4gICAgY29uc3QgTXlUb0RvID0gbmV3IE15VG9Eb0xpc3QoKTtcbiAgICBjb25zdCBmb3VuZEluZGV4ID0gTXlUb0RvLnRhc2tzLmZpbmRJbmRleChcbiAgICAgICh0YXNrKSA9PiB0YXNrLmluZGV4ID09PSBOdW1iZXIoaWQpLFxuICAgICk7XG4gICAgTXlUb0RvLnRhc2tzW2ZvdW5kSW5kZXhdID0ge1xuICAgICAgLi4uTXlUb0RvLnRhc2tzW2ZvdW5kSW5kZXhdLFxuICAgICAgZGVzY3JpcHRpb246IGlucHV0VmFsdWUsXG4gICAgfTtcbiAgICAvLyBzYXZlIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvdGFza3MnLCBKU09OLnN0cmluZ2lmeShNeVRvRG8udGFza3MpKTtcbiAgfTtcblxuICAvLyBjbGVhciB0YXNrc1xuICBjbGVhclRhc2tzID0gKG15QXJyYXkpID0+IHtcbiAgICBteUFycmF5ID0gbXlBcnJheS5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGVkID09PSBmYWxzZSk7XG4gICAgcmV0dXJuIG15QXJyYXk7XG4gIH1cbn1cbmV4cG9ydCB7IE15VG9EbywgT25lVGFza0xpc3RJdGVtIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=