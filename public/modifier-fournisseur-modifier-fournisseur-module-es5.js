function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modifier-fournisseur-modifier-fournisseur-module"], {
  /***/
  "./src/app/comerce/fournisseur/modifier-fournisseur/modifier-fournisseur-routing.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/comerce/fournisseur/modifier-fournisseur/modifier-fournisseur-routing.module.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ModifierFournisseurRoutingModule */

  /***/
  function srcAppComerceFournisseurModifierFournisseurModifierFournisseurRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifierFournisseurRoutingModule", function () {
      return ModifierFournisseurRoutingModule;
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


    var _modifier_fournisseur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modifier-fournisseur.component */
    "./src/app/comerce/fournisseur/modifier-fournisseur/modifier-fournisseur.component.ts");

    var routes = [{
      path: '',
      component: _modifier_fournisseur_component__WEBPACK_IMPORTED_MODULE_2__["ModifierFournisseurComponent"]
    }];

    var ModifierFournisseurRoutingModule = function ModifierFournisseurRoutingModule() {
      _classCallCheck(this, ModifierFournisseurRoutingModule);
    };

    ModifierFournisseurRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModifierFournisseurRoutingModule
    });
    ModifierFournisseurRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModifierFournisseurRoutingModule_Factory(t) {
        return new (t || ModifierFournisseurRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModifierFournisseurRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModifierFournisseurRoutingModule, [{
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
  "./src/app/comerce/fournisseur/modifier-fournisseur/modifier-fournisseur.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/comerce/fournisseur/modifier-fournisseur/modifier-fournisseur.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ModifierFournisseurModule */

  /***/
  function srcAppComerceFournisseurModifierFournisseurModifierFournisseurModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifierFournisseurModule", function () {
      return ModifierFournisseurModule;
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


    var _modifier_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modifier-fournisseur-routing.module */
    "./src/app/comerce/fournisseur/modifier-fournisseur/modifier-fournisseur-routing.module.ts");

    var ModifierFournisseurModule = function ModifierFournisseurModule() {
      _classCallCheck(this, ModifierFournisseurModule);
    };

    ModifierFournisseurModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModifierFournisseurModule
    });
    ModifierFournisseurModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModifierFournisseurModule_Factory(t) {
        return new (t || ModifierFournisseurModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modifier_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__["ModifierFournisseurRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModifierFournisseurModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modifier_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__["ModifierFournisseurRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModifierFournisseurModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _modifier_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_2__["ModifierFournisseurRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modifier-fournisseur-modifier-fournisseur-module-es5.js.map