function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajout-charge-directe-ajout-charge-directe-module"], {
  /***/
  "./src/app/comerce/charge-directe/ajout-charge-directe/ajout-charge-directe-routing.module.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/comerce/charge-directe/ajout-charge-directe/ajout-charge-directe-routing.module.ts ***!
    \****************************************************************************************************/

  /*! exports provided: AjoutChargeDirecteRoutingModule */

  /***/
  function srcAppComerceChargeDirecteAjoutChargeDirecteAjoutChargeDirecteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjoutChargeDirecteRoutingModule", function () {
      return AjoutChargeDirecteRoutingModule;
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


    var _ajout_charge_directe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajout-charge-directe.component */
    "./src/app/comerce/charge-directe/ajout-charge-directe/ajout-charge-directe.component.ts");

    var routes = [{
      path: '',
      component: _ajout_charge_directe_component__WEBPACK_IMPORTED_MODULE_2__["AjoutChargeDirecteComponent"]
    }];

    var AjoutChargeDirecteRoutingModule = function AjoutChargeDirecteRoutingModule() {
      _classCallCheck(this, AjoutChargeDirecteRoutingModule);
    };

    AjoutChargeDirecteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AjoutChargeDirecteRoutingModule
    });
    AjoutChargeDirecteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AjoutChargeDirecteRoutingModule_Factory(t) {
        return new (t || AjoutChargeDirecteRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjoutChargeDirecteRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjoutChargeDirecteRoutingModule, [{
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
  "./src/app/comerce/charge-directe/ajout-charge-directe/ajout-charge-directe.module.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/comerce/charge-directe/ajout-charge-directe/ajout-charge-directe.module.ts ***!
    \********************************************************************************************/

  /*! exports provided: AjoutChargeDirecteModule */

  /***/
  function srcAppComerceChargeDirecteAjoutChargeDirecteAjoutChargeDirecteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjoutChargeDirecteModule", function () {
      return AjoutChargeDirecteModule;
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


    var _ajout_charge_directe_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajout-charge-directe-routing.module */
    "./src/app/comerce/charge-directe/ajout-charge-directe/ajout-charge-directe-routing.module.ts");

    var AjoutChargeDirecteModule = function AjoutChargeDirecteModule() {
      _classCallCheck(this, AjoutChargeDirecteModule);
    };

    AjoutChargeDirecteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AjoutChargeDirecteModule
    });
    AjoutChargeDirecteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AjoutChargeDirecteModule_Factory(t) {
        return new (t || AjoutChargeDirecteModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ajout_charge_directe_routing_module__WEBPACK_IMPORTED_MODULE_2__["AjoutChargeDirecteRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjoutChargeDirecteModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ajout_charge_directe_routing_module__WEBPACK_IMPORTED_MODULE_2__["AjoutChargeDirecteRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjoutChargeDirecteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ajout_charge_directe_routing_module__WEBPACK_IMPORTED_MODULE_2__["AjoutChargeDirecteRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=ajout-charge-directe-ajout-charge-directe-module-es5.js.map