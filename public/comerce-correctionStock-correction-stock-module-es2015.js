(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-correctionStock-correction-stock-module"],{

/***/ "./src/app/comerce/correctionStock/correction-stock-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/comerce/correctionStock/correction-stock-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: CorrectionStockRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrectionStockRoutingModule", function() { return CorrectionStockRoutingModule; });
/* harmony import */ var _ligne_correction_stocks_ligne_correction_stocks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ligne-correction-stocks/ligne-correction-stocks.component */ "./src/app/comerce/correctionStock/ligne-correction-stocks/ligne-correction-stocks.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ajout_correction_stock_ajout_correction_stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajout-correction-stock/ajout-correction-stock.component */ "./src/app/comerce/correctionStock/ajout-correction-stock/ajout-correction-stock.component.ts");
/* harmony import */ var _details_correction_stock_details_correction_stock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details-correction-stock/details-correction-stock.component */ "./src/app/comerce/correctionStock/details-correction-stock/details-correction-stock.component.ts");
/* harmony import */ var _list_correction_stock_list_correction_stock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-correction-stock/list-correction-stock.component */ "./src/app/comerce/correctionStock/list-correction-stock/list-correction-stock.component.ts");
/* harmony import */ var _modifier_correction_stock_modifier_correction_stock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifier-correction-stock/modifier-correction-stock.component */ "./src/app/comerce/correctionStock/modifier-correction-stock/modifier-correction-stock.component.ts");









const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_correction_stock_list_correction_stock_component__WEBPACK_IMPORTED_MODULE_5__["ListCorrectionStockComponent"]
            },
            {
                path: 'ajout',
                component: _ajout_correction_stock_ajout_correction_stock_component__WEBPACK_IMPORTED_MODULE_3__["AjoutCorrectionStockComponent"]
            },
            {
                path: 'modifier/:id',
                component: _modifier_correction_stock_modifier_correction_stock_component__WEBPACK_IMPORTED_MODULE_6__["ModifierCorrectionStockComponent"]
            },
            {
                path: 'ligneInventaire',
                component: _ligne_correction_stocks_ligne_correction_stocks_component__WEBPACK_IMPORTED_MODULE_0__["LigneCorrectionStocksComponent"]
            },
            {
                path: 'details/:id',
                component: _details_correction_stock_details_correction_stock_component__WEBPACK_IMPORTED_MODULE_4__["DetailsCorrectionStockComponent"]
            }
        ]
    }
];
class CorrectionStockRoutingModule {
}
CorrectionStockRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CorrectionStockRoutingModule });
CorrectionStockRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CorrectionStockRoutingModule_Factory(t) { return new (t || CorrectionStockRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CorrectionStockRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CorrectionStockRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/correctionStock/correction-stock.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/comerce/correctionStock/correction-stock.module.ts ***!
  \********************************************************************/
/*! exports provided: CorrectionStockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrectionStockModule", function() { return CorrectionStockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _correction_stock_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./correction-stock-routing.module */ "./src/app/comerce/correctionStock/correction-stock-routing.module.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





class CorrectionStockModule {
}
CorrectionStockModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CorrectionStockModule });
CorrectionStockModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CorrectionStockModule_Factory(t) { return new (t || CorrectionStockModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _correction_stock_routing_module__WEBPACK_IMPORTED_MODULE_2__["CorrectionStockRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CorrectionStockModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _correction_stock_routing_module__WEBPACK_IMPORTED_MODULE_2__["CorrectionStockRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CorrectionStockModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _correction_stock_routing_module__WEBPACK_IMPORTED_MODULE_2__["CorrectionStockRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comerce-correctionStock-correction-stock-module-es2015.js.map