function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-bonCommande-boncommande-module"], {
  /***/
  "./src/app/comerce/bonCommande/boncommande-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/comerce/bonCommande/boncommande-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: BoncommandeRoutingModule */

  /***/
  function srcAppComerceBonCommandeBoncommandeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoncommandeRoutingModule", function () {
      return BoncommandeRoutingModule;
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


    var _list_bon_commande_list_bon_commande_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list-bon-commande/list-bon-commande.component */
    "./src/app/comerce/bonCommande/list-bon-commande/list-bon-commande.component.ts");
    /* harmony import */


    var _ajout_bon_commande_ajout_bon_commande_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ajout-bon-commande/ajout-bon-commande.component */
    "./src/app/comerce/bonCommande/ajout-bon-commande/ajout-bon-commande.component.ts");
    /* harmony import */


    var _modifier_bon_commande_modifier_bon_commande_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modifier-bon-commande/modifier-bon-commande.component */
    "./src/app/comerce/bonCommande/modifier-bon-commande/modifier-bon-commande.component.ts");
    /* harmony import */


    var _details_bon_commande_details_bon_commande_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details-bon-commande/details-bon-commande.component */
    "./src/app/comerce/bonCommande/details-bon-commande/details-bon-commande.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_bon_commande_list_bon_commande_component__WEBPACK_IMPORTED_MODULE_2__["ListBonCommandeComponent"]
      }, {
        path: 'ajout',
        component: _ajout_bon_commande_ajout_bon_commande_component__WEBPACK_IMPORTED_MODULE_3__["AjoutBonCommandeComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_bon_commande_modifier_bon_commande_component__WEBPACK_IMPORTED_MODULE_4__["ModifierBonCommandeComponent"]
      }, {
        path: 'details/:id',
        component: _details_bon_commande_details_bon_commande_component__WEBPACK_IMPORTED_MODULE_5__["DetailsBonCommandeComponent"]
      }]
    }];

    var BoncommandeRoutingModule = function BoncommandeRoutingModule() {
      _classCallCheck(this, BoncommandeRoutingModule);
    };

    BoncommandeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BoncommandeRoutingModule
    });
    BoncommandeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BoncommandeRoutingModule_Factory(t) {
        return new (t || BoncommandeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BoncommandeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoncommandeRoutingModule, [{
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
  "./src/app/comerce/bonCommande/boncommande.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/comerce/bonCommande/boncommande.module.ts ***!
    \***********************************************************/

  /*! exports provided: BoncommandeModule */

  /***/
  function srcAppComerceBonCommandeBoncommandeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoncommandeModule", function () {
      return BoncommandeModule;
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


    var _boncommande_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./boncommande-routing.module */
    "./src/app/comerce/bonCommande/boncommande-routing.module.ts");

    var BoncommandeModule = function BoncommandeModule() {
      _classCallCheck(this, BoncommandeModule);
    };

    BoncommandeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BoncommandeModule
    });
    BoncommandeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BoncommandeModule_Factory(t) {
        return new (t || BoncommandeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _boncommande_routing_module__WEBPACK_IMPORTED_MODULE_2__["BoncommandeRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BoncommandeModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _boncommande_routing_module__WEBPACK_IMPORTED_MODULE_2__["BoncommandeRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoncommandeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _boncommande_routing_module__WEBPACK_IMPORTED_MODULE_2__["BoncommandeRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-bonCommande-boncommande-module-es5.js.map