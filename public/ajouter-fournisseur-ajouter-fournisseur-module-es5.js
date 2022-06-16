function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajouter-fournisseur-ajouter-fournisseur-module"], {
  /***/
  "./src/app/comerce/fournisseur/ajouter-fournisseur/ajouter-fournisseur-routing.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/comerce/fournisseur/ajouter-fournisseur/ajouter-fournisseur-routing.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: AjouterFournisseurRoutingModule */

  /***/
  function srcAppComerceFournisseurAjouterFournisseurAjouterFournisseurRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjouterFournisseurRoutingModule", function () {
      return AjouterFournisseurRoutingModule;
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


    var _ajouter_fournisseur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajouter-fournisseur.component */
    "./src/app/comerce/fournisseur/ajouter-fournisseur/ajouter-fournisseur.component.ts");

    var routes = [{
      path: '',
      component: _ajouter_fournisseur_component__WEBPACK_IMPORTED_MODULE_2__["AjouterFournisseurComponent"]
    }];

    var AjouterFournisseurRoutingModule = function AjouterFournisseurRoutingModule() {
      _classCallCheck(this, AjouterFournisseurRoutingModule);
    };

    AjouterFournisseurRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AjouterFournisseurRoutingModule
    });
    AjouterFournisseurRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AjouterFournisseurRoutingModule_Factory(t) {
        return new (t || AjouterFournisseurRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjouterFournisseurRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjouterFournisseurRoutingModule, [{
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
  "./src/app/comerce/fournisseur/ajouter-fournisseur/ajouter-fournisseur.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/comerce/fournisseur/ajouter-fournisseur/ajouter-fournisseur.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: AjouterFournisseurModule */

  /***/
  function srcAppComerceFournisseurAjouterFournisseurAjouterFournisseurModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjouterFournisseurModule", function () {
      return AjouterFournisseurModule;
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


    var _ajouter_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajouter-fournisseur-routing.module */
    "./src/app/comerce/fournisseur/ajouter-fournisseur/ajouter-fournisseur-routing.module.ts");

    var AjouterFournisseurModule = function AjouterFournisseurModule() {
      _classCallCheck(this, AjouterFournisseurModule);
    };

    AjouterFournisseurModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AjouterFournisseurModule
    });
    AjouterFournisseurModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AjouterFournisseurModule_Factory(t) {
        return new (t || AjouterFournisseurModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ajouter_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__["AjouterFournisseurRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjouterFournisseurModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ajouter_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__["AjouterFournisseurRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjouterFournisseurModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ajouter_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__["AjouterFournisseurRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=ajouter-fournisseur-ajouter-fournisseur-module-es5.js.map