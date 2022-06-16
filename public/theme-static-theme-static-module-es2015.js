(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-static-theme-static-module"],{

/***/ "./src/app/demo/pages/layout/theme-static/theme-static-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/demo/pages/layout/theme-static/theme-static-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ThemeStaticRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeStaticRoutingModule", function() { return ThemeStaticRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _theme_static_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-static.component */ "./src/app/demo/pages/layout/theme-static/theme-static.component.ts");





const routes = [
    {
        path: '',
        component: _theme_static_component__WEBPACK_IMPORTED_MODULE_2__["ThemeStaticComponent"]
    }
];
class ThemeStaticRoutingModule {
}
ThemeStaticRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ThemeStaticRoutingModule });
ThemeStaticRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ThemeStaticRoutingModule_Factory(t) { return new (t || ThemeStaticRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThemeStaticRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeStaticRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/demo/pages/layout/theme-static/theme-static.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo/pages/layout/theme-static/theme-static.component.ts ***!
  \**************************************************************************/
/*! exports provided: ThemeStaticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeStaticComponent", function() { return ThemeStaticComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../theme/shared/components/card/card.component */ "./src/app/theme/shared/components/card/card.component.ts");
/* harmony import */ var _common_content_common_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-content/common-content.component */ "./src/app/demo/pages/layout/common-content/common-content.component.ts");




class ThemeStaticComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ThemeStaticComponent.ɵfac = function ThemeStaticComponent_Factory(t) { return new (t || ThemeStaticComponent)(); };
ThemeStaticComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThemeStaticComponent, selectors: [["app-theme-static"]], decls: 33, vars: 1, consts: [[1, "row"], [1, "col-sm-12"], ["cardTitle", "Static Layout", 3, "options"], ["role", "alert", 1, "alert", "alert-info", "mb-0"], [1, "mb-0"], [1, "m-15"], [1, "table-responsive"], [1, "table", "table-bordered", "table-striped"], [1, "header-table"]], template: function ThemeStaticComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "In Static Layout - Header & Sidebar is not fixed while scrolling the page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "It is best suited for those applications where you don't need sidebar & header to be fixed while scrolling the page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "You can edit this file at [ ../src/app/app-config.ts ] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "layout: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "navFixedLayout: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "headerFixedLayout: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-common-content");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], _common_content_common_content_component__WEBPACK_IMPORTED_MODULE_2__["CommonContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvbGF5b3V0L3RoZW1lLXN0YXRpYy90aGVtZS1zdGF0aWMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeStaticComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-theme-static',
                templateUrl: './theme-static.component.html',
                styleUrls: ['./theme-static.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/demo/pages/layout/theme-static/theme-static.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/pages/layout/theme-static/theme-static.module.ts ***!
  \***********************************************************************/
/*! exports provided: ThemeStaticModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeStaticModule", function() { return ThemeStaticModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _theme_static_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-static-routing.module */ "./src/app/demo/pages/layout/theme-static/theme-static-routing.module.ts");
/* harmony import */ var _theme_static_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-static.component */ "./src/app/demo/pages/layout/theme-static/theme-static.component.ts");
/* harmony import */ var _common_content_common_content_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common-content/common-content.module */ "./src/app/demo/pages/layout/common-content/common-content.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");







class ThemeStaticModule {
}
ThemeStaticModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ThemeStaticModule });
ThemeStaticModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ThemeStaticModule_Factory(t) { return new (t || ThemeStaticModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _theme_static_routing_module__WEBPACK_IMPORTED_MODULE_2__["ThemeStaticRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _common_content_common_content_module__WEBPACK_IMPORTED_MODULE_4__["CommonContentModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThemeStaticModule, { declarations: [_theme_static_component__WEBPACK_IMPORTED_MODULE_3__["ThemeStaticComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _theme_static_routing_module__WEBPACK_IMPORTED_MODULE_2__["ThemeStaticRoutingModule"],
        _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _common_content_common_content_module__WEBPACK_IMPORTED_MODULE_4__["CommonContentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeStaticModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_theme_static_component__WEBPACK_IMPORTED_MODULE_3__["ThemeStaticComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _theme_static_routing_module__WEBPACK_IMPORTED_MODULE_2__["ThemeStaticRoutingModule"],
                    _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _common_content_common_content_module__WEBPACK_IMPORTED_MODULE_4__["CommonContentModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=theme-static-theme-static-module-es2015.js.map