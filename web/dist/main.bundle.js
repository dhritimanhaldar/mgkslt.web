webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"admin-layout.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_network_service__ = __webpack_require__("./src/app/services/app-network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(apns, rtr) {
        this.apns = apns;
        this.rtr = rtr;
        this.appNetworkService = apns;
        this.router = rtr;
        if (!this.appNetworkService.verifyIfLoggedIn() && this.router.url !== '/login') {
            this.router.navigateByUrl('/login');
        }
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_app_network_service__["a" /* AppNetworkService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service__ = __webpack_require__("./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_components_module__ = __webpack_require__("./src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_app_network_service__ = __webpack_require__("./src/app/services/app-network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_app_notification_service__ = __webpack_require__("./src/app/services/app-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__school_creation_wizard_school_creation_wizard_component__ = __webpack_require__("./src/app/school-creation-wizard/school-creation-wizard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__layouts_admin_layout_admin_layout_component__ = __webpack_require__("./src/app/layouts/admin-layout/admin-layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_15__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                })
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_14__school_creation_wizard_school_creation_wizard_component__["a" /* BoardDialog */], __WEBPACK_IMPORTED_MODULE_14__school_creation_wizard_school_creation_wizard_component__["c" /* StateDialog */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_16__layouts_admin_layout_admin_layout_component__["a" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__school_creation_wizard_school_creation_wizard_component__["a" /* BoardDialog */],
                __WEBPACK_IMPORTED_MODULE_14__school_creation_wizard_school_creation_wizard_component__["c" /* StateDialog */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_12__services_app_notification_service__["a" /* AppNotificationService */],
                __WEBPACK_IMPORTED_MODULE_11__services_app_network_service__["a" /* AppNetworkService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_admin_layout_admin_layout_component__ = __webpack_require__("./src/app/layouts/admin-layout/admin-layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__layouts_admin_layout_admin_layout_component__["a" /* AdminLayoutComponent */],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    }
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { AppNetworkService } from '../services/app-network.service';
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */],
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://presentation.creative-tim.com\">\n                        About Us\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                        Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}, made with love by\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-shadow {\n\t-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n\t        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-white navbar-shadow navbar-absolute fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n           <!--  <form class=\"navbar-form\">\n                <div class=\"input-group no-border\">\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                        <i class=\"material-icons\">search</i>\n                        <div class=\"ripple-container\"></div>\n                    </button>\n                </div>\n            </form> -->\n            <ul class=\"navbar-nav\">\n                <!-- <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#pablo\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Stats</span>\n                        </p>\n                    </a>\n                </li> -->\n                <!-- <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                        </p>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                        <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                        <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another One</a>\n                    </div>\n                </li> -->\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">person</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Account</span>\n                        </p>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a class=\"dropdown-item\" href=\"\" (click)=\"logout($event)\">Logout</a>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_network_service__ = __webpack_require__("./src/app/services/app-network.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(location, element, router, apns) {
        this.element = element;
        this.router = router;
        this.apns = apns;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
        this.appNetworkService = apns;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            // if (body.querySelectorAll('.main-panel')) {
            //     document.getElementsByClassName('main-panel')[0].appendChild($layer);
            // }else if (body.classList.contains('off-canvas-sidebar')) {
            //     document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            // }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        return this.appNetworkService.getUser()["name"];
    };
    NavbarComponent.prototype.logout = function (event) {
        event.stopPropagation();
        this.appNetworkService.logout();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_app_network_service__["a" /* AppNetworkService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"/role/assets/img/angular2-logo-red.png\"/>\n        </div>\n        Creative Tim\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <div *ngIf=\"isMobileMenu()\">\n    <form class=\"navbar-form\">\n      <span class=\"bmd-form-group\">\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i>\n            <div class=\"ripple-container\"></div>\n          </button>\n        </div>\n      </span>\n    </form>\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#pablo\">\n                <i class=\"material-icons\">dashboard</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Stats</span>\n                </p>\n            </a>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">5</span>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                </p>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\n            </div>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#pablo\">\n                <i class=\"material-icons\">person</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Account</span>\n                </p>\n            </a>\n        </li>\n    </ul>\n  </div>\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
    { path: '/school', title: 'School', icon: 'content_paste', class: '' },
    { path: '/typography', title: 'Typography', icon: 'library_books', class: '' },
    { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <!-- <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"../assets/img/sidebar-1.jpg\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(/role/assets/img/sidebar-4.jpg)\"></div>\n    </div> -->\n    <div class=\"main-panel\">\n        <app-navbar *ngIf=\"isNavBarActive\"></app-navbar>\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_network_service__ = __webpack_require__("./src/app/services/app-network.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLayoutComponent = (function () {
    function AdminLayoutComponent(location, router, apns) {
        this.location = location;
        this.router = router;
        this.apns = apns;
        this.yScrollStack = [];
        this.isNavBarActive = true;
        this.appNetworkService = apns;
        if (!this.appNetworkService.verifyIfLoggedIn() && this.router.url === '/login') {
            this.isNavBarActive = false;
        }
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        // const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
        // const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationStart */]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* NavigationEnd */]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            // elemMainPanel.scrollTop = 0;
            // elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            // let ps = new PerfectScrollbar(elemMainPanel);
            // ps = new PerfectScrollbar(elemSidebar);
        }
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            // const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
            // const ps = new PerfectScrollbar(elemMainPanel);
            // ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__("./src/app/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__("./src/app/layouts/admin-layout/admin-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_app_network_service__["a" /* AppNetworkService */]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/school-creation-wizard/board-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>List of Boards</h2>\n<div *ngIf=\"isLoading\">\n\tLoading...\n</div>\n<div *ngIf=\"!isLoading\">\n\t<div *ngIf = \"boardListCallFailed\">\n\t\tCall failed. try again\n\t</div>\n\t<div *ngIf = \"!boardListCallFailed\">\n\t\t<mat-form-field mat-dialog-title>\n\t\t\t<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n\t\t</mat-form-field>\n\t\t<mat-dialog-content style=\"height: calc(60vh - 185px);\">\n\t\t\t<mat-table #table [dataSource]=\"dataSource\">\n\t\t\t    <ng-container matColumnDef=\"name\">\n\t\t\t      <mat-header-cell *matHeaderCellDef style=\"cursor: pointer;\"> Name </mat-header-cell>\n\t\t\t      <mat-cell style=\"cursor: pointer;\" *matCellDef=\"let element\" [ngClass]=\"popup-option\" (click)=\"selectBoard(element)\"> {{element.name}} </mat-cell>\n\t\t\t    </ng-container>\n\t\t\t    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t  \t\t\t<mat-row style=\"cursor: pointer;\" *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"popup-option\"></mat-row>\n\t\t\t</mat-table>\n\t\t</mat-dialog-content>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/school-creation-wizard/school-creation-wizard.component.css":
