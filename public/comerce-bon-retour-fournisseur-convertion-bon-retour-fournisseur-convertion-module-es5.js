function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-bon-retour-fournisseur-convertion-bon-retour-fournisseur-convertion-module"], {
  /***/
  "./src/app/comerce/bon-retour-fournisseur-convertion/bon-retour-fournisseur-convertion-routing.module.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/comerce/bon-retour-fournisseur-convertion/bon-retour-fournisseur-convertion-routing.module.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: BonRetourFournisseurConvertionRoutingModule */

  /***/
  function srcAppComerceBonRetourFournisseurConvertionBonRetourFournisseurConvertionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonRetourFournisseurConvertionRoutingModule", function () {
      return BonRetourFournisseurConvertionRoutingModule;
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


    var _bon_retour_fournisseur_convertion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bon-retour-fournisseur-convertion.component */
    "./src/app/comerce/bon-retour-fournisseur-convertion/bon-retour-fournisseur-convertion.component.ts");

    var routes = [{
      path: '',
      component: _bon_retour_fournisseur_convertion_component__WEBPACK_IMPORTED_MODULE_2__["BonRetourFournisseurConvertionComponent"]
    }];

    var BonRetourFournisseurConvertionRoutingModule = function BonRetourFournisseurConvertionRoutingModule() {
      _classCallCheck(this, BonRetourFournisseurConvertionRoutingModule);
    };

    BonRetourFournisseurConvertionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BonRetourFournisseurConvertionRoutingModule
    });
    BonRetourFournisseurConvertionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BonRetourFournisseurConvertionRoutingModule_Factory(t) {
        return new (t || BonRetourFournisseurConvertionRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonRetourFournisseurConvertionRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonRetourFournisseurConvertionRoutingModule, [{
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
  "./src/app/comerce/bon-retour-fournisseur-convertion/bon-retour-fournisseur-convertion.module.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/comerce/bon-retour-fournisseur-convertion/bon-retour-fournisseur-convertion.module.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: BonRetourFournisseurConvertionModule */

  /***/
  function srcAppComerceBonRetourFournisseurConvertionBonRetourFournisseurConvertionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonRetourFournisseurConvertionModule", function () {
      return BonRetourFournisseurConvertionModule;
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


    var _bon_retour_fournisseur_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bon-retour-fournisseur-convertion-routing.module */
    "./src/app/comerce/bon-retour-fournisseur-convertion/bon-retour-fournisseur-convertion-routing.module.ts");

    var BonRetourFournisseurConvertionModule = function BonRetourFournisseurConvertionModule() {
      _classCallCheck(this, BonRetourFournisseurConvertionModule);
    };

    BonRetourFournisseurConvertionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BonRetourFournisseurConvertionModule
    });
    BonRetourFournisseurConvertionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BonRetourFournisseurConvertionModule_Factory(t) {
        return new (t || BonRetourFournisseurConvertionModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bon_retour_fournisseur_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonRetourFournisseurConvertionRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonRetourFournisseurConvertionModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bon_retour_fournisseur_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonRetourFournisseurConvertionRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonRetourFournisseurConvertionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bon_retour_fournisseur_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonRetourFournisseurConvertionRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-bon-retour-fournisseur-convertion-bon-retour-fournisseur-convertion-module-es5.js.map