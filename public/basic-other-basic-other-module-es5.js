function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-other-basic-other-module"], {
  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-other/basic-other-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-other/basic-other-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: BasicOtherRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicOtherBasicOtherRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicOtherRoutingModule", function () {
      return BasicOtherRoutingModule;
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


    var _basic_other_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-other.component */
    "./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.component.ts");

    var routes = [{
      path: '',
      component: _basic_other_component__WEBPACK_IMPORTED_MODULE_2__["BasicOtherComponent"]
    }];

    var BasicOtherRoutingModule = function BasicOtherRoutingModule() {
      _classCallCheck(this, BasicOtherRoutingModule);
    };

    BasicOtherRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BasicOtherRoutingModule
    });
    BasicOtherRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BasicOtherRoutingModule_Factory(t) {
        return new (t || BasicOtherRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicOtherRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicOtherRoutingModule, [{
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
  "./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.component.ts ***!
    \********************************************************************************/

  /*! exports provided: BasicOtherComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicOtherBasicOtherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicOtherComponent", function () {
      return BasicOtherComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../theme/shared/components/card/card.component */
    "./src/app/theme/shared/components/card/card.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var BasicOtherComponent =
    /*#__PURE__*/
    function () {
      function BasicOtherComponent() {
        _classCallCheck(this, BasicOtherComponent);
      }

      _createClass(BasicOtherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicOtherComponent;
    }();

    BasicOtherComponent.ɵfac = function BasicOtherComponent_Factory(t) {
      return new (t || BasicOtherComponent)();
    };

    BasicOtherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BasicOtherComponent,
      selectors: [["app-basic-other"]],
      decls: 579,
      vars: 5,
      consts: [[1, "row"], [1, "col-sm-12"], ["cardTitle", "Border", 3, "options"], ["placement", "auto", "ngbTooltip", "border-primary", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-primary"], ["placement", "auto", "ngbTooltip", "border-secondary", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-secondary"], ["placement", "auto", "ngbTooltip", "border-success", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-success"], ["placement", "auto", "ngbTooltip", "border-danger", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-danger"], ["placement", "auto", "ngbTooltip", "border-warning", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-warning"], ["placement", "auto", "ngbTooltip", "border-info", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-info"], ["placement", "auto", "ngbTooltip", "border-light", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-light"], ["placement", "auto", "ngbTooltip", "border-dark", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-dark"], ["placement", "auto", "ngbTooltip", "border-white", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-white"], [1, "col-md-6", "additive"], [1, "mt-5"], ["placement", "auto", "ngbTooltip", "border", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border"], ["placement", "auto", "ngbTooltip", "border-top", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border-top"], ["placement", "auto", "ngbTooltip", "border-right", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border-right"], ["placement", "auto", "ngbTooltip", "border-bottom", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border-bottom"], ["placement", "auto", "ngbTooltip", "border-left", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border-left"], [1, "col-sm-6"], ["placement", "auto", "ngbTooltip", "border border-0", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-0"], ["placement", "auto", "ngbTooltip", "border border-top-0", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-top-0"], ["placement", "auto", "ngbTooltip", "border border-right-0", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-right-0"], ["placement", "auto", "ngbTooltip", "border border-bottom-0", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-bottom-0"], ["placement", "auto", "ngbTooltip", "border border-left-0", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-left-0"], ["placement", "auto", "ngbTooltip", "rounded", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-secondary", "rounded"], ["placement", "auto", "ngbTooltip", "rounded-top", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-secondary", "rounded-top"], ["placement", "auto", "ngbTooltip", "rounded-right", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-secondary", "rounded-right"], ["placement", "auto", "ngbTooltip", "rounded-bottom", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-secondary", "rounded-bottom"], ["placement", "auto", "ngbTooltip", "rounded-left", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-secondary", "rounded-left"], ["placement", "auto", "ngbTooltip", "rounded-circle", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-secondary", "rounded-circle"], ["placement", "auto", "ngbTooltip", "rounded-pill", 1, "hei-75", "wid-120", "bg-light", "d-inline-block", "mr-2", "border", "border-secondary", "rounded-pill"], ["placement", "auto", "ngbTooltip", "rounded-0", 1, "hei-75", "wid-75", "bg-light", "d-inline-block", "mr-2", "border", "border-secondary", "rounded-0"], ["cardTitle", "Utility class", "cardClass", "utility-card", 3, "options"], [1, "col-md-6"], [1, "mb-0"], [1, "my-2"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-0", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-5", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-10", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-15", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-20", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-25", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-30", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-35", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-40", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-45", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-50", 1, "badge", "badge-light-danger", "p-1"], [1, "mb-0", "mt-3"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-top-0", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-top-5", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-top-10", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-top-15", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-top-20", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-top-25", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-top-30", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-top-35", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-top-40", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-top-45", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-top-50", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-bottom-0", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-bottom-5", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-bottom-10", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-bottom-15", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-bottom-20", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-bottom-25", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-bottom-30", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-bottom-35", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-bottom-40", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-bottom-45", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-bottom-50", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-left-0", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-left-5", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-left-10", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-left-15", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-left-20", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-left-25", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-left-30", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-left-35", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-left-40", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-left-45", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-left-50", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-right-0", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-right-5", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-right-10", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-right-15", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-right-20", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-right-25", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-right-30", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-right-35", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-right-40", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-right-45", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "margin-right-50", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-0", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-5", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-10", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-15", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-20", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-25", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-30", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-35", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-40", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-45", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-50", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-top-0", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-top-5", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-top-10", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-top-15", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-top-20", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-top-25", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-top-30", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-top-35", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-top-40", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-top-45", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-top-50", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-bottom-0", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-bottom-5", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-bottom-10", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-bottom-15", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-bottom-20", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-bottom-25", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-bottom-30", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-bottom-35", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-bottom-40", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-bottom-45", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-bottom-50", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-left-0", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-left-5", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-left-10", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-left-15", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-left-20", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-left-25", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-left-30", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-left-35", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-left-40", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-left-45", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-left-50", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-right-0", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-right-5", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-right-10", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-right-15", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-right-20", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-right-25", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-right-30", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-right-35", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-right-40", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-right-45", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "padding-right-50", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-20", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-25", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-30", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-35", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-40", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-45", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-50", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-55", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-60", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-65", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-70", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-75", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-80", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-85", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-90", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-95", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-100", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-105", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-110", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-115", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-120", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-125", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-130", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-135", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-140", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-145", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "width-150", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-20", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-25", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-30", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-35", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-40", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-45", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-50", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-55", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-60", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-65", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-70", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-75", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-80", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-85", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-90", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-95", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-100", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-105", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-110", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-115", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-120", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-125", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-130", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-135", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-140", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-145", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "height-150", 1, "badge", "badge-light-danger", "p-1"], [1, "col-md-12"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-10", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-12", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-14", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-16", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-18", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-20", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-22", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-24", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-26", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-28", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-30", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-32", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-34", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-36", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-38", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-40", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-42", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-44", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-46", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-48", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-50", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-52", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-54", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-56", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-58", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-60", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-62", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-64", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-66", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-68", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-70", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-72", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-74", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-76", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-78", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-size-80", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-weight-100", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-weight-200", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-weight-300", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-weight-400", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-weight-500", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-weight-600", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-weight-700", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-weight-800", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "font-weight-900", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "border-width-1", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "border-width-2", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "border-width-3", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "border-width-4", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "border-width-5", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "border-width-6", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "border-width-7", 1, "badge", "badge-light-danger", "p-1"], ["data-toggle", "tooltip", "placement", "auto", "ngbTooltip", "border-width-8", 1, "badge", "badge-light-danger", "p-1"], ["cardTitle", "Shadows", 3, "options"], [1, "shadow-none", "p-3", "mb-5", "bg-light", "rounded"], [1, "shadow-sm", "p-3", "mb-5", "bg-white", "rounded"], [1, "shadow", "p-3", "mb-5", "bg-white", "rounded"], [1, "shadow-lg", "p-3", "mb-5", "bg-white", "rounded"], ["cardTitle", "Embeds", 3, "options"], [1, "row", "justify-content-center"], [1, "col-md-8"], [1, "embed-responsive", "embed-responsive-16by9"], ["src", "https://www.youtube.com/embed/oD-lmrfPECA?rel=0", "allowfullscreen", "", 1, "embed-responsive-item"], ["cardTitle", "Aspect Ratios", 3, "options"], [1, "embed-responsive", "embed-responsive-21by9"], ["src", "https://www.youtube.com/embed/BRlN__zn0RE?rel=0", "allowfullscreen", "", 1, "embed-responsive-item"], ["src", "https://www.youtube.com/embed/ZQ264Axbjxg?rel=0", "allowfullscreen", "", 1, "embed-responsive-item"], [1, "embed-responsive", "embed-responsive-4by3"], [1, "embed-responsive", "embed-responsive-1by1"], ["src", "https://www.youtube.com/embed/ilLU5vxhLYA?rel=0", "allowfullscreen", "", 1, "embed-responsive-item"]],
      template: function BasicOtherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Border color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Additive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Subtractive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Border-radius");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "app-card", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h6", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Margin ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, ".m-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, ".m-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, ".m-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, ".m-15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, ".m-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, ".m-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, ".m-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, ".m-35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, ".m-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, ".m-45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, ".m-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h6", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Margin top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "hr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, ".m-t-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, ".m-t-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, ".m-t-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, ".m-t-15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, ".m-t-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, ".m-t-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, ".m-t-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, ".m-t-35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, ".m-t-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, ".m-t-45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, ".m-t-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h6", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Margin bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "hr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, ".m-b-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, ".m-b-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, ".m-b-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, ".m-b-15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, ".m-b-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, ".m-b-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, ".m-b-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, ".m-b-35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, ".m-b-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "label", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, ".m-b-45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, ".m-b-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h6", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Margin left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "hr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, ".m-l-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, ".m-l-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "label", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, ".m-l-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "label", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, ".m-l-15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "label", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, ".m-l-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "label", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, ".m-l-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "label", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, ".m-l-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "label", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, ".m-l-35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "label", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, ".m-l-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "label", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, ".m-l-45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "label", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, ".m-l-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h6", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Margin right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "hr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "label", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, ".m-r-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "label", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, ".m-r-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "label", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, ".m-r-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "label", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, ".m-r-15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "label", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, ".m-r-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "label", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, ".m-r-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "label", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, ".m-r-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "label", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, ".m-r-35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "label", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, ".m-r-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "label", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, ".m-r-45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "label", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, ".m-r-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h6", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Padding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "hr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "label", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, ".p-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "label", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, ".p-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "label", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, ".p-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "label", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, ".p-15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, ".p-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "label", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, ".p-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "label", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, ".p-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "label", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, ".p-35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "label", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, ".p-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "label", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, ".p-45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "label", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, ".p-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h6", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Padding top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "hr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "label", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, ".p-t-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "label", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, ".p-t-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "label", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, ".p-t-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "label", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, ".p-t-15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "label", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, ".p-t-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "label", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, ".p-t-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "label", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, ".p-t-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "label", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, ".p-t-35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "label", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, ".p-t-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "label", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, ".p-t-45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "label", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, ".p-t-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "h6", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Padding bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "hr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "label", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, ".p-b-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "label", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, ".p-b-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "label", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, ".p-b-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "label", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, ".p-b-15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "label", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, ".p-b-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "label", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, ".p-b-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "label", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, ".p-b-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "label", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, ".p-b-35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "label", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, ".p-b-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "label", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, ".p-b-45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "label", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, ".p-b-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "h6", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Padding left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "hr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "label", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, ".p-l-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "label", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, ".p-l-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "label", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, ".p-l-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "label", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, ".p-l-15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "label", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, ".p-l-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "label", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, ".p-l-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "label", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, ".p-l-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "label", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, ".p-l-35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "label", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, ".p-l-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "label", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, ".p-l-45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "label", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, ".p-l-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "h6", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Padding right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "hr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "label", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, ".p-r-0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "label", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, ".p-r-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "label", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, ".p-r-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "label", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, ".p-r-15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "label", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, ".p-r-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "label", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, ".p-r-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "label", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, ".p-r-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "label", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, ".p-r-35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "label", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, ".p-r-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "label", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, ".p-r-45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "label", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, ".p-r-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "h6", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Width ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "hr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "label", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, ".wid-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "label", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, ".wid-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "label", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, ".wid-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "label", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, ".wid-35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "label", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, ".wid-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "label", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, ".wid-45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "label", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, ".wid-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "label", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, ".wid-55");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "label", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, ".wid-60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "label", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, ".wid-65");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "label", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, ".wid-70");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "label", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, ".wid-75");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "label", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, ".wid-80");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "label", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, ".wid-85");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "label", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, ".wid-90");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "label", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, ".wid-95");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "label", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, ".wid-100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "label", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, ".wid-105");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "label", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, ".wid-110");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "label", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, ".wid-115");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "label", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, ".wid-120");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "label", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, ".wid-125");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "label", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, ".wid-130");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "label", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, ".wid-135");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "label", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, ".wid-140");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "label", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, ".wid-145");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "label", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, ".wid-150");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "h6", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Height ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "hr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "label", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, ".hei-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "label", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, ".hei-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "label", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, ".hei-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "label", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, ".hei-35");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "label", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, ".hei-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "label", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, ".hei-45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "label", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, ".hei-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "label", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, ".hei-55");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "label", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, ".hei-60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "label", 184);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, ".hei-65");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "label", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, ".hei-70");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "label", 186);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, ".hei-75");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "label", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, ".hei-80");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "label", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, ".hei-85");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "label", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, ".hei-90");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "label", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, ".hei-95");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "label", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, ".hei-100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "label", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, ".hei-105");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "label", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, ".hei-110");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "label", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, ".hei-115");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "label", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, ".hei-120");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "label", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, ".hei-125");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "label", 197);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, ".hei-130");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "label", 198);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, ".hei-135");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "label", 199);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, ".hei-140");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "label", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, ".hei-145");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "label", 201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, ".hei-150");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "div", 202);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "h6", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "Font-size ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](421, "hr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "label", 203);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, ".f-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "label", 204);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, ".f-12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "label", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, ".f-14");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "label", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, ".f-16");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "label", 207);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, ".f-18");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "label", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, ".f-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "label", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, ".f-22");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "label", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, ".f-24");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "label", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, ".f-26");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "label", 212);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, ".f-28");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "label", 213);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, ".f-30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "label", 214);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, ".f-32");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "label", 215);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, ".f-34");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "label", 216);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, ".f-36");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "label", 217);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, ".f-38");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "label", 218);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, ".f-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "label", 219);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, ".f-42");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "label", 220);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, ".f-44");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "label", 221);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, ".f-46");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "label", 222);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, ".f-48");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "label", 223);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, ".f-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "label", 224);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, ".f-52");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "label", 225);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, ".f-54");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "label", 226);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, ".f-56");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "label", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, ".f-58");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "label", 228);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, ".f-60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "label", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, ".f-62");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "label", 230);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, ".f-64");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "label", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, ".f-66");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "label", 232);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, ".f-68");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "label", 233);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, ".f-70");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "label", 234);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, ".f-72");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "label", 235);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, ".f-74");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "label", 236);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, ".f-76");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "label", 237);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, ".f-78");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "label", 238);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, ".f-80");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "h6", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "Font weight ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](497, "hr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "label", 239);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, ".f-w-100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "label", 240);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, ".f-w-200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "label", 241);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, ".f-w-300");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "label", 242);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, ".f-w-400");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "label", 243);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, ".f-w-500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "label", 244);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, ".f-w-600");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "label", 245);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, ".f-w-700");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "label", 246);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, ".f-w-800");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "label", 247);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, ".f-w-900");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "h6", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "Border width ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](519, "hr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "label", 248);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, ".b-wid-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "label", 249);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, ".b-wid-2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "label", 250);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](525, ".b-wid-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "label", 251);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, ".b-wid-4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "label", 252);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, ".b-wid-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "label", 253);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](531, ".b-wid-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "label", 254);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, ".b-wid-7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "label", 255);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, ".b-wid-8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "app-card", 256);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "div", 257);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "No shadow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "div", 258);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "Small shadow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "div", 259);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](543, "Regular shadow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "div", 260);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, "Larger shadow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "app-card", 261);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "div", 262);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "div", 263);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "div", 264);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](551, "iframe", 265);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "app-card", 266);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, "Aspect Ratios 21by9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](558, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "div", 267);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](560, "iframe", 268);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, "Aspect Ratios 16by9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](564, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "div", 264);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](566, "iframe", 269);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, "Aspect Ratios 4by3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](570, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "div", 270);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](572, "iframe", 265);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, "Aspect Ratios 1by1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](576, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "div", 271);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](578, "iframe", 272);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](489);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);
        }
      },
      directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtb3RoZXIvYmFzaWMtb3RoZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicOtherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basic-other',
          templateUrl: './basic-other.component.html',
          styleUrls: ['./basic-other.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: BasicOtherModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicOtherBasicOtherModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicOtherModule", function () {
      return BasicOtherModule;
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


    var _basic_other_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-other-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-other/basic-other-routing.module.ts");
    /* harmony import */


    var _basic_other_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-other.component */
    "./src/app/demo/ui-elements/ui-basic/basic-other/basic-other.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var BasicOtherModule = function BasicOtherModule() {
      _classCallCheck(this, BasicOtherModule);
    };

    BasicOtherModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BasicOtherModule
    });
    BasicOtherModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BasicOtherModule_Factory(t) {
        return new (t || BasicOtherModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_other_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicOtherRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicOtherModule, {
        declarations: [_basic_other_component__WEBPACK_IMPORTED_MODULE_3__["BasicOtherComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_other_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicOtherRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicOtherModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_other_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicOtherRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"]],
          declarations: [_basic_other_component__WEBPACK_IMPORTED_MODULE_3__["BasicOtherComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=basic-other-basic-other-module-es5.js.map