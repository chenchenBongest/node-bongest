function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-role-ajouter-role-ajouter-role-module"], {
  /***/
  "./src/app/comerce/role/ajouter-role/ajouter-role-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/comerce/role/ajouter-role/ajouter-role-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: AjouterRoleRoutingModule */

  /***/
  function srcAppComerceRoleAjouterRoleAjouterRoleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjouterRoleRoutingModule", function () {
      return AjouterRoleRoutingModule;
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


    var _ajouter_role_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajouter-role.component */
    "./src/app/comerce/role/ajouter-role/ajouter-role.component.ts");

    var routes = [{
      path: '',
      component: _ajouter_role_component__WEBPACK_IMPORTED_MODULE_2__["AjouterRoleComponent"]
    }];

    var AjouterRoleRoutingModule = function AjouterRoleRoutingModule() {
      _classCallCheck(this, AjouterRoleRoutingModule);
    };

    AjouterRoleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AjouterRoleRoutingModule
    });
    AjouterRoleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AjouterRoleRoutingModule_Factory(t) {
        return new (t || AjouterRoleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjouterRoleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjouterRoleRoutingModule, [{
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
  "./src/app/comerce/role/ajouter-role/ajouter-role.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/comerce/role/ajouter-role/ajouter-role.module.ts ***!
    \******************************************************************/

  /*! exports provided: AjouterRoleModule */

  /***/
  function srcAppComerceRoleAjouterRoleAjouterRoleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjouterRoleModule", function () {
      return AjouterRoleModule;
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


    var _ajouter_role_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajouter-role-routing.module */
    "./src/app/comerce/role/ajouter-role/ajouter-role-routing.module.ts");

    var AjouterRoleModule = function AjouterRoleModule() {
      _classCallCheck(this, AjouterRoleModule);
    };

    AjouterRoleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AjouterRoleModule
    });
    AjouterRoleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AjouterRoleModule_Factory(t) {
        return new (t || AjouterRoleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ajouter_role_routing_module__WEBPACK_IMPORTED_MODULE_2__["AjouterRoleRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjouterRoleModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ajouter_role_routing_module__WEBPACK_IMPORTED_MODULE_2__["AjouterRoleRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjouterRoleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ajouter_role_routing_module__WEBPACK_IMPORTED_MODULE_2__["AjouterRoleRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-role-ajouter-role-ajouter-role-module-es5.js.map