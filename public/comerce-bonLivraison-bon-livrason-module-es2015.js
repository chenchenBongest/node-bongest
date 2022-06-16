(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-bonLivraison-bon-livrason-module"],{

/***/ "./src/app/comerce/bonLivraison/bon-livrason-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/comerce/bonLivraison/bon-livrason-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: BonLivrasonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonLivrasonRoutingModule", function() { return BonLivrasonRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _list_bon_livraison_list_bon_livraison_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-bon-livraison/list-bon-livraison.component */ "./src/app/comerce/bonLivraison/list-bon-livraison/list-bon-livraison.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_bon_livraison_details_bon_livraison_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-bon-livraison/details-bon-livraison.component */ "./src/app/comerce/bonLivraison/details-bon-livraison/details-bon-livraison.component.ts");
/* harmony import */ var _modifier_bon_livraison_modifier_bon_livraison_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifier-bon-livraison/modifier-bon-livraison.component */ "./src/app/comerce/bonLivraison/modifier-bon-livraison/modifier-bon-livraison.component.ts");
/* harmony import */ var _ajout_bon_livraison_ajout_bon_livraison_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ajout-bon-livraison/ajout-bon-livraison.component */ "./src/app/comerce/bonLivraison/ajout-bon-livraison/ajout-bon-livraison.component.ts");








const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_bon_livraison_list_bon_livraison_component__WEBPACK_IMPORTED_MODULE_1__["ListBonLivraisonComponent"]
            },
            {
                path: 'ajout',
                component: _ajout_bon_livraison_ajout_bon_livraison_component__WEBPACK_IMPORTED_MODULE_5__["AjoutBonLivraisonComponent"]
            },
            {
                path: 'modifier/:id',
                component: _modifier_bon_livraison_modifier_bon_livraison_component__WEBPACK_IMPORTED_MODULE_4__["ModifierBonLivraisonComponent"]
            },
            {
                path: 'details/:id',
                component: _details_bon_livraison_details_bon_livraison_component__WEBPACK_IMPORTED_MODULE_3__["DetailsBonLivraisonComponent"]
            }
        ]
    }
];
class BonLivrasonRoutingModule {
}
BonLivrasonRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BonLivrasonRoutingModule });
BonLivrasonRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BonLivrasonRoutingModule_Factory(t) { return new (t || BonLivrasonRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonLivrasonRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonLivrasonRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/bonLivraison/bon-livrason.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/comerce/bonLivraison/bon-livrason.module.ts ***!
  \*************************************************************/
/*! exports provided: BonLivrasonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonLivrasonModule", function() { return BonLivrasonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _bon_livrason_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bon-livrason-routing.module */ "./src/app/comerce/bonLivraison/bon-livrason-routing.module.ts");





class BonLivrasonModule {
}
BonLivrasonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BonLivrasonModule });
BonLivrasonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BonLivrasonModule_Factory(t) { return new (t || BonLivrasonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _bon_livrason_routing_module__WEBPACK_IMPORTED_MODULE_3__["BonLivrasonRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonLivrasonModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _bon_livrason_routing_module__WEBPACK_IMPORTED_MODULE_3__["BonLivrasonRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonLivrasonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _bon_livrason_routing_module__WEBPACK_IMPORTED_MODULE_3__["BonLivrasonRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comerce-bonLivraison-bon-livrason-module-es2015.js.map