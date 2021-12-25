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
exports.id = "pages/api/categories";
exports.ids = ["pages/api/categories"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/userModel */ \"./models/userModel.js\");\n\n\nconst auth = async (req, res)=>{\n    const token = req.headers.authorization;\n    if (!token) return res.status(400).json({\n        err: 'Invalid Authentication.'\n    });\n    const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, \"JG]d3~J7@.cmNdSkh=b~2$=ZwqbU8r4dsF+[K$T5uVaMPDn*<q\");\n    if (!decoded) return res.status(400).json({\n        err: 'Invalid Authentication.'\n    });\n    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n        _id: decoded.id\n    });\n    return {\n        id: user._id,\n        role: user.role,\n        root: user.root\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9taWRkbGV3YXJlL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QjtBQUNTO0FBR3ZDLEtBQUssQ0FBQ0UsSUFBSSxVQUFVQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQzlCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHRixHQUFHLENBQUNHLE9BQU8sQ0FBQ0MsYUFBYTtJQUN2QyxFQUFFLEdBQUVGLEtBQUssRUFBRSxNQUFNLENBQUNELEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUNDO1FBQUFBLEdBQUcsRUFBRSxDQUF5QjtJQUFBLENBQUM7SUFFdkUsS0FBSyxDQUFDQyxPQUFPLEdBQUdYLDBEQUFVLENBQUNLLEtBQUssRUFBRVEsb0RBQStCO0lBQ2pFLEVBQUUsR0FBRUYsT0FBTyxFQUFFLE1BQU0sQ0FBQ1AsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQ0M7UUFBQUEsR0FBRyxFQUFFLENBQXlCO0lBQUEsQ0FBQztJQUV6RSxLQUFLLENBQUNNLElBQUksR0FBRyxLQUFLLENBQUNmLGlFQUFhLENBQUMsQ0FBQ2lCO1FBQUFBLEdBQUcsRUFBRVAsT0FBTyxDQUFDUSxFQUFFO0lBQUEsQ0FBQztJQUVsRCxNQUFNLENBQUMsQ0FBQ0E7UUFBQUEsRUFBRSxFQUFFSCxJQUFJLENBQUNFLEdBQUc7UUFBRUUsSUFBSSxFQUFFSixJQUFJLENBQUNJLElBQUk7UUFBRUMsSUFBSSxFQUFFTCxJQUFJLENBQUNLLElBQUk7SUFBQSxDQUFDO0FBQzNELENBQUM7QUFHRCxpRUFBZW5CLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3pvcmJvYl91el9vcmlnaW5hbC8uL21pZGRsZXdhcmUvYXV0aC5qcz8xYzljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vbW9kZWxzL3VzZXJNb2RlbCdcclxuXHJcblxyXG5jb25zdCBhdXRoID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcbiAgICBpZighdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnSW52YWxpZCBBdXRoZW50aWNhdGlvbi4nfSlcclxuXHJcbiAgICBjb25zdCBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVClcclxuICAgIGlmKCFkZWNvZGVkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0ludmFsaWQgQXV0aGVudGljYXRpb24uJ30pXHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJzLmZpbmRPbmUoe19pZDogZGVjb2RlZC5pZH0pXHJcblxyXG4gICAgcmV0dXJuIHtpZDogdXNlci5faWQsIHJvbGU6IHVzZXIucm9sZSwgcm9vdDogdXNlci5yb290fTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGgiXSwibmFtZXMiOlsiand0IiwiVXNlcnMiLCJhdXRoIiwicmVxIiwicmVzIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJkZWNvZGVkIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU19UT0tFTl9TRUNSRVQiLCJ1c2VyIiwiZmluZE9uZSIsIl9pZCIsImlkIiwicm9sZSIsInJvb3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./middleware/auth.js\n");

/***/ }),

