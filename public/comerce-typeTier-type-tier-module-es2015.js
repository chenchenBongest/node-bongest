(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-typeTier-type-tier-module"],{

/***/ "./src/app/comerce/typeTier/type-tier-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/comerce/typeTier/type-tier-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: TypeTierRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeTierRoutingModule", function() { return TypeTierRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_ajout_type_tier_ajout_type_tier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ajout-type-tier/ajout-type-tier.component */ "./src/app/comerce/typeTier/components/ajout-type-tier/ajout-type-tier.component.ts");
/* harmony import */ var _components_list_type_tier_list_type_tier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list-type-tier/list-type-tier.component */ "./src/app/comerce/typeTier/components/list-type-tier/list-type-tier.component.ts");
/* harmony import */ var _components_modifier_type_tier_modifier_type_tier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modifier-type-tier/modifier-type-tier.component */ "./src/app/comerce/typeTier/components/modifier-type-tier/modifier-type-tier.component.ts");







const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _components_list_type_tier_list_type_tier_component__WEBPACK_IMPORTED_MODULE_3__["ListTypeTierComponent"]
            },
            {
                path: 'ajout',
                component: _components_ajout_type_tier_ajout_type_tier_component__WEBPACK_IMPORTED_MODULE_2__["AjoutTypeTierComponent"]
            },
            {
                path: 'modifier/:id',
                component: _components_modifier_type_tier_modifier_type_tier_component__WEBPACK_IMPORTED_MODULE_4__["ModifierTypeTierComponent"]
            }
        ]
    }
];
class TypeTierRoutingModule {
}
TypeTierRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TypeTierRoutingModule });
TypeTierRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TypeTierRoutingModule_Factory(t) { return new (t || TypeTierRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TypeTierRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeTierRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/typeTier/type-tier.module.ts":
/*!******************************************************!*\
  !*** ./src/app/comerce/typeTier/type-tier.module.ts ***!
  \******************************************************/
/*! exports provided: TypeTierModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeTierModule", function() { return TypeTierModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _type_tier_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-tier-routing.module */ "./src/app/comerce/typeTier/type-tier-routing.module.ts");





class TypeTierModule {
}
TypeTierModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TypeTierModule });
TypeTierModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TypeTierModule_Factory(t) { return new (t || TypeTierModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _type_tier_routing_module__WEBPACK_IMPORTED_MODULE_3__["TypeTierRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TypeTierModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _type_tier_routing_module__WEBPACK_IMPORTED_MODULE_3__["TypeTierRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeTierModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _type_tier_routing_module__WEBPACK_IMPORTED_MODULE_3__["TypeTierRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comerce-typeTier-type-tier-module-es2015.js.map