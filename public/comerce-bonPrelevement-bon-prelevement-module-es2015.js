(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-bonPrelevement-bon-prelevement-module"],{

/***/ "./src/app/comerce/bonPrelevement/bon-prelevement-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/comerce/bonPrelevement/bon-prelevement-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: BonPrelevementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonPrelevementRoutingModule", function() { return BonPrelevementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_bon_prelevement_list_bon_prelevement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-bon-prelevement/list-bon-prelevement.component */ "./src/app/comerce/bonPrelevement/list-bon-prelevement/list-bon-prelevement.component.ts");
/* harmony import */ var _ajout_bon_prelevement_ajout_bon_prelevement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajout-bon-prelevement/ajout-bon-prelevement.component */ "./src/app/comerce/bonPrelevement/ajout-bon-prelevement/ajout-bon-prelevement.component.ts");
/* harmony import */ var _modifier_bon_prelevement_modifier_bon_prelevement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifier-bon-prelevement/modifier-bon-prelevement.component */ "./src/app/comerce/bonPrelevement/modifier-bon-prelevement/modifier-bon-prelevement.component.ts");
/* harmony import */ var _details_bon_prelevement_details_bon_prelevement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-bon-prelevement/details-bon-prelevement.component */ "./src/app/comerce/bonPrelevement/details-bon-prelevement/details-bon-prelevement.component.ts");
/* harmony import */ var _ligne_bps_ligne_bps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ligne-bps/ligne-bps.component */ "./src/app/comerce/bonPrelevement/ligne-bps/ligne-bps.component.ts");









const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_bon_prelevement_list_bon_prelevement_component__WEBPACK_IMPORTED_MODULE_2__["ListBonPrelevementComponent"]
            },
            {
                path: 'ajout',
                component: _ajout_bon_prelevement_ajout_bon_prelevement_component__WEBPACK_IMPORTED_MODULE_3__["AjoutBonPrelevementComponent"]
            },
            {
                path: 'modifier/:id',
                component: _modifier_bon_prelevement_modifier_bon_prelevement_component__WEBPACK_IMPORTED_MODULE_4__["ModifierBonPrelevementComponent"]
            },
            {
                path: 'details/:id',
                component: _details_bon_prelevement_details_bon_prelevement_component__WEBPACK_IMPORTED_MODULE_5__["DetailsBonPrelevementComponent"]
            },
            {
                path: 'ligneBPs',
                component: _ligne_bps_ligne_bps_component__WEBPACK_IMPORTED_MODULE_6__["LigneBPsComponent"]
            }
        ]
    }
];
class BonPrelevementRoutingModule {
}
BonPrelevementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BonPrelevementRoutingModule });
BonPrelevementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BonPrelevementRoutingModule_Factory(t) { return new (t || BonPrelevementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonPrelevementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonPrelevementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/bonPrelevement/bon-prelevement.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/comerce/bonPrelevement/bon-prelevement.module.ts ***!
  \******************************************************************/
/*! exports provided: BonPrelevementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonPrelevementModule", function() { return BonPrelevementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _bon_prelevement_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bon-prelevement-routing.module */ "./src/app/comerce/bonPrelevement/bon-prelevement-routing.module.ts");





class BonPrelevementModule {
}
BonPrelevementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BonPrelevementModule });
BonPrelevementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BonPrelevementModule_Factory(t) { return new (t || BonPrelevementModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _bon_prelevement_routing_module__WEBPACK_IMPORTED_MODULE_3__["BonPrelevementRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonPrelevementModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _bon_prelevement_routing_module__WEBPACK_IMPORTED_MODULE_3__["BonPrelevementRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonPrelevementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _bon_prelevement_routing_module__WEBPACK_IMPORTED_MODULE_3__["BonPrelevementRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comerce-bonPrelevement-bon-prelevement-module-es2015.js.map