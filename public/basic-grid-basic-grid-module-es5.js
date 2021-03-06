function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-grid-basic-grid-module"], {
  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: BasicGridRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicGridBasicGridRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicGridRoutingModule", function () {
      return BasicGridRoutingModule;
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


    var _basic_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-grid.component */
    "./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.component.ts");

    var routes = [{
      path: '',
      component: _basic_grid_component__WEBPACK_IMPORTED_MODULE_2__["BasicGridComponent"]
    }];

    var BasicGridRoutingModule = function BasicGridRoutingModule() {
      _classCallCheck(this, BasicGridRoutingModule);
    };

    BasicGridRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicGridRoutingModule
    });
    BasicGridRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicGridRoutingModule_Factory(t) {
        return new (t || BasicGridRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicGridRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicGridRoutingModule, [{
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
  "./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.component.ts ***!
    \******************************************************************************/

  /*! exports provided: BasicGridComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicGridBasicGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicGridComponent", function () {
      return BasicGridComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../theme/shared/components/card/card.component */
    "./src/app/theme/shared/components/card/card.component.ts");

    var BasicGridComponent =
    /*#__PURE__*/
    function () {
      function BasicGridComponent() {
        _classCallCheck(this, BasicGridComponent);
      }

      _createClass(BasicGridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicGridComponent;
    }();

    BasicGridComponent.??fac = function BasicGridComponent_Factory(t) {
      return new (t || BasicGridComponent)();
    };

    BasicGridComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BasicGridComponent,
      selectors: [["app-basic-grid"]],
      decls: 383,
      vars: 3,
      consts: [[1, "row"], [1, "col-sm-12"], ["cardTitle", "Grid System", 3, "options"], [1, "mt-5"], ["target", "_blank", "href", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"], ["target", "_blank", "href", "https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background"], [1, "bd-example-row"], [1, "container"], [1, "col-sm"], [1, "language-markup"], [1, "highlighter-rouge"], ["href", "javascript:"], ["target", "_blank", "href", "https://github.com/philipwalton/flexbugs"], ["target", "_blank", "href", "https://github.com/philipwalton/flexbugs#flexbug-9"], ["cardTitle", "Grid Options", 3, "options"], ["href", "https://drafts.csswg.org/mediaqueries-3/#units"], [1, "table-responsive"], [1, "table", "table-bordered", "table-striped"], [1, "text-center"], ["scope", "row", 1, "text-nowrap"], ["colspan", "5"], ["cardTitle", "Auto Layout Columns", 3, "options"], [1, "col"], ["href", "https://github.com/philipwalton/flexbugs#flexbug-11"], [1, "w-100"], [1, "col-6"], [1, "col-5"], [1, "row", "justify-content-md-center"], [1, "col", "col-lg-2"], [1, "col-md-auto"], ["href", "/docs/4.1/utilities/display/"], [1, "container-fluid"]],
      template: function BasicGridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "How it works");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Bootstrap\u2019s grid system uses a series of containers, rows, and columns to layout and align content. It\u2019s built with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "flexbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " and is fully responsive. Below is an example and an in-depth look at how the grid comes together.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "New to or unfamiliar with flexbox?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Read this CSS Tricks flexbox guide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " for background, terminology, guidelines, and code snippets.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " One of three columns ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " One of three columns ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " One of three columns ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "\n              <div class=\"container\">\n                  <div class=\"row\">\n                      <div class=\"col-sm\">\n                          One of three columns\n                      </div>\n                      <div class=\"col-sm\">\n                          One of three columns\n                      </div>\n                      <div class=\"col-sm\">\n                          One of three columns\n                      </div>\n                  </div>\n              </div>\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "The above example creates three equal-width columns on small, medium, large, and extra large devices using our predefined grid classes. Those columns are centered in the page with the parent ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, ".container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Breaking it down, here\u2019s how it works:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Containers provide a means to center and horizontally pad your site\u2019s contents. Use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, ".container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " for a responsive pixel width or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, ".container-fluid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "width: 100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " across all viewport and device sizes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Rows are wrappers for columns. Each column has horizontal ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "padding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " (called a gutter) for controlling the space between them. This ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "padding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "In a grid layout, content must be placed within columns and only columns may be immediate children of rows.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Thanks to flexbox, grid columns without a specified ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "width");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " will automatically layout as equal width columns. For example, four instances of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, ".col-sm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " will each automatically be 25% wide from the small breakpoint and up. See the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "auto-layout columns");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " section for more examples.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Column classes indicate the number of columns you\u2019d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, ".col-4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Column ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "width");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "s are set in percentages, so they\u2019re always fluid and sized relative to their parent element.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Columns have horizontal ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "padding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, " to create the gutters between individual columns, however, you can remove the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "margin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, " from rows and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "padding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " from columns with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, ".no-gutters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, ".row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "To make the grid responsive, there are five grid breakpoints, one for each ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "responsive breakpoint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, ": all breakpoints (extra small), small, medium, large, and extra large.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Grid breakpoints are based on minimum width media queries, meaning ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "they apply to that one breakpoint and all those above it");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " (e.g., ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, ".col-sm-4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, " applies to small, medium, large, and extra large devices, but not the first ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "xs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, " breakpoint).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "You can use predefined grid classes (like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, ".col-4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, ") or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Sass mixins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, " for more semantic markup.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Be aware of the limitations and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "bugs around flexbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, ", like the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "inability to use some HTML elements as flex containers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "app-card", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "While Bootstrap uses ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "s or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "rem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "s for defining most sizes, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "s are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "font size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "See how aspects of the Bootstrap grid system work across multiple devices with a handy table.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](154, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, " Extra small ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](157, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "<576px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, " Small ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "\u2265576px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, " Medium ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](167, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "\u2265768px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, " Large ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](172, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "\u2265992px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, " Extra large ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](177, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "\u22651200px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "Max container width");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "None (auto)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "540px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "720px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "960px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "1140px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "Class prefix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, ".col-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, ".col-sm-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, ".col-md-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, ".col-lg-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, ".col-xl-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "# of columns");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Gutter width");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "30px (15px on each side of a column)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Nestable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Column ordering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "app-card", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, ".col-sm-6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "Equal-width");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](241, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "For example, here are two grid layouts that apply to every device and viewport, from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "xs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, " to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "xl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, ". Add any number of unit-less classes for each breakpoint you need and every column will be the same width.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, " 1 of 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, " 2 of 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, " 1 of 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, " 2 of 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, " 3 of 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "\n              <div class=\"container\">\n                  <div class=\"row\">\n                      <div class=\"col\">\n                          1 of 2\n                      </div>\n                      <div class=\"col\">\n                          2 of 2\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col\">\n                          1 of 3\n                      </div>\n                      <div class=\"col\">\n                          2 of 3\n                      </div>\n                      <div class=\"col\">\n                          3 of 3\n                      </div>\n                  </div>\n              </div>\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "Equal-width columns can be broken into multiple lines, but there was a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "Safari flexbox bug");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, " that prevented this from working without an explicit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "flex-basis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, "border");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, ". There are workarounds for older browser versions, but they shouldn\u2019t be necessary if you\u2019re up-to-date.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "Column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, "Column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](287, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, "Column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "Column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "\n              <div class=\"container\">\n                  <div class=\"row\">\n                      <div class=\"col\">Column</div>\n                      <div class=\"col\">Column</div>\n                      <div class=\"w-100\"></div>\n                      <div class=\"col\">Column</div>\n                      <div class=\"col\">Column</div>\n                  </div>\n              </div>\n              </div>\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "Setting one column width");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](299, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](306, " 1 of 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, " 2 of 3 (wider) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, " 3 of 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, " 1 of 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, " 2 of 3 (wider) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317, " 3 of 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "\n              <div class=\"container\">\n                  <div class=\"row\">\n                      <div class=\"col\">\n                          1 of 3\n                      </div>\n                      <div class=\"col-6\">\n                          2 of 3 (wider)\n                      </div>\n                      <div class=\"col\">\n                          3 of 3\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col\">\n                          1 of 3\n                      </div>\n                      <div class=\"col-5\">\n                          2 of 3 (wider)\n                      </div>\n                      <div class=\"col\">\n                          3 of 3\n                      </div>\n                  </div>\n              </div>\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](324, "Variable width content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](325, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, "Use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "col-*breakpoint*-auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330, " classes to size columns based on the natural width of their content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, " 1 of 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, " Variable width content ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, " 3 of 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, " 1 of 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, " Variable width content ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](346, " 3 of 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](348, "          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, "\n              <div class=\"container\">\n                  <div class=\"row justify-content-md-center\">\n                      <div class=\"col col-lg-2\">\n                          1 of 3\n                      </div>\n                      <div class=\"col-md-auto\">\n                          Variable width content\n                      </div>\n                      <div class=\"col col-lg-2\">\n                          3 of 3\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col\">\n                          1 of 3\n                      </div>\n                      <div class=\"col-md-auto\">\n                          Variable width content\n                      </div>\n                      <div class=\"col col-lg-2\">\n                          3 of 3\n                      </div>\n                  </div>\n              </div>\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](353, "Equal-width multi-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](354, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](356, "Create equal-width columns that span multiple rows by inserting a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, ".w-100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](359, " where you want the columns to break to a new line. Make the breaks responsive by mixing the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "code", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, ".w-100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](362, " with some ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, "responsive display utilities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, "col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](372, "col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](373, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, "col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](379, "          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "code", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](381, "\n              <div class=\"row\">\n                  <div class=\"col\">col</div>\n                  <div class=\"col\">col</div>\n                  <div class=\"w-100\"></div>\n                  <div class=\"col\">col</div>\n                  <div class=\"col\">col</div>\n              </div>\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);
        }
      },
      directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtZ3JpZC9iYXNpYy1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basic-grid',
          templateUrl: './basic-grid.component.html',
          styleUrls: ['./basic-grid.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.module.ts ***!
    \***************************************************************************/

  /*! exports provided: BasicGridModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicGridBasicGridModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicGridModule", function () {
      return BasicGridModule;
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


    var _basic_grid_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-grid-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid-routing.module.ts");
    /* harmony import */


    var _basic_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-grid.component */
    "./src/app/demo/ui-elements/ui-basic/basic-grid/basic-grid.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var BasicGridModule = function BasicGridModule() {
      _classCallCheck(this, BasicGridModule);
    };

    BasicGridModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicGridModule
    });
    BasicGridModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicGridModule_Factory(t) {
        return new (t || BasicGridModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_grid_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicGridRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicGridModule, {
        declarations: [_basic_grid_component__WEBPACK_IMPORTED_MODULE_3__["BasicGridComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_grid_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicGridRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicGridModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_grid_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicGridRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
          declarations: [_basic_grid_component__WEBPACK_IMPORTED_MODULE_3__["BasicGridComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=basic-grid-basic-grid-module-es5.js.map