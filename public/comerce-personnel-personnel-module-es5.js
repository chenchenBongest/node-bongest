function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-personnel-personnel-module"], {
  /***/
  "./src/app/comerce/personnel/personnel-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/comerce/personnel/personnel-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: PersonnelRoutingModule */

  /***/
  function srcAppComercePersonnelPersonnelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonnelRoutingModule", function () {
      return PersonnelRoutingModule;
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


    var _ajout_personnel_ajout_personnel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajout-personnel/ajout-personnel.component */
    "./src/app/comerce/personnel/ajout-personnel/ajout-personnel.component.ts");
    /* harmony import */


    var _details_personnel_details_personnel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./details-personnel/details-personnel.component */
    "./src/app/comerce/personnel/details-personnel/details-personnel.component.ts");
    /* harmony import */


    var _list_personnel_list_personnel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./list-personnel/list-personnel.component */
    "./src/app/comerce/personnel/list-personnel/list-personnel.component.ts");
    /* harmony import */


    var _modifier_personnel_modifier_personnel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modifier-personnel/modifier-personnel.component */
    "./src/app/comerce/personnel/modifier-personnel/modifier-personnel.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_personnel_list_personnel_component__WEBPACK_IMPORTED_MODULE_4__["ListPersonnelComponent"]
      }, {
        path: 'ajout',
        component: _ajout_personnel_ajout_personnel_component__WEBPACK_IMPORTED_MODULE_2__["AjoutPersonnelComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_personnel_modifier_personnel_component__WEBPACK_IMPORTED_MODULE_5__["ModifierPersonnelComponent"]
      }, {
        path: 'details/:id',
        component: _details_personnel_details_personnel_component__WEBPACK_IMPORTED_MODULE_3__["DetailsPersonnelComponent"]
      }]
    }];

    var PersonnelRoutingModule = function PersonnelRoutingModule() {
      _classCallCheck(this, PersonnelRoutingModule);
    };

    PersonnelRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: PersonnelRoutingModule
    });
    PersonnelRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function PersonnelRoutingModule_Factory(t) {
        return new (t || PersonnelRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PersonnelRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PersonnelRoutingModule, [{
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
  "./src/app/comerce/personnel/personnel.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/comerce/personnel/personnel.module.ts ***!
    \*******************************************************/

  /*! exports provided: PersonnelModule */

  /***/
  function srcAppComercePersonnelPersonnelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonnelModule", function () {
      return PersonnelModule;
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


    var _personnel_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./personnel-routing.module */
    "./src/app/comerce/personnel/personnel-routing.module.ts");

    var PersonnelModule = function PersonnelModule() {
      _classCallCheck(this, PersonnelModule);
    };

    PersonnelModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: PersonnelModule
    });
    PersonnelModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function PersonnelModule_Factory(t) {
        return new (t || PersonnelModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _personnel_routing_module__WEBPACK_IMPORTED_MODULE_3__["PersonnelRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](PersonnelModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _personnel_routing_module__WEBPACK_IMPORTED_MODULE_3__["PersonnelRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](PersonnelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _personnel_routing_module__WEBPACK_IMPORTED_MODULE_3__["PersonnelRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-personnel-personnel-module-es5.js.map