function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-button-basic-button-module"], {
  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-button/basic-button-routing.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: BasicButtonRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicButtonBasicButtonRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicButtonRoutingModule", function () {
      return BasicButtonRoutingModule;
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


    var _basic_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-button.component */
    "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.ts");

    var routes = [{
      path: '',
      component: _basic_button_component__WEBPACK_IMPORTED_MODULE_2__["BasicButtonComponent"]
    }];

    var BasicButtonRoutingModule = function BasicButtonRoutingModule() {
      _classCallCheck(this, BasicButtonRoutingModule);
    };

    BasicButtonRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicButtonRoutingModule
    });
    BasicButtonRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicButtonRoutingModule_Factory(t) {
        return new (t || BasicButtonRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicButtonRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicButtonRoutingModule, [{
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
  "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: BasicButtonComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicButtonBasicButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicButtonComponent", function () {
      return BasicButtonComponent;
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var BasicButtonComponent =
    /*#__PURE__*/
    function () {
      function BasicButtonComponent() {
        _classCallCheck(this, BasicButtonComponent);

        this.radioButtons = '1';
        this.checkBox = {
          left: true,
          center: false,
          right: false
        };
      }

      _createClass(BasicButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicButtonComponent;
    }();

    BasicButtonComponent.??fac = function BasicButtonComponent_Factory(t) {
      return new (t || BasicButtonComponent)();
    };

    BasicButtonComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BasicButtonComponent,
      selectors: [["app-basic-button"]],
      decls: 619,
      vars: 28,
      consts: [[1, "row", "btn-page"], [1, "col-sm-12"], ["cardTitle", "Default", 3, "options"], ["type", "button", "ngbTooltip", "btn-primary", 1, "btn", "btn-primary"], ["type", "button", "ngbTooltip", "btn-secondary", 1, "btn", "btn-secondary"], ["type", "button", "ngbTooltip", "btn-success", 1, "btn", "btn-success"], ["type", "button", "ngbTooltip", "btn-danger", 1, "btn", "btn-danger"], ["type", "button", "ngbTooltip", "btn-warning", 1, "btn", "btn-warning"], ["type", "button", "ngbTooltip", "btn-info", 1, "btn", "btn-info"], ["type", "button", "ngbTooltip", "btn-light", 1, "btn", "btn-light"], ["type", "button", "ngbTooltip", "btn-dark", 1, "btn", "btn-dark"], ["type", "button", "ngbTooltip", "btn-link", 1, "btn", "btn-link"], ["cardTitle", "Outline", 3, "options"], ["type", "button", "ngbTooltip", "btn-outline-primary", 1, "btn", "btn-outline-primary"], ["type", "button", "ngbTooltip", "btn-outline-secondary", 1, "btn", "btn-outline-secondary"], ["type", "button", "ngbTooltip", "btn-outline-success", 1, "btn", "btn-outline-success"], ["type", "button", "ngbTooltip", "btn-outline-danger", 1, "btn", "btn-outline-danger"], ["type", "button", "ngbTooltip", "btn-outline-warning", 1, "btn", "btn-outline-warning"], ["type", "button", "ngbTooltip", "btn-outline-info", 1, "btn", "btn-outline-info"], ["type", "button", "ngbTooltip", "btn-outline-light", 1, "btn", "btn-outline-light"], ["type", "button", "ngbTooltip", "btn-outline-dark", 1, "btn", "btn-outline-dark"], ["cardTitle", "Disabled Button", 3, "options"], ["type", "button", 1, "btn", "disabled", "btn-primary"], ["type", "button", 1, "btn", "disabled", "btn-secondary"], ["type", "button", 1, "btn", "disabled", "btn-success"], ["type", "button", 1, "btn", "disabled", "btn-danger"], ["type", "button", 1, "btn", "disabled", "btn-warning"], ["type", "button", 1, "btn", "disabled", "btn-info"], ["type", "button", 1, "btn", "disabled", "btn-light"], ["type", "button", 1, "btn", "disabled", "btn-dark"], [1, "col-md-6"], ["cardTitle", "Sizes [ Large ]", 3, "options"], ["type", "button", 1, "btn", "btn-primary", "btn-lg"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg"], ["cardTitle", "Sizes [ small ]", 3, "options"], ["type", "button", 1, "btn", "btn-primary", "btn-sm"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm"], ["cardTitle", "Checkbox Button", 3, "options"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle"], ["ngbButtonLabel", "", 1, "btn", "btn-secondary"], ["type", "checkbox", "ngbButton", "", 3, "ngModel", "ngModelChange"], ["cardTitle", "Radio Buttons", 3, "options"], ["ngbRadioGroup", "", 1, "btn-group", "btn-group-toggle", 3, "ngModel", "ngModelChange"], ["ngbButtonLabel", "", 1, "btn", "btn-secondary", "active"], ["type", "radio", "ngbButton", "", "name", "options", "id", "option1", "value", "1", "checked", ""], ["type", "radio", "ngbButton", "", "name", "options", "id", "option2", "value", "2"], ["type", "radio", "ngbButton", "", "name", "options", "id", "option3", "value", "3"], ["cardTitle", "Buttons With Icon", 3, "options"], ["type", "button", 1, "btn", "btn-primary"], [1, "feather", "icon-thumbs-up"], ["type", "button", 1, "btn", "btn-secondary"], [1, "feather", "icon-camera"], ["type", "button", 1, "btn", "btn-success"], [1, "feather", "icon-check-circle"], ["type", "button", 1, "btn", "btn-danger"], [1, "feather", "icon-slash"], ["type", "button", 1, "btn", "btn-warning"], [1, "feather", "icon-alert-triangle"], ["type", "button", 1, "btn", "btn-info"], [1, "feather", "icon-info"], ["cardTitle", "Outline Icon Buttons", 3, "options"], ["type", "button", 1, "btn", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-outline-success"], ["type", "button", 1, "btn", "btn-outline-danger"], ["type", "button", 1, "btn", "btn-outline-warning"], ["type", "button", 1, "btn", "btn-outline-info"], ["cardTitle", "Only Icon", 3, "options"], ["type", "button", 1, "btn", "btn-icon", "btn-primary"], ["type", "button", 1, "btn", "btn-icon", "btn-secondary"], ["type", "button", 1, "btn", "btn-icon", "btn-success"], ["type", "button", 1, "btn", "btn-icon", "btn-danger"], ["type", "button", 1, "btn", "btn-icon", "btn-warning"], ["type", "button", 1, "btn", "btn-icon", "btn-info"], ["cardTitle", "Outline Icon", 3, "options"], ["type", "button", 1, "btn", "btn-icon", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-icon", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-icon", "btn-outline-success"], ["type", "button", 1, "btn", "btn-icon", "btn-outline-danger"], ["type", "button", 1, "btn", "btn-icon", "btn-outline-warning"], ["type", "button", 1, "btn", "btn-icon", "btn-outline-info"], ["cardTitle", "Basic Dropdown Button", 3, "options"], ["ngbDropdown", "", "placement", "auto", 1, "btn-group", "mb-2", "mr-2", "dropdown"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-primary"], ["ngbDropdownMenu", ""], ["href", "javascript:", 1, "dropdown-item"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-secondary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-success"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-danger"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-warning"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-info"], [1, "col-md-12"], ["cardTitle", "Split Dropdown Button", 3, "options"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle-split"], [1, "sr-only"], [1, "dropdown-divider"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-secondary", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-success", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-danger", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-warning", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-info", "dropdown-toggle-split"], ["cardTitle", "Basic Outline Dropdown Button", 3, "options"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-outline-primary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-outline-secondary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-outline-success"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-outline-danger"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-outline-warning"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-outline-info"], ["cardTitle", "Split Outline Dropdown Button", 3, "options"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-secondary", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-success", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-danger", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-warning", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-info", "dropdown-toggle-split"], ["cardTitle", "Basic Button Group", 3, "options"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "mb-2"], ["cardTitle", "Button Toolbar", 3, "options"], [1, "btn-toolbar"], [1, "btn-group", "mr-2"], [1, "btn-group"], ["cardTitle", "Button Toolbar Size", 3, "options"], [1, "row"], [1, "col-xl-4", "col-md-12", "mb-2"], ["role", "group", "aria-label", "button groups xl", 1, "btn-group", "btn-group-lg"], [1, "col-xl-4", "col-md-6", "mb-2"], ["role", "group", "aria-label", "button groups", 1, "btn-group"], ["role", "group", "aria-label", "button groups sm", 1, "btn-group", "btn-group-sm"], ["cardTitle", "Nesting", 3, "options"], ["role", "group", 1, "btn-group"], ["role", "group", "ngbDropdown", "", "placement", "auto", 1, "btn-group", "dropdown"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-secondary"], ["cardTitle", "Vertical Variation", 3, "options"], [1, "col-4"], ["role", "group", 1, "btn-group", "btn-group-vertical"], [1, "col-8"]],
      template: function BasicButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "app-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "app-card", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, ".disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, ".btn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " class to get Disabled button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "app-card", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, ".btn-lg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, ".btn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " class to get Large button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Large button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Large button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "app-card", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, ".btn-sm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, ".btn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, " class to get Small button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Small button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Small button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "app-card", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BasicButtonComponent_Template_input_ngModelChange_95_listener($event) {
            return ctx.checkBox.left = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " Left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BasicButtonComponent_Template_input_ngModelChange_98_listener($event) {
            return ctx.checkBox.center = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " Center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BasicButtonComponent_Template_input_ngModelChange_101_listener($event) {
            return ctx.checkBox.right = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " Right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "app-card", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BasicButtonComponent_Template_div_ngModelChange_105_listener($event) {
            return ctx.radioButtons = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, " Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " Radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](113, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, " Radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "app-card", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "i", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "i", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "i", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "app-card", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](144, "i", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "i", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "i", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "app-card", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](158, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "i", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "i", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "button", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "i", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "app-card", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](172, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](174, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "button", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](176, "i", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](178, "i", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](180, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](182, "i", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "app-card", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "button", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "button", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "button", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "button", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "button", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "button", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "app-card", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "button", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](260, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "button", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](276, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "button", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](292, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "button", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](308, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "button", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](324, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](340, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "app-card", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "button", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "button", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](360, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](362, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "button", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](372, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "button", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](380, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](384, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "button", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](387, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](390, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](392, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](394, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](395, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "button", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](397, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](400, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](402, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](404, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "app-card", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](409, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "button", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](412, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](415, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](417, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](419, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](420, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](422, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](425, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](426, "button", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](428, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](429, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](431, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](432, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](433, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](434, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](435, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](436, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](437, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](438, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](441, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](442, "button", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](444, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](445, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](447, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](449, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](450, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](451, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](452, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](457, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "button", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](459, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](460, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](462, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](463, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](467, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](468, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](469, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](470, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](471, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "button", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](476, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](478, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](479, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](481, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](482, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](483, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](484, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](485, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](486, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](487, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](489, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](490, "button", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "span", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](492, "Toggle Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](493, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](494, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](495, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](496, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](497, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](499, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](500, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](501, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](502, "Separated link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](503, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](504, "app-card", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](505, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](507, "Left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](509, "Middle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](510, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](511, "Right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](513, "app-card", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](515, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](517, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](518, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](519, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](521, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](523, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](524, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](525, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](526, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](527, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](528, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](530, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "div", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](532, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](533, "8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](534, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](535, "app-card", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](536, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](537, "div", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](538, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](539, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](540, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](541, ".btn-group-lg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](542, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](544, ".btn-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](545, " class to get large size button group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](546, "div", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](548, "Left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](549, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](550, "Middle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](551, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](552, "Right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](553, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](554, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](555, "this is default size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](557, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](558, "Left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](560, "Middle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](561, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](562, "Right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](563, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](564, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](565, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](566, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](567, ".btn-group-sm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](568, " in class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](569, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](570, ".btn-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](571, " class to get small size button group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](572, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](573, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](574, "Left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](575, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](576, "Middle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](577, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](578, "Right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](579, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](580, "app-card", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](581, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](582, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](583, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](584, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](585, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](586, "div", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](587, "button", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](588, " Dropdown ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](589, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](590, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](591, "Dropdown link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](592, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](593, "Dropdown link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](594, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](595, "app-card", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](596, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](597, "div", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](598, "div", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](599, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](600, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](601, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](602, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](603, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](604, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](605, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](606, "div", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](607, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](608, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](609, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](610, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](611, "div", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](612, "button", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](613, "Dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](614, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](615, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](616, "Dropdown link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](617, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](618, "Dropdown link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.checkBox.left);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.checkBox.center);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.checkBox.right);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.radioButtons);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("margin-left", "-1px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("margin-left", "-1px");
        }
      },
      directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbButtonLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCheckBox"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbRadio"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtYnV0dG9uL2Jhc2ljLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basic-button',
          templateUrl: './basic-button.component.html',
          styleUrls: ['./basic-button.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: BasicButtonModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicButtonBasicButtonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicButtonModule", function () {
      return BasicButtonModule;
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


    var _basic_button_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-button-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button-routing.module.ts");
    /* harmony import */


    var _basic_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-button.component */
    "./src/app/demo/ui-elements/ui-basic/basic-button/basic-button.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var BasicButtonModule = function BasicButtonModule() {
      _classCallCheck(this, BasicButtonModule);
    };

    BasicButtonModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicButtonModule
    });
    BasicButtonModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicButtonModule_Factory(t) {
        return new (t || BasicButtonModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_button_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicButtonRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicButtonModule, {
        declarations: [_basic_button_component__WEBPACK_IMPORTED_MODULE_3__["BasicButtonComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_button_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicButtonRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_button_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicButtonRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"]],
          declarations: [_basic_button_component__WEBPACK_IMPORTED_MODULE_3__["BasicButtonComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=basic-button-basic-button-module-es5.js.map