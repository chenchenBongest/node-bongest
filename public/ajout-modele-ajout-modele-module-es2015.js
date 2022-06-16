(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajout-modele-ajout-modele-module"],{

/***/ "./src/app/comerce/variables/modele/ajout-modele/ajout-modele-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/comerce/variables/modele/ajout-modele/ajout-modele-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: AjoutModeleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutModeleRoutingModule", function() { return AjoutModeleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ajout_modele_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajout-modele.component */ "./src/app/comerce/variables/modele/ajout-modele/ajout-modele.component.ts");





const routes = [
    {
        path: '',
        component: _ajout_modele_component__WEBPACK_IMPORTED_MODULE_2__["AjoutModeleComponent"]
    }
];
class AjoutModeleRoutingModule {
}
AjoutModeleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AjoutModeleRoutingModule });
AjoutModeleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AjoutModeleRoutingModule_Factory(t) { return new (t || AjoutModeleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjoutModeleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjoutModeleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/variables/modele/ajout-modele/ajout-modele.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/comerce/variables/modele/ajout-modele/ajout-modele.module.ts ***!
  \******************************************************************************/
/*! exports provided: AjoutModeleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutModeleModule", function() { return AjoutModeleModule; });
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ajout_modele_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajout-modele-routing.module */ "./src/app/comerce/variables/modele/ajout-modele/ajout-modele-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class AjoutModeleModule {
}
AjoutModeleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AjoutModeleModule });
AjoutModeleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AjoutModeleModule_Factory(t) { return new (t || AjoutModeleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _ajout_modele_routing_module__WEBPACK_IMPORTED_MODULE_1__["AjoutModeleRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AjoutModeleModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _ajout_modele_routing_module__WEBPACK_IMPORTED_MODULE_1__["AjoutModeleRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AjoutModeleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _ajout_modele_routing_module__WEBPACK_IMPORTED_MODULE_1__["AjoutModeleRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=ajout-modele-ajout-modele-module-es2015.js.map