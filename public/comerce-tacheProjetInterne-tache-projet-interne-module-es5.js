function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-tacheProjetInterne-tache-projet-interne-module"], {
  /***/
  "./src/app/comerce/tacheProjetInterne/tache-projet-interne-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/comerce/tacheProjetInterne/tache-projet-interne-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: TacheProjetInterneRoutingModule */

  /***/
  function srcAppComerceTacheProjetInterneTacheProjetInterneRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TacheProjetInterneRoutingModule", function () {
      return TacheProjetInterneRoutingModule;
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


    var _list_tache_projet_interne_list_tache_projet_interne_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list-tache-projet-interne/list-tache-projet-interne.component */
    "./src/app/comerce/tacheProjetInterne/list-tache-projet-interne/list-tache-projet-interne.component.ts");
    /* harmony import */


    var _ajout_tache_projet_interne_ajout_tache_projet_interne_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ajout-tache-projet-interne/ajout-tache-projet-interne.component */
    "./src/app/comerce/tacheProjetInterne/ajout-tache-projet-interne/ajout-tache-projet-interne.component.ts");
    /* harmony import */


    var _modifier_tache_projet_interne_modifier_tache_projet_interne_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modifier-tache-projet-interne/modifier-tache-projet-interne.component */
    "./src/app/comerce/tacheProjetInterne/modifier-tache-projet-interne/modifier-tache-projet-interne.component.ts");
    /* harmony import */


    var _details_tache_projet_interne_details_tache_projet_interne_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details-tache-projet-interne/details-tache-projet-interne.component */
    "./src/app/comerce/tacheProjetInterne/details-tache-projet-interne/details-tache-projet-interne.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_tache_projet_interne_list_tache_projet_interne_component__WEBPACK_IMPORTED_MODULE_2__["ListTacheProjetInterneComponent"]
      }, {
        path: 'ajout',
        component: _ajout_tache_projet_interne_ajout_tache_projet_interne_component__WEBPACK_IMPORTED_MODULE_3__["AjoutTacheProjetInterneComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_tache_projet_interne_modifier_tache_projet_interne_component__WEBPACK_IMPORTED_MODULE_4__["ModifierTacheProjetInterneComponent"]
      }, {
        path: 'details/:id',
        component: _details_tache_projet_interne_details_tache_projet_interne_component__WEBPACK_IMPORTED_MODULE_5__["DetailsTacheProjetInterneComponent"]
      }]
    }];

    var TacheProjetInterneRoutingModule = function TacheProjetInterneRoutingModule() {
      _classCallCheck(this, TacheProjetInterneRoutingModule);
    };

    TacheProjetInterneRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TacheProjetInterneRoutingModule
    });
    TacheProjetInterneRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TacheProjetInterneRoutingModule_Factory(t) {
        return new (t || TacheProjetInterneRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TacheProjetInterneRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TacheProjetInterneRoutingModule, [{
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
  "./src/app/comerce/tacheProjetInterne/tache-projet-interne.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/comerce/tacheProjetInterne/tache-projet-interne.module.ts ***!
    \***************************************************************************/

  /*! exports provided: TacheProjetInterneModule */

  /***/
  function srcAppComerceTacheProjetInterneTacheProjetInterneModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TacheProjetInterneModule", function () {
      return TacheProjetInterneModule;
    });
    /* harmony import */


    var _tache_projet_interne_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tache-projet-interne-routing.module */
    "./src/app/comerce/tacheProjetInterne/tache-projet-interne-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var TacheProjetInterneModule = function TacheProjetInterneModule() {
      _classCallCheck(this, TacheProjetInterneModule);
    };

    TacheProjetInterneModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TacheProjetInterneModule
    });
    TacheProjetInterneModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function TacheProjetInterneModule_Factory(t) {
        return new (t || TacheProjetInterneModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _tache_projet_interne_routing_module__WEBPACK_IMPORTED_MODULE_0__["TacheProjetInterneRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TacheProjetInterneModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _tache_projet_interne_routing_module__WEBPACK_IMPORTED_MODULE_0__["TacheProjetInterneRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TacheProjetInterneModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _tache_projet_interne_routing_module__WEBPACK_IMPORTED_MODULE_0__["TacheProjetInterneRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-tacheProjetInterne-tache-projet-interne-module-es5.js.map