/***/ (function(module, exports) {

module.exports = "/*Step Progress*/\n.step-progress {\n\tlist-style-type: none;\n\tmargin: 0;\n\tpadding: 0;\n\toverflow: hidden;\n\tpadding-bottom:10px;\n}\n.step-progress li {\n\ttext-decoration: none;\n\tdisplay:inline-block;\n\tborder-radius: 50%;\n\tpadding-top:30px;\n\twidth:80px;\n\theight:80px;\n\tcursor: default;\n}\n.step-progress li hr {\n\tmargin-top:40px;\n\tbackground-color: #444;\n\theight: 1px;\n}\n.step-progress-complete{\n\t-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n\t        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n\tfont-weight: bold;\n\tbackground-color: #e91e63;\n\tcolor: #fff;\n\ttext-align: center;\n}\n.step-progress-active{\n\t-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n\t        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n\tfont-weight: bold;\n\tbackground-color: #fff;\n\tcolor: #555;\n\tborder:2px solid #e91e63;\n\ttext-align: center;\n\t\n}\n.step-progress-incomplete{\n\t-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n\t        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n\tfont-weight: bold;\n\tbackground-color: #fff;\n\tcolor: #555;\n\ttext-align: center;\n\t\n}\n/*Uploader*/\n.drop-zone {\n\tborder:3px dashed #ccc; \n\twidth: 100%; \n\theight: 100%;\n}\n.drop-zone-highlighted {\n\tborder:3px dashed #e91e63; \n\twidth: 100%; \n\theight: 100%;\n}\n.drop-zone-unmarked {\n\tborder: 0;\n}\n.drop-zone-input {\n\tposition:absolute;\n\tcursor:pointer;\n\tz-index:2;\n\tleft:0;\n\ttop:0;\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0;\n}\n.drop-zone-label {\n\tmargin-top:25%;\n\tcolor:grey;\n\tfont-style:italic;\n\tfont-size:20px;\n\tdisplay:block;\n}\n.schoolImagePreviewOff {\n\tdisplay: none;\n}\n.schoolImagePreview {\n\tdisplay:block;\n\twidth: 100%;\n\ttext-align: center;\n\tborder: 5px solid #fff;\n\t-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.86);\n\t        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.86);\n}\n.drop-zone-crosslabel {\n\tposition: absolute;\n\ttop:5px;\n\tleft: 20px;\n\tz-index:10;\n\tbackground-color: #000;\n\topacity: 0.78;\n\tcolor: #fff;\n\twidth: calc(100% - 40px);\n\tpadding-left: 20px;\n\tpadding-top: 20px;\n\theight: 60px;\n\ttext-align: left;\n\tfont-weight: bold;\n\t-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.86);\n\t        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.86);\n}\n.popup-option {\n\tcursor: pointer;\n\tbackground-color: #ccc;\n}"

/***/ }),

