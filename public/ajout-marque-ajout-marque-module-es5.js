function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajout-marque-ajout-marque-module"], {
  /***/
  "./src/app/comerce/variables/marque/ajout-marque/ajout-marque-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/comerce/variables/marque/ajout-marque/ajout-marque-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: AjoutMarqueRoutingModule */

  /***/
  function srcAppComerceVariablesMarqueAjoutMarqueAjoutMarqueRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjoutMarqueRoutingModule", function () {
      return AjoutMarqueRoutingModule;
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


    var _ajout_marque_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajout-marque.component */
    "./src/app/comerce/variables/marque/ajout-marque/ajout-marque.component.ts");

    var routes = [{
      path: '',
      component: _ajout_marque_component__WEBPACK_IMPORTED_MODULE_2__["AjoutMarqueComponent"]
    }];

    var AjoutMarqueRoutingModule = function AjoutMarqueRoutingModule() {
      _classCallCheck(this, AjoutMarqueRoutingModule);
    };

    AjoutMarqueRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AjoutMarqueRoutingModule
    });
    AjoutMarqueRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AjoutMarqueRoutingModule_Factory(t) {
        return new (t || AjoutMarqueRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjoutMarqueRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjoutMarqueRoutingModule, [{
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
  "./src/app/comerce/variables/marque/ajout-marque/ajout-marque.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/comerce/variables/marque/ajout-marque/ajout-marque.module.ts ***!
    \******************************************************************************/

  /*! exports provided: AjoutMarqueModule */

  /***/
  function srcAppComerceVariablesMarqueAjoutMarqueAjoutMarqueModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjoutMarqueModule", function () {
      return AjoutMarqueModule;
    });
    /* harmony import */


    var _ajout_marque_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ajout-marque-routing.module */
    "./src/app/comerce/variables/marque/ajout-marque/ajout-marque-routing.module.ts");
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

    var AjoutMarqueModule = function AjoutMarqueModule() {
      _classCallCheck(this, AjoutMarqueModule);
    };

    AjoutMarqueModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AjoutMarqueModule
    });
    AjoutMarqueModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AjoutMarqueModule_Factory(t) {
        return new (t || AjoutMarqueModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ajout_marque_routing_module__WEBPACK_IMPORTED_MODULE_0__["AjoutMarqueRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AjoutMarqueModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ajout_marque_routing_module__WEBPACK_IMPORTED_MODULE_0__["AjoutMarqueRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AjoutMarqueModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ajout_marque_routing_module__WEBPACK_IMPORTED_MODULE_0__["AjoutMarqueRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=ajout-marque-ajout-marque-module-es5.js.map