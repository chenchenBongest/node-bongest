(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parametres-page-parametres-page-module"],{

/***/ "./src/app/parametres-page/parametres-page-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/parametres-page/parametres-page-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ParametresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametresPageRoutingModule", function() { return ParametresPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _parametres_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parametres-page.component */ "./src/app/parametres-page/parametres-page.component.ts");





const routes = [
    {
        path: '',
        component: _parametres_page_component__WEBPACK_IMPORTED_MODULE_2__["ParametresPageComponent"]
    }
];
class ParametresPageRoutingModule {
}
ParametresPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ParametresPageRoutingModule });
ParametresPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ParametresPageRoutingModule_Factory(t) { return new (t || ParametresPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ParametresPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParametresPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/parametres-page/parametres-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/parametres-page/parametres-page.module.ts ***!
  \***********************************************************/
/*! exports provided: ParametresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametresPageModule", function() { return ParametresPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _parametres_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parametres-page-routing.module */ "./src/app/parametres-page/parametres-page-routing.module.ts");




class ParametresPageModule {
}
ParametresPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ParametresPageModule });
ParametresPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ParametresPageModule_Factory(t) { return new (t || ParametresPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _parametres_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ParametresPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ParametresPageModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _parametres_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ParametresPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParametresPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _parametres_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ParametresPageRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=parametres-page-parametres-page-module-es2015.js.map