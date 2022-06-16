function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-devis-devis-module"], {
  /***/
  "./src/app/comerce/devis/devis-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/comerce/devis/devis-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DevisRoutingModule */

  /***/
  function srcAppComerceDevisDevisRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevisRoutingModule", function () {
      return DevisRoutingModule;
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


    var _list_devis_list_devis_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list-devis/list-devis.component */
    "./src/app/comerce/devis/list-devis/list-devis.component.ts");
    /* harmony import */


    var _ajout_devis_ajout_devis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ajout-devis/ajout-devis.component */
    "./src/app/comerce/devis/ajout-devis/ajout-devis.component.ts");
    /* harmony import */


    var _modifier_devis_modifier_devis_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modifier-devis/modifier-devis.component */
    "./src/app/comerce/devis/modifier-devis/modifier-devis.component.ts");
    /* harmony import */


    var _details_devis_details_devis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details-devis/details-devis.component */
    "./src/app/comerce/devis/details-devis/details-devis.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_devis_list_devis_component__WEBPACK_IMPORTED_MODULE_2__["ListDevisComponent"]
      }, {
        path: 'ajout',
        component: _ajout_devis_ajout_devis_component__WEBPACK_IMPORTED_MODULE_3__["AjoutDevisComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_devis_modifier_devis_component__WEBPACK_IMPORTED_MODULE_4__["ModifierDevisComponent"]
      }, {
        path: 'details/:id',
        component: _details_devis_details_devis_component__WEBPACK_IMPORTED_MODULE_5__["DetailsDevisComponent"]
      }]
    }];

    var DevisRoutingModule = function DevisRoutingModule() {
      _classCallCheck(this, DevisRoutingModule);
    };

    DevisRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DevisRoutingModule
    });
    DevisRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DevisRoutingModule_Factory(t) {
        return new (t || DevisRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DevisRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevisRoutingModule, [{
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
  "./src/app/comerce/devis/devis.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/comerce/devis/devis.module.ts ***!
    \***********************************************/

  /*! exports provided: DevisModule */

  /***/
  function srcAppComerceDevisDevisModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevisModule", function () {
      return DevisModule;
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


    var _devis_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./devis-routing.module */
    "./src/app/comerce/devis/devis-routing.module.ts");

    var DevisModule = function DevisModule() {
      _classCallCheck(this, DevisModule);
    };

    DevisModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DevisModule
    });
    DevisModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DevisModule_Factory(t) {
        return new (t || DevisModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _devis_routing_module__WEBPACK_IMPORTED_MODULE_2__["DevisRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DevisModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _devis_routing_module__WEBPACK_IMPORTED_MODULE_2__["DevisRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevisModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _devis_routing_module__WEBPACK_IMPORTED_MODULE_2__["DevisRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-devis-devis-module-es5.js.map