/***/ "./models/categoriesModel.js":
/*!***********************************!*\
  !*** ./models/categoriesModel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CategoriesSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true,\n        trim: true\n    }\n}, {\n    timestamps: true\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.categories) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('categories', CategoriesSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvY2F0ZWdvcmllc01vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixLQUFLLENBQUNDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQ0Qsd0RBQWUsQ0FBQyxDQUFDO0lBQzFDRyxJQUFJLEVBQUUsQ0FBQztRQUNIQyxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7UUFDZEMsSUFBSSxFQUFFLElBQUk7SUFDZCxDQUFDO0FBQ0wsQ0FBQyxFQUFFLENBQUM7SUFDQUMsVUFBVSxFQUFFLElBQUk7QUFDcEIsQ0FBQztBQUVELEdBQUcsQ0FBQ0MsT0FBTyxHQUFHVCxtRUFBMEIsSUFBSUEscURBQWMsQ0FBQyxDQUFZLGFBQUVDLGdCQUFnQjtBQUN6RixpRUFBZVEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvem9yYm9iX3V6X29yaWdpbmFsLy4vbW9kZWxzL2NhdGVnb3JpZXNNb2RlbC5qcz9mZTAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IENhdGVnb3JpZXNTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIG5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdHJpbTogdHJ1ZVxyXG4gICAgfVxyXG59LCB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlXHJcbn0pXHJcblxyXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy5jYXRlZ29yaWVzIHx8IG1vbmdvb3NlLm1vZGVsKCdjYXRlZ29yaWVzJywgQ2F0ZWdvcmllc1NjaGVtYSlcclxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCJdLCJuYW1lcyI6WyJtb25nb29zZSIsIkNhdGVnb3JpZXNTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidHJpbSIsInRpbWVzdGFtcHMiLCJEYXRhc2V0IiwibW9kZWxzIiwiY2F0ZWdvcmllcyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/categoriesModel.js\n");

/***/ }),

/***/ "./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    root: {\n        type: Boolean,\n        default: false\n    },\n    boxes: {\n        type: String,\n        default: \"\"\n    },\n    avatar: {\n        type: String,\n        default: \"https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png\"\n    }\n}, {\n    timestamps: true\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.user) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"user\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvdXNlck1vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixLQUFLLENBQUNDLFVBQVUsR0FBRyxHQUFHLENBQUNELHdEQUFlLENBQ3BDLENBQUM7SUFDQ0csSUFBSSxFQUFFLENBQUM7UUFDTEMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7SUFDREMsS0FBSyxFQUFFLENBQUM7UUFDTkgsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RFLE1BQU0sRUFBRSxJQUFJO0lBQ2QsQ0FBQztJQUNEQyxRQUFRLEVBQUUsQ0FBQztRQUNUTCxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7SUFDaEIsQ0FBQztJQUNESSxJQUFJLEVBQUUsQ0FBQztRQUNMTixJQUFJLEVBQUVDLE1BQU07UUFDWk0sT0FBTyxFQUFFLENBQU07SUFDakIsQ0FBQztJQUNEQyxJQUFJLEVBQUUsQ0FBQztRQUNMUixJQUFJLEVBQUVTLE9BQU87UUFDYkYsT0FBTyxFQUFFLEtBQUs7SUFDaEIsQ0FBQztJQUNERyxLQUFLLEVBQUUsQ0FBQztRQUNOVixJQUFJLEVBQUVDLE1BQU07UUFDWk0sT0FBTyxFQUFFLENBQUU7SUFDYixDQUFDO0lBQ0RJLE1BQU0sRUFBRSxDQUFDO1FBQ1BYLElBQUksRUFBRUMsTUFBTTtRQUNaTSxPQUFPLEVBQ0wsQ0FBMkY7SUFDL0YsQ0FBQztBQUNILENBQUMsRUFDRCxDQUFDO0lBQ0NLLFVBQVUsRUFBRSxJQUFJO0FBQ2xCLENBQUM7QUFHSCxHQUFHLENBQUNDLE9BQU8sR0FBR2pCLDZEQUFvQixJQUFJQSxxREFBYyxDQUFDLENBQU0sT0FBRUMsVUFBVTtBQUN2RSxpRUFBZWdCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvem9yYm9iX3V6X29yaWdpbmFsLy4vbW9kZWxzL3VzZXJNb2RlbC5qcz85NjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIG5hbWU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB1bmlxdWU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICByb2xlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogXCJ1c2VyXCIsXHJcbiAgICB9LFxyXG4gICAgcm9vdDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBib3hlczoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RldmF0Y2hhbm5lbC9pbWFnZS91cGxvYWQvdjE2MDI3NTI0MDIvYXZhdGFyL2F2YXRhcl9jdWdxNDAucG5nXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbik7XHJcblxyXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwidXNlclwiLCB1c2VyU2NoZW1hKTtcclxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldDtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicm9sZSIsImRlZmF1bHQiLCJyb290IiwiQm9vbGVhbiIsImJveGVzIiwiYXZhdGFyIiwidGltZXN0YW1wcyIsIkRhdGFzZXQiLCJtb2RlbHMiLCJ1c2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/userModel.js\n");

/***/ }),

