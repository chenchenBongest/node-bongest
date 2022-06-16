function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-rappel-stock-rappel-stock-routing-module"], {
  /***/
  "./src/app/comerce/rappel-stock/rappel-stock-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/comerce/rappel-stock/rappel-stock-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: RappelStockRoutingModule */

  /***/
  function srcAppComerceRappelStockRappelStockRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RappelStockRoutingModule", function () {
      return RappelStockRoutingModule;
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


    var _rappel_stock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./rappel-stock.component */
    "./src/app/comerce/rappel-stock/rappel-stock.component.ts");

    var routes = [{
      path: '',
      component: _rappel_stock_component__WEBPACK_IMPORTED_MODULE_2__["RappelStockComponent"]
    }];

    var RappelStockRoutingModule = function RappelStockRoutingModule() {
      _classCallCheck(this, RappelStockRoutingModule);
    };

    RappelStockRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RappelStockRoutingModule
    });
    RappelStockRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RappelStockRoutingModule_Factory(t) {
        return new (t || RappelStockRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RappelStockRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RappelStockRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-rappel-stock-rappel-stock-routing-module-es5.js.map