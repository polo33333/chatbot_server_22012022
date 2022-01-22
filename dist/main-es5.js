function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/guards/auth-guard.service */
    "./src/app/shared/guards/auth-guard.service.ts");
    /* harmony import */


    var _user_survey_user_survey_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-survey/user-survey.component */
    "./src/app/user-survey/user-survey.component.ts"); //import { AppComponent } from './app.component';
    //import { PageIntroComponent } from './page-intro/page-intro.component';


    var routes = [{
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'surveys',
      component: _user_survey_user_survey_component__WEBPACK_IMPORTED_MODULE_5__["UserSurveyComponent"]
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | customer-customer-module */
        "customer-customer-module").then(__webpack_require__.bind(null,
        /*! ./customer/customer.module */
        "./src/app/customer/customer.module.ts")).then(function (m) {
          return m.CustomerModule;
        });
      },
      canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'chatbot.tpsoft.vn';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule, tokenGetter */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
      return tokenGetter;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _shared_services_socketio_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/services/socketio.service */
    "./src/app/shared/services/socketio.service.ts");
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/services/user.service */
    "./src/app/shared/services/user.service.ts");
    /* harmony import */


    var _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/guards/auth-guard.service */
    "./src/app/shared/guards/auth-guard.service.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _page_intro_page_intro_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./page-intro/page-intro.component */
    "./src/app/page-intro/page-intro.component.ts");
    /* harmony import */


    var _user_survey_user_survey_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./user-survey/user-survey.component */
    "./src/app/user-survey/user-survey.component.ts");
    /* harmony import */


    var _shared_services_survey_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./shared/services/survey.service */
    "./src/app/shared/services/survey.service.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _shared_guards_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./shared/guards/auth.interceptor */
    "./src/app/shared/guards/auth.interceptor.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_shared_services_socketio_service__WEBPACK_IMPORTED_MODULE_14__["SocketioService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"], _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _shared_guards_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptor"],
        multi: true
      }, _shared_services_survey_service__WEBPACK_IMPORTED_MODULE_22__["SurveyService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__["JwtModule"].forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: ["https://chatbox.tpsoft.vn/", "localhost:3000", "localhost:4200"],
          disallowedRoutes: ["https://chatbox.tpsoft.vn/login"]
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"], _page_intro_page_intro_component__WEBPACK_IMPORTED_MODULE_20__["PageIntroComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], _user_survey_user_survey_component__WEBPACK_IMPORTED_MODULE_21__["UserSurveyComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_25__["RegisterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__["JwtModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"], _page_intro_page_intro_component__WEBPACK_IMPORTED_MODULE_20__["PageIntroComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], _user_survey_user_survey_component__WEBPACK_IMPORTED_MODULE_21__["UserSurveyComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_25__["RegisterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__["JwtModule"].forRoot({
            config: {
              tokenGetter: tokenGetter,
              allowedDomains: ["https://chatbox.tpsoft.vn/", "localhost:3000", "localhost:4200"],
              disallowedRoutes: ["https://chatbox.tpsoft.vn/login"]
            }
          })],
          providers: [_shared_services_socketio_service__WEBPACK_IMPORTED_MODULE_14__["SocketioService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"], _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _shared_guards_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptor"],
            multi: true
          }, _shared_services_survey_service__WEBPACK_IMPORTED_MODULE_22__["SurveyService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        }]
      }], null, null);
    })();

    function tokenGetter() {
      return localStorage.getItem('token');
    }
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! crypto-js */
    "./node_modules/crypto-js/index.js");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    function LoginComponent_mat_error_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vui l\xF2ng nh\u1EADp email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_error_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vui l\xF2ng nh\u1EADp M\u1EADt kh\u1EA9u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r1.pass == null ? null : ctx_r1.pass.errors == null ? null : ctx_r1.pass.errors.minlength);
      }
    }

    function LoginComponent_mat_error_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " M\u1EADt kh\u1EA9u t\u1ED1i thi\u1EC3u 8 k\xED t\u1EF1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, _snackBar, route, router) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this._snackBar = _snackBar;
        this.route = route;
        this.router = router;
        this.hide = true;
        this.isLoading = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          'userName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          'pass': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
          'isRemerber': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
        this.secret = "superSecret";
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        if (this.authService.isAuthenticated()) {
          this.router.navigate([this.returnUrl]);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkRemerber();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          var data = {
            userName: this.loginForm.value.userName,
            pass: this.loginForm.value.pass
          };
          this.authService.login(data).subscribe(function (res) {
            _this.isLoading = false; //console.info( res['message'])

            if (res.status === 200) {
              if (res['data']) {
                localStorage.setItem('token', res['data']['access_token']);
                localStorage.setItem('refreshToken', res['data']['refresh_token']);
                localStorage.setItem('currentUser', JSON.stringify({
                  userName: _this.loginForm.value.userName
                }));

                if (_this.loginForm.value.isRemerber) {
                  localStorage.setItem('RemberUser', JSON.stringify({
                    userName: _this.loginForm.value.userName,
                    pass: crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(_this.loginForm.value.pass, _this.secret).toString(),
                    isRemerber: _this.loginForm.value.isRemerber
                  }));
                }

                _this.router.navigate([_this.returnUrl]);
              } else _this._snackBar.open('Đăng nhập không thành công', 'OK', {
                duration: 1000
              });
            }
          }, function (error) {
            console.error(error);
            _this.isLoading = false;

            _this._snackBar.open('Đăng nhập không thành công', 'OK', {
              duration: 1000
            });
          });
        }
      }, {
        key: "checkRemerber",
        value: function checkRemerber() {
          var curr = JSON.parse(localStorage.getItem('RemberUser')); //console.log(curr);

          if (curr) {
            this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              'userName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](curr.userName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              'pass': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(curr.pass, this.secret).toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
              'isRemerber': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true)
            });
          }
        }
      }, {
        key: "userName",
        get: function get() {
          return this.loginForm.get('userName');
        }
      }, {
        key: "pass",
        get: function get() {
          return this.loginForm.get('pass');
        }
      }, {
        key: "isRemerber",
        get: function get() {
          return this.loginForm.get('isRemerber');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 44,
      vars: 10,
      consts: [[1, "page-login"], [1, "vh-100"], [1, "row", "row-w"], [1, "col-md-8", "col-sm-12", "col-xs-12", "text-center"], [1, "left-panel"], [1, "col-md-4", "col-sm-12", "col-xs-12"], [1, "img-logo"], [1, "auth-form-section"], [1, "login-form"], [3, "formGroup"], [1, "example-container"], [1, "lb-login"], ["appearance", "standard", "floatLabel", "always", 2, "width", "100%"], ["matInput", "", "type", "email", "id", "userName", "formControlName", "userName", "autocomplete", "off", "required", ""], ["style", "width: 100%;", 4, "ngIf"], ["matInput", "", "id", "pass", "formControlName", "pass", "autocomplete", "off", "required", "", 3, "type", "keyup.enter"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["style", "width: 100%;", 3, "hidden", 4, "ngIf"], ["style", "width: 100%; margin: 5px 0px;", 4, "ngIf"], [1, "example-section"], ["id", "isRemerber", "formControlName", "isRemerber", 1, "example-margin"], ["mat-flat-button", "", "color", "primary", "type", "submit", 2, "width", "100%", "margin", "40px 0px 5px 0px", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-spinner", 3, "hidden"], [3, "hidden"], [2, "margin-top", "10px"], ["routerLink", "/register", 1, "lb-sign"], [1, "lb-copyright"], [2, "width", "100%"], [2, "width", "100%", 3, "hidden"], [2, "width", "100%", "margin", "5px 0px"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "AI - CHATCARE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0110\u0103ng nh\u1EADp h\u1EC7 th\u1ED1ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_mat_error_19_Template, 2, 0, "mat-error", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "M\u1EADt kh\u1EA9u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function LoginComponent_Template_input_keyup_enter_23_listener() {
            return ctx.loginForm.valid && ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_24_listener() {
            return ctx.hide = !ctx.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, LoginComponent_mat_error_27_Template, 2, 1, "mat-error", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, LoginComponent_mat_error_28_Template, 2, 0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-checkbox", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Ghi nh\u1EDB t\xF4i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_32_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0110\u0102NG NH\u1EACP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Ba\u0323n ch\u01B0a c\xF3 t\xE0i khoa\u0309n? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0110\u0102NG K\xDD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\xA9 Copyright 2020 - Tpsoft.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userName.invalid && (ctx.userName.dirty || ctx.userName.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pass.invalid && (ctx.pass.dirty || ctx.pass.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pass == null ? null : ctx.pass.errors == null ? null : ctx.pass.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isLoading);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
      styles: [".page-login[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n.left-panel[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-image: url('background-login1.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    align-items: center;\r\n    justify-content: center;\r\n    display: flex;\r\n}\r\n.lb-welcom[_ngcontent-%COMP%] {\r\n    color: white;\r\n    margin: 20px;\r\n    font-size: 30px;\r\n}\r\n.justify-content-center[_ngcontent-%COMP%] {\r\n    justify-content: center !important;\r\n    display: flex;\r\n    padding: 10px;\r\n    align-items: center;\r\n}\r\n.vh-100[_ngcontent-%COMP%] {\r\n    height: 100% !important;\r\n}\r\n.row-w[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n}\r\nspan.lb-login[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    width: 100%;\r\n    display: block;\r\n    font-size: larger;\r\n    margin: 0px 0px 30px 0px;    \r\n}\r\n.login-form[_ngcontent-%COMP%] {\r\n    max-width: 380px;\r\n    min-width: 320px;\r\n    min-height: 345px;\r\n    display: block;\r\n    padding: 20px;\r\n    background: white;\r\n\r\n}\r\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\r\n    background-color: #3d58f1;\r\n    min-height: 45px;\r\n}\r\n.text-center[_ngcontent-%COMP%]{\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    font-size: 28px;\r\n    color: #6d11c1;\r\n    text-align: center;\r\n    margin: 5px;\r\n}\r\n.lb-copyright[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 10px;\r\n    font-size: larger;\r\n    text-align: center;\r\n  \r\n}\r\n.img-left[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 10px;\r\n    background-repeat: no-repeat;\r\n    margin: 40px;\r\n    \r\n    background-size: cover;\r\n    background-position: center;\r\n    align-items: center;\r\n    padding: 300px;\r\n    justify-content: center;\r\n    max-height: 550px;\r\n}\r\n\r\n.img-logo[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 40px;\r\n    background-image: url('bot.jpg');\r\n    background-repeat: no-repeat;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-items: center;\r\n    padding: 75px;\r\n    background-position: center;\r\n}\r\n.auth-form-section[_ngcontent-%COMP%] > .login-form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    align-items: center;\r\n    vertical-align: middle;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: initial;\r\n}\r\n.auth-form-section[_ngcontent-%COMP%] {\r\n    margin-top: 15%;\r\n    margin-bottom: 10%;\r\n    display: block;\r\n}\r\nbutton[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    -webkit-animation:spin 4s linear infinite;\r\n    animation:spin 4s linear infinite;\r\n}\r\ni[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n.lb-sign[_ngcontent-%COMP%] {\r\n    margin: 10px 0px;\r\n    color: blue;\r\n    cursor: pointer;\r\n}\r\n@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }\r\n@keyframes spin { 100% { transform:rotate(360deg); }}\r\n@media only screen and (max-width: 800px) {\r\n    .img-left[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n        max-height: 300px !important;\r\n        padding: 200px !important;\r\n       \r\n    }\r\n    .auth-form-section[_ngcontent-%COMP%] {\r\n        margin-top: 20%;\r\n    }\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .img-left[_ngcontent-%COMP%]{\r\n        max-height: 200px !important;\r\n        padding: 75px 100px !important;\r\n    }\r\n    .auth-form-section[_ngcontent-%COMP%] {\r\n        margin-top: 10%;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCw4Q0FBeUQ7SUFDekQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUVBO0lBRUksa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCOztBQUVyQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixzREFBc0Q7SUFDdEQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7QUFFQTs7O0dBR0c7QUFDSDtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0NBQTJDO0lBQzNDLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFHQTtJQUNJLHlDQUF5QztJQUV6QyxpQ0FBaUM7QUFDckM7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBSUEsMEJBQTBCLE9BQU8saUNBQWlDLEVBQUUsRUFBRTtBQUN0RSxrQkFBa0IsT0FBMEMsd0JBQXdCLEVBQUUsQ0FBQztBQUV2RjtJQUNJO1FBQ0ksNEJBQTRCO1FBQzVCLHlCQUF5Qjs7SUFFN0I7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjtBQUVBO0lBQ0k7UUFDSSw0QkFBNEI7UUFDNUIsOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtbG9naW57XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuLmxlZnQtcGFuZWx7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvYmFja2dyb3VuZC1sb2dpbjEuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmxiLXdlbGNvbSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnZoLTEwMCB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvdy13e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5zcGFuLmxiLWxvZ2luIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIG1hcmdpbjogMHB4IDBweCAzMHB4IDBweDsgICAgXHJcbn1cclxuLmxvZ2luLWZvcm0ge1xyXG4gICAgbWF4LXdpZHRoOiAzODBweDtcclxuICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzNDVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LWZhYi5tYXQtcHJpbWFyeSwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q1OGYxO1xyXG4gICAgbWluLWhlaWdodDogNDVweDtcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiAjNmQxMWMxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5sYi1jb3B5cmlnaHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxufVxyXG4uaW1nLWxlZnR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgbWFyZ2luOiA0MHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy8yMjQyMTc3OC5wbmcpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWF4LWhlaWdodDogNTUwcHg7XHJcbn1cclxuXHJcbi8qIC5pbWctbG9nbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDQwcHg7XHJcbn0gKi9cclxuLmltZy1sb2dve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9ib3QuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA3NXB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4uYXV0aC1mb3JtLXNlY3Rpb24+IC5sb2dpbi1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IGluaXRpYWw7XHJcbn1cclxuXHJcbi5hdXRoLWZvcm0tc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbmJ1dHRvbiBpIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOnNwaW4gNHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246c3BpbiA0cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246c3BpbiA0cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbml7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxiLXNpZ24ge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHNwaW4geyAxMDAlIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4geyAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cclxuQGtleWZyYW1lcyBzcGluIHsgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOyB9fVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmltZy1sZWZ0PiBpbWd7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAuYXV0aC1mb3JtLXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmltZy1sZWZ0e1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogNzVweCAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmF1dGgtZm9ybS1zZWN0aW9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/page-intro/page-intro.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/page-intro/page-intro.component.ts ***!
    \****************************************************/

  /*! exports provided: PageIntroComponent */

  /***/
  function srcAppPageIntroPageIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageIntroComponent", function () {
      return PageIntroComponent;
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
      return ["../../customers"];
    };

    var PageIntroComponent = /*#__PURE__*/function () {
      function PageIntroComponent() {
        _classCallCheck(this, PageIntroComponent);
      }

      _createClass(PageIntroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageIntroComponent;
    }();

    PageIntroComponent.ɵfac = function PageIntroComponent_Factory(t) {
      return new (t || PageIntroComponent)();
    };

    PageIntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageIntroComponent,
      selectors: [["app-page-intro"]],
      decls: 131,
      vars: 2,
      consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener", "href", "https://twitter.com/angular", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo \u2014 FIXED", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", 1, "cls-1"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", 1, "cls-2"], ["role", "main", 1, "content"], [1, "card", "highlight-card", "card-small"], ["id", "rocket", "alt", "Rocket Ship", "xmlns", "http://www.w3.org/2000/svg", "width", "101.678", "height", "101.678", "viewBox", "0 0 101.678 101.678"], ["id", "Group_83", "data-name", "Group 83", "transform", "translate(-141 -696)"], ["id", "Ellipse_8", "data-name", "Ellipse 8", "cx", "50.839", "cy", "50.839", "r", "50.839", "transform", "translate(141 696)", "fill", "#dd0031"], ["id", "Group_47", "data-name", "Group 47", "transform", "translate(165.185 720.185)"], ["id", "Path_33", "data-name", "Path 33", "d", "M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z", "transform", "translate(0.371 3.363)", "fill", "#fff"], ["id", "Path_34", "data-name", "Path 34", "d", "M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z", "transform", "translate(0 0.005)", "fill", "#fff"], ["id", "rocket-smoke", "alt", "Rocket Ship Smoke", "xmlns", "http://www.w3.org/2000/svg", "width", "516.119", "height", "1083.632", "viewBox", "0 0 516.119 1083.632"], ["id", "Path_40", "data-name", "Path 40", "d", "M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z", "transform", "translate(-147.025 -140.939)", "fill", "#f5f5f5"], [1, "card-container"], [1, "card", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "material-icons"], ["d", "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["type", "hidden"], ["selection", ""], ["tabindex", "0", 1, "card", "card-small", 3, "click"], ["d", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"], ["title", "Animations", "href", "https://angular.io/guide/animations", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["id", "Group_20", "data-name", "Group 20", "xmlns", "http://www.w3.org/2000/svg", "width", "21.813", "height", "23.453", "viewBox", "0 0 21.813 23.453"], ["id", "Path_15", "data-name", "Path 15", "d", "M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z", "transform", "translate(-4088.702 -972.736)", "fill", "#ffa726"], ["id", "Path_16", "data-name", "Path 16", "d", "M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z", "transform", "translate(-4170.633 -972.736)", "fill", "#fb8c00"], ["id", "Path_17", "data-name", "Path 17", "d", "M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1058.315)", "fill", "#ffe0b2"], ["id", "Path_18", "data-name", "Path 18", "d", "M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1036.757)", "fill", "#fff3e0"], ["id", "Path_19", "data-name", "Path 19", "d", "M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z", "transform", "translate(-4125.003 -1015.199)", "fill", "#fff"], ["title", "CLI", "href", "https://cli.angular.io/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Angular CLI Logo", "xmlns", "http://www.w3.org/2000/svg", "width", "21.762", "height", "23.447", "viewBox", "0 0 21.762 23.447"], ["id", "Group_21", "data-name", "Group 21", "transform", "translate(0)"], ["id", "Path_20", "data-name", "Path 20", "d", "M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z", "transform", "translate(-2649.48 -313.618)", "fill", "#37474f"], ["id", "Path_21", "data-name", "Path 21", "d", "M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z", "transform", "translate(-2731.05 -313.618)", "fill", "#263238"], ["id", "Path_22", "data-name", "Path 22", "d", "M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z", "transform", "translate(-2687.274 -362.17)", "fill", "#fff"], ["id", "Path_23", "data-name", "Path 23", "d", "M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z", "transform", "translate(-2702.289 -380.631)", "fill", "#fff"], ["id", "Rectangle_12", "data-name", "Rectangle 12", "width", "3.517", "height", "0.469", "transform", "translate(9.709 13.744)", "fill", "#fff"], ["title", "Augury", "href", "https://augury.rangle.io/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Angular Augury Logo", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "21.81", "height", "23.447", "viewBox", "0 0 21.81 23.447"], ["id", "clip-path"], ["id", "Rectangle_13", "data-name", "Rectangle 13", "width", "10.338", "height", "10.27", "fill", "none"], ["id", "Group_25", "data-name", "Group 25", "transform", "translate(0)"], ["id", "Path_24", "data-name", "Path 24", "d", "M3780.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z", "transform", "translate(-3769.274 -311.417)", "fill", "#4a3493"], ["id", "Path_25", "data-name", "Path 25", "d", "M3862.088,311.417v23.447l9.244-5.152,1.685-14.4Z", "transform", "translate(-3851.207 -311.417)", "fill", "#311b92"], ["id", "Group_24", "data-name", "Group 24", "transform", "translate(6.194 6.73)", "opacity", "0.5"], ["id", "Group_23", "data-name", "Group 23", "transform", "translate(0 0)"], ["id", "Group_22", "data-name", "Group 22", "clip-path", "url(#clip-path)"], ["id", "Path_26", "data-name", "Path 26", "d", "M3832.4,373.252a5.168,5.168,0,1,1-5.828-4.383,5.216,5.216,0,0,1,2.574.3,3.017,3.017,0,1,0,3.252,4.086Z", "transform", "translate(-3822.107 -368.821)", "fill", "#fff"], ["id", "Path_27", "data-name", "Path 27", "d", "M3830.582,370.848a5.162,5.162,0,1,1-3.254-4.086,3.017,3.017,0,1,0,3.252,4.086Z", "transform", "translate(-3814.311 -359.969)", "fill", "#fff"], ["title", "Protractor", "href", "https://www.protractortest.org/", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Angular Protractor Logo", "xmlns", "http://www.w3.org/2000/svg", "width", "21.81", "height", "23.447", "viewBox", "0 0 21.81 23.447"], ["id", "Group_26", "data-name", "Group 26", "transform", "translate(0)"], ["id", "Path_28", "data-name", "Path 28", "d", "M4620.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z", "transform", "translate(-4609.274 -311.417)", "fill", "#e13439"], ["id", "Path_29", "data-name", "Path 29", "d", "M4702.088,311.417v23.447l9.244-5.152,1.685-14.4Z", "transform", "translate(-4691.207 -311.417)", "fill", "#b52f32"], ["id", "Path_30", "data-name", "Path 30", "d", "M4651.044,369.58v-.421h1.483a7.6,7.6,0,0,0-2.106-5.052l-1.123,1.123-.3-.3,1.122-1.121a7.588,7.588,0,0,0-4.946-2.055v1.482h-.421v-1.485a7.589,7.589,0,0,0-5.051,2.058l1.122,1.121-.3.3-1.123-1.123a7.591,7.591,0,0,0-2.106,5.052h1.482v.421h-1.489v1.734h15.241V369.58Zm-10.966-.263a4.835,4.835,0,0,1,9.67,0Z", "transform", "translate(-4634.008 -355.852)", "fill", "#fff"], ["title", "Find a Local Meetup", "href", "https://www.meetup.com/find/?keywords=angular", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Meetup Logo", "xmlns", "http://www.w3.org/2000/svg", "width", "24.607", "height", "23.447", "viewBox", "0 0 24.607 23.447"], ["id", "logo--mSwarm", "d", "M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z", "transform", "translate(0 0.123)", "fill", "#f64060"], ["title", "Join the Conversation on Gitter", "href", "https://gitter.im/angular/angular", "target", "_blank", "rel", "noopener", 1, "circle-link"], ["alt", "Gitter Logo", "xmlns", "http://www.w3.org/2000/svg", "width", "19.447", "height", "19.447", "viewBox", "0 0 19.447 19.447"], ["id", "Group_40", "data-name", "Group 40", "transform", "translate(-1612 -405)"], ["id", "Rectangle_19", "data-name", "Rectangle 19", "width", "19.447", "height", "19.447", "transform", "translate(1612 405)", "fill", "#e60257"], ["id", "gitter", "transform", "translate(1617.795 408.636)"], ["id", "Group_33", "data-name", "Group 33", "transform", "translate(0 0)"], ["id", "Rectangle_15", "data-name", "Rectangle 15", "width", "1.04", "height", "9.601", "transform", "translate(2.304 2.324)", "fill", "#fff"], ["id", "Rectangle_16", "data-name", "Rectangle 16", "width", "1.04", "height", "9.601", "transform", "translate(4.607 2.324)", "fill", "#fff"], ["id", "Rectangle_17", "data-name", "Rectangle 17", "width", "1.04", "height", "4.648", "transform", "translate(6.91 2.324)", "fill", "#fff"], ["id", "Rectangle_18", "data-name", "Rectangle 18", "width", "1.04", "height", "6.971", "transform", "translate(0 0)", "fill", "#fff"], ["href", "https://github.com/angular/angular", "target", "_blank", "rel", "noopener"], [1, "github-star-badge"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z", "fill", "#1976d2"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"]],
      template: function PageIntroComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " .cls-1 { fill: none; } .cls-2 { fill: #ffffff; } ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "rect", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "circle", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " app is running!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Resources");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Here are some links to help you get started:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "GO TO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Next Steps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "What do you want to do next with your app?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageIntroComponent_Template_div_click_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            return _r0.value = "component";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "svg", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "New Component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageIntroComponent_Template_div_click_48_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            return _r0.value = "material";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "svg", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Angular Material");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageIntroComponent_Template_div_click_53_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            return _r0.value = "dependency";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "svg", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Add Dependency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageIntroComponent_Template_div_click_58_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            return _r0.value = "test";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "svg", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Run and Watch Tests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageIntroComponent_Template_div_click_63_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            return _r0.value = "build";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "svg", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Build for Production");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "svg", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "svg", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "g", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "rect", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "svg", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "clipPath", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "rect", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "g", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "g", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "g", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "svg", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "g", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "svg", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "svg", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "g", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "rect", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "g", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "g", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "rect", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "rect", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "rect", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "rect", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Love Angular?\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Give our repo a star. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "svg", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Star ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "svg", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "svg", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtaW50cm8vcGFnZS1pbnRyby5jb21wb25lbnQuY3NzIn0= */", "[_nghost-%COMP%] {\n      font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n      font-size: 14px;\n      color: #333;\n      box-sizing: border-box;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n  \n    h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n      margin: 8px 0;\n    }\n  \n    p[_ngcontent-%COMP%] {\n      margin: 0;\n    }\n  \n    .spacer[_ngcontent-%COMP%] {\n      flex: 1;\n    }\n  \n    .toolbar[_ngcontent-%COMP%] {\n      height: 60px;\n      margin: -8px;\n      display: flex;\n      align-items: center;\n      background-color: #1976d2;\n      color: white;\n      font-weight: 600;\n    }\n  \n    .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      margin: 0 16px;\n    }\n  \n    .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n      height: 40px;\n      margin: 0 16px;\n    }\n  \n    .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n      opacity: 0.8;\n    }\n  \n    .content[_ngcontent-%COMP%] {\n      display: flex;\n      margin: 32px auto;\n      padding: 0 16px;\n      max-width: 960px;\n      flex-direction: column;\n      align-items: center;\n    }\n  \n    svg.material-icons[_ngcontent-%COMP%] {\n      height: 24px;\n      width: auto;\n    }\n  \n    svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n      margin-right: 8px;\n    }\n  \n    .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n      fill: #888;\n    }\n  \n    .card-container[_ngcontent-%COMP%] {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      margin-top: 16px;\n    }\n  \n    .card[_ngcontent-%COMP%] {\n      border-radius: 4px;\n      border: 1px solid #eee;\n      background-color: #fafafa;\n      height: 40px;\n      width: 200px;\n      margin: 0 8px 16px;\n      padding: 16px;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      transition: all 0.2s ease-in-out;\n      line-height: 24px;\n    }\n  \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n      margin-right: 0;\n    }\n  \n    .card.card-small[_ngcontent-%COMP%] {\n      height: 16px;\n      width: 168px;\n    }\n  \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      cursor: pointer;\n    }\n  \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n      transform: translateY(-3px);\n      box-shadow: 0 4px 17px rgba(black, 0.35);\n    }\n  \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n      fill: rgb(105, 103, 103);\n    }\n  \n    .card.highlight-card[_ngcontent-%COMP%] {\n      background-color: #1976d2;\n      color: white;\n      font-weight: 600;\n      border: none;\n      width: auto;\n      min-width: 30%;\n      position: relative;\n    }\n  \n    .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 60px;\n    }\n  \n    svg#rocket[_ngcontent-%COMP%] {\n      width: 80px;\n      position: absolute;\n      left: -10px;\n      top: -24px;\n    }\n  \n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      height: 100vh;\n      position: absolute;\n      top: 10px;\n      right: 180px;\n      z-index: -10;\n    }\n  \n    a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n      color: #1976d2;\n      text-decoration: none;\n    }\n  \n    a[_ngcontent-%COMP%]:hover {\n      color: #125699;\n    }\n  \n    .terminal[_ngcontent-%COMP%] {\n      position: relative;\n      width: 80%;\n      max-width: 600px;\n      border-radius: 6px;\n      padding-top: 45px;\n      margin-top: 8px;\n      overflow: hidden;\n      background-color: rgb(15, 15, 16);\n    }\n  \n    .terminal[_ngcontent-%COMP%]::before {\n      content: \"\\2022 \\2022 \\2022\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 4px;\n      background: rgb(58, 58, 58);\n      color: #c2c3c4;\n      width: 100%;\n      font-size: 2rem;\n      line-height: 0;\n      padding: 14px 0;\n      text-indent: 4px;\n    }\n  \n    .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n      font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n      color: white;\n      padding: 0 1rem 1rem;\n      margin: 0;\n    }\n  \n    .circle-link[_ngcontent-%COMP%] {\n      height: 40px;\n      width: 40px;\n      border-radius: 40px;\n      margin: 8px;\n      background-color: white;\n      border: 1px solid #eeeeee;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n      transition: 1s ease-out;\n    }\n  \n    .circle-link[_ngcontent-%COMP%]:hover {\n      transform: translateY(-0.25rem);\n      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n    }\n  \n    footer[_ngcontent-%COMP%] {\n      margin-top: 8px;\n      display: flex;\n      align-items: center;\n      line-height: 20px;\n    }\n  \n    footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n    }\n  \n    .github-star-badge[_ngcontent-%COMP%] {\n      color: #24292e;\n      display: flex;\n      align-items: center;\n      font-size: 12px;\n      padding: 3px 10px;\n      border: 1px solid rgba(27,31,35,.2);\n      border-radius: 3px;\n      background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n      margin-left: 4px;\n      font-weight: 600;\n      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n    }\n  \n    .github-star-badge[_ngcontent-%COMP%]:hover {\n      background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n      border-color: rgba(27,31,35,.35);\n      background-position: -.5em;\n    }\n  \n    .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n      height: 16px;\n      width: 16px;\n      margin-right: 4px;\n    }\n  \n    svg#clouds[_ngcontent-%COMP%] {\n      position: fixed;\n      bottom: -160px;\n      left: -230px;\n      z-index: -10;\n      width: 1920px;\n    }\n  \n  \n    \n    @media screen and (max-width: 767px) {\n  \n      .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n  \n      .card[_ngcontent-%COMP%]:not(.highlight-card) {\n        height: 16px;\n        margin: 8px 0;\n      }\n  \n      .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-left: 72px;\n      }\n  \n      svg#rocket-smoke[_ngcontent-%COMP%] {\n        right: 120px;\n        transform: rotate(-5deg);\n      }\n    }\n  \n    @media screen and (max-width: 575px) {\n      svg#rocket-smoke[_ngcontent-%COMP%] {\n        display: none;\n        visibility: hidden;\n      }\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageIntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-intro',
          templateUrl: './page-intro.component.html',
          styleUrls: ['./page-intro.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent, MyErrorStateMatcher */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
      return MyErrorStateMatcher;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    function RegisterComponent_mat_error_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vui l\xF2ng nh\u1EADp h\u1ECD v\xE0 t\xEAn");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_mat_error_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vui l\xF2ng nh\u1EADp email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_mat_error_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vui l\xF2ng nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_mat_error_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vui l\xF2ng nh\u1EADp M\u1EADt kh\u1EA9u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.pass == null ? null : ctx_r3.pass.errors == null ? null : ctx_r3.pass.errors.minlength);
      }
    }

    function RegisterComponent_mat_error_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " M\u1EADt kh\u1EA9u t\u1ED1i thi\u1EC3u 8 k\xED t\u1EF1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_mat_error_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Kh\xF4ng kh\u1EDBp v\u1EDBi m\u1EADt kh\u1EA9u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(authService, _snackBar, route, router) {
        _classCallCheck(this, RegisterComponent);

        this.authService = authService;
        this._snackBar = _snackBar;
        this.route = route;
        this.router = router;
        this.hide = true;
        this.isLoading = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          'fullName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          'userName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          'pass': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
          'accept': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          'confirmPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        }, {
          validators: this.checkPasswords
        });
        this.matcher = new MyErrorStateMatcher();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        if (this.authService.isAuthenticated()) {
          this.router.navigate([this.returnUrl]);
        }
      }

      _createClass(RegisterComponent, [{
        key: "checkPasswords",
        value: function checkPasswords(group) {
          var password = group.get('pass').value;
          var confirmPassword = group.get('confirmPassword').value;
          return password === confirmPassword ? null : {
            notSame: true
          };
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          var data = {
            fullName: this.loginForm.value.fullName,
            userName: this.loginForm.value.userName,
            phone: this.loginForm.value.phone,
            pass: this.loginForm.value.pass
          }; //console.log(data)

          this.isLoading = true;
          this.authService.register(data).subscribe(function (res) {
            setTimeout(function () {
              _this2.isLoading = false;
            }, 500);

            if (res != null) {
              _this2._snackBar.open('Đăng ký thành công', 'OK', {
                duration: 1000
              });

              _this2.router.navigate(['/login']);
            } else _this2._snackBar.open('Đăng ký không thành công', 'OK', {
              duration: 1000
            });
          }, function (error) {
            //console.log(error)
            setTimeout(function () {
              _this2.isLoading = false;
            }, 500);

            _this2._snackBar.open('Đăng ký không thành công', 'OK', {
              duration: 1000
            });
          });
        }
      }, {
        key: "userName",
        get: function get() {
          return this.loginForm.get('userName');
        }
      }, {
        key: "pass",
        get: function get() {
          return this.loginForm.get('pass');
        }
      }, {
        key: "phone",
        get: function get() {
          return this.loginForm.get('phone');
        }
      }, {
        key: "fullName",
        get: function get() {
          return this.loginForm.get('fullName');
        }
      }, {
        key: "accept",
        get: function get() {
          return this.loginForm.get('accept');
        }
      }, {
        key: "confirmPassword",
        get: function get() {
          return this.loginForm.get('confirmPassword');
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 66,
      vars: 16,
      consts: [[1, "page-login"], [1, "vh-100"], [1, "row", "row-w"], [1, "col-md-8", "col-sm-12", "col-xs-12", "text-center"], [1, "left-panel"], [1, "col-md-4", "col-sm-12", "col-xs-12"], [1, "img-logo"], [1, "auth-form-section"], [1, "login-form"], [3, "formGroup"], [1, "example-container"], [1, "lb-login"], ["appearance", "standard", "floatLabel", "always", 2, "width", "100%"], ["matInput", "", "type", "text", "id", "fullName", "formControlName", "fullName", "autocomplete", "off", "required", ""], ["style", "width: 100%;", 4, "ngIf"], ["matInput", "", "type", "email", "id", "userName", "formControlName", "userName", "autocomplete", "off", "required", ""], ["matInput", "", "type", "number", "id", "phone", "formControlName", "phone", "autocomplete", "off", "required", ""], ["matInput", "", "id", "pass", "formControlName", "pass", "autocomplete", "off", "required", "", 3, "type", "keyup.enter"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["style", "width: 100%;", 3, "hidden", 4, "ngIf"], ["style", "width: 100%; margin: 5px 0px;", 4, "ngIf"], ["matInput", "", "formControlName", "confirmPassword", "autocomplete", "off", "required", "", 3, "type", "errorStateMatcher"], [1, "example-section", 2, "margin-top", "10px"], ["id", "accept", "formControlName", "accept", 1, "example-margin"], ["routerLink", "/register", 1, "lb-sign"], ["mat-flat-button", "", "color", "accent", "type", "submit", 2, "width", "100%", "margin", "40px 0px 5px 0px", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-spinner", 3, "hidden"], [3, "hidden"], [2, "margin-top", "10px"], ["routerLink", "/login", 1, "lb-sign"], [1, "lb-copyright"], [2, "width", "100%"], [2, "width", "100%", 3, "hidden"], [2, "width", "100%", "margin", "5px 0px"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "AI - CHATCARE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0110\u0103ng k\xFD t\xE0i kho\u1EA3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "H\u1ECD v\xE0 t\xEAn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_mat_error_19_Template, 2, 0, "mat-error", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegisterComponent_mat_error_24_Template, 2, 0, "mat-error", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegisterComponent_mat_error_29_Template, 2, 0, "mat-error", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "M\u1EADt kh\u1EA9u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function RegisterComponent_Template_input_keyup_enter_33_listener() {
            return ctx.loginForm.valid && ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_34_listener() {
            return ctx.hide = !ctx.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RegisterComponent_mat_error_37_Template, 2, 1, "mat-error", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RegisterComponent_mat_error_38_Template, 2, 0, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Nh\u1EAFc l\u1EA1i m\u1EADt kh\u1EA9u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RegisterComponent_mat_error_43_Template, 2, 0, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "section", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-checkbox", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "T\xF4i \u0111\u1ED3ng \xFD v\u1EDBi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u0110i\u1EC1u kho\u1EA3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "v\xE0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Quy\u1EC1n ri\xEAng t\u01B0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_54_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u0110\u0102NG K\xDD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Ba\u0323n \u0111\xE3 c\xF3 t\xE0i khoa\u0309n? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0110\u0102NG NH\u1EACP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\xA9 Copyright 2020 - Tpsoft.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fullName.invalid && (ctx.fullName.dirty || ctx.fullName.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userName.invalid && (ctx.userName.dirty || ctx.userName.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phone.invalid && (ctx.phone.dirty || ctx.phone.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pass.invalid && (ctx.pass.dirty || ctx.pass.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pass == null ? null : ctx.pass.errors == null ? null : ctx.pass.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "password")("errorStateMatcher", ctx.matcher);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmPassword.invalid && (ctx.confirmPassword.dirty || ctx.confirmPassword.touched) || ctx.loginForm.hasError("notSame"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid || ctx.loginForm.value.accept == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isLoading);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
      styles: [".page-login[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n.left-panel[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-image: url('background-login1.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    align-items: center;\r\n    justify-content: center;\r\n    display: flex;\r\n}\r\n.lb-welcom[_ngcontent-%COMP%] {\r\n    color: white;\r\n    margin: 20px;\r\n    font-size: 30px;\r\n}\r\n.justify-content-center[_ngcontent-%COMP%] {\r\n    justify-content: center !important;\r\n    display: flex;\r\n    padding: 10px;\r\n    align-items: center;\r\n}\r\n.vh-100[_ngcontent-%COMP%] {\r\n    height: 100% !important;\r\n}\r\n.row-w[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n}\r\nspan.lb-login[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    width: 100%;\r\n    display: block;\r\n    font-size: larger;\r\n    margin: 0px 0px 30px 0px;    \r\n}\r\n.login-form[_ngcontent-%COMP%] {\r\n    max-width: 380px;\r\n    min-width: 320px;\r\n    min-height: 345px;\r\n    display: block;\r\n    padding: 20px;\r\n    background: white;\r\n\r\n}\r\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\r\n    background-color: #3d58f1;\r\n    min-height: 45px;\r\n}\r\n.text-center[_ngcontent-%COMP%]{\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    font-size: 28px;\r\n    color: #6d11c1;\r\n    text-align: center;\r\n    margin: 5px;\r\n}\r\n.lb-copyright[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 10px;\r\n    font-size: larger;\r\n    text-align: center;\r\n  \r\n}\r\n.img-left[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 10px;\r\n    background-repeat: no-repeat;\r\n    margin: 40px;\r\n    background-size: cover;\r\n    background-position: center;\r\n    align-items: center;\r\n    padding: 300px;\r\n    justify-content: center;\r\n    max-height: 550px;\r\n}\r\n\r\n.img-logo[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 40px;\r\n    background-image: url('bot.jpg');\r\n    background-repeat: no-repeat;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-items: center;\r\n    padding: 75px;\r\n    background-position: center;\r\n}\r\n.auth-form-section[_ngcontent-%COMP%] > .login-form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    align-items: center;\r\n    vertical-align: middle;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: initial;\r\n}\r\n.auth-form-section[_ngcontent-%COMP%] {\r\n    margin-top: 15%;\r\n    margin-bottom: 10%;\r\n    display: block;\r\n}\r\nbutton[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    -webkit-animation:spin 4s linear infinite;\r\n    animation:spin 4s linear infinite;\r\n}\r\ni[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n.lb-sign[_ngcontent-%COMP%] {\r\n    margin: 10px 0px;\r\n    color: blue;\r\n    cursor: pointer;\r\n}\r\n@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }\r\n@keyframes spin { 100% { transform:rotate(360deg); }}\r\n@media only screen and (max-width: 800px) {\r\n    .img-left[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n        max-height: 300px !important;\r\n        padding: 200px !important;\r\n       \r\n    }\r\n    .auth-form-section[_ngcontent-%COMP%] {\r\n        margin-top: 20%;\r\n    }\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .img-left[_ngcontent-%COMP%]{\r\n        max-height: 200px !important;\r\n        padding: 75px 100px !important;\r\n    }\r\n    .auth-form-section[_ngcontent-%COMP%] {\r\n        margin-top: 10%;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCw4Q0FBeUQ7SUFDekQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUVBO0lBRUksa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCOztBQUVyQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjtBQUVBOzs7R0FHRztBQUNIO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQ0FBMkM7SUFDM0MsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUdBO0lBQ0kseUNBQXlDO0lBRXpDLGlDQUFpQztBQUNyQztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFJQSwwQkFBMEIsT0FBTyxpQ0FBaUMsRUFBRSxFQUFFO0FBQ3RFLGtCQUFrQixPQUEwQyx3QkFBd0IsRUFBRSxDQUFDO0FBRXZGO0lBQ0k7UUFDSSw0QkFBNEI7UUFDNUIseUJBQXlCOztJQUU3QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBRUE7SUFDSTtRQUNJLDRCQUE0QjtRQUM1Qiw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGVBQWU7SUFDbkI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1sb2dpbntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4ubGVmdC1wYW5lbHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLWxvZ2luMS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubGItd2VsY29tIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmp1c3RpZnktY29udGVudC1jZW50ZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udmgtMTAwIHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm93LXd7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbnNwYW4ubGItbG9naW4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDMwcHggMHB4OyAgICBcclxufVxyXG4ubG9naW4tZm9ybSB7XHJcbiAgICBtYXgtd2lkdGg6IDM4MHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDM0NXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG59XHJcblxyXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtZmFiLm1hdC1wcmltYXJ5LCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDU4ZjE7XHJcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xyXG59XHJcbi50ZXh0LWNlbnRlcntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbmgze1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6ICM2ZDExYzE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmxiLWNvcHlyaWdodCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG59XHJcbi5pbWctbGVmdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBtYXJnaW46IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiA1NTBweDtcclxufVxyXG5cclxuLyogLmltZy1sb2dvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNDBweDtcclxufSAqL1xyXG4uaW1nLWxvZ297XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2JvdC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDc1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdXRoLWZvcm0tc2VjdGlvbj4gLmxvZ2luLWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogaW5pdGlhbDtcclxufVxyXG5cclxuLmF1dGgtZm9ybS1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuYnV0dG9uIGkge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246c3BpbiA0cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjpzcGluIDRzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjpzcGluIDRzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuaXtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGItc2lnbiB7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5ALW1vei1rZXlmcmFtZXMgc3BpbiB7IDEwMCUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7IDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxyXG5Aa2V5ZnJhbWVzIHNwaW4geyAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7IH19XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuaW1nLWxlZnQ+IGltZ3tcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIC5hdXRoLWZvcm0tc2VjdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuaW1nLWxlZnR7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiA3NXB4IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYXV0aC1mb3JtLXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIH1cclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();

    var MyErrorStateMatcher = /*#__PURE__*/function () {
      function MyErrorStateMatcher() {
        _classCallCheck(this, MyErrorStateMatcher);
      }

      _createClass(MyErrorStateMatcher, [{
        key: "isErrorState",
        value: function isErrorState(control, form) {
          var _a, _b, _c;

          var invalidCtrl = !!((control === null || control === void 0 ? void 0 : control.invalid) && ((_a = control === null || control === void 0 ? void 0 : control.parent) === null || _a === void 0 ? void 0 : _a.dirty));
          var invalidParent = !!(((_b = control === null || control === void 0 ? void 0 : control.parent) === null || _b === void 0 ? void 0 : _b.invalid) && ((_c = control === null || control === void 0 ? void 0 : control.parent) === null || _c === void 0 ? void 0 : _c.dirty));
          return invalidCtrl || invalidParent;
        }
      }]);

      return MyErrorStateMatcher;
    }();
    /***/

  },

  /***/
  "./src/app/shared/guards/auth-guard.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/guards/auth-guard.service.ts ***!
    \*****************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppSharedGuardsAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(auth, router) {
        _classCallCheck(this, AuthGuardService);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (!this.auth.isAuthenticated()) {
            this.router.navigate(['/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }

          return true;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
      return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuardService,
      factory: AuthGuardService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/guards/auth.interceptor.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/guards/auth.interceptor.ts ***!
    \***************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppSharedGuardsAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/shared/services/auth.service.ts");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(authService) {
        _classCallCheck(this, AuthInterceptor);

        this.authService = authService;
        this.isRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this3 = this;

          var token = localStorage.getItem('token');

          if (token) {
            request = this.addToken(request, token);
          }

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"] && error.status === 401) {
              return _this3.handle401Error(request, next);
            } else if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"] && error.status === 403) {
              _this3.authService.logOut();
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }
          }));
        }
      }, {
        key: "addToken",
        value: function addToken(request, token) {
          return request.clone({
            setHeaders: {
              'Authorization': "".concat(token)
            }
          });
        }
      }, {
        key: "handle401Error",
        value: function handle401Error(request, next) {
          var _this4 = this;

          if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (token) {
              _this4.isRefreshing = false;

              _this4.refreshTokenSubject.next(token);

              return next.handle(_this4.addToken(request, token['data']['access_token']));
            }));
          } else {
            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (token) {
              return token != null;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (data) {
              //console.log(data)
              return next.handle(_this4.addToken(request, data['data']['access_token']));
            }));
          }
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var AuthService = /*#__PURE__*/function () {
      function AuthService(jwtHelper, http, router) {
        var _this5 = this;

        _classCallCheck(this, AuthService);

        this.jwtHelper = jwtHelper;
        this.http = http;
        this.router = router;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/api/';

        this.login = function (data) {
          return _this5.http.post(_this5.baseUrl + 'Ai/Auth/Login', data, httpOptions);
        };

        this.loginByAdmin = function (data) {
          return _this5.http.post(_this5.baseUrl + 'Ai/Auth/LoginByAdmin', data, httpOptions);
        };

        this.register = function (data) {
          return _this5.http.post(_this5.baseUrl + 'Ai/Auth/register', data, httpOptions);
        };
      } // ...


      _createClass(AuthService, [{
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var token = localStorage.getItem('refreshToken');
          return !this.jwtHelper.isTokenExpired(token);
        }
      }, {
        key: "isAuthenticatedByAdmin",
        value: function isAuthenticatedByAdmin() {
          var token = localStorage.getItem('refreshTokenAdmin');
          return !this.jwtHelper.isTokenExpired(token);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
          this.router.navigate(['/login']);
        }
      }, {
        key: "logOutByAdmin",
        value: function logOutByAdmin() {
          localStorage.removeItem('tokenAdmin');
          localStorage.removeItem('refreshTokenAdmin');
          this.router.navigate(['/login']);
        }
      }, {
        key: "getTokenAdmin",
        value: function getTokenAdmin() {
          return localStorage.getItem('tokenAdmin');
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "refreshToken",
        value: function refreshToken() {
          var _this6 = this;

          return this.http.post(this.baseUrl + 'Ai/Auth/refresh', {
            'refreshToken': this.getRefreshToken()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (tokens) {
            localStorage.setItem('token', tokens['data']['access_token']);
            localStorage.setItem('refreshToken', tokens['data']['refresh_token']);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this6.errorHandler(err, _this6.logOut());
          }));
        }
      }, {
        key: "refreshTokenAdmin",
        value: function refreshTokenAdmin() {
          var _this7 = this;

          return this.http.post(this.baseUrl + 'Ai/Auth/refresh', {
            'refreshTokenAdmin': this.getRefreshTokenAdmin()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (tokens) {
            localStorage.setItem('tokenAdmin', tokens['data']['access_token']);
            localStorage.setItem('refreshTokenAdmin', tokens['data']['refresh_token']);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this7.errorHandler(err, _this7.logOut());
          }));
        }
      }, {
        key: "decoded",
        value: function decoded() {
          var token = localStorage.getItem('token');

          if (token) {
            return this.jwtHelper.decodeToken(token);
          }

          return null;
        }
      }, {
        key: "decodedAdmin",
        value: function decodedAdmin() {
          var token = localStorage.getItem('tokenAdmin');

          if (token) {
            return this.jwtHelper.decodeToken(token);
          }

          return null;
        }
      }, {
        key: "errorHandler",
        value: function errorHandler(error, logOut) {
          console.error(error.error.message);

          if (error.status == 403) {
            logOut;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.message || "server error.");
          } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.message || "server error.");
        }
      }, {
        key: "getRefreshToken",
        value: function getRefreshToken() {
          return localStorage.getItem('refreshToken');
        }
      }, {
        key: "getRefreshTokenAdmin",
        value: function getRefreshTokenAdmin() {
          return localStorage.getItem('refreshTokenAdmin');
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/socketio.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/services/socketio.service.ts ***!
    \*****************************************************/

  /*! exports provided: SocketioService */

  /***/
  function srcAppSharedServicesSocketioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketioService", function () {
      return SocketioService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SocketioService = /*#__PURE__*/function () {
      function SocketioService() {
        _classCallCheck(this, SocketioService);

        this.setupSocketConnection();
      }

      _createClass(SocketioService, [{
        key: "setupSocketConnection",
        value: function setupSocketConnection() {
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint);
        }
      }, {
        key: "get_socket_LiveChat",
        value: function get_socket_LiveChat() {
          var _this8 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this8.socket.on('live_chat', function (message) {
              observer.next(message);
            });
          });
        }
      }, {
        key: "get_socket_SupportRequest",
        value: function get_socket_SupportRequest() {
          var _this9 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this9.socket.on('support_request', function (message) {
              observer.next(message);
            });
          });
        }
      }, {
        key: "get_socket_Notification",
        value: function get_socket_Notification() {
          var _this10 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this10.socket.on('notification', function (message) {
              observer.next(message);
            });
          });
        }
      }]);

      return SocketioService;
    }();

    SocketioService.ɵfac = function SocketioService_Factory(t) {
      return new (t || SocketioService)();
    };

    SocketioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SocketioService,
      factory: SocketioService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/survey.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/survey.service.ts ***!
    \***************************************************/

  /*! exports provided: SurveyService */

  /***/
  function srcAppSharedServicesSurveyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyService", function () {
      return SurveyService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var SurveyService = function SurveyService(http) {
      var _this11 = this;

      _classCallCheck(this, SurveyService);

      this.http = http;
      this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/api/';

      this.getAll = function (botId, blockId) {
        return _this11.http.get(_this11.baseUrl + 'Ai/Bots/' + botId + '/Survey');
      };

      this.getById = function (botId, surveyId) {
        return _this11.http.get(_this11.baseUrl + 'Ai/Bots/' + botId + '/Survey/' + surveyId);
      };

      this.getIsDesign = function (botId) {
        return _this11.http.get(_this11.baseUrl + 'Ai/Bots/' + botId + '/SurveyIsDesign');
      };

      this.getIsUser = function (botId) {
        return _this11.http.get(_this11.baseUrl + 'Ai/Bots/' + botId + '/SurveyIsUser');
      };

      this.search = function (botId, data) {
        return _this11.http.post(_this11.baseUrl + 'Ai/Bots/' + botId + '/SurveyIsUser/Search', data, httpOptions);
      }; // tslint:disable-next-line: max-line-length


      this.create = function (botId, data) {
        return _this11.http.post(_this11.baseUrl + 'Ai/Bots/' + botId + '/Survey', data, httpOptions);
      };

      this.createForm = function (botId, data) {
        return _this11.http.post(_this11.baseUrl + 'Ai/Bots/' + botId + '/SurveyForm', data, httpOptions);
      };

      this.update = function (botId, surveyId, data) {
        return _this11.http.put(_this11.baseUrl + 'Ai/Bots/' + botId + '/Survey/' + surveyId, data, httpOptions);
      };

      this.removeById = function (botId, surveyId) {
        return _this11.http["delete"](_this11.baseUrl + 'Ai/Bots/' + botId + '/Survey/' + surveyId);
      };
    };

    SurveyService.ɵfac = function SurveyService_Factory(t) {
      return new (t || SurveyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    SurveyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SurveyService,
      factory: SurveyService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurveyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/user.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/user.service.ts ***!
    \*************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var UserService = function UserService(http) {
      var _this12 = this;

      _classCallCheck(this, UserService);

      this.http = http;
      this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/api/';

      this.getAllUser = function () {
        return _this12.http.get(_this12.baseUrl + 'Ai/Auth');
      };

      this.getUserById = function (userId) {
        return _this12.http.get(_this12.baseUrl + 'Ai/Auth/' + userId);
      }; // tslint:disable-next-line: max-line-length


      this.createUser = function (data) {
        return _this12.http.post(_this12.baseUrl + 'Ai/Auth', data, httpOptions);
      };

      this.updateUser = function (userId, data) {
        return _this12.http.put(_this12.baseUrl + 'Ai/Auth/' + userId, data, httpOptions);
      };

      this.updatePass = function (userId, data) {
        return _this12.http.put(_this12.baseUrl + 'Ai/AuthPass/' + userId, data, httpOptions);
      };

      this.removeUserById = function (userId) {
        return _this12.http["delete"](_this12.baseUrl + 'Ai/Auth/' + userId);
      };
    };

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-survey/user-survey.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/user-survey/user-survey.component.ts ***!
    \******************************************************/

  /*! exports provided: UserSurveyComponent */

  /***/
  function srcAppUserSurveyUserSurveyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSurveyComponent", function () {
      return UserSurveyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_survey_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/services/survey.service */
    "./src/app/shared/services/survey.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function UserSurveyComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSurveyComponent_div_9_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var item_r2 = ctx.$implicit;
          return item_r2.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", item_r2.variable);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r2._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", item_r2._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r2.value);
      }
    }

    var UserSurveyComponent = /*#__PURE__*/function () {
      function UserSurveyComponent(surService, actRoute, _snackBar) {
        var _this13 = this;

        _classCallCheck(this, UserSurveyComponent);

        this.surService = surService;
        this.actRoute = actRoute;
        this._snackBar = _snackBar;
        this.actRoute.queryParams.subscribe(function (params) {
          _this13.surveyId = params['id'];
          _this13.sender_id = params['sender_id'];
        });
      }

      _createClass(UserSurveyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSurveyForm();
        }
      }, {
        key: "getSurveyForm",
        value: function getSurveyForm() {
          var _this14 = this;

          this.surService.getById(null, this.surveyId).subscribe(function (res) {
            _this14.form = res['data'];
            _this14.items = res['data'].items; //console.log(this.form);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(f) {
          var _this15 = this;

          var s = {};
          s['surveyId'] = this.surveyId;
          s['data'] = f.value;
          s['sender_id'] = this.sender_id;
          s['isDesign'] = false;
          s['name'] = this.form.name;
          s['items'] = this.form.items;
          this.surService.createForm(null, s).subscribe(function (res) {
            if (res.status === 200) {
              _this15._snackBar.open('Thao tác thành công', 'OK', {
                duration: 1000
              });
            } else {
              _this15._snackBar.open('Thao tác không thành công', 'OK', {
                duration: 1000
              });
            }
          }, function (error) {
            _this15._snackBar.open('Thao tác không thành công', 'OK', {
              duration: 1000
            });
          });
        }
      }]);

      return UserSurveyComponent;
    }();

    UserSurveyComponent.ɵfac = function UserSurveyComponent_Factory(t) {
      return new (t || UserSurveyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_survey_service__WEBPACK_IMPORTED_MODULE_1__["SurveyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
    };

    UserSurveyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserSurveyComponent,
      selectors: [["app-user-survey"]],
      decls: 12,
      vars: 2,
      consts: [[1, "page-survey"], [1, "row", "flex-grow"], [1, "col-lg-6", "mx-auto"], [1, "login-form"], ["surveyForm", "ngForm"], [1, "example-container"], [1, "lb-form"], [4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", 2, "width", "100%", "margin", "40px 0px 5px 0px", 3, "click"], [1, "form-group"], [3, "for"], ["placeholder", "Vui l\xF2ng nh\u1EADp th\xF4ng tin", 1, "form-control", 3, "id", "ngModel", "name", "ngModelChange"]],
      template: function UserSurveyComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserSurveyComponent_div_9_Template, 5, 5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserSurveyComponent_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.onSubmit(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ho\xE0n th\xE0nh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.form == undefined ? "" : ctx.form.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: [".page-survey[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 20px;\r\n}\r\n\r\n\r\nspan.lb-form[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    display: block;\r\n    margin: 29px;\r\n    font-size: 24px;\r\n    font-weight: 500;\r\n    text-transform: uppercase;\r\n    color: #367eff;\r\n}\r\n\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n}\r\n\r\n\r\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\r\n    background-color: #3d58f1;\r\n    min-height: 35px;\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-input-placeholder{\r\n    opacity: 0.6;\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]::-moz-placeholder{\r\n    opacity: 0.6;\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]::-ms-input-placeholder{\r\n    opacity: 0.6;\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]::placeholder{\r\n    opacity: 0.6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1zdXJ2ZXkvdXNlci1zdXJ2ZXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7OztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOzs7QUFGQTtJQUNJLFlBQVk7QUFDaEI7OztBQUZBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRkE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1zdXJ2ZXkvdXNlci1zdXJ2ZXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXN1cnZleXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuXHJcbnNwYW4ubGItZm9ybSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjlweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICMzNjdlZmY7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtZmFiLm1hdC1wcmltYXJ5LCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDU4ZjE7XHJcbiAgICBtaW4taGVpZ2h0OiAzNXB4O1xyXG59XHJcbjo6cGxhY2Vob2xkZXJ7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSurveyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-survey',
          templateUrl: './user-survey.component.html',
          styleUrls: ['./user-survey.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_survey_service__WEBPACK_IMPORTED_MODULE_1__["SurveyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiEndpoint: 'http://localhost:3000' //apiEndpoint: ''
      //apiEndpoint: 'https://chatbot.tpsoft.vn'
      //apiEndpoint: 'https://bot.chatcare.vn'

    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\TRAND\Desktop\Dev\chatbot-client\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map