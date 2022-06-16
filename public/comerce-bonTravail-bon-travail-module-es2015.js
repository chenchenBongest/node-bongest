(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-bonTravail-bon-travail-module"],{

/***/ "./src/app/comerce/bonTravail/bon-travail-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/comerce/bonTravail/bon-travail-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: BonTravailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonTravailRoutingModule", function() { return BonTravailRoutingModule; });
/* harmony import */ var _ligne_btravails_ligne_btravails_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ligne-btravails/ligne-btravails.component */ "./src/app/comerce/bonTravail/ligne-btravails/ligne-btravails.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_bon_travail_details_bon_travail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-bon-travail/details-bon-travail.component */ "./src/app/comerce/bonTravail/details-bon-travail/details-bon-travail.component.ts");
/* harmony import */ var _modifier_bon_travail_modifier_bon_travail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifier-bon-travail/modifier-bon-travail.component */ "./src/app/comerce/bonTravail/modifier-bon-travail/modifier-bon-travail.component.ts");
/* harmony import */ var _ajout_bon_travail_ajout_bon_travail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ajout-bon-travail/ajout-bon-travail.component */ "./src/app/comerce/bonTravail/ajout-bon-travail/ajout-bon-travail.component.ts");
/* harmony import */ var _list_bon_travail_list_bon_travail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-bon-travail/list-bon-travail.component */ "./src/app/comerce/bonTravail/list-bon-travail/list-bon-travail.component.ts");









const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_bon_travail_list_bon_travail_component__WEBPACK_IMPORTED_MODULE_6__["ListBonTravailComponent"]
            },
            {
                path: 'ajout',
                component: _ajout_bon_travail_ajout_bon_travail_component__WEBPACK_IMPORTED_MODULE_5__["AjoutBonTravailComponent"]
            },
            {
                path: 'modifier/:id',
                component: _modifier_bon_travail_modifier_bon_travail_component__WEBPACK_IMPORTED_MODULE_4__["ModifierBonTravailComponent"]
            },
            {
                path: 'details/:id',
                component: _details_bon_travail_details_bon_travail_component__WEBPACK_IMPORTED_MODULE_3__["DetailsBonTravailComponent"]
            },
            {
                path: 'ligneBTs',
                component: _ligne_btravails_ligne_btravails_component__WEBPACK_IMPORTED_MODULE_0__["LigneBTravailsComponent"]
            }
        ]
    }
];
class BonTravailRoutingModule {
}
BonTravailRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BonTravailRoutingModule });
BonTravailRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BonTravailRoutingModule_Factory(t) { return new (t || BonTravailRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BonTravailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BonTravailRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/bonTravail/bon-travail.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/comerce/bonTravail/bon-travail.module.ts ***!
  \**********************************************************/
/*! exports provided: BonTravailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonTravailModule", function() { return BonTravailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _bon_travail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bon-travail-routing.module */ "./src/app/comerce/bonTravail/bon-travail-routing.module.ts");





class BonTravailModule {
}
BonTravailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BonTravailModule });
BonTravailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BonTravailModule_Factory(t) { return new (t || BonTravailModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _bon_travail_routing_module__WEBPACK_IMPORTED_MODULE_3__["BonTravailRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonTravailModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _bon_travail_routing_module__WEBPACK_IMPORTED_MODULE_3__["BonTravailRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonTravailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _bon_travail_routing_module__WEBPACK_IMPORTED_MODULE_3__["BonTravailRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comerce-bonTravail-bon-travail-module-es2015.js.map