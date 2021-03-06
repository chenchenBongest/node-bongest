function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-carousel-basic-carousel-module"], {
  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: BasicCarouselRoutingModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicCarouselBasicCarouselRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicCarouselRoutingModule", function () {
      return BasicCarouselRoutingModule;
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


    var _basic_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-carousel.component */
    "./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.component.ts");

    var routes = [{
      path: '',
      component: _basic_carousel_component__WEBPACK_IMPORTED_MODULE_2__["BasicCarouselComponent"]
    }];

    var BasicCarouselRoutingModule = function BasicCarouselRoutingModule() {
      _classCallCheck(this, BasicCarouselRoutingModule);
    };

    BasicCarouselRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicCarouselRoutingModule
    });
    BasicCarouselRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicCarouselRoutingModule_Factory(t) {
        return new (t || BasicCarouselRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicCarouselRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicCarouselRoutingModule, [{
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
  "./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: BasicCarouselComponent */

  /***/
  function srcAppDemoUiElementsUiBasicBasicCarouselBasicCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicCarouselComponent", function () {
      return BasicCarouselComponent;
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

    function BasicCarouselComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 13);
      }
    }

    function BasicCarouselComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 14);
      }
    }

    function BasicCarouselComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 15);
      }
    }

    function BasicCarouselComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 16);
      }
    }

    function BasicCarouselComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 17);
      }
    }

    function BasicCarouselComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 18);
      }
    }

    function BasicCarouselComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 19);
      }
    }

    function BasicCarouselComponent_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 20);
      }
    }

    function BasicCarouselComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 21);
      }
    }

    function BasicCarouselComponent_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 22);
      }
    }

    function BasicCarouselComponent_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 23);
      }
    }

    function BasicCarouselComponent_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 13);
      }
    }

    function BasicCarouselComponent_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 14);
      }
    }

    function BasicCarouselComponent_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 15);
      }
    }

    function BasicCarouselComponent_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 24);
      }
    }

    function BasicCarouselComponent_ng_template_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 25);
      }
    }

    function BasicCarouselComponent_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 15);
      }
    }

    function BasicCarouselComponent_ng_template_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 16);
      }
    }

    function BasicCarouselComponent_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 19);
      }
    }

    function BasicCarouselComponent_ng_template_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 17);
      }
    }

    function BasicCarouselComponent_ng_template_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 18);
      }
    }

    function BasicCarouselComponent_ng_template_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 20);
      }
    }

    function BasicCarouselComponent_ng_template_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 21);
      }
    }

    function BasicCarouselComponent_ng_template_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 23);
      }
    }

    function BasicCarouselComponent_ng_template_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 22);
      }
    }

    function BasicCarouselComponent_ng_template_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 26);
      }
    }

    function BasicCarouselComponent_ng_template_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 14);
      }
    }

    function BasicCarouselComponent_ng_template_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 27);
      }
    }

    function BasicCarouselComponent_ng_template_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "First slide label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function BasicCarouselComponent_ng_template_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Second slide label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function BasicCarouselComponent_ng_template_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Third slide label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function BasicCarouselComponent_ng_template_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Forth slide label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function BasicCarouselComponent_ng_template_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Fifth slide label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function BasicCarouselComponent_ng_template_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Sixth slide label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function BasicCarouselComponent_ng_template_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Seventh slide label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var BasicCarouselComponent =
    /*#__PURE__*/
    function () {
      function BasicCarouselComponent() {
        _classCallCheck(this, BasicCarouselComponent);
      }

      _createClass(BasicCarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicCarouselComponent;
    }();

    BasicCarouselComponent.??fac = function BasicCarouselComponent_Factory(t) {
      return new (t || BasicCarouselComponent)();
    };

    BasicCarouselComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BasicCarouselComponent,
      selectors: [["app-basic-carousel"]],
      decls: 51,
      vars: 13,
      consts: [[1, "row"], [1, "col-sm-4"], ["cardTitle", "Basic Carousel", 3, "options"], [3, "showNavigationArrows", "showNavigationIndicators", "interval"], ["ngbSlide", ""], ["cardTitle", "Carousel Arrows Controls", 3, "options"], [3, "showNavigationIndicators"], ["cardTitle", "Carousel Indicators", 3, "options"], [3, "showNavigationArrows", "interval"], [1, "col-sm-6"], ["cardTitle", "Carousel - No Loop", 3, "options"], [3, "wrap", "interval"], ["cardTitle", "Carousel With Captions", 3, "options"], ["src", "assets/images/slider/img-slide-1.jpg", "alt", "First Slide", 1, "d-block", "w-100"], ["src", "assets/images/slider/img-slide-2.jpg", "alt", "Ssecond Slide", 1, "d-block", "w-100"], ["src", "assets/images/slider/img-slide-3.jpg", "alt", "Third Slide", 1, "d-block", "w-100"], ["src", "assets/images/slider/img-slide-4.jpg", "alt", "Third Slide", 1, "d-block", "w-100"], ["src", "assets/images/slider/img-slide-6.jpg", "alt", "Third Slide", 1, "d-block", "w-100"], ["src", "assets/images/slider/img-slide-7.jpg", "alt", "Third Slide", 1, "d-block", "w-100"], ["src", "assets/images/slider/img-slide-5.jpg", "alt", "Third Slide", 1, "d-block", "w-100"], ["src", "assets/images/slider/img-slide-7.jpg", "alt", "First Slide", 1, "d-block", "w-100"], ["src", "assets/images/slider/img-slide-6.jpg", "alt", "First Slide", 1, "d-block", "w-100"], ["src", "assets/images/slider/img-slide-4.jpg", "alt", "First Slide", 1, "d-block", "w-100"], ["src", "assets/images/slider/img-slide-5.jpg", "alt", "First Slide", 1, "d-block", "w-100"], ["src", "assets/images/slider/img-slide-2.jpg", "alt", "First Slide", 1, "d-block", "w-100"], ["src", "assets/images/slider/img-slide-1.jpg", "alt", "Ssecond Slide", 1, "d-block", "w-100"], ["src", "assets/images/slider/img-slide-3.jpg", "alt", "First Slide", 1, "d-block", "w-100"], ["src", "assets/images/slider/img-slide-1.jpg", "alt", "Third Slide", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "text-white"]],
      template: function BasicCarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ngb-carousel", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, BasicCarouselComponent_ng_template_4_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, BasicCarouselComponent_ng_template_5_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, BasicCarouselComponent_ng_template_6_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, BasicCarouselComponent_ng_template_7_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, BasicCarouselComponent_ng_template_8_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, BasicCarouselComponent_ng_template_9_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, BasicCarouselComponent_ng_template_10_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "app-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "ngb-carousel", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, BasicCarouselComponent_ng_template_14_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, BasicCarouselComponent_ng_template_15_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, BasicCarouselComponent_ng_template_16_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, BasicCarouselComponent_ng_template_17_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, BasicCarouselComponent_ng_template_18_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, BasicCarouselComponent_ng_template_19_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, BasicCarouselComponent_ng_template_20_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "app-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "ngb-carousel", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, BasicCarouselComponent_ng_template_24_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, BasicCarouselComponent_ng_template_25_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, BasicCarouselComponent_ng_template_26_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, BasicCarouselComponent_ng_template_27_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, BasicCarouselComponent_ng_template_28_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, BasicCarouselComponent_ng_template_29_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, BasicCarouselComponent_ng_template_30_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "app-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "ngb-carousel", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, BasicCarouselComponent_ng_template_34_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, BasicCarouselComponent_ng_template_35_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, BasicCarouselComponent_ng_template_36_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, BasicCarouselComponent_ng_template_37_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, BasicCarouselComponent_ng_template_38_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, BasicCarouselComponent_ng_template_39_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, BasicCarouselComponent_ng_template_40_Template, 1, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "app-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "ngb-carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, BasicCarouselComponent_ng_template_44_Template, 6, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, BasicCarouselComponent_ng_template_45_Template, 6, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, BasicCarouselComponent_ng_template_46_Template, 6, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, BasicCarouselComponent_ng_template_47_Template, 6, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, BasicCarouselComponent_ng_template_48_Template, 6, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, BasicCarouselComponent_ng_template_49_Template, 6, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, BasicCarouselComponent_ng_template_50_Template, 6, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("showNavigationArrows", false)("showNavigationIndicators", false)("interval", 2000);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("showNavigationIndicators", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("showNavigationArrows", false)("interval", 3000);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("wrap", false)("interval", 10000);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", false);
        }
      },
      directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtY2Fyb3VzZWwvYmFzaWMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basic-carousel',
          templateUrl: './basic-carousel.component.html',
          styleUrls: ['./basic-carousel.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: BasicCarouselModule */

  /***/
  function srcAppDemoUiElementsUiBasicBasicCarouselBasicCarouselModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicCarouselModule", function () {
      return BasicCarouselModule;
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


    var _basic_carousel_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-carousel-routing.module */
    "./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel-routing.module.ts");
    /* harmony import */


    var _basic_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-carousel.component */
    "./src/app/demo/ui-elements/ui-basic/basic-carousel/basic-carousel.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var BasicCarouselModule = function BasicCarouselModule() {
      _classCallCheck(this, BasicCarouselModule);
    };

    BasicCarouselModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: BasicCarouselModule
    });
    BasicCarouselModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function BasicCarouselModule_Factory(t) {
        return new (t || BasicCarouselModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_carousel_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicCarouselRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BasicCarouselModule, {
        declarations: [_basic_carousel_component__WEBPACK_IMPORTED_MODULE_3__["BasicCarouselComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_carousel_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicCarouselRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasicCarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_carousel_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicCarouselRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselModule"]],
          declarations: [_basic_carousel_component__WEBPACK_IMPORTED_MODULE_3__["BasicCarouselComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=basic-carousel-basic-carousel-module-es5.js.map