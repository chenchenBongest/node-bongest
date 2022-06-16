function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modifier-modele-modifier-modele-module"], {
  /***/
  "./src/app/comerce/variables/modele/modifier-modele/modifier-modele-routing.module.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/comerce/variables/modele/modifier-modele/modifier-modele-routing.module.ts ***!
    \********************************************************************************************/

  /*! exports provided: ModifierModeleRoutingModule */

  /***/
  function srcAppComerceVariablesModeleModifierModeleModifierModeleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifierModeleRoutingModule", function () {
      return ModifierModeleRoutingModule;
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


    var _modifier_modele_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modifier-modele.component */
    "./src/app/comerce/variables/modele/modifier-modele/modifier-modele.component.ts");

    var routes = [{
      path: '',
      component: _modifier_modele_component__WEBPACK_IMPORTED_MODULE_2__["ModifierModeleComponent"]
    }];

    var ModifierModeleRoutingModule = function ModifierModeleRoutingModule() {
      _classCallCheck(this, ModifierModeleRoutingModule);
    };

    ModifierModeleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModifierModeleRoutingModule
    });
    ModifierModeleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModifierModeleRoutingModule_Factory(t) {
        return new (t || ModifierModeleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModifierModeleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModifierModeleRoutingModule, [{
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
  "./src/app/comerce/variables/modele/modifier-modele/modifier-modele.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/comerce/variables/modele/modifier-modele/modifier-modele.module.ts ***!
    \************************************************************************************/

  /*! exports provided: ModifierModeleModule */

  /***/
  function srcAppComerceVariablesModeleModifierModeleModifierModeleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifierModeleModule", function () {
      return ModifierModeleModule;
    });
    /* harmony import */


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _modifier_modele_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modifier-modele-routing.module */
    "./src/app/comerce/variables/modele/modifier-modele/modifier-modele-routing.module.ts");

    var ModifierModeleModule = function ModifierModeleModule() {
      _classCallCheck(this, ModifierModeleModule);
    };

    ModifierModeleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ModifierModeleModule
    });
    ModifierModeleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ModifierModeleModule_Factory(t) {
        return new (t || ModifierModeleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _modifier_modele_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModifierModeleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModifierModeleModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _modifier_modele_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModifierModeleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModifierModeleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _modifier_modele_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModifierModeleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modifier-modele-modifier-modele-module-es5.js.map