function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-typeCompte-type-compte-module"], {
  /***/
  "./src/app/comerce/typeCompte/type-compte-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/comerce/typeCompte/type-compte-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: TypeCompteRoutingModule */

  /***/
  function srcAppComerceTypeCompteTypeCompteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeCompteRoutingModule", function () {
      return TypeCompteRoutingModule;
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


    var _type_compte_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./type-compte.component */
    "./src/app/comerce/typeCompte/type-compte.component.ts");

    var routes = [{
      path: '',
      component: _type_compte_component__WEBPACK_IMPORTED_MODULE_2__["TypeCompteComponent"]
    }];

    var TypeCompteRoutingModule = function TypeCompteRoutingModule() {
      _classCallCheck(this, TypeCompteRoutingModule);
    };

    TypeCompteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TypeCompteRoutingModule
    });
    TypeCompteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TypeCompteRoutingModule_Factory(t) {
        return new (t || TypeCompteRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TypeCompteRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeCompteRoutingModule, [{
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
  "./src/app/comerce/typeCompte/type-compte.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/comerce/typeCompte/type-compte.module.ts ***!
    \**********************************************************/

  /*! exports provided: TypeCompteModule */

  /***/
  function srcAppComerceTypeCompteTypeCompteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeCompteModule", function () {
      return TypeCompteModule;
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


    var _type_compte_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./type-compte-routing.module */
    "./src/app/comerce/typeCompte/type-compte-routing.module.ts");

    var TypeCompteModule = function TypeCompteModule() {
      _classCallCheck(this, TypeCompteModule);
    };

    TypeCompteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TypeCompteModule
    });
    TypeCompteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TypeCompteModule_Factory(t) {
        return new (t || TypeCompteModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _type_compte_routing_module__WEBPACK_IMPORTED_MODULE_2__["TypeCompteRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TypeCompteModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _type_compte_routing_module__WEBPACK_IMPORTED_MODULE_2__["TypeCompteRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeCompteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _type_compte_routing_module__WEBPACK_IMPORTED_MODULE_2__["TypeCompteRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-typeCompte-type-compte-module-es5.js.map