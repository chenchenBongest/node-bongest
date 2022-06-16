function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-modele-details-modele-module"], {
  /***/
  "./src/app/comerce/variables/modele/details-modele/details-modele-routing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/comerce/variables/modele/details-modele/details-modele-routing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: DetailsModeleRoutingModule */

  /***/
  function srcAppComerceVariablesModeleDetailsModeleDetailsModeleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsModeleRoutingModule", function () {
      return DetailsModeleRoutingModule;
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


    var _details_modele_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./details-modele.component */
    "./src/app/comerce/variables/modele/details-modele/details-modele.component.ts");

    var routes = [{
      path: '',
      component: _details_modele_component__WEBPACK_IMPORTED_MODULE_2__["DetailsModeleComponent"]
    }];

    var DetailsModeleRoutingModule = function DetailsModeleRoutingModule() {
      _classCallCheck(this, DetailsModeleRoutingModule);
    };

    DetailsModeleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DetailsModeleRoutingModule
    });
    DetailsModeleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DetailsModeleRoutingModule_Factory(t) {
        return new (t || DetailsModeleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetailsModeleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsModeleRoutingModule, [{
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
  "./src/app/comerce/variables/modele/details-modele/details-modele.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/comerce/variables/modele/details-modele/details-modele.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: DetailsModeleModule */

  /***/
  function srcAppComerceVariablesModeleDetailsModeleDetailsModeleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsModeleModule", function () {
      return DetailsModeleModule;
    });
    /* harmony import */


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _details_modele_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./details-modele-routing.module */
    "./src/app/comerce/variables/modele/details-modele/details-modele-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var DetailsModeleModule = function DetailsModeleModule() {
      _classCallCheck(this, DetailsModeleModule);
    };

    DetailsModeleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: DetailsModeleModule
    });
    DetailsModeleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function DetailsModeleModule_Factory(t) {
        return new (t || DetailsModeleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _details_modele_routing_module__WEBPACK_IMPORTED_MODULE_1__["DetailsModeleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DetailsModeleModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _details_modele_routing_module__WEBPACK_IMPORTED_MODULE_1__["DetailsModeleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DetailsModeleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _details_modele_routing_module__WEBPACK_IMPORTED_MODULE_1__["DetailsModeleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=details-modele-details-modele-module-es5.js.map