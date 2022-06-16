function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plan-preventif-plan-preventif-module"], {
  /***/
  "./src/app/GMAO/plan-preventif/plan-preventif-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/GMAO/plan-preventif/plan-preventif-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: PlanPreventifRoutingModule */

  /***/
  function srcAppGMAOPlanPreventifPlanPreventifRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlanPreventifRoutingModule", function () {
      return PlanPreventifRoutingModule;
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


    var _ajout_plan_preventif_ajout_plan_preventif_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajout-plan-preventif/ajout-plan-preventif.component */
    "./src/app/GMAO/plan-preventif/ajout-plan-preventif/ajout-plan-preventif.component.ts");
    /* harmony import */


    var _alert_tache_alert_tache_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alert-tache/alert-tache.component */
    "./src/app/GMAO/plan-preventif/alert-tache/alert-tache.component.ts");
    /* harmony import */


    var _details_plan_preventif_details_plan_preventif_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details-plan-preventif/details-plan-preventif.component */
    "./src/app/GMAO/plan-preventif/details-plan-preventif/details-plan-preventif.component.ts");
    /* harmony import */


    var _list_plan_preventif_list_plan_preventif_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./list-plan-preventif/list-plan-preventif.component */
    "./src/app/GMAO/plan-preventif/list-plan-preventif/list-plan-preventif.component.ts");
    /* harmony import */


    var _modifier_plan_preventif_modifier_plan_preventif_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modifier-plan-preventif/modifier-plan-preventif.component */
    "./src/app/GMAO/plan-preventif/modifier-plan-preventif/modifier-plan-preventif.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_plan_preventif_list_plan_preventif_component__WEBPACK_IMPORTED_MODULE_5__["ListPlanPreventifComponent"]
      }, {
        path: 'ajout',
        component: _ajout_plan_preventif_ajout_plan_preventif_component__WEBPACK_IMPORTED_MODULE_2__["AjoutPlanPreventifComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_plan_preventif_modifier_plan_preventif_component__WEBPACK_IMPORTED_MODULE_6__["ModifierPlanPreventifComponent"]
      }, {
        path: 'details/:id',
        component: _details_plan_preventif_details_plan_preventif_component__WEBPACK_IMPORTED_MODULE_4__["DetailsPlanPreventifComponent"]
      }, {
        path: 'alerte',
        component: _alert_tache_alert_tache_component__WEBPACK_IMPORTED_MODULE_3__["AlertTacheComponent"]
      }]
    }];

    var PlanPreventifRoutingModule = function PlanPreventifRoutingModule() {
      _classCallCheck(this, PlanPreventifRoutingModule);
    };

    PlanPreventifRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PlanPreventifRoutingModule
    });
    PlanPreventifRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PlanPreventifRoutingModule_Factory(t) {
        return new (t || PlanPreventifRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlanPreventifRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanPreventifRoutingModule, [{
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
  "./src/app/GMAO/plan-preventif/plan-preventif.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/GMAO/plan-preventif/plan-preventif.module.ts ***!
    \**************************************************************/

  /*! exports provided: PlanPreventifModule */

  /***/
  function srcAppGMAOPlanPreventifPlanPreventifModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlanPreventifModule", function () {
      return PlanPreventifModule;
    });
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _plan_preventif_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./plan-preventif-routing.module */
    "./src/app/GMAO/plan-preventif/plan-preventif-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var PlanPreventifModule = function PlanPreventifModule() {
      _classCallCheck(this, PlanPreventifModule);
    };

    PlanPreventifModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: PlanPreventifModule
    });
    PlanPreventifModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function PlanPreventifModule_Factory(t) {
        return new (t || PlanPreventifModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _plan_preventif_routing_module__WEBPACK_IMPORTED_MODULE_1__["PlanPreventifRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PlanPreventifModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _plan_preventif_routing_module__WEBPACK_IMPORTED_MODULE_1__["PlanPreventifRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PlanPreventifModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _plan_preventif_routing_module__WEBPACK_IMPORTED_MODULE_1__["PlanPreventifRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=plan-preventif-plan-preventif-module-es5.js.map