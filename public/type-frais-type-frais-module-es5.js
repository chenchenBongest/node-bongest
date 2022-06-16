function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["type-frais-type-frais-module"], {
  /***/
  "./src/app/GMAO/type-frais/type-frais-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/GMAO/type-frais/type-frais-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: TypeFraisRoutingModule */

  /***/
  function srcAppGMAOTypeFraisTypeFraisRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeFraisRoutingModule", function () {
      return TypeFraisRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | list-type-frais-list-type-frais-module */
          "list-type-frais-list-type-frais-module").then(__webpack_require__.bind(null,
          /*! ./list-type-frais/list-type-frais.module */
          "./src/app/GMAO/type-frais/list-type-frais/list-type-frais.module.ts")).then(function (module) {
            return module.ListTypeFraisModule;
          });
        }
      }, {
        path: 'ajout',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | ajout-type-frais-ajout-type-frais-module */
          "ajout-type-frais-ajout-type-frais-module").then(__webpack_require__.bind(null,
          /*! ./ajout-type-frais/ajout-type-frais.module */
          "./src/app/GMAO/type-frais/ajout-type-frais/ajout-type-frais.module.ts")).then(function (module) {
            return module.AjoutTypeFraisModule;
          });
        }
      }]
    }];

    var TypeFraisRoutingModule = function TypeFraisRoutingModule() {
      _classCallCheck(this, TypeFraisRoutingModule);
    };

    TypeFraisRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TypeFraisRoutingModule
    });
    TypeFraisRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TypeFraisRoutingModule_Factory(t) {
        return new (t || TypeFraisRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TypeFraisRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeFraisRoutingModule, [{
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
  "./src/app/GMAO/type-frais/type-frais.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/GMAO/type-frais/type-frais.module.ts ***!
    \******************************************************/

  /*! exports provided: TypeFraisModule */

  /***/
  function srcAppGMAOTypeFraisTypeFraisModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeFraisModule", function () {
      return TypeFraisModule;
    });
    /* harmony import */


    var _type_frais_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./type-frais-routing.module */
    "./src/app/GMAO/type-frais/type-frais-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var TypeFraisModule = function TypeFraisModule() {
      _classCallCheck(this, TypeFraisModule);
    };

    TypeFraisModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TypeFraisModule
    });
    TypeFraisModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function TypeFraisModule_Factory(t) {
        return new (t || TypeFraisModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _type_frais_routing_module__WEBPACK_IMPORTED_MODULE_0__["TypeFraisRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TypeFraisModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _type_frais_routing_module__WEBPACK_IMPORTED_MODULE_0__["TypeFraisRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TypeFraisModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _type_frais_routing_module__WEBPACK_IMPORTED_MODULE_0__["TypeFraisRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=type-frais-type-frais-module-es5.js.map