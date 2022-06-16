(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-marque-list-marque-module"],{

/***/ "./src/app/comerce/variables/marque/list-marque/list-marque-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/comerce/variables/marque/list-marque/list-marque-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ListMarqueRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMarqueRoutingModule", function() { return ListMarqueRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_marque_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-marque.component */ "./src/app/comerce/variables/marque/list-marque/list-marque.component.ts");





const routes = [
    {
        path: '',
        component: _list_marque_component__WEBPACK_IMPORTED_MODULE_2__["ListMarqueComponent"]
    }
];
class ListMarqueRoutingModule {
}
ListMarqueRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ListMarqueRoutingModule });
ListMarqueRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ListMarqueRoutingModule_Factory(t) { return new (t || ListMarqueRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListMarqueRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListMarqueRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/variables/marque/list-marque/list-marque.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/comerce/variables/marque/list-marque/list-marque.module.ts ***!
  \****************************************************************************/
/*! exports provided: ListMarqueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMarqueModule", function() { return ListMarqueModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _list_marque_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-marque-routing.module */ "./src/app/comerce/variables/marque/list-marque/list-marque-routing.module.ts");





class ListMarqueModule {
}
ListMarqueModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ListMarqueModule });
ListMarqueModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ListMarqueModule_Factory(t) { return new (t || ListMarqueModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _list_marque_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListMarqueRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListMarqueModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _list_marque_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListMarqueRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListMarqueModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _list_marque_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListMarqueRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=list-marque-list-marque-module-es2015.js.map