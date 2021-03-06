function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-toasts-basic-toasts-module"], {
  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-toasts/basic-toasts-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-toasts/basic-toasts-routing.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: BasicToastsRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicToastsBasicToastsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicToastsRoutingModule", function () {
      return BasicToastsRoutingModule;
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


    var _basic_toasts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-toasts.component */
    "./src/app/demo/ui-elements/ui-basic/basic-toasts/basic-toasts.component.ts");

    var routes = [{
      path: '',
      component: _basic_toasts_component__WEBPACK_IMPORTED_MODULE_2__["BasicToastsComponent"]
    }];

    var BasicToastsRoutingModule = function BasicToastsRoutingModule() {
      _classCallCheck(this, BasicToastsRoutingModule);
    };

    BasicToastsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicToastsRoutingModule
    });
    BasicToastsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicToastsRoutingModule_Factory(t) {
        return new (t || BasicToastsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicToastsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicToastsRoutingModule, [{
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
  "./src/app/demo/ui-elements/ui-basic/basic-toasts/basic-toasts.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-toasts/basic-toasts.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: BasicToastsComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicToastsBasicToastsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicToastsComponent", function () {
      return BasicToastsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _theme_shared_components_toast_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../theme/shared/components/toast/toast.service */
    "./src/app/theme/shared/components/toast/toast.service.ts");
    /* harmony import */


    var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../theme/shared/components/card/card.component */
    "./src/app/theme/shared/components/card/card.component.ts");
    /* harmony import */


    var _theme_shared_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../theme/shared/components/toast/toast.component */
    "./src/app/theme/shared/components/toast/toast.component.ts");

    var BasicToastsComponent =
    /*#__PURE__*/
    function () {
      function BasicToastsComponent(toastEvent) {
        _classCallCheck(this, BasicToastsComponent);

        this.toastEvent = toastEvent;
      }

      _createClass(BasicToastsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicToastsComponent;
    }();

    BasicToastsComponent.??fac = function BasicToastsComponent_Factory(t) {
      return new (t || BasicToastsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_theme_shared_components_toast_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
    };

    BasicToastsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BasicToastsComponent,
      selectors: [["app-basic-toasts"]],
      decls: 64,
      vars: 5,
      consts: [[1, "row", "btn-page"], [1, "col-sm-6"], ["cardTitle", "Toasts", 3, "options"], [1, "bg-light", "p-4", "mb-2", 2, "height", "150px"], ["uID", "toast1", "toastTitle", "Bootstrap", "toastCaption", "11 min ago"], [1, "btn", "btn-primary", 3, "click"], ["cardTitle", "Translucent", 3, "options"], [1, "bg-dark", "p-4", "mb-2", 2, "height", "150px"], ["uID", "toast2", "toastTitle", "Translucent", "toastCaption", "11 min ago"], ["cardTitle", "Stacking", 3, "options"], [1, "bg-light", "p-4", "mb-2", 2, "height", "325px"], ["uID", "toast3", "toastTitle", "Stacking 1", "toastCaption", "11 min ago", "toastClass", "m-b-10"], ["uID", "toast4", "toastTitle", "Stacking 2", "toastCaption", "11 min ago"], ["cardTitle", "Data-delay", 3, "options"], ["uID", "toast5", "toastTitle", "Delay 1s", "toastCaption", "11 min ago", "toastClass", "m-b-10"], ["uID", "toast6", "toastTitle", "Delay 2s", "toastCaption", "11 min ago", "toastClass", "m-b-10"], ["uID", "toast7", "toastTitle", "Delay 5s", "toastCaption", "11 min ago"], [1, "col"], [1, "col-sm-12"], ["cardTitle", "Placement", 3, "options"], [1, "position-relative", "bg-light", "p-4", "mb-2", 2, "height", "250px"], [2, "position", "absolute", "top", "40px", "left", "40px"], ["uID", "toastLeft", "toastTitle", "Placement Left", "toastCaption", "11 min ago", "toastClass", "m-b-10"], [1, "d-flex", "justify-content-center", 2, "position", "absolute", "top", "40px", "left", "40px", "right", "40px"], ["uID", "toastCenter", "toastTitle", "Placement Center", "toastCaption", "11 min ago", "toastClass", "m-b-10"], [2, "position", "absolute", "top", "40px", "right", "40px"], ["uID", "toastRight", "toastTitle", "Placement Right", "toastCaption", "11 min ago", "toastClass", "m-b-10"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "100%", "position", "absolute", "top", "0px", "right", "0px", "left", "0"], ["uID", "toastMiddle", "toastTitle", "Placement Middle", "toastCaption", "11 min ago", "toastClass", "m-b-10"]],
      template: function BasicToastsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "app-toast", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Hello, world! This is a toast message. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicToastsComponent_Template_button_click_6_listener($event) {
            return ctx.toastEvent.toast({
              uid: "toast1"
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "click");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "app-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "app-toast", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Hello, world! This is a toast message. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicToastsComponent_Template_button_click_13_listener($event) {
            return ctx.toastEvent.toast({
              uid: "toast2"
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "click");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "app-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "app-toast", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Hello, world! This is a toast message. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "app-toast", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Hello, world! This is a toast message. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicToastsComponent_Template_button_click_22_listener($event) {
            ctx.toastEvent.toast({
              uid: "toast3",
              delay: 1000
            });
            return ctx.toastEvent.toast({
              uid: "toast4",
              delay: 1000
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "click");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "app-card", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "app-toast", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Hello, world! This is a toast message. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "app-toast", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Hello, world! This is a toast message. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "app-toast", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Hello, world! This is a toast message. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicToastsComponent_Template_button_click_34_listener($event) {
            return ctx.toastEvent.toast({
              uid: "toast5",
              delay: 1000
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "1 sec");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicToastsComponent_Template_button_click_36_listener($event) {
            return ctx.toastEvent.toast({
              uid: "toast6",
              delay: 3000
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "3 sec");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicToastsComponent_Template_button_click_38_listener($event) {
            return ctx.toastEvent.toast({
              uid: "toast7",
              delay: 5000
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "5 sec");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "app-card", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "app-toast", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Hello, world! This is a toast message. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "app-toast", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Hello, world! This is a toast message. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "app-toast", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " Hello, world! This is a toast message. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "app-toast", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " Hello, world! This is a toast message. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicToastsComponent_Template_button_click_56_listener($event) {
            return ctx.toastEvent.toast({
              uid: "toastLeft",
              delay: 1500
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicToastsComponent_Template_button_click_58_listener($event) {
            return ctx.toastEvent.toast({
              uid: "toastCenter",
              delay: 1500
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicToastsComponent_Template_button_click_60_listener($event) {
            return ctx.toastEvent.toast({
              uid: "toastRight",
              delay: 1500
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BasicToastsComponent_Template_button_click_62_listener($event) {
            return ctx.toastEvent.toast({
              uid: "toastMiddle",
              delay: 1500
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Middle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);
        }
      },
      directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], _theme_shared_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtdG9hc3RzL2Jhc2ljLXRvYXN0cy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicToastsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basic-toasts',
          templateUrl: './basic-toasts.component.html',
          styleUrls: ['./basic-toasts.component.scss']
        }]
      }], function () {
        return [{
          type: _theme_shared_components_toast_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-toasts/basic-toasts.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-toasts/basic-toasts.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: BasicToastsModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicToastsBasicToastsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicToastsModule", function () {
      return BasicToastsModule;
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


    var _basic_toasts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-toasts-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-toasts/basic-toasts-routing.module.ts");
    /* harmony import */


    var _basic_toasts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-toasts.component */
    "./src/app/demo/ui-elements/ui-basic/basic-toasts/basic-toasts.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var BasicToastsModule = function BasicToastsModule() {
      _classCallCheck(this, BasicToastsModule);
    };

    BasicToastsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicToastsModule
    });
    BasicToastsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicToastsModule_Factory(t) {
        return new (t || BasicToastsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_toasts_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicToastsRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicToastsModule, {
        declarations: [_basic_toasts_component__WEBPACK_IMPORTED_MODULE_3__["BasicToastsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_toasts_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicToastsRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicToastsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_basic_toasts_component__WEBPACK_IMPORTED_MODULE_3__["BasicToastsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_toasts_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicToastsRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=basic-toasts-basic-toasts-module-es5.js.map