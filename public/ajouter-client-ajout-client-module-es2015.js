(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajouter-client-ajout-client-module"],{

/***/ "./src/app/comerce/client/ajouter-client/ajout-client.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/comerce/client/ajouter-client/ajout-client.module.ts ***!
  \**********************************************************************/
/*! exports provided: AjoutClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutClientModule", function() { return AjoutClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ajouter_client_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajouter-client-routing.module */ "./src/app/comerce/client/ajouter-client/ajouter-client-routing.module.ts");





class AjoutClientModule {
}
AjoutClientModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AjoutClientModule });
AjoutClientModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AjoutClientModule_Factory(t) { return new (t || AjoutClientModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ajouter_client_routing_module__WEBPACK_IMPORTED_MODULE_3__["AjouterClientRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjoutClientModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ajouter_client_routing_module__WEBPACK_IMPORTED_MODULE_3__["AjouterClientRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjoutClientModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ajouter_client_routing_module__WEBPACK_IMPORTED_MODULE_3__["AjouterClientRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/client/ajouter-client/ajouter-client-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/comerce/client/ajouter-client/ajouter-client-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: AjouterClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterClientRoutingModule", function() { return AjouterClientRoutingModule; });
/* harmony import */ var _ajouter_client_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajouter-client.component */ "./src/app/comerce/client/ajouter-client/ajouter-client.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _ajouter_client_component__WEBPACK_IMPORTED_MODULE_0__["AjouterClientComponent"]
    }
];
class AjouterClientRoutingModule {
}
AjouterClientRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AjouterClientRoutingModule });
AjouterClientRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AjouterClientRoutingModule_Factory(t) { return new (t || AjouterClientRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AjouterClientRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AjouterClientRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=ajouter-client-ajout-client-module-es2015.js.map