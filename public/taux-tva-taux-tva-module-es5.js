function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taux-tva-taux-tva-module"], {
  /***/
  "./src/app/comerce/parametres/taux-tva/taux-tva-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/comerce/parametres/taux-tva/taux-tva-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: TauxTvaRoutingModule */

  /***/
  function srcAppComerceParametresTauxTvaTauxTvaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TauxTvaRoutingModule", function () {
      return TauxTvaRoutingModule;
    });
    /* harmony import */


    var _details_taux_tva_details_taux_tva_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./details-taux-tva/details-taux-tva.component */
    "./src/app/comerce/parametres/taux-tva/details-taux-tva/details-taux-tva.component.ts");
    /* harmony import */


    var _modifier_taux_tva_modifier_taux_tva_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modifier-taux-tva/modifier-taux-tva.component */
    "./src/app/comerce/parametres/taux-tva/modifier-taux-tva/modifier-taux-tva.component.ts");
    /* harmony import */


    var _ajout_taux_tva_ajout_taux_tva_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajout-taux-tva/ajout-taux-tva.component */
    "./src/app/comerce/parametres/taux-tva/ajout-taux-tva/ajout-taux-tva.component.ts");
    /* harmony import */


    var _list_taux_tva_list_taux_tva_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-taux-tva/list-taux-tva.component */
    "./src/app/comerce/parametres/taux-tva/list-taux-tva/list-taux-tva.component.ts");
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
        component: _list_taux_tva_list_taux_tva_component__WEBPACK_IMPORTED_MODULE_3__["ListTauxTvaComponent"]
      }, {
        path: 'ajout',
        component: _ajout_taux_tva_ajout_taux_tva_component__WEBPACK_IMPORTED_MODULE_2__["AjoutTauxTvaComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_taux_tva_modifier_taux_tva_component__WEBPACK_IMPORTED_MODULE_1__["ModifierTauxTvaComponent"]
      }, {
        path: 'details/:id',
        component: _details_taux_tva_details_taux_tva_component__WEBPACK_IMPORTED_MODULE_0__["DetailsTauxTvaComponent"]
      }]
    }];

    var TauxTvaRoutingModule = function TauxTvaRoutingModule() {
      _classCallCheck(this, TauxTvaRoutingModule);
    };

    TauxTvaRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
      type: TauxTvaRoutingModule
    });
    TauxTvaRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
      factory: function TauxTvaRoutingModule_Factory(t) {
        return new (t || TauxTvaRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](TauxTvaRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["??setClassMetadata"](TauxTvaRoutingModule, [{
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
  "./src/app/comerce/parametres/taux-tva/taux-tva.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/comerce/parametres/taux-tva/taux-tva.module.ts ***!
    \****************************************************************/

  /*! exports provided: TauxTvaModule */

  /***/
  function srcAppComerceParametresTauxTvaTauxTvaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TauxTvaModule", function () {
      return TauxTvaModule;
    });
    /* harmony import */


    var _taux_tva_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./taux-tva-routing.module */
    "./src/app/comerce/parametres/taux-tva/taux-tva-routing.module.ts");
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

    var TauxTvaModule = function TauxTvaModule() {
      _classCallCheck(this, TauxTvaModule);
    };

    TauxTvaModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: TauxTvaModule
    });
    TauxTvaModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function TauxTvaModule_Factory(t) {
        return new (t || TauxTvaModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _taux_tva_routing_module__WEBPACK_IMPORTED_MODULE_0__["TauxTvaRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](TauxTvaModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _taux_tva_routing_module__WEBPACK_IMPORTED_MODULE_0__["TauxTvaRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](TauxTvaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _taux_tva_routing_module__WEBPACK_IMPORTED_MODULE_0__["TauxTvaRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=taux-tva-taux-tva-module-es5.js.map