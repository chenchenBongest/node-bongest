function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-modal-basic-modal-module"], {
  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-modal/basic-modal-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-modal/basic-modal-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: BasicModalRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicModalBasicModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicModalRoutingModule", function () {
      return BasicModalRoutingModule;
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


    var _basic_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-modal.component */
    "./src/app/demo/ui-elements/ui-basic/basic-modal/basic-modal.component.ts");

    var routes = [{
      path: '',
      component: _basic_modal_component__WEBPACK_IMPORTED_MODULE_2__["BasicModalComponent"]
    }];

    var BasicModalRoutingModule = function BasicModalRoutingModule() {
      _classCallCheck(this, BasicModalRoutingModule);
    };

    BasicModalRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicModalRoutingModule
    });
    BasicModalRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicModalRoutingModule_Factory(t) {
        return new (t || BasicModalRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicModalRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicModalRoutingModule, [{
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
  "./src/app/demo/ui-elements/ui-basic/basic-modal/basic-modal.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-modal/basic-modal.component.ts ***!
    \********************************************************************************/

  /*! exports provided: BasicModalComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicModalBasicModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicModalComponent", function () {
      return BasicModalComponent;
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


    var _theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../theme/shared/components/modal/ui-modal/ui-modal.component */
    "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function BasicModalComponent_ng_template_128_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Popover body content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var BasicModalComponent =
    /*#__PURE__*/
    function () {
      function BasicModalComponent() {
        _classCallCheck(this, BasicModalComponent);
      }

      _createClass(BasicModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicModalComponent;
    }();

    BasicModalComponent.??fac = function BasicModalComponent_Factory(t) {
      return new (t || BasicModalComponent)();
    };

    BasicModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BasicModalComponent,
      selectors: [["app-basic-modal"]],
      decls: 236,
      vars: 18,
      consts: [[1, "row", "btn-page"], [1, "col-sm-12"], ["cardTitle", "Demo Modal", 3, "options"], [1, "bd-example-modal", "mb-4"], ["tabindex", "-1", "role", "dialog", 1, "modal"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", "mr-0"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["modalDefault", ""], [1, "app-modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", "basic-close", 3, "click"], [1, "app-modal-body"], [1, "app-modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary"], [1, "col-xl-4", "col-md-6"], ["cardTitle", "Scrolling Long Content", 3, "options"], ["type", "button", "data-toggle", "modal", 1, "btn", "btn-primary", 3, "click"], ["exampleModalLong", ""], ["cardTitle", "Vertically Centered", 3, "options"], ["dialogClass", "modal-dialog-centered"], ["exampleModalCenter", ""], ["cardTitle", "Tooltips and Popovers", 3, "options"], ["exampleModalPopoversLabel", ""], ["popContent", ""], ["href", "javascript:", "role", "button", 1, "btn", "btn-secondary", "popover-test", 3, "popoverClass", "popoverTitle", "ngbPopover", "placement"], ["href", "javascript:", "ngbTooltip", "Tooltip", 1, "tooltip-test", 3, "placement"], ["cardTitle", "Using the Grid", 3, "options"], ["gridSystemModal", ""], [1, "container-fluid", "bd-example-row"], [1, "row"], [1, "col-md-4"], [1, "col-md-4", "ml-auto"], [1, "col-md-3", "ml-auto"], [1, "col-md-2", "ml-auto"], [1, "col-md-6", "ml-auto"], [1, "col-sm-9"], [1, "col-8", "col-sm-6"], [1, "col-4", "col-sm-6"], ["cardTitle", "Optional Sizes", 3, "options"], [3, "hideFooter", "dialogClass"], ["myLargeModalLabel", ""], ["mySmallModalLabel", ""], ["cardTitle", "Persistence Modal", 3, "options"], [3, "containerClick"], ["myPersistenceModal", ""], [1, "text-white"]],
      template: function BasicModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r4915 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Modal title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Modal body text goes here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4905 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](24);

            return _r4905.show();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Launch demo modal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "app-ui-modal", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Modal Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4905 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](24);

            return _r4905.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Woohoo, you're reading this text in a modal!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4905 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](24);

            return _r4905.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "app-card", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4906 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](44);

            return _r4906.show();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Launch demo modal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "app-ui-modal", null, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Modal Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_48_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4906 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](44);

            return _r4906.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_89_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4906 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](44);

            return _r4906.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "app-card", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_95_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4907 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](98);

            return _r4907.show();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Launch demo modal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "app-ui-modal", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Modal Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_102_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4907 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](98);

            return _r4907.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_109_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4907 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](98);

            return _r4907.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "app-card", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_115_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4908 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](118);

            return _r4908.show();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Launch demo modal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "app-ui-modal", null, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Modal Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_122_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4908 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](118);

            return _r4908.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Popover in a modal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](128, BasicModalComponent_ng_template_128_Template, 2, 0, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "This ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, " triggers a popover on click.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Tooltips in a modal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "This link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "that link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, " have tooltips on hover.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_146_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4908 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](118);

            return _r4908.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "app-card", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_152_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4911 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](155);

            return _r4911.show();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Launch demo modal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "app-ui-modal", null, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Modal Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_159_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4911 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](155);

            return _r4911.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, ".col-md-4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, ".col-md-4 .ml-auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, ".col-md-3 .ml-auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, ".col-md-2 .ml-auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, ".col-md-6 .ml-auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, " Level 1: .col-sm-9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, " Level 2: .col-8 .col-sm-6 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, " Level 2: .col-4 .col-sm-6 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_186_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4911 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](155);

            return _r4911.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "app-card", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_192_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4912 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](195);

            return _r4912.show();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "Large Modal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "app-ui-modal", 48, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "Modal Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_199_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4912 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](195);

            return _r4912.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, " ... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_204_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4913 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](207);

            return _r4913.show();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "Small Modal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "app-ui-modal", 48, 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "Modal Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_211_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4913 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](207);

            return _r4913.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, " ... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "app-card", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_218_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4914 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](221);

            return _r4914.show();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Launch demo modal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "app-ui-modal", 52, 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Modal Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_225_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4914 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](221);

            return _r4914.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "Disable click outside of model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicModalComponent_Template_button_click_232_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4915);

            var _r4914 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](221);

            return _r4914.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r4909 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("popoverClass", "bg-dark text-white")("popoverTitle", "Popover Title")("ngbPopover", _r4909)("placement", "top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("placement", "top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("placement", "top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hideFooter", true)("dialogClass", "modal-lg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hideFooter", true)("dialogClass", "modal-sm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("containerClick", false);
        }
      },
      directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__["UiModalComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopover"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltip"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtbW9kYWwvYmFzaWMtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basic-modal',
          templateUrl: './basic-modal.component.html',
          styleUrls: ['./basic-modal.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-modal/basic-modal.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-modal/basic-modal.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: BasicModalModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicModalBasicModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicModalModule", function () {
      return BasicModalModule;
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


    var _basic_modal_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-modal-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-modal/basic-modal-routing.module.ts");
    /* harmony import */


    var _basic_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-modal.component */
    "./src/app/demo/ui-elements/ui-basic/basic-modal/basic-modal.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var BasicModalModule = function BasicModalModule() {
      _classCallCheck(this, BasicModalModule);
    };

    BasicModalModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicModalModule
    });
    BasicModalModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicModalModule_Factory(t) {
        return new (t || BasicModalModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_modal_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicModalRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicModalModule, {
        declarations: [_basic_modal_component__WEBPACK_IMPORTED_MODULE_3__["BasicModalComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_modal_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicModalRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_modal_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicModalRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"]],
          declarations: [_basic_modal_component__WEBPACK_IMPORTED_MODULE_3__["BasicModalComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=basic-modal-basic-modal-module-es5.js.map