function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-charge-societe-charge-societe-module"], {
  /***/
  "./src/app/comerce/charge-societe/charge-societe-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/comerce/charge-societe/charge-societe-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ChargeSocieteRoutingModule */

  /***/
  function srcAppComerceChargeSocieteChargeSocieteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChargeSocieteRoutingModule", function () {
      return ChargeSocieteRoutingModule;
    });
    /* harmony import */


    var _list_charge_societe_list_charge_societe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./list-charge-societe/list-charge-societe.component */
    "./src/app/comerce/charge-societe/list-charge-societe/list-charge-societe.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _modifier_charge_societe_modifier_charge_societe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modifier-charge-societe/modifier-charge-societe.component */
    "./src/app/comerce/charge-societe/modifier-charge-societe/modifier-charge-societe.component.ts");
    /* harmony import */


    var _ajout_charge_societe_ajout_charge_societe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ajout-charge-societe/ajout-charge-societe.component */
    "./src/app/comerce/charge-societe/ajout-charge-societe/ajout-charge-societe.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_charge_societe_list_charge_societe_component__WEBPACK_IMPORTED_MODULE_0__["ListChargeSocieteComponent"]
      }, {
        path: 'ajout',
        component: _ajout_charge_societe_ajout_charge_societe_component__WEBPACK_IMPORTED_MODULE_4__["AjoutChargeSocieteComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_charge_societe_modifier_charge_societe_component__WEBPACK_IMPORTED_MODULE_3__["ModifierChargeSocieteComponent"]
      }]
    }];

    var ChargeSocieteRoutingModule = function ChargeSocieteRoutingModule() {
      _classCallCheck(this, ChargeSocieteRoutingModule);
    };

    ChargeSocieteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ChargeSocieteRoutingModule
    });
    ChargeSocieteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ChargeSocieteRoutingModule_Factory(t) {
        return new (t || ChargeSocieteRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChargeSocieteRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChargeSocieteRoutingModule, [{
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
  "./src/app/comerce/charge-societe/charge-societe.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/comerce/charge-societe/charge-societe.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ChargeSocieteModule */

  /***/
  function srcAppComerceChargeSocieteChargeSocieteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChargeSocieteModule", function () {
      return ChargeSocieteModule;
    });
    /* harmony import */


    var _charge_societe_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./charge-societe-routing.module */
    "./src/app/comerce/charge-societe/charge-societe-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ChargeSocieteModule = function ChargeSocieteModule() {
      _classCallCheck(this, ChargeSocieteModule);
    };

    ChargeSocieteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ChargeSocieteModule
    });
    ChargeSocieteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ChargeSocieteModule_Factory(t) {
        return new (t || ChargeSocieteModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _charge_societe_routing_module__WEBPACK_IMPORTED_MODULE_0__["ChargeSocieteRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChargeSocieteModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _charge_societe_routing_module__WEBPACK_IMPORTED_MODULE_0__["ChargeSocieteRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChargeSocieteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _charge_societe_routing_module__WEBPACK_IMPORTED_MODULE_0__["ChargeSocieteRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-charge-societe-charge-societe-module-es5.js.map