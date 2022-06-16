function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-bon-reception-convertion-bon-reception-convertion-module"], {
  /***/
  "./src/app/comerce/bon-reception-convertion/bon-reception-convertion-routing.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/comerce/bon-reception-convertion/bon-reception-convertion-routing.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: BonReceptionConvertionRoutingModule */

  /***/
  function srcAppComerceBonReceptionConvertionBonReceptionConvertionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonReceptionConvertionRoutingModule", function () {
      return BonReceptionConvertionRoutingModule;
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


    var _bon_reception_convertion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bon-reception-convertion.component */
    "./src/app/comerce/bon-reception-convertion/bon-reception-convertion.component.ts");

    var routes = [{
      path: '',
      component: _bon_reception_convertion_component__WEBPACK_IMPORTED_MODULE_2__["BonReceptionConvertionComponent"]
    }];

    var BonReceptionConvertionRoutingModule = function BonReceptionConvertionRoutingModule() {
      _classCallCheck(this, BonReceptionConvertionRoutingModule);
    };

    BonReceptionConvertionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BonReceptionConvertionRoutingModule
    });
    BonReceptionConvertionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BonReceptionConvertionRoutingModule_Factory(t) {
        return new (t || BonReceptionConvertionRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonReceptionConvertionRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonReceptionConvertionRoutingModule, [{
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
  "./src/app/comerce/bon-reception-convertion/bon-reception-convertion.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/comerce/bon-reception-convertion/bon-reception-convertion.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: BonReceptionConvertionModule */

  /***/
  function srcAppComerceBonReceptionConvertionBonReceptionConvertionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonReceptionConvertionModule", function () {
      return BonReceptionConvertionModule;
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


    var _bon_reception_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bon-reception-convertion-routing.module */
    "./src/app/comerce/bon-reception-convertion/bon-reception-convertion-routing.module.ts");

    var BonReceptionConvertionModule = function BonReceptionConvertionModule() {
      _classCallCheck(this, BonReceptionConvertionModule);
    };

    BonReceptionConvertionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BonReceptionConvertionModule
    });
    BonReceptionConvertionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BonReceptionConvertionModule_Factory(t) {
        return new (t || BonReceptionConvertionModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bon_reception_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonReceptionConvertionRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonReceptionConvertionModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bon_reception_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonReceptionConvertionRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonReceptionConvertionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bon_reception_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonReceptionConvertionRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-bon-reception-convertion-bon-reception-convertion-module-es5.js.map