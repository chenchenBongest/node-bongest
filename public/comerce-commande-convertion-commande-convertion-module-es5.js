function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-commande-convertion-commande-convertion-module"], {
  /***/
  "./src/app/comerce/commande-convertion/commande-convertion-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/comerce/commande-convertion/commande-convertion-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: CommandeConvertionRoutingModule */

  /***/
  function srcAppComerceCommandeConvertionCommandeConvertionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommandeConvertionRoutingModule", function () {
      return CommandeConvertionRoutingModule;
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


    var _commande_convertion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./commande-convertion.component */
    "./src/app/comerce/commande-convertion/commande-convertion.component.ts");

    var routes = [{
      path: '',
      component: _commande_convertion_component__WEBPACK_IMPORTED_MODULE_2__["CommandeConvertionComponent"]
    }];

    var CommandeConvertionRoutingModule = function CommandeConvertionRoutingModule() {
      _classCallCheck(this, CommandeConvertionRoutingModule);
    };

    CommandeConvertionRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: CommandeConvertionRoutingModule
    });
    CommandeConvertionRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function CommandeConvertionRoutingModule_Factory(t) {
        return new (t || CommandeConvertionRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CommandeConvertionRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CommandeConvertionRoutingModule, [{
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
  "./src/app/comerce/commande-convertion/commande-convertion.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/comerce/commande-convertion/commande-convertion.module.ts ***!
    \***************************************************************************/

  /*! exports provided: CommandeConvertionModule */

  /***/
  function srcAppComerceCommandeConvertionCommandeConvertionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommandeConvertionModule", function () {
      return CommandeConvertionModule;
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


    var _commande_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./commande-convertion-routing.module */
    "./src/app/comerce/commande-convertion/commande-convertion-routing.module.ts");

    var CommandeConvertionModule = function CommandeConvertionModule() {
      _classCallCheck(this, CommandeConvertionModule);
    };

    CommandeConvertionModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: CommandeConvertionModule
    });
    CommandeConvertionModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function CommandeConvertionModule_Factory(t) {
        return new (t || CommandeConvertionModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _commande_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommandeConvertionRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CommandeConvertionModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _commande_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommandeConvertionRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CommandeConvertionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _commande_convertion_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommandeConvertionRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-commande-convertion-commande-convertion-module-es5.js.map