function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-exercices-exercices-module"], {
  /***/
  "./src/app/comerce/exercices/exercices-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/comerce/exercices/exercices-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ExercicesRoutingModule */

  /***/
  function srcAppComerceExercicesExercicesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExercicesRoutingModule", function () {
      return ExercicesRoutingModule;
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


    var _exercices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./exercices.component */
    "./src/app/comerce/exercices/exercices.component.ts");

    var routes = [{
      path: '',
      component: _exercices_component__WEBPACK_IMPORTED_MODULE_2__["ExercicesComponent"]
    }];

    var ExercicesRoutingModule = function ExercicesRoutingModule() {
      _classCallCheck(this, ExercicesRoutingModule);
    };

    ExercicesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ExercicesRoutingModule
    });
    ExercicesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ExercicesRoutingModule_Factory(t) {
        return new (t || ExercicesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExercicesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExercicesRoutingModule, [{
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
  "./src/app/comerce/exercices/exercices.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/comerce/exercices/exercices.module.ts ***!
    \*******************************************************/

  /*! exports provided: ExercicesModule */

  /***/
  function srcAppComerceExercicesExercicesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExercicesModule", function () {
      return ExercicesModule;
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


    var _exercices_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./exercices-routing.module */
    "./src/app/comerce/exercices/exercices-routing.module.ts");

    var ExercicesModule = function ExercicesModule() {
      _classCallCheck(this, ExercicesModule);
    };

    ExercicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ExercicesModule
    });
    ExercicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ExercicesModule_Factory(t) {
        return new (t || ExercicesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _exercices_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExercicesRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExercicesModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _exercices_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExercicesRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExercicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _exercices_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExercicesRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-exercices-exercices-module-es5.js.map