/***/ "./src/app/school-creation-wizard/school-creation-wizard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      \n      <div class=\"row\">\n\n        <div class=\"col col-lg-1\"></div>\n        <div class=\"col col-lg-10 text-center\">\n          <ul class=\"step-progress step-progress-rose text-center\">\n            <li class=\"step-progress-active\">\n              1\n            </li>\n            <li>\n              <hr>\n            </li>\n            <li class=\"step-progress-incomplete\">\n              2\n            </li>\n            <li>\n              <hr>\n            </li>\n            <li class=\"step-progress-incomplete\">\n              3\n            </li>\n            <li>\n              <hr>\n            </li>\n            <li class=\"step-progress-incomplete\">\n              4\n            </li>\n            <li>\n              <hr>\n            </li>\n            <li class=\"step-progress-incomplete\">\n              5\n            </li>\n          </ul>\n        </div>\n        <div class=\"col col-lg-1\"></div>\n\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col col-lg-1\"></div>\n        <div class=\"col col-lg-10\">\n\n          <!-- STAGE 1 -->\n          <div class=\"card\" *ngIf=\"stage == 0\">\n                  <div class=\"card-header card-header-rose\">\n                      <h4 class=\"card-title\">Basic Info</h4>\n                      <p class=\"card-category\">Tell us about your school</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <form>\n                          <div class=\"row\">\n                            <div class=\"col col-lg-6\">\n                              <div [ngClass]=\"{'drop-zone': !isActive && !isPreviewActive, 'drop-zone-highlighted': isActive && !isPreviewActive, 'text-center': true , 'drop-zone-unmarked': isPreviewActive}\" (dragenter)=\"dragStart($event)\" (dragover)=\"dragOver($event)\" (dragleave)=\"dragEnd($event)\" (drop)=\"onDrop($event)\">\n                                <div [ngClass]=\"{'schoolImagePreviewOff': !isPreviewActive, 'drop-zone-crosslabel': isPreviewActive}\">\n                                  <span style=\"cursor:pointer\" (click)=\"clearPreview()\">CLEAR</span>\n                                </div>\n                                <span [ngClass]=\"{'schoolImagePreviewOff': isPreviewActive, 'drop-zone-label': !isPreviewActive }\">\n                                  Drag & Drop you School's Display Picture<br>OR<br>\n                                  <div mat-raised-button class=\"btn btn-rose text-center\" style=\"font-weight: normal\">\n                                    Upload Image<input type=\"file\" class=\"drop-zone-input\" (change)=\"changeListener($event)\"/>\n                                  </div>\n                                </span>\n                                <img [ngClass]=\"{'schoolImagePreview': isPreviewActive, 'schoolImagePreviewOff': !isPreviewActive}\" [src]=\"schoolImagePreview\">\n                              </div>\n                            </div>\n                            <div class=\"col col-lg-6\">\n                              <mat-form-field class=\"example-full-width\">\n                                <input [(ngModel)]=\"school.name\" name=\"name\" matInput placeholder=\"School Name\" type=\"text\" required>\n                              </mat-form-field>\n                              <mat-form-field class=\"example-full-width\" (click)=\"openBoardDialog()\">\n                                <input disabled=\"true\" [value]=\"school.board ? school.board.name : ''\" name=\"board\" matInput placeholder=\"Board\" type=\"text\">\n                              </mat-form-field>\n                              <mat-form-field class=\"example-full-width\">\n                                <textarea [(ngModel)]=\"school.address\" name=\"address\" matInput placeholder=\"Address\" required></textarea>\n                              </mat-form-field>\n                              <mat-form-field class=\"example-full-width\">\n                                  <input [(ngModel)]=\"school.city\" name=\"city\" matInput placeholder=\"City\" type=\"text\" required>\n                                </mat-form-field>\n                                <mat-form-field class=\"example-full-width\" (click)=\"openStateDialog()\">\n                                  <input disabled=\"true\" [value]=\"school.state ? school.state.name : ''\" name=\"state\" matInput placeholder=\"State\" type=\"text\">\n                                </mat-form-field>\n                                <mat-form-field class=\"example-full-width\">\n                                  <input [(ngModel)]=\"school.pincode \" matInput  name=\"pincode\" placeholder=\"Pincode\" type=\"text\" required>\n                                </mat-form-field>\n                            </div>\n                          </div>\n                          <button mat-raised-button type=\"button\" class=\"btn btn-rose pull-right\" (click)=\"next($event, stage + 1)\">NEXT</button>\n                          <div class=\"clearfix\"></div>\n                      </form>\n                  </div>\n          </div>\n\n          <!-- STAGE 2 -->\n          <div class=\"card\" *ngIf=\"stage == 0\">\n                  <div class=\"card-header card-header-rose\">\n                      <h4 class=\"card-title\">Class Info</h4>\n                      <p class=\"card-category\">How many classes does your school have?</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <form>\n                          \n                          <button mat-raised-button type=\"button\" class=\"btn btn-rose pull-right\" (click)=\"next($event, stage + 1)\">NEXT</button>\n                          <div class=\"clearfix\"></div>\n                      </form>\n                  </div>\n          </div>\n\n\n        </div>\n        <div class=\"col col-lg-1\"></div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/school-creation-wizard/school-creation-wizard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export school */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SchoolCreationWizardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StateDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_network_service__ = __webpack_require__("./src/app/services/app-network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_notification_service__ = __webpack_require__("./src/app/services/app-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




//school object
var school = (function () {
    function school() {
    }
    return school;
}());

var SchoolCreationWizardComponent = (function () {
    function SchoolCreationWizardComponent(apns, ans, dialog) {
        this.apns = apns;
        this.ans = ans;
        this.dialog = dialog;
        this.stage = 0;
        this.isActive = false;
        this.isPreviewActive = false;
        this.school = new school();
        this.appNetworkService = apns;
        this.appNotificationService = ans;
    }
    SchoolCreationWizardComponent.prototype.openBoardDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(BoardDialog, {
            width: "45vw",
            height: "60vh",
            data: { selectedBoard: this.school.board }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result)
                _this.school.board = result;
        });
    };
    SchoolCreationWizardComponent.prototype.openStateDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(StateDialog, {
            width: "45vw",
            height: "60vh",
            data: { selectedState: this.school.state }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result)
                _this.school.state = result;
        });
    };
    SchoolCreationWizardComponent.prototype.setLoaderOn = function (target) {
        target.disabled = true;
        target.innerHTML = "<img src='/role/assets/img/loading.gif' style='width:12px;height:12px'>";
    };
    SchoolCreationWizardComponent.prototype.setLoaderOff = function (target) {
        target.disabled = false;
        target.innerHTML = "NEXT";
    };
    SchoolCreationWizardComponent.prototype.next = function (event, nextStage) {
        var _this = this;
        this.setLoaderOn(event.target);
        switch (nextStage) {
            case 1:
                this.networkStage1(event.target, function (success) {
                    if (success) {
                        _this.stage++;
                        alert("show newxt view");
                    }
                    _this.setLoaderOff(event.target);
                });
                break;
            case 2:
                this.networkStage2(event.target, function (success) {
                    if (success) {
                        _this.stage++;
                        alert("show next view 2");
                    }
                    _this.setLoaderOff(event.target);
                });
                break;
        }
    };
    SchoolCreationWizardComponent.prototype.networkStage1 = function (target, callback) {
        var _this = this;
        if (!this.school.name || !this.school.address || !this.school.city || !this.school.pincode || !this.school.board || !this.school.state) {
            this.appNotificationService.notify("One or more fields are missing", "danger");
            callback(false);
            return;
        }
        var schoolObject = {
            name: this.school.name,
            address: this.school.address,
            city: this.school.city,
            pincode: this.school.pincode,
            boardId: this.school.board.id,
            stateId: this.school.state.id
        };
        this.appNetworkService.saveSchoolDetail(schoolObject)
            .then(function (d) {
            var data = d.json();
            _this.school.id = data.schoolId;
            _this.adminId = data.adminId;
            _this.appNetworkService.getRoleAuthKey("admin", _this.adminId, _this.school.id)
                .then(function (dt) {
                if (dt) {
                    callback(true);
                }
                else {
                    window.location.reload();
                    callback(false);
                }
            })
                .catch(function (ex) {
                window.location.reload();
                callback(false);
            });
        })
            .catch(function (e) {
            _this.appNotificationService.notifyGenericError();
            callback(false);
        });
    };
    SchoolCreationWizardComponent.prototype.networkStage2 = function (target, callback) {
        var _this = this;
        if (!this.school.name || !this.school.address || !this.school.city || !this.school.pincode || !this.school.board || !this.school.state) {
            this.appNotificationService.notify("One or more fields are missing", "danger");
            callback(false);
            return;
        }
        var schoolObject = {
            name: this.school.name,
            address: this.school.address,
            city: this.school.city,
            pincode: this.school.pincode,
            boardId: this.school.board.id,
            stateId: this.school.state.id
        };
        this.appNetworkService.saveSchoolDetail(schoolObject)
            .then(function (d) {
            var data = d.json();
            _this.school.id = data.schoolId;
            _this.adminId = data.adminId;
            _this.appNetworkService.getRoleAuthKey("admin", _this.adminId, _this.school.id)
                .then(function (dt) {
                if (dt) {
                    callback(true);
                }
                else {
                    window.location.reload();
                    callback(false);
                }
            })
                .catch(function (ex) {
                window.location.reload();
                callback(false);
            });
        })
            .catch(function (e) {
            _this.appNotificationService.notifyGenericError();
            callback(false);
        });
    };
    SchoolCreationWizardComponent.prototype.dragStart = function (event) {
        this.isActive = true;
    };
    SchoolCreationWizardComponent.prototype.dragEnd = function (event) {
        this.isActive = false;
    };
    SchoolCreationWizardComponent.prototype.dragOver = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    SchoolCreationWizardComponent.prototype.onDrop = function (event) {
        event.preventDefault();
        this.isActive = false;
        switch (this.stage) {
            case 0:
                this.showImagePreview(event.dataTransfer.files[0]);
                break;
        }
    };
    SchoolCreationWizardComponent.prototype.changeListener = function (event) {
        switch (this.stage) {
            case 0:
                this.showImagePreview(event.target.files[0]);
                break;
        }
    };
    SchoolCreationWizardComponent.prototype.showImagePreview = function (file) {
        var reader = new FileReader();
        var self = this;
        reader.onload = function (event) {
            self.schoolImagePreview = reader.result;
            self.isPreviewActive = true;
        };
        reader.readAsDataURL(file);
    };
    SchoolCreationWizardComponent.prototype.clearPreview = function () {
        this.schoolImagePreview = null;
        this.isPreviewActive = false;
    };
    SchoolCreationWizardComponent.prototype.ngOnInit = function () {
    };
    SchoolCreationWizardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-school-creation-wizard',
            template: __webpack_require__("./src/app/school-creation-wizard/school-creation-wizard.component.html"),
            styles: [__webpack_require__("./src/app/school-creation-wizard/school-creation-wizard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_app_network_service__["a" /* AppNetworkService */], __WEBPACK_IMPORTED_MODULE_2__services_app_notification_service__["a" /* AppNotificationService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialog */]])
    ], SchoolCreationWizardComponent);
    return SchoolCreationWizardComponent;
}());

