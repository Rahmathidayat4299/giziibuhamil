"use strict";
exports.id = 239;
exports.ids = [239];
exports.modules = {

/***/ 2239:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1208);
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6441);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_database__WEBPACK_IMPORTED_MODULE_0__, _config_config_js__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_database__WEBPACK_IMPORTED_MODULE_0__, _config_config_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const useFetch = (data)=>{
    const dbref = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(_config_config_js__WEBPACK_IMPORTED_MODULE_1__/* .database */ .F, data);
    const [Data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const fetching = ()=>{
        (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(dbref, (e)=>{
            // const data = e.()
            // // setData(data)
            const arrayFetch = Object.keys(e.val()).map((key, i)=>{
                return {
                    id: key,
                    ...e.val()[key]
                };
            });
            setData(arrayFetch);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        fetching();
    }, []);
    return Data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFetch);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ database)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1208);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_database__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_database__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const firebaseConfig = {
    apiKey: "AIzaSyCRl6Cy_J20_0Hyn8cUupKPcfdC0X1LfNM",
    authDomain: "giziibuhamil-83b72.firebaseapp.com",
    projectId: "giziibuhamil-83b72",
    databaseURL: "https://giziibuhamil-83b72-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "giziibuhamil-83b72.appspot.com",
    messagingSenderId: "107500521779",
    appId: "1:107500521779:web:cdad2de32bab67e809d646"
};
// Initialize Firebase
const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length === 0 ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)()[0];
const database = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)(firebaseApp);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;