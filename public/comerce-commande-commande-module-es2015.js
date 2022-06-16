(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-commande-commande-module"],{

/***/ "./src/app/comerce/commande/commande-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/comerce/commande/commande-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CommandeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandeRoutingModule", function() { return CommandeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_commande_list_commande_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-commande/list-commande.component */ "./src/app/comerce/commande/list-commande/list-commande.component.ts");
/* harmony import */ var _ajout_commande_ajout_commande_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajout-commande/ajout-commande.component */ "./src/app/comerce/commande/ajout-commande/ajout-commande.component.ts");
/* harmony import */ var _modifier_commande_modifier_commande_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifier-commande/modifier-commande.component */ "./src/app/comerce/commande/modifier-commande/modifier-commande.component.ts");
/* harmony import */ var _details_commande_details_commande_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-commande/details-commande.component */ "./src/app/comerce/commande/details-commande/details-commande.component.ts");








const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_commande_list_commande_component__WEBPACK_IMPORTED_MODULE_2__["ListCommandeComponent"]
            },
            {
                path: 'ajout',
                component: _ajout_commande_ajout_commande_component__WEBPACK_IMPORTED_MODULE_3__["AjoutCommandeComponent"]
            },
            {
                path: 'modifier/:id',
                component: _modifier_commande_modifier_commande_component__WEBPACK_IMPORTED_MODULE_4__["ModifierCommandeComponent"]
            },
            {
                path: 'details/:id',
                component: _details_commande_details_commande_component__WEBPACK_IMPORTED_MODULE_5__["DetailsCommandeComponent"]
            }
        ]
    }
];
class CommandeRoutingModule {
}
CommandeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CommandeRoutingModule });
CommandeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CommandeRoutingModule_Factory(t) { return new (t || CommandeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommandeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommandeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/commande/commande.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/comerce/commande/commande.module.ts ***!
  \*****************************************************/
/*! exports provided: CommandeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandeModule", function() { return CommandeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _commande_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commande-routing.module */ "./src/app/comerce/commande/commande-routing.module.ts");




class CommandeModule {
}
CommandeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CommandeModule });
CommandeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CommandeModule_Factory(t) { return new (t || CommandeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _commande_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommandeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommandeModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _commande_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommandeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommandeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _commande_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommandeRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comerce-commande-commande-module-es2015.js.map