(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-bonArticleCasse-bon-article-casse-module"],{

/***/ "./src/app/comerce/bonArticleCasse/bon-article-casse-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/comerce/bonArticleCasse/bon-article-casse-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BonArticleCasseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonArticleCasseRoutingModule", function() { return BonArticleCasseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ajout_bon_article_casse_ajout_bon_article_casse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajout-bon-article-casse/ajout-bon-article-casse.component */ "./src/app/comerce/bonArticleCasse/ajout-bon-article-casse/ajout-bon-article-casse.component.ts");
/* harmony import */ var _details_bon_article_casse_details_bon_article_casse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-bon-article-casse/details-bon-article-casse.component */ "./src/app/comerce/bonArticleCasse/details-bon-article-casse/details-bon-article-casse.component.ts");
/* harmony import */ var _list_bon_article_casse_list_bon_article_casse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-bon-article-casse/list-bon-article-casse.component */ "./src/app/comerce/bonArticleCasse/list-bon-article-casse/list-bon-article-casse.component.ts");
/* harmony import */ var _modifier_bon_article_casse_modifier_bon_article_casse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifier-bon-article-casse/modifier-bon-article-casse.component */ "./src/app/comerce/bonArticleCasse/modifier-bon-article-casse/modifier-bon-article-casse.component.ts");








const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_bon_article_casse_list_bon_article_casse_component__WEBPACK_IMPORTED_MODULE_4__["ListBonArticleCasseComponent"]
            },
            {
                path: 'ajout',
                component: _ajout_bon_article_casse_ajout_bon_article_casse_component__WEBPACK_IMPORTED_MODULE_2__["AjoutBonArticleCasseComponent"]
            },
            {
                path: 'modifier/:id',
                component: _modifier_bon_article_casse_modifier_bon_article_casse_component__WEBPACK_IMPORTED_MODULE_5__["ModifierBonArticleCasseComponent"]
            },
            {
                path: 'details/:id',
                component: _details_bon_article_casse_details_bon_article_casse_component__WEBPACK_IMPORTED_MODULE_3__["DetailsBonArticleCasseComponent"]
            }
        ]
    }
];
class BonArticleCasseRoutingModule {
}
BonArticleCasseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BonArticleCasseRoutingModule });
BonArticleCasseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BonArticleCasseRoutingModule_Factory(t) { return new (t || BonArticleCasseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonArticleCasseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonArticleCasseRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/bonArticleCasse/bon-article-casse.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/comerce/bonArticleCasse/bon-article-casse.module.ts ***!
  \*********************************************************************/
/*! exports provided: BonArticleCasseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonArticleCasseModule", function() { return BonArticleCasseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _bon_article_casse_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bon-article-casse-routing.module */ "./src/app/comerce/bonArticleCasse/bon-article-casse-routing.module.ts");





class BonArticleCasseModule {
}
BonArticleCasseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BonArticleCasseModule });
BonArticleCasseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BonArticleCasseModule_Factory(t) { return new (t || BonArticleCasseModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _bon_article_casse_routing_module__WEBPACK_IMPORTED_MODULE_3__["BonArticleCasseRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BonArticleCasseModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _bon_article_casse_routing_module__WEBPACK_IMPORTED_MODULE_3__["BonArticleCasseRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonArticleCasseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _bon_article_casse_routing_module__WEBPACK_IMPORTED_MODULE_3__["BonArticleCasseRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comerce-bonArticleCasse-bon-article-casse-module-es2015.js.map