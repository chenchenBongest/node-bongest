function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frais-frais-module"], {
  /***/
  "./src/app/comerce/variables/frais/frais-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/comerce/variables/frais/frais-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: FraisRoutingModule */

  /***/
  function srcAppComerceVariablesFraisFraisRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FraisRoutingModule", function () {
      return FraisRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      children: [{
        path: 'ajout',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | ajout-frais-ajout-frais-module */
          "ajout-frais-ajout-frais-module").then(__webpack_require__.bind(null,
          /*! ./ajout-frais/ajout-frais.module */
          "./src/app/comerce/variables/frais/ajout-frais/ajout-frais.module.ts")).then(function (module) {
            return module.AjoutFraisModule;
          });
        }
      }, {
        path: 'list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | list-frais-list-frais-module */
          "list-frais-list-frais-module").then(__webpack_require__.bind(null,
          /*! ./list-frais/list-frais.module */
          "./src/app/comerce/variables/frais/list-frais/list-frais.module.ts")).then(function (module) {
            return module.ListFraisModule;
          });
        }
      }]
    }];

    var FraisRoutingModule = function FraisRoutingModule() {
      _classCallCheck(this, FraisRoutingModule);
    };

    FraisRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: FraisRoutingModule
    });
    FraisRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function FraisRoutingModule_Factory(t) {
        return new (t || FraisRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](FraisRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FraisRoutingModule, [{
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
  "./src/app/comerce/variables/frais/frais.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/comerce/variables/frais/frais.module.ts ***!
    \*********************************************************/

  /*! exports provided: FraisModule */

  /***/
  function srcAppComerceVariablesFraisFraisModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FraisModule", function () {
      return FraisModule;
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


    var _frais_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./frais-routing.module */
    "./src/app/comerce/variables/frais/frais-routing.module.ts");

    var FraisModule = function FraisModule() {
      _classCallCheck(this, FraisModule);
    };

    FraisModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: FraisModule
    });
    FraisModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function FraisModule_Factory(t) {
        return new (t || FraisModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _frais_routing_module__WEBPACK_IMPORTED_MODULE_2__["FraisRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](FraisModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _frais_routing_module__WEBPACK_IMPORTED_MODULE_2__["FraisRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FraisModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _frais_routing_module__WEBPACK_IMPORTED_MODULE_2__["FraisRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=frais-frais-module-es5.js.map