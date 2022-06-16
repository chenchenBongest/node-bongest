function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-condition-reglement-condition-reglement-module"], {
  /***/
  "./src/app/comerce/condition-reglement/condition-reglement-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/comerce/condition-reglement/condition-reglement-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ConditionReglementRoutingModule */

  /***/
  function srcAppComerceConditionReglementConditionReglementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConditionReglementRoutingModule", function () {
      return ConditionReglementRoutingModule;
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


    var _condition_reglement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./condition-reglement.component */
    "./src/app/comerce/condition-reglement/condition-reglement.component.ts");

    var routes = [{
      path: '',
      component: _condition_reglement_component__WEBPACK_IMPORTED_MODULE_2__["ConditionReglementComponent"]
    }];

    var ConditionReglementRoutingModule = function ConditionReglementRoutingModule() {
      _classCallCheck(this, ConditionReglementRoutingModule);
    };

    ConditionReglementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ConditionReglementRoutingModule
    });
    ConditionReglementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ConditionReglementRoutingModule_Factory(t) {
        return new (t || ConditionReglementRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConditionReglementRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConditionReglementRoutingModule, [{
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
  "./src/app/comerce/condition-reglement/condition-reglement.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/comerce/condition-reglement/condition-reglement.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ConditionReglementModule */

  /***/
  function srcAppComerceConditionReglementConditionReglementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConditionReglementModule", function () {
      return ConditionReglementModule;
    });
    /* harmony import */


    var _condition_reglement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./condition-reglement-routing.module */
    "./src/app/comerce/condition-reglement/condition-reglement-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ConditionReglementModule = function ConditionReglementModule() {
      _classCallCheck(this, ConditionReglementModule);
    };

    ConditionReglementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ConditionReglementModule
    });
    ConditionReglementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ConditionReglementModule_Factory(t) {
        return new (t || ConditionReglementModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _condition_reglement_routing_module__WEBPACK_IMPORTED_MODULE_0__["ConditionReglementRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ConditionReglementModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _condition_reglement_routing_module__WEBPACK_IMPORTED_MODULE_0__["ConditionReglementRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConditionReglementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _condition_reglement_routing_module__WEBPACK_IMPORTED_MODULE_0__["ConditionReglementRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-condition-reglement-condition-reglement-module-es5.js.map