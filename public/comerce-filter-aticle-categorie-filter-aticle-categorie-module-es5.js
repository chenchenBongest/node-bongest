function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-filter-aticle-categorie-filter-aticle-categorie-module"], {
  /***/
  "./src/app/comerce/filter-aticle-categorie/filter-aticle-categorie-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/comerce/filter-aticle-categorie/filter-aticle-categorie-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: FilterAticleCategorieRoutingModule */

  /***/
  function srcAppComerceFilterAticleCategorieFilterAticleCategorieRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterAticleCategorieRoutingModule", function () {
      return FilterAticleCategorieRoutingModule;
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


    var _filter_aticle_categorie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./filter-aticle-categorie.component */
    "./src/app/comerce/filter-aticle-categorie/filter-aticle-categorie.component.ts");

    var routes = [{
      path: '',
      component: _filter_aticle_categorie_component__WEBPACK_IMPORTED_MODULE_2__["FilterAticleCategorieComponent"]
    }];

    var FilterAticleCategorieRoutingModule = function FilterAticleCategorieRoutingModule() {
      _classCallCheck(this, FilterAticleCategorieRoutingModule);
    };

    FilterAticleCategorieRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FilterAticleCategorieRoutingModule
    });
    FilterAticleCategorieRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FilterAticleCategorieRoutingModule_Factory(t) {
        return new (t || FilterAticleCategorieRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FilterAticleCategorieRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterAticleCategorieRoutingModule, [{
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
  "./src/app/comerce/filter-aticle-categorie/filter-aticle-categorie.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/comerce/filter-aticle-categorie/filter-aticle-categorie.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: FilterAticleCategorieModule */

  /***/
  function srcAppComerceFilterAticleCategorieFilterAticleCategorieModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterAticleCategorieModule", function () {
      return FilterAticleCategorieModule;
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


    var _filter_aticle_categorie_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./filter-aticle-categorie-routing.module */
    "./src/app/comerce/filter-aticle-categorie/filter-aticle-categorie-routing.module.ts");

    var FilterAticleCategorieModule = function FilterAticleCategorieModule() {
      _classCallCheck(this, FilterAticleCategorieModule);
    };

    FilterAticleCategorieModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FilterAticleCategorieModule
    });
    FilterAticleCategorieModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FilterAticleCategorieModule_Factory(t) {
        return new (t || FilterAticleCategorieModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _filter_aticle_categorie_routing_module__WEBPACK_IMPORTED_MODULE_3__["FilterAticleCategorieRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FilterAticleCategorieModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _filter_aticle_categorie_routing_module__WEBPACK_IMPORTED_MODULE_3__["FilterAticleCategorieRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterAticleCategorieModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _filter_aticle_categorie_routing_module__WEBPACK_IMPORTED_MODULE_3__["FilterAticleCategorieRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-filter-aticle-categorie-filter-aticle-categorie-module-es5.js.map