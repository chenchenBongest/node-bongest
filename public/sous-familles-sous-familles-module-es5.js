function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sous-familles-sous-familles-module"], {
  /***/
  "./src/app/comerce/variables/sous-familles/sous-familles-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/comerce/variables/sous-familles/sous-familles-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: SousFamillesRoutingModule */

  /***/
  function srcAppComerceVariablesSousFamillesSousFamillesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SousFamillesRoutingModule", function () {
      return SousFamillesRoutingModule;
    });
    /* harmony import */


    var _details_sous_familles_details_sous_familles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./details-sous-familles/details-sous-familles.component */
    "./src/app/comerce/variables/sous-familles/details-sous-familles/details-sous-familles.component.ts");
    /* harmony import */


    var _modifier_sous_familles_modifier_sous_familles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modifier-sous-familles/modifier-sous-familles.component */
    "./src/app/comerce/variables/sous-familles/modifier-sous-familles/modifier-sous-familles.component.ts");
    /* harmony import */


    var _ajout_sous_familles_ajout_sous_familles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajout-sous-familles/ajout-sous-familles.component */
    "./src/app/comerce/variables/sous-familles/ajout-sous-familles/ajout-sous-familles.component.ts");
    /* harmony import */


    var _list_sous_familles_list_sous_familles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-sous-familles/list-sous-familles.component */
    "./src/app/comerce/variables/sous-familles/list-sous-familles/list-sous-familles.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_sous_familles_list_sous_familles_component__WEBPACK_IMPORTED_MODULE_3__["ListSousFamillesComponent"]
      }, {
        path: 'ajout',
        component: _ajout_sous_familles_ajout_sous_familles_component__WEBPACK_IMPORTED_MODULE_2__["AjoutSousFamillesComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_sous_familles_modifier_sous_familles_component__WEBPACK_IMPORTED_MODULE_1__["ModifierSousFamillesComponent"]
      }, {
        path: 'details/:id',
        component: _details_sous_familles_details_sous_familles_component__WEBPACK_IMPORTED_MODULE_0__["DetailsSousFamillesComponent"]
      }]
    }];

    var SousFamillesRoutingModule = function SousFamillesRoutingModule() {
      _classCallCheck(this, SousFamillesRoutingModule);
    };

    SousFamillesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: SousFamillesRoutingModule
    });
    SousFamillesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function SousFamillesRoutingModule_Factory(t) {
        return new (t || SousFamillesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SousFamillesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](SousFamillesRoutingModule, [{
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
  "./src/app/comerce/variables/sous-familles/sous-familles.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/comerce/variables/sous-familles/sous-familles.module.ts ***!
    \*************************************************************************/

  /*! exports provided: SousFamillesModule */

  /***/
  function srcAppComerceVariablesSousFamillesSousFamillesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SousFamillesModule", function () {
      return SousFamillesModule;
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


    var _sous_familles_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sous-familles-routing.module */
    "./src/app/comerce/variables/sous-familles/sous-familles-routing.module.ts");
    /* harmony import */


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var SousFamillesModule = function SousFamillesModule() {
      _classCallCheck(this, SousFamillesModule);
    };

    SousFamillesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SousFamillesModule
    });
    SousFamillesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SousFamillesModule_Factory(t) {
        return new (t || SousFamillesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sous_familles_routing_module__WEBPACK_IMPORTED_MODULE_2__["SousFamillesRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SousFamillesModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sous_familles_routing_module__WEBPACK_IMPORTED_MODULE_2__["SousFamillesRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SousFamillesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sous_familles_routing_module__WEBPACK_IMPORTED_MODULE_2__["SousFamillesRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=sous-familles-sous-familles-module-es5.js.map