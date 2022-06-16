function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-transporteur-transporteur-module"], {
  /***/
  "./src/app/comerce/transporteur/transporteur-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/comerce/transporteur/transporteur-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: TransporteurRoutingModule */

  /***/
  function srcAppComerceTransporteurTransporteurRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransporteurRoutingModule", function () {
      return TransporteurRoutingModule;
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


    var _ajout_transporteur_ajout_transporteur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajout-transporteur/ajout-transporteur.component */
    "./src/app/comerce/transporteur/ajout-transporteur/ajout-transporteur.component.ts");
    /* harmony import */


    var _list_transporteur_list_transporteur_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-transporteur/list-transporteur.component */
    "./src/app/comerce/transporteur/list-transporteur/list-transporteur.component.ts");
    /* harmony import */


    var _modifier_transporteur_modifier_transporteur_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modifier-transporteur/modifier-transporteur.component */
    "./src/app/comerce/transporteur/modifier-transporteur/modifier-transporteur.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_transporteur_list_transporteur_component__WEBPACK_IMPORTED_MODULE_3__["ListTransporteurComponent"]
      }, {
        path: 'ajout',
        component: _ajout_transporteur_ajout_transporteur_component__WEBPACK_IMPORTED_MODULE_2__["AjoutTransporteurComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_transporteur_modifier_transporteur_component__WEBPACK_IMPORTED_MODULE_4__["ModifierTransporteurComponent"]
      }]
    }];

    var TransporteurRoutingModule = function TransporteurRoutingModule() {
      _classCallCheck(this, TransporteurRoutingModule);
    };

    TransporteurRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TransporteurRoutingModule
    });
    TransporteurRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TransporteurRoutingModule_Factory(t) {
        return new (t || TransporteurRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TransporteurRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransporteurRoutingModule, [{
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
  "./src/app/comerce/transporteur/transporteur.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/comerce/transporteur/transporteur.module.ts ***!
    \*************************************************************/

  /*! exports provided: TransporteurModule */

  /***/
  function srcAppComerceTransporteurTransporteurModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransporteurModule", function () {
      return TransporteurModule;
    });
    /* harmony import */


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _transporteur_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./transporteur-routing.module */
    "./src/app/comerce/transporteur/transporteur-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var TransporteurModule = function TransporteurModule() {
      _classCallCheck(this, TransporteurModule);
    };

    TransporteurModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: TransporteurModule
    });
    TransporteurModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function TransporteurModule_Factory(t) {
        return new (t || TransporteurModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _transporteur_routing_module__WEBPACK_IMPORTED_MODULE_1__["TransporteurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TransporteurModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _transporteur_routing_module__WEBPACK_IMPORTED_MODULE_1__["TransporteurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TransporteurModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _transporteur_routing_module__WEBPACK_IMPORTED_MODULE_1__["TransporteurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-transporteur-transporteur-module-es5.js.map