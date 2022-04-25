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
exports.id = "pages/api/post/[id]";
exports.ids = ["pages/api/post/[id]"];
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

/***/ "./pages/api/post/[id].js":
/*!********************************!*\
  !*** ./pages/api/post/[id].js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.js\");\n\nasync function handle(req, res) {\n    const postId = req.query.id;\n    if (req.method === \"GET\") {\n        handleGET(postId, res);\n    } else if (req.method === \"DELETE\") {\n        handleDELETE(postId, res);\n    } else {\n        throw new Error(`The HTTP ${req.method} method is not supported at this route.`);\n    }\n};\n// GET /api/post/:id\nasync function handleGET(postId, res) {\n    const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.findUnique({\n        where: {\n            id: Number(postId)\n        },\n        include: {\n            author: true\n        }\n    });\n    res.json(post);\n}\n// DELETE /api/post/:id\nasync function handleDELETE(postId, res) {\n    const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post[\"delete\"]({\n        where: {\n            id: Number(postId)\n        }\n    });\n    res.json(post);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdC9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdDO0FBRXpCLGVBQWVDLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUM5QyxLQUFLLENBQUNDLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxLQUFLLENBQUNDLEVBQUU7SUFFM0IsRUFBRSxFQUFFSixHQUFHLENBQUNLLE1BQU0sS0FBSyxDQUFLLE1BQUUsQ0FBQztRQUN6QkMsU0FBUyxDQUFDSixNQUFNLEVBQUVELEdBQUc7SUFDdkIsQ0FBQyxNQUFNLEVBQUUsRUFBRUQsR0FBRyxDQUFDSyxNQUFNLEtBQUssQ0FBUSxTQUFFLENBQUM7UUFDbkNFLFlBQVksQ0FBQ0wsTUFBTSxFQUFFRCxHQUFHO0lBQzFCLENBQUMsTUFBTSxDQUFDO1FBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQ08sS0FBSyxFQUNaLFNBQVMsRUFBRVIsR0FBRyxDQUFDSyxNQUFNLENBQUMsdUNBQXVDO0lBRWxFLENBQUM7QUFDSCxDQUFDO0FBRUQsRUFBb0I7ZUFDTEMsU0FBUyxDQUFDSixNQUFNLEVBQUVELEdBQUcsRUFBRSxDQUFDO0lBQ3JDLEtBQUssQ0FBQ1EsSUFBSSxHQUFHLEtBQUssQ0FBQ1gsbUVBQXNCLENBQUMsQ0FBQztRQUN6Q2EsS0FBSyxFQUFFLENBQUM7WUFBQ1AsRUFBRSxFQUFFUSxNQUFNLENBQUNWLE1BQU07UUFBRSxDQUFDO1FBQzdCVyxPQUFPLEVBQUUsQ0FBQztZQUFDQyxNQUFNLEVBQUUsSUFBSTtRQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNEYixHQUFHLENBQUNjLElBQUksQ0FBQ04sSUFBSTtBQUNmLENBQUM7QUFFRCxFQUF1QjtlQUNSRixZQUFZLENBQUNMLE1BQU0sRUFBRUQsR0FBRyxFQUFFLENBQUM7SUFDeEMsS0FBSyxDQUFDUSxJQUFJLEdBQUcsS0FBSyxDQUFDWCxrRUFBa0IsQ0FBQyxDQUFDO1FBQ3JDYSxLQUFLLEVBQUUsQ0FBQztZQUFDUCxFQUFFLEVBQUVRLE1BQU0sQ0FBQ1YsTUFBTTtRQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNERCxHQUFHLENBQUNjLElBQUksQ0FBQ04sSUFBSTtBQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcWEtYXV0b21hdGlvbi1lbmdpbmVlci1jaGFsbGVuZ2UvLi9wYWdlcy9hcGkvcG9zdC9baWRdLmpzPzEwMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcbiAgY29uc3QgcG9zdElkID0gcmVxLnF1ZXJ5LmlkO1xuXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgaGFuZGxlR0VUKHBvc3RJZCwgcmVzKTtcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIkRFTEVURVwiKSB7XG4gICAgaGFuZGxlREVMRVRFKHBvc3RJZCwgcmVzKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgVGhlIEhUVFAgJHtyZXEubWV0aG9kfSBtZXRob2QgaXMgbm90IHN1cHBvcnRlZCBhdCB0aGlzIHJvdXRlLmBcbiAgICApO1xuICB9XG59XG5cbi8vIEdFVCAvYXBpL3Bvc3QvOmlkXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVHRVQocG9zdElkLCByZXMpIHtcbiAgY29uc3QgcG9zdCA9IGF3YWl0IHByaXNtYS5wb3N0LmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIocG9zdElkKSB9LFxuICAgIGluY2x1ZGU6IHsgYXV0aG9yOiB0cnVlIH0sXG4gIH0pO1xuICByZXMuanNvbihwb3N0KTtcbn1cblxuLy8gREVMRVRFIC9hcGkvcG9zdC86aWRcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZURFTEVURShwb3N0SWQsIHJlcykge1xuICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QuZGVsZXRlKHtcbiAgICB3aGVyZTogeyBpZDogTnVtYmVyKHBvc3RJZCkgfSxcbiAgfSk7XG4gIHJlcy5qc29uKHBvc3QpO1xufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZSIsInJlcSIsInJlcyIsInBvc3RJZCIsInF1ZXJ5IiwiaWQiLCJtZXRob2QiLCJoYW5kbGVHRVQiLCJoYW5kbGVERUxFVEUiLCJFcnJvciIsInBvc3QiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJOdW1iZXIiLCJpbmNsdWRlIiwiYXV0aG9yIiwianNvbiIsImRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/post/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/post/[id].js"));
module.exports = __webpack_exports__;

})();