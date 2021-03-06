function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projet-projet-module"], {
  /***/
  "./src/app/comerce/client/projet/projet-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/comerce/client/projet/projet-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: ProjetRoutingModule */

  /***/
  function srcAppComerceClientProjetProjetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetRoutingModule", function () {
      return ProjetRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      children: [{
        path: 'ajout',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | ajout-projet-ajout-projet-module */
          "ajout-projet-ajout-projet-module").then(__webpack_require__.bind(null,
          /*! ./ajout-projet/ajout-projet.module */
          "./src/app/comerce/client/projet/ajout-projet/ajout-projet.module.ts")).then(function (module) {
            return module.AjoutProjetModule;
          });
        }
      }, {
        path: 'list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | list-projet-list-projet-module */
          "list-projet-list-projet-module").then(__webpack_require__.bind(null,
          /*! ./list-projet/list-projet.module */
          "./src/app/comerce/client/projet/list-projet/list-projet.module.ts")).then(function (module) {
            return module.ListProjetModule;
          });
        }
      }, {
        path: 'modifier/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modifier-projet-modifier-projet-module */
          "modifier-projet-modifier-projet-module").then(__webpack_require__.bind(null,
          /*! ./modifier-projet/modifier-projet.module */
          "./src/app/comerce/client/projet/modifier-projet/modifier-projet.module.ts")).then(function (module) {
            return module.ModifierProjetModule;
          });
        }
      }]
    }];

    var ProjetRoutingModule = function ProjetRoutingModule() {
      _classCallCheck(this, ProjetRoutingModule);
    };

    ProjetRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ProjetRoutingModule
    });
    ProjetRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ProjetRoutingModule_Factory(t) {
        return new (t || ProjetRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ProjetRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProjetRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/comerce/client/projet/projet.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/comerce/client/projet/projet.module.ts ***!
    \********************************************************/

  /*! exports provided: ProjetModule */

  /***/
  function srcAppComerceClientProjetProjetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetModule", function () {
      return ProjetModule;
    });
    /* harmony import */


    var _projet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./projet-routing.module */
    "./src/app/comerce/client/projet/projet-routing.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ProjetModule = function ProjetModule() {
      _classCallCheck(this, ProjetModule);
    };

    ProjetModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: ProjetModule
    });
    ProjetModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function ProjetModule_Factory(t) {
        return new (t || ProjetModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _projet_routing_module__WEBPACK_IMPORTED_MODULE_0__["ProjetRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](ProjetModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _projet_routing_module__WEBPACK_IMPORTED_MODULE_0__["ProjetRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ProjetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _projet_routing_module__WEBPACK_IMPORTED_MODULE_0__["ProjetRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=projet-projet-module-es5.js.map