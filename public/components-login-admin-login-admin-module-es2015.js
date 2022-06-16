(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-login-admin-login-admin-module"],{

/***/ "./src/app/authentication/components/login-admin/login-admin-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/authentication/components/login-admin/login-admin-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: LoginAdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdminRoutingModule", function() { return LoginAdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-admin.component */ "./src/app/authentication/components/login-admin/login-admin.component.ts");





const routes = [{
        path: '',
        component: _login_admin_component__WEBPACK_IMPORTED_MODULE_2__["LoginAdminComponent"]
    }];
class LoginAdminRoutingModule {
}
LoginAdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginAdminRoutingModule });
LoginAdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginAdminRoutingModule_Factory(t) { return new (t || LoginAdminRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginAdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginAdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authentication/components/login-admin/login-admin.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/authentication/components/login-admin/login-admin.module.ts ***!
  \*****************************************************************************/
/*! exports provided: LoginAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdminModule", function() { return LoginAdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-admin-routing.module */ "./src/app/authentication/components/login-admin/login-admin-routing.module.ts");




class LoginAdminModule {
}
LoginAdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginAdminModule });
LoginAdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginAdminModule_Factory(t) { return new (t || LoginAdminModule)(); }, imports: [[
            _login_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginAdminRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginAdminModule, { imports: [_login_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginAdminRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginAdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _login_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginAdminRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-login-admin-login-admin-module-es2015.js.map