/***/ "./pages/api/categories/index.js":
/*!***************************************!*\
  !*** ./pages/api/categories/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ \"./utils/connectDB.js\");\n/* harmony import */ var _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/categoriesModel */ \"./models/categoriesModel.js\");\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ \"./middleware/auth.js\");\n\n\n\n(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n// eslint-disable-next-line import/no-anonymous-default-export\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    switch(req.method){\n        case \"POST\":\n            await createCategory(req, res);\n            break;\n        case \"GET\":\n            await getCategories(req, res);\n            break;\n    }\n});\nconst createCategory = async (req, res)=>{\n    try {\n        const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, res);\n        if (result.role !== \"admin\") return res.status(400).json({\n            err: \"Authentication is not valid.\"\n        });\n        const { name  } = req.body;\n        if (!name) return res.status(400).json({\n            err: \"Name can not be left blank.\"\n        });\n        const newCategory = new _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            name\n        });\n        await newCategory.save();\n        res.json({\n            msg: \"Success! Created a new category.\",\n            newCategory\n        });\n    } catch (err) {\n        return res.status(500).json({\n            err: err.message\n        });\n    }\n};\nconst getCategories = async (req, res)=>{\n    try {\n        const categories = await _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n        res.json({\n            categories\n        });\n    } catch (err) {\n        return res.status(500).json({\n            err: err.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBQ1E7QUFDYjtBQUUzQ0EsNERBQVM7QUFFVCxFQUE4RDtBQUM5RCxpRUFBTSxPQUFnQkcsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNsQyxNQUFNLENBQUVELEdBQUcsQ0FBQ0UsTUFBTTtRQUNoQixJQUFJLENBQUMsQ0FBTTtZQUNULEtBQUssQ0FBQ0MsY0FBYyxDQUFDSCxHQUFHLEVBQUVDLEdBQUc7WUFDN0IsS0FBSztRQUNQLElBQUksQ0FBQyxDQUFLO1lBQ1IsS0FBSyxDQUFDRyxhQUFhLENBQUNKLEdBQUcsRUFBRUMsR0FBRztZQUM1QixLQUFLOztBQUVYLENBQUM7QUFFRCxLQUFLLENBQUNFLGNBQWMsVUFBVUgsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUMxQyxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ0ksTUFBTSxHQUFHLEtBQUssQ0FBQ04sNERBQUksQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHO1FBQ2xDLEVBQUUsRUFBRUksTUFBTSxDQUFDQyxJQUFJLEtBQUssQ0FBTyxRQUN6QixNQUFNLENBQUNMLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsR0FBRyxFQUFFLENBQThCO1FBQUMsQ0FBQztRQUVyRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUMsQ0FBQyxHQUFHVixHQUFHLENBQUNXLElBQUk7UUFDekIsRUFBRSxHQUFHRCxJQUFJLEVBQ1AsTUFBTSxDQUFDVCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLEdBQUcsRUFBRSxDQUE2QjtRQUFDLENBQUM7UUFFcEUsS0FBSyxDQUFDRyxXQUFXLEdBQUcsR0FBRyxDQUFDZCwrREFBVSxDQUFDLENBQUM7WUFBQ1ksSUFBSTtRQUFDLENBQUM7UUFFM0MsS0FBSyxDQUFDRSxXQUFXLENBQUNDLElBQUk7UUFDdEJaLEdBQUcsQ0FBQ08sSUFBSSxDQUFDLENBQUM7WUFDUk0sR0FBRyxFQUFFLENBQWtDO1lBQ3ZDRixXQUFXO1FBQ2IsQ0FBQztJQUNILENBQUMsQ0FBQyxLQUFLLEVBQUVILEdBQUcsRUFBRSxDQUFDO1FBQ2IsTUFBTSxDQUFDUixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLEdBQUcsRUFBRUEsR0FBRyxDQUFDTSxPQUFPO1FBQUMsQ0FBQztJQUNsRCxDQUFDO0FBQ0gsQ0FBQztBQUVELEtBQUssQ0FBQ1gsYUFBYSxVQUFVSixHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ3pDLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDZSxVQUFVLEdBQUcsS0FBSyxDQUFDbEIsb0VBQWU7UUFFeENHLEdBQUcsQ0FBQ08sSUFBSSxDQUFDLENBQUM7WUFBQ1EsVUFBVTtRQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDLEtBQUssRUFBRVAsR0FBRyxFQUFFLENBQUM7UUFDYixNQUFNLENBQUNSLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsR0FBRyxFQUFFQSxHQUFHLENBQUNNLE9BQU87UUFBQyxDQUFDO0lBQ2xELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm96b3Jib2JfdXpfb3JpZ2luYWwvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9pbmRleC5qcz8yN2M1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0REIgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQlwiO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2NhdGVnb3JpZXNNb2RlbFwiO1xyXG5pbXBvcnQgYXV0aCBmcm9tIFwiLi4vLi4vLi4vbWlkZGxld2FyZS9hdXRoXCI7XHJcblxyXG5jb25uZWN0REIoKTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xyXG4gICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgYXdhaXQgY3JlYXRlQ2F0ZWdvcnkocmVxLCByZXMpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgYXdhaXQgZ2V0Q2F0ZWdvcmllcyhyZXEsIHJlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNhdGVnb3J5ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGgocmVxLCByZXMpO1xyXG4gICAgaWYgKHJlc3VsdC5yb2xlICE9PSBcImFkbWluXCIpXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycjogXCJBdXRoZW50aWNhdGlvbiBpcyBub3QgdmFsaWQuXCIgfSk7XHJcblxyXG4gICAgY29uc3QgeyBuYW1lIH0gPSByZXEuYm9keTtcclxuICAgIGlmICghbmFtZSlcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyOiBcIk5hbWUgY2FuIG5vdCBiZSBsZWZ0IGJsYW5rLlwiIH0pO1xyXG5cclxuICAgIGNvbnN0IG5ld0NhdGVnb3J5ID0gbmV3IENhdGVnb3JpZXMoeyBuYW1lIH0pO1xyXG5cclxuICAgIGF3YWl0IG5ld0NhdGVnb3J5LnNhdmUoKTtcclxuICAgIHJlcy5qc29uKHtcclxuICAgICAgbXNnOiBcIlN1Y2Nlc3MhIENyZWF0ZWQgYSBuZXcgY2F0ZWdvcnkuXCIsXHJcbiAgICAgIG5ld0NhdGVnb3J5LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnI6IGVyci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldENhdGVnb3JpZXMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IENhdGVnb3JpZXMuZmluZCgpO1xyXG5cclxuICAgIHJlcy5qc29uKHsgY2F0ZWdvcmllcyB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycjogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiQ2F0ZWdvcmllcyIsImF1dGgiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjcmVhdGVDYXRlZ29yeSIsImdldENhdGVnb3JpZXMiLCJyZXN1bHQiLCJyb2xlIiwic3RhdHVzIiwianNvbiIsImVyciIsIm5hbWUiLCJib2R5IiwibmV3Q2F0ZWdvcnkiLCJzYXZlIiwibXNnIiwibWVzc2FnZSIsImNhdGVnb3JpZXMiLCJmaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/categories/index.js\n");

