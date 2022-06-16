function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-parametres-parametres-module"], {
  /***/
  "./src/app/comerce/parametres/parametres-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/comerce/parametres/parametres-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ParametresRoutingModule */

  /***/
  function srcAppComerceParametresParametresRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParametresRoutingModule", function () {
      return ParametresRoutingModule;
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
        path: 'modeReglement',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mode-reglement-mode-reglement-module */
          "mode-reglement-mode-reglement-module").then(__webpack_require__.bind(null,
          /*! ./mode-reglement/mode-reglement.module */
          "./src/app/comerce/parametres/mode-reglement/mode-reglement.module.ts")).then(function (module) {
            return module.ModeReglementModule;
          });
        }
      }, {
        path: 'societe',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | societe-societe-module */
          "societe-societe-module").then(__webpack_require__.bind(null,
          /*! ./societe/societe.module */
          "./src/app/comerce/parametres/societe/societe.module.ts")).then(function (module) {
            return module.SocieteModule;
          });
        }
      }, {
        path: 'tauxTVA',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | taux-tva-taux-tva-module */
          "taux-tva-taux-tva-module").then(__webpack_require__.bind(null,
          /*! ./taux-tva/taux-tva.module */
          "./src/app/comerce/parametres/taux-tva/taux-tva.module.ts")).then(function (module) {
            return module.TauxTvaModule;
          });
        }
      }]
    }];

    var ParametresRoutingModule = function ParametresRoutingModule() {
      _classCallCheck(this, ParametresRoutingModule);
    };

    ParametresRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ParametresRoutingModule
    });
    ParametresRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ParametresRoutingModule_Factory(t) {
        return new (t || ParametresRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ParametresRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParametresRoutingModule, [{
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
  "./src/app/comerce/parametres/parametres.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/comerce/parametres/parametres.module.ts ***!
    \*********************************************************/

  /*! exports provided: ParametresModule */

  /***/
  function srcAppComerceParametresParametresModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParametresModule", function () {
      return ParametresModule;
    });
    /* harmony import */


    var _parametres_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./parametres-routing.module */
    "./src/app/comerce/parametres/parametres-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ParametresModule = function ParametresModule() {
      _classCallCheck(this, ParametresModule);
    };

    ParametresModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ParametresModule
    });
    ParametresModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ParametresModule_Factory(t) {
        return new (t || ParametresModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _parametres_routing_module__WEBPACK_IMPORTED_MODULE_0__["ParametresRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ParametresModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _parametres_routing_module__WEBPACK_IMPORTED_MODULE_0__["ParametresRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ParametresModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _parametres_routing_module__WEBPACK_IMPORTED_MODULE_0__["ParametresRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-parametres-parametres-module-es5.js.map