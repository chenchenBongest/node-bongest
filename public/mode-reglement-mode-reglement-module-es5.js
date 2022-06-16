function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mode-reglement-mode-reglement-module"], {
  /***/
  "./src/app/comerce/parametres/mode-reglement/mode-reglement-routing.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/comerce/parametres/mode-reglement/mode-reglement-routing.module.ts ***!
    \************************************************************************************/

  /*! exports provided: ModeReglementRoutingModule */

  /***/
  function srcAppComerceParametresModeReglementModeReglementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModeReglementRoutingModule", function () {
      return ModeReglementRoutingModule;
    });
    /* harmony import */


    var _details_mode_reglement_details_mode_reglement_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./details-mode-reglement/details-mode-reglement.component */
    "./src/app/comerce/parametres/mode-reglement/details-mode-reglement/details-mode-reglement.component.ts");
    /* harmony import */


    var _modifier_mode_reglement_modifier_mode_reglement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modifier-mode-reglement/modifier-mode-reglement.component */
    "./src/app/comerce/parametres/mode-reglement/modifier-mode-reglement/modifier-mode-reglement.component.ts");
    /* harmony import */


    var _ajout_mode_reglement_ajout_mode_reglement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajout-mode-reglement/ajout-mode-reglement.component */
    "./src/app/comerce/parametres/mode-reglement/ajout-mode-reglement/ajout-mode-reglement.component.ts");
    /* harmony import */


    var _list_mode_reglement_list_mode_reglement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-mode-reglement/list-mode-reglement.component */
    "./src/app/comerce/parametres/mode-reglement/list-mode-reglement/list-mode-reglement.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _situation_reglement_list_situation_reglement_list_situation_reglement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./situation-reglement/list-situation-reglement/list-situation-reglement.component */
    "./src/app/comerce/parametres/mode-reglement/situation-reglement/list-situation-reglement/list-situation-reglement.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_mode_reglement_list_mode_reglement_component__WEBPACK_IMPORTED_MODULE_3__["ListModeReglementComponent"]
      }, {
        path: 'ajout',
        component: _ajout_mode_reglement_ajout_mode_reglement_component__WEBPACK_IMPORTED_MODULE_2__["AjoutModeReglementComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_mode_reglement_modifier_mode_reglement_component__WEBPACK_IMPORTED_MODULE_1__["ModifierModeReglementComponent"]
      }, {
        path: 'details/:id',
        component: _details_mode_reglement_details_mode_reglement_component__WEBPACK_IMPORTED_MODULE_0__["DetailsModeReglementComponent"]
      }, {
        path: 'situationReg',
        component: _situation_reglement_list_situation_reglement_list_situation_reglement_component__WEBPACK_IMPORTED_MODULE_6__["ListSituationReglementComponent"]
      }]
    }];

    var ModeReglementRoutingModule = function ModeReglementRoutingModule() {
      _classCallCheck(this, ModeReglementRoutingModule);
    };

    ModeReglementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: ModeReglementRoutingModule
    });
    ModeReglementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function ModeReglementRoutingModule_Factory(t) {
        return new (t || ModeReglementRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ModeReglementRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ModeReglementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/comerce/parametres/mode-reglement/mode-reglement.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/comerce/parametres/mode-reglement/mode-reglement.module.ts ***!
    \****************************************************************************/

  /*! exports provided: ModeReglementModule */

  /***/
  function srcAppComerceParametresModeReglementModeReglementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModeReglementModule", function () {
      return ModeReglementModule;
    });
    /* harmony import */


    var _mode_reglement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./mode-reglement-routing.module */
    "./src/app/comerce/parametres/mode-reglement/mode-reglement-routing.module.ts");
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

    var ModeReglementModule = function ModeReglementModule() {
      _classCallCheck(this, ModeReglementModule);
    };

    ModeReglementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ModeReglementModule
    });
    ModeReglementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ModeReglementModule_Factory(t) {
        return new (t || ModeReglementModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _mode_reglement_routing_module__WEBPACK_IMPORTED_MODULE_0__["ModeReglementRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModeReglementModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _mode_reglement_routing_module__WEBPACK_IMPORTED_MODULE_0__["ModeReglementRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModeReglementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _mode_reglement_routing_module__WEBPACK_IMPORTED_MODULE_0__["ModeReglementRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=mode-reglement-mode-reglement-module-es5.js.map