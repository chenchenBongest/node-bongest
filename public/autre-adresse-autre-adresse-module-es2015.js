(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["autre-adresse-autre-adresse-module"],{

/***/ "./src/app/comerce/client/autre-adresse/autre-adresse-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/comerce/client/autre-adresse/autre-adresse-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AutreAdresseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutreAdresseRoutingModule", function() { return AutreAdresseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _autre_adresse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autre-adresse.component */ "./src/app/comerce/client/autre-adresse/autre-adresse.component.ts");





const routes = [
    {
        path: '',
        component: _autre_adresse_component__WEBPACK_IMPORTED_MODULE_2__["AutreAdresseComponent"]
    }
];
class AutreAdresseRoutingModule {
}
AutreAdresseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AutreAdresseRoutingModule });
AutreAdresseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AutreAdresseRoutingModule_Factory(t) { return new (t || AutreAdresseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutreAdresseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutreAdresseRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/client/autre-adresse/autre-adresse.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/comerce/client/autre-adresse/autre-adresse.module.ts ***!
  \**********************************************************************/
/*! exports provided: AutreAdresseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutreAdresseModule", function() { return AutreAdresseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _autre_adresse_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autre-adresse-routing.module */ "./src/app/comerce/client/autre-adresse/autre-adresse-routing.module.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






class AutreAdresseModule {
}
AutreAdresseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AutreAdresseModule });
AutreAdresseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AutreAdresseModule_Factory(t) { return new (t || AutreAdresseModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _autre_adresse_routing_module__WEBPACK_IMPORTED_MODULE_2__["AutreAdresseRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutreAdresseModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _autre_adresse_routing_module__WEBPACK_IMPORTED_MODULE_2__["AutreAdresseRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutreAdresseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _autre_adresse_routing_module__WEBPACK_IMPORTED_MODULE_2__["AutreAdresseRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=autre-adresse-autre-adresse-module-es2015.js.map