function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-bonReception-bonreception-module"], {
  /***/
  "./src/app/comerce/bonReception/bonreception-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/comerce/bonReception/bonreception-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: BonreceptionRoutingModule */

  /***/
  function srcAppComerceBonReceptionBonreceptionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonreceptionRoutingModule", function () {
      return BonreceptionRoutingModule;
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


    var _list_bon_reception_list_bon_reception_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list-bon-reception/list-bon-reception.component */
    "./src/app/comerce/bonReception/list-bon-reception/list-bon-reception.component.ts");
    /* harmony import */


    var _ajout_bon_reception_ajout_bon_reception_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ajout-bon-reception/ajout-bon-reception.component */
    "./src/app/comerce/bonReception/ajout-bon-reception/ajout-bon-reception.component.ts");
    /* harmony import */


    var _modifier_bon_reception_modifier_bon_reception_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modifier-bon-reception/modifier-bon-reception.component */
    "./src/app/comerce/bonReception/modifier-bon-reception/modifier-bon-reception.component.ts");
    /* harmony import */


    var _details_bon_reception_details_bon_reception_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details-bon-reception/details-bon-reception.component */
    "./src/app/comerce/bonReception/details-bon-reception/details-bon-reception.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_bon_reception_list_bon_reception_component__WEBPACK_IMPORTED_MODULE_2__["ListBonReceptionComponent"]
      }, {
        path: 'ajout',
        component: _ajout_bon_reception_ajout_bon_reception_component__WEBPACK_IMPORTED_MODULE_3__["AjoutBonReceptionComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_bon_reception_modifier_bon_reception_component__WEBPACK_IMPORTED_MODULE_4__["ModifierBonReceptionComponent"]
      }, {
        path: 'details/:id',
        component: _details_bon_reception_details_bon_reception_component__WEBPACK_IMPORTED_MODULE_5__["DetailsBonReceptionComponent"]
      }]
    }];

    var BonreceptionRoutingModule = function BonreceptionRoutingModule() {
      _classCallCheck(this, BonreceptionRoutingModule);
    };

    BonreceptionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BonreceptionRoutingModule
    });
    BonreceptionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BonreceptionRoutingModule_Factory(t) {
        return new (t || BonreceptionRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonreceptionRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonreceptionRoutingModule, [{
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
  "./src/app/comerce/bonReception/bonreception.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/comerce/bonReception/bonreception.module.ts ***!
    \*************************************************************/

  /*! exports provided: BonreceptionModule */

  /***/
  function srcAppComerceBonReceptionBonreceptionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonreceptionModule", function () {
      return BonreceptionModule;
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


    var _bonreception_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bonreception-routing.module */
    "./src/app/comerce/bonReception/bonreception-routing.module.ts");

    var BonreceptionModule = function BonreceptionModule() {
      _classCallCheck(this, BonreceptionModule);
    };

    BonreceptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BonreceptionModule
    });
    BonreceptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BonreceptionModule_Factory(t) {
        return new (t || BonreceptionModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bonreception_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonreceptionRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonreceptionModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bonreception_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonreceptionRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonreceptionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bonreception_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonreceptionRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-bonReception-bonreception-module-es5.js.map