var BoardDialog = (function () {
    function BoardDialog(dialogRef, data, apns) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.apns = apns;
        this.boardListCallFailed = false;
        this.isLoading = true;
        this.displayedColumns = ["name"];
        this.selectedBoard = data.selectedBoard;
        this.appNetworkService = apns;
        this.appNetworkService.getBoardList()
            .then(function (d) {
            var data = d.json();
            console.log(data);
            _this.boardList = data.list;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatTableDataSource */](_this.boardList);
            _this.isLoading = false;
            _this.boardListCallFailed = false;
        }).catch(function (e) {
            _this.isLoading = false;
            _this.boardListCallFailed = true;
        });
    }
    BoardDialog.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    BoardDialog.prototype.selectBoard = function (board) {
        this.selectedBoard = board;
        this.dialogRef.close(this.selectedBoard);
    };
    BoardDialog.prototype.onNoClick = function () {
        this.dialogRef.close(this.selectedBoard);
    };
    BoardDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'board-dialog',
            template: __webpack_require__("./src/app/school-creation-wizard/board-dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__services_app_network_service__["a" /* AppNetworkService */]])
    ], BoardDialog);
    return BoardDialog;
}());

var StateDialog = (function () {
    function StateDialog(dialogRef, data, apns) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.apns = apns;
        this.stateListCallFailed = false;
        this.isLoading = true;
        this.displayedColumns = ["name"];
        this.selectedState = data.selectedState;
        this.appNetworkService = apns;
        this.appNetworkService.getStateList()
            .then(function (d) {
            var data = d.json();
            console.log(data);
            _this.stateList = data.list;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatTableDataSource */](_this.stateList);
            _this.isLoading = false;
            _this.stateListCallFailed = false;
        }).catch(function (e) {
            _this.isLoading = false;
            _this.stateListCallFailed = true;
        });
    }
    StateDialog.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    StateDialog.prototype.selectState = function (state) {
        this.selectedState = state;
        this.dialogRef.close(this.selectedState);
    };
    StateDialog.prototype.onNoClick = function () {
        this.dialogRef.close(this.selectedState);
    };
    StateDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'state-dialog',
            template: __webpack_require__("./src/app/school-creation-wizard/state-dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__services_app_network_service__["a" /* AppNetworkService */]])
    ], StateDialog);
    return StateDialog;
}());



