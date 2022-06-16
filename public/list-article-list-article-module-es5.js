function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-article-list-article-module"], {
  /***/
  "./src/app/comerce/article/list-article/list-article-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/comerce/article/list-article/list-article-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ListArticleRoutingModule */

  /***/
  function srcAppComerceArticleListArticleListArticleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListArticleRoutingModule", function () {
      return ListArticleRoutingModule;
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


    var _list_article_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list-article.component */
    "./src/app/comerce/article/list-article/list-article.component.ts");

    var routes = [{
      path: '',
      component: _list_article_component__WEBPACK_IMPORTED_MODULE_2__["ListArticleComponent"]
    }];

    var ListArticleRoutingModule = function ListArticleRoutingModule() {
      _classCallCheck(this, ListArticleRoutingModule);
    };

    ListArticleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ListArticleRoutingModule
    });
    ListArticleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ListArticleRoutingModule_Factory(t) {
        return new (t || ListArticleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListArticleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListArticleRoutingModule, [{
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
  "./src/app/comerce/article/list-article/list-article.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/comerce/article/list-article/list-article.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ListArticleModule */

  /***/
  function srcAppComerceArticleListArticleListArticleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListArticleModule", function () {
      return ListArticleModule;
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


    var _list_article_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-article-routing.module */
    "./src/app/comerce/article/list-article/list-article-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ListArticleModule = function ListArticleModule() {
      _classCallCheck(this, ListArticleModule);
    };

    ListArticleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ListArticleModule
    });
    ListArticleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ListArticleModule_Factory(t) {
        return new (t || ListArticleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _list_article_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListArticleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListArticleModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _list_article_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListArticleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListArticleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _list_article_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListArticleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=list-article-list-article-module-es5.js.map