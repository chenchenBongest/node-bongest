(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-projetInterne-projet-interne-module"],{

/***/ "./src/app/comerce/projetInterne/projet-interne-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/comerce/projetInterne/projet-interne-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ProjetInterneRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetInterneRoutingModule", function() { return ProjetInterneRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_projet_interne_list_projet_interne_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-projet-interne/list-projet-interne.component */ "./src/app/comerce/projetInterne/list-projet-interne/list-projet-interne.component.ts");
/* harmony import */ var _ajout_projet_interne_ajout_projet_interne_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajout-projet-interne/ajout-projet-interne.component */ "./src/app/comerce/projetInterne/ajout-projet-interne/ajout-projet-interne.component.ts");
/* harmony import */ var _modifier_projet_interne_modifier_projet_interne_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifier-projet-interne/modifier-projet-interne.component */ "./src/app/comerce/projetInterne/modifier-projet-interne/modifier-projet-interne.component.ts");
/* harmony import */ var _details_projet_interne_details_projet_interne_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-projet-interne/details-projet-interne.component */ "./src/app/comerce/projetInterne/details-projet-interne/details-projet-interne.component.ts");








const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_projet_interne_list_projet_interne_component__WEBPACK_IMPORTED_MODULE_2__["ListProjetInterneComponent"]
            },
            {
                path: 'ajout',
                component: _ajout_projet_interne_ajout_projet_interne_component__WEBPACK_IMPORTED_MODULE_3__["AjoutProjetInterneComponent"]
            },
            {
                path: 'modifier/:id',
                component: _modifier_projet_interne_modifier_projet_interne_component__WEBPACK_IMPORTED_MODULE_4__["ModifierProjetInterneComponent"]
            },
            {
                path: 'details/:id',
                component: _details_projet_interne_details_projet_interne_component__WEBPACK_IMPORTED_MODULE_5__["DetailsProjetInterneComponent"]
            }
        ]
    }
];
class ProjetInterneRoutingModule {
}
ProjetInterneRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjetInterneRoutingModule });
ProjetInterneRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjetInterneRoutingModule_Factory(t) { return new (t || ProjetInterneRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjetInterneRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjetInterneRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/projetInterne/projet-interne.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/comerce/projetInterne/projet-interne.module.ts ***!
  \****************************************************************/
/*! exports provided: ProjetInterneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetInterneModule", function() { return ProjetInterneModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _projet_interne_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projet-interne-routing.module */ "./src/app/comerce/projetInterne/projet-interne-routing.module.ts");




class ProjetInterneModule {
}
ProjetInterneModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjetInterneModule });
ProjetInterneModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjetInterneModule_Factory(t) { return new (t || ProjetInterneModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _projet_interne_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjetInterneRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjetInterneModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _projet_interne_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjetInterneRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjetInterneModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _projet_interne_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjetInterneRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comerce-projetInterne-projet-interne-module-es2015.js.map