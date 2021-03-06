function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"], {
  /***/
  "./src/app/comerce/variables/categories/categories-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/comerce/variables/categories/categories-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: CategoriesRoutingModule */

  /***/
  function srcAppComerceVariablesCategoriesCategoriesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesRoutingModule", function () {
      return CategoriesRoutingModule;
    });
    /* harmony import */


    var _client_details_client_details_client_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../client/details-client/details-client.component */
    "./src/app/comerce/client/details-client/details-client.component.ts");
    /* harmony import */


    var _modifier_categories_modifier_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modifier-categories/modifier-categories.component */
    "./src/app/comerce/variables/categories/modifier-categories/modifier-categories.component.ts");
    /* harmony import */


    var _ajout_categories_ajout_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajout-categories/ajout-categories.component */
    "./src/app/comerce/variables/categories/ajout-categories/ajout-categories.component.ts");
    /* harmony import */


    var _list_categories_list_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-categories/list-categories.component */
    "./src/app/comerce/variables/categories/list-categories/list-categories.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_categories_list_categories_component__WEBPACK_IMPORTED_MODULE_3__["ListCategoriesComponent"]
      }, {
        path: 'ajout',
        component: _ajout_categories_ajout_categories_component__WEBPACK_IMPORTED_MODULE_2__["AjoutCategoriesComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_categories_modifier_categories_component__WEBPACK_IMPORTED_MODULE_1__["ModifierCategoriesComponent"]
      }, {
        path: 'details/:id',
        component: _client_details_client_details_client_component__WEBPACK_IMPORTED_MODULE_0__["DetailsClientComponent"]
      }]
    }];

    var CategoriesRoutingModule = function CategoriesRoutingModule() {
      _classCallCheck(this, CategoriesRoutingModule);
    };

    CategoriesRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
      type: CategoriesRoutingModule
    });
    CategoriesRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
      factory: function CategoriesRoutingModule_Factory(t) {
        return new (t || CategoriesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](CategoriesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["??setClassMetadata"](CategoriesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/comerce/variables/categories/categories.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/comerce/variables/categories/categories.module.ts ***!
    \*******************************************************************/

  /*! exports provided: CategoriesModule */

  /***/
  function srcAppComerceVariablesCategoriesCategoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesModule", function () {
      return CategoriesModule;
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


    var _categories_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./categories-routing.module */
    "./src/app/comerce/variables/categories/categories-routing.module.ts");
    /* harmony import */


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var CategoriesModule = function CategoriesModule() {
      _classCallCheck(this, CategoriesModule);
    };

    CategoriesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: CategoriesModule
    });
    CategoriesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function CategoriesModule_Factory(t) {
        return new (t || CategoriesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _categories_routing_module__WEBPACK_IMPORTED_MODULE_2__["CategoriesRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CategoriesModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _categories_routing_module__WEBPACK_IMPORTED_MODULE_2__["CategoriesRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CategoriesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _categories_routing_module__WEBPACK_IMPORTED_MODULE_2__["CategoriesRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=categories-categories-module-es5.js.map