function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-listArticlesVendu-list-articles-vendu-list-articles-vendu-module"], {
  /***/
  "./src/app/comerce/listArticlesVendu/list-articles-vendu/list-articles-vendu-routing.module.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/comerce/listArticlesVendu/list-articles-vendu/list-articles-vendu-routing.module.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: ListArticlesVenduRoutingModule */

  /***/
  function srcAppComerceListArticlesVenduListArticlesVenduListArticlesVenduRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListArticlesVenduRoutingModule", function () {
      return ListArticlesVenduRoutingModule;
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


    var _list_articles_vendu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list-articles-vendu.component */
    "./src/app/comerce/listArticlesVendu/list-articles-vendu/list-articles-vendu.component.ts");

    var routes = [{
      path: '',
      component: _list_articles_vendu_component__WEBPACK_IMPORTED_MODULE_2__["ListArticlesVenduComponent"]
    }];

    var ListArticlesVenduRoutingModule = function ListArticlesVenduRoutingModule() {
      _classCallCheck(this, ListArticlesVenduRoutingModule);
    };

    ListArticlesVenduRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ListArticlesVenduRoutingModule
    });
    ListArticlesVenduRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ListArticlesVenduRoutingModule_Factory(t) {
        return new (t || ListArticlesVenduRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ListArticlesVenduRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ListArticlesVenduRoutingModule, [{
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
  "./src/app/comerce/listArticlesVendu/list-articles-vendu/list-articles-vendu.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/comerce/listArticlesVendu/list-articles-vendu/list-articles-vendu.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ListArticlesVenduModule */

  /***/
  function srcAppComerceListArticlesVenduListArticlesVenduListArticlesVenduModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListArticlesVenduModule", function () {
      return ListArticlesVenduModule;
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


    var _list_articles_vendu_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list-articles-vendu-routing.module */
    "./src/app/comerce/listArticlesVendu/list-articles-vendu/list-articles-vendu-routing.module.ts");

    var ListArticlesVenduModule = function ListArticlesVenduModule() {
      _classCallCheck(this, ListArticlesVenduModule);
    };

    ListArticlesVenduModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ListArticlesVenduModule
    });
    ListArticlesVenduModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ListArticlesVenduModule_Factory(t) {
        return new (t || ListArticlesVenduModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _list_articles_vendu_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListArticlesVenduRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ListArticlesVenduModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _list_articles_vendu_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListArticlesVenduRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ListArticlesVenduModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _list_articles_vendu_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListArticlesVenduRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-listArticlesVendu-list-articles-vendu-list-articles-vendu-module-es5.js.map