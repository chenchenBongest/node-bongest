function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signup-auth-signup-module"], {
  /***/
  "./src/app/demo/pages/authentication/auth-signup/auth-signup-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: AuthSignupRoutingModule */

  /***/
  function srcAppDemoPagesAuthenticationAuthSignupAuthSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthSignupRoutingModule", function () {
      return AuthSignupRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth-signup.component */
    "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.ts");

    var routes = [{
      path: '',
      component: _auth_signup_component__WEBPACK_IMPORTED_MODULE_2__["AuthSignupComponent"]
    }];

    var AuthSignupRoutingModule = function AuthSignupRoutingModule() {
      _classCallCheck(this, AuthSignupRoutingModule);
    };

    AuthSignupRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthSignupRoutingModule
    });
    AuthSignupRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthSignupRoutingModule_Factory(t) {
        return new (t || AuthSignupRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthSignupRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthSignupRoutingModule, [{
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
  "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AuthSignupComponent */

  /***/
  function srcAppDemoPagesAuthenticationAuthSignupAuthSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthSignupComponent", function () {
      return AuthSignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/auth/signin"];
    };

    var AuthSignupComponent =
    /*#__PURE__*/
    function () {
      function AuthSignupComponent() {
        _classCallCheck(this, AuthSignupComponent);
      }

      _createClass(AuthSignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthSignupComponent;
    }();

    AuthSignupComponent.ɵfac = function AuthSignupComponent_Factory(t) {
      return new (t || AuthSignupComponent)();
    };

    AuthSignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthSignupComponent,
      selectors: [["app-auth-signup"]],
      decls: 29,
      vars: 2,
      consts: [[1, "auth-wrapper"], [1, "auth-content", "text-center"], ["src", "assets/images/auth/auth-logo.png", "alt", "", 1, "img-fluid", "mb-4"], [1, "card", "borderless"], [1, "row", "align-items-center", "text-center"], [1, "col-md-12"], [1, "card-body"], [1, "mb-3", "f-w-400"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Username", 1, "form-control"], ["type", "email", "placeholder", "Email address", 1, "form-control"], [1, "input-group", "mb-4"], ["type", "password", "placeholder", "Password", 1, "form-control"], [1, "form-group", "text-left", "mt-2"], [1, "checkbox", "checkbox-primary", "d-inline"], ["type", "checkbox", "name", "checkbox-fill-2", "id", "checkbox-fill-2"], ["for", "checkbox-fill-2", 1, "cr"], ["href", "javascript:"], [1, "btn", "btn-primary", "btn-block", "mb-4"], [1, "mb-2"], [1, "f-w-400", 3, "routerLink"]],
      template: function AuthSignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Send me the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Newsletter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " weekly.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Already have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Signin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1zaWdudXAvYXV0aC1zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthSignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-auth-signup',
          templateUrl: './auth-signup.component.html',
          styleUrls: ['./auth-signup.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/pages/authentication/auth-signup/auth-signup.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: AuthSignupModule */

  /***/
  function srcAppDemoPagesAuthenticationAuthSignupAuthSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthSignupModule", function () {
      return AuthSignupModule;
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


    var _auth_signup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth-signup-routing.module */
    "./src/app/demo/pages/authentication/auth-signup/auth-signup-routing.module.ts");
    /* harmony import */


    var _auth_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth-signup.component */
    "./src/app/demo/pages/authentication/auth-signup/auth-signup.component.ts");

    var AuthSignupModule = function AuthSignupModule() {
      _classCallCheck(this, AuthSignupModule);
    };

    AuthSignupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthSignupModule
    });
    AuthSignupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthSignupModule_Factory(t) {
        return new (t || AuthSignupModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthSignupRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthSignupModule, {
        declarations: [_auth_signup_component__WEBPACK_IMPORTED_MODULE_3__["AuthSignupComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthSignupRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthSignupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthSignupRoutingModule"]],
          declarations: [_auth_signup_component__WEBPACK_IMPORTED_MODULE_3__["AuthSignupComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=auth-signup-auth-signup-module-es5.js.map