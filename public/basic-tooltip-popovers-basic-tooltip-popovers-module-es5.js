function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-tooltip-popovers-basic-tooltip-popovers-module"], {
  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers-routing.module.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers-routing.module.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: BasicTooltipPopoversRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicTooltipPopoversBasicTooltipPopoversRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicTooltipPopoversRoutingModule", function () {
      return BasicTooltipPopoversRoutingModule;
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


    var _basic_tooltip_popovers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-tooltip-popovers.component */
    "./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.component.ts");

    var routes = [{
      path: '',
      component: _basic_tooltip_popovers_component__WEBPACK_IMPORTED_MODULE_2__["BasicTooltipPopoversComponent"]
    }];

    var BasicTooltipPopoversRoutingModule = function BasicTooltipPopoversRoutingModule() {
      _classCallCheck(this, BasicTooltipPopoversRoutingModule);
    };

    BasicTooltipPopoversRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicTooltipPopoversRoutingModule
    });
    BasicTooltipPopoversRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicTooltipPopoversRoutingModule_Factory(t) {
        return new (t || BasicTooltipPopoversRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicTooltipPopoversRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicTooltipPopoversRoutingModule, [{
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
  "./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: BasicTooltipPopoversComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicTooltipPopoversBasicTooltipPopoversComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicTooltipPopoversComponent", function () {
      return BasicTooltipPopoversComponent;
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

    function BasicTooltipPopoversComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "em");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Tooltip");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " with ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " HTML ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function BasicTooltipPopoversComponent_ng_template_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Hello, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Flat Able");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "!");
      }
    }

    function BasicTooltipPopoversComponent_ng_template_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "em");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "popup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " with ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " HTML ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var BasicTooltipPopoversComponent =
    /*#__PURE__*/
    function () {
      function BasicTooltipPopoversComponent() {
        _classCallCheck(this, BasicTooltipPopoversComponent);
      }

      _createClass(BasicTooltipPopoversComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicTooltipPopoversComponent;
    }();

    BasicTooltipPopoversComponent.??fac = function BasicTooltipPopoversComponent_Factory(t) {
      return new (t || BasicTooltipPopoversComponent)();
    };

    BasicTooltipPopoversComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BasicTooltipPopoversComponent,
      selectors: [["app-basic-tooltip-popovers"]],
      decls: 31,
      vars: 17,
      consts: [[1, "row", "btn-page"], [1, "col-sm-6"], ["cardTitle", "Tooltip", 3, "options"], ["type", "button", "ngbTooltip", "tooltip on top", 1, "btn", "btn-default", 3, "placement"], ["type", "button", "ngbTooltip", "tooltip on left", 1, "btn", "btn-primary", 3, "placement"], ["type", "button", "ngbTooltip", "tooltip on right", 1, "btn", "btn-success", 3, "placement"], ["type", "button", "ngbTooltip", "tooltip on bottom", 1, "btn", "btn-warning", 3, "placement"], ["htmlTooltip", ""], ["type", "button", 1, "btn", "btn-info", 3, "ngbTooltip"], ["cardTitle", "Popover", 3, "options"], ["type", "button", "ngbPopover", "top by popover", "data-original-title", "popup on top", 1, "btn", "btn-default", 3, "placement", "popoverTitle"], ["type", "button", "ngbPopover", "left by popover", 1, "btn", "btn-primary", 3, "placement", "popoverTitle"], ["type", "button", "ngbPopover", "right by popover", 1, "btn", "btn-success", 3, "placement", "popoverTitle"], ["type", "button", "ngbPopover", "bottom by popover", 1, "btn", "btn-warning", 3, "placement", "popoverTitle"], ["popTitle", ""], ["popContent", ""], ["type", "button", 1, "btn", "btn-info", 3, "popoverTitle", "ngbPopover"]],
      template: function BasicTooltipPopoversComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, BasicTooltipPopoversComponent_ng_template_11_Template, 6, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Html Tooltip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "app-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, BasicTooltipPopoversComponent_ng_template_25_Template, 4, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, BasicTooltipPopoversComponent_ng_template_27_Template, 6, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Html popup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r4931 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](12);

          var _r4933 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](26);

          var _r4935 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("placement", "top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("placement", "left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("placement", "right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("placement", "bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbTooltip", _r4931);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("placement", "top")("popoverTitle", "popup on top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("placement", "left")("popoverTitle", "popup on left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("placement", "right")("popoverTitle", "popup on right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("placement", "bottom")("popoverTitle", "popup on bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("popoverTitle", _r4933)("ngbPopover", _r4935);
        }
      },
      directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPopover"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtdG9vbHRpcC1wb3BvdmVycy9iYXNpYy10b29sdGlwLXBvcG92ZXJzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicTooltipPopoversComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basic-tooltip-popovers',
          templateUrl: './basic-tooltip-popovers.component.html',
          styleUrls: ['./basic-tooltip-popovers.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.module.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.module.ts ***!
    \***************************************************************************************************/

  /*! exports provided: BasicTooltipPopoversModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicTooltipPopoversBasicTooltipPopoversModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicTooltipPopoversModule", function () {
      return BasicTooltipPopoversModule;
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


    var _basic_tooltip_popovers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-tooltip-popovers-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers-routing.module.ts");
    /* harmony import */


    var _basic_tooltip_popovers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-tooltip-popovers.component */
    "./src/app/demo/ui-elements/ui-basic/basic-tooltip-popovers/basic-tooltip-popovers.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var BasicTooltipPopoversModule = function BasicTooltipPopoversModule() {
      _classCallCheck(this, BasicTooltipPopoversModule);
    };

    BasicTooltipPopoversModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicTooltipPopoversModule
    });
    BasicTooltipPopoversModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicTooltipPopoversModule_Factory(t) {
        return new (t || BasicTooltipPopoversModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_tooltip_popovers_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicTooltipPopoversRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPopoverModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicTooltipPopoversModule, {
        declarations: [_basic_tooltip_popovers_component__WEBPACK_IMPORTED_MODULE_3__["BasicTooltipPopoversComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_tooltip_popovers_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicTooltipPopoversRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPopoverModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicTooltipPopoversModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_tooltip_popovers_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicTooltipPopoversRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPopoverModule"]],
          declarations: [_basic_tooltip_popovers_component__WEBPACK_IMPORTED_MODULE_3__["BasicTooltipPopoversComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=basic-tooltip-popovers-basic-tooltip-popovers-module-es5.js.map