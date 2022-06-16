function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-secteur-secteur-module"], {
  /***/
  "./src/app/comerce/secteur/secteur-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/comerce/secteur/secteur-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: SecteurRoutingModule */

  /***/
  function srcAppComerceSecteurSecteurRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecteurRoutingModule", function () {
      return SecteurRoutingModule;
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
          /*! import() | ajout-secteur-ajout-secteur-module */
          "ajout-secteur-ajout-secteur-module").then(__webpack_require__.bind(null,
          /*! ./ajout-secteur/ajout-secteur.module */
          "./src/app/comerce/secteur/ajout-secteur/ajout-secteur.module.ts")).then(function (module) {
            return module.AjoutSecteurModule;
          });
        }
      }, {
        path: 'list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | list-secteur-list-secteur-module */
          "list-secteur-list-secteur-module").then(__webpack_require__.bind(null,
          /*! ./list-secteur/list-secteur.module */
          "./src/app/comerce/secteur/list-secteur/list-secteur.module.ts")).then(function (module) {
            return module.ListSecteurModule;
          });
        }
      }, {
        path: 'modifier/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modifier-secteur-modifier-secteur-module */
          "modifier-secteur-modifier-secteur-module").then(__webpack_require__.bind(null,
          /*! ./modifier-secteur/modifier-secteur.module */
          "./src/app/comerce/secteur/modifier-secteur/modifier-secteur.module.ts")).then(function (module) {
            return module.ModifierSecteurModule;
          });
        }
      }]
    }];

    var SecteurRoutingModule = function SecteurRoutingModule() {
      _classCallCheck(this, SecteurRoutingModule);
    };

    SecteurRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SecteurRoutingModule
    });
    SecteurRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SecteurRoutingModule_Factory(t) {
        return new (t || SecteurRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SecteurRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecteurRoutingModule, [{
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
  "./src/app/comerce/secteur/secteur.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/comerce/secteur/secteur.module.ts ***!
    \***************************************************/

  /*! exports provided: SecteurModule */

  /***/
  function srcAppComerceSecteurSecteurModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecteurModule", function () {
      return SecteurModule;
    });
    /* harmony import */


    var _secteur_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./secteur-routing.module */
    "./src/app/comerce/secteur/secteur-routing.module.ts");
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

    var SecteurModule = function SecteurModule() {
      _classCallCheck(this, SecteurModule);
    };

    SecteurModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SecteurModule
    });
    SecteurModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SecteurModule_Factory(t) {
        return new (t || SecteurModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _secteur_routing_module__WEBPACK_IMPORTED_MODULE_0__["SecteurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SecteurModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _secteur_routing_module__WEBPACK_IMPORTED_MODULE_0__["SecteurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SecteurModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _secteur_routing_module__WEBPACK_IMPORTED_MODULE_0__["SecteurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-secteur-secteur-module-es5.js.map