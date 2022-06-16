function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reglements-caisse-reglements-caisse-module"], {
  /***/
  "./src/app/comerce/session-caisse/reglements-caisse/reglements-caisse-routing.module.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/comerce/session-caisse/reglements-caisse/reglements-caisse-routing.module.ts ***!
    \**********************************************************************************************/

  /*! exports provided: ReglementsCaisseRoutingModule */

  /***/
  function srcAppComerceSessionCaisseReglementsCaisseReglementsCaisseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReglementsCaisseRoutingModule", function () {
      return ReglementsCaisseRoutingModule;
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


    var _reglements_caisse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./reglements-caisse.component */
    "./src/app/comerce/session-caisse/reglements-caisse/reglements-caisse.component.ts");

    var routes = [{
      path: '',
      component: _reglements_caisse_component__WEBPACK_IMPORTED_MODULE_2__["ReglementsCaisseComponent"]
    }];

    var ReglementsCaisseRoutingModule = function ReglementsCaisseRoutingModule() {
      _classCallCheck(this, ReglementsCaisseRoutingModule);
    };

    ReglementsCaisseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReglementsCaisseRoutingModule
    });
    ReglementsCaisseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReglementsCaisseRoutingModule_Factory(t) {
        return new (t || ReglementsCaisseRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReglementsCaisseRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReglementsCaisseRoutingModule, [{
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
  "./src/app/comerce/session-caisse/reglements-caisse/reglements-caisse.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/comerce/session-caisse/reglements-caisse/reglements-caisse.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: ReglementsCaisseModule */

  /***/
  function srcAppComerceSessionCaisseReglementsCaisseReglementsCaisseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReglementsCaisseModule", function () {
      return ReglementsCaisseModule;
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


    var _reglements_caisse_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reglements-caisse-routing.module */
    "./src/app/comerce/session-caisse/reglements-caisse/reglements-caisse-routing.module.ts");

    var ReglementsCaisseModule = function ReglementsCaisseModule() {
      _classCallCheck(this, ReglementsCaisseModule);
    };

    ReglementsCaisseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReglementsCaisseModule
    });
    ReglementsCaisseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReglementsCaisseModule_Factory(t) {
        return new (t || ReglementsCaisseModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _reglements_caisse_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReglementsCaisseRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReglementsCaisseModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _reglements_caisse_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReglementsCaisseRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReglementsCaisseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _reglements_caisse_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReglementsCaisseRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=reglements-caisse-reglements-caisse-module-es5.js.map