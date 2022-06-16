(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajout-session-caisse-ajout-session-caisse-module"],{

/***/ "./src/app/comerce/session-caisse/ajout-session-caisse/ajout-session-caisse-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/comerce/session-caisse/ajout-session-caisse/ajout-session-caisse-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: AjoutSessionCaisseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutSessionCaisseRoutingModule", function() { return AjoutSessionCaisseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ajout_session_caisse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajout-session-caisse.component */ "./src/app/comerce/session-caisse/ajout-session-caisse/ajout-session-caisse.component.ts");





const routes = [
    {
        path: '',
        component: _ajout_session_caisse_component__WEBPACK_IMPORTED_MODULE_2__["AjoutSessionCaisseComponent"]
    }
];
class AjoutSessionCaisseRoutingModule {
}
AjoutSessionCaisseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AjoutSessionCaisseRoutingModule });
AjoutSessionCaisseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AjoutSessionCaisseRoutingModule_Factory(t) { return new (t || AjoutSessionCaisseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjoutSessionCaisseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjoutSessionCaisseRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/session-caisse/ajout-session-caisse/ajout-session-caisse.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/comerce/session-caisse/ajout-session-caisse/ajout-session-caisse.module.ts ***!
  \********************************************************************************************/
/*! exports provided: AjoutSessionCaisseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutSessionCaisseModule", function() { return AjoutSessionCaisseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ajout_session_caisse_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajout-session-caisse-routing.module */ "./src/app/comerce/session-caisse/ajout-session-caisse/ajout-session-caisse-routing.module.ts");
/* harmony import */ var src_app_shared_global_shared_global_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared-global/shared-global.module */ "./src/app/shared-global/shared-global.module.ts");






class AjoutSessionCaisseModule {
}
AjoutSessionCaisseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AjoutSessionCaisseModule });
AjoutSessionCaisseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AjoutSessionCaisseModule_Factory(t) { return new (t || AjoutSessionCaisseModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ajout_session_caisse_routing_module__WEBPACK_IMPORTED_MODULE_3__["AjoutSessionCaisseRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            src_app_shared_global_shared_global_module__WEBPACK_IMPORTED_MODULE_4__["SharedGlobalModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjoutSessionCaisseModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ajout_session_caisse_routing_module__WEBPACK_IMPORTED_MODULE_3__["AjoutSessionCaisseRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        src_app_shared_global_shared_global_module__WEBPACK_IMPORTED_MODULE_4__["SharedGlobalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjoutSessionCaisseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ajout_session_caisse_routing_module__WEBPACK_IMPORTED_MODULE_3__["AjoutSessionCaisseRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    src_app_shared_global_shared_global_module__WEBPACK_IMPORTED_MODULE_4__["SharedGlobalModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=ajout-session-caisse-ajout-session-caisse-module-es2015.js.map