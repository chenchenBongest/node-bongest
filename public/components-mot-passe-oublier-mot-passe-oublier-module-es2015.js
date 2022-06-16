(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-mot-passe-oublier-mot-passe-oublier-module"],{

/***/ "./src/app/authentication/components/mot-passe-oublier/mot-passe-oublier-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/authentication/components/mot-passe-oublier/mot-passe-oublier-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: MotPasseOublierRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotPasseOublierRoutingModule", function() { return MotPasseOublierRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mot_passe_oublier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mot-passe-oublier.component */ "./src/app/authentication/components/mot-passe-oublier/mot-passe-oublier.component.ts");





const routes = [
    {
        path: "",
        component: _mot_passe_oublier_component__WEBPACK_IMPORTED_MODULE_2__["MotPasseOublierComponent"]
    }
];
class MotPasseOublierRoutingModule {
}
MotPasseOublierRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MotPasseOublierRoutingModule });
MotPasseOublierRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MotPasseOublierRoutingModule_Factory(t) { return new (t || MotPasseOublierRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MotPasseOublierRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MotPasseOublierRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authentication/components/mot-passe-oublier/mot-passe-oublier.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/authentication/components/mot-passe-oublier/mot-passe-oublier.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: MotPasseOublierModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotPasseOublierModule", function() { return MotPasseOublierModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _mot_passe_oublier_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mot-passe-oublier-routing.module */ "./src/app/authentication/components/mot-passe-oublier/mot-passe-oublier-routing.module.ts");




class MotPasseOublierModule {
}
MotPasseOublierModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MotPasseOublierModule });
MotPasseOublierModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MotPasseOublierModule_Factory(t) { return new (t || MotPasseOublierModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _mot_passe_oublier_routing_module__WEBPACK_IMPORTED_MODULE_2__["MotPasseOublierRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MotPasseOublierModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _mot_passe_oublier_routing_module__WEBPACK_IMPORTED_MODULE_2__["MotPasseOublierRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MotPasseOublierModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _mot_passe_oublier_routing_module__WEBPACK_IMPORTED_MODULE_2__["MotPasseOublierRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-mot-passe-oublier-mot-passe-oublier-module-es2015.js.map