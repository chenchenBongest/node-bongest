function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-form-elements-form-elements-module"], {
  /***/
  "./src/app/demo/pages/form-elements/form-elements-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/demo/pages/form-elements/form-elements-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: FormElementsRoutingModule */

  /***/
  function srcAppDemoPagesFormElementsFormElementsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormElementsRoutingModule", function () {
      return FormElementsRoutingModule;
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
        path: 'basic',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | basic-elements-basic-elements-module */
          "basic-elements-basic-elements-module").then(__webpack_require__.bind(null,
          /*! ./basic-elements/basic-elements.module */
          "./src/app/demo/pages/form-elements/basic-elements/basic-elements.module.ts")).then(function (module) {
            return module.BasicElementsModule;
          });
        }
      }]
    }];

    var FormElementsRoutingModule = function FormElementsRoutingModule() {
      _classCallCheck(this, FormElementsRoutingModule);
    };

    FormElementsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: FormElementsRoutingModule
    });
    FormElementsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function FormElementsRoutingModule_Factory(t) {
        return new (t || FormElementsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](FormElementsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FormElementsRoutingModule, [{
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
  "./src/app/demo/pages/form-elements/form-elements.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/demo/pages/form-elements/form-elements.module.ts ***!
    \******************************************************************/

  /*! exports provided: FormElementsModule */

  /***/
  function srcAppDemoPagesFormElementsFormElementsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormElementsModule", function () {
      return FormElementsModule;
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


    var _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./form-elements-routing.module */
    "./src/app/demo/pages/form-elements/form-elements-routing.module.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var FormElementsModule = function FormElementsModule() {
      _classCallCheck(this, FormElementsModule);
    };

    FormElementsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: FormElementsModule
    });
    FormElementsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function FormElementsModule_Factory(t) {
        return new (t || FormElementsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormElementsRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](FormElementsModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormElementsRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FormElementsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormElementsRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
          declarations: []
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=demo-pages-form-elements-form-elements-module-es5.js.map