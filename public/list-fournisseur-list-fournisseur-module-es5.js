function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-fournisseur-list-fournisseur-module"], {
  /***/
  "./src/app/comerce/fournisseur/list-fournisseur/list-fournisseur-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/comerce/fournisseur/list-fournisseur/list-fournisseur-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ListFournisseurRoutingModule */

  /***/
  function srcAppComerceFournisseurListFournisseurListFournisseurRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListFournisseurRoutingModule", function () {
      return ListFournisseurRoutingModule;
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


    var _list_fournisseur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list-fournisseur.component */
    "./src/app/comerce/fournisseur/list-fournisseur/list-fournisseur.component.ts");

    var routes = [{
      path: '',
      component: _list_fournisseur_component__WEBPACK_IMPORTED_MODULE_2__["ListFournisseurComponent"]
    }];

    var ListFournisseurRoutingModule = function ListFournisseurRoutingModule() {
      _classCallCheck(this, ListFournisseurRoutingModule);
    };

    ListFournisseurRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ListFournisseurRoutingModule
    });
    ListFournisseurRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ListFournisseurRoutingModule_Factory(t) {
        return new (t || ListFournisseurRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ListFournisseurRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ListFournisseurRoutingModule, [{
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
  "./src/app/comerce/fournisseur/list-fournisseur/list-fournisseur.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/comerce/fournisseur/list-fournisseur/list-fournisseur.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: ListFournisseurModule */

  /***/
  function srcAppComerceFournisseurListFournisseurListFournisseurModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListFournisseurModule", function () {
      return ListFournisseurModule;
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


    var _list_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-fournisseur-routing.module */
    "./src/app/comerce/fournisseur/list-fournisseur/list-fournisseur-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ListFournisseurModule = function ListFournisseurModule() {
      _classCallCheck(this, ListFournisseurModule);
    };

    ListFournisseurModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ListFournisseurModule
    });
    ListFournisseurModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ListFournisseurModule_Factory(t) {
        return new (t || ListFournisseurModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _list_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListFournisseurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ListFournisseurModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _list_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListFournisseurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ListFournisseurModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _list_fournisseur_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListFournisseurRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
          exports: []
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=list-fournisseur-list-fournisseur-module-es5.js.map