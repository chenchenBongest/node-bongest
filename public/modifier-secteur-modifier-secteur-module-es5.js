function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modifier-secteur-modifier-secteur-module"], {
  /***/
  "./src/app/comerce/secteur/modifier-secteur/modifier-secteur-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/comerce/secteur/modifier-secteur/modifier-secteur-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ModifierSecteurRoutingModule */

  /***/
  function srcAppComerceSecteurModifierSecteurModifierSecteurRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifierSecteurRoutingModule", function () {
      return ModifierSecteurRoutingModule;
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


    var _modifier_secteur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modifier-secteur.component */
    "./src/app/comerce/secteur/modifier-secteur/modifier-secteur.component.ts");

    var routes = [{
      path: '',
      component: _modifier_secteur_component__WEBPACK_IMPORTED_MODULE_2__["ModifierSecteurComponent"]
    }];

    var ModifierSecteurRoutingModule = function ModifierSecteurRoutingModule() {
      _classCallCheck(this, ModifierSecteurRoutingModule);
    };

    ModifierSecteurRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ModifierSecteurRoutingModule
    });
    ModifierSecteurRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ModifierSecteurRoutingModule_Factory(t) {
        return new (t || ModifierSecteurRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModifierSecteurRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModifierSecteurRoutingModule, [{
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
  "./src/app/comerce/secteur/modifier-secteur/modifier-secteur.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/comerce/secteur/modifier-secteur/modifier-secteur.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ModifierSecteurModule */

  /***/
  function srcAppComerceSecteurModifierSecteurModifierSecteurModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifierSecteurModule", function () {
      return ModifierSecteurModule;
    });
    /* harmony import */


    var _modifier_secteur_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./modifier-secteur-routing.module */
    "./src/app/comerce/secteur/modifier-secteur/modifier-secteur-routing.module.ts");
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

    var ModifierSecteurModule = function ModifierSecteurModule() {
      _classCallCheck(this, ModifierSecteurModule);
    };

    ModifierSecteurModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ModifierSecteurModule
    });
    ModifierSecteurModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ModifierSecteurModule_Factory(t) {
        return new (t || ModifierSecteurModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _modifier_secteur_routing_module__WEBPACK_IMPORTED_MODULE_0__["ModifierSecteurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModifierSecteurModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _modifier_secteur_routing_module__WEBPACK_IMPORTED_MODULE_0__["ModifierSecteurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModifierSecteurModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _modifier_secteur_routing_module__WEBPACK_IMPORTED_MODULE_0__["ModifierSecteurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modifier-secteur-modifier-secteur-module-es5.js.map