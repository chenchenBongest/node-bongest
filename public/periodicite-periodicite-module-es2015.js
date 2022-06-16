(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["periodicite-periodicite-module"],{

/***/ "./src/app/GMAO/periodicite/periodicite-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/GMAO/periodicite/periodicite-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: PeriodiciteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodiciteRoutingModule", function() { return PeriodiciteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _periodicite_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./periodicite.component */ "./src/app/GMAO/periodicite/periodicite.component.ts");





const routes = [
    {
        path: '',
        component: _periodicite_component__WEBPACK_IMPORTED_MODULE_2__["PeriodiciteComponent"]
    }
];
class PeriodiciteRoutingModule {
}
PeriodiciteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PeriodiciteRoutingModule });
PeriodiciteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PeriodiciteRoutingModule_Factory(t) { return new (t || PeriodiciteRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PeriodiciteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeriodiciteRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/GMAO/periodicite/periodicite.module.ts":
/*!********************************************************!*\
  !*** ./src/app/GMAO/periodicite/periodicite.module.ts ***!
  \********************************************************/
/*! exports provided: PeriodiciteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodiciteModule", function() { return PeriodiciteModule; });
/* harmony import */ var _periodicite_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./periodicite-routing.module */ "./src/app/GMAO/periodicite/periodicite-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class PeriodiciteModule {
}
PeriodiciteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PeriodiciteModule });
PeriodiciteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PeriodiciteModule_Factory(t) { return new (t || PeriodiciteModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _periodicite_routing_module__WEBPACK_IMPORTED_MODULE_0__["PeriodiciteRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PeriodiciteModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _periodicite_routing_module__WEBPACK_IMPORTED_MODULE_0__["PeriodiciteRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PeriodiciteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _periodicite_routing_module__WEBPACK_IMPORTED_MODULE_0__["PeriodiciteRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=periodicite-periodicite-module-es2015.js.map