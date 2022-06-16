function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajout-frais-ajout-frais-module"], {
  /***/
  "./src/app/comerce/variables/frais/ajout-frais/ajout-frais-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/comerce/variables/frais/ajout-frais/ajout-frais-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: AjoutFraisRoutingModule */

  /***/
  function srcAppComerceVariablesFraisAjoutFraisAjoutFraisRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjoutFraisRoutingModule", function () {
      return AjoutFraisRoutingModule;
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


    var _ajout_frais_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajout-frais.component */
    "./src/app/comerce/variables/frais/ajout-frais/ajout-frais.component.ts");

    var routes = [{
      path: '',
      component: _ajout_frais_component__WEBPACK_IMPORTED_MODULE_2__["AjoutFraisComponent"]
    }];

    var AjoutFraisRoutingModule = function AjoutFraisRoutingModule() {
      _classCallCheck(this, AjoutFraisRoutingModule);
    };

    AjoutFraisRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AjoutFraisRoutingModule
    });
    AjoutFraisRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AjoutFraisRoutingModule_Factory(t) {
        return new (t || AjoutFraisRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjoutFraisRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjoutFraisRoutingModule, [{
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
  "./src/app/comerce/variables/frais/ajout-frais/ajout-frais.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/comerce/variables/frais/ajout-frais/ajout-frais.module.ts ***!
    \***************************************************************************/

  /*! exports provided: AjoutFraisModule */

  /***/
  function srcAppComerceVariablesFraisAjoutFraisAjoutFraisModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjoutFraisModule", function () {
      return AjoutFraisModule;
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


    var _ajout_frais_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajout-frais-routing.module */
    "./src/app/comerce/variables/frais/ajout-frais/ajout-frais-routing.module.ts");

    var AjoutFraisModule = function AjoutFraisModule() {
      _classCallCheck(this, AjoutFraisModule);
    };

    AjoutFraisModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AjoutFraisModule
    });
    AjoutFraisModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AjoutFraisModule_Factory(t) {
        return new (t || AjoutFraisModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ajout_frais_routing_module__WEBPACK_IMPORTED_MODULE_2__["AjoutFraisRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjoutFraisModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ajout_frais_routing_module__WEBPACK_IMPORTED_MODULE_2__["AjoutFraisRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjoutFraisModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ajout_frais_routing_module__WEBPACK_IMPORTED_MODULE_2__["AjoutFraisRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=ajout-frais-ajout-frais-module-es5.js.map