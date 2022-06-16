function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-fournisseur-details-fournisseur-module"], {
  /***/
  "./src/app/comerce/fournisseur/details-fournisseur/details-fournisseur-routing.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/comerce/fournisseur/details-fournisseur/details-fournisseur-routing.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: DetailsFournisseurRoutingModule */

  /***/
  function srcAppComerceFournisseurDetailsFournisseurDetailsFournisseurRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsFournisseurRoutingModule", function () {
      return DetailsFournisseurRoutingModule;
    });
    /* harmony import */


    var _details_fournisseur_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./details-fournisseur.component */
    "./src/app/comerce/fournisseur/details-fournisseur/details-fournisseur.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _details_fournisseur_component__WEBPACK_IMPORTED_MODULE_0__["DetailsFournisseurComponent"]
    }];

    var DetailsFournisseurRoutingModule = function DetailsFournisseurRoutingModule() {
      _classCallCheck(this, DetailsFournisseurRoutingModule);
    };

    DetailsFournisseurRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DetailsFournisseurRoutingModule
    });
    DetailsFournisseurRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function DetailsFournisseurRoutingModule_Factory(t) {
        return new (t || DetailsFournisseurRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DetailsFournisseurRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DetailsFournisseurRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/comerce/fournisseur/details-fournisseur/details-fournisseur.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/comerce/fournisseur/details-fournisseur/details-fournisseur.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: DetailsFournisseurModule */

  /***/
  function srcAppComerceFournisseurDetailsFournisseurDetailsFournisseurModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsFournisseurModule", function () {
      return DetailsFournisseurModule;
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


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _details_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./details-fournisseur-routing.module */
    "./src/app/comerce/fournisseur/details-fournisseur/details-fournisseur-routing.module.ts");

    var DetailsFournisseurModule = function DetailsFournisseurModule() {
      _classCallCheck(this, DetailsFournisseurModule);
    };

    DetailsFournisseurModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DetailsFournisseurModule
    });
    DetailsFournisseurModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DetailsFournisseurModule_Factory(t) {
        return new (t || DetailsFournisseurModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _details_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetailsFournisseurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetailsFournisseurModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _details_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetailsFournisseurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsFournisseurModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _details_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetailsFournisseurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
          exports: []
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=details-fournisseur-details-fournisseur-module-es5.js.map