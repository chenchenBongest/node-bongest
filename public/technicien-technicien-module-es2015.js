(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["technicien-technicien-module"],{

/***/ "./src/app/GMAO/technicien/technicien-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/GMAO/technicien/technicien-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: TechnicienRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicienRoutingModule", function() { return TechnicienRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ajout_technicien_ajout_technicien_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajout-technicien/ajout-technicien.component */ "./src/app/GMAO/technicien/ajout-technicien/ajout-technicien.component.ts");
/* harmony import */ var _details_technicien_details_technicien_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-technicien/details-technicien.component */ "./src/app/GMAO/technicien/details-technicien/details-technicien.component.ts");
/* harmony import */ var _list_technicien_list_technicien_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-technicien/list-technicien.component */ "./src/app/GMAO/technicien/list-technicien/list-technicien.component.ts");
/* harmony import */ var _modifier_technicien_modifier_technicien_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifier-technicien/modifier-technicien.component */ "./src/app/GMAO/technicien/modifier-technicien/modifier-technicien.component.ts");








const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_technicien_list_technicien_component__WEBPACK_IMPORTED_MODULE_4__["ListTechnicienComponent"]
            },
            {
                path: 'ajout',
                component: _ajout_technicien_ajout_technicien_component__WEBPACK_IMPORTED_MODULE_2__["AjoutTechnicienComponent"]
            },
            {
                path: 'modifier/:id',
                component: _modifier_technicien_modifier_technicien_component__WEBPACK_IMPORTED_MODULE_5__["ModifierTechnicienComponent"]
            },
            {
                path: 'details/:id',
                component: _details_technicien_details_technicien_component__WEBPACK_IMPORTED_MODULE_3__["DetailsTechnicienComponent"]
            }
        ]
    }
];
class TechnicienRoutingModule {
}
TechnicienRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TechnicienRoutingModule });
TechnicienRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TechnicienRoutingModule_Factory(t) { return new (t || TechnicienRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TechnicienRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechnicienRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/GMAO/technicien/technicien.module.ts":
/*!******************************************************!*\
  !*** ./src/app/GMAO/technicien/technicien.module.ts ***!
  \******************************************************/
/*! exports provided: TechnicienModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicienModule", function() { return TechnicienModule; });
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _technicien_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./technicien-routing.module */ "./src/app/GMAO/technicien/technicien-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class TechnicienModule {
}
TechnicienModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TechnicienModule });
TechnicienModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function TechnicienModule_Factory(t) { return new (t || TechnicienModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _technicien_routing_module__WEBPACK_IMPORTED_MODULE_1__["TechnicienRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TechnicienModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _technicien_routing_module__WEBPACK_IMPORTED_MODULE_1__["TechnicienRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TechnicienModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _technicien_routing_module__WEBPACK_IMPORTED_MODULE_1__["TechnicienRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=technicien-technicien-module-es2015.js.map