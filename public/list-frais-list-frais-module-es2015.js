(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-frais-list-frais-module"],{

/***/ "./src/app/comerce/variables/frais/list-frais/list-frais-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/comerce/variables/frais/list-frais/list-frais-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ListFraisRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFraisRoutingModule", function() { return ListFraisRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_frais_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-frais.component */ "./src/app/comerce/variables/frais/list-frais/list-frais.component.ts");





const routes = [
    {
        path: '',
        component: _list_frais_component__WEBPACK_IMPORTED_MODULE_2__["ListFraisComponent"]
    }
];
class ListFraisRoutingModule {
}
ListFraisRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ListFraisRoutingModule });
ListFraisRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ListFraisRoutingModule_Factory(t) { return new (t || ListFraisRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListFraisRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListFraisRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/variables/frais/list-frais/list-frais.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/comerce/variables/frais/list-frais/list-frais.module.ts ***!
  \*************************************************************************/
/*! exports provided: ListFraisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFraisModule", function() { return ListFraisModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _list_frais_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-frais-routing.module */ "./src/app/comerce/variables/frais/list-frais/list-frais-routing.module.ts");




class ListFraisModule {
}
ListFraisModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ListFraisModule });
ListFraisModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ListFraisModule_Factory(t) { return new (t || ListFraisModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _list_frais_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListFraisRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListFraisModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _list_frais_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListFraisRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListFraisModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _list_frais_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListFraisRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=list-frais-list-frais-module-es2015.js.map