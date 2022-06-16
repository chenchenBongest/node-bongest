function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modifier-session-caisse-modifier-session-caisse-module"], {
  /***/
  "./src/app/comerce/session-caisse/modifier-session-caisse/modifier-session-caisse-routing.module.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/comerce/session-caisse/modifier-session-caisse/modifier-session-caisse-routing.module.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: ModifierSessionCaisseRoutingModule */

  /***/
  function srcAppComerceSessionCaisseModifierSessionCaisseModifierSessionCaisseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifierSessionCaisseRoutingModule", function () {
      return ModifierSessionCaisseRoutingModule;
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


    var _modifier_session_caisse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modifier-session-caisse.component */
    "./src/app/comerce/session-caisse/modifier-session-caisse/modifier-session-caisse.component.ts");

    var routes = [{
      path: '',
      component: _modifier_session_caisse_component__WEBPACK_IMPORTED_MODULE_2__["ModifierSessionCaisseComponent"]
    }];

    var ModifierSessionCaisseRoutingModule = function ModifierSessionCaisseRoutingModule() {
      _classCallCheck(this, ModifierSessionCaisseRoutingModule);
    };

    ModifierSessionCaisseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModifierSessionCaisseRoutingModule
    });
    ModifierSessionCaisseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModifierSessionCaisseRoutingModule_Factory(t) {
        return new (t || ModifierSessionCaisseRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModifierSessionCaisseRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModifierSessionCaisseRoutingModule, [{
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
  "./src/app/comerce/session-caisse/modifier-session-caisse/modifier-session-caisse.module.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/comerce/session-caisse/modifier-session-caisse/modifier-session-caisse.module.ts ***!
    \**************************************************************************************************/

  /*! exports provided: ModifierSessionCaisseModule */

  /***/
  function srcAppComerceSessionCaisseModifierSessionCaisseModifierSessionCaisseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifierSessionCaisseModule", function () {
      return ModifierSessionCaisseModule;
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


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _modifier_session_caisse_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modifier-session-caisse-routing.module */
    "./src/app/comerce/session-caisse/modifier-session-caisse/modifier-session-caisse-routing.module.ts");

    var ModifierSessionCaisseModule = function ModifierSessionCaisseModule() {
      _classCallCheck(this, ModifierSessionCaisseModule);
    };

    ModifierSessionCaisseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModifierSessionCaisseModule
    });
    ModifierSessionCaisseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModifierSessionCaisseModule_Factory(t) {
        return new (t || ModifierSessionCaisseModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modifier_session_caisse_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModifierSessionCaisseRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModifierSessionCaisseModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modifier_session_caisse_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModifierSessionCaisseRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModifierSessionCaisseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modifier_session_caisse_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModifierSessionCaisseRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modifier-session-caisse-modifier-session-caisse-module-es5.js.map