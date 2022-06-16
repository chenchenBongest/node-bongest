(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-bonLivraison-receptions-receptions-module"],{

/***/ "./src/app/comerce/bonLivraison/receptions/receptions-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/comerce/bonLivraison/receptions/receptions-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ReceptionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceptionsRoutingModule", function() { return ReceptionsRoutingModule; });
/* harmony import */ var _modifier_reception_modifier_reception_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifier-reception/modifier-reception.component */ "./src/app/comerce/bonLivraison/receptions/modifier-reception/modifier-reception.component.ts");
/* harmony import */ var _list_reception_list_reception_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-reception/list-reception.component */ "./src/app/comerce/bonLivraison/receptions/list-reception/list-reception.component.ts");
/* harmony import */ var _receptions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receptions.component */ "./src/app/comerce/bonLivraison/receptions/receptions.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const routes = [
    {
        path: '',
        children: [
            {
                path: 'ajout',
                component: _receptions_component__WEBPACK_IMPORTED_MODULE_2__["ReceptionsComponent"]
            },
            {
                path: 'list',
                component: _list_reception_list_reception_component__WEBPACK_IMPORTED_MODULE_1__["ListReceptionComponent"]
            },
            {
                path: 'modifier/:id',
                component: _modifier_reception_modifier_reception_component__WEBPACK_IMPORTED_MODULE_0__["ModifierReceptionComponent"]
            },
        ]
    }
];
class ReceptionsRoutingModule {
}
ReceptionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ReceptionsRoutingModule });
ReceptionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ReceptionsRoutingModule_Factory(t) { return new (t || ReceptionsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ReceptionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ReceptionsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/bonLivraison/receptions/receptions.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/comerce/bonLivraison/receptions/receptions.module.ts ***!
  \**********************************************************************/
/*! exports provided: ReceptionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceptionsModule", function() { return ReceptionsModule; });
/* harmony import */ var src_app_shared_global_shared_global_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared-global/shared-global.module */ "./src/app/shared-global/shared-global.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _receptions_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receptions-routing.module */ "./src/app/comerce/bonLivraison/receptions/receptions-routing.module.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");






class ReceptionsModule {
}
ReceptionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ReceptionsModule });
ReceptionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ReceptionsModule_Factory(t) { return new (t || ReceptionsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _receptions_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReceptionsRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_app_shared_global_shared_global_module__WEBPACK_IMPORTED_MODULE_0__["SharedGlobalModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReceptionsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _receptions_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReceptionsRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        src_app_shared_global_shared_global_module__WEBPACK_IMPORTED_MODULE_0__["SharedGlobalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReceptionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _receptions_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReceptionsRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    src_app_shared_global_shared_global_module__WEBPACK_IMPORTED_MODULE_0__["SharedGlobalModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comerce-bonLivraison-receptions-receptions-module-es2015.js.map