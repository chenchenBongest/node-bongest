function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajout-type-frais-ajout-type-frais-module"], {
  /***/
  "./src/app/GMAO/type-frais/ajout-type-frais/ajout-type-frais-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/GMAO/type-frais/ajout-type-frais/ajout-type-frais-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: AjoutTypeFraisRoutingModule */

  /***/
  function srcAppGMAOTypeFraisAjoutTypeFraisAjoutTypeFraisRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjoutTypeFraisRoutingModule", function () {
      return AjoutTypeFraisRoutingModule;
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


    var _ajout_type_frais_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajout-type-frais.component */
    "./src/app/GMAO/type-frais/ajout-type-frais/ajout-type-frais.component.ts");

    var routes = [{
      path: '',
      component: _ajout_type_frais_component__WEBPACK_IMPORTED_MODULE_2__["AjoutTypeFraisComponent"]
    }];

    var AjoutTypeFraisRoutingModule = function AjoutTypeFraisRoutingModule() {
      _classCallCheck(this, AjoutTypeFraisRoutingModule);
    };

    AjoutTypeFraisRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AjoutTypeFraisRoutingModule
    });
    AjoutTypeFraisRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AjoutTypeFraisRoutingModule_Factory(t) {
        return new (t || AjoutTypeFraisRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjoutTypeFraisRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjoutTypeFraisRoutingModule, [{
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
  "./src/app/GMAO/type-frais/ajout-type-frais/ajout-type-frais.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/GMAO/type-frais/ajout-type-frais/ajout-type-frais.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: AjoutTypeFraisModule */

  /***/
  function srcAppGMAOTypeFraisAjoutTypeFraisAjoutTypeFraisModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjoutTypeFraisModule", function () {
      return AjoutTypeFraisModule;
    });
    /* harmony import */


    var _ajout_type_frais_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ajout-type-frais-routing.module */
    "./src/app/GMAO/type-frais/ajout-type-frais/ajout-type-frais-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AjoutTypeFraisModule = function AjoutTypeFraisModule() {
      _classCallCheck(this, AjoutTypeFraisModule);
    };

    AjoutTypeFraisModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AjoutTypeFraisModule
    });
    AjoutTypeFraisModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AjoutTypeFraisModule_Factory(t) {
        return new (t || AjoutTypeFraisModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ajout_type_frais_routing_module__WEBPACK_IMPORTED_MODULE_0__["AjoutTypeFraisRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AjoutTypeFraisModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ajout_type_frais_routing_module__WEBPACK_IMPORTED_MODULE_0__["AjoutTypeFraisRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AjoutTypeFraisModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ajout_type_frais_routing_module__WEBPACK_IMPORTED_MODULE_0__["AjoutTypeFraisRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=ajout-type-frais-ajout-type-frais-module-es5.js.map