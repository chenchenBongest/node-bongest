(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chauffeur-chauffeur-module"],{

/***/ "./src/app/GMAO/chauffeur/chauffeur-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/GMAO/chauffeur/chauffeur-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ChauffeurRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChauffeurRoutingModule", function() { return ChauffeurRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ajout_chauffeur_ajout_chauffeur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajout-chauffeur/ajout-chauffeur.component */ "./src/app/GMAO/chauffeur/ajout-chauffeur/ajout-chauffeur.component.ts");
/* harmony import */ var _list_chauffeur_list_chauffeur_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-chauffeur/list-chauffeur.component */ "./src/app/GMAO/chauffeur/list-chauffeur/list-chauffeur.component.ts");
/* harmony import */ var _modifier_chauffeur_modifier_chauffeur_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifier-chauffeur/modifier-chauffeur.component */ "./src/app/GMAO/chauffeur/modifier-chauffeur/modifier-chauffeur.component.ts");







const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_chauffeur_list_chauffeur_component__WEBPACK_IMPORTED_MODULE_3__["ListChauffeurComponent"]
            },
            {
                path: 'ajout',
                component: _ajout_chauffeur_ajout_chauffeur_component__WEBPACK_IMPORTED_MODULE_2__["AjoutChauffeurComponent"]
            },
            {
                path: 'modifier/:id',
                component: _modifier_chauffeur_modifier_chauffeur_component__WEBPACK_IMPORTED_MODULE_4__["ModifierChauffeurComponent"]
            },
        ]
    }
];
class ChauffeurRoutingModule {
}
ChauffeurRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChauffeurRoutingModule });
ChauffeurRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChauffeurRoutingModule_Factory(t) { return new (t || ChauffeurRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChauffeurRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChauffeurRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/GMAO/chauffeur/chauffeur.module.ts":
/*!****************************************************!*\
  !*** ./src/app/GMAO/chauffeur/chauffeur.module.ts ***!
  \****************************************************/
/*! exports provided: ChauffeurModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChauffeurModule", function() { return ChauffeurModule; });
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _chauffeur_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chauffeur-routing.module */ "./src/app/GMAO/chauffeur/chauffeur-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class ChauffeurModule {
}
ChauffeurModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ChauffeurModule });
ChauffeurModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ChauffeurModule_Factory(t) { return new (t || ChauffeurModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _chauffeur_routing_module__WEBPACK_IMPORTED_MODULE_1__["ChauffeurRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChauffeurModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _chauffeur_routing_module__WEBPACK_IMPORTED_MODULE_1__["ChauffeurRoutingModule"],
        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ChauffeurModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _chauffeur_routing_module__WEBPACK_IMPORTED_MODULE_1__["ChauffeurRoutingModule"],
                    _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=chauffeur-chauffeur-module-es2015.js.map