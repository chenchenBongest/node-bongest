function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-admin-role-admin-role-admin-module"], {
  /***/
  "./src/app/comerce/admin/role-admin/role-admin-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/comerce/admin/role-admin/role-admin-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: RoleAdminRoutingModule */

  /***/
  function srcAppComerceAdminRoleAdminRoleAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleAdminRoutingModule", function () {
      return RoleAdminRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _role_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./role-admin.component */
    "./src/app/comerce/admin/role-admin/role-admin.component.ts");

    var routes = [{
      path: '',
      component: _role_admin_component__WEBPACK_IMPORTED_MODULE_2__["RoleAdminComponent"]
    }];

    var RoleAdminRoutingModule = function RoleAdminRoutingModule() {
      _classCallCheck(this, RoleAdminRoutingModule);
    };

    RoleAdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RoleAdminRoutingModule
    });
    RoleAdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RoleAdminRoutingModule_Factory(t) {
        return new (t || RoleAdminRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoleAdminRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleAdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/comerce/admin/role-admin/role-admin.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/comerce/admin/role-admin/role-admin.module.ts ***!
    \***************************************************************/

  /*! exports provided: RoleAdminModule */

  /***/
  function srcAppComerceAdminRoleAdminRoleAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleAdminModule", function () {
      return RoleAdminModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _role_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./role-admin-routing.module */
    "./src/app/comerce/admin/role-admin/role-admin-routing.module.ts");

    var RoleAdminModule = function RoleAdminModule() {
      _classCallCheck(this, RoleAdminModule);
    };

    RoleAdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RoleAdminModule
    });
    RoleAdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RoleAdminModule_Factory(t) {
        return new (t || RoleAdminModule)();
      },
      imports: [[_role_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoleAdminRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoleAdminModule, {
        imports: [_role_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoleAdminRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleAdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_role_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoleAdminRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-admin-role-admin-role-admin-module-es5.js.map