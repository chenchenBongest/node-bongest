function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-fournisseur-fournisseur-module"], {
  /***/
  "./src/app/comerce/fournisseur/fournisseur-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/comerce/fournisseur/fournisseur-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: FournisseurRoutingModule */

  /***/
  function srcAppComerceFournisseurFournisseurRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FournisseurRoutingModule", function () {
      return FournisseurRoutingModule;
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
          /*! import() | ajouter-fournisseur-ajouter-fournisseur-module */
          "ajouter-fournisseur-ajouter-fournisseur-module").then(__webpack_require__.bind(null,
          /*! ./ajouter-fournisseur/ajouter-fournisseur.module */
          "./src/app/comerce/fournisseur/ajouter-fournisseur/ajouter-fournisseur.module.ts")).then(function (module) {
            return module.AjouterFournisseurModule;
          });
        }
      }, {
        path: 'list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | list-fournisseur-list-fournisseur-module */
          "list-fournisseur-list-fournisseur-module").then(__webpack_require__.bind(null,
          /*! ./list-fournisseur/list-fournisseur.module */
          "./src/app/comerce/fournisseur/list-fournisseur/list-fournisseur.module.ts")).then(function (module) {
            return module.ListFournisseurModule;
          });
        }
      }, {
        path: 'details/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | details-fournisseur-details-fournisseur-module */
          "details-fournisseur-details-fournisseur-module").then(__webpack_require__.bind(null,
          /*! ./details-fournisseur/details-fournisseur.module */
          "./src/app/comerce/fournisseur/details-fournisseur/details-fournisseur.module.ts")).then(function (module) {
            return module.DetailsFournisseurModule;
          });
        }
      }, {
        path: 'modifier/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modifier-fournisseur-modifier-fournisseur-module */
          "modifier-fournisseur-modifier-fournisseur-module").then(__webpack_require__.bind(null,
          /*! ./modifier-fournisseur/modifier-fournisseur.module */
          "./src/app/comerce/fournisseur/modifier-fournisseur/modifier-fournisseur.module.ts")).then(function (module) {
            return module.ModifierFournisseurModule;
          });
        }
      }, {
        path: 'releveFournisseur',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | releve-fournisseur-releve-fournisseur-module */
          "releve-fournisseur-releve-fournisseur-module").then(__webpack_require__.bind(null,
          /*! ./releve-fournisseur/releve-fournisseur.module */
          "./src/app/comerce/fournisseur/releve-fournisseur/releve-fournisseur.module.ts")).then(function (module) {
            return module.ReleveFournisseurModule;
          });
        }
      }]
    }];

    var FournisseurRoutingModule = function FournisseurRoutingModule() {
      _classCallCheck(this, FournisseurRoutingModule);
    };

    FournisseurRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FournisseurRoutingModule
    });
    FournisseurRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FournisseurRoutingModule_Factory(t) {
        return new (t || FournisseurRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FournisseurRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FournisseurRoutingModule, [{
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
  "./src/app/comerce/fournisseur/fournisseur.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/comerce/fournisseur/fournisseur.module.ts ***!
    \***********************************************************/

  /*! exports provided: FournisseurModule */

  /***/
  function srcAppComerceFournisseurFournisseurModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FournisseurModule", function () {
      return FournisseurModule;
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


    var _fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./fournisseur-routing.module */
    "./src/app/comerce/fournisseur/fournisseur-routing.module.ts");

    var FournisseurModule = function FournisseurModule() {
      _classCallCheck(this, FournisseurModule);
    };

    FournisseurModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FournisseurModule
    });
    FournisseurModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FournisseurModule_Factory(t) {
        return new (t || FournisseurModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__["FournisseurRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FournisseurModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__["FournisseurRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FournisseurModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__["FournisseurRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-fournisseur-fournisseur-module-es5.js.map