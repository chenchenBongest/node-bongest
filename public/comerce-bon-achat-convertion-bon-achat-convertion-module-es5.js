function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-bon-achat-convertion-bon-achat-convertion-module"], {
  /***/
  "./src/app/comerce/bon-achat-convertion/bon-achat-convertion-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/comerce/bon-achat-convertion/bon-achat-convertion-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: BonAchatConvertionRoutingModule */

  /***/
  function srcAppComerceBonAchatConvertionBonAchatConvertionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonAchatConvertionRoutingModule", function () {
      return BonAchatConvertionRoutingModule;
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


    var _bon_achat_convertion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bon-achat-convertion.component */
    "./src/app/comerce/bon-achat-convertion/bon-achat-convertion.component.ts");

    var routes = [{
      path: '',
      component: _bon_achat_convertion_component__WEBPACK_IMPORTED_MODULE_2__["BonAchatConvertionComponent"]
    }];

    var BonAchatConvertionRoutingModule = function BonAchatConvertionRoutingModule() {
      _classCallCheck(this, BonAchatConvertionRoutingModule);
    };

    BonAchatConvertionRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BonAchatConvertionRoutingModule
    });
    BonAchatConvertionRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BonAchatConvertionRoutingModule_Factory(t) {
        return new (t || BonAchatConvertionRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BonAchatConvertionRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BonAchatConvertionRoutingModule, [{
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
  "./src/app/comerce/bon-achat-convertion/bon-achat-convertion.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/comerce/bon-achat-convertion/bon-achat-convertion.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: BonAchatConvertionModule */

  /***/
  function srcAppComerceBonAchatConvertionBonAchatConvertionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonAchatConvertionModule", function () {
      return BonAchatConvertionModule;
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


    var _bon_achat_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bon-achat-convertion-routing.module */
    "./src/app/comerce/bon-achat-convertion/bon-achat-convertion-routing.module.ts");

    var BonAchatConvertionModule = function BonAchatConvertionModule() {
      _classCallCheck(this, BonAchatConvertionModule);
    };

    BonAchatConvertionModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BonAchatConvertionModule
    });
    BonAchatConvertionModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BonAchatConvertionModule_Factory(t) {
        return new (t || BonAchatConvertionModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bon_achat_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonAchatConvertionRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BonAchatConvertionModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bon_achat_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonAchatConvertionRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BonAchatConvertionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bon_achat_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonAchatConvertionRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-bon-achat-convertion-bon-achat-convertion-module-es5.js.map