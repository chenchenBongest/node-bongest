function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-releve-client-releve-client-module"], {
  /***/
  "./src/app/comerce/releve-client/releve-client-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/comerce/releve-client/releve-client-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ReleveClientRoutingModule */

  /***/
  function srcAppComerceReleveClientReleveClientRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReleveClientRoutingModule", function () {
      return ReleveClientRoutingModule;
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


    var _releve_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./releve-client.component */
    "./src/app/comerce/releve-client/releve-client.component.ts");

    var routes = [{
      path: '',
      component: _releve_client_component__WEBPACK_IMPORTED_MODULE_2__["ReleveClientComponent"]
    }];

    var ReleveClientRoutingModule = function ReleveClientRoutingModule() {
      _classCallCheck(this, ReleveClientRoutingModule);
    };

    ReleveClientRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReleveClientRoutingModule
    });
    ReleveClientRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReleveClientRoutingModule_Factory(t) {
        return new (t || ReleveClientRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReleveClientRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReleveClientRoutingModule, [{
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
  "./src/app/comerce/releve-client/releve-client.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/comerce/releve-client/releve-client.module.ts ***!
    \***************************************************************/

  /*! exports provided: ReleveClientModule */

  /***/
  function srcAppComerceReleveClientReleveClientModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReleveClientModule", function () {
      return ReleveClientModule;
    });
    /* harmony import */


    var _releve_client_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./releve-client-routing.module */
    "./src/app/comerce/releve-client/releve-client-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var ReleveClientModule = function ReleveClientModule() {
      _classCallCheck(this, ReleveClientModule);
    };

    ReleveClientModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ReleveClientModule
    });
    ReleveClientModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ReleveClientModule_Factory(t) {
        return new (t || ReleveClientModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _releve_client_routing_module__WEBPACK_IMPORTED_MODULE_0__["ReleveClientRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReleveClientModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _releve_client_routing_module__WEBPACK_IMPORTED_MODULE_0__["ReleveClientRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReleveClientModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _releve_client_routing_module__WEBPACK_IMPORTED_MODULE_0__["ReleveClientRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-releve-client-releve-client-module-es5.js.map