/***/ }),

/***/ "./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        console.log('Already connected.');\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://dunyoshop:84hfjGeD4ScN1G1W@cluster0.nscxl.mongodb.net/collection?retryWrites=true&w=majority\", {\n        useCreateIndex: true,\n        useFindAndModify: false,\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    }, (err)=>{\n        if (err) throw err;\n        console.log('Connected to mongodb.');\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb25uZWN0REIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLEtBQUssQ0FBQ0MsU0FBUyxPQUFTLENBQUM7SUFDckIsRUFBRSxFQUFDRCwyRUFBa0MsRUFBQyxDQUFDO1FBQ25DSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFvQjtRQUNoQyxNQUFNO0lBQ1YsQ0FBQztJQUNETCx1REFBZ0IsQ0FBQ08sNEdBQXVCLEVBQUUsQ0FBQztRQUN2Q0csY0FBYyxFQUFFLElBQUk7UUFDcEJDLGdCQUFnQixFQUFFLEtBQUs7UUFDdkJDLGVBQWUsRUFBRSxJQUFJO1FBQ3JCQyxrQkFBa0IsRUFBRSxJQUFJO0lBQzVCLENBQUMsR0FBRUMsR0FBRyxHQUFJLENBQUM7UUFDUCxFQUFFLEVBQUNBLEdBQUcsRUFBRSxLQUFLLENBQUNBLEdBQUc7UUFDakJWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXVCO0lBQ3ZDLENBQUM7QUFDTCxDQUFDO0FBR0QsaUVBQWVKLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3pvcmJvYl91el9vcmlnaW5hbC8uL3V0aWxzL2Nvbm5lY3REQi5qcz9jNjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcclxuICAgIGlmKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBbHJlYWR5IGNvbm5lY3RlZC4nKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsIHtcclxuICAgICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcclxuICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbiAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbW9uZ29kYi4nKVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJMIiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/connectDB.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/categories/index.js"));
module.exports = __webpack_exports__;

})();