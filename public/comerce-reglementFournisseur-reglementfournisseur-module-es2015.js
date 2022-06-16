(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-reglementFournisseur-reglementfournisseur-module"],{

/***/ "./src/app/comerce/reglementFournisseur/reglementfournisseur-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/comerce/reglementFournisseur/reglementfournisseur-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ReglementfournisseurRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReglementfournisseurRoutingModule", function() { return ReglementfournisseurRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_reglement_fournisseur_list_reglement_fournisseur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-reglement-fournisseur/list-reglement-fournisseur.component */ "./src/app/comerce/reglementFournisseur/list-reglement-fournisseur/list-reglement-fournisseur.component.ts");
/* harmony import */ var _ajouter_reglement_fournisseur_ajouter_reglement_fournisseur_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajouter-reglement-fournisseur/ajouter-reglement-fournisseur.component */ "./src/app/comerce/reglementFournisseur/ajouter-reglement-fournisseur/ajouter-reglement-fournisseur.component.ts");
/* harmony import */ var _modifier_reglement_fournisseur_modifier_reglement_fournisseur_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifier-reglement-fournisseur/modifier-reglement-fournisseur.component */ "./src/app/comerce/reglementFournisseur/modifier-reglement-fournisseur/modifier-reglement-fournisseur.component.ts");
/* harmony import */ var _list_echeance_fournisseur_list_echeance_fournisseur_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-echeance-fournisseur/list-echeance-fournisseur.component */ "./src/app/comerce/reglementFournisseur/list-echeance-fournisseur/list-echeance-fournisseur.component.ts");








const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_reglement_fournisseur_list_reglement_fournisseur_component__WEBPACK_IMPORTED_MODULE_2__["ListReglementFournisseurComponent"]
            },
            {
                path: 'ajout',
                component: _ajouter_reglement_fournisseur_ajouter_reglement_fournisseur_component__WEBPACK_IMPORTED_MODULE_3__["AjouterReglementFournisseurComponent"]
            },
            {
                path: 'modifier/:id',
                component: _modifier_reglement_fournisseur_modifier_reglement_fournisseur_component__WEBPACK_IMPORTED_MODULE_4__["ModifierReglementFournisseurComponent"]
            },
            {
                path: 'echeanceFournisseur',
                component: _list_echeance_fournisseur_list_echeance_fournisseur_component__WEBPACK_IMPORTED_MODULE_5__["ListEcheanceFournisseurComponent"]
            }
        ]
    }
];
class ReglementfournisseurRoutingModule {
}
ReglementfournisseurRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReglementfournisseurRoutingModule });
ReglementfournisseurRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReglementfournisseurRoutingModule_Factory(t) { return new (t || ReglementfournisseurRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReglementfournisseurRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReglementfournisseurRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/reglementFournisseur/reglementfournisseur.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/comerce/reglementFournisseur/reglementfournisseur.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ReglementfournisseurModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReglementfournisseurModule", function() { return ReglementfournisseurModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _reglementfournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reglementfournisseur-routing.module */ "./src/app/comerce/reglementFournisseur/reglementfournisseur-routing.module.ts");




class ReglementfournisseurModule {
}
ReglementfournisseurModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReglementfournisseurModule });
ReglementfournisseurModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReglementfournisseurModule_Factory(t) { return new (t || ReglementfournisseurModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _reglementfournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReglementfournisseurRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReglementfournisseurModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _reglementfournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReglementfournisseurRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReglementfournisseurModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _reglementfournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReglementfournisseurRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comerce-reglementFournisseur-reglementfournisseur-module-es2015.js.map