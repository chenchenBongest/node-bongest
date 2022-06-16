(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-bonTransfert-bon-transfert-module"],{

/***/ "./src/app/comerce/bonTransfert/bon-transfert-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/comerce/bonTransfert/bon-transfert-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: BonTransfertRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonTransfertRoutingModule", function() { return BonTransfertRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ligne_bts_ligne_bts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ligne-bts/ligne-bts.component */ "./src/app/comerce/bonTransfert/ligne-bts/ligne-bts.component.ts");
/* harmony import */ var _list_bon_transfert_list_bon_transfert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-bon-transfert/list-bon-transfert.component */ "./src/app/comerce/bonTransfert/list-bon-transfert/list-bon-transfert.component.ts");
/* harmony import */ var _bon_transfert_html_bon_transfert_html_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bon-transfert-html/bon-transfert-html.component */ "./src/app/comerce/bonTransfert/bon-transfert-html/bon-transfert-html.component.ts");







const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_bon_transfert_list_bon_transfert_component__WEBPACK_IMPORTED_MODULE_3__["ListBonTransfertComponent"]
            },
            {
                path: 'ajout',
                component: _bon_transfert_html_bon_transfert_html_component__WEBPACK_IMPORTED_MODULE_4__["BonTransfertHtmlComponent"]
            },
            {
                path: 'modifier/:id',
                component: _bon_transfert_html_bon_transfert_html_component__WEBPACK_IMPORTED_MODULE_4__["BonTransfertHtmlComponent"]
            },
            {
                path: 'details/:id',
                component: _bon_transfert_html_bon_transfert_html_component__WEBPACK_IMPORTED_MODULE_4__["BonTransfertHtmlComponent"]
            },
            {
                path: 'ligneBTs',
                component: _ligne_bts_ligne_bts_component__WEBPACK_IMPORTED_MODULE_2__["LigneBTsComponent"]
            }
        ]
    }
];
class BonTransfertRoutingModule {
}
BonTransfertRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BonTransfertRoutingModule });
BonTransfertRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BonTransfertRoutingModule_Factory(t) { return new (t || BonTransfertRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonTransfertRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonTransfertRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/bonTransfert/bon-transfert.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/comerce/bonTransfert/bon-transfert.module.ts ***!
  \**************************************************************/
/*! exports provided: BonTransfertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonTransfertModule", function() { return BonTransfertModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _bon_transfert_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bon-transfert-routing.module */ "./src/app/comerce/bonTransfert/bon-transfert-routing.module.ts");





class BonTransfertModule {
}
BonTransfertModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BonTransfertModule });
BonTransfertModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BonTransfertModule_Factory(t) { return new (t || BonTransfertModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _bon_transfert_routing_module__WEBPACK_IMPORTED_MODULE_3__["BonTransfertRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonTransfertModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _bon_transfert_routing_module__WEBPACK_IMPORTED_MODULE_3__["BonTransfertRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonTransfertModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _bon_transfert_routing_module__WEBPACK_IMPORTED_MODULE_3__["BonTransfertRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comerce-bonTransfert-bon-transfert-module-es2015.js.map