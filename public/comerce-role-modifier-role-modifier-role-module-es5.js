function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-role-modifier-role-modifier-role-module"], {
  /***/
  "./src/app/comerce/role/modifier-role/modifier-role-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/comerce/role/modifier-role/modifier-role-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: ModifierRoleRoutingModule */

  /***/
  function srcAppComerceRoleModifierRoleModifierRoleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifierRoleRoutingModule", function () {
      return ModifierRoleRoutingModule;
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


    var _modifier_role_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modifier-role.component */
    "./src/app/comerce/role/modifier-role/modifier-role.component.ts");

    var routes = [{
      path: '',
      component: _modifier_role_component__WEBPACK_IMPORTED_MODULE_2__["ModifierRoleComponent"]
    }];

    var ModifierRoleRoutingModule = function ModifierRoleRoutingModule() {
      _classCallCheck(this, ModifierRoleRoutingModule);
    };

    ModifierRoleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModifierRoleRoutingModule
    });
    ModifierRoleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModifierRoleRoutingModule_Factory(t) {
        return new (t || ModifierRoleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModifierRoleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModifierRoleRoutingModule, [{
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
  "./src/app/comerce/role/modifier-role/modifier-role.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/comerce/role/modifier-role/modifier-role.module.ts ***!
    \********************************************************************/

  /*! exports provided: ModifierRoleModule */

  /***/
  function srcAppComerceRoleModifierRoleModifierRoleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifierRoleModule", function () {
      return ModifierRoleModule;
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


    var _modifier_role_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modifier-role-routing.module */
    "./src/app/comerce/role/modifier-role/modifier-role-routing.module.ts");

    var ModifierRoleModule = function ModifierRoleModule() {
      _classCallCheck(this, ModifierRoleModule);
    };

    ModifierRoleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModifierRoleModule
    });
    ModifierRoleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModifierRoleModule_Factory(t) {
        return new (t || ModifierRoleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modifier_role_routing_module__WEBPACK_IMPORTED_MODULE_2__["ModifierRoleRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModifierRoleModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modifier_role_routing_module__WEBPACK_IMPORTED_MODULE_2__["ModifierRoleRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModifierRoleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modifier_role_routing_module__WEBPACK_IMPORTED_MODULE_2__["ModifierRoleRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-role-modifier-role-modifier-role-module-es5.js.map