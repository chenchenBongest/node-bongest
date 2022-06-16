function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-typography-basic-typography-module"], {
  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography-routing.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography-routing.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: BasicTypographyRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicTypographyBasicTypographyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicTypographyRoutingModule", function () {
      return BasicTypographyRoutingModule;
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


    var _basic_typography_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-typography.component */
    "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.ts");

    var routes = [{
      path: '',
      component: _basic_typography_component__WEBPACK_IMPORTED_MODULE_2__["BasicTypographyComponent"]
    }];

    var BasicTypographyRoutingModule = function BasicTypographyRoutingModule() {
      _classCallCheck(this, BasicTypographyRoutingModule);
    };

    BasicTypographyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BasicTypographyRoutingModule
    });
    BasicTypographyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BasicTypographyRoutingModule_Factory(t) {
        return new (t || BasicTypographyRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicTypographyRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicTypographyRoutingModule, [{
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
  "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: BasicTypographyComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicTypographyBasicTypographyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicTypographyComponent", function () {
      return BasicTypographyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../theme/shared/components/card/card.component */
    "./src/app/theme/shared/components/card/card.component.ts");

    var BasicTypographyComponent =
    /*#__PURE__*/
    function () {
      function BasicTypographyComponent() {
        _classCallCheck(this, BasicTypographyComponent);
      }

      _createClass(BasicTypographyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicTypographyComponent;
    }();

    BasicTypographyComponent.ɵfac = function BasicTypographyComponent_Factory(t) {
      return new (t || BasicTypographyComponent)();
    };

    BasicTypographyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BasicTypographyComponent,
      selectors: [["app-basic-typography"]],
      decls: 202,
      vars: 9,
      consts: [[1, "row"], [1, "col-sm-12"], ["cardTitle", "Headings", 3, "options"], [1, "text-muted", "mb-4"], [1, "clearfix"], [1, "text-muted", "mb-0"], ["cardTitle", "Display Headings", 3, "options"], [1, "display-1"], [1, "display-2"], [1, "display-3"], [1, "display-4"], [1, "col-md-6"], ["cardTitle", "Inline Text Elements", 3, "options"], [1, "lead", "m-t-0"], ["cardTitle", "Contextual Text Colors", 3, "options"], [1, "text-muted", "mb-1"], [1, "text-primary", "mb-1"], [1, "text-success", "mb-1"], [1, "text-info", "mb-1"], [1, "text-warning", "mb-1"], [1, "text-danger", "mb-1"], [1, "text-dark", "mb-1"], [1, "col-md-6", "col-lg-4"], ["cardTitle", "Unordered", 3, "options"], ["cardTitle", "Ordered", 3, "options"], [1, "col-md-12", "col-lg-4"], ["cardTitle", "Unstyled", 3, "options"], [1, "list-unstyled"], [1, "list-inline", "m-b-0"], [1, "list-inline-item"], ["cardTitle", "Blockquotes", 3, "options"], [1, "text-muted", "m-b-30"], [1, "blockquote"], [1, "mb-2"], [1, "blockquote-footer"], ["title", "Source Title"], [1, "text-muted", "m-b-15", "m-t-20"], [1, "blockquote", "text-right"], ["cardTitle", "Horizontal Description", 3, "options"], [1, "dl-horizontal", "row"], [1, "col-sm-3"], [1, "col-sm-9"], [1, "col-sm-3", "text-truncate"]],
      template: function BasicTypographyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This is a Heading 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla elit. Morbi tempor tincidunt tempor. Etiam id turpis viverra, vulputate sapien nec, varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros hendrerit est consequat posuere et at velit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "This is a Heading 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "In nec rhoncus eros. Vestibulum eu mattis nisl. Quisque viverra viverra magna nec pulvinar. Maecenas pellentesque porta augue, consectetur facilisis diam porttitor sed. Suspendisse tempor est sodales augue rutrum tincidunt. Quisque a malesuada purus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "This is a Heading 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Vestibulum auctor tincidunt semper. Phasellus ut vulputate lacus. Suspendisse ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in tellus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "This is a Heading 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nulla et mattis nunc. Curabitur scelerisque commodo condimentum. Mauris blandit, velit a consectetur egestas, diam arcu fermentum justo, eget ultrices arcu eros vel erat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "This is a Heading 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus elementum. Suspendisse molestie ullamcorper ornare.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "This is a Heading 6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Donec ultricies, lacus id tempor condimentum, orci leo faucibus sem, a molestie libero lectus ac justo. ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in tellus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Display 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Display 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Display 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Display 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "app-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Your title goes here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " You can use the mark tag to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "highlight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " text. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "del");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "This line of text is meant to be treated as deleted text.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "This line of text is meant to be treated as an addition to the document.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "rendered as bold text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "rendered as italicized text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "app-card", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Nullam id dolor id nibh ultricies vehicula ut id elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Maecenas sed diam eget risus varius blandit sit amet non magna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Etiam porta sem malesuada magna mollis euismod.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Donec ullamcorper nulla non metus auctor fringilla.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Nullam id dolor id nibh ultricies vehicula ut id elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "app-card", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Lorem ipsum dolor sit amet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Consectetur adipiscing elit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Integer molestie lorem at massa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Facilisis in pretium nisl aliquet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Nulla volutpat aliquam velit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Phasellus iaculis neque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Purus sodales ultricies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Vestibulum laoreet porttitor sem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Ac tristique libero volutpat at");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Faucibus porta lacus fringilla vel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Aenean sit amet erat nunc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Eget porttitor lorem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "app-card", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Lorem ipsum dolor sit amet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Consectetur adipiscing elit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Integer molestie lorem at massa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Facilisis in pretium nisl aliquet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Nulla volutpat aliquam velit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Phasellus iaculis neque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Purus sodales ultricies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Vestibulum laoreet porttitor sem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Ac tristique libero volutpat at");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Faucibus porta lacus fringilla vel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Aenean sit amet erat nunc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Eget porttitor lorem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "app-card", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Lorem ipsum dolor sit amet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Integer molestie lorem at massa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Phasellus iaculis neque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Faucibus porta lacus fringilla vel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Eget porttitor lorem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Inline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "ul", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Lorem ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Phasellus iaculis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Nulla volutpat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "app-card", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Your awesome text goes here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "blockquote", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "footer", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Someone famous in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "cite", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Source Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, ".text-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " for a blockquote with right-aligned content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "blockquote", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "footer", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Someone famous in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "cite", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Source Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "app-card", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "dl", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "dt", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Description lists");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "dd", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "A description list is perfect for defining terms.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "dt", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Euismod");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "dd", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "dd", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Donec id elit non mi porta gravida at eget metus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "dt", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Malesuada porta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "dd", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Etiam porta sem malesuada magna mollis euismod.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "dt", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Truncated term is truncated");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "dd", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);
        }
      },
      directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtdHlwb2dyYXBoeS9iYXNpYy10eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicTypographyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basic-typography',
          templateUrl: './basic-typography.component.html',
          styleUrls: ['./basic-typography.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: BasicTypographyModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicTypographyBasicTypographyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicTypographyModule", function () {
      return BasicTypographyModule;
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


    var _basic_typography_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-typography-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography-routing.module.ts");
    /* harmony import */


    var _basic_typography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-typography.component */
    "./src/app/demo/ui-elements/ui-basic/basic-typography/basic-typography.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var BasicTypographyModule = function BasicTypographyModule() {
      _classCallCheck(this, BasicTypographyModule);
    };

    BasicTypographyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BasicTypographyModule
    });
    BasicTypographyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BasicTypographyModule_Factory(t) {
        return new (t || BasicTypographyModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_typography_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicTypographyRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicTypographyModule, {
        declarations: [_basic_typography_component__WEBPACK_IMPORTED_MODULE_3__["BasicTypographyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_typography_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicTypographyRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicTypographyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_typography_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicTypographyRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
          declarations: [_basic_typography_component__WEBPACK_IMPORTED_MODULE_3__["BasicTypographyComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=basic-typography-basic-typography-module-es5.js.map