function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-bon-retour-client-convertion-bon-retour-client-convertion-module"], {
  /***/
  "./src/app/comerce/bon-retour-client-convertion/bon-retour-client-convertion-routing.module.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/comerce/bon-retour-client-convertion/bon-retour-client-convertion-routing.module.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: BonRetourClientConvertionRoutingModule */

  /***/
  function srcAppComerceBonRetourClientConvertionBonRetourClientConvertionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonRetourClientConvertionRoutingModule", function () {
      return BonRetourClientConvertionRoutingModule;
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


    var _bon_retour_client_convertion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bon-retour-client-convertion.component */
    "./src/app/comerce/bon-retour-client-convertion/bon-retour-client-convertion.component.ts");

    var routes = [{
      path: '',
      component: _bon_retour_client_convertion_component__WEBPACK_IMPORTED_MODULE_2__["BonRetourClientConvertionComponent"]
    }];

    var BonRetourClientConvertionRoutingModule = function BonRetourClientConvertionRoutingModule() {
      _classCallCheck(this, BonRetourClientConvertionRoutingModule);
    };

    BonRetourClientConvertionRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BonRetourClientConvertionRoutingModule
    });
    BonRetourClientConvertionRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BonRetourClientConvertionRoutingModule_Factory(t) {
        return new (t || BonRetourClientConvertionRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BonRetourClientConvertionRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BonRetourClientConvertionRoutingModule, [{
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
  "./src/app/comerce/bon-retour-client-convertion/bon-retour-client-convertion.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/comerce/bon-retour-client-convertion/bon-retour-client-convertion.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: BonRetourClientConvertionModule */

  /***/
  function srcAppComerceBonRetourClientConvertionBonRetourClientConvertionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonRetourClientConvertionModule", function () {
      return BonRetourClientConvertionModule;
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


    var _bon_retour_client_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bon-retour-client-convertion-routing.module */
    "./src/app/comerce/bon-retour-client-convertion/bon-retour-client-convertion-routing.module.ts");

    var BonRetourClientConvertionModule = function BonRetourClientConvertionModule() {
      _classCallCheck(this, BonRetourClientConvertionModule);
    };

    BonRetourClientConvertionModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BonRetourClientConvertionModule
    });
    BonRetourClientConvertionModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BonRetourClientConvertionModule_Factory(t) {
        return new (t || BonRetourClientConvertionModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bon_retour_client_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonRetourClientConvertionRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BonRetourClientConvertionModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bon_retour_client_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonRetourClientConvertionRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BonRetourClientConvertionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bon_retour_client_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonRetourClientConvertionRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-bon-retour-client-convertion-bon-retour-client-convertion-module-es5.js.map