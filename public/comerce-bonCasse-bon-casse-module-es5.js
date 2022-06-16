function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-bonCasse-bon-casse-module"], {
  /***/
  "./src/app/comerce/bonCasse/bon-casse-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/comerce/bonCasse/bon-casse-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: BonCasseRoutingModule */

  /***/
  function srcAppComerceBonCasseBonCasseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonCasseRoutingModule", function () {
      return BonCasseRoutingModule;
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


    var _bon_casse_html_bon_casse_html_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bon-casse-html/bon-casse-html.component */
    "./src/app/comerce/bonCasse/bon-casse-html/bon-casse-html.component.ts");
    /* harmony import */


    var _list_bon_casse_list_bon_casse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-bon-casse/list-bon-casse.component */
    "./src/app/comerce/bonCasse/list-bon-casse/list-bon-casse.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_bon_casse_list_bon_casse_component__WEBPACK_IMPORTED_MODULE_3__["ListBonCasseComponent"]
      }, {
        path: 'ajout',
        component: _bon_casse_html_bon_casse_html_component__WEBPACK_IMPORTED_MODULE_2__["BonCasseHtmlComponent"]
      }, {
        path: 'modifier/:id',
        component: _bon_casse_html_bon_casse_html_component__WEBPACK_IMPORTED_MODULE_2__["BonCasseHtmlComponent"]
      }, {
        path: 'details/:id',
        component: _bon_casse_html_bon_casse_html_component__WEBPACK_IMPORTED_MODULE_2__["BonCasseHtmlComponent"]
      }]
    }];

    var BonCasseRoutingModule = function BonCasseRoutingModule() {
      _classCallCheck(this, BonCasseRoutingModule);
    };

    BonCasseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BonCasseRoutingModule
    });
    BonCasseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BonCasseRoutingModule_Factory(t) {
        return new (t || BonCasseRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonCasseRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonCasseRoutingModule, [{
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
  "./src/app/comerce/bonCasse/bon-casse.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/comerce/bonCasse/bon-casse.module.ts ***!
    \******************************************************/

  /*! exports provided: BonCasseModule */

  /***/
  function srcAppComerceBonCasseBonCasseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BonCasseModule", function () {
      return BonCasseModule;
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


    var _bon_casse_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bon-casse-routing.module */
    "./src/app/comerce/bonCasse/bon-casse-routing.module.ts");

    var BonCasseModule = function BonCasseModule() {
      _classCallCheck(this, BonCasseModule);
    };

    BonCasseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BonCasseModule
    });
    BonCasseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BonCasseModule_Factory(t) {
        return new (t || BonCasseModule)();
      },
      imports: [[_bon_casse_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonCasseRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonCasseModule, {
        imports: [_bon_casse_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonCasseRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonCasseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_bon_casse_routing_module__WEBPACK_IMPORTED_MODULE_2__["BonCasseRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-bonCasse-bon-casse-module-es5.js.map