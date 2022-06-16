function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["importations-page-importations-page-module"], {
  /***/
  "./src/app/importations-page/importations-page-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/importations-page/importations-page-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ImportationsPageRoutingModule */

  /***/
  function srcAppImportationsPageImportationsPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImportationsPageRoutingModule", function () {
      return ImportationsPageRoutingModule;
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


    var _importations_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./importations-page.component */
    "./src/app/importations-page/importations-page.component.ts");

    var routes = [{
      path: '',
      component: _importations_page_component__WEBPACK_IMPORTED_MODULE_2__["ImportationsPageComponent"]
    }];

    var ImportationsPageRoutingModule = function ImportationsPageRoutingModule() {
      _classCallCheck(this, ImportationsPageRoutingModule);
    };

    ImportationsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ImportationsPageRoutingModule
    });
    ImportationsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ImportationsPageRoutingModule_Factory(t) {
        return new (t || ImportationsPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImportationsPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImportationsPageRoutingModule, [{
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
  "./src/app/importations-page/importations-page.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/importations-page/importations-page.module.ts ***!
    \***************************************************************/

  /*! exports provided: ImportationsPageModule */

  /***/
  function srcAppImportationsPageImportationsPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImportationsPageModule", function () {
      return ImportationsPageModule;
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


    var _importations_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./importations-page-routing.module */
    "./src/app/importations-page/importations-page-routing.module.ts");

    var ImportationsPageModule = function ImportationsPageModule() {
      _classCallCheck(this, ImportationsPageModule);
    };

    ImportationsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ImportationsPageModule
    });
    ImportationsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ImportationsPageModule_Factory(t) {
        return new (t || ImportationsPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _importations_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ImportationsPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImportationsPageModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _importations_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ImportationsPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImportationsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _importations_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ImportationsPageRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=importations-page-importations-page-module-es5.js.map