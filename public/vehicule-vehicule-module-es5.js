function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicule-vehicule-module"], {
  /***/
  "./src/app/GMAO/vehicule/vehicule-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/GMAO/vehicule/vehicule-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: VehiculeRoutingModule */

  /***/
  function srcAppGMAOVehiculeVehiculeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehiculeRoutingModule", function () {
      return VehiculeRoutingModule;
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


    var _vehicule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./vehicule.component */
    "./src/app/GMAO/vehicule/vehicule.component.ts");

    var routes = [{
      path: '',
      component: _vehicule_component__WEBPACK_IMPORTED_MODULE_2__["VehiculeComponent"]
    }];

    var VehiculeRoutingModule = function VehiculeRoutingModule() {
      _classCallCheck(this, VehiculeRoutingModule);
    };

    VehiculeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: VehiculeRoutingModule
    });
    VehiculeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function VehiculeRoutingModule_Factory(t) {
        return new (t || VehiculeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VehiculeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehiculeRoutingModule, [{
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
  "./src/app/GMAO/vehicule/vehicule.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/GMAO/vehicule/vehicule.module.ts ***!
    \**************************************************/

  /*! exports provided: VehiculeModule */

  /***/
  function srcAppGMAOVehiculeVehiculeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehiculeModule", function () {
      return VehiculeModule;
    });
    /* harmony import */


    var _vehicule_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./vehicule-routing.module */
    "./src/app/GMAO/vehicule/vehicule-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var VehiculeModule = function VehiculeModule() {
      _classCallCheck(this, VehiculeModule);
    };

    VehiculeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: VehiculeModule
    });
    VehiculeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function VehiculeModule_Factory(t) {
        return new (t || VehiculeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _vehicule_routing_module__WEBPACK_IMPORTED_MODULE_0__["VehiculeRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VehiculeModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _vehicule_routing_module__WEBPACK_IMPORTED_MODULE_0__["VehiculeRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VehiculeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _vehicule_routing_module__WEBPACK_IMPORTED_MODULE_0__["VehiculeRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=vehicule-vehicule-module-es5.js.map