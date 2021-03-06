function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-bonAchat-bonachat-module"], {
  /***/
  "./src/app/comerce/bonAchat/bonachat-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/comerce/bonAchat/bonachat-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: BonachatRoutingModule */

  /***/
  function srcAppComerceBonAchatBonachatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonachatRoutingModule", function () {
      return BonachatRoutingModule;
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


    var _list_bon_achat_list_bon_achat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list-bon-achat/list-bon-achat.component */
    "./src/app/comerce/bonAchat/list-bon-achat/list-bon-achat.component.ts");
    /* harmony import */


    var _ajout_bon_achat_ajout_bon_achat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ajout-bon-achat/ajout-bon-achat.component */
    "./src/app/comerce/bonAchat/ajout-bon-achat/ajout-bon-achat.component.ts");
    /* harmony import */


    var _modifier_bon_achat_modifier_bon_achat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modifier-bon-achat/modifier-bon-achat.component */
    "./src/app/comerce/bonAchat/modifier-bon-achat/modifier-bon-achat.component.ts");
    /* harmony import */


    var _details_bon_achat_details_bon_achat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details-bon-achat/details-bon-achat.component */
    "./src/app/comerce/bonAchat/details-bon-achat/details-bon-achat.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_bon_achat_list_bon_achat_component__WEBPACK_IMPORTED_MODULE_2__["ListBonAchatComponent"]
      }, {
        path: 'ajout',
        component: _ajout_bon_achat_ajout_bon_achat_component__WEBPACK_IMPORTED_MODULE_3__["AjoutBonAchatComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_bon_achat_modifier_bon_achat_component__WEBPACK_IMPORTED_MODULE_4__["ModifierBonAchatComponent"]
      }, {
        path: 'details/:id',
        component: _details_bon_achat_details_bon_achat_component__WEBPACK_IMPORTED_MODULE_5__["DetailsBonAchatComponent"]
      }]
    }];

    var BonachatRoutingModule = function BonachatRoutingModule() {
      _classCallCheck(this, BonachatRoutingModule);
    };

    BonachatRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BonachatRoutingModule
    });
    BonachatRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BonachatRoutingModule_Factory(t) {
        return new (t || BonachatRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BonachatRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BonachatRoutingModule, [{
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
  "./src/app/comerce/bonAchat/bonachat.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/comerce/bonAchat/bonachat.module.ts ***!
    \*****************************************************/

  /*! exports provided: BonachatModule */

  /***/
  function srcAppComerceBonAchatBonachatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonachatModule", function () {
      return BonachatModule;
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


    var _bonachat_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bonachat-routing.module */
    "./src/app/comerce/bonAchat/bonachat-routing.module.ts");

    var BonachatModule = function BonachatModule() {
      _classCallCheck(this, BonachatModule);
    };

    BonachatModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BonachatModule
    });
    BonachatModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BonachatModule_Factory(t) {
        return new (t || BonachatModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bonachat_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonachatRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BonachatModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bonachat_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonachatRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BonachatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bonachat_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonachatRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-bonAchat-bonachat-module-es5.js.map