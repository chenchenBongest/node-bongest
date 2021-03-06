function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-badge-basic-badge-module"], {
  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: BasicBadgeRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicBadgeBasicBadgeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicBadgeRoutingModule", function () {
      return BasicBadgeRoutingModule;
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


    var _basic_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-badge.component */
    "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.ts");

    var routes = [{
      path: '',
      component: _basic_badge_component__WEBPACK_IMPORTED_MODULE_2__["BasicBadgeComponent"]
    }];

    var BasicBadgeRoutingModule = function BasicBadgeRoutingModule() {
      _classCallCheck(this, BasicBadgeRoutingModule);
    };

    BasicBadgeRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicBadgeRoutingModule
    });
    BasicBadgeRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicBadgeRoutingModule_Factory(t) {
        return new (t || BasicBadgeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicBadgeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicBadgeRoutingModule, [{
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
  "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.ts ***!
    \********************************************************************************/

  /*! exports provided: BasicBadgeComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicBadgeBasicBadgeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicBadgeComponent", function () {
      return BasicBadgeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../theme/shared/components/card/card.component */
    "./src/app/theme/shared/components/card/card.component.ts");

    var BasicBadgeComponent =
    /*#__PURE__*/
    function () {
      function BasicBadgeComponent() {
        _classCallCheck(this, BasicBadgeComponent);
      }

      _createClass(BasicBadgeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicBadgeComponent;
    }();

    BasicBadgeComponent.??fac = function BasicBadgeComponent_Factory(t) {
      return new (t || BasicBadgeComponent)();
    };

    BasicBadgeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BasicBadgeComponent,
      selectors: [["app-basic-badge"]],
      decls: 125,
      vars: 6,
      consts: [[1, "row", "btn-page"], [1, "col-sm-12"], ["cardTitle", "Basic Badges", 3, "options"], [1, "badge", "badge-secondary"], ["cardTitle", "Button Badges", 3, "options"], ["type", "button", 1, "btn", "btn-primary"], [1, "badge", "badge-light"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-danger"], ["type", "button", 1, "btn", "btn-warning"], ["type", "button", 1, "btn", "btn-info"], ["cardTitle", "Contextual Variations", 3, "options"], [1, "badge", "m-r-5", "badge-primary"], [1, "badge", "m-r-5", "badge-secondary"], [1, "badge", "m-r-5", "badge-success"], [1, "badge", "m-r-5", "badge-danger"], [1, "badge", "m-r-5", "badge-warning"], [1, "badge", "m-r-5", "badge-info"], [1, "badge", "m-r-5", "badge-light"], [1, "badge", "badge-dark"], ["cardTitle", "Pill Badges", 3, "options"], [1, "badge", "m-r-5", "badge-pill", "badge-primary"], [1, "badge", "m-r-5", "badge-pill", "badge-secondary"], [1, "badge", "m-r-5", "badge-pill", "badge-success"], [1, "badge", "m-r-5", "badge-pill", "badge-danger"], [1, "badge", "m-r-5", "badge-pill", "badge-warning"], [1, "badge", "m-r-5", "badge-pill", "badge-info"], [1, "badge", "m-r-5", "badge-pill", "badge-light"], [1, "badge", "badge-pill", "badge-dark"], ["cardTitle", "Links", 3, "options"], ["href", "javascript:", 1, "badge", "m-r-5", "badge-primary"], ["href", "javascript:", 1, "badge", "m-r-5", "badge-secondary"], ["href", "javascript:", 1, "badge", "m-r-5", "badge-success"], ["href", "javascript:", 1, "badge", "m-r-5", "badge-danger"], ["href", "javascript:", 1, "badge", "m-r-5", "badge-warning"], ["href", "javascript:", 1, "badge", "m-r-5", "badge-info"], ["href", "javascript:", 1, "badge", "m-r-5", "badge-light"], ["href", "javascript:", 1, "badge", "badge-dark"], ["cardTitle", "Light variant", 3, "options"], [1, "badge", "m-r-5", "badge-light-primary"], [1, "badge", "m-r-5", "badge-light-secondary"], [1, "badge", "m-r-5", "badge-light-success"], [1, "badge", "m-r-5", "badge-light-danger"], [1, "badge", "m-r-5", "badge-light-warning"], [1, "badge", "m-r-5", "badge-light-info"], [1, "badge", "m-r-5", "badge-light-light"], [1, "badge", "badge-light-dark"]],
      template: function BasicBadgeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Example heading ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Example heading ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Example heading ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Example heading ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Example heading ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Example heading ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "app-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "primary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "secondary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "success ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "danger ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "warning ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "app-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "app-card", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "app-card", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "app-card", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Secondary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Light");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);
        }
      },
      directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtYmFkZ2UvYmFzaWMtYmFkZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicBadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basic-badge',
          templateUrl: './basic-badge.component.html',
          styleUrls: ['./basic-badge.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: BasicBadgeModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicBadgeBasicBadgeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicBadgeModule", function () {
      return BasicBadgeModule;
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


    var _basic_badge_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-badge-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge-routing.module.ts");
    /* harmony import */


    var _basic_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-badge.component */
    "./src/app/demo/ui-elements/ui-basic/basic-badge/basic-badge.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var BasicBadgeModule = function BasicBadgeModule() {
      _classCallCheck(this, BasicBadgeModule);
    };

    BasicBadgeModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicBadgeModule
    });
    BasicBadgeModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicBadgeModule_Factory(t) {
        return new (t || BasicBadgeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_badge_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicBadgeRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicBadgeModule, {
        declarations: [_basic_badge_component__WEBPACK_IMPORTED_MODULE_3__["BasicBadgeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_badge_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicBadgeRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicBadgeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_badge_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicBadgeRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
          declarations: [_basic_badge_component__WEBPACK_IMPORTED_MODULE_3__["BasicBadgeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=basic-badge-basic-badge-module-es5.js.map