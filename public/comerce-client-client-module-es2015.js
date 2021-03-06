(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comerce-client-client-module"],{

/***/ "./src/app/comerce/client/client-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/comerce/client/client-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoutingModule", function() { return ClientRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        children: [
            {
                path: 'ajout',
                loadChildren: () => __webpack_require__.e(/*! import() | ajouter-client-ajout-client-module */ "ajouter-client-ajout-client-module").then(__webpack_require__.bind(null, /*! ./ajouter-client/ajout-client.module */ "./src/app/comerce/client/ajouter-client/ajout-client.module.ts")).then(module => module.AjoutClientModule)
            },
            {
                path: 'list',
                loadChildren: () => __webpack_require__.e(/*! import() | list-client-list-client-module */ "list-client-list-client-module").then(__webpack_require__.bind(null, /*! ./list-client/list-client.module */ "./src/app/comerce/client/list-client/list-client.module.ts")).then(module => module.ListClientModule)
            },
            {
                path: 'contact',
                loadChildren: () => __webpack_require__.e(/*! import() | contacts-contacts-module */ "contacts-contacts-module").then(__webpack_require__.bind(null, /*! ./contacts/contacts.module */ "./src/app/comerce/client/contacts/contacts.module.ts")).then(module => module.ContactsModule)
            },
            {
                path: 'autreAdresse',
                loadChildren: () => __webpack_require__.e(/*! import() | autre-adresse-autre-adresse-module */ "autre-adresse-autre-adresse-module").then(__webpack_require__.bind(null, /*! ./autre-adresse/autre-adresse.module */ "./src/app/comerce/client/autre-adresse/autre-adresse.module.ts")).then(module => module.AutreAdresseModule)
            },
            {
                path: 'complement',
                loadChildren: () => __webpack_require__.e(/*! import() | complements-complement-module */ "complements-complement-module").then(__webpack_require__.bind(null, /*! ./complements/complement.module */ "./src/app/comerce/client/complements/complement.module.ts")).then(module => module.ComplementModule)
            },
            {
                path: 'facture',
                loadChildren: () => __webpack_require__.e(/*! import() | facture-facture-module */ "facture-facture-module").then(__webpack_require__.bind(null, /*! ./facture/facture.module */ "./src/app/comerce/client/facture/facture.module.ts")).then(module => module.FactureModule)
            },
            {
                path: 'details/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | details-client-details-client-module */ "details-client-details-client-module").then(__webpack_require__.bind(null, /*! ./details-client/details-client.module */ "./src/app/comerce/client/details-client/details-client.module.ts")).then(module => module.DetailsClientModule)
            },
            {
                path: 'modifier/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | modifier-client-modifier-client-module */ "modifier-client-modifier-client-module").then(__webpack_require__.bind(null, /*! ./modifier-client/modifier-client.module */ "./src/app/comerce/client/modifier-client/modifier-client.module.ts")).then(module => module.MofifierClientModule)
            },
            {
                path: 'projet',
                loadChildren: () => __webpack_require__.e(/*! import() | projet-projet-module */ "projet-projet-module").then(__webpack_require__.bind(null, /*! ./projet/projet.module */ "./src/app/comerce/client/projet/projet.module.ts")).then(module => module.ProjetModule)
            },
            {
                path: 'classementClient',
                loadChildren: () => __webpack_require__.e(/*! import() | classement-client-classement-client-module */ "classement-client-classement-client-module").then(__webpack_require__.bind(null, /*! ./classement-client/classement-client.module */ "./src/app/comerce/client/classement-client/classement-client.module.ts")).then(module => module.ClassementClientModule)
            },
        ]
    }
];
class ClientRoutingModule {
}
ClientRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ClientRoutingModule });
ClientRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function ClientRoutingModule_Factory(t) { return new (t || ClientRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ClientRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comerce/client/client.module.ts":
/*!*************************************************!*\
  !*** ./src/app/comerce/client/client.module.ts ***!
  \*************************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-routing.module */ "./src/app/comerce/client/client-routing.module.ts");




class ClientModule {
}
ClientModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ClientModule });
ClientModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function ClientModule_Factory(t) { return new (t || ClientModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _client_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ClientModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _client_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _client_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientRoutingModule"],
                ],
                declarations: [],
                exports: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=comerce-client-client-module-es2015.js.map