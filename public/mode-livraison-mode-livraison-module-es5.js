function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mode-livraison-mode-livraison-module"], {
  /***/
  "./src/app/comerce/variables/mode-livraison/mode-livraison-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/comerce/variables/mode-livraison/mode-livraison-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ModeLivraisonRoutingModule */

  /***/
  function srcAppComerceVariablesModeLivraisonModeLivraisonRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModeLivraisonRoutingModule", function () {
      return ModeLivraisonRoutingModule;
    });
    /* harmony import */


    var _details_mode_livraison_details_mode_livraison_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./details-mode-livraison/details-mode-livraison.component */
    "./src/app/comerce/variables/mode-livraison/details-mode-livraison/details-mode-livraison.component.ts");
    /* harmony import */


    var _modifier_mode_livraison_modifier_mode_livraison_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modifier-mode-livraison/modifier-mode-livraison.component */
    "./src/app/comerce/variables/mode-livraison/modifier-mode-livraison/modifier-mode-livraison.component.ts");
    /* harmony import */


    var _list_mode_livraison_list_mode_livraison_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list-mode-livraison/list-mode-livraison.component */
    "./src/app/comerce/variables/mode-livraison/list-mode-livraison/list-mode-livraison.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ajout_mode_livraison_ajout_mode_livraison_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ajout-mode-livraison/ajout-mode-livraison.component */
    "./src/app/comerce/variables/mode-livraison/ajout-mode-livraison/ajout-mode-livraison.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_mode_livraison_list_mode_livraison_component__WEBPACK_IMPORTED_MODULE_2__["ListModeLivraisonComponent"]
      }, {
        path: 'ajout',
        component: _ajout_mode_livraison_ajout_mode_livraison_component__WEBPACK_IMPORTED_MODULE_5__["AjoutModeLivraisonComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_mode_livraison_modifier_mode_livraison_component__WEBPACK_IMPORTED_MODULE_1__["ModifierModeLivraisonComponent"]
      }, {
        path: 'details/:id',
        component: _details_mode_livraison_details_mode_livraison_component__WEBPACK_IMPORTED_MODULE_0__["DetailsModeLivraisonComponent"]
      }]
    }];

    var ModeLivraisonRoutingModule = function ModeLivraisonRoutingModule() {
      _classCallCheck(this, ModeLivraisonRoutingModule);
    };

    ModeLivraisonRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: ModeLivraisonRoutingModule
    });
    ModeLivraisonRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function ModeLivraisonRoutingModule_Factory(t) {
        return new (t || ModeLivraisonRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ModeLivraisonRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ModeLivraisonRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/comerce/variables/mode-livraison/mode-livraison.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/comerce/variables/mode-livraison/mode-livraison.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ModeLivraisonModule */

  /***/
  function srcAppComerceVariablesModeLivraisonModeLivraisonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModeLivraisonModule", function () {
      return ModeLivraisonModule;
    });
    /* harmony import */


    var _mode_livraison_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./mode-livraison-routing.module */
    "./src/app/comerce/variables/mode-livraison/mode-livraison-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var ModeLivraisonModule = function ModeLivraisonModule() {
      _classCallCheck(this, ModeLivraisonModule);
    };

    ModeLivraisonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ModeLivraisonModule
    });
    ModeLivraisonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ModeLivraisonModule_Factory(t) {
        return new (t || ModeLivraisonModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _mode_livraison_routing_module__WEBPACK_IMPORTED_MODULE_0__["ModeLivraisonRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModeLivraisonModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _mode_livraison_routing_module__WEBPACK_IMPORTED_MODULE_0__["ModeLivraisonRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModeLivraisonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _mode_livraison_routing_module__WEBPACK_IMPORTED_MODULE_0__["ModeLivraisonRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=mode-livraison-mode-livraison-module-es5.js.map