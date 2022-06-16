function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-article-details-article-module"], {
  /***/
  "./src/app/comerce/article/details-article/details-article-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/comerce/article/details-article/details-article-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: DetailsArticleRoutingModule */

  /***/
  function srcAppComerceArticleDetailsArticleDetailsArticleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsArticleRoutingModule", function () {
      return DetailsArticleRoutingModule;
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


    var _details_article_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./details-article.component */
    "./src/app/comerce/article/details-article/details-article.component.ts");

    var routes = [{
      path: '',
      component: _details_article_component__WEBPACK_IMPORTED_MODULE_2__["DetailsArticleComponent"]
    }];

    var DetailsArticleRoutingModule = function DetailsArticleRoutingModule() {
      _classCallCheck(this, DetailsArticleRoutingModule);
    };

    DetailsArticleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DetailsArticleRoutingModule
    });
    DetailsArticleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DetailsArticleRoutingModule_Factory(t) {
        return new (t || DetailsArticleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetailsArticleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsArticleRoutingModule, [{
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
  "./src/app/comerce/article/details-article/details-article.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/comerce/article/details-article/details-article.module.ts ***!
    \***************************************************************************/

  /*! exports provided: DetailsArticleModule */

  /***/
  function srcAppComerceArticleDetailsArticleDetailsArticleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsArticleModule", function () {
      return DetailsArticleModule;
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


    var _details_article_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./details-article-routing.module */
    "./src/app/comerce/article/details-article/details-article-routing.module.ts");

    var DetailsArticleModule = function DetailsArticleModule() {
      _classCallCheck(this, DetailsArticleModule);
    };

    DetailsArticleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DetailsArticleModule
    });
    DetailsArticleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DetailsArticleModule_Factory(t) {
        return new (t || DetailsArticleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _details_article_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetailsArticleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetailsArticleModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _details_article_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetailsArticleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsArticleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _details_article_routing_module__WEBPACK_IMPORTED_MODULE_3__["DetailsArticleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=details-article-details-article-module-es5.js.map