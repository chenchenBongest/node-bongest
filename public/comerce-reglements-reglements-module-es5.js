function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-reglements-reglements-module"], {
  /***/
  "./src/app/comerce/reglements/reglements-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/comerce/reglements/reglements-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ReglementsRoutingModule */

  /***/
  function srcAppComerceReglementsReglementsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReglementsRoutingModule", function () {
      return ReglementsRoutingModule;
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


    var _ajouter_reglement_ajouter_reglement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajouter-reglement/ajouter-reglement.component */
    "./src/app/comerce/reglements/ajouter-reglement/ajouter-reglement.component.ts");
    /* harmony import */


    var _modifier_reglement_modifier_reglement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modifier-reglement/modifier-reglement.component */
    "./src/app/comerce/reglements/modifier-reglement/modifier-reglement.component.ts");
    /* harmony import */


    var _list_reglements_list_reglements_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./list-reglements/list-reglements.component */
    "./src/app/comerce/reglements/list-reglements/list-reglements.component.ts");
    /* harmony import */


    var _list_echeance_client_list_echeance_client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./list-echeance-client/list-echeance-client.component */
    "./src/app/comerce/reglements/list-echeance-client/list-echeance-client.component.ts");
    /* harmony import */


    var _details_reglement_details_reglement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./details-reglement/details-reglement.component */
    "./src/app/comerce/reglements/details-reglement/details-reglement.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'bonLivraison/list',
        component: _list_reglements_list_reglements_component__WEBPACK_IMPORTED_MODULE_4__["ListReglementsComponent"]
      }, {
        path: 'bonLivraison/ajout',
        component: _ajouter_reglement_ajouter_reglement_component__WEBPACK_IMPORTED_MODULE_2__["AjouterReglementComponent"]
      }, {
        path: 'bonLivraison/modifier/:id',
        component: _modifier_reglement_modifier_reglement_component__WEBPACK_IMPORTED_MODULE_3__["ModifierReglementComponent"]
      }, {
        path: 'bonLivraison/echeanceClient',
        component: _list_echeance_client_list_echeance_client_component__WEBPACK_IMPORTED_MODULE_5__["ListEcheanceClientComponent"]
      }, {
        path: 'bonLivraison/details/:id',
        component: _details_reglement_details_reglement_component__WEBPACK_IMPORTED_MODULE_6__["DetailsReglementComponent"]
      }, {
        path: 'bonRetourClient/list',
        component: _list_reglements_list_reglements_component__WEBPACK_IMPORTED_MODULE_4__["ListReglementsComponent"]
      }, {
        path: 'bonRetourClient/ajout',
        component: _ajouter_reglement_ajouter_reglement_component__WEBPACK_IMPORTED_MODULE_2__["AjouterReglementComponent"]
      }, {
        path: 'bonRetourClient/modifier/:id',
        component: _modifier_reglement_modifier_reglement_component__WEBPACK_IMPORTED_MODULE_3__["ModifierReglementComponent"]
      }, {
        path: 'bonRetourClient/echeanceClient',
        component: _list_echeance_client_list_echeance_client_component__WEBPACK_IMPORTED_MODULE_5__["ListEcheanceClientComponent"]
      }, {
        path: 'bonRetourClient/details/:id',
        component: _details_reglement_details_reglement_component__WEBPACK_IMPORTED_MODULE_6__["DetailsReglementComponent"]
      }, {
        path: 'bonAchat/list',
        component: _list_reglements_list_reglements_component__WEBPACK_IMPORTED_MODULE_4__["ListReglementsComponent"]
      }, {
        path: 'bonAchat/ajout',
        component: _ajouter_reglement_ajouter_reglement_component__WEBPACK_IMPORTED_MODULE_2__["AjouterReglementComponent"]
      }, {
        path: 'bonAchat/modifier/:id',
        component: _modifier_reglement_modifier_reglement_component__WEBPACK_IMPORTED_MODULE_3__["ModifierReglementComponent"]
      }, {
        path: 'bonAchat/echeanceClient',
        component: _list_echeance_client_list_echeance_client_component__WEBPACK_IMPORTED_MODULE_5__["ListEcheanceClientComponent"]
      }, {
        path: 'bonAchat/details/:id',
        component: _details_reglement_details_reglement_component__WEBPACK_IMPORTED_MODULE_6__["DetailsReglementComponent"]
      }, {
        path: 'bonRetourFournisseur/list',
        component: _list_reglements_list_reglements_component__WEBPACK_IMPORTED_MODULE_4__["ListReglementsComponent"]
      }, {
        path: 'bonRetourFournisseur/ajout',
        component: _ajouter_reglement_ajouter_reglement_component__WEBPACK_IMPORTED_MODULE_2__["AjouterReglementComponent"]
      }, {
        path: 'bonRetourFournisseur/modifier/:id',
        component: _modifier_reglement_modifier_reglement_component__WEBPACK_IMPORTED_MODULE_3__["ModifierReglementComponent"]
      }, {
        path: 'bonRetourFournisseur/echeanceClient',
        component: _list_echeance_client_list_echeance_client_component__WEBPACK_IMPORTED_MODULE_5__["ListEcheanceClientComponent"]
      }, {
        path: 'bonRetourFournisseur/details/:id',
        component: _details_reglement_details_reglement_component__WEBPACK_IMPORTED_MODULE_6__["DetailsReglementComponent"]
      }]
    }];

    var ReglementsRoutingModule = function ReglementsRoutingModule() {
      _classCallCheck(this, ReglementsRoutingModule);
    };

    ReglementsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReglementsRoutingModule
    });
    ReglementsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReglementsRoutingModule_Factory(t) {
        return new (t || ReglementsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReglementsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReglementsRoutingModule, [{
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
  "./src/app/comerce/reglements/reglements.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/comerce/reglements/reglements.module.ts ***!
    \*********************************************************/

  /*! exports provided: ReglementsModule */

  /***/
  function srcAppComerceReglementsReglementsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReglementsModule", function () {
      return ReglementsModule;
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


    var _reglements_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reglements-routing.module */
    "./src/app/comerce/reglements/reglements-routing.module.ts");

    var ReglementsModule = function ReglementsModule() {
      _classCallCheck(this, ReglementsModule);
    };

    ReglementsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReglementsModule
    });
    ReglementsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReglementsModule_Factory(t) {
        return new (t || ReglementsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _reglements_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReglementsRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReglementsModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _reglements_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReglementsRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReglementsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _reglements_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReglementsRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-reglements-reglements-module-es5.js.map