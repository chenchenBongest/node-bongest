function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["breadcrumb-paging-breadcrumb-paging-module"], {
  /***/
  "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging-routing.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging-routing.module.ts ***!
    \*************************************************************************************************/

  /*! exports provided: BreadcrumbPagingRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBreadcrumbPagingBreadcrumbPagingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbPagingRoutingModule", function () {
      return BreadcrumbPagingRoutingModule;
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


    var _breadcrumb_paging_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./breadcrumb-paging.component */
    "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.component.ts");

    var routes = [{
      path: '',
      component: _breadcrumb_paging_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbPagingComponent"]
    }];

    var BreadcrumbPagingRoutingModule = function BreadcrumbPagingRoutingModule() {
      _classCallCheck(this, BreadcrumbPagingRoutingModule);
    };

    BreadcrumbPagingRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BreadcrumbPagingRoutingModule
    });
    BreadcrumbPagingRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BreadcrumbPagingRoutingModule_Factory(t) {
        return new (t || BreadcrumbPagingRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BreadcrumbPagingRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BreadcrumbPagingRoutingModule, [{
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
  "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: BreadcrumbPagingComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBreadcrumbPagingBreadcrumbPagingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbPagingComponent", function () {
      return BreadcrumbPagingComponent;
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


    var _theme_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../theme/shared/components/breadcrumb/breadcrumb.component */
    "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var BreadcrumbPagingComponent =
    /*#__PURE__*/
    function () {
      function BreadcrumbPagingComponent() {
        _classCallCheck(this, BreadcrumbPagingComponent);

        this.breadcrumbTheme = 'theme1';
        this.defaultPage = 5;
        this.noDirectionPage = 4;
        this.boundaryPage = 3;
        this.advancePage = 5;
        this.sizePage = 3;
        this.alignmentPage = 3;
        this.disablePage = 3;
        this.isDisabled = true;
      }

      _createClass(BreadcrumbPagingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BreadcrumbPagingComponent;
    }();

    BreadcrumbPagingComponent.??fac = function BreadcrumbPagingComponent_Factory(t) {
      return new (t || BreadcrumbPagingComponent)();
    };

    BreadcrumbPagingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BreadcrumbPagingComponent,
      selectors: [["app-breadcrumb-paging"]],
      decls: 136,
      vars: 49,
      consts: [[1, "row"], [1, "col-sm-6"], ["cardTitle", "Breadcrumb", 3, "options"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-item"], ["href", "javascript:"], ["cardTitle", "Breadcrumb Icon", 3, "options"], [1, "feather", "icon-home"], [1, "col-sm-12"], ["cardTitle", "Breadcrumb Live", 3, "options"], [3, "type"], ["ngbRadioGroup", "", 1, "btn-group", "btn-group-toggle", 3, "ngModel", "ngModelChange"], ["ngbButtonLabel", "", 1, "btn", "btn-primary"], ["type", "radio", "ngbButton", "", "name", "theme", "id", "theme1", "value", "theme1"], ["type", "radio", "ngbButton", "", "name", "theme", "id", "theme2", "value", "theme2"], [1, "col-md-6"], ["cardTitle", "Basic Pagination", 3, "options"], ["target", "_blank", "href", "https://ng-bootstrap.github.io/#/components/pagination/examples", 1, "badge", "badge-primary"], [1, "mt-5"], ["aria-label", "Default pagination", 3, "collectionSize", "page", "pageChange"], [3, "collectionSize", "page", "directionLinks", "pageChange"], [1, "horizontal-scroll"], [3, "collectionSize", "page", "boundaryLinks", "pageChange"], ["cardTitle", "Advanced Pagination", 3, "options"], [3, "collectionSize", "page", "maxSize", "boundaryLinks", "pageChange"], [3, "collectionSize", "page", "maxSize", "rotate", "boundaryLinks", "pageChange"], [3, "collectionSize", "page", "maxSize", "rotate", "ellipses", "boundaryLinks", "pageChange"], ["cardTitle", "Pagination Size", 3, "options"], ["size", "lg", 3, "collectionSize", "page", "pageChange"], [3, "collectionSize", "page", "pageChange"], ["size", "sm", 3, "collectionSize", "page", "pageChange"], ["cardTitle", "Pagination Alignment", 3, "options"], [1, "d-flex", "justify-content-start", 3, "collectionSize", "page", "pageChange"], [1, "d-flex", "justify-content-center", 3, "collectionSize", "page", "pageChange"], [1, "d-flex", "justify-content-end", 3, "collectionSize", "page", "pageChange"], ["cardTitle", "Disabled Pagination", 3, "options"], [3, "collectionSize", "page", "disabled", "pageChange"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"]],
      template: function BreadcrumbPagingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "app-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "app-card", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "[type]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " input parameter with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "app-breadcrumb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " tag to set breadcrumb theme.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "app-breadcrumb", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BreadcrumbPagingComponent_Template_div_ngModelChange_58_listener($event) {
            return ctx.breadcrumbTheme = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " Simple");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " Icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "app-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "click ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "ng-bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, " for pagination guide.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Default pagination:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "ngb-pagination", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function BreadcrumbPagingComponent_Template_ngb_pagination_pageChange_75_listener($event) {
            return ctx.defaultPage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "No direction links:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "ngb-pagination", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function BreadcrumbPagingComponent_Template_ngb_pagination_pageChange_79_listener($event) {
            return ctx.noDirectionPage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "With boundary links:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "ngb-pagination", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function BreadcrumbPagingComponent_Template_ngb_pagination_pageChange_84_listener($event) {
            return ctx.boundaryPage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "app-card", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Restricted size, no rotation:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "ngb-pagination", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function BreadcrumbPagingComponent_Template_ngb_pagination_pageChange_91_listener($event) {
            return ctx.advancePage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Restricted size with rotation:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "ngb-pagination", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function BreadcrumbPagingComponent_Template_ngb_pagination_pageChange_96_listener($event) {
            return ctx.advancePage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Restricted size with rotation and no ellipses:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "ngb-pagination", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function BreadcrumbPagingComponent_Template_ngb_pagination_pageChange_101_listener($event) {
            return ctx.advancePage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "app-card", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Large Size:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](106, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "ngb-pagination", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function BreadcrumbPagingComponent_Template_ngb_pagination_pageChange_108_listener($event) {
            return ctx.sizePage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Medium Size (Default):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "ngb-pagination", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function BreadcrumbPagingComponent_Template_ngb_pagination_pageChange_112_listener($event) {
            return ctx.sizePage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Small Size:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "ngb-pagination", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function BreadcrumbPagingComponent_Template_ngb_pagination_pageChange_116_listener($event) {
            return ctx.sizePage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "app-card", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Left:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "ngb-pagination", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function BreadcrumbPagingComponent_Template_ngb_pagination_pageChange_122_listener($event) {
            return ctx.alignmentPage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Center:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "ngb-pagination", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function BreadcrumbPagingComponent_Template_ngb_pagination_pageChange_126_listener($event) {
            return ctx.alignmentPage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Right:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "ngb-pagination", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function BreadcrumbPagingComponent_Template_ngb_pagination_pageChange_130_listener($event) {
            return ctx.alignmentPage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "app-card", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "ngb-pagination", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function BreadcrumbPagingComponent_Template_ngb_pagination_pageChange_133_listener($event) {
            return ctx.disablePage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BreadcrumbPagingComponent_Template_button_click_134_listener($event) {
            return ctx.isDisabled = !ctx.isDisabled;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.breadcrumbTheme);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.breadcrumbTheme);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 70)("page", ctx.defaultPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 70)("page", ctx.noDirectionPage)("directionLinks", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 70)("page", ctx.boundaryPage)("boundaryLinks", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 120)("page", ctx.advancePage)("maxSize", 5)("boundaryLinks", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 120)("page", ctx.advancePage)("maxSize", 5)("rotate", true)("boundaryLinks", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 120)("page", ctx.advancePage)("maxSize", 5)("rotate", true)("ellipses", false)("boundaryLinks", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 50)("page", ctx.sizePage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 50)("page", ctx.sizePage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 50)("page", ctx.sizePage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 70)("page", ctx.alignmentPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 70)("page", ctx.alignmentPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 70)("page", ctx.alignmentPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 70)("page", ctx.disablePage)("disabled", ctx.isDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.isDisabled === false ? "Disable" : "Enable");
        }
      },
      directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _theme_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbButtonLabel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbRadio"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPagination"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYnJlYWRjcnVtYi1wYWdpbmcvYnJlYWRjcnVtYi1wYWdpbmcuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BreadcrumbPagingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-breadcrumb-paging',
          templateUrl: './breadcrumb-paging.component.html',
          styleUrls: ['./breadcrumb-paging.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: BreadcrumbPagingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBreadcrumbPagingBreadcrumbPagingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbPagingModule", function () {
      return BreadcrumbPagingModule;
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


    var _breadcrumb_paging_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./breadcrumb-paging-routing.module */
    "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging-routing.module.ts");
    /* harmony import */


    var _breadcrumb_paging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./breadcrumb-paging.component */
    "./src/app/demo/ui-elements/ui-basic/breadcrumb-paging/breadcrumb-paging.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var BreadcrumbPagingModule = function BreadcrumbPagingModule() {
      _classCallCheck(this, BreadcrumbPagingModule);
    };

    BreadcrumbPagingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BreadcrumbPagingModule
    });
    BreadcrumbPagingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BreadcrumbPagingModule_Factory(t) {
        return new (t || BreadcrumbPagingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _breadcrumb_paging_routing_module__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbPagingRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BreadcrumbPagingModule, {
        declarations: [_breadcrumb_paging_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbPagingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _breadcrumb_paging_routing_module__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbPagingRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BreadcrumbPagingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _breadcrumb_paging_routing_module__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbPagingRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationModule"]],
          declarations: [_breadcrumb_paging_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbPagingComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=breadcrumb-paging-breadcrumb-paging-module-es5.js.map