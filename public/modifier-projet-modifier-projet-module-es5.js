function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modifier-projet-modifier-projet-module"], {
  /***/
  "./src/app/comerce/client/projet/modifier-projet/modifier-projet-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/comerce/client/projet/modifier-projet/modifier-projet-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ModifierProjetRoutingModule */

  /***/
  function srcAppComerceClientProjetModifierProjetModifierProjetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifierProjetRoutingModule", function () {
      return ModifierProjetRoutingModule;
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


    var _modifier_projet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modifier-projet.component */
    "./src/app/comerce/client/projet/modifier-projet/modifier-projet.component.ts");

    var routes = [{
      path: '',
      component: _modifier_projet_component__WEBPACK_IMPORTED_MODULE_2__["ModifierProjetComponent"]
    }];

    var ModifierProjetRoutingModule = function ModifierProjetRoutingModule() {
      _classCallCheck(this, ModifierProjetRoutingModule);
    };

    ModifierProjetRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModifierProjetRoutingModule
    });
    ModifierProjetRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModifierProjetRoutingModule_Factory(t) {
        return new (t || ModifierProjetRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModifierProjetRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModifierProjetRoutingModule, [{
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
  "./src/app/comerce/client/projet/modifier-projet/modifier-projet.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/comerce/client/projet/modifier-projet/modifier-projet.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: ModifierProjetModule */

  /***/
  function srcAppComerceClientProjetModifierProjetModifierProjetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifierProjetModule", function () {
      return ModifierProjetModule;
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


    var _modifier_projet_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modifier-projet-routing.module */
    "./src/app/comerce/client/projet/modifier-projet/modifier-projet-routing.module.ts");

    var ModifierProjetModule = function ModifierProjetModule() {
      _classCallCheck(this, ModifierProjetModule);
    };

    ModifierProjetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModifierProjetModule
    });
    ModifierProjetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModifierProjetModule_Factory(t) {
        return new (t || ModifierProjetModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modifier_projet_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModifierProjetRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModifierProjetModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modifier_projet_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModifierProjetRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModifierProjetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modifier_projet_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModifierProjetRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modifier-projet-modifier-projet-module-es5.js.map