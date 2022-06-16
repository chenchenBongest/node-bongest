function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-authentication-authentication-module"], {
  /***/
  "./src/app/demo/pages/authentication/authentication-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/authentication-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: AuthenticationRoutingModule */

  /***/
  function srcAppDemoPagesAuthenticationAuthenticationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function () {
      return AuthenticationRoutingModule;
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
        path: 'signup',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | auth-signup-auth-signup-module */
          "auth-signup-auth-signup-module").then(__webpack_require__.bind(null,
          /*! ./auth-signup/auth-signup.module */
          "./src/app/demo/pages/authentication/auth-signup/auth-signup.module.ts")).then(function (module) {
            return module.AuthSignupModule;
          });
        }
      }, {
        path: 'signin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | auth-signin-auth-signin-module */
          "auth-signin-auth-signin-module").then(__webpack_require__.bind(null,
          /*! ./auth-signin/auth-signin.module */
          "./src/app/demo/pages/authentication/auth-signin/auth-signin.module.ts")).then(function (module) {
            return module.AuthSigninModule;
          });
        }
      }]
    }];

    var AuthenticationRoutingModule = function AuthenticationRoutingModule() {
      _classCallCheck(this, AuthenticationRoutingModule);
    };

    AuthenticationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthenticationRoutingModule
    });
    AuthenticationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthenticationRoutingModule_Factory(t) {
        return new (t || AuthenticationRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationRoutingModule, [{
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
  "./src/app/demo/pages/authentication/authentication.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/demo/pages/authentication/authentication.module.ts ***!
    \********************************************************************/

  /*! exports provided: AuthenticationModule */

  /***/
  function srcAppDemoPagesAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
      return AuthenticationModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication-routing.module */
    "./src/app/demo/pages/authentication/authentication-routing.module.ts");

    var AuthenticationModule = function AuthenticationModule() {
      _classCallCheck(this, AuthenticationModule);
    };

    AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthenticationModule
    });
    AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthenticationModule_Factory(t) {
        return new (t || AuthenticationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRoutingModule"]],
          declarations: []
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=demo-pages-authentication-authentication-module-es5.js.map