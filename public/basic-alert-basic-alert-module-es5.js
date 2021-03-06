function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-alert-basic-alert-module"], {
  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: BasicAlertRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicAlertBasicAlertRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicAlertRoutingModule", function () {
      return BasicAlertRoutingModule;
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


    var _basic_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-alert.component */
    "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.ts");

    var routes = [{
      path: '',
      component: _basic_alert_component__WEBPACK_IMPORTED_MODULE_2__["BasicAlertComponent"]
    }];

    var BasicAlertRoutingModule = function BasicAlertRoutingModule() {
      _classCallCheck(this, BasicAlertRoutingModule);
    };

    BasicAlertRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicAlertRoutingModule
    });
    BasicAlertRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicAlertRoutingModule_Factory(t) {
        return new (t || BasicAlertRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicAlertRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicAlertRoutingModule, [{
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
  "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.ts ***!
    \********************************************************************************/

  /*! exports provided: BasicAlertComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicAlertBasicAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicAlertComponent", function () {
      return BasicAlertComponent;
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


    var _theme_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../theme/shared/components/alert/alert.component */
    "./src/app/theme/shared/components/alert/alert.component.ts");

    var BasicAlertComponent =
    /*#__PURE__*/
    function () {
      function BasicAlertComponent() {
        _classCallCheck(this, BasicAlertComponent);
      }

      _createClass(BasicAlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicAlertComponent;
    }();

    BasicAlertComponent.??fac = function BasicAlertComponent_Factory(t) {
      return new (t || BasicAlertComponent)();
    };

    BasicAlertComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BasicAlertComponent,
      selectors: [["app-basic-alert"]],
      decls: 89,
      vars: 4,
      consts: [[1, "row"], [1, "col-sm-12"], ["cardTitle", "Basic Alert", 3, "options"], ["type", "primary"], ["type", "secondary"], ["type", "success"], ["type", "danger"], ["type", "warning"], ["type", "info"], ["type", "light"], ["type", "dark"], [1, "col-md-6"], ["cardTitle", "Link Alert", 3, "options"], ["href", "javascript:", 1, "alert-link"], ["cardTitle", "Dismissing", 3, "options"], ["type", "primary", "dismiss", "true"], ["type", "secondary", "dismiss", "true"], ["type", "success", "dismiss", "true"], ["type", "danger", "dismiss", "true"], ["type", "warning", "dismiss", "true"], ["type", "info", "dismiss", "true"], ["type", "light", "dismiss", "true"], ["type", "dark", "dismiss", "true"], ["cardTitle", "Additional Content", 3, "options"], [1, "alert-heading"], [1, "mb-0"]],
      template: function BasicAlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "app-alert", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "A simple primary alert\u2014check it out!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "app-alert", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "A simple secondary alert\u2014check it out!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "app-alert", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "A simple success alert\u2014check it out!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "app-alert", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "A simple danger alert\u2014check it out!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "app-alert", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "A simple warning alert\u2014check it out!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "app-alert", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "A simple info alert\u2014check it out!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "app-alert", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "A simple light alert\u2014check it out!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "app-alert", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "A simple dark alert\u2014check it out!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "app-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "app-alert", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "A simple primary with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "an example link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, ". Give it a click if you like.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "app-alert", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "A simple secondary with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "an example link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, ". Give it a click if you like.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "app-alert", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "A simple success with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "an example link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, ". Give it a click if you like.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "app-alert", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "A simple danger with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "an example link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, ". Give it a click if you like.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "app-alert", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "A simple warning with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "an example link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, ". Give it a click if you like.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "app-alert", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "A simple info with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "an example link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, ". Give it a click if you like.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "app-alert", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "A simple light with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "an example link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, ". Give it a click if you like.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "app-alert", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "A simple dark with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "an example link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, ". Give it a click if you like.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "app-card", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "app-alert", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Holy guacamole! You should check in on some of those fields below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "app-alert", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Holy guacamole! You should check in on some of those fields below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "app-alert", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Holy guacamole! You should check in on some of those fields below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "app-alert", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Holy guacamole! You should check in on some of those fields below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "app-alert", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Holy guacamole! You should check in on some of those fields below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "app-alert", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Holy guacamole! You should check in on some of those fields below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "app-alert", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Holy guacamole! You should check in on some of those fields below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "app-alert", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Holy guacamole! You should check in on some of those fields below.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "app-card", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "app-alert", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h4", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Well done!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Whenever you need to, be sure to use margin utilities to keep things nice and tidy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);
        }
      },
      directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _theme_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtYWxlcnQvYmFzaWMtYWxlcnQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicAlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basic-alert',
          templateUrl: './basic-alert.component.html',
          styleUrls: ['./basic-alert.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: BasicAlertModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicAlertBasicAlertModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicAlertModule", function () {
      return BasicAlertModule;
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


    var _basic_alert_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-alert-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert-routing.module.ts");
    /* harmony import */


    var _basic_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-alert.component */
    "./src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var BasicAlertModule = function BasicAlertModule() {
      _classCallCheck(this, BasicAlertModule);
    };

    BasicAlertModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicAlertModule
    });
    BasicAlertModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicAlertModule_Factory(t) {
        return new (t || BasicAlertModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_alert_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicAlertRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicAlertModule, {
        declarations: [_basic_alert_component__WEBPACK_IMPORTED_MODULE_3__["BasicAlertComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_alert_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicAlertRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicAlertModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_alert_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicAlertRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
          declarations: [_basic_alert_component__WEBPACK_IMPORTED_MODULE_3__["BasicAlertComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=basic-alert-basic-alert-module-es5.js.map