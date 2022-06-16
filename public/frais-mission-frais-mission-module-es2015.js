(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frais-mission-frais-mission-module"],{

/***/ "./src/app/GMAO/frais-mission/frais-mission-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/GMAO/frais-mission/frais-mission-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: FraisMissionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FraisMissionRoutingModule", function() { return FraisMissionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _frais_mission_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frais-mission.component */ "./src/app/GMAO/frais-mission/frais-mission.component.ts");





const routes = [
    {
        path: '',
        component: _frais_mission_component__WEBPACK_IMPORTED_MODULE_2__["FraisMissionComponent"]
    }
];
class FraisMissionRoutingModule {
}
FraisMissionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FraisMissionRoutingModule });
FraisMissionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FraisMissionRoutingModule_Factory(t) { return new (t || FraisMissionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FraisMissionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FraisMissionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/GMAO/frais-mission/frais-mission.module.ts":
/*!************************************************************!*\
  !*** ./src/app/GMAO/frais-mission/frais-mission.module.ts ***!
  \************************************************************/
/*! exports provided: FraisMissionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FraisMissionModule", function() { return FraisMissionModule; });
/* harmony import */ var _frais_mission_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frais-mission-routing.module */ "./src/app/GMAO/frais-mission/frais-mission-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class FraisMissionModule {
}
FraisMissionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FraisMissionModule });
FraisMissionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function FraisMissionModule_Factory(t) { return new (t || FraisMissionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _frais_mission_routing_module__WEBPACK_IMPORTED_MODULE_0__["FraisMissionRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FraisMissionModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _frais_mission_routing_module__WEBPACK_IMPORTED_MODULE_0__["FraisMissionRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FraisMissionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _frais_mission_routing_module__WEBPACK_IMPORTED_MODULE_0__["FraisMissionRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=frais-mission-frais-mission-module-es2015.js.map