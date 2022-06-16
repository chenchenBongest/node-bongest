function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-caisse-caisse-module"], {
  /***/
  "./src/app/comerce/caisse/caisse-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/comerce/caisse/caisse-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: CaisseRoutingModule */

  /***/
  function srcAppComerceCaisseCaisseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CaisseRoutingModule", function () {
      return CaisseRoutingModule;
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


    var _caisse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./caisse.component */
    "./src/app/comerce/caisse/caisse.component.ts");

    var routes = [{
      path: '',
      component: _caisse_component__WEBPACK_IMPORTED_MODULE_2__["CaisseComponent"]
    }];

    var CaisseRoutingModule = function CaisseRoutingModule() {
      _classCallCheck(this, CaisseRoutingModule);
    };

    CaisseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CaisseRoutingModule
    });
    CaisseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CaisseRoutingModule_Factory(t) {
        return new (t || CaisseRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CaisseRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaisseRoutingModule, [{
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
  "./src/app/comerce/caisse/caisse.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/comerce/caisse/caisse.module.ts ***!
    \*************************************************/

  /*! exports provided: CaisseModule */

  /***/
  function srcAppComerceCaisseCaisseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CaisseModule", function () {
      return CaisseModule;
    });
    /* harmony import */


    var src_app_shared_global_shared_global_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/shared-global/shared-global.module */
    "./src/app/shared-global/shared-global.module.ts");
    /* harmony import */


    var _caisse_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./caisse-routing.module */
    "./src/app/comerce/caisse/caisse-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var CaisseModule = function CaisseModule() {
      _classCallCheck(this, CaisseModule);
    };

    CaisseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: CaisseModule
    });
    CaisseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function CaisseModule_Factory(t) {
        return new (t || CaisseModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _caisse_routing_module__WEBPACK_IMPORTED_MODULE_1__["CaisseRoutingModule"], src_app_shared_global_shared_global_module__WEBPACK_IMPORTED_MODULE_0__["SharedGlobalModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CaisseModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _caisse_routing_module__WEBPACK_IMPORTED_MODULE_1__["CaisseRoutingModule"], src_app_shared_global_shared_global_module__WEBPACK_IMPORTED_MODULE_0__["SharedGlobalModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CaisseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _caisse_routing_module__WEBPACK_IMPORTED_MODULE_1__["CaisseRoutingModule"], src_app_shared_global_shared_global_module__WEBPACK_IMPORTED_MODULE_0__["SharedGlobalModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-caisse-caisse-module-es5.js.map