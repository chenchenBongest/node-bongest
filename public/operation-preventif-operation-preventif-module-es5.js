function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operation-preventif-operation-preventif-module"], {
  /***/
  "./src/app/GMAO/operation-preventif/operation-preventif-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/GMAO/operation-preventif/operation-preventif-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: OperationPreventifRoutingModule */

  /***/
  function srcAppGMAOOperationPreventifOperationPreventifRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationPreventifRoutingModule", function () {
      return OperationPreventifRoutingModule;
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


    var _operation_preventif_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./operation-preventif.component */
    "./src/app/GMAO/operation-preventif/operation-preventif.component.ts");

    var routes = [{
      path: '',
      component: _operation_preventif_component__WEBPACK_IMPORTED_MODULE_2__["OperationPreventifComponent"]
    }];

    var OperationPreventifRoutingModule = function OperationPreventifRoutingModule() {
      _classCallCheck(this, OperationPreventifRoutingModule);
    };

    OperationPreventifRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OperationPreventifRoutingModule
    });
    OperationPreventifRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OperationPreventifRoutingModule_Factory(t) {
        return new (t || OperationPreventifRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OperationPreventifRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperationPreventifRoutingModule, [{
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
  "./src/app/GMAO/operation-preventif/operation-preventif.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/GMAO/operation-preventif/operation-preventif.module.ts ***!
    \************************************************************************/

  /*! exports provided: OperationPreventifModule */

  /***/
  function srcAppGMAOOperationPreventifOperationPreventifModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperationPreventifModule", function () {
      return OperationPreventifModule;
    });
    /* harmony import */


    var _operation_preventif_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./operation-preventif-routing.module */
    "./src/app/GMAO/operation-preventif/operation-preventif-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var OperationPreventifModule = function OperationPreventifModule() {
      _classCallCheck(this, OperationPreventifModule);
    };

    OperationPreventifModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: OperationPreventifModule
    });
    OperationPreventifModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function OperationPreventifModule_Factory(t) {
        return new (t || OperationPreventifModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _operation_preventif_routing_module__WEBPACK_IMPORTED_MODULE_0__["OperationPreventifRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OperationPreventifModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _operation_preventif_routing_module__WEBPACK_IMPORTED_MODULE_0__["OperationPreventifRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OperationPreventifModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _operation_preventif_routing_module__WEBPACK_IMPORTED_MODULE_0__["OperationPreventifRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=operation-preventif-operation-preventif-module-es5.js.map