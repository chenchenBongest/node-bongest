function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-typeContact-type-contact-module"], {
  /***/
  "./src/app/comerce/typeContact/type-contact-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/comerce/typeContact/type-contact-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: TypeContactRoutingModule */

  /***/
  function srcAppComerceTypeContactTypeContactRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeContactRoutingModule", function () {
      return TypeContactRoutingModule;
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


    var _ajout_type_contact_ajout_type_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ajout-type-contact/ajout-type-contact.component */
    "./src/app/comerce/typeContact/ajout-type-contact/ajout-type-contact.component.ts");
    /* harmony import */


    var _list_type_contact_list_type_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-type-contact/list-type-contact.component */
    "./src/app/comerce/typeContact/list-type-contact/list-type-contact.component.ts");
    /* harmony import */


    var _modifier_type_contact_modifier_type_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modifier-type-contact/modifier-type-contact.component */
    "./src/app/comerce/typeContact/modifier-type-contact/modifier-type-contact.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'list',
        component: _list_type_contact_list_type_contact_component__WEBPACK_IMPORTED_MODULE_3__["ListTypeContactComponent"]
      }, {
        path: 'ajout',
        component: _ajout_type_contact_ajout_type_contact_component__WEBPACK_IMPORTED_MODULE_2__["AjoutTypeContactComponent"]
      }, {
        path: 'modifier/:id',
        component: _modifier_type_contact_modifier_type_contact_component__WEBPACK_IMPORTED_MODULE_4__["ModifierTypeContactComponent"]
      }]
    }];

    var TypeContactRoutingModule = function TypeContactRoutingModule() {
      _classCallCheck(this, TypeContactRoutingModule);
    };

    TypeContactRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TypeContactRoutingModule
    });
    TypeContactRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TypeContactRoutingModule_Factory(t) {
        return new (t || TypeContactRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TypeContactRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeContactRoutingModule, [{
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
  "./src/app/comerce/typeContact/type-contact.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/comerce/typeContact/type-contact.module.ts ***!
    \************************************************************/

  /*! exports provided: TypeContactModule */

  /***/
  function srcAppComerceTypeContactTypeContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeContactModule", function () {
      return TypeContactModule;
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


    var _type_contact_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./type-contact-routing.module */
    "./src/app/comerce/typeContact/type-contact-routing.module.ts");

    var TypeContactModule = function TypeContactModule() {
      _classCallCheck(this, TypeContactModule);
    };

    TypeContactModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TypeContactModule
    });
    TypeContactModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TypeContactModule_Factory(t) {
        return new (t || TypeContactModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _type_contact_routing_module__WEBPACK_IMPORTED_MODULE_3__["TypeContactRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TypeContactModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _type_contact_routing_module__WEBPACK_IMPORTED_MODULE_3__["TypeContactRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeContactModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _type_contact_routing_module__WEBPACK_IMPORTED_MODULE_3__["TypeContactRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=comerce-typeContact-type-contact-module-es5.js.map