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
exports.id = "pages/api/auth/accessToken";
exports.ids = ["pages/api/auth/accessToken"];
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

/***/ "./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    root: {\n        type: Boolean,\n        default: false\n    },\n    boxes: {\n        type: String,\n        default: \"\"\n    },\n    avatar: {\n        type: String,\n        default: \"https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png\"\n    }\n}, {\n    timestamps: true\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.user) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"user\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvdXNlck1vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixLQUFLLENBQUNDLFVBQVUsR0FBRyxHQUFHLENBQUNELHdEQUFlLENBQ3BDLENBQUM7SUFDQ0csSUFBSSxFQUFFLENBQUM7UUFDTEMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7SUFDREMsS0FBSyxFQUFFLENBQUM7UUFDTkgsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RFLE1BQU0sRUFBRSxJQUFJO0lBQ2QsQ0FBQztJQUNEQyxRQUFRLEVBQUUsQ0FBQztRQUNUTCxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7SUFDaEIsQ0FBQztJQUNESSxJQUFJLEVBQUUsQ0FBQztRQUNMTixJQUFJLEVBQUVDLE1BQU07UUFDWk0sT0FBTyxFQUFFLENBQU07SUFDakIsQ0FBQztJQUNEQyxJQUFJLEVBQUUsQ0FBQztRQUNMUixJQUFJLEVBQUVTLE9BQU87UUFDYkYsT0FBTyxFQUFFLEtBQUs7SUFDaEIsQ0FBQztJQUNERyxLQUFLLEVBQUUsQ0FBQztRQUNOVixJQUFJLEVBQUVDLE1BQU07UUFDWk0sT0FBTyxFQUFFLENBQUU7SUFDYixDQUFDO0lBQ0RJLE1BQU0sRUFBRSxDQUFDO1FBQ1BYLElBQUksRUFBRUMsTUFBTTtRQUNaTSxPQUFPLEVBQ0wsQ0FBMkY7SUFDL0YsQ0FBQztBQUNILENBQUMsRUFDRCxDQUFDO0lBQ0NLLFVBQVUsRUFBRSxJQUFJO0FBQ2xCLENBQUM7QUFHSCxHQUFHLENBQUNDLE9BQU8sR0FBR2pCLDZEQUFvQixJQUFJQSxxREFBYyxDQUFDLENBQU0sT0FBRUMsVUFBVTtBQUN2RSxpRUFBZWdCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvem9yYm9iX3V6X29yaWdpbmFsLy4vbW9kZWxzL3VzZXJNb2RlbC5qcz85NjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIG5hbWU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB1bmlxdWU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICByb2xlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogXCJ1c2VyXCIsXHJcbiAgICB9LFxyXG4gICAgcm9vdDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBib3hlczoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RldmF0Y2hhbm5lbC9pbWFnZS91cGxvYWQvdjE2MDI3NTI0MDIvYXZhdGFyL2F2YXRhcl9jdWdxNDAucG5nXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbik7XHJcblxyXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwidXNlclwiLCB1c2VyU2NoZW1hKTtcclxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldDtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicm9sZSIsImRlZmF1bHQiLCJyb290IiwiQm9vbGVhbiIsImJveGVzIiwiYXZhdGFyIiwidGltZXN0YW1wcyIsIkRhdGFzZXQiLCJtb2RlbHMiLCJ1c2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/userModel.js\n");

/***/ }),