/***/ }),

/***/ "./src/app/school-creation-wizard/state-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>List of States</h2>\n<div *ngIf=\"isLoading\">\n\tLoading...\n</div>\n<div *ngIf=\"!isLoading\">\n\t<div *ngIf = \"stateListCallFailed\">\n\t\tCall failed. try again\n\t</div>\n\t<div *ngIf = \"!stateListCallFailed\">\n\t\t<mat-form-field mat-dialog-title>\n\t\t\t<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n\t\t</mat-form-field>\n\t\t<mat-dialog-content style=\"height: calc(60vh - 185px);\">\n\t\t\t<mat-table #table [dataSource]=\"dataSource\">\n\t\t\t    <ng-container matColumnDef=\"name\">\n\t\t\t      <mat-header-cell *matHeaderCellDef style=\"cursor: pointer;\"> Name </mat-header-cell>\n\t\t\t      <mat-cell style=\"cursor: pointer;\" *matCellDef=\"let element\" [ngClass]=\"popup-option\" (click)=\"selectState(element)\"> {{element.name}} </mat-cell>\n\t\t\t    </ng-container>\n\t\t\t    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t  \t\t\t<mat-row style=\"cursor: pointer;\" *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"popup-option\"></mat-row>\n\t\t\t</mat-table>\n\t\t</mat-dialog-content>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/services/app-network.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export school */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppNetworkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("./node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//school object
var school = (function () {
    function school(name, address, city, pincode, boardId, stateId) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.pincode = pincode;
        this.boardId = boardId;
        this.stateId = stateId;
    }
    return school;
}());

