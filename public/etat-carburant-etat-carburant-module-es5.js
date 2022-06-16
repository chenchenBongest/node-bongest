function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["etat-carburant-etat-carburant-module"], {
  /***/
  "./src/app/GMAO/etat-carburant/etat-carburant-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/GMAO/etat-carburant/etat-carburant-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: EtatCarburantRoutingModule */

  /***/
  function srcAppGMAOEtatCarburantEtatCarburantRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EtatCarburantRoutingModule", function () {
      return EtatCarburantRoutingModule;
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


    var _etat_carburant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./etat-carburant.component */
    "./src/app/GMAO/etat-carburant/etat-carburant.component.ts");

    var routes = [{
      path: '',
      component: _etat_carburant_component__WEBPACK_IMPORTED_MODULE_2__["EtatCarburantComponent"]
    }];

    var EtatCarburantRoutingModule = function EtatCarburantRoutingModule() {
      _classCallCheck(this, EtatCarburantRoutingModule);
    };

    EtatCarburantRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EtatCarburantRoutingModule
    });
    EtatCarburantRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EtatCarburantRoutingModule_Factory(t) {
        return new (t || EtatCarburantRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EtatCarburantRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EtatCarburantRoutingModule, [{
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
  "./src/app/GMAO/etat-carburant/etat-carburant.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/GMAO/etat-carburant/etat-carburant.module.ts ***!
    \**************************************************************/

  /*! exports provided: EtatCarburantModule */

  /***/
  function srcAppGMAOEtatCarburantEtatCarburantModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EtatCarburantModule", function () {
      return EtatCarburantModule;
    });
    /* harmony import */


    var _etat_carburant_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./etat-carburant-routing.module */
    "./src/app/GMAO/etat-carburant/etat-carburant-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var EtatCarburantModule = function EtatCarburantModule() {
      _classCallCheck(this, EtatCarburantModule);
    };

    EtatCarburantModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: EtatCarburantModule
    });
    EtatCarburantModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function EtatCarburantModule_Factory(t) {
        return new (t || EtatCarburantModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _etat_carburant_routing_module__WEBPACK_IMPORTED_MODULE_0__["EtatCarburantRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EtatCarburantModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _etat_carburant_routing_module__WEBPACK_IMPORTED_MODULE_0__["EtatCarburantRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EtatCarburantModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _etat_carburant_routing_module__WEBPACK_IMPORTED_MODULE_0__["EtatCarburantRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=etat-carburant-etat-carburant-module-es5.js.map