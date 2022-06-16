(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unite-mesure-unite-mesure-module"],{

/***/ "./src/app/comerce/variables/unite-mesure/unite-mesure-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/comerce/variables/unite-mesure/unite-mesure-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: UniteMesureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniteMesureRoutingModule", function() { return UniteMesureRoutingModule; });
/* harmony import */ var _modifier_unite_mesure_modifier_unite_mesure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifier-unite-mesure/modifier-unite-mesure.component */ "./src/app/comerce/variables/unite-mesure/modifier-unite-mesure/modifier-unite-mesure.component.ts");
/* harmony import */ var _ajout_unite_mesure_ajout_unite_mesure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajout-unite-mesure/ajout-unite-mesure.component */ "./src/app/comerce/variables/unite-mesure/ajout-unite-mesure/ajout-unite-mesure.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_unite_mesure_list_unite_mesure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-unite-mesure/list-unite-mesure.component */ "./src/app/comerce/variables/unite-mesure/list-unite-mesure/list-unite-mesure.component.ts");
/* harmony import */ var _details_unite_mesure_details_unite_mesure_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-unite-mesure/details-unite-mesure.component */ "./src/app/comerce/variables/unite-mesure/details-unite-mesure/details-unite-mesure.component.ts");








const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_unite_mesure_list_unite_mesure_component__WEBPACK_IMPORTED_MODULE_4__["ListUniteMesureComponent"]
            },
            {
                path: 'ajout',
                component: _ajout_unite_mesure_ajout_unite_mesure_component__WEBPACK_IMPORTED_MODULE_1__["AjoutUniteMesureComponent"]
            },
            {
                path: 'modifier/:id',
                component: _modifier_unite_mesure_modifier_unite_mesure_component__WEBPACK_IMPORTED_MODULE_0__["ModifierUniteMesureComponent"]
            },
            {
                path: 'details/:id',
                component: _details_unite_mesure_details_unite_mesure_component__WEBPACK_IMPORTED_MODULE_5__["DetailsUniteMesureComponent"]
            }
        ]
    }
];
class UniteMesureRoutingModule {
}
UniteMesureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UniteMesureRoutingModule });
UniteMesureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function UniteMesureRoutingModule_Factory(t) { return new (t || UniteMesureRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UniteMesureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UniteMesureRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/variables/unite-mesure/unite-mesure.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/comerce/variables/unite-mesure/unite-mesure.module.ts ***!
  \***********************************************************************/
/*! exports provided: UniteMesureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniteMesureModule", function() { return UniteMesureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _unite_mesure_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unite-mesure-routing.module */ "./src/app/comerce/variables/unite-mesure/unite-mesure-routing.module.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





class UniteMesureModule {
}
UniteMesureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UniteMesureModule });
UniteMesureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UniteMesureModule_Factory(t) { return new (t || UniteMesureModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _unite_mesure_routing_module__WEBPACK_IMPORTED_MODULE_2__["UniteMesureRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UniteMesureModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _unite_mesure_routing_module__WEBPACK_IMPORTED_MODULE_2__["UniteMesureRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UniteMesureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _unite_mesure_routing_module__WEBPACK_IMPORTED_MODULE_2__["UniteMesureRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=unite-mesure-unite-mesure-module-es2015.js.map