function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-parametres-societe-modifier-societe-modifier-societe-module"], {
  /***/
  "./src/app/comerce/parametres/societe/modifier-societe/modifier-societe-routing.module.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/comerce/parametres/societe/modifier-societe/modifier-societe-routing.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: ModifierSocieteRoutingModule */

  /***/
  function srcAppComerceParametresSocieteModifierSocieteModifierSocieteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifierSocieteRoutingModule", function () {
      return ModifierSocieteRoutingModule;
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


    var _modifier_societe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modifier-societe.component */
    "./src/app/comerce/parametres/societe/modifier-societe/modifier-societe.component.ts");

    var routes = [{
      path: '',
      component: _modifier_societe_component__WEBPACK_IMPORTED_MODULE_2__["ModifierSocieteComponent"]
    }];

    var ModifierSocieteRoutingModule = function ModifierSocieteRoutingModule() {
      _classCallCheck(this, ModifierSocieteRoutingModule);
    };

    ModifierSocieteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModifierSocieteRoutingModule
    });
    ModifierSocieteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModifierSocieteRoutingModule_Factory(t) {
        return new (t || ModifierSocieteRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModifierSocieteRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModifierSocieteRoutingModule, [{
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
  "./src/app/comerce/parametres/societe/modifier-societe/modifier-societe.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/comerce/parametres/societe/modifier-societe/modifier-societe.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: ModifierSocieteModule */

  /***/
  function srcAppComerceParametresSocieteModifierSocieteModifierSocieteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifierSocieteModule", function () {
      return ModifierSocieteModule;
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


    var _modifier_societe_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modifier-societe-routing.module */
    "./src/app/comerce/parametres/societe/modifier-societe/modifier-societe-routing.module.ts");

    var ModifierSocieteModule = function ModifierSocieteModule() {
      _classCallCheck(this, ModifierSocieteModule);
    };

    ModifierSocieteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModifierSocieteModule
    });
    ModifierSocieteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModifierSocieteModule_Factory(t) {
        return new (t || ModifierSocieteModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modifier_societe_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModifierSocieteRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModifierSocieteModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modifier_societe_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModifierSocieteRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModifierSocieteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modifier_societe_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModifierSocieteRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-parametres-societe-modifier-societe-modifier-societe-module-es5.js.map