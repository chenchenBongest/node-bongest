function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-utilisateur-utilisateur-module"], {
  /***/
  "./src/app/comerce/utilisateur/utilisateur-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/comerce/utilisateur/utilisateur-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: UtilisateurRoutingModule */

  /***/
  function srcAppComerceUtilisateurUtilisateurRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilisateurRoutingModule", function () {
      return UtilisateurRoutingModule;
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


    var _Components_ajout_utilisateur_ajout_utilisateur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Components/ajout-utilisateur/ajout-utilisateur.component */
    "./src/app/comerce/utilisateur/Components/ajout-utilisateur/ajout-utilisateur.component.ts");
    /* harmony import */


    var _Components_details_utilisateur_details_utilisateur_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Components/details-utilisateur/details-utilisateur.component */
    "./src/app/comerce/utilisateur/Components/details-utilisateur/details-utilisateur.component.ts");
    /* harmony import */


    var _Components_list_utilisateur_list_utilisateur_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Components/list-utilisateur/list-utilisateur.component */
    "./src/app/comerce/utilisateur/Components/list-utilisateur/list-utilisateur.component.ts");
    /* harmony import */


    var _Components_modifier_utilisateur_modifier_utilisateur_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Components/modifier-utilisateur/modifier-utilisateur.component */
    "./src/app/comerce/utilisateur/Components/modifier-utilisateur/modifier-utilisateur.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _Components_list_utilisateur_list_utilisateur_component__WEBPACK_IMPORTED_MODULE_4__["ListUtilisateurComponent"]
      }, {
        path: 'ajout',
        component: _Components_ajout_utilisateur_ajout_utilisateur_component__WEBPACK_IMPORTED_MODULE_2__["AjoutUtilisateurComponent"]
      }, {
        path: 'modifier/:id',
        component: _Components_modifier_utilisateur_modifier_utilisateur_component__WEBPACK_IMPORTED_MODULE_5__["ModifierUtilisateurComponent"]
      }, {
        path: 'details/:id',
        component: _Components_details_utilisateur_details_utilisateur_component__WEBPACK_IMPORTED_MODULE_3__["DetailsUtilisateurComponent"]
      }]
    }];

    var UtilisateurRoutingModule = function UtilisateurRoutingModule() {
      _classCallCheck(this, UtilisateurRoutingModule);
    };

    UtilisateurRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: UtilisateurRoutingModule
    });
    UtilisateurRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function UtilisateurRoutingModule_Factory(t) {
        return new (t || UtilisateurRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UtilisateurRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UtilisateurRoutingModule, [{
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
  "./src/app/comerce/utilisateur/utilisateur.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/comerce/utilisateur/utilisateur.module.ts ***!
    \***********************************************************/

  /*! exports provided: UtilisateurModule */

  /***/
  function srcAppComerceUtilisateurUtilisateurModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilisateurModule", function () {
      return UtilisateurModule;
    });
    /* harmony import */


    var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _utilisateur_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./utilisateur-routing.module */
    "./src/app/comerce/utilisateur/utilisateur-routing.module.ts");

    var UtilisateurModule = function UtilisateurModule() {
      _classCallCheck(this, UtilisateurModule);
    };

    UtilisateurModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: UtilisateurModule
    });
    UtilisateurModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function UtilisateurModule_Factory(t) {
        return new (t || UtilisateurModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _utilisateur_routing_module__WEBPACK_IMPORTED_MODULE_3__["UtilisateurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](UtilisateurModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _utilisateur_routing_module__WEBPACK_IMPORTED_MODULE_3__["UtilisateurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](UtilisateurModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _utilisateur_routing_module__WEBPACK_IMPORTED_MODULE_3__["UtilisateurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-utilisateur-utilisateur-module-es5.js.map