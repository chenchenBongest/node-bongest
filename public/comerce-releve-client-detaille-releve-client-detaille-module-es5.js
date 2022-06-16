function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-releve-client-detaille-releve-client-detaille-module"], {
  /***/
  "./src/app/comerce/releve-client-detaille/releve-client-detaille-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/comerce/releve-client-detaille/releve-client-detaille-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ReleveClientDetailleRoutingModule */

  /***/
  function srcAppComerceReleveClientDetailleReleveClientDetailleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReleveClientDetailleRoutingModule", function () {
      return ReleveClientDetailleRoutingModule;
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


    var _releve_client_detaille_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./releve-client-detaille.component */
    "./src/app/comerce/releve-client-detaille/releve-client-detaille.component.ts");

    var routes = [{
      path: '',
      component: _releve_client_detaille_component__WEBPACK_IMPORTED_MODULE_2__["ReleveClientDetailleComponent"]
    }];

    var ReleveClientDetailleRoutingModule = function ReleveClientDetailleRoutingModule() {
      _classCallCheck(this, ReleveClientDetailleRoutingModule);
    };

    ReleveClientDetailleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReleveClientDetailleRoutingModule
    });
    ReleveClientDetailleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReleveClientDetailleRoutingModule_Factory(t) {
        return new (t || ReleveClientDetailleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReleveClientDetailleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReleveClientDetailleRoutingModule, [{
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
  "./src/app/comerce/releve-client-detaille/releve-client-detaille.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/comerce/releve-client-detaille/releve-client-detaille.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: ReleveClientDetailleModule */

  /***/
  function srcAppComerceReleveClientDetailleReleveClientDetailleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReleveClientDetailleModule", function () {
      return ReleveClientDetailleModule;
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


    var _releve_client_detaille_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./releve-client-detaille-routing.module */
    "./src/app/comerce/releve-client-detaille/releve-client-detaille-routing.module.ts");

    var ReleveClientDetailleModule = function ReleveClientDetailleModule() {
      _classCallCheck(this, ReleveClientDetailleModule);
    };

    ReleveClientDetailleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReleveClientDetailleModule
    });
    ReleveClientDetailleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReleveClientDetailleModule_Factory(t) {
        return new (t || ReleveClientDetailleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _releve_client_detaille_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReleveClientDetailleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReleveClientDetailleModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _releve_client_detaille_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReleveClientDetailleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReleveClientDetailleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _releve_client_detaille_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReleveClientDetailleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-releve-client-detaille-releve-client-detaille-module-es5.js.map