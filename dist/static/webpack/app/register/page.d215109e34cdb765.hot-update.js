"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/register/page",{

/***/ "(app-pages-browser)/./app/register/page.tsx":
/*!*******************************!*\
  !*** ./app/register/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Page() {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.title = \"Register Page\";\n    }, []);\n    //handle event onSubmit\n    function handleLogin(event) {\n        setIsLoading(true);\n        event.preventDefault();\n        const nama = event.currentTarget.nama.value;\n        const email = event.currentTarget.email.value;\n        const password = event.currentTarget.password.value;\n        //post data ke server axios dengan method post, dengan header accept json, body email dan password\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"https://belajar-api.unama.ac.id/api/register\", {\n            name: nama,\n            email: email,\n            password: password\n        }, {\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Accept: \"application/json\"\n            }\n        }).then((response)=>{\n            if (response.status == 201) {\n                alert(\"Horee... Daftar berhasil. \");\n            } else {\n                alert(\"Ops..\" + response.data.message);\n            }\n        }).catch((error)=>{\n            alert(\"Ops... \" + error);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-header\",\n                children: \"REGISTER\"\n            }, void 0, false, {\n                fileName: \"D:\\\\belajar-react\\\\my-first-app\\\\app\\\\register\\\\page.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Pendaftaran\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\belajar-react\\\\my-first-app\\\\app\\\\register\\\\page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleLogin,\n                            method: \"post\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"nama\",\n                                    id: \"nama\",\n                                    placeholder: \"Nama Lengkap\",\n                                    className: \"form-control mt-2\",\n                                    autoFocus: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\belajar-react\\\\my-first-app\\\\app\\\\register\\\\page.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"email\",\n                                    id: \"email\",\n                                    placeholder: \"Email\",\n                                    className: \"form-control mt-2\",\n                                    autoFocus: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\belajar-react\\\\my-first-app\\\\app\\\\register\\\\page.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    name: \"password\",\n                                    id: \"password\",\n                                    placeholder: \"Password\",\n                                    className: \"form-control mt-2\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\belajar-react\\\\my-first-app\\\\app\\\\register\\\\page.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"submit\",\n                                    value: \"Login\",\n                                    className: \"btn btn-primary mt-2\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\belajar-react\\\\my-first-app\\\\app\\\\register\\\\page.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\belajar-react\\\\my-first-app\\\\app\\\\register\\\\page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\belajar-react\\\\my-first-app\\\\app\\\\register\\\\page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\belajar-react\\\\my-first-app\\\\app\\\\register\\\\page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\belajar-react\\\\my-first-app\\\\app\\\\register\\\\page.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"DlrQjwOD5XS1kcZJvMHoaf7KaZ8=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZWdpc3Rlci9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ21EO0FBQ3pCO0FBRVgsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMzQ0QsZ0RBQVNBLENBQUM7UUFDUk0sU0FBU0MsS0FBSyxHQUFHO0lBQ25CLEdBQUcsRUFBRTtJQUNMLHVCQUF1QjtJQUN2QixTQUFTQyxZQUFZQyxLQUF1QztRQUMxREosYUFBYTtRQUNiSSxNQUFNQyxjQUFjO1FBQ3BCLE1BQU1DLE9BQU9GLE1BQU1HLGFBQWEsQ0FBQ0QsSUFBSSxDQUFDRSxLQUFLO1FBQzNDLE1BQU1DLFFBQVFMLE1BQU1HLGFBQWEsQ0FBQ0UsS0FBSyxDQUFDRCxLQUFLO1FBQzdDLE1BQU1FLFdBQVdOLE1BQU1HLGFBQWEsQ0FBQ0csUUFBUSxDQUFDRixLQUFLO1FBQ25ELGtHQUFrRztRQUNsR1gsNkNBQUtBLENBQ0ZjLElBQUksQ0FDSCxnREFDQTtZQUNFQyxNQUFNTjtZQUNORyxPQUFPQTtZQUNQQyxVQUFVQTtRQUNaLEdBQ0E7WUFDRUcsU0FBUztnQkFDUCxnQkFBZ0I7Z0JBQ2hCQyxRQUFRO1lBQ1Y7UUFDRixHQUVEQyxJQUFJLENBQUMsQ0FBQ0M7WUFDTCxJQUFJQSxTQUFTQyxNQUFNLElBQUksS0FBSztnQkFDMUJDLE1BQU07WUFDUixPQUFPO2dCQUNMQSxNQUFNLFVBQVVGLFNBQVNHLElBQUksQ0FBQ0MsT0FBTztZQUN2QztRQUNGLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOSixNQUFNLFlBQVlJO1FBQ3BCO0lBQ0o7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFjOzs7Ozs7MEJBQzdCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNGO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRTs0QkFBS0MsVUFBVXhCOzRCQUFheUIsUUFBTzs7OENBQ2xDLDhEQUFDQztvQ0FDQ0MsTUFBSztvQ0FDTGxCLE1BQUs7b0NBQ0xtQixJQUFHO29DQUNIQyxhQUFZO29DQUNaUixXQUFVO29DQUNWUyxTQUFTOzs7Ozs7OENBRVgsOERBQUNKO29DQUNDQyxNQUFLO29DQUNMbEIsTUFBSztvQ0FDTG1CLElBQUc7b0NBQ0hDLGFBQVk7b0NBQ1pSLFdBQVU7b0NBQ1ZTLFNBQVM7Ozs7Ozs4Q0FFWCw4REFBQ0o7b0NBQ0NDLE1BQUs7b0NBQ0xsQixNQUFLO29DQUNMbUIsSUFBRztvQ0FDSEMsYUFBWTtvQ0FDWlIsV0FBVTs7Ozs7OzhDQUVaLDhEQUFDSztvQ0FDQ0MsTUFBSztvQ0FDTHRCLE9BQU07b0NBQ05nQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94QjtHQWhGd0IxQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcmVnaXN0ZXIvcGFnZS50c3g/NDdhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9IFwiUmVnaXN0ZXIgUGFnZVwiO1xyXG4gIH0sIFtdKTtcclxuICAvL2hhbmRsZSBldmVudCBvblN1Ym1pdFxyXG4gIGZ1bmN0aW9uIGhhbmRsZUxvZ2luKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5hbWEgPSBldmVudC5jdXJyZW50VGFyZ2V0Lm5hbWEudmFsdWU7XHJcbiAgICBjb25zdCBlbWFpbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZW1haWwudmFsdWU7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFzc3dvcmQudmFsdWU7XHJcbiAgICAvL3Bvc3QgZGF0YSBrZSBzZXJ2ZXIgYXhpb3MgZGVuZ2FuIG1ldGhvZCBwb3N0LCBkZW5nYW4gaGVhZGVyIGFjY2VwdCBqc29uLCBib2R5IGVtYWlsIGRhbiBwYXNzd29yZFxyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgXCJodHRwczovL2JlbGFqYXItYXBpLnVuYW1hLmFjLmlkL2FwaS9yZWdpc3RlclwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IG5hbWEsXHJcbiAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDEpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiSG9yZWUuLi4gRGFmdGFyIGJlcmhhc2lsLiBcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KFwiT3BzLi5cIiArIHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJPcHMuLi4gXCIgKyBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+UkVHSVNURVI8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8aDE+UGVuZGFmdGFyYW48L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWFcIlxyXG4gICAgICAgICAgICAgIGlkPVwibmFtYVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1hIExlbmdrYXBcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtdC0yXCJcclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG10LTJcIlxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG10LTJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT1cIkxvZ2luXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXQtMlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiUGFnZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImRvY3VtZW50IiwidGl0bGUiLCJoYW5kbGVMb2dpbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuYW1hIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwiZW1haWwiLCJwYXNzd29yZCIsInBvc3QiLCJuYW1lIiwiaGVhZGVycyIsIkFjY2VwdCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImFsZXJ0IiwiZGF0YSIsIm1lc3NhZ2UiLCJjYXRjaCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJtZXRob2QiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwiYXV0b0ZvY3VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/register/page.tsx\n"));

/***/ })

});