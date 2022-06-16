function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charge-mode-regl-charge-mode-regl-module"], {
  /***/
  "./src/app/comerce/session-caisse/charge-mode-regl/charge-mode-regl-routing.module.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/comerce/session-caisse/charge-mode-regl/charge-mode-regl-routing.module.ts ***!
    \********************************************************************************************/

  /*! exports provided: ChargeModeReglRoutingModule */

  /***/
  function srcAppComerceSessionCaisseChargeModeReglChargeModeReglRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChargeModeReglRoutingModule", function () {
      return ChargeModeReglRoutingModule;
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


    var _charge_mode_regl_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./charge-mode-regl.component */
    "./src/app/comerce/session-caisse/charge-mode-regl/charge-mode-regl.component.ts");

    var routes = [{
      path: '',
      component: _charge_mode_regl_component__WEBPACK_IMPORTED_MODULE_2__["ChargeModeReglComponent"]
    }];

    var ChargeModeReglRoutingModule = function ChargeModeReglRoutingModule() {
      _classCallCheck(this, ChargeModeReglRoutingModule);
    };

    ChargeModeReglRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChargeModeReglRoutingModule
    });
    ChargeModeReglRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChargeModeReglRoutingModule_Factory(t) {
        return new (t || ChargeModeReglRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChargeModeReglRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChargeModeReglRoutingModule, [{
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
  "./src/app/comerce/session-caisse/charge-mode-regl/charge-mode-regl.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/comerce/session-caisse/charge-mode-regl/charge-mode-regl.module.ts ***!
    \************************************************************************************/

  /*! exports provided: ChargeModeReglModule */

  /***/
  function srcAppComerceSessionCaisseChargeModeReglChargeModeReglModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChargeModeReglModule", function () {
      return ChargeModeReglModule;
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


    var _charge_mode_regl_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./charge-mode-regl-routing.module */
    "./src/app/comerce/session-caisse/charge-mode-regl/charge-mode-regl-routing.module.ts");

    var ChargeModeReglModule = function ChargeModeReglModule() {
      _classCallCheck(this, ChargeModeReglModule);
    };

    ChargeModeReglModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChargeModeReglModule
    });
    ChargeModeReglModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChargeModeReglModule_Factory(t) {
        return new (t || ChargeModeReglModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _charge_mode_regl_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChargeModeReglRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChargeModeReglModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _charge_mode_regl_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChargeModeReglRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChargeModeReglModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _charge_mode_regl_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChargeModeReglRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=charge-mode-regl-charge-mode-regl-module-es5.js.map