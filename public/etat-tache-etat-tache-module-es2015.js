(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["etat-tache-etat-tache-module"],{

/***/ "./src/app/GMAO/etat-tache/etat-tache-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/GMAO/etat-tache/etat-tache-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: EtatTacheRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtatTacheRoutingModule", function() { return EtatTacheRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _etat_tache_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./etat-tache.component */ "./src/app/GMAO/etat-tache/etat-tache.component.ts");





const routes = [
    {
        path: '',
        component: _etat_tache_component__WEBPACK_IMPORTED_MODULE_2__["EtatTacheComponent"]
    }
];
class EtatTacheRoutingModule {
}
EtatTacheRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EtatTacheRoutingModule });
EtatTacheRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EtatTacheRoutingModule_Factory(t) { return new (t || EtatTacheRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EtatTacheRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EtatTacheRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/GMAO/etat-tache/etat-tache.module.ts":
/*!******************************************************!*\
  !*** ./src/app/GMAO/etat-tache/etat-tache.module.ts ***!
  \******************************************************/
/*! exports provided: EtatTacheModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtatTacheModule", function() { return EtatTacheModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _etat_tache_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./etat-tache-routing.module */ "./src/app/GMAO/etat-tache/etat-tache-routing.module.ts");




class EtatTacheModule {
}
EtatTacheModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EtatTacheModule });
EtatTacheModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EtatTacheModule_Factory(t) { return new (t || EtatTacheModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _etat_tache_routing_module__WEBPACK_IMPORTED_MODULE_2__["EtatTacheRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EtatTacheModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _etat_tache_routing_module__WEBPACK_IMPORTED_MODULE_2__["EtatTacheRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EtatTacheModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _etat_tache_routing_module__WEBPACK_IMPORTED_MODULE_2__["EtatTacheRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=etat-tache-etat-tache-module-es2015.js.map