var AppNetworkService = (function () {
    function AppNetworkService(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
        this._baseUrl = "https://sg.mgkslt.com/";
        this.baseWebUrl = "//www.mgkslt.com";
        this.roles = ["ADMIN", "TEACHER", "PARENT"];
        this.roleList = null;
        this.user = null;
        this.boardList = null;
        this.stateList = null;
        this.cookieService = _cookieService;
        // this.verifyCookies(this.getCookie("authorization"), this.getCookie("roleauth"));
        this._token = this.getCookie("authorization");
    }
    //COOKIE RELATED FUNCTIONS
    AppNetworkService.prototype.getCookie = function (key) {
        return this._cookieService.get(key);
    };
    AppNetworkService.prototype.setCookie = function (key, val) {
        this._cookieService.put(key, val);
    };
    AppNetworkService.prototype.deleteCookie = function (key) {
        this._cookieService.remove(key);
    };
    AppNetworkService.prototype.deleteAllCookies = function () {
        this._cookieService.removeAll();
    };
    AppNetworkService.prototype.verifyIfLoggedIn = function () {
        if (!this.getCookie("authorization")) {
            this.deleteAllCookies();
            return false;
        }
        return true;
    };
    // verifyCookies(authCookie: string, roleauthCookie: string) {
    //   if(!authCookie) {
    //     this.redirectToLogin()
    //     return;
    //   }
    //   if(roleauthCookie){
    //     this.redirectToPortal()
    //     return;
    //   }
    // }
    // HTTP REQUESTS WRAPPERS - GET, POST, PATCH
    //request wrapper
    AppNetworkService.prototype.getRequest = function (url) {
        var _this = this;
        return this.http
            .get(this.getUrl(url), new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.getHeaderDetail(undefined, undefined)
        }))
            .toPromise()
            .then(function (res) {
            if (res.headers.get("roleauth")) {
                _this._roleauth = res.headers.get("roleauth");
            }
            return res;
        });
    };
    AppNetworkService.prototype.postRequest = function (url, object) {
        var _this = this;
        return this.http
            .post(this.getUrl(url), object, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.getHeaderDetail(undefined, undefined)
        }))
            .toPromise()
            .then(function (res) {
            if (res.headers.get("roleauth")) {
                _this._roleauth = res.headers.get("roleauth");
            }
            return res;
        });
    };
    AppNetworkService.prototype.patchRequest = function (url, object) {
        var _this = this;
        return this.http
            .patch(this.getUrl(url), object, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.getHeaderDetail(undefined, undefined)
        }))
            .toPromise()
            .then(function (res) {
            if (res.headers.get("roleauth")) {
                _this._roleauth = res.headers.get("roleauth");
            }
            return res;
        });
    };
    //get header for all request
    AppNetworkService.prototype.getHeaderDetail = function (_contentType, fpauth) {
        var _header = {
            "Content-Type": _contentType || "application/json",
            fpauthorization: fpauth,
            authorization: this._token,
            roleauth: this._roleauth
        };
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](_header);
    };
    //get url
    AppNetworkService.prototype.getUrl = function (url) {
        return this._baseUrl + url;
    };
    //get all user details
    AppNetworkService.prototype.getUserAsync = function () {
        var _this = this;
        if (this.user == null) {
            return this.getRequest("secure/user")
                .then(function (d) {
                var data = d.json();
                _this.user = data;
                return data;
            }).catch(function (e) {
                _this.deleteCookie("authorization");
                _this.deleteCookie("roleauth");
                // this.verifyCookies(undefined, undefined);
                return false;
            });
        }
    };
    AppNetworkService.prototype.getUser = function () {
        return this.user;
    };
    //logout
    AppNetworkService.prototype.logout = function () {
        this.deleteCookie("authorization");
        this.deleteCookie("roleauth");
        window.location.reload();
    };
    //get all boards
    AppNetworkService.prototype.getBoardList = function () {
        if (this.boardList == null) {
            return this.getRequest("/board/list");
        }
        else {
            return new Promise(this.boardList);
        }
    };
    //get all states
    AppNetworkService.prototype.getStateList = function () {
        if (this.stateList == null) {
            return this.getRequest("/state/list");
        }
        else {
            return new Promise(this.stateList);
        }
    };
    //get all user roles
    AppNetworkService.prototype.getUserRole = function () {
        var _this = this;
        if (this.roleList == null) {
            return this.getRequest("secure/user/listRoles")
                .then(function (d) {
                var data = d.json();
                _this.roleList = data;
                return data;
            })
                .catch(function (e) {
                _this.deleteCookie("authorization");
                _this.deleteCookie("roleauth");
                // this.verifyCookies(undefined, undefined);
                return false;
            });
        }
        else {
            return new Promise(this.roleList);
        }
    };
    //save school
    AppNetworkService.prototype.saveSchoolDetail = function (objSchool) {
        return this.postRequest("secure/school/", objSchool);
    };
    //save class detail
    AppNetworkService.prototype.saveClassDetail = function (objClass, schoolId, classId) {
        if (classId && classId.length > 0) {
            return this.postRequest("secure/app/school/" + schoolId + "/class", objClass);
        }
        else {
            return this.postRequest("secure/app/school/" + schoolId + "/class", objClass);
        }
    };
    //role auth key
    AppNetworkService.prototype.getRoleAuthKey = function (type, id, sid) {
        var _this = this;
        return this.getRequest("secure/user/roleauth/" + type + "/" + id + "?sid=" + sid)
            .then(function (d) {
            _this._roleauth = d.headers.get("roleauth");
            return true;
        })
            .catch(function (e) {
            return false;
        });
    };
    AppNetworkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]])
    ], AppNetworkService);
    return AppNetworkService;
}());



/***/ }),

/***/ "./src/app/services/app-notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppNotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppNotificationService = (function () {
    function AppNotificationService() {
    }
    AppNotificationService.prototype.notifyGenericError = function () {
        this.notify("Oops! Looks like we encountered some issue. Please try again later", 'danger');
    };
    AppNotificationService.prototype.notify = function (message, type) {
        this.showNotification('top', 'center', type, message);
    };
    AppNotificationService.prototype.showNotification = function (from, align, type, message) {
        var iconTypeMapping = {
            '': 'notification',
            'info': 'notification',
            'danger': 'error',
            'warning': 'warning'
        };
        $.notify({
            icon: iconTypeMapping[type],
            message: message
        }, {
            type: type,
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">' + iconTypeMapping[type] + '</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    AppNotificationService.prototype.ngOnInit = function () {
    };
    AppNotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppNotificationService);
    return AppNotificationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map