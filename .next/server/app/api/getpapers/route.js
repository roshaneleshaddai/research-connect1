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
exports.id = "app/api/getpapers/route";
exports.ids = ["app/api/getpapers/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgetpapers%2Froute&page=%2Fapi%2Fgetpapers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgetpapers%2Froute.js&appDir=D%3A%5CNRI%5Cresearch-paper%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNRI%5Cresearch-paper&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgetpapers%2Froute&page=%2Fapi%2Fgetpapers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgetpapers%2Froute.js&appDir=D%3A%5CNRI%5Cresearch-paper%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNRI%5Cresearch-paper&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_NRI_research_paper_app_api_getpapers_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/getpapers/route.js */ \"(rsc)/./app/api/getpapers/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/getpapers/route\",\n        pathname: \"/api/getpapers\",\n        filename: \"route\",\n        bundlePath: \"app/api/getpapers/route\"\n    },\n    resolvedPagePath: \"D:\\\\NRI\\\\research-paper\\\\app\\\\api\\\\getpapers\\\\route.js\",\n    nextConfigOutput,\n    userland: D_NRI_research_paper_app_api_getpapers_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZXRwYXBlcnMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmdldHBhcGVycyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmdldHBhcGVycyUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDTlJJJTVDcmVzZWFyY2gtcGFwZXIlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNOUkklNUNyZXNlYXJjaC1wYXBlciZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDTTtBQUNuRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcTlJJXFxcXHJlc2VhcmNoLXBhcGVyXFxcXGFwcFxcXFxhcGlcXFxcZ2V0cGFwZXJzXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9nZXRwYXBlcnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9nZXRwYXBlcnNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2dldHBhcGVycy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXE5SSVxcXFxyZXNlYXJjaC1wYXBlclxcXFxhcHBcXFxcYXBpXFxcXGdldHBhcGVyc1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgetpapers%2Froute&page=%2Fapi%2Fgetpapers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgetpapers%2Froute.js&appDir=D%3A%5CNRI%5Cresearch-paper%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNRI%5Cresearch-paper&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/getpapers/route.js":
/*!************************************!*\
  !*** ./app/api/getpapers/route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _lib_models_paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/models/paper */ \"(rsc)/./lib/models/paper.js\");\n\n\nasync function GET(request) {\n    try {\n        const url = new URL(request.url);\n        const submittedResearcherId = url.searchParams.get(\"submitted_researcher_id\");\n        // Ensure the researcher ID is provided\n        if (!submittedResearcherId) {\n            return new Response(JSON.stringify({\n                success: false,\n                message: \"submitted_researcher_id is required\"\n            }), {\n                status: 400,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n        // Connect to MongoDB\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n        // Fetch papers based on the provided researcher ID\n        const papers = await _lib_models_paper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n            submitted_researcher_id: submittedResearcherId\n        });\n        // Handle case when no papers are found\n        if (!papers || papers.length === 0) {\n            return new Response(JSON.stringify({\n                success: false,\n                message: \"No papers found for the given researcher ID\"\n            }), {\n                status: 404,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n        // Return papers with success\n        return new Response(JSON.stringify({\n            success: true,\n            papers\n        }), {\n            status: 200,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (error) {\n        console.error(\"Error fetching papers:\", error);\n        return new Response(JSON.stringify({\n            success: false,\n            message: \"Internal server error\",\n            error: error.message\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dldHBhcGVycy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFDWDtBQUVoQyxlQUFlRSxJQUFJQyxPQUFPO0lBQy9CLElBQUk7UUFDRixNQUFNQyxNQUFNLElBQUlDLElBQUlGLFFBQVFDLEdBQUc7UUFDL0IsTUFBTUUsd0JBQXdCRixJQUFJRyxZQUFZLENBQUNDLEdBQUcsQ0FBQztRQUVuRCx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDRix1QkFBdUI7WUFDMUIsT0FBTyxJQUFJRyxTQUNUQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQU9DLFNBQVM7WUFBc0MsSUFDaEY7Z0JBQUVDLFFBQVE7Z0JBQUtDLFNBQVM7b0JBQUUsZ0JBQWdCO2dCQUFtQjtZQUFFO1FBRW5FO1FBRUEscUJBQXFCO1FBQ3JCLE1BQU1mLCtEQUFpQkE7UUFFdkIsbURBQW1EO1FBQ25ELE1BQU1nQixTQUFTLE1BQU1mLHlEQUFLQSxDQUFDZ0IsSUFBSSxDQUFDO1lBQUVDLHlCQUF5Qlo7UUFBc0I7UUFFakYsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQ1UsVUFBVUEsT0FBT0csTUFBTSxLQUFLLEdBQUc7WUFDbEMsT0FBTyxJQUFJVixTQUNUQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQU9DLFNBQVM7WUFBOEMsSUFDeEY7Z0JBQUVDLFFBQVE7Z0JBQUtDLFNBQVM7b0JBQUUsZ0JBQWdCO2dCQUFtQjtZQUFFO1FBRW5FO1FBRUEsNkJBQTZCO1FBQzdCLE9BQU8sSUFBSU4sU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFNBQVM7WUFBTUk7UUFBTyxJQUN2QztZQUFFRixRQUFRO1lBQUtDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1FBQUU7SUFFbkUsRUFBRSxPQUFPSyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1FBQ3hDLE9BQU8sSUFBSVgsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFNBQVM7WUFBT0MsU0FBUztZQUF5Qk8sT0FBT0EsTUFBTVAsT0FBTztRQUFDLElBQ3hGO1lBQUVDLFFBQVE7WUFBS0MsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7UUFBRTtJQUVuRTtBQUNGIiwic291cmNlcyI6WyJEOlxcTlJJXFxyZXNlYXJjaC1wYXBlclxcYXBwXFxhcGlcXGdldHBhcGVyc1xccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiQC9saWIvbW9uZ29kYlwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkAvbGliL21vZGVscy9wYXBlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gICAgY29uc3Qgc3VibWl0dGVkUmVzZWFyY2hlcklkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJzdWJtaXR0ZWRfcmVzZWFyY2hlcl9pZFwiKTtcclxuXHJcbiAgICAvLyBFbnN1cmUgdGhlIHJlc2VhcmNoZXIgSUQgaXMgcHJvdmlkZWRcclxuICAgIGlmICghc3VibWl0dGVkUmVzZWFyY2hlcklkKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJzdWJtaXR0ZWRfcmVzZWFyY2hlcl9pZCBpcyByZXF1aXJlZFwiIH0pLFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAsIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29ubmVjdCB0byBNb25nb0RCXHJcbiAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG5cclxuICAgIC8vIEZldGNoIHBhcGVycyBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgcmVzZWFyY2hlciBJRFxyXG4gICAgY29uc3QgcGFwZXJzID0gYXdhaXQgUGFwZXIuZmluZCh7IHN1Ym1pdHRlZF9yZXNlYXJjaGVyX2lkOiBzdWJtaXR0ZWRSZXNlYXJjaGVySWQgfSk7XHJcblxyXG4gICAgLy8gSGFuZGxlIGNhc2Ugd2hlbiBubyBwYXBlcnMgYXJlIGZvdW5kXHJcbiAgICBpZiAoIXBhcGVycyB8fCBwYXBlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJObyBwYXBlcnMgZm91bmQgZm9yIHRoZSBnaXZlbiByZXNlYXJjaGVyIElEXCIgfSksXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwNCwgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9IH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gcGFwZXJzIHdpdGggc3VjY2Vzc1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBzdWNjZXNzOiB0cnVlLCBwYXBlcnMgfSksIC8vIEVuc3VyZSBjb25zaXN0ZW5jeSB3aXRoIGZyb250ZW5kXHJcbiAgICAgIHsgc3RhdHVzOiAyMDAsIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSB9XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcGFwZXJzOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkludGVybmFsIHNlcnZlciBlcnJvclwiLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCwgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9IH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25uZWN0VG9EYXRhYmFzZSIsIlBhcGVyIiwiR0VUIiwicmVxdWVzdCIsInVybCIsIlVSTCIsInN1Ym1pdHRlZFJlc2VhcmNoZXJJZCIsInNlYXJjaFBhcmFtcyIsImdldCIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwic3RhdHVzIiwiaGVhZGVycyIsInBhcGVycyIsImZpbmQiLCJzdWJtaXR0ZWRfcmVzZWFyY2hlcl9pZCIsImxlbmd0aCIsImVycm9yIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/getpapers/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/models/paper.js":
/*!*****************************!*\
  !*** ./lib/models/paper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// Define the file schema\nconst fileSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    type: {\n        type: String,\n        required: true\n    },\n    data: {\n        type: Buffer,\n        required: true\n    }\n});\n// Check if the model is already compiled, then export it; otherwise, define and compile it.\nconst File = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).File || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"File\", fileSchema);\nconst paperSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    paper_id: {\n        type: String\n    },\n    title: {\n        type: String\n    },\n    publishing_year: {\n        type: String\n    },\n    paper_file: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: \"File\"\n    },\n    submitted_researcher_id: {\n        type: String\n    },\n    team_id: {\n        type: String\n    },\n    date: {\n        type: Date,\n        default: Date.now\n    },\n    name_of_author: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: true,\n        match: [\n            /\\S+@\\S+\\.\\S+/,\n            \"Please enter a valid email address\"\n        ]\n    },\n    publication_option: {\n        type: String\n    },\n    participation_type: {\n        type: String\n    },\n    mobile_no: {\n        type: String\n    },\n    co_authors: {\n        type: [\n            String\n        ]\n    },\n    paper_abstract: {\n        type: String\n    },\n    keywords: {\n        type: String\n    },\n    paper_category: {\n        type: String\n    },\n    status: {\n        type: String\n    },\n    fields_of_research: {\n        type: [\n            String\n        ]\n    },\n    reviewer: {\n        type: String,\n        default: \"roshan\"\n    }\n}, {\n    timestamps: true\n});\nconst Paper = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Paper || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Paper', paperSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paper);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL3BhcGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUdoQyx5QkFBeUI7QUFDekIsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNyQ0YsTUFBTTtRQUFFQSxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDckNDLE1BQU07UUFBRUgsTUFBTUk7UUFBUUYsVUFBVTtJQUFLO0FBQ3ZDO0FBRUEsNEZBQTRGO0FBQzVGLE1BQU1HLE9BQU9ULHdEQUFlLENBQUNTLElBQUksSUFBSVQscURBQWMsQ0FBQyxRQUFRQztBQUU1RCxNQUFNVyxjQUFjLElBQUlaLHdEQUFlLENBQ3JDO0lBQ0VhLFVBQVU7UUFDUlQsTUFBS0M7SUFDUDtJQUNBUyxPQUFNO1FBQ0pWLE1BQUtDO0lBQ1A7SUFDQVUsaUJBQWdCO1FBQ2RYLE1BQUtDO0lBQ1A7SUFDQVcsWUFBWTtRQUNWWixNQUFNSix3REFBZSxDQUFDaUIsS0FBSyxDQUFDQyxRQUFRO1FBQ3BDQyxLQUFLO0lBQ1A7SUFDQUMseUJBQXlCO1FBQ3ZCaEIsTUFBTUM7SUFDUjtJQUNBZ0IsU0FBUztRQUNQakIsTUFBTUM7SUFDUjtJQUNBaUIsTUFBTTtRQUNKbEIsTUFBTW1CO1FBQ05DLFNBQVNELEtBQUtFLEdBQUc7SUFDbkI7SUFDQUMsZ0JBQWdCO1FBQ2R0QixNQUFNQztJQUNSO0lBQ0FzQixPQUFPO1FBQ0x2QixNQUFNQztRQUNOQyxVQUFVO1FBQ1ZzQixPQUFPO1lBQUM7WUFBZ0I7U0FBcUM7SUFDL0Q7SUFDQUMsb0JBQW9CO1FBQ2xCekIsTUFBTUM7SUFDUjtJQUNBeUIsb0JBQW9CO1FBQ2xCMUIsTUFBTUM7SUFDUjtJQUNBMEIsV0FBVztRQUNUM0IsTUFBTUM7SUFDUjtJQUNBMkIsWUFBWTtRQUNWNUIsTUFBTTtZQUFDQztTQUFPO0lBQ2hCO0lBQ0E0QixnQkFBZ0I7UUFDZDdCLE1BQU1DO0lBQ1I7SUFDQTZCLFVBQVU7UUFDUjlCLE1BQU1DO0lBQ1I7SUFDQThCLGdCQUFnQjtRQUNkL0IsTUFBTUM7SUFDUjtJQUNBK0IsUUFBUTtRQUNOaEMsTUFBTUM7SUFDTjtJQUNGZ0Msb0JBQW9CO1FBQ2xCakMsTUFBTTtZQUFDQztTQUFPO0lBQ2hCO0lBQ0FpQyxVQUFTO1FBQ1BsQyxNQUFNQztRQUNObUIsU0FBUTtJQUNWO0FBQ0YsR0FDQTtJQUNFZSxZQUFZO0FBQ2Q7QUFHRixNQUFNQyxRQUFReEMsd0RBQWUsQ0FBQ3dDLEtBQUssSUFBSXhDLHFEQUFjLENBQUMsU0FBU1k7QUFDL0QsaUVBQWU0QixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJEOlxcTlJJXFxyZXNlYXJjaC1wYXBlclxcbGliXFxtb2RlbHNcXHBhcGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5cclxuLy8gRGVmaW5lIHRoZSBmaWxlIHNjaGVtYVxyXG5jb25zdCBmaWxlU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgdHlwZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgZGF0YTogeyB0eXBlOiBCdWZmZXIsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbn0pO1xyXG5cclxuLy8gQ2hlY2sgaWYgdGhlIG1vZGVsIGlzIGFscmVhZHkgY29tcGlsZWQsIHRoZW4gZXhwb3J0IGl0OyBvdGhlcndpc2UsIGRlZmluZSBhbmQgY29tcGlsZSBpdC5cclxuY29uc3QgRmlsZSA9IG1vbmdvb3NlLm1vZGVscy5GaWxlIHx8IG1vbmdvb3NlLm1vZGVsKFwiRmlsZVwiLCBmaWxlU2NoZW1hKTtcclxuXHJcbmNvbnN0IHBhcGVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBwYXBlcl9pZDoge1xyXG4gICAgICB0eXBlOlN0cmluZyxcclxuICAgIH0sXHJcbiAgICB0aXRsZTp7XHJcbiAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgfSxcclxuICAgIHB1Ymxpc2hpbmdfeWVhcjp7XHJcbiAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgfSxcclxuICAgIHBhcGVyX2ZpbGU6IHtcclxuICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxyXG4gICAgICByZWY6IFwiRmlsZVwiLFxyXG4gICAgfSxcclxuICAgIHN1Ym1pdHRlZF9yZXNlYXJjaGVyX2lkOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICB0ZWFtX2lkOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBkYXRlOiB7XHJcbiAgICAgIHR5cGU6IERhdGUsXHJcbiAgICAgIGRlZmF1bHQ6IERhdGUubm93LFxyXG4gICAgfSxcclxuICAgIG5hbWVfb2ZfYXV0aG9yOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtYXRjaDogWy9cXFMrQFxcUytcXC5cXFMrLywgXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXCJdLFxyXG4gICAgfSxcclxuICAgIHB1YmxpY2F0aW9uX29wdGlvbjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgcGFydGljaXBhdGlvbl90eXBlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBtb2JpbGVfbm86IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGNvX2F1dGhvcnM6IHtcclxuICAgICAgdHlwZTogW1N0cmluZ10sXHJcbiAgICB9LFxyXG4gICAgcGFwZXJfYWJzdHJhY3Q6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGtleXdvcmRzOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBwYXBlcl9jYXRlZ29yeToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgc3RhdHVzOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgfSxcclxuICAgIGZpZWxkc19vZl9yZXNlYXJjaDoge1xyXG4gICAgICB0eXBlOiBbU3RyaW5nXSxcclxuICAgIH0sXHJcbiAgICByZXZpZXdlcjp7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDpcInJvc2hhblwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpbWVzdGFtcHM6IHRydWUsXHJcbiAgfVxyXG4pO1xyXG5cclxuY29uc3QgUGFwZXIgPSBtb25nb29zZS5tb2RlbHMuUGFwZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1BhcGVyJywgcGFwZXJTY2hlbWEpO1xyXG5leHBvcnQgZGVmYXVsdCBQYXBlcjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiZmlsZVNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJkYXRhIiwiQnVmZmVyIiwiRmlsZSIsIm1vZGVscyIsIm1vZGVsIiwicGFwZXJTY2hlbWEiLCJwYXBlcl9pZCIsInRpdGxlIiwicHVibGlzaGluZ195ZWFyIiwicGFwZXJfZmlsZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJzdWJtaXR0ZWRfcmVzZWFyY2hlcl9pZCIsInRlYW1faWQiLCJkYXRlIiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJuYW1lX29mX2F1dGhvciIsImVtYWlsIiwibWF0Y2giLCJwdWJsaWNhdGlvbl9vcHRpb24iLCJwYXJ0aWNpcGF0aW9uX3R5cGUiLCJtb2JpbGVfbm8iLCJjb19hdXRob3JzIiwicGFwZXJfYWJzdHJhY3QiLCJrZXl3b3JkcyIsInBhcGVyX2NhdGVnb3J5Iiwic3RhdHVzIiwiZmllbGRzX29mX3Jlc2VhcmNoIiwicmV2aWV3ZXIiLCJ0aW1lc3RhbXBzIiwiUGFwZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/paper.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"(rsc)/../node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectToDatabase() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const options = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, options).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUNKO0FBQzVCQyxvREFBYTtBQUNiLElBQUlFLFNBQVNDLE9BQU9KLFFBQVE7QUFFNUIsSUFBSSxDQUFDRyxRQUFRO0lBQ1hBLFNBQVNDLE9BQU9KLFFBQVEsR0FBRztRQUFFSyxNQUFNO1FBQU1DLFNBQVM7SUFBSztBQUN6RDtBQUVPLGVBQWVDO0lBQ3BCLElBQUlKLE9BQU9FLElBQUksRUFBRTtRQUNmLE9BQU9GLE9BQU9FLElBQUk7SUFDcEI7SUFFQSxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxVQUFVO1lBQ2RDLGdCQUFnQjtRQUNsQjtRQUVBTixPQUFPRyxPQUFPLEdBQUdOLHVEQUFnQixDQUFDVyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRUwsU0FBU00sSUFBSSxDQUFDLENBQUNkO1lBQ3hFLE9BQU9BO1FBQ1Q7SUFDRjtJQUVBRyxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNsQyxPQUFPSCxPQUFPRSxJQUFJO0FBQ3BCIiwic291cmNlcyI6WyJEOlxcTlJJXFxyZXNlYXJjaC1wYXBlclxcbGliXFxtb25nb2RiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcclxuZG90ZW52LmNvbmZpZygpO1xyXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xyXG5cclxuaWYgKCFjYWNoZWQpIHtcclxuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xyXG4gIGlmIChjYWNoZWQuY29ubikge1xyXG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIG9wdGlvbnMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XHJcbiAgICAgIHJldHVybiBtb25nb29zZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbn1cclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiZG90ZW52IiwiY29uZmlnIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJjb25uZWN0VG9EYXRhYmFzZSIsIm9wdGlvbnMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ0aGVuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgetpapers%2Froute&page=%2Fapi%2Fgetpapers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgetpapers%2Froute.js&appDir=D%3A%5CNRI%5Cresearch-paper%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CNRI%5Cresearch-paper&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();