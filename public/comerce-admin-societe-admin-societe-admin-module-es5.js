function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-admin-societe-admin-societe-admin-module"], {
  /***/
  "./src/app/comerce/admin/societe-admin/societe-admin-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/comerce/admin/societe-admin/societe-admin-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: SocieteAdminRoutingModule */

  /***/
  function srcAppComerceAdminSocieteAdminSocieteAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocieteAdminRoutingModule", function () {
      return SocieteAdminRoutingModule;
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


    var _societe_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./societe-admin.component */
    "./src/app/comerce/admin/societe-admin/societe-admin.component.ts");

    var routes = [{
      path: '',
      component: _societe_admin_component__WEBPACK_IMPORTED_MODULE_2__["SocieteAdminComponent"]
    }];

    var SocieteAdminRoutingModule = function SocieteAdminRoutingModule() {
      _classCallCheck(this, SocieteAdminRoutingModule);
    };

    SocieteAdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SocieteAdminRoutingModule
    });
    SocieteAdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SocieteAdminRoutingModule_Factory(t) {
        return new (t || SocieteAdminRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SocieteAdminRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocieteAdminRoutingModule, [{
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
  "./src/app/comerce/admin/societe-admin/societe-admin.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/comerce/admin/societe-admin/societe-admin.module.ts ***!
    \*********************************************************************/

  /*! exports provided: SocieteAdminModule */

  /***/
  function srcAppComerceAdminSocieteAdminSocieteAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocieteAdminModule", function () {
      return SocieteAdminModule;
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


    var _societe_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./societe-admin-routing.module */
    "./src/app/comerce/admin/societe-admin/societe-admin-routing.module.ts");

    var SocieteAdminModule = function SocieteAdminModule() {
      _classCallCheck(this, SocieteAdminModule);
    };

    SocieteAdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SocieteAdminModule
    });
    SocieteAdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SocieteAdminModule_Factory(t) {
        return new (t || SocieteAdminModule)();
      },
      imports: [[_societe_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["SocieteAdminRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SocieteAdminModule, {
        imports: [_societe_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["SocieteAdminRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocieteAdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_societe_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["SocieteAdminRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-admin-societe-admin-societe-admin-module-es5.js.map