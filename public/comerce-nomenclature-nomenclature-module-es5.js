function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-nomenclature-nomenclature-module"], {
  /***/
  "./src/app/comerce/nomenclature/nomenclature-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/comerce/nomenclature/nomenclature-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: NomenclatureRoutingModule */

  /***/
  function srcAppComerceNomenclatureNomenclatureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NomenclatureRoutingModule", function () {
      return NomenclatureRoutingModule;
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


    var _nomenclature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./nomenclature.component */
    "./src/app/comerce/nomenclature/nomenclature.component.ts");

    var routes = [{
      path: '',
      component: _nomenclature_component__WEBPACK_IMPORTED_MODULE_2__["NomenclatureComponent"]
    }];

    var NomenclatureRoutingModule = function NomenclatureRoutingModule() {
      _classCallCheck(this, NomenclatureRoutingModule);
    };

    NomenclatureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NomenclatureRoutingModule
    });
    NomenclatureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NomenclatureRoutingModule_Factory(t) {
        return new (t || NomenclatureRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NomenclatureRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NomenclatureRoutingModule, [{
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
  "./src/app/comerce/nomenclature/nomenclature.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/comerce/nomenclature/nomenclature.module.ts ***!
    \*************************************************************/

  /*! exports provided: NomenclatureModule */

  /***/
  function srcAppComerceNomenclatureNomenclatureModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NomenclatureModule", function () {
      return NomenclatureModule;
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


    var _nomenclature_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./nomenclature-routing.module */
    "./src/app/comerce/nomenclature/nomenclature-routing.module.ts");

    var NomenclatureModule = function NomenclatureModule() {
      _classCallCheck(this, NomenclatureModule);
    };

    NomenclatureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NomenclatureModule
    });
    NomenclatureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NomenclatureModule_Factory(t) {
        return new (t || NomenclatureModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nomenclature_routing_module__WEBPACK_IMPORTED_MODULE_3__["NomenclatureRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NomenclatureModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nomenclature_routing_module__WEBPACK_IMPORTED_MODULE_3__["NomenclatureRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NomenclatureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nomenclature_routing_module__WEBPACK_IMPORTED_MODULE_3__["NomenclatureRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-nomenclature-nomenclature-module-es5.js.map