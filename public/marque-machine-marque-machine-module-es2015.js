(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marque-machine-marque-machine-module"],{

/***/ "./src/app/GMAO/marque-machine/marque-machine-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/GMAO/marque-machine/marque-machine-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: MarqueMachineRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarqueMachineRoutingModule", function() { return MarqueMachineRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _marque_machine_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marque-machine.component */ "./src/app/GMAO/marque-machine/marque-machine.component.ts");





const routes = [
    {
        path: '',
        component: _marque_machine_component__WEBPACK_IMPORTED_MODULE_2__["MarqueMachineComponent"]
    }
];
class MarqueMachineRoutingModule {
}
MarqueMachineRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MarqueMachineRoutingModule });
MarqueMachineRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MarqueMachineRoutingModule_Factory(t) { return new (t || MarqueMachineRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MarqueMachineRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarqueMachineRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/GMAO/marque-machine/marque-machine.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/GMAO/marque-machine/marque-machine.module.ts ***!
  \**************************************************************/
/*! exports provided: MarqueMachineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarqueMachineModule", function() { return MarqueMachineModule; });
/* harmony import */ var _marque_machine_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marque-machine-routing.module */ "./src/app/GMAO/marque-machine/marque-machine-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class MarqueMachineModule {
}
MarqueMachineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MarqueMachineModule });
MarqueMachineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MarqueMachineModule_Factory(t) { return new (t || MarqueMachineModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _marque_machine_routing_module__WEBPACK_IMPORTED_MODULE_0__["MarqueMachineRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MarqueMachineModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _marque_machine_routing_module__WEBPACK_IMPORTED_MODULE_0__["MarqueMachineRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MarqueMachineModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _marque_machine_routing_module__WEBPACK_IMPORTED_MODULE_0__["MarqueMachineRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=marque-machine-marque-machine-module-es2015.js.map