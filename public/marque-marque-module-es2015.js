(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marque-marque-module"],{

/***/ "./src/app/comerce/variables/marque/marque-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/comerce/variables/marque/marque-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MarqueRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarqueRoutingModule", function() { return MarqueRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        children: [
            {
                path: 'ajout',
                loadChildren: () => __webpack_require__.e(/*! import() | ajout-marque-ajout-marque-module */ "ajout-marque-ajout-marque-module").then(__webpack_require__.bind(null, /*! ./ajout-marque/ajout-marque.module */ "./src/app/comerce/variables/marque/ajout-marque/ajout-marque.module.ts")).then(module => module.AjoutMarqueModule)
            },
            {
                path: 'list',
                loadChildren: () => __webpack_require__.e(/*! import() | list-marque-list-marque-module */ "list-marque-list-marque-module").then(__webpack_require__.bind(null, /*! ./list-marque/list-marque.module */ "./src/app/comerce/variables/marque/list-marque/list-marque.module.ts")).then(module => module.ListMarqueModule)
            },
            {
                path: 'modifier/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | modifier-marque-modifier-marque-module */ "modifier-marque-modifier-marque-module").then(__webpack_require__.bind(null, /*! ./modifier-marque/modifier-marque.module */ "./src/app/comerce/variables/marque/modifier-marque/modifier-marque.module.ts")).then(module => module.ModifierMarqueModule)
            },
            {
                path: 'details/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | details-marque-details-marque-module */ "details-marque-details-marque-module").then(__webpack_require__.bind(null, /*! ./details-marque/details-marque.module */ "./src/app/comerce/variables/marque/details-marque/details-marque.module.ts")).then(module => module.DetailsMarqueModule)
            },
        ]
    }
];
class MarqueRoutingModule {
}
MarqueRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MarqueRoutingModule });
MarqueRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MarqueRoutingModule_Factory(t) { return new (t || MarqueRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MarqueRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarqueRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/variables/marque/marque.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/comerce/variables/marque/marque.module.ts ***!
  \***********************************************************/
/*! exports provided: MarqueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarqueModule", function() { return MarqueModule; });
/* harmony import */ var _marque_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marque-routing.module */ "./src/app/comerce/variables/marque/marque-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





class MarqueModule {
}
MarqueModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MarqueModule });
MarqueModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MarqueModule_Factory(t) { return new (t || MarqueModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _marque_routing_module__WEBPACK_IMPORTED_MODULE_0__["MarqueRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MarqueModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _marque_routing_module__WEBPACK_IMPORTED_MODULE_0__["MarqueRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MarqueModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _marque_routing_module__WEBPACK_IMPORTED_MODULE_0__["MarqueRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=marque-marque-module-es2015.js.map