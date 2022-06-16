(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modele-machine-modele-machine-module"],{

/***/ "./src/app/GMAO/modele-machine/modele-machine-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/GMAO/modele-machine/modele-machine-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ModeleMachineRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeleMachineRoutingModule", function() { return ModeleMachineRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modele_machine_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modele-machine.component */ "./src/app/GMAO/modele-machine/modele-machine.component.ts");





const routes = [
    {
        path: '',
        component: _modele_machine_component__WEBPACK_IMPORTED_MODULE_2__["ModeleMachineComponent"]
    }
];
class ModeleMachineRoutingModule {
}
ModeleMachineRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ModeleMachineRoutingModule });
ModeleMachineRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ModeleMachineRoutingModule_Factory(t) { return new (t || ModeleMachineRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModeleMachineRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModeleMachineRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/GMAO/modele-machine/modele-machine.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/GMAO/modele-machine/modele-machine.module.ts ***!
  \**************************************************************/
/*! exports provided: ModeleMachineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeleMachineModule", function() { return ModeleMachineModule; });
/* harmony import */ var _modele_machine_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modele-machine-routing.module */ "./src/app/GMAO/modele-machine/modele-machine-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class ModeleMachineModule {
}
ModeleMachineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ModeleMachineModule });
ModeleMachineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ModeleMachineModule_Factory(t) { return new (t || ModeleMachineModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _modele_machine_routing_module__WEBPACK_IMPORTED_MODULE_0__["ModeleMachineRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModeleMachineModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _modele_machine_routing_module__WEBPACK_IMPORTED_MODULE_0__["ModeleMachineRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModeleMachineModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _modele_machine_routing_module__WEBPACK_IMPORTED_MODULE_0__["ModeleMachineRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modele-machine-modele-machine-module-es2015.js.map