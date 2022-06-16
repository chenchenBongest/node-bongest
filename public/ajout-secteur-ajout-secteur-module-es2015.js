(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajout-secteur-ajout-secteur-module"],{

/***/ "./src/app/comerce/secteur/ajout-secteur/ajout-secteur-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/comerce/secteur/ajout-secteur/ajout-secteur-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AjoutSecteurRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutSecteurRoutingModule", function() { return AjoutSecteurRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ajout_secteur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajout-secteur.component */ "./src/app/comerce/secteur/ajout-secteur/ajout-secteur.component.ts");





const routes = [
    {
        path: '',
        component: _ajout_secteur_component__WEBPACK_IMPORTED_MODULE_2__["AjoutSecteurComponent"]
    }
];
class AjoutSecteurRoutingModule {
}
AjoutSecteurRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AjoutSecteurRoutingModule });
AjoutSecteurRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AjoutSecteurRoutingModule_Factory(t) { return new (t || AjoutSecteurRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AjoutSecteurRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjoutSecteurRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/secteur/ajout-secteur/ajout-secteur.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/comerce/secteur/ajout-secteur/ajout-secteur.module.ts ***!
  \***********************************************************************/
/*! exports provided: AjoutSecteurModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutSecteurModule", function() { return AjoutSecteurModule; });
/* harmony import */ var _ajout_secteur_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajout-secteur-routing.module */ "./src/app/comerce/secteur/ajout-secteur/ajout-secteur-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");





class AjoutSecteurModule {
}
AjoutSecteurModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AjoutSecteurModule });
AjoutSecteurModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AjoutSecteurModule_Factory(t) { return new (t || AjoutSecteurModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ajout_secteur_routing_module__WEBPACK_IMPORTED_MODULE_0__["AjoutSecteurRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AjoutSecteurModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _ajout_secteur_routing_module__WEBPACK_IMPORTED_MODULE_0__["AjoutSecteurRoutingModule"],
        src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AjoutSecteurModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _ajout_secteur_routing_module__WEBPACK_IMPORTED_MODULE_0__["AjoutSecteurRoutingModule"],
                    src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=ajout-secteur-ajout-secteur-module-es2015.js.map