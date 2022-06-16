function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajout-projet-ajout-projet-module"], {
  /***/
  "./src/app/comerce/client/projet/ajout-projet/ajout-projet-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/comerce/client/projet/ajout-projet/ajout-projet-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: AjoutProjetRoutingModule */

  /***/
  function srcAppComerceClientProjetAjoutProjetAjoutProjetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjoutProjetRoutingModule", function () {
      return AjoutProjetRoutingModule;
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


    var _ajout_projet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajout-projet.component */
    "./src/app/comerce/client/projet/ajout-projet/ajout-projet.component.ts");

    var routes = [{
      path: '',
      component: _ajout_projet_component__WEBPACK_IMPORTED_MODULE_2__["AjoutProjetComponent"]
    }];

    var AjoutProjetRoutingModule = function AjoutProjetRoutingModule() {
      _classCallCheck(this, AjoutProjetRoutingModule);
    };

    AjoutProjetRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AjoutProjetRoutingModule
    });
    AjoutProjetRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AjoutProjetRoutingModule_Factory(t) {
        return new (t || AjoutProjetRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjoutProjetRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjoutProjetRoutingModule, [{
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
  "./src/app/comerce/client/projet/ajout-projet/ajout-projet.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/comerce/client/projet/ajout-projet/ajout-projet.module.ts ***!
    \***************************************************************************/

  /*! exports provided: AjoutProjetModule */

  /***/
  function srcAppComerceClientProjetAjoutProjetAjoutProjetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjoutProjetModule", function () {
      return AjoutProjetModule;
    });
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _ajout_projet_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ajout-projet-routing.module */
    "./src/app/comerce/client/projet/ajout-projet/ajout-projet-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AjoutProjetModule = function AjoutProjetModule() {
      _classCallCheck(this, AjoutProjetModule);
    };

    AjoutProjetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AjoutProjetModule
    });
    AjoutProjetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AjoutProjetModule_Factory(t) {
        return new (t || AjoutProjetModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ajout_projet_routing_module__WEBPACK_IMPORTED_MODULE_1__["AjoutProjetRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AjoutProjetModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ajout_projet_routing_module__WEBPACK_IMPORTED_MODULE_1__["AjoutProjetRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AjoutProjetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ajout_projet_routing_module__WEBPACK_IMPORTED_MODULE_1__["AjoutProjetRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=ajout-projet-ajout-projet-module-es5.js.map