(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-charge-directe-charge-directe-module"],{

/***/ "./src/app/comerce/charge-directe/charge-directe-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/comerce/charge-directe/charge-directe-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ChargeDirecteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargeDirecteRoutingModule", function() { return ChargeDirecteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                loadChildren: () => __webpack_require__.e(/*! import() | list-charge-directe-list-charge-directe-module */ "list-charge-directe-list-charge-directe-module").then(__webpack_require__.bind(null, /*! ./list-charge-directe/list-charge-directe.module */ "./src/app/comerce/charge-directe/list-charge-directe/list-charge-directe.module.ts")).then(module => module.ListChargeDirecteModule)
            },
            {
                path: 'ajout',
                loadChildren: () => __webpack_require__.e(/*! import() | ajout-charge-directe-ajout-charge-directe-module */ "ajout-charge-directe-ajout-charge-directe-module").then(__webpack_require__.bind(null, /*! ./ajout-charge-directe/ajout-charge-directe.module */ "./src/app/comerce/charge-directe/ajout-charge-directe/ajout-charge-directe.module.ts")).then(module => module.AjoutChargeDirecteModule)
            },
        ]
    }
];
class ChargeDirecteRoutingModule {
}
ChargeDirecteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChargeDirecteRoutingModule });
ChargeDirecteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChargeDirecteRoutingModule_Factory(t) { return new (t || ChargeDirecteRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChargeDirecteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChargeDirecteRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/charge-directe/charge-directe.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/comerce/charge-directe/charge-directe.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChargeDirecteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargeDirecteModule", function() { return ChargeDirecteModule; });
/* harmony import */ var _charge_directe_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charge-directe-routing.module */ "./src/app/comerce/charge-directe/charge-directe-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





class ChargeDirecteModule {
}
ChargeDirecteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ChargeDirecteModule });
ChargeDirecteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ChargeDirecteModule_Factory(t) { return new (t || ChargeDirecteModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _charge_directe_routing_module__WEBPACK_IMPORTED_MODULE_0__["ChargeDirecteRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChargeDirecteModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _charge_directe_routing_module__WEBPACK_IMPORTED_MODULE_0__["ChargeDirecteRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChargeDirecteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _charge_directe_routing_module__WEBPACK_IMPORTED_MODULE_0__["ChargeDirecteRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comerce-charge-directe-charge-directe-module-es2015.js.map