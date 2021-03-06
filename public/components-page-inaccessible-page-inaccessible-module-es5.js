function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-page-inaccessible-page-inaccessible-module"], {
  /***/
  "./src/app/authentication/components/page-inaccessible/page-inaccessible-routing.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/authentication/components/page-inaccessible/page-inaccessible-routing.module.ts ***!
    \*************************************************************************************************/

  /*! exports provided: PageInaccessibleRoutingModule */

  /***/
  function srcAppAuthenticationComponentsPageInaccessiblePageInaccessibleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageInaccessibleRoutingModule", function () {
      return PageInaccessibleRoutingModule;
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


    var _page_inaccessible_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page-inaccessible.component */
    "./src/app/authentication/components/page-inaccessible/page-inaccessible.component.ts");

    var routes = [{
      path: '',
      component: _page_inaccessible_component__WEBPACK_IMPORTED_MODULE_2__["PageInaccessibleComponent"]
    }];

    var PageInaccessibleRoutingModule = function PageInaccessibleRoutingModule() {
      _classCallCheck(this, PageInaccessibleRoutingModule);
    };

    PageInaccessibleRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: PageInaccessibleRoutingModule
    });
    PageInaccessibleRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function PageInaccessibleRoutingModule_Factory(t) {
        return new (t || PageInaccessibleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PageInaccessibleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PageInaccessibleRoutingModule, [{
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
  "./src/app/authentication/components/page-inaccessible/page-inaccessible.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/authentication/components/page-inaccessible/page-inaccessible.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: PageInaccessibleModule */

  /***/
  function srcAppAuthenticationComponentsPageInaccessiblePageInaccessibleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageInaccessibleModule", function () {
      return PageInaccessibleModule;
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


    var _page_inaccessible_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page-inaccessible-routing.module */
    "./src/app/authentication/components/page-inaccessible/page-inaccessible-routing.module.ts");

    var PageInaccessibleModule = function PageInaccessibleModule() {
      _classCallCheck(this, PageInaccessibleModule);
    };

    PageInaccessibleModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: PageInaccessibleModule
    });
    PageInaccessibleModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function PageInaccessibleModule_Factory(t) {
        return new (t || PageInaccessibleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_inaccessible_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageInaccessibleRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PageInaccessibleModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_inaccessible_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageInaccessibleRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PageInaccessibleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_inaccessible_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageInaccessibleRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=components-page-inaccessible-page-inaccessible-module-es5.js.map