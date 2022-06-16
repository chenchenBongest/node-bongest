(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["familles-familles-module"],{

/***/ "./src/app/comerce/variables/familles/familles-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/comerce/variables/familles/familles-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: FamillesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamillesRoutingModule", function() { return FamillesRoutingModule; });
/* harmony import */ var _list_familles_list_familles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-familles/list-familles.component */ "./src/app/comerce/variables/familles/list-familles/list-familles.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_familles_details_familles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-familles/details-familles.component */ "./src/app/comerce/variables/familles/details-familles/details-familles.component.ts");
/* harmony import */ var _modifier_familles_modifier_familles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifier-familles/modifier-familles.component */ "./src/app/comerce/variables/familles/modifier-familles/modifier-familles.component.ts");
/* harmony import */ var _ajout_familles_ajout_familles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ajout-familles/ajout-familles.component */ "./src/app/comerce/variables/familles/ajout-familles/ajout-familles.component.ts");








const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_familles_list_familles_component__WEBPACK_IMPORTED_MODULE_0__["ListFamillesComponent"]
            },
            {
                path: 'ajout',
                component: _ajout_familles_ajout_familles_component__WEBPACK_IMPORTED_MODULE_5__["AjoutFamillesComponent"]
            },
            {
                path: 'modifier/:id',
                component: _modifier_familles_modifier_familles_component__WEBPACK_IMPORTED_MODULE_4__["ModifierFamillesComponent"]
            },
            {
                path: 'details/:id',
                component: _details_familles_details_familles_component__WEBPACK_IMPORTED_MODULE_3__["DetailsFamillesComponent"]
            }
        ]
    }
];
class FamillesRoutingModule {
}
FamillesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FamillesRoutingModule });
FamillesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function FamillesRoutingModule_Factory(t) { return new (t || FamillesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FamillesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FamillesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/variables/familles/familles.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/comerce/variables/familles/familles.module.ts ***!
  \***************************************************************/
/*! exports provided: FamillesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamillesModule", function() { return FamillesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _familles_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./familles-routing.module */ "./src/app/comerce/variables/familles/familles-routing.module.ts");





class FamillesModule {
}
FamillesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FamillesModule });
FamillesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FamillesModule_Factory(t) { return new (t || FamillesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _familles_routing_module__WEBPACK_IMPORTED_MODULE_3__["FamillesRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FamillesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _familles_routing_module__WEBPACK_IMPORTED_MODULE_3__["FamillesRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FamillesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _familles_routing_module__WEBPACK_IMPORTED_MODULE_3__["FamillesRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=familles-familles-module-es2015.js.map