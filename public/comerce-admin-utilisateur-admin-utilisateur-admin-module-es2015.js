(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-admin-utilisateur-admin-utilisateur-admin-module"],{

/***/ "./src/app/comerce/admin/utilisateur-admin/utilisateur-admin-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/comerce/admin/utilisateur-admin/utilisateur-admin-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: UtilisateurAdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilisateurAdminRoutingModule", function() { return UtilisateurAdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _utilisateur_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilisateur-admin.component */ "./src/app/comerce/admin/utilisateur-admin/utilisateur-admin.component.ts");





const routes = [
    {
        path: '',
        component: _utilisateur_admin_component__WEBPACK_IMPORTED_MODULE_2__["UtilisateurAdminComponent"]
    }
];
class UtilisateurAdminRoutingModule {
}
UtilisateurAdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UtilisateurAdminRoutingModule });
UtilisateurAdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UtilisateurAdminRoutingModule_Factory(t) { return new (t || UtilisateurAdminRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UtilisateurAdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilisateurAdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/admin/utilisateur-admin/utilisateur-admin.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/comerce/admin/utilisateur-admin/utilisateur-admin.module.ts ***!
  \*****************************************************************************/
/*! exports provided: UtilisateurAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilisateurAdminModule", function() { return UtilisateurAdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _utilisateur_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilisateur-admin-routing.module */ "./src/app/comerce/admin/utilisateur-admin/utilisateur-admin-routing.module.ts");




class UtilisateurAdminModule {
}
UtilisateurAdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UtilisateurAdminModule });
UtilisateurAdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UtilisateurAdminModule_Factory(t) { return new (t || UtilisateurAdminModule)(); }, imports: [[
            _utilisateur_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["UtilisateurAdminRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UtilisateurAdminModule, { imports: [_utilisateur_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["UtilisateurAdminRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilisateurAdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _utilisateur_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["UtilisateurAdminRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comerce-admin-utilisateur-admin-utilisateur-admin-module-es2015.js.map