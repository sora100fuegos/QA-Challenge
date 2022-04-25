"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/post";
exports.ids = ["pages/api/post"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxLQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHLENBQUNELHdEQUFZO0FBQy9CLGlFQUFlQyxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcWEtYXV0b21hdGlvbi1lbmdpbmVlci1jaGFsbGVuZ2UvLi9saWIvcHJpc21hLmpzPzc1MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/post/index.js":
/*!*********************************!*\
  !*** ./pages/api/post/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.js\");\n\n// POST /api/post\n// Required fields in body: title, authorEmail\n// Optional fields in body: content\nasync function handle(req, res) {\n    const { title , content , authorEmail  } = req.body;\n    const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.create({\n        data: {\n            title: title,\n            content: content,\n            author: {\n                connect: {\n                    email: authorEmail\n                }\n            }\n        }\n    });\n    res.json(result);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QztBQUV4QyxFQUFpQjtBQUNqQixFQUE4QztBQUM5QyxFQUFtQztBQUNwQixlQUFlQyxNQUFNLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDOUMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxHQUFFQyxPQUFPLEdBQUVDLFdBQVcsRUFBQyxDQUFDLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSTtJQUNoRCxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNSLCtEQUFrQixDQUFDLENBQUM7UUFDdkNXLElBQUksRUFBRSxDQUFDO1lBQ0xQLEtBQUssRUFBRUEsS0FBSztZQUNaQyxPQUFPLEVBQUVBLE9BQU87WUFDaEJPLE1BQU0sRUFBRSxDQUFDO2dCQUFDQyxPQUFPLEVBQUUsQ0FBQztvQkFBQ0MsS0FBSyxFQUFFUixXQUFXO2dCQUFDLENBQUM7WUFBQyxDQUFDO1FBQzdDLENBQUM7SUFDSCxDQUFDO0lBQ0RILEdBQUcsQ0FBQ1ksSUFBSSxDQUFDUCxNQUFNO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcWEtYXV0b21hdGlvbi1lbmdpbmVlci1jaGFsbGVuZ2UvLi9wYWdlcy9hcGkvcG9zdC9pbmRleC5qcz9iMGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcblxuLy8gUE9TVCAvYXBpL3Bvc3Rcbi8vIFJlcXVpcmVkIGZpZWxkcyBpbiBib2R5OiB0aXRsZSwgYXV0aG9yRW1haWxcbi8vIE9wdGlvbmFsIGZpZWxkcyBpbiBib2R5OiBjb250ZW50XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcbiAgY29uc3QgeyB0aXRsZSwgY29udGVudCwgYXV0aG9yRW1haWwgfSA9IHJlcS5ib2R5O1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEucG9zdC5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICBhdXRob3I6IHsgY29ubmVjdDogeyBlbWFpbDogYXV0aG9yRW1haWwgfSB9LFxuICAgIH0sXG4gIH0pO1xuICByZXMuanNvbihyZXN1bHQpO1xufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZSIsInJlcSIsInJlcyIsInRpdGxlIiwiY29udGVudCIsImF1dGhvckVtYWlsIiwiYm9keSIsInJlc3VsdCIsInBvc3QiLCJjcmVhdGUiLCJkYXRhIiwiYXV0aG9yIiwiY29ubmVjdCIsImVtYWlsIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/post/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/post/index.js"));
module.exports = __webpack_exports__;

})();