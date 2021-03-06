function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~theme-horizontal-theme-horizontal-module~theme-static-theme-static-module"], {
  /***/
  "./src/app/demo/pages/layout/common-content/common-content.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/demo/pages/layout/common-content/common-content.component.ts ***!
    \******************************************************************************/

  /*! exports provided: CommonContentComponent */

  /***/
  function srcAppDemoPagesLayoutCommonContentCommonContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonContentComponent", function () {
      return CommonContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../theme/shared/components/card/card.component */
    "./src/app/theme/shared/components/card/card.component.ts");

    var CommonContentComponent =
    /*#__PURE__*/
    function () {
      function CommonContentComponent() {
        _classCallCheck(this, CommonContentComponent);
      }

      _createClass(CommonContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CommonContentComponent;
    }();

    CommonContentComponent.??fac = function CommonContentComponent_Factory(t) {
      return new (t || CommonContentComponent)();
    };

    CommonContentComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CommonContentComponent,
      selectors: [["app-common-content"]],
      decls: 117,
      vars: 5,
      consts: [[1, "row"], [1, "col-md-6"], ["cardTitle", "Inline Text Elements", 3, "options"], [1, "lead", "m-t-0"], ["cardTitle", "Contextual Text Colors", 3, "options"], [1, "text-muted", "mb-1"], [1, "text-primary", "mb-1"], [1, "text-success", "mb-1"], [1, "text-info", "mb-1"], [1, "text-warning", "mb-1"], [1, "text-danger", "mb-1"], [1, "text-dark", "mb-1"], [1, "col-md-6", "col-lg-4"], ["cardTitle", "Unordered", 3, "options"], ["cardTitle", "Ordered", 3, "options"], [1, "col-md-12", "col-lg-4"], ["cardTitle", "Unstyled", 3, "options"], [1, "list-unstyled"], [1, "list-inline", "m-b-0"], [1, "list-inline-item"]],
      template: function CommonContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Your title goes here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " You can use the mark tag to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "highlight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " text. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "del");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "This line of text is meant to be treated as deleted text.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "ins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "This line of text is meant to be treated as an addition to the document.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "rendered as bold text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "rendered as italicized text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "app-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Nullam id dolor id nibh ultricies vehicula ut id elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Maecenas sed diam eget risus varius blandit sit amet non magna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Etiam porta sem malesuada magna mollis euismod.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Donec ullamcorper nulla non metus auctor fringilla.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Nullam id dolor id nibh ultricies vehicula ut id elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "app-card", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Lorem ipsum dolor sit amet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Consectetur adipiscing elit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Integer molestie lorem at massa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Facilisis in pretium nisl aliquet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Nulla volutpat aliquam velit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Phasellus iaculis neque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Purus sodales ultricies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Vestibulum laoreet porttitor sem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Ac tristique libero volutpat at");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Faucibus porta lacus fringilla vel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Aenean sit amet erat nunc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Eget porttitor lorem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "app-card", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Lorem ipsum dolor sit amet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Consectetur adipiscing elit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Integer molestie lorem at massa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Facilisis in pretium nisl aliquet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Nulla volutpat aliquam velit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Phasellus iaculis neque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Purus sodales ultricies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Vestibulum laoreet porttitor sem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Ac tristique libero volutpat at");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Faucibus porta lacus fringilla vel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Aenean sit amet erat nunc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Eget porttitor lorem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "app-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Lorem ipsum dolor sit amet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Integer molestie lorem at massa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Phasellus iaculis neque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Faucibus porta lacus fringilla vel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Eget porttitor lorem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Inline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Lorem ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Phasellus iaculis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Nulla volutpat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);
        }
      },
      directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvbGF5b3V0L2NvbW1vbi1jb250ZW50L2NvbW1vbi1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CommonContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-common-content',
          templateUrl: './common-content.component.html',
          styleUrls: ['./common-content.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/pages/layout/common-content/common-content.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/demo/pages/layout/common-content/common-content.module.ts ***!
    \***************************************************************************/

  /*! exports provided: CommonContentModule */

  /***/
  function srcAppDemoPagesLayoutCommonContentCommonContentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonContentModule", function () {
      return CommonContentModule;
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


    var _common_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./common-content.component */
    "./src/app/demo/pages/layout/common-content/common-content.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var CommonContentModule = function CommonContentModule() {
      _classCallCheck(this, CommonContentModule);
    };

    CommonContentModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: CommonContentModule
    });
    CommonContentModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function CommonContentModule_Factory(t) {
        return new (t || CommonContentModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CommonContentModule, {
        declarations: [_common_content_component__WEBPACK_IMPORTED_MODULE_2__["CommonContentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
        exports: [_common_content_component__WEBPACK_IMPORTED_MODULE_2__["CommonContentComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CommonContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_common_content_component__WEBPACK_IMPORTED_MODULE_2__["CommonContentComponent"]],
          exports: [_common_content_component__WEBPACK_IMPORTED_MODULE_2__["CommonContentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~theme-horizontal-theme-horizontal-module~theme-static-theme-static-module-es5.js.map