function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["releve-fournisseur-releve-fournisseur-module"], {
  /***/
  "./src/app/comerce/fournisseur/releve-fournisseur/releve-fournisseur-routing.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/comerce/fournisseur/releve-fournisseur/releve-fournisseur-routing.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ReleveFournisseurRoutingModule */

  /***/
  function srcAppComerceFournisseurReleveFournisseurReleveFournisseurRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReleveFournisseurRoutingModule", function () {
      return ReleveFournisseurRoutingModule;
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


    var _releve_fournisseur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./releve-fournisseur.component */
    "./src/app/comerce/fournisseur/releve-fournisseur/releve-fournisseur.component.ts");

    var routes = [{
      path: '',
      component: _releve_fournisseur_component__WEBPACK_IMPORTED_MODULE_2__["ReleveFournisseurComponent"]
    }];

    var ReleveFournisseurRoutingModule = function ReleveFournisseurRoutingModule() {
      _classCallCheck(this, ReleveFournisseurRoutingModule);
    };

    ReleveFournisseurRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ReleveFournisseurRoutingModule
    });
    ReleveFournisseurRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ReleveFournisseurRoutingModule_Factory(t) {
        return new (t || ReleveFournisseurRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ReleveFournisseurRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ReleveFournisseurRoutingModule, [{
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
  "./src/app/comerce/fournisseur/releve-fournisseur/releve-fournisseur.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/comerce/fournisseur/releve-fournisseur/releve-fournisseur.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ReleveFournisseurModule */

  /***/
  function srcAppComerceFournisseurReleveFournisseurReleveFournisseurModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReleveFournisseurModule", function () {
      return ReleveFournisseurModule;
    });
    /* harmony import */


    var _releve_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./releve-fournisseur-routing.module */
    "./src/app/comerce/fournisseur/releve-fournisseur/releve-fournisseur-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ReleveFournisseurModule = function ReleveFournisseurModule() {
      _classCallCheck(this, ReleveFournisseurModule);
    };

    ReleveFournisseurModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: ReleveFournisseurModule
    });
    ReleveFournisseurModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function ReleveFournisseurModule_Factory(t) {
        return new (t || ReleveFournisseurModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _releve_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_0__["ReleveFournisseurRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](ReleveFournisseurModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _releve_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_0__["ReleveFournisseurRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ReleveFournisseurModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _releve_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_0__["ReleveFournisseurRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=releve-fournisseur-releve-fournisseur-module-es5.js.map