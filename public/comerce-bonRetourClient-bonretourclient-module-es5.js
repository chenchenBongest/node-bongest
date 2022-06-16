function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-bonRetourClient-bonretourclient-module"], {
  /***/
  "./src/app/comerce/bonRetourClient/bonretourclient-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/comerce/bonRetourClient/bonretourclient-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: BonretourclientRoutingModule */

  /***/
  function srcAppComerceBonRetourClientBonretourclientRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonretourclientRoutingModule", function () {
      return BonretourclientRoutingModule;
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


    var _list_bon_retour_client_list_bon_retour_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list-bon-retour-client/list-bon-retour-client.component */
    "./src/app/comerce/bonRetourClient/list-bon-retour-client/list-bon-retour-client.component.ts");
    /* harmony import */


    var _ajout_bon_retour_client_ajout_bon_retour_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ajout-bon-retour-client/ajout-bon-retour-client.component */
    "./src/app/comerce/bonRetourClient/ajout-bon-retour-client/ajout-bon-retour-client.component.ts");
    /* harmony import */


    var _modifier_bon_retour_client_modifier_bon_retour_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modifier-bon-retour-client/modifier-bon-retour-client.component */
    "./src/app/comerce/bonRetourClient/modifier-bon-retour-client/modifier-bon-retour-client.component.ts");
    /* harmony import */


    var _details_bon_retour_client_details_bon_retour_client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details-bon-retour-client/details-bon-retour-client.component */
    "./src/app/comerce/bonRetourClient/details-bon-retour-client/details-bon-retour-client.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_bon_retour_client_list_bon_retour_client_component__WEBPACK_IMPORTED_MODULE_2__["ListBonRetourClientComponent"]
      }, {
        path: 'ajout',
        component: _ajout_bon_retour_client_ajout_bon_retour_client_component__WEBPACK_IMPORTED_MODULE_3__["AjoutBonRetourClientComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_bon_retour_client_modifier_bon_retour_client_component__WEBPACK_IMPORTED_MODULE_4__["ModifierBonRetourClientComponent"]
      }, {
        path: 'details/:id',
        component: _details_bon_retour_client_details_bon_retour_client_component__WEBPACK_IMPORTED_MODULE_5__["DetailsBonRetourClientComponent"]
      }]
    }];

    var BonretourclientRoutingModule = function BonretourclientRoutingModule() {
      _classCallCheck(this, BonretourclientRoutingModule);
    };

    BonretourclientRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BonretourclientRoutingModule
    });
    BonretourclientRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BonretourclientRoutingModule_Factory(t) {
        return new (t || BonretourclientRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonretourclientRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonretourclientRoutingModule, [{
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
  "./src/app/comerce/bonRetourClient/bonretourclient.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/comerce/bonRetourClient/bonretourclient.module.ts ***!
    \*******************************************************************/

  /*! exports provided: BonretourclientModule */

  /***/
  function srcAppComerceBonRetourClientBonretourclientModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonretourclientModule", function () {
      return BonretourclientModule;
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


    var _bonretourclient_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bonretourclient-routing.module */
    "./src/app/comerce/bonRetourClient/bonretourclient-routing.module.ts");

    var BonretourclientModule = function BonretourclientModule() {
      _classCallCheck(this, BonretourclientModule);
    };

    BonretourclientModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BonretourclientModule
    });
    BonretourclientModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BonretourclientModule_Factory(t) {
        return new (t || BonretourclientModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bonretourclient_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonretourclientRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonretourclientModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bonretourclient_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonretourclientRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonretourclientModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bonretourclient_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonretourclientRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-bonRetourClient-bonretourclient-module-es5.js.map