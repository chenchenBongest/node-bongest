function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-spinner-basic-spinner-module"], {
  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: BasicSpinnerRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicSpinnerBasicSpinnerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicSpinnerRoutingModule", function () {
      return BasicSpinnerRoutingModule;
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


    var _basic_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-spinner.component */
    "./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.component.ts");

    var routes = [{
      path: '',
      component: _basic_spinner_component__WEBPACK_IMPORTED_MODULE_2__["BasicSpinnerComponent"]
    }];

    var BasicSpinnerRoutingModule = function BasicSpinnerRoutingModule() {
      _classCallCheck(this, BasicSpinnerRoutingModule);
    };

    BasicSpinnerRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicSpinnerRoutingModule
    });
    BasicSpinnerRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicSpinnerRoutingModule_Factory(t) {
        return new (t || BasicSpinnerRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicSpinnerRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicSpinnerRoutingModule, [{
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
  "./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.component.ts ***!
    \************************************************************************************/

  /*! exports provided: BasicSpinnerComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicSpinnerBasicSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicSpinnerComponent", function () {
      return BasicSpinnerComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BasicSpinnerComponent_span_125_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 30);
      }
    }

    function BasicSpinnerComponent_span_126_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function BasicSpinnerComponent_span_127_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function BasicSpinnerComponent_span_129_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 31);
      }
    }

    function BasicSpinnerComponent_span_130_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function BasicSpinnerComponent_span_131_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var BasicSpinnerComponent =
    /*#__PURE__*/
    function () {
      function BasicSpinnerComponent() {
        _classCallCheck(this, BasicSpinnerComponent);

        this.btnLoader = false;
        this.submitLoader = false;
      }

      _createClass(BasicSpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onBtnLoader",
        value: function onBtnLoader() {
          var _this = this;

          this.btnLoader = true;
          setTimeout(function () {
            _this.btnLoader = false;
          }, 2000);
        }
      }, {
        key: "onSubmitLoader",
        value: function onSubmitLoader() {
          var _this2 = this;

          this.submitLoader = true;
          setTimeout(function () {
            _this2.submitLoader = false;
          }, 2000);
        }
      }]);

      return BasicSpinnerComponent;
    }();

    BasicSpinnerComponent.??fac = function BasicSpinnerComponent_Factory(t) {
      return new (t || BasicSpinnerComponent)();
    };

    BasicSpinnerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BasicSpinnerComponent,
      selectors: [["app-basic-spinner"]],
      decls: 132,
      vars: 14,
      consts: [[1, "row"], [1, "col-sm-6"], ["cardTitle", "Border spinner", 3, "options"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], ["cardTitle", "Border spinner [ Colors ]", 3, "options"], ["role", "status", 1, "spinner-border", "text-primary"], ["role", "status", 1, "spinner-border", "text-secondary"], ["role", "status", 1, "spinner-border", "text-success"], ["role", "status", 1, "spinner-border", "text-danger"], ["role", "status", 1, "spinner-border", "text-warning"], ["role", "status", 1, "spinner-border", "text-info"], ["role", "status", 1, "spinner-border", "text-light"], ["role", "status", 1, "spinner-border", "text-dark"], ["cardTitle", "Growing spinner", 3, "options"], ["role", "status", 1, "spinner-grow"], ["cardTitle", "Growing spinner [ Colors ]", 3, "options"], ["role", "status", 1, "spinner-grow", "text-primary"], ["role", "status", 1, "spinner-grow", "text-secondary"], ["role", "status", 1, "spinner-grow", "text-success"], ["role", "status", 1, "spinner-grow", "text-danger"], ["role", "status", 1, "spinner-grow", "text-warning"], ["role", "status", 1, "spinner-grow", "text-info"], ["role", "status", 1, "spinner-grow", "text-light"], ["role", "status", 1, "spinner-grow", "text-dark"], ["cardTitle", "Placement", 3, "options"], [1, "d-flex", "justify-content-start"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-end"], ["cardTitle", "Size", 3, "options"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm"], ["role", "status", 1, "spinner-border", 2, "width", "3rem", "height", "3rem"], ["role", "status", 1, "spinner-grow", 2, "width", "3rem", "height", "3rem"], ["cardTitle", "Buttons", 3, "options"], ["type", "button", "disabled", "", 1, "btn", "btn-primary", "m-2"], [1, "col-sm-12"], ["cardTitle", "Event Buttons", 3, "options"], ["type", "button", 1, "btn", "btn-primary", "event-btn", "m-2", 3, "click"], ["class", "spinner-border spinner-border-sm", "role", "status", 4, "ngIf"], ["class", "load-text", 4, "ngIf"], ["class", "btn-text", 4, "ngIf"], ["class", "spinner-grow spinner-grow-sm", "role", "status", 4, "ngIf"], [1, "load-text"], [1, "btn-text"]],
      template: function BasicSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "app-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "app-card", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "app-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "app-card", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "End");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "app-card", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Custom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "app-card", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, " Loading... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, " Loading... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "app-card", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicSpinnerComponent_Template_button_click_124_listener($event) {
            return ctx.onBtnLoader();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](125, BasicSpinnerComponent_span_125_Template, 1, 0, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](126, BasicSpinnerComponent_span_126_Template, 2, 0, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](127, BasicSpinnerComponent_span_127_Template, 2, 0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicSpinnerComponent_Template_button_click_128_listener($event) {
            return ctx.onSubmitLoader();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](129, BasicSpinnerComponent_span_129_Template, 1, 0, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](130, BasicSpinnerComponent_span_130_Template, 2, 0, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](131, BasicSpinnerComponent_span_131_Template, 2, 0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.btnLoader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.btnLoader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.btnLoader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitLoader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitLoader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.submitLoader);
        }
      },
      directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtc3Bpbm5lci9iYXNpYy1zcGlubmVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basic-spinner',
          templateUrl: './basic-spinner.component.html',
          styleUrls: ['./basic-spinner.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: BasicSpinnerModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicSpinnerBasicSpinnerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicSpinnerModule", function () {
      return BasicSpinnerModule;
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


    var _basic_spinner_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-spinner-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner-routing.module.ts");
    /* harmony import */


    var _basic_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-spinner.component */
    "./src/app/demo/ui-elements/ui-basic/basic-spinner/basic-spinner.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var BasicSpinnerModule = function BasicSpinnerModule() {
      _classCallCheck(this, BasicSpinnerModule);
    };

    BasicSpinnerModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicSpinnerModule
    });
    BasicSpinnerModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicSpinnerModule_Factory(t) {
        return new (t || BasicSpinnerModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_spinner_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicSpinnerRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicSpinnerModule, {
        declarations: [_basic_spinner_component__WEBPACK_IMPORTED_MODULE_3__["BasicSpinnerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_spinner_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicSpinnerRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicSpinnerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_basic_spinner_component__WEBPACK_IMPORTED_MODULE_3__["BasicSpinnerComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_spinner_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicSpinnerRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=basic-spinner-basic-spinner-module-es5.js.map