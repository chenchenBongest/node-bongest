(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-mouvement-stock-mouvement-stock-module"],{

/***/ "./src/app/comerce/mouvement-stock/mouvement-stock-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/comerce/mouvement-stock/mouvement-stock-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: MouvementStockRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouvementStockRoutingModule", function() { return MouvementStockRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mouvement_stock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mouvement-stock.component */ "./src/app/comerce/mouvement-stock/mouvement-stock.component.ts");





const routes = [
    {
        path: '',
        component: _mouvement_stock_component__WEBPACK_IMPORTED_MODULE_2__["MouvementStockComponent"]
    }
];
class MouvementStockRoutingModule {
}
MouvementStockRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MouvementStockRoutingModule });
MouvementStockRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MouvementStockRoutingModule_Factory(t) { return new (t || MouvementStockRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MouvementStockRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MouvementStockRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/mouvement-stock/mouvement-stock.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/comerce/mouvement-stock/mouvement-stock.module.ts ***!
  \*******************************************************************/
/*! exports provided: MouvementStockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouvementStockModule", function() { return MouvementStockModule; });
/* harmony import */ var _mouvement_stock_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouvement-stock-routing.module */ "./src/app/comerce/mouvement-stock/mouvement-stock-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





class MouvementStockModule {
}
MouvementStockModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MouvementStockModule });
MouvementStockModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MouvementStockModule_Factory(t) { return new (t || MouvementStockModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _mouvement_stock_routing_module__WEBPACK_IMPORTED_MODULE_0__["MouvementStockRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MouvementStockModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _mouvement_stock_routing_module__WEBPACK_IMPORTED_MODULE_0__["MouvementStockRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MouvementStockModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _mouvement_stock_routing_module__WEBPACK_IMPORTED_MODULE_0__["MouvementStockRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comerce-mouvement-stock-mouvement-stock-module-es2015.js.map