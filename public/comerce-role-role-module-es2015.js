(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-role-role-module"],{

/***/ "./src/app/comerce/role/role-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/comerce/role/role-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RoleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleRoutingModule", function() { return RoleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_role_list_role_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-role/list-role.component */ "./src/app/comerce/role/list-role/list-role.component.ts");
/* harmony import */ var _ajouter_role_ajouter_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajouter-role/ajouter-role.component */ "./src/app/comerce/role/ajouter-role/ajouter-role.component.ts");
/* harmony import */ var _modifier_role_modifier_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifier-role/modifier-role.component */ "./src/app/comerce/role/modifier-role/modifier-role.component.ts");
/* harmony import */ var _details_role_details_role_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-role/details-role.component */ "./src/app/comerce/role/details-role/details-role.component.ts");








const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_role_list_role_component__WEBPACK_IMPORTED_MODULE_2__["ListRoleComponent"]
            },
            {
                path: 'ajout',
                component: _ajouter_role_ajouter_role_component__WEBPACK_IMPORTED_MODULE_3__["AjouterRoleComponent"]
            },
            {
                path: 'modifier/:id',
                component: _modifier_role_modifier_role_component__WEBPACK_IMPORTED_MODULE_4__["ModifierRoleComponent"]
            },
            {
                path: 'details/:id',
                component: _details_role_details_role_component__WEBPACK_IMPORTED_MODULE_5__["DetailsRoleComponent"]
            }
        ]
    }
];
class RoleRoutingModule {
}
RoleRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: RoleRoutingModule });
RoleRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function RoleRoutingModule_Factory(t) { return new (t || RoleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](RoleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RoleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/role/role.module.ts":
/*!*********************************************!*\
  !*** ./src/app/comerce/role/role.module.ts ***!
  \*********************************************/
/*! exports provided: RoleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleModule", function() { return RoleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _role_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-routing.module */ "./src/app/comerce/role/role-routing.module.ts");




class RoleModule {
}
RoleModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: RoleModule });
RoleModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function RoleModule_Factory(t) { return new (t || RoleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _role_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoleRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](RoleModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _role_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoleRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RoleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _role_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoleRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comerce-role-role-module-es2015.js.map