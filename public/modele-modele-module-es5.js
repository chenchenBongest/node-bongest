function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modele-modele-module"], {
  /***/
  "./src/app/comerce/variables/modele/modele-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/comerce/variables/modele/modele-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ModeleRoutingModule */

  /***/
  function srcAppComerceVariablesModeleModeleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModeleRoutingModule", function () {
      return ModeleRoutingModule;
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
        path: 'ajout',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | ajout-modele-ajout-modele-module */
          "ajout-modele-ajout-modele-module").then(__webpack_require__.bind(null,
          /*! ./ajout-modele/ajout-modele.module */
          "./src/app/comerce/variables/modele/ajout-modele/ajout-modele.module.ts")).then(function (module) {
            return module.AjoutModeleModule;
          });
        }
      }, {
        path: 'list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | list-modele-list-modele-module */
          "list-modele-list-modele-module").then(__webpack_require__.bind(null,
          /*! ./list-modele/list-modele.module */
          "./src/app/comerce/variables/modele/list-modele/list-modele.module.ts")).then(function (module) {
            return module.ListModeleModule;
          });
        }
      }, {
        path: 'modifier/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modifier-modele-modifier-modele-module */
          "modifier-modele-modifier-modele-module").then(__webpack_require__.bind(null,
          /*! ./modifier-modele/modifier-modele.module */
          "./src/app/comerce/variables/modele/modifier-modele/modifier-modele.module.ts")).then(function (module) {
            return module.ModifierModeleModule;
          });
        }
      }, {
        path: 'details/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | details-modele-details-modele-module */
          "details-modele-details-modele-module").then(__webpack_require__.bind(null,
          /*! ./details-modele/details-modele.module */
          "./src/app/comerce/variables/modele/details-modele/details-modele.module.ts")).then(function (module) {
            return module.DetailsModeleModule;
          });
        }
      }]
    }];

    var ModeleRoutingModule = function ModeleRoutingModule() {
      _classCallCheck(this, ModeleRoutingModule);
    };

    ModeleRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ModeleRoutingModule
    });
    ModeleRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ModeleRoutingModule_Factory(t) {
        return new (t || ModeleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ModeleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ModeleRoutingModule, [{
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
  "./src/app/comerce/variables/modele/modele.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/comerce/variables/modele/modele.module.ts ***!
    \***********************************************************/

  /*! exports provided: ModeleModule */

  /***/
  function srcAppComerceVariablesModeleModeleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModeleModule", function () {
      return ModeleModule;
    });
    /* harmony import */


    var _modele_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./modele-routing.module */
    "./src/app/comerce/variables/modele/modele-routing.module.ts");
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

    var ModeleModule = function ModeleModule() {
      _classCallCheck(this, ModeleModule);
    };

    ModeleModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: ModeleModule
    });
    ModeleModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function ModeleModule_Factory(t) {
        return new (t || ModeleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _modele_routing_module__WEBPACK_IMPORTED_MODULE_0__["ModeleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](ModeleModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _modele_routing_module__WEBPACK_IMPORTED_MODULE_0__["ModeleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ModeleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _modele_routing_module__WEBPACK_IMPORTED_MODULE_0__["ModeleRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modele-modele-module-es5.js.map