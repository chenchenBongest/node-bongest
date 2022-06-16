(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tache-preventif-tache-preventif-module"],{

/***/ "./src/app/GMAO/tache-preventif/tache-preventif-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/GMAO/tache-preventif/tache-preventif-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: TachePreventifRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TachePreventifRoutingModule", function() { return TachePreventifRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ajout_tache_preventif_ajout_tache_preventif_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajout-tache-preventif/ajout-tache-preventif.component */ "./src/app/GMAO/tache-preventif/ajout-tache-preventif/ajout-tache-preventif.component.ts");
/* harmony import */ var _details_tache_preventif_details_tache_preventif_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-tache-preventif/details-tache-preventif.component */ "./src/app/GMAO/tache-preventif/details-tache-preventif/details-tache-preventif.component.ts");
/* harmony import */ var _list_tache_preventif_list_tache_preventif_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-tache-preventif/list-tache-preventif.component */ "./src/app/GMAO/tache-preventif/list-tache-preventif/list-tache-preventif.component.ts");
/* harmony import */ var _modifier_tache_preventif_modifier_tache_preventif_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifier-tache-preventif/modifier-tache-preventif.component */ "./src/app/GMAO/tache-preventif/modifier-tache-preventif/modifier-tache-preventif.component.ts");








const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_tache_preventif_list_tache_preventif_component__WEBPACK_IMPORTED_MODULE_4__["ListTachePreventifComponent"]
            },
            {
                path: 'ajout',
                component: _ajout_tache_preventif_ajout_tache_preventif_component__WEBPACK_IMPORTED_MODULE_2__["AjoutTachePreventifComponent"]
            },
            {
                path: 'modifier/:id',
                component: _modifier_tache_preventif_modifier_tache_preventif_component__WEBPACK_IMPORTED_MODULE_5__["ModifierTachePreventifComponent"]
            },
            {
                path: 'details/:id',
                component: _details_tache_preventif_details_tache_preventif_component__WEBPACK_IMPORTED_MODULE_3__["DetailsTachePreventifComponent"]
            }
        ]
    }
];
class TachePreventifRoutingModule {
}
TachePreventifRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TachePreventifRoutingModule });
TachePreventifRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TachePreventifRoutingModule_Factory(t) { return new (t || TachePreventifRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TachePreventifRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TachePreventifRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/GMAO/tache-preventif/tache-preventif.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/GMAO/tache-preventif/tache-preventif.module.ts ***!
  \****************************************************************/
/*! exports provided: TachePreventifModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TachePreventifModule", function() { return TachePreventifModule; });
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tache_preventif_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tache-preventif-routing.module */ "./src/app/GMAO/tache-preventif/tache-preventif-routing.module.ts");





class TachePreventifModule {
}
TachePreventifModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TachePreventifModule });
TachePreventifModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TachePreventifModule_Factory(t) { return new (t || TachePreventifModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tache_preventif_routing_module__WEBPACK_IMPORTED_MODULE_3__["TachePreventifRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TachePreventifModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _tache_preventif_routing_module__WEBPACK_IMPORTED_MODULE_3__["TachePreventifRoutingModule"],
        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TachePreventifModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _tache_preventif_routing_module__WEBPACK_IMPORTED_MODULE_3__["TachePreventifRoutingModule"],
                    _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=tache-preventif-tache-preventif-module-es2015.js.map