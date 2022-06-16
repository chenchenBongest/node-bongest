function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facture-facture-module"], {
  /***/
  "./src/app/comerce/client/facture/facture-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/comerce/client/facture/facture-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: FactureRoutingModule */

  /***/
  function srcAppComerceClientFactureFactureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FactureRoutingModule", function () {
      return FactureRoutingModule;
    });
    /* harmony import */


    var _facture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./facture.component */
    "./src/app/comerce/client/facture/facture.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _facture_component__WEBPACK_IMPORTED_MODULE_0__["FactureComponent"]
    }];

    var FactureRoutingModule = function FactureRoutingModule() {
      _classCallCheck(this, FactureRoutingModule);
    };

    FactureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: FactureRoutingModule
    });
    FactureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function FactureRoutingModule_Factory(t) {
        return new (t || FactureRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FactureRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FactureRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/comerce/client/facture/facture.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/comerce/client/facture/facture.module.ts ***!
    \**********************************************************/

  /*! exports provided: FactureModule */

  /***/
  function srcAppComerceClientFactureFactureModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FactureModule", function () {
      return FactureModule;
    });
    /* harmony import */


    var _facture_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./facture-routing.module */
    "./src/app/comerce/client/facture/facture-routing.module.ts");
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
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var FactureModule = function FactureModule() {
      _classCallCheck(this, FactureModule);
    };

    FactureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: FactureModule
    });
    FactureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function FactureModule_Factory(t) {
        return new (t || FactureModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _facture_routing_module__WEBPACK_IMPORTED_MODULE_0__["FactureRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FactureModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _facture_routing_module__WEBPACK_IMPORTED_MODULE_0__["FactureRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FactureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _facture_routing_module__WEBPACK_IMPORTED_MODULE_0__["FactureRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=facture-facture-module-es5.js.map