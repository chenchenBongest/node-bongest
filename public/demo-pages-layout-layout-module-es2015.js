(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-layout-layout-module"],{

/***/ "./src/app/demo/pages/layout/layout-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/pages/layout/layout-routing.module.ts ***!
  \************************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        children: [
            {
                path: 'static',
                loadChildren: () => Promise.all(/*! import() | theme-static-theme-static-module */[__webpack_require__.e("default~theme-horizontal-theme-horizontal-module~theme-static-theme-static-module"), __webpack_require__.e("theme-static-theme-static-module")]).then(__webpack_require__.bind(null, /*! ./theme-static/theme-static.module */ "./src/app/demo/pages/layout/theme-static/theme-static.module.ts")).then(module => module.ThemeStaticModule)
            },
            {
                path: 'horizontal',
                loadChildren: () => Promise.all(/*! import() | theme-horizontal-theme-horizontal-module */[__webpack_require__.e("default~theme-horizontal-theme-horizontal-module~theme-static-theme-static-module"), __webpack_require__.e("theme-horizontal-theme-horizontal-module")]).then(__webpack_require__.bind(null, /*! ./theme-horizontal/theme-horizontal.module */ "./src/app/demo/pages/layout/theme-horizontal/theme-horizontal.module.ts")).then(module => module.ThemeHorizontalModule)
            }
        ]
    }
];
class LayoutRoutingModule {
}
LayoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutRoutingModule });
LayoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutRoutingModule_Factory(t) { return new (t || LayoutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/demo/pages/layout/layout.module.ts":
/*!****************************************************!*\
  !*** ./src/app/demo/pages/layout/layout.module.ts ***!
  \****************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/demo/pages/layout/layout-routing.module.ts");




class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["LayoutRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["LayoutRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["LayoutRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=demo-pages-layout-layout-module-es2015.js.map