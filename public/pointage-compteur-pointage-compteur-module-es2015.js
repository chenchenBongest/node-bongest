(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pointage-compteur-pointage-compteur-module"],{

/***/ "./src/app/GMAO/pointage-compteur/pointage-compteur-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/GMAO/pointage-compteur/pointage-compteur-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: PointageCompteurRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointageCompteurRoutingModule", function() { return PointageCompteurRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ajout_pointage_compteur_ajout_pointage_compteur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajout-pointage-compteur/ajout-pointage-compteur.component */ "./src/app/GMAO/pointage-compteur/ajout-pointage-compteur/ajout-pointage-compteur.component.ts");
/* harmony import */ var _list_pointage_compteur_list_pointage_compteur_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-pointage-compteur/list-pointage-compteur.component */ "./src/app/GMAO/pointage-compteur/list-pointage-compteur/list-pointage-compteur.component.ts");
/* harmony import */ var _modifier_pointage_compteur_modifier_pointage_compteur_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifier-pointage-compteur/modifier-pointage-compteur.component */ "./src/app/GMAO/pointage-compteur/modifier-pointage-compteur/modifier-pointage-compteur.component.ts");







const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_pointage_compteur_list_pointage_compteur_component__WEBPACK_IMPORTED_MODULE_3__["ListPointageCompteurComponent"]
            },
            {
                path: 'ajout',
                component: _ajout_pointage_compteur_ajout_pointage_compteur_component__WEBPACK_IMPORTED_MODULE_2__["AjoutPointageCompteurComponent"]
            },
            {
                path: 'modifier/:id',
                component: _modifier_pointage_compteur_modifier_pointage_compteur_component__WEBPACK_IMPORTED_MODULE_4__["ModifierPointageCompteurComponent"]
            },
        ]
    }
];
class PointageCompteurRoutingModule {
}
PointageCompteurRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PointageCompteurRoutingModule });
PointageCompteurRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PointageCompteurRoutingModule_Factory(t) { return new (t || PointageCompteurRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PointageCompteurRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PointageCompteurRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/GMAO/pointage-compteur/pointage-compteur.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/GMAO/pointage-compteur/pointage-compteur.module.ts ***!
  \********************************************************************/
/*! exports provided: PointageCompteurModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointageCompteurModule", function() { return PointageCompteurModule; });
/* harmony import */ var _pointage_compteur_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointage-compteur-routing.module */ "./src/app/GMAO/pointage-compteur/pointage-compteur-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class PointageCompteurModule {
}
PointageCompteurModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PointageCompteurModule });
PointageCompteurModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PointageCompteurModule_Factory(t) { return new (t || PointageCompteurModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _pointage_compteur_routing_module__WEBPACK_IMPORTED_MODULE_0__["PointageCompteurRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PointageCompteurModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _pointage_compteur_routing_module__WEBPACK_IMPORTED_MODULE_0__["PointageCompteurRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PointageCompteurModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _pointage_compteur_routing_module__WEBPACK_IMPORTED_MODULE_0__["PointageCompteurRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pointage-compteur-pointage-compteur-module-es2015.js.map