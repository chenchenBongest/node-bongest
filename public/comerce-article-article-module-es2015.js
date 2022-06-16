(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-article-article-module"],{

/***/ "./src/app/comerce/article/article-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/comerce/article/article-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ArticleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleRoutingModule", function() { return ArticleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        children: [
            {
                path: 'ajout',
                loadChildren: () => __webpack_require__.e(/*! import() | ajouter-article-ajouter-article-module */ "ajouter-article-ajouter-article-module").then(__webpack_require__.bind(null, /*! ./ajouter-article/ajouter-article.module */ "./src/app/comerce/article/ajouter-article/ajouter-article.module.ts")).then(module => module.AjouterArticleModule)
            },
            {
                path: 'list',
                loadChildren: () => __webpack_require__.e(/*! import() | list-article-list-article-module */ "list-article-list-article-module").then(__webpack_require__.bind(null, /*! ./list-article/list-article.module */ "./src/app/comerce/article/list-article/list-article.module.ts")).then(module => module.ListArticleModule)
            },
            {
                path: 'modifier/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | ajouter-article-ajouter-article-module */ "ajouter-article-ajouter-article-module").then(__webpack_require__.bind(null, /*! ./ajouter-article/ajouter-article.module */ "./src/app/comerce/article/ajouter-article/ajouter-article.module.ts")).then(module => module.AjouterArticleModule)
            },
            {
                path: 'details/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | details-article-details-article-module */ "details-article-details-article-module").then(__webpack_require__.bind(null, /*! ./details-article/details-article.module */ "./src/app/comerce/article/details-article/details-article.module.ts")).then(module => module.DetailsArticleModule)
            },
            {
                path: 'alertList',
                loadChildren: () => __webpack_require__.e(/*! import() | alerte-liste-alerte-liste-module */ "alerte-liste-alerte-liste-module").then(__webpack_require__.bind(null, /*! ./alerte-liste/alerte-liste.module */ "./src/app/comerce/article/alerte-liste/alerte-liste.module.ts")).then(module => module.AlerteListeModule)
            },
            {
                path: 'alertStock',
                loadChildren: () => __webpack_require__.e(/*! import() | alert-stock-alert-stock-module */ "alert-stock-alert-stock-module").then(__webpack_require__.bind(null, /*! ./alert-stock/alert-stock.module */ "./src/app/comerce/article/alert-stock/alert-stock.module.ts")).then(module => module.AlertStockModule)
            },
        ]
    }
];
class ArticleRoutingModule {
}
ArticleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArticleRoutingModule });
ArticleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArticleRoutingModule_Factory(t) { return new (t || ArticleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArticleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/article/article.module.ts":
/*!***************************************************!*\
  !*** ./src/app/comerce/article/article.module.ts ***!
  \***************************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _article_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-routing.module */ "./src/app/comerce/article/article-routing.module.ts");




class ArticleModule {
}
ArticleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArticleModule });
ArticleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArticleModule_Factory(t) { return new (t || ArticleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _article_routing_module__WEBPACK_IMPORTED_MODULE_2__["ArticleRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArticleModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _article_routing_module__WEBPACK_IMPORTED_MODULE_2__["ArticleRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _article_routing_module__WEBPACK_IMPORTED_MODULE_2__["ArticleRoutingModule"],
                ],
                exports: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comerce-article-article-module-es2015.js.map