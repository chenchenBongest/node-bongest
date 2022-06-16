function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alerte-liste-alerte-liste-module"], {
  /***/
  "./src/app/comerce/article/alerte-liste/alerte-liste-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/comerce/article/alerte-liste/alerte-liste-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: AlerteListeRoutingModule */

  /***/
  function srcAppComerceArticleAlerteListeAlerteListeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlerteListeRoutingModule", function () {
      return AlerteListeRoutingModule;
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


    var _alerte_liste_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./alerte-liste.component */
    "./src/app/comerce/article/alerte-liste/alerte-liste.component.ts");

    var routes = [{
      path: '',
      component: _alerte_liste_component__WEBPACK_IMPORTED_MODULE_2__["AlerteListeComponent"]
    }];

    var AlerteListeRoutingModule = function AlerteListeRoutingModule() {
      _classCallCheck(this, AlerteListeRoutingModule);
    };

    AlerteListeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AlerteListeRoutingModule
    });
    AlerteListeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AlerteListeRoutingModule_Factory(t) {
        return new (t || AlerteListeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlerteListeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlerteListeRoutingModule, [{
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
  "./src/app/comerce/article/alerte-liste/alerte-liste.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/comerce/article/alerte-liste/alerte-liste.module.ts ***!
    \*********************************************************************/

  /*! exports provided: AlerteListeModule */

  /***/
  function srcAppComerceArticleAlerteListeAlerteListeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlerteListeModule", function () {
      return AlerteListeModule;
    });
    /* harmony import */


    var _alerte_liste_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./alerte-liste-routing.module */
    "./src/app/comerce/article/alerte-liste/alerte-liste-routing.module.ts");
    /* harmony import */


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AlerteListeModule = function AlerteListeModule() {
      _classCallCheck(this, AlerteListeModule);
    };

    AlerteListeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AlerteListeModule
    });
    AlerteListeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AlerteListeModule_Factory(t) {
        return new (t || AlerteListeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _alerte_liste_routing_module__WEBPACK_IMPORTED_MODULE_0__["AlerteListeRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AlerteListeModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _alerte_liste_routing_module__WEBPACK_IMPORTED_MODULE_0__["AlerteListeRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AlerteListeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _alerte_liste_routing_module__WEBPACK_IMPORTED_MODULE_0__["AlerteListeRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=alerte-liste-alerte-liste-module-es5.js.map