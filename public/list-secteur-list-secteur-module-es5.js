function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-secteur-list-secteur-module"], {
  /***/
  "./src/app/comerce/secteur/list-secteur/list-secteur-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/comerce/secteur/list-secteur/list-secteur-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ListSecteurRoutingModule */

  /***/
  function srcAppComerceSecteurListSecteurListSecteurRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListSecteurRoutingModule", function () {
      return ListSecteurRoutingModule;
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


    var _list_secteur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list-secteur.component */
    "./src/app/comerce/secteur/list-secteur/list-secteur.component.ts");

    var routes = [{
      path: '',
      component: _list_secteur_component__WEBPACK_IMPORTED_MODULE_2__["ListSecteurComponent"]
    }];

    var ListSecteurRoutingModule = function ListSecteurRoutingModule() {
      _classCallCheck(this, ListSecteurRoutingModule);
    };

    ListSecteurRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ListSecteurRoutingModule
    });
    ListSecteurRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ListSecteurRoutingModule_Factory(t) {
        return new (t || ListSecteurRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListSecteurRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListSecteurRoutingModule, [{
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
  "./src/app/comerce/secteur/list-secteur/list-secteur.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/comerce/secteur/list-secteur/list-secteur.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ListSecteurModule */

  /***/
  function srcAppComerceSecteurListSecteurListSecteurModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListSecteurModule", function () {
      return ListSecteurModule;
    });
    /* harmony import */


    var _list_secteur_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./list-secteur-routing.module */
    "./src/app/comerce/secteur/list-secteur/list-secteur-routing.module.ts");
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

    var ListSecteurModule = function ListSecteurModule() {
      _classCallCheck(this, ListSecteurModule);
    };

    ListSecteurModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ListSecteurModule
    });
    ListSecteurModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ListSecteurModule_Factory(t) {
        return new (t || ListSecteurModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _list_secteur_routing_module__WEBPACK_IMPORTED_MODULE_0__["ListSecteurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ListSecteurModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _list_secteur_routing_module__WEBPACK_IMPORTED_MODULE_0__["ListSecteurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListSecteurModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _list_secteur_routing_module__WEBPACK_IMPORTED_MODULE_0__["ListSecteurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=list-secteur-list-secteur-module-es5.js.map