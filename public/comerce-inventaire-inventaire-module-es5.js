function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-inventaire-inventaire-module"], {
  /***/
  "./src/app/comerce/inventaire/inventaire-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/comerce/inventaire/inventaire-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: InventaireRoutingModule */

  /***/
  function srcAppComerceInventaireInventaireRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventaireRoutingModule", function () {
      return InventaireRoutingModule;
    });
    /* harmony import */


    var _ligne_inventaire_ligne_inventaire_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ligne-inventaire/ligne-inventaire.component */
    "./src/app/comerce/inventaire/ligne-inventaire/ligne-inventaire.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _list_inventaire_list_inventaire_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-inventaire/list-inventaire.component */
    "./src/app/comerce/inventaire/list-inventaire/list-inventaire.component.ts");
    /* harmony import */


    var _modifier_inventaire_modifier_inventaire_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modifier-inventaire/modifier-inventaire.component */
    "./src/app/comerce/inventaire/modifier-inventaire/modifier-inventaire.component.ts");
    /* harmony import */


    var _ajout_inventaire_ajout_inventaire_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ajout-inventaire/ajout-inventaire.component */
    "./src/app/comerce/inventaire/ajout-inventaire/ajout-inventaire.component.ts");
    /* harmony import */


    var _details_inventaire_details_inventaire_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./details-inventaire/details-inventaire.component */
    "./src/app/comerce/inventaire/details-inventaire/details-inventaire.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_inventaire_list_inventaire_component__WEBPACK_IMPORTED_MODULE_3__["ListInventaireComponent"]
      }, {
        path: 'ajout',
        component: _ajout_inventaire_ajout_inventaire_component__WEBPACK_IMPORTED_MODULE_5__["AjoutInventaireComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_inventaire_modifier_inventaire_component__WEBPACK_IMPORTED_MODULE_4__["ModifierInventaireComponent"]
      }, {
        path: 'ligneInventaire',
        component: _ligne_inventaire_ligne_inventaire_component__WEBPACK_IMPORTED_MODULE_0__["LigneInventaireComponent"]
      }, {
        path: 'details/:id',
        component: _details_inventaire_details_inventaire_component__WEBPACK_IMPORTED_MODULE_6__["DetailsInventaireComponent"]
      }]
    }];

    var InventaireRoutingModule = function InventaireRoutingModule() {
      _classCallCheck(this, InventaireRoutingModule);
    };

    InventaireRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: InventaireRoutingModule
    });
    InventaireRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function InventaireRoutingModule_Factory(t) {
        return new (t || InventaireRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InventaireRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InventaireRoutingModule, [{
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
  "./src/app/comerce/inventaire/inventaire.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/comerce/inventaire/inventaire.module.ts ***!
    \*********************************************************/

  /*! exports provided: InventaireModule */

  /***/
  function srcAppComerceInventaireInventaireModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventaireModule", function () {
      return InventaireModule;
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


    var _inventaire_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inventaire-routing.module */
    "./src/app/comerce/inventaire/inventaire-routing.module.ts");

    var InventaireModule = function InventaireModule() {
      _classCallCheck(this, InventaireModule);
    };

    InventaireModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InventaireModule
    });
    InventaireModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InventaireModule_Factory(t) {
        return new (t || InventaireModule)();
      },
      imports: [[src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _inventaire_routing_module__WEBPACK_IMPORTED_MODULE_3__["InventaireRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InventaireModule, {
        imports: [src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _inventaire_routing_module__WEBPACK_IMPORTED_MODULE_3__["InventaireRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventaireModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _inventaire_routing_module__WEBPACK_IMPORTED_MODULE_3__["InventaireRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-inventaire-inventaire-module-es5.js.map