/***/ "./pages/api/auth/accessToken.js":
/*!***************************************!*\
  !*** ./pages/api/auth/accessToken.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ \"./utils/connectDB.js\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/userModel */ \"./models/userModel.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_generateToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/generateToken */ \"./utils/generateToken.js\");\n/* eslint-disable import/no-anonymous-default-export */ \n\n\n\n(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        const rf_token = req.cookies.refreshtoken;\n        if (!rf_token) return res.status(400).json({\n            err: \"Please login now!\"\n        });\n        const result = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(rf_token, \"su8W6Trd~%R8fyZGE,+_>>Kwld#j%rk<6x[ue3Gv!%pwJB!{Kn]:Q9e-LhpwV4v-C,K:hSgv^(;<?RW3'ckMC2#~S5;aNN}KfWh\");\n        if (!result) return res.status(400).json({\n            err: \"Your token is incorrect or has expired.\"\n        });\n        const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(result.id);\n        if (!user) return res.status(400).json({\n            err: \"User does not exist.\"\n        });\n        const access_token = (0,_utils_generateToken__WEBPACK_IMPORTED_MODULE_3__.createAccessToken)({\n            id: user._id\n        });\n        res.json({\n            access_token,\n            user: {\n                name: user.name,\n                email: user.email,\n                role: user.role,\n                avatar: user.avatar,\n                root: user.root,\n                boxes: user.boxes\n            }\n        });\n    } catch (err) {\n        return res.status(500).json({\n            err: err.message\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9hY2Nlc3NUb2tlbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxFQUF1RCxzREFDUDtBQUNIO0FBQ2Y7QUFDa0M7QUFFaEVBLDREQUFTO0FBRVQsaUVBQU0sT0FBZ0JJLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDbEMsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNDLFFBQVEsR0FBR0YsR0FBRyxDQUFDRyxPQUFPLENBQUNDLFlBQVk7UUFDekMsRUFBRSxHQUFHRixRQUFRLEVBQUUsTUFBTSxDQUFDRCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLEdBQUcsRUFBRSxDQUFtQjtRQUFDLENBQUM7UUFFdkUsS0FBSyxDQUFDQyxNQUFNLEdBQUdWLDBEQUFVLENBQUNJLFFBQVEsRUFBRVEscUdBQWdDO1FBQ3BFLEVBQUUsR0FBR0YsTUFBTSxFQUNULE1BQU0sQ0FBQ1AsR0FBRyxDQUNQSSxNQUFNLENBQUMsR0FBRyxFQUNWQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxHQUFHLEVBQUUsQ0FBeUM7UUFBQyxDQUFDO1FBRTVELEtBQUssQ0FBQ00sSUFBSSxHQUFHLEtBQUssQ0FBQ2hCLGtFQUFjLENBQUNXLE1BQU0sQ0FBQ08sRUFBRTtRQUMzQyxFQUFFLEdBQUdGLElBQUksRUFBRSxNQUFNLENBQUNaLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsR0FBRyxFQUFFLENBQXNCO1FBQUMsQ0FBQztRQUV0RSxLQUFLLENBQUNTLFlBQVksR0FBR2pCLHVFQUFpQixDQUFDLENBQUM7WUFBQ2dCLEVBQUUsRUFBRUYsSUFBSSxDQUFDSSxHQUFHO1FBQUMsQ0FBQztRQUN2RGhCLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDLENBQUM7WUFDUlUsWUFBWTtZQUNaSCxJQUFJLEVBQUUsQ0FBQztnQkFDTEssSUFBSSxFQUFFTCxJQUFJLENBQUNLLElBQUk7Z0JBQ2ZDLEtBQUssRUFBRU4sSUFBSSxDQUFDTSxLQUFLO2dCQUNqQkMsSUFBSSxFQUFFUCxJQUFJLENBQUNPLElBQUk7Z0JBQ2ZDLE1BQU0sRUFBRVIsSUFBSSxDQUFDUSxNQUFNO2dCQUNuQkMsSUFBSSxFQUFFVCxJQUFJLENBQUNTLElBQUk7Z0JBQ2ZDLEtBQUssRUFBRVYsSUFBSSxDQUFDVSxLQUFLO1lBQ25CLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRWhCLEdBQUcsRUFBRSxDQUFDO1FBQ2IsTUFBTSxDQUFDTixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLEdBQUcsRUFBRUEsR0FBRyxDQUFDaUIsT0FBTztRQUFDLENBQUM7SUFDbEQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3pvcmJvYl91el9vcmlnaW5hbC8uL3BhZ2VzL2FwaS9hdXRoL2FjY2Vzc1Rva2VuLmpzPzlmNGIiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydCAqL1xyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gXCIuLi8uLi8uLi91dGlscy9jb25uZWN0REJcIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvdXNlck1vZGVsXCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgeyBjcmVhdGVBY2Nlc3NUb2tlbiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9nZW5lcmF0ZVRva2VuXCI7XHJcblxyXG5jb25uZWN0REIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZl90b2tlbiA9IHJlcS5jb29raWVzLnJlZnJlc2h0b2tlbjtcclxuICAgIGlmICghcmZfdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycjogXCJQbGVhc2UgbG9naW4gbm93IVwiIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGp3dC52ZXJpZnkocmZfdG9rZW4sIHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fU0VDUkVUKTtcclxuICAgIGlmICghcmVzdWx0KVxyXG4gICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgLnN0YXR1cyg0MDApXHJcbiAgICAgICAgLmpzb24oeyBlcnI6IFwiWW91ciB0b2tlbiBpcyBpbmNvcnJlY3Qgb3IgaGFzIGV4cGlyZWQuXCIgfSk7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJzLmZpbmRCeUlkKHJlc3VsdC5pZCk7XHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycjogXCJVc2VyIGRvZXMgbm90IGV4aXN0LlwiIH0pO1xyXG5cclxuICAgIGNvbnN0IGFjY2Vzc190b2tlbiA9IGNyZWF0ZUFjY2Vzc1Rva2VuKHsgaWQ6IHVzZXIuX2lkIH0pO1xyXG4gICAgcmVzLmpzb24oe1xyXG4gICAgICBhY2Nlc3NfdG9rZW4sXHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgcm9sZTogdXNlci5yb2xlLFxyXG4gICAgICAgIGF2YXRhcjogdXNlci5hdmF0YXIsXHJcbiAgICAgICAgcm9vdDogdXNlci5yb290LFxyXG4gICAgICAgIGJveGVzOiB1c2VyLmJveGVzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnI6IGVyci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsIlVzZXJzIiwiand0IiwiY3JlYXRlQWNjZXNzVG9rZW4iLCJyZXEiLCJyZXMiLCJyZl90b2tlbiIsImNvb2tpZXMiLCJyZWZyZXNodG9rZW4iLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwicmVzdWx0IiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIlJFRlJFU0hfVE9LRU5fU0VDUkVUIiwidXNlciIsImZpbmRCeUlkIiwiaWQiLCJhY2Nlc3NfdG9rZW4iLCJfaWQiLCJuYW1lIiwiZW1haWwiLCJyb2xlIiwiYXZhdGFyIiwicm9vdCIsImJveGVzIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/accessToken.js\n");

/***/ }),

/***/ "./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        console.log('Already connected.');\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://dunyoshop:84hfjGeD4ScN1G1W@cluster0.nscxl.mongodb.net/collection?retryWrites=true&w=majority\", {\n        useCreateIndex: true,\n        useFindAndModify: false,\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    }, (err)=>{\n        if (err) throw err;\n        console.log('Connected to mongodb.');\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb25uZWN0REIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLEtBQUssQ0FBQ0MsU0FBUyxPQUFTLENBQUM7SUFDckIsRUFBRSxFQUFDRCwyRUFBa0MsRUFBQyxDQUFDO1FBQ25DSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFvQjtRQUNoQyxNQUFNO0lBQ1YsQ0FBQztJQUNETCx1REFBZ0IsQ0FBQ08sNEdBQXVCLEVBQUUsQ0FBQztRQUN2Q0csY0FBYyxFQUFFLElBQUk7UUFDcEJDLGdCQUFnQixFQUFFLEtBQUs7UUFDdkJDLGVBQWUsRUFBRSxJQUFJO1FBQ3JCQyxrQkFBa0IsRUFBRSxJQUFJO0lBQzVCLENBQUMsR0FBRUMsR0FBRyxHQUFJLENBQUM7UUFDUCxFQUFFLEVBQUNBLEdBQUcsRUFBRSxLQUFLLENBQUNBLEdBQUc7UUFDakJWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXVCO0lBQ3ZDLENBQUM7QUFDTCxDQUFDO0FBR0QsaUVBQWVKLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3pvcmJvYl91el9vcmlnaW5hbC8uL3V0aWxzL2Nvbm5lY3REQi5qcz9jNjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcclxuICAgIGlmKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBbHJlYWR5IGNvbm5lY3RlZC4nKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsIHtcclxuICAgICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcclxuICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbiAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbW9uZ29kYi4nKVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJMIiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/connectDB.js\n");

/***/ }),

/***/ "./utils/generateToken.js":
/*!********************************!*\
  !*** ./utils/generateToken.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAccessToken\": () => (/* binding */ createAccessToken),\n/* harmony export */   \"createRefreshToken\": () => (/* binding */ createRefreshToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst createAccessToken = (payload)=>{\n    console.log(\"JG]d3~J7@.cmNdSkh=b~2$=ZwqbU8r4dsF+[K$T5uVaMPDn*<q\");\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, \"JG]d3~J7@.cmNdSkh=b~2$=ZwqbU8r4dsF+[K$T5uVaMPDn*<q\", {\n        expiresIn: \"24h\"\n    });\n};\nconst createRefreshToken = (payload)=>{\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, \"su8W6Trd~%R8fyZGE,+_>>Kwld#j%rk<6x[ue3Gv!%pwJB!{Kn]:Q9e-LhpwV4v-C,K:hSgv^(;<?RW3'ckMC2#~S5;aNN}KfWh\", {\n        expiresIn: \"7d\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9nZW5lcmF0ZVRva2VuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEI7QUFFdkIsS0FBSyxDQUFDQyxpQkFBaUIsSUFBSUMsT0FBTyxHQUFLLENBQUM7SUFDN0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxvREFBK0I7SUFDM0MsTUFBTSxDQUFDTCx3REFBUSxDQUFDRSxPQUFPLEVBQUVHLG9EQUErQixFQUFFLENBQUM7UUFDekRJLFNBQVMsRUFBRSxDQUFLO0lBQ2xCLENBQUM7QUFDSCxDQUFDO0FBRU0sS0FBSyxDQUFDQyxrQkFBa0IsSUFBSVIsT0FBTyxHQUFLLENBQUM7SUFDOUMsTUFBTSxDQUFDRix3REFBUSxDQUFDRSxPQUFPLEVBQUVHLHFHQUFnQyxFQUFFLENBQUM7UUFDMURJLFNBQVMsRUFBRSxDQUFJO0lBQ2pCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm96b3Jib2JfdXpfb3JpZ2luYWwvLi91dGlscy9nZW5lcmF0ZVRva2VuLmpzP2RkNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQWNjZXNzVG9rZW4gPSAocGF5bG9hZCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQpO1xyXG4gIHJldHVybiBqd3Quc2lnbihwYXlsb2FkLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVULCB7XHJcbiAgICBleHBpcmVzSW46IFwiMjRoXCIsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUmVmcmVzaFRva2VuID0gKHBheWxvYWQpID0+IHtcclxuICByZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgcHJvY2Vzcy5lbnYuUkVGUkVTSF9UT0tFTl9TRUNSRVQsIHtcclxuICAgIGV4cGlyZXNJbjogXCI3ZFwiLFxyXG4gIH0pO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiand0IiwiY3JlYXRlQWNjZXNzVG9rZW4iLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJBQ0NFU1NfVE9LRU5fU0VDUkVUIiwic2lnbiIsImV4cGlyZXNJbiIsImNyZWF0ZVJlZnJlc2hUb2tlbiIsIlJFRlJFU0hfVE9LRU5fU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/generateToken.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/accessToken.js"));
module.exports = __webpack_exports__;

})();