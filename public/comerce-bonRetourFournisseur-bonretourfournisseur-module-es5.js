function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-bonRetourFournisseur-bonretourfournisseur-module"], {
  /***/
  "./src/app/comerce/bonRetourFournisseur/bonretourfournisseur-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/comerce/bonRetourFournisseur/bonretourfournisseur-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: BonretourfournisseurRoutingModule */

  /***/
  function srcAppComerceBonRetourFournisseurBonretourfournisseurRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonretourfournisseurRoutingModule", function () {
      return BonretourfournisseurRoutingModule;
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


    var _list_bon_retour_fournisseur_list_bon_retour_fournisseur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list-bon-retour-fournisseur/list-bon-retour-fournisseur.component */
    "./src/app/comerce/bonRetourFournisseur/list-bon-retour-fournisseur/list-bon-retour-fournisseur.component.ts");
    /* harmony import */


    var _ajout_bon_retour_fournisseur_ajout_bon_retour_fournisseur_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ajout-bon-retour-fournisseur/ajout-bon-retour-fournisseur.component */
    "./src/app/comerce/bonRetourFournisseur/ajout-bon-retour-fournisseur/ajout-bon-retour-fournisseur.component.ts");
    /* harmony import */


    var _modifier_bon_retour_fournisseur_modifier_bon_retour_fournisseur_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modifier-bon-retour-fournisseur/modifier-bon-retour-fournisseur.component */
    "./src/app/comerce/bonRetourFournisseur/modifier-bon-retour-fournisseur/modifier-bon-retour-fournisseur.component.ts");
    /* harmony import */


    var _details_bon_retour_fournisseur_details_bon_retour_fournisseur_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details-bon-retour-fournisseur/details-bon-retour-fournisseur.component */
    "./src/app/comerce/bonRetourFournisseur/details-bon-retour-fournisseur/details-bon-retour-fournisseur.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_bon_retour_fournisseur_list_bon_retour_fournisseur_component__WEBPACK_IMPORTED_MODULE_2__["ListBonRetourFournisseurComponent"]
      }, {
        path: 'ajout',
        component: _ajout_bon_retour_fournisseur_ajout_bon_retour_fournisseur_component__WEBPACK_IMPORTED_MODULE_3__["AjoutBonRetourFournisseurComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_bon_retour_fournisseur_modifier_bon_retour_fournisseur_component__WEBPACK_IMPORTED_MODULE_4__["ModifierBonRetourFournisseurComponent"]
      }, {
        path: 'details/:id',
        component: _details_bon_retour_fournisseur_details_bon_retour_fournisseur_component__WEBPACK_IMPORTED_MODULE_5__["DetailsBonRetourFournisseurComponent"]
      }]
    }];

    var BonretourfournisseurRoutingModule = function BonretourfournisseurRoutingModule() {
      _classCallCheck(this, BonretourfournisseurRoutingModule);
    };

    BonretourfournisseurRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BonretourfournisseurRoutingModule
    });
    BonretourfournisseurRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BonretourfournisseurRoutingModule_Factory(t) {
        return new (t || BonretourfournisseurRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonretourfournisseurRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonretourfournisseurRoutingModule, [{
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
  "./src/app/comerce/bonRetourFournisseur/bonretourfournisseur.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/comerce/bonRetourFournisseur/bonretourfournisseur.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: BonretourfournisseurModule */

  /***/
  function srcAppComerceBonRetourFournisseurBonretourfournisseurModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonretourfournisseurModule", function () {
      return BonretourfournisseurModule;
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


    var _bonretourfournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bonretourfournisseur-routing.module */
    "./src/app/comerce/bonRetourFournisseur/bonretourfournisseur-routing.module.ts");

    var BonretourfournisseurModule = function BonretourfournisseurModule() {
      _classCallCheck(this, BonretourfournisseurModule);
    };

    BonretourfournisseurModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BonretourfournisseurModule
    });
    BonretourfournisseurModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BonretourfournisseurModule_Factory(t) {
        return new (t || BonretourfournisseurModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bonretourfournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonretourfournisseurRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonretourfournisseurModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bonretourfournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonretourfournisseurRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonretourfournisseurModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bonretourfournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonretourfournisseurRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-bonRetourFournisseur-bonretourfournisseur-module-es5.js.map