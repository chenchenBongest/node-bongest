function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parametres-importations-page-parametres-importations-page-module"], {
  /***/
  "./src/app/parametres-importations-page/parametres-importations-page-routing.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/parametres-importations-page/parametres-importations-page-routing.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ParametresImportationsPageRoutingModule */

  /***/
  function srcAppParametresImportationsPageParametresImportationsPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParametresImportationsPageRoutingModule", function () {
      return ParametresImportationsPageRoutingModule;
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


    var _parametres_importations_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./parametres-importations-page.component */
    "./src/app/parametres-importations-page/parametres-importations-page.component.ts");

    var routes = [{
      path: '',
      component: _parametres_importations_page_component__WEBPACK_IMPORTED_MODULE_2__["ParametresImportationsPageComponent"]
    }];

    var ParametresImportationsPageRoutingModule = function ParametresImportationsPageRoutingModule() {
      _classCallCheck(this, ParametresImportationsPageRoutingModule);
    };

    ParametresImportationsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ParametresImportationsPageRoutingModule
    });
    ParametresImportationsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ParametresImportationsPageRoutingModule_Factory(t) {
        return new (t || ParametresImportationsPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ParametresImportationsPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParametresImportationsPageRoutingModule, [{
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
  "./src/app/parametres-importations-page/parametres-importations-page.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/parametres-importations-page/parametres-importations-page.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ParametresImportationsPageModule */

  /***/
  function srcAppParametresImportationsPageParametresImportationsPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParametresImportationsPageModule", function () {
      return ParametresImportationsPageModule;
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


    var _parametres_importations_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./parametres-importations-page-routing.module */
    "./src/app/parametres-importations-page/parametres-importations-page-routing.module.ts");

    var ParametresImportationsPageModule = function ParametresImportationsPageModule() {
      _classCallCheck(this, ParametresImportationsPageModule);
    };

    ParametresImportationsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ParametresImportationsPageModule
    });
    ParametresImportationsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ParametresImportationsPageModule_Factory(t) {
        return new (t || ParametresImportationsPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _parametres_importations_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ParametresImportationsPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ParametresImportationsPageModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _parametres_importations_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ParametresImportationsPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParametresImportationsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _parametres_importations_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ParametresImportationsPageRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=parametres-importations-page-parametres-importations-page-module-es5.js.map