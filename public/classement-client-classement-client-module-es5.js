function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["classement-client-classement-client-module"], {
  /***/
  "./src/app/comerce/client/classement-client/classement-client-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/comerce/client/classement-client/classement-client-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: ClassementClientRoutingModule */

  /***/
  function srcAppComerceClientClassementClientClassementClientRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassementClientRoutingModule", function () {
      return ClassementClientRoutingModule;
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


    var _classement_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./classement-client.component */
    "./src/app/comerce/client/classement-client/classement-client.component.ts");

    var routes = [{
      path: '',
      component: _classement_client_component__WEBPACK_IMPORTED_MODULE_2__["ClassementClientComponent"]
    }];

    var ClassementClientRoutingModule = function ClassementClientRoutingModule() {
      _classCallCheck(this, ClassementClientRoutingModule);
    };

    ClassementClientRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ClassementClientRoutingModule
    });
    ClassementClientRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ClassementClientRoutingModule_Factory(t) {
        return new (t || ClassementClientRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ClassementClientRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClassementClientRoutingModule, [{
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
  "./src/app/comerce/client/classement-client/classement-client.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/comerce/client/classement-client/classement-client.module.ts ***!
    \******************************************************************************/

  /*! exports provided: ClassementClientModule */

  /***/
  function srcAppComerceClientClassementClientClassementClientModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassementClientModule", function () {
      return ClassementClientModule;
    });
    /* harmony import */


    var _classement_client_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./classement-client-routing.module */
    "./src/app/comerce/client/classement-client/classement-client-routing.module.ts");
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

    var ClassementClientModule = function ClassementClientModule() {
      _classCallCheck(this, ClassementClientModule);
    };

    ClassementClientModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: ClassementClientModule
    });
    ClassementClientModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function ClassementClientModule_Factory(t) {
        return new (t || ClassementClientModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _classement_client_routing_module__WEBPACK_IMPORTED_MODULE_0__["ClassementClientRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](ClassementClientModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _classement_client_routing_module__WEBPACK_IMPORTED_MODULE_0__["ClassementClientRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ClassementClientModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _classement_client_routing_module__WEBPACK_IMPORTED_MODULE_0__["ClassementClientRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=classement-client-classement-client-module-es5.js.map