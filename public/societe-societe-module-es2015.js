(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["societe-societe-module"],{

/***/ "./src/app/comerce/parametres/societe/societe-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/comerce/parametres/societe/societe-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: SocieteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocieteRoutingModule", function() { return SocieteRoutingModule; });
/* harmony import */ var _details_societe_details_societe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-societe/details-societe.component */ "./src/app/comerce/parametres/societe/details-societe/details-societe.component.ts");
/* harmony import */ var _modifier_societe_modifier_societe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifier-societe/modifier-societe.component */ "./src/app/comerce/parametres/societe/modifier-societe/modifier-societe.component.ts");
/* harmony import */ var _ajout_societe_ajout_societe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajout-societe/ajout-societe.component */ "./src/app/comerce/parametres/societe/ajout-societe/ajout-societe.component.ts");
/* harmony import */ var _list_societe_list_societe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-societe/list-societe.component */ "./src/app/comerce/parametres/societe/list-societe/list-societe.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_societe_list_societe_component__WEBPACK_IMPORTED_MODULE_3__["ListSocieteComponent"]
            },
            {
                path: 'ajout',
                component: _ajout_societe_ajout_societe_component__WEBPACK_IMPORTED_MODULE_2__["AjoutSocieteComponent"]
            },
            {
                path: 'modifier/:id',
                component: _modifier_societe_modifier_societe_component__WEBPACK_IMPORTED_MODULE_1__["ModifierSocieteComponent"]
            },
            {
                path: 'details/:id',
                component: _details_societe_details_societe_component__WEBPACK_IMPORTED_MODULE_0__["DetailsSocieteComponent"]
            }
        ]
    }
];
class SocieteRoutingModule {
}
SocieteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SocieteRoutingModule });
SocieteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function SocieteRoutingModule_Factory(t) { return new (t || SocieteRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SocieteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](SocieteRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/parametres/societe/societe.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/comerce/parametres/societe/societe.module.ts ***!
  \**************************************************************/
/*! exports provided: SocieteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocieteModule", function() { return SocieteModule; });
/* harmony import */ var _societe_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./societe-routing.module */ "./src/app/comerce/parametres/societe/societe-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





class SocieteModule {
}
SocieteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SocieteModule });
SocieteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SocieteModule_Factory(t) { return new (t || SocieteModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _societe_routing_module__WEBPACK_IMPORTED_MODULE_0__["SocieteRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SocieteModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _societe_routing_module__WEBPACK_IMPORTED_MODULE_0__["SocieteRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SocieteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _societe_routing_module__WEBPACK_IMPORTED_MODULE_0__["SocieteRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=societe-societe-module-es2015.js.map