function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajouter-article-ajouter-article-module"], {
  /***/
  "./src/app/comerce/article/ajouter-article/ajouter-article-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/comerce/article/ajouter-article/ajouter-article-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: AjouterArticleRoutingModule */

  /***/
  function srcAppComerceArticleAjouterArticleAjouterArticleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjouterArticleRoutingModule", function () {
      return AjouterArticleRoutingModule;
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


    var _ajouter_article_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajouter-article.component */
    "./src/app/comerce/article/ajouter-article/ajouter-article.component.ts");

    var routes = [{
      path: '',
      component: _ajouter_article_component__WEBPACK_IMPORTED_MODULE_2__["AjouterArticleComponent"]
    }];

    var AjouterArticleRoutingModule = function AjouterArticleRoutingModule() {
      _classCallCheck(this, AjouterArticleRoutingModule);
    };

    AjouterArticleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AjouterArticleRoutingModule
    });
    AjouterArticleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AjouterArticleRoutingModule_Factory(t) {
        return new (t || AjouterArticleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjouterArticleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjouterArticleRoutingModule, [{
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
  "./src/app/comerce/article/ajouter-article/ajouter-article.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/comerce/article/ajouter-article/ajouter-article.module.ts ***!
    \***************************************************************************/

  /*! exports provided: AjouterArticleModule */

  /***/
  function srcAppComerceArticleAjouterArticleAjouterArticleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AjouterArticleModule", function () {
      return AjouterArticleModule;
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


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _ajouter_article_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ajouter-article-routing.module */
    "./src/app/comerce/article/ajouter-article/ajouter-article-routing.module.ts");

    var AjouterArticleModule = function AjouterArticleModule() {
      _classCallCheck(this, AjouterArticleModule);
    };

    AjouterArticleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AjouterArticleModule
    });
    AjouterArticleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AjouterArticleModule_Factory(t) {
        return new (t || AjouterArticleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ajouter_article_routing_module__WEBPACK_IMPORTED_MODULE_3__["AjouterArticleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjouterArticleModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ajouter_article_routing_module__WEBPACK_IMPORTED_MODULE_3__["AjouterArticleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjouterArticleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ajouter_article_routing_module__WEBPACK_IMPORTED_MODULE_3__["AjouterArticleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=ajouter-article-ajouter-article-module-es5.js.map