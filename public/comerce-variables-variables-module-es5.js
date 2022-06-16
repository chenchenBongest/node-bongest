function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-variables-variables-module"], {
  /***/
  "./src/app/comerce/variables/variables-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/comerce/variables/variables-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: VariablesRoutingModule */

  /***/
  function srcAppComerceVariablesVariablesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VariablesRoutingModule", function () {
      return VariablesRoutingModule;
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
        path: 'categories',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | categories-categories-module */
          "categories-categories-module").then(__webpack_require__.bind(null,
          /*! ./categories/categories.module */
          "./src/app/comerce/variables/categories/categories.module.ts")).then(function (module) {
            return module.CategoriesModule;
          });
        }
      }, {
        path: 'familles',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | familles-familles-module */
          "familles-familles-module").then(__webpack_require__.bind(null,
          /*! ./familles/familles.module */
          "./src/app/comerce/variables/familles/familles.module.ts")).then(function (module) {
            return module.FamillesModule;
          });
        }
      }, {
        path: 'sousFamilles',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | sous-familles-sous-familles-module */
          "sous-familles-sous-familles-module").then(__webpack_require__.bind(null,
          /*! ./sous-familles/sous-familles.module */
          "./src/app/comerce/variables/sous-familles/sous-familles.module.ts")).then(function (module) {
            return module.SousFamillesModule;
          });
        }
      }, {
        path: 'uniteMesure',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | unite-mesure-unite-mesure-module */
          "unite-mesure-unite-mesure-module").then(__webpack_require__.bind(null,
          /*! ./unite-mesure/unite-mesure.module */
          "./src/app/comerce/variables/unite-mesure/unite-mesure.module.ts")).then(function (module) {
            return module.UniteMesureModule;
          });
        }
      }, {
        path: 'modele',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modele-modele-module */
          "modele-modele-module").then(__webpack_require__.bind(null,
          /*! ./modele/modele.module */
          "./src/app/comerce/variables/modele/modele.module.ts")).then(function (module) {
            return module.ModeleModule;
          });
        }
      }, {
        path: 'marque',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | marque-marque-module */
          "marque-marque-module").then(__webpack_require__.bind(null,
          /*! ./marque/marque.module */
          "./src/app/comerce/variables/marque/marque.module.ts")).then(function (module) {
            return module.MarqueModule;
          });
        }
      }, {
        path: 'modeLivraison',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mode-livraison-mode-livraison-module */
          "mode-livraison-mode-livraison-module").then(__webpack_require__.bind(null,
          /*! ./mode-livraison/mode-livraison.module */
          "./src/app/comerce/variables/mode-livraison/mode-livraison.module.ts")).then(function (module) {
            return module.ModeLivraisonModule;
          });
        }
      }, {
        path: 'frais',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | frais-frais-module */
          "frais-frais-module").then(__webpack_require__.bind(null,
          /*! ./frais/frais.module */
          "./src/app/comerce/variables/frais/frais.module.ts")).then(function (module) {
            return module.FraisModule;
          });
        }
      }]
    }];

    var VariablesRoutingModule = function VariablesRoutingModule() {
      _classCallCheck(this, VariablesRoutingModule);
    };

    VariablesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: VariablesRoutingModule
    });
    VariablesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function VariablesRoutingModule_Factory(t) {
        return new (t || VariablesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VariablesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VariablesRoutingModule, [{
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
  "./src/app/comerce/variables/variables.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/comerce/variables/variables.module.ts ***!
    \*******************************************************/

  /*! exports provided: VariablesModule */

  /***/
  function srcAppComerceVariablesVariablesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VariablesModule", function () {
      return VariablesModule;
    });
    /* harmony import */


    var _variables_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./variables-routing.module */
    "./src/app/comerce/variables/variables-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var VariablesModule = function VariablesModule() {
      _classCallCheck(this, VariablesModule);
    };

    VariablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: VariablesModule
    });
    VariablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function VariablesModule_Factory(t) {
        return new (t || VariablesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _variables_routing_module__WEBPACK_IMPORTED_MODULE_0__["VariablesRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VariablesModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _variables_routing_module__WEBPACK_IMPORTED_MODULE_0__["VariablesRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VariablesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _variables_routing_module__WEBPACK_IMPORTED_MODULE_0__["VariablesRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-variables-variables-module-es5.js.map