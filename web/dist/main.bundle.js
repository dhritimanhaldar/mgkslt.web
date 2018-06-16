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

/***/ "./src/app/Utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
var Utils = (function () {
    function Utils() {
    }
    Utils.markBusy = function (button) {
        button.disabled = true;
        button.innerHTML = "<img src='/assets/img/loading.gif' style='width:20px;height:20px'>";
    };
    Utils.markActive = function (button, originalButtonContent) {
        button.disabled = false;
        button.innerHTML = originalButtonContent;
    };
    Utils.checkFileExtention = function (filename, accepts) {
        var extension = filename.split('.').pop();
        return extension.toLowerCase() == accepts;
    };
    Utils.getDisplayUpdatedAt = function (timestamp) {
        var currentTimestamp = new Date().getTime();
        var diff = (currentTimestamp - timestamp) / 1000;
        if (diff < 1) {
            return "just now";
        }
        else if (diff < 15) {
            return Math.floor(diff) + " seconds ago";
        }
        else if (diff < 60) {
            return " few seconds ago";
        }
        else if (diff < 90) {
            return " about a minute ago";
        }
        else if (diff < 3600) {
            return Math.floor(diff / 60) + " minutes ago";
        }
        else if (diff < 3600 * 24) {
            return Math.floor(diff / 3600) + " hours ago";
        }
        else if (diff < 3600 * 48) {
            return "yesterday";
        }
        else {
            var localDateTime = (new Date(timestamp)).toLocaleDateString();
            return "on " + localDateTime;
        }
    };
    Utils.validatePhone = function (phone) {
        if (!phone || phone.trim().match(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/) == null) {
            return false;
        }
        return true;
    };
    Utils.validatePassword = function (password) {
        if (!password || password.length < 6) {
            return false;
        }
        return true;
    };
    Utils.validateEmail = function (email) {
        if (!email || email.trim().match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) == null) {
            return false;
        }
        return true;
    };
    Utils.getGenders = function () {
        return this.genders;
    };
    Utils.getSupportedFileInfo = function () {
        return this.supportedFileInfo;
    };
    Utils.isValidImageFile = function (fileType) {
        var ftype = fileType.split("/")[1];
        if (ftype) {
            if (!this.supportedFileInfo[ftype]) {
                return false;
            }
            return this.supportedFileInfo[ftype]["normalizedType"] == "image";
        }
        return false;
    };
    Utils.genders = [
        { "value": "M", "text": "Male" },
        { "value": "F", "text": "Female" },
        { "value": "O", "text": "Other" },
    ];
    Utils.supportedFileInfo = {
        "csv": { "normalizedType": "file", "type": "csv" },
        "docx": { "normalizedType": "file", "type": "docx" },
        "doc": { "normalizedType": "file", "type": "doc" },
        "jpg": { "normalizedType": "image", "type": "image/jpg" },
        "jpeg": { "normalizedType": "image", "type": "image/jpeg" },
        "png": { "normalizedType": "image", "type": "image/png" }
    };
    return Utils;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

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
        this.router.navigateByUrl('/search');
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_app_network_service__["a" /* AppNetworkService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_checkbox__ = __webpack_require__("./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_button_toggle__ = __webpack_require__("./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_radio__ = __webpack_require__("./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_cookie_services_cookies_service__ = __webpack_require__("./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_components_module__ = __webpack_require__("./src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_app_network_service__ = __webpack_require__("./src/app/services/app-network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_app_notification_service__ = __webpack_require__("./src/app/services/app-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__school_creation_wizard_school_creation_wizard_component__ = __webpack_require__("./src/app/school-creation-wizard/school-creation-wizard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_studentinputform_studentinputform_component__ = __webpack_require__("./src/app/components/studentinputform/studentinputform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_profilepic_profilepic_component__ = __webpack_require__("./src/app/components/profilepic/profilepic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__layouts_admin_layout_admin_layout_component__ = __webpack_require__("./src/app/layouts/admin-layout/admin-layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appInitializerFn = function (appNetworkService) {
    if (appNetworkService.verifyIfLoggedIn()) {
        return function () {
            return appNetworkService.getUserAsync();
        };
    }
    else {
        return function () { return true; };
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_14__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_22__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                })
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_19__school_creation_wizard_school_creation_wizard_component__["a" /* BoardDialog */], __WEBPACK_IMPORTED_MODULE_19__school_creation_wizard_school_creation_wizard_component__["c" /* StateDialog */], __WEBPACK_IMPORTED_MODULE_20__components_studentinputform_studentinputform_component__["a" /* StudentInputFormComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_23__layouts_admin_layout_admin_layout_component__["a" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_19__school_creation_wizard_school_creation_wizard_component__["a" /* BoardDialog */],
                __WEBPACK_IMPORTED_MODULE_19__school_creation_wizard_school_creation_wizard_component__["c" /* StateDialog */],
                __WEBPACK_IMPORTED_MODULE_20__components_studentinputform_studentinputform_component__["a" /* StudentInputFormComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_profilepic_profilepic_component__["a" /* ProfilePicComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13_angular2_cookie_services_cookies_service__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_17__services_app_notification_service__["a" /* AppNotificationService */],
                __WEBPACK_IMPORTED_MODULE_16__services_app_network_service__["a" /* AppNetworkService */],
                __WEBPACK_IMPORTED_MODULE_16__services_app_network_service__["a" /* AppNetworkService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_INITIALIZER"],
                    useFactory: appInitializerFn,
                    multi: true,
                    deps: [__WEBPACK_IMPORTED_MODULE_16__services_app_network_service__["a" /* AppNetworkService */]]
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */]]
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
        redirectTo: 'role',
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
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* RouterModule */].forRoot(routes)
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






var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
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

module.exports = "<footer class=\"footer \">\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com\">\r\n                        Creative Tim\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"http://presentation.creative-tim.com\">\r\n                        About Us\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"http://blog.creative-tim.com\">\r\n                        Blog\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com/license\">\r\n                        Licenses\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <div class=\"copyright pull-right\">\r\n            &copy;\r\n            {{test | date: 'yyyy'}}, made with love by\r\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

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

module.exports = ".navbar-shadow {\r\n\t-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\r\n\t        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-white navbar-shadow navbar-absolute fixed-top\" [ngStyle]=\"adjustableWidth\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-wrapper\">\r\n          <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\r\n        </div>\r\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n           <!--  <form class=\"navbar-form\">\r\n                <div class=\"input-group no-border\">\r\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                        <i class=\"material-icons\">search</i>\r\n                        <div class=\"ripple-container\"></div>\r\n                    </button>\r\n                </div>\r\n            </form> -->\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\">\r\n                    <button *ngIf=\"router.url == '/role'\" mat-raised-button type=\"button\" class=\"btn btn-rose\" [routerLink]=\"['/role/schoolCreate/']\"><b>CREATE SCHOOL</b></button>\r\n                </li>\r\n                <!-- <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"material-icons\">notifications</i>\r\n                        <span class=\"notification\">5</span>\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n                        </p>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n                    </div>\r\n                </li> -->\r\n                <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"material-icons\">person</i>\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Account</span>\r\n                        </p>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <a class=\"dropdown-item\" href=\"\" (click)=\"logout($event)\">Logout</a>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

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
        var _this = this;
        this.element = element;
        this.router = router;
        this.apns = apns;
        this.mobile_menu_visible = 0;
        this.sidebarVisible = true;
        this.adjustableWidth = null;
        this.location = location;
        this.sidebarVisible = true;
        this.appNetworkService = apns;
        router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */] && ((val.url.indexOf("/dashboard/admin/") > -1) || (val.url.indexOf("/user-profile") > -1))) {
                _this.adjustableWidth = {
                    'width': 'calc(100% - 261px) !important',
                    'margin-left': '261px !important'
                };
            }
            else {
                _this.adjustableWidth = {
                    'width': '100%'
                };
            }
        });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_app_network_service__["a" /* AppNetworkService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profilepic/profilepic.component.css":
/***/ (function(module, exports) {

module.exports = ".profilepic-container {\r\n\twidth:100%;\r\n\tmax-width:240px;\r\n\theight:250px;\r\n\tborder: 3px solid #fff;\r\n\t-webkit-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.75);\r\n\t        box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.75);\r\n\tpadding-bottom:30px;\r\n\tposition: relative;\r\n}\r\n\r\n.profilepicdiv {\r\n\twidth: 100%;\r\n\theight: calc(100% - 10px);\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\n.name {\r\n\ttext-align: center;\r\n\tmargin-top: 10px;\r\n\twidth: 100%;\r\n\tfont-family: \"Comic Sans MS\", cursive, sans-serif;\r\n}\r\n\r\n.editRemoveButton {\r\n\tbackground-color: #000;\r\n\tborder:0;\r\n\tcolor: #fff;\r\n\topacity: 0.8; \r\n\tposition: absolute;\r\n\tbottom: 40px;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 50px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.editRemoveButton i{\r\n\tfont-size: 17px;\r\n}\r\n\r\n.editRemoveButton input {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\topacity: 0;\r\n\tcursor: pointer;\r\n\tposition: absolute;\r\n}"

/***/ }),

/***/ "./src/app/components/profilepic/profilepic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profilepic-container\">\r\n    <div class=\"profilepicdiv\" [ngStyle]=\"{'background-image': 'url(' + src + ')'}\"></div>\r\n    <button mat-button class=\"editRemoveButton\" *ngIf=\"editable && !srcSet\">\r\n        <input type=\"file\" (change)=\"showPreview($event)\">\r\n        <span><i class=\"fa fa-edit\"></i> &nbsp;&nbsp;EDIT PHOTO</span>\r\n    </button>\r\n    <button mat-button class=\"editRemoveButton\" *ngIf=\"editable && srcSet\" (click)=\"removePreview($event)\">\r\n        <i class=\"fa fa-trash-alt\"></i> &nbsp;&nbsp;REMOVE PHOTO\r\n    </button>\r\n    <div class=\"name\">\r\n        {{name}}\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/profilepic/profilepic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils__ = __webpack_require__("./src/app/Utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_notification_service__ = __webpack_require__("./src/app/services/app-notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePicComponent = (function () {
    function ProfilePicComponent(ans) {
        this.ans = ans;
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.fileObj = null;
        if (!this.src) {
            this.removePreview();
        }
        else {
            this.srcSet = true;
        }
        this.appNotificationService = ans;
    }
    ProfilePicComponent.prototype.isValidImageFile = function (fileType) {
        var ftype = fileType.split("/")[1];
        if (ftype) {
            if (!__WEBPACK_IMPORTED_MODULE_1__Utils__["a" /* Utils */].getSupportedFileInfo()[ftype]) {
                return false;
            }
            return __WEBPACK_IMPORTED_MODULE_1__Utils__["a" /* Utils */].getSupportedFileInfo()[ftype]["normalizedType"] == "image";
        }
        return false;
    };
    ProfilePicComponent.prototype.showPreview = function (event) {
        if (event.target.files) {
            var file = event.target.files[0];
            if (!__WEBPACK_IMPORTED_MODULE_1__Utils__["a" /* Utils */].isValidImageFile(file.type)) {
                this.appNotificationService.notify("Not a valid image file", "danger");
                return;
            }
            this.generateFileObject(file);
        }
    };
    ProfilePicComponent.prototype.generateFileObject = function (file) {
        var reader = new FileReader();
        var self = this;
        reader.onload = function (event) {
            self.fileObj = {
                filename: file.name,
                preview: reader.result,
                uploadedFile: file
            };
            self.src = self.fileObj.preview;
            self.srcSet = true;
            self.onUpdate.emit(file);
        };
        reader.readAsDataURL(file);
    };
    ProfilePicComponent.prototype.removePreview = function () {
        this.fileObj = null;
        this.src = "../../assets/img/user-dummy.png";
        this.srcSet = false;
    };
    ProfilePicComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProfilePicComponent.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProfilePicComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProfilePicComponent.prototype, "editable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onUpdate'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProfilePicComponent.prototype, "onUpdate", void 0);
    ProfilePicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-pic',
            template: __webpack_require__("./src/app/components/profilepic/profilepic.component.html"),
            styles: [__webpack_require__("./src/app/components/profilepic/profilepic.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_app_notification_service__["a" /* AppNotificationService */]])
    ], ProfilePicComponent);
    return ProfilePicComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\r\n        <div class=\"logo-img\">\r\n            <img src=\"/role/assets/img/angular2-logo-red.png\"/>\r\n        </div>\r\n        Creative Tim\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n  <div *ngIf=\"isMobileMenu()\">\r\n    <form class=\"navbar-form\">\r\n      <span class=\"bmd-form-group\">\r\n        <div class=\"input-group no-border\">\r\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n            <i class=\"material-icons\">search</i>\r\n            <div class=\"ripple-container\"></div>\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </form>\r\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#pablo\">\r\n                <i class=\"material-icons\">dashboard</i>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Stats</span>\r\n                </p>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"material-icons\">notifications</i>\r\n                <span class=\"notification\">5</span>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n                </p>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\r\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n            </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#pablo\">\r\n                <i class=\"material-icons\">person</i>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Account</span>\r\n                </p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n  </div>\r\n    <ul class=\"nav\">\r\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\r\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                <p>{{menuItem.title}}</p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

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
    { path: '/role', title: 'Select Role', icon: 'people', class: '' },
    { path: '/user-profile', title: 'Profile', icon: 'person', class: '' }
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

/***/ "./src/app/components/studentinput/studentinput.component.css":
/***/ (function(module, exports) {

module.exports = "/*Uploader*/\r\n.drop-zone {\r\n\tborder:3px dashed #ccc; \r\n\twidth: 100%; \r\n\theight: 100%;\r\n}\r\n.drop-zone-highlighted {\r\n\tborder:3px dashed #e91e63; \r\n\twidth: 100%; \r\n\theight: 100%;\r\n}\r\n.drop-zone-unmarked {\r\n\tborder: 0;\r\n}\r\n.drop-zone-input {\r\n\tposition:absolute;\r\n\tcursor:pointer;\r\n\tz-index:2;\r\n\tleft:0;\r\n\ttop:0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\topacity: 0;\r\n}\r\n.drop-zone-label {\r\n\tmargin-top:25%;\r\n\tcolor:grey;\r\n\tfont-style:italic;\r\n\tfont-size:20px;\r\n\tdisplay:block;\r\n}\r\n.schoolImagePreviewOff {\r\n\tdisplay: none;\r\n}\r\n.schoolImagePreview {\r\n\tdisplay:block;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tborder: 5px solid #fff;\r\n\t-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.86);\r\n\t        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.86);\r\n}\r\n.schoolFilePreview {\r\n\tdisplay:block;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tborder: 5px solid #fff;\r\n\theight: 250px;\r\n\tbackground-color: #f7f7f7;\r\n\t-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.86);\r\n\t        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.86);\r\n}\r\n.drop-zone-crosslabel {\r\n\tposition: absolute;\r\n\ttop:5px;\r\n\tleft: 20px;\r\n\tz-index:10;\r\n\tbackground-color: #000;\r\n\topacity: 0.78;\r\n\tcolor: #fff;\r\n\twidth: calc(100% - 40px);\r\n\tpadding-left: 20px;\r\n\tpadding-top: 20px;\r\n\theight: 60px;\r\n\ttext-align: left;\r\n\tfont-weight: bold;\r\n\t-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.86);\r\n\t        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.86);\r\n}\r\n.popup-option {\r\n\tcursor: pointer;\r\n\tbackground-color: #ccc;\r\n}"

/***/ }),

/***/ "./src/app/components/studentinput/studentinput.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div *ngIf=\"!inputType.value || inputType.value=='keyin'\" style=\"margin-top:10px\" class=\"col col-md-8\">Enter student and parent information</div>\r\n\r\n  <div *ngIf=\"inputType.value=='csv'\" style=\"margin-top:10px\" class=\"col col-md-8\">Upload the students data. You can download the <a href=\"https://s3.us-east-2.amazonaws.com/mgkslt-prod-public/schoolCreation/Students.xlsx.csv\" style=\"color:#007dff\" download>sample file</a> for reference.</div>\r\n\r\n  <div class=\"col col-md-4\">\r\n    <mat-button-toggle-group class=\"pull-right\" #inputType=\"matButtonToggleGroup\" value=\"keyin\">\r\n      <mat-button-toggle value=\"keyin\">\r\n        <!-- <mat-icon>format_align_left</mat-icon> -->\r\n        <i class=\"fa fa-keyboard-o\" aria-hidden=\"true\" style=\"font-size:20px;\"></i>\r\n      </mat-button-toggle>\r\n      <mat-button-toggle value=\"csv\">\r\n        <!-- <mat-icon>format_align_right</mat-icon> -->\r\n        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\" style=\"font-size:20px;\"></i>\r\n      </mat-button-toggle>\r\n    </mat-button-toggle-group>\r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"row\">\r\n  <div class=\"col col-md-12 col-lg-12 col-sm-12\" *ngIf=\"inputType.value=='csv'\">\r\n    <app-uploader type='csv' (onUpdate)=\"onFileUpload($event)\"></app-uploader>\r\n  </div>\r\n\r\n  <div *ngIf=\"inputType.value=='keyin'\" class=\"col col-md-12 col-lg-12 col-sm-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-9 col-lg-9 col-sm-9\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input [(ngModel)]=\"studentSearchText\" name=\"search\" matInput placeholder=\"Search student\" type=\"search\" [disabled]=\"searchDisabled\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col col-md-3 col-lg-3 col-sm-3\">\r\n        <button mat-raised-button type=\"button\" class=\"btn btn-rose pull-right\" (click)=\"showStudentForm($event)\">\r\n          ADD STUDENT\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n            <!-- </div>\r\n            <br>\r\n            <div *ngIf=\"inputType.value=='csv'\" class=\"row\">\r\n              <div class=\"col col-lg-12\">\r\n                  <div [ngClass]=\"{'drop-zone': !isActive && !isPreviewActive, 'drop-zone-highlighted': isActive && !isPreviewActive, 'text-center': true , 'drop-zone-unmarked': isPreviewActive}\" (dragenter)=\"dragStart($event)\" (dragover)=\"dragOver($event)\" (dragleave)=\"dragEnd($event)\" (drop)=\"onDrop($event)\" style=\"height: 250px\">\r\n                    <div [ngClass]=\"{'schoolImagePreviewOff': !isPreviewActive, 'drop-zone-crosslabel': isPreviewActive}\">\r\n                      <span style=\"cursor:pointer\" (click)=\"clearPreview()\">CLEAR</span>\r\n                    </div>\r\n                    <span [ngClass]=\"{'schoolImagePreviewOff': isPreviewActive, 'drop-zone-label': !isPreviewActive }\" style=\"margin-top:80px\">\r\n                      Drag & Drop Student Data CSV file here<br>OR<br>\r\n                      <div mat-raised-button class=\"btn btn-rose text-center\" style=\"font-weight: normal\">\r\n                        Upload File<input type=\"file\" class=\"drop-zone-input\" (change)=\"changeListener($event)\"/>\r\n                      </div>\r\n                    </span>\r\n                    <div [ngClass]=\"{'schoolFilePreview': isPreviewActive, 'schoolImagePreviewOff': !isPreviewActive}\">\r\n                      <span class=\"drop-zone-label\" style=\"margin-top:130px;color:#e91e63\"><i class=\"fa fa-file-excel-o\" style=\"font-size:20px;\"></i>&nbsp;&nbsp;{{schoolImageName}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"!inputType.value || inputType.value=='keyin'\" class=\"row\">\r\n              <div class=\"col col-lg-12\">\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-rose\" (click)=\"showStudentInputComponent($event)\">ADD STUDENT</button>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <button mat-raised-button type=\"button\" class=\"btn btn-rose pull-right\" (click)=\"next($event, school.stage + 1)\">NEXT</button>\r\n            <button mat-raised-button type=\"button\" class=\"btn btn-white pull-right\" (click)=\"abort($event)\" style=\"margin-right:10px;\">ABORT</button>\r\n            <div class=\"clearfix\"></div> -->\r\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/components/studentinput/studentinput.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__studentinputform_studentinputform_component__ = __webpack_require__("./src/app/components/studentinputform/studentinputform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_School__ = __webpack_require__("./src/app/models/School.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentInputComponent = (function () {
    function StudentInputComponent(dialog) {
        this.dialog = dialog;
        this.studentInputFormOpen = false;
        this.searchDisabled = true;
    }
    StudentInputComponent.prototype.ngOnInit = function () {
    };
    StudentInputComponent.prototype.onFileUpload = function (event) {
        console.log(event);
    };
    StudentInputComponent.prototype.showStudentForm = function (event) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__studentinputform_studentinputform_component__["a" /* StudentInputFormComponent */], {
            width: "75vw",
            height: "75vh",
            disableClose: true,
            data: { student: null, school: this.school }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_School__["a" /* School */])
    ], StudentInputComponent.prototype, "school", void 0);
    StudentInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-student-input',
            template: __webpack_require__("./src/app/components/studentinput/studentinput.component.html"),
            styles: [__webpack_require__("./src/app/components/studentinput/studentinput.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */]])
    ], StudentInputComponent);
    return StudentInputComponent;
}());



/***/ }),

/***/ "./src/app/components/studentinputform/studentinputform.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/studentinputform/studentinputform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col col-md-3 col-sm-3 col-lg-3\">\r\n        <app-profile-pic [name]=\"getFirstName(student.name)\" [editable]=\"true\"></app-profile-pic>     \r\n    </div>\r\n    <div class=\"col col-md-9 col-sm-9 col-lg-9\">\r\n\r\n        <!-- STUDENT SECTION -->\r\n        <div class=\"row\">\r\n            <div class=\"col col-md-12 col-lg-12 col-sm-12\">\r\n                <div >\r\n                    <h3>\r\n                        Student Information\r\n                    </h3>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col col-md-12 col-lg-12 col-sm-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-9\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput placeholder=\"Student Name\" [(ngModel)]=\"student.name\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput placeholder=\"Admission Code\" [(ngModel)]=\"student.admissionCode\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <mat-select placeholder=\"Standard\" [(ngModel)]=\"student.clazz.standard\">\r\n                                        <mat-option *ngFor=\"let class of school.classList\" [value]=\"class.standard\">\r\n                                            {{class.standard}}\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <mat-select placeholder=\"Section\" [(ngModel)]=\"student.clazz.section\">\r\n                                        <mat-option *ngFor=\"let obj of classSectionObject[student.clazz.standard]\" [value]=\"obj.section\">\r\n                                            {{obj.section}}\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <mat-select placeholder=\"Gender\" [(ngModel)]=\"student.gender\" name=\"gender\">\r\n                                        <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.value\">\r\n                                            {{gender.text}}\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date of Birth\" [(ngModel)]=\"student.dob\">\r\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                    <mat-datepicker #picker></mat-datepicker>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- PARENT SECTION -->\r\n        <div class=\"row\">\r\n            <div class=\"col col-md-12 col-lg-12 col-sm-12\">\r\n                <div >\r\n                    <h3>\r\n                        Parent Information\r\n                    </h3>\r\n                </div>\r\n                <div class=\"row\" *ngFor=\"let parent of student.parentList; let i = index\" [attr.data-index]=\"i\">\r\n                    <div class=\"col col-md-12 col-lg-12 col-sm-12\">\r\n                        <h4>Parent {{i + 1}}</h4>\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Parent Name\" [(ngModel)]=\"parent.user.name\">\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Email Id\" type=\"email\" [(ngModel)]=\"parent.user.email\">\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Phone\" type=\"phone\" [(ngModel)]=\"parent.user.phone\">\r\n                        </mat-form-field>\r\n                        <button *ngIf=\"i > 0\" mat-raised-button type=\"button\" class=\"btn btn-white pull-right\" (click)=\"removeParent(i)\">\r\n                            REMOVE PARENT\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <button mat-raised-button type=\"button\" class=\"btn btn-rose pull-left\" (click)=\"addParent($event)\">\r\n                    ADD PARENT\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <button mat-raised-button type=\"button\" class=\"btn btn-rose pull-right\" (click)=\"done($event)\">\r\n            DONE\r\n        </button>\r\n        <button mat-raised-button type=\"button\" class=\"btn btn-white pull-right\" style=\"margin-right:20px\" (click)=\"cancel($event)\">\r\n            CANCEL\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/studentinputform/studentinputform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentInputFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Parent__ = __webpack_require__("./src/app/models/Parent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_User__ = __webpack_require__("./src/app/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Class__ = __webpack_require__("./src/app/models/Class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_student__ = __webpack_require__("./src/app/models/student.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Utils__ = __webpack_require__("./src/app/Utils.ts");
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







var StudentInputFormComponent = (function () {
    function StudentInputFormComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.classSectionObject = {};
        this.genders = __WEBPACK_IMPORTED_MODULE_6__Utils__["a" /* Utils */].getGenders();
        this.school = data.school;
        if (data.student) {
            this.student = data.student;
        }
        else {
            this.student = new __WEBPACK_IMPORTED_MODULE_5__models_student__["a" /* Student */]();
            var defaultParent = new __WEBPACK_IMPORTED_MODULE_2__models_Parent__["a" /* Parent */]();
            var user = new __WEBPACK_IMPORTED_MODULE_3__models_User__["a" /* User */]();
            defaultParent.user = user;
            var parentList = [defaultParent];
            var clazz = new __WEBPACK_IMPORTED_MODULE_4__models_Class__["a" /* Class */]();
            this.student.clazz = clazz;
            this.student.parentList = parentList;
        }
        for (var index in this.school.classList) {
            var cl = this.school.classList[index];
            var sectionArray = this.classSectionObject[cl.standard];
            if (!sectionArray) {
                sectionArray = [];
                this.classSectionObject[cl.standard] = sectionArray;
            }
            var obj = { "section": cl.section, "id": cl.id };
            sectionArray.push(obj);
        }
    }
    StudentInputFormComponent.prototype.ngOnInit = function () {
    };
    StudentInputFormComponent.prototype.cancel = function (event) {
        this.dialogRef.close();
    };
    StudentInputFormComponent.prototype.addParent = function (event) {
        var parent = new __WEBPACK_IMPORTED_MODULE_2__models_Parent__["a" /* Parent */]();
        var user = new __WEBPACK_IMPORTED_MODULE_3__models_User__["a" /* User */]();
        parent.user = user;
        this.student.parentList.push(parent);
    };
    StudentInputFormComponent.prototype.removeParent = function (index) {
        if (index > 0) {
            this.student.parentList.splice(index, 1);
        }
    };
    StudentInputFormComponent.prototype.getFirstName = function (name) {
        if (name)
            return name.split(" ")[0];
        else
            return "";
    };
    StudentInputFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-student-input-form',
            template: __webpack_require__("./src/app/components/studentinputform/studentinputform.component.html"),
            styles: [__webpack_require__("./src/app/components/studentinputform/studentinputform.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], StudentInputFormComponent);
    return StudentInputFormComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div *ngIf=\"isSideBarActive\" class=\"sidebar\" data-color=\"rose\" data-background-color=\"white\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(/role/assets/img/sidebar-4.jpg)\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar *ngIf=\"isNavBarActive\"></app-navbar>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

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
        var _this = this;
        this.location = location;
        this.router = router;
        this.apns = apns;
        this.yScrollStack = [];
        this.isNavBarActive = true;
        this.isSideBarActive = false;
        this.appNetworkService = apns;
        if (!this.appNetworkService.verifyIfLoggedIn() && this.router.url === '/login') {
            this.isNavBarActive = false;
        }
        router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */] && ((val.url.indexOf("/dashboard/admin/") > -1) || (val.url.indexOf("/user-profile") > -1))) {
                _this.isSideBarActive = true;
            }
            else {
                _this.isSideBarActive = false;
            }
        });
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
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* NavigationStart */]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_app_network_service__["a" /* AppNetworkService */]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/models/Class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Class; });
var Class = (function () {
    function Class() {
    }
    return Class;
}());



/***/ }),

/***/ "./src/app/models/Parent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parent; });
var Parent = (function () {
    function Parent() {
    }
    return Parent;
}());



/***/ }),

/***/ "./src/app/models/School.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return School; });
var School = (function () {
    function School() {
        this.stage = 0;
    }
    return School;
}());



/***/ }),

/***/ "./src/app/models/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils__ = __webpack_require__("./src/app/Utils.ts");

var User = (function () {
    function User() {
    }
    User.prototype.validatePhone = function () {
        return __WEBPACK_IMPORTED_MODULE_0__Utils__["a" /* Utils */].validatePhone(this.phone);
    };
    User.prototype.validatePassword = function () {
        return __WEBPACK_IMPORTED_MODULE_0__Utils__["a" /* Utils */].validatePassword(this.password);
    };
    User.prototype.validateEmail = function () {
        return __WEBPACK_IMPORTED_MODULE_0__Utils__["a" /* Utils */].validateEmail(this.email);
    };
    return User;
}());



/***/ }),

/***/ "./src/app/models/student.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Student; });
var Student = (function () {
    function Student() {
    }
    return Student;
}());



/***/ }),

/***/ "./src/app/school-creation-wizard/board-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>List of Boards</h2>\r\n<div *ngIf=\"isLoading\">\r\n\tLoading...\r\n</div>\r\n<div *ngIf=\"!isLoading\">\r\n\t<div *ngIf = \"boardListCallFailed\">\r\n\t\tCall failed. try again\r\n\t</div>\r\n\t<div *ngIf = \"!boardListCallFailed\">\r\n\t\t<mat-form-field mat-dialog-title>\r\n\t\t\t<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\r\n\t\t</mat-form-field>\r\n\t\t<mat-dialog-content style=\"height: calc(60vh - 185px);\">\r\n\t\t\t<mat-table #table [dataSource]=\"dataSource\">\r\n\t\t\t    <ng-container matColumnDef=\"name\">\r\n\t\t\t      <mat-header-cell *matHeaderCellDef style=\"cursor: pointer;\"> Name </mat-header-cell>\r\n\t\t\t      <mat-cell style=\"cursor: pointer;\" *matCellDef=\"let element\" [ngClass]=\"popup-option\" (click)=\"selectBoard(element)\"> {{element.name}} </mat-cell>\r\n\t\t\t    </ng-container>\r\n\t\t\t    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\t  \t\t\t<mat-row style=\"cursor: pointer;\" *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"popup-option\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t</mat-dialog-content>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/school-creation-wizard/school-creation-wizard.component.css":
/***/ (function(module, exports) {

module.exports = "/*Step Progress*/\r\n.step-progress {\r\n\tlist-style-type: none;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\toverflow: hidden;\r\n\tpadding-bottom:10px;\r\n}\r\n.step-progress li {\r\n\ttext-decoration: none;\r\n\tdisplay:inline-block;\r\n\tborder-radius: 50%;\r\n\tpadding-top:30px;\r\n\twidth:80px;\r\n\theight:80px;\r\n\tcursor: default;\r\n}\r\n.step-progress li hr {\r\n\tmargin-top:40px;\r\n\tbackground-color: #444;\r\n\theight: 1px;\r\n}\r\n.step-progress-complete{\r\n\t-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\r\n\t        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\r\n\tfont-weight: bold;\r\n\tbackground-color: #e91e63;\r\n\tcolor: #fff;\r\n\ttext-align: center;\r\n}\r\n.step-progress-active{\r\n\t-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\r\n\t        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\r\n\tfont-weight: bold;\r\n\tbackground-color: #fff;\r\n\tcolor: #555;\r\n\tborder:2px solid #e91e63;\r\n\ttext-align: center;\r\n\t\r\n}\r\n.step-progress-incomplete{\r\n\t-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\r\n\t        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\r\n\tfont-weight: bold;\r\n\tbackground-color: #fff;\r\n\tcolor: #555;\r\n\ttext-align: center;\r\n\t\r\n}"

/***/ }),

/***/ "./src/app/school-creation-wizard/school-creation-wizard.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.isDataAvailable\" class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col col-lg-1\"></div>\r\n      <div class=\"col col-lg-10 text-center\">\r\n        <ul class=\"step-progress step-progress-rose text-center\">\r\n          <span *ngFor=\"let stg of [0,1,2,3,4]\">\r\n            <li [ngClass]=\"{'step-progress-active' : stg == school.stage, 'step-progress-complete': stg < school.stage, 'step-progress-incomplete' : stg > school.stage}\">\r\n              {{stg + 1}}\r\n            </li>\r\n            <li *ngIf=\"stg < 4\">\r\n              <hr>\r\n            </li>\r\n          </span>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col col-lg-1\"></div>\r\n\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col col-lg-1\"></div>\r\n      <div class=\"col col-lg-10\">\r\n\r\n        <!-- STAGE 1 -->\r\n        <div class=\"card\" *ngIf=\"school.stage == 0\">\r\n          <div class=\"card-header card-header-rose\">\r\n            <h4 class=\"card-title\">Basic Information</h4>\r\n            <p class=\"card-category\">Tell us about your school</p>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <form>\r\n              <div class=\"row\">\r\n                <div class=\"col col-lg-6\">\r\n                  <div [ngClass]=\"{'drop-zone': !isActive && !isPreviewActive, 'drop-zone-highlighted': isActive && !isPreviewActive, 'text-center': true , 'drop-zone-unmarked': isPreviewActive}\" (dragenter)=\"dragStart($event)\" (dragover)=\"dragOver($event)\" (dragleave)=\"dragEnd($event)\" (drop)=\"onDrop($event)\">\r\n                    <div [ngClass]=\"{'schoolImagePreviewOff': !isPreviewActive, 'drop-zone-crosslabel': isPreviewActive}\">\r\n                      <span style=\"cursor:pointer\" (click)=\"clearPreview()\">CLEAR</span>\r\n                    </div>\r\n                    <span [ngClass]=\"{'schoolImagePreviewOff': isPreviewActive, 'drop-zone-label': !isPreviewActive }\">\r\n                      Drag & Drop you School's Display Picture<br>OR<br>\r\n                      <div mat-raised-button class=\"btn btn-rose text-center\" style=\"font-weight: normal\">\r\n                        Upload Image<input type=\"file\" class=\"drop-zone-input\" (change)=\"changeListener($event)\"/>\r\n                      </div>\r\n                    </span>\r\n                    <img [ngClass]=\"{'schoolImagePreview': isPreviewActive, 'schoolImagePreviewOff': !isPreviewActive}\" [src]=\"schoolImagePreview\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col col-lg-6\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input [(ngModel)]=\"school.name\" name=\"name\" matInput placeholder=\"School Name\" type=\"text\" required>\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"example-full-width\" (click)=\"openBoardDialog()\">\r\n                    <input disabled=\"true\" [value]=\"school.board ? school.board.name : ''\" name=\"board\" matInput placeholder=\"Board\" type=\"text\">\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <textarea [(ngModel)]=\"school.address\" name=\"address\" matInput placeholder=\"Address\" required></textarea>\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input [(ngModel)]=\"school.city\" name=\"city\" matInput placeholder=\"City\" type=\"text\" required>\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"example-full-width\" (click)=\"openStateDialog()\">\r\n                    <input disabled=\"true\" [value]=\"school.state ? school.state.name : ''\" name=\"state\" matInput placeholder=\"State\" type=\"text\">\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input [(ngModel)]=\"school.pincode \" matInput  name=\"pincode\" placeholder=\"Pincode\" type=\"text\" required>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <button mat-raised-button type=\"button\" class=\"btn btn-rose pull-right\" (click)=\"next($event, school.stage + 1)\">NEXT</button>\r\n              <button mat-raised-button type=\"button\" class=\"btn btn-white pull-right\" (click)=\"abort($event)\" style=\"margin-right:10px;\">ABORT</button>\r\n              <div class=\"clearfix\"></div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- STAGE 2 -->\r\n        <div class=\"card\" *ngIf=\"school.stage == 1\">\r\n          <div class=\"card-header card-header-rose\">\r\n            <h4 class=\"card-title\">Class Information</h4>\r\n            <p class=\"card-category\">How many classes does {{school.name}} have?</p>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <form>\r\n              <div *ngFor=\"let cs of classStructure\">\r\n                <h3 class=\"card-title\">{{cs.levelName}}</h3>\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <thead class=\"text-rose\">\r\n                      <th>\r\n                        Select\r\n                      </th>\r\n                      <th>\r\n                        Standard\r\n                      </th>\r\n                      <th>\r\n                        Sections\r\n                      </th>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let st of cs.structure\">\r\n                        <td>\r\n                          <mat-checkbox [checked]=\"st.selected\" [(ngModel)]=\"st.selected\" name=\"{{st.standard}}-selected\"></mat-checkbox>\r\n                        </td>\r\n                        <td>\r\n                          {{st.standard}}\r\n                        </td>\r\n                        <td>\r\n                          <mat-select placeholder=\"Number of sections\" [(ngModel)]=\"st.sectionCount\" name=\"{{st.standard}}-sectioncount\">\r\n                            <mat-option *ngFor=\"let sectionCount of sectionCountArray\" [value]=\"sectionCount\">\r\n                              {{ sectionCount }}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <button mat-raised-button type=\"button\" class=\"btn btn-rose pull-right\" (click)=\"next($event, school.stage + 1)\">NEXT</button>\r\n              <button mat-raised-button type=\"button\" class=\"btn btn-white pull-right\" (click)=\"abort($event)\" style=\"margin-right:10px;\">ABORT</button>\r\n              <div class=\"clearfix\"></div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- STAGE 3 -->\r\n        <div class=\"card\" *ngIf=\"school.stage == 2\">\r\n          <div class=\"card-header card-header-rose\">\r\n            <h4 class=\"card-title\">Student Information</h4>\r\n            <p class=\"card-category\">Enter information about students studying at {{school.name}}</p>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <app-student-input [school]=\"school\" (onChange)='onStudentInput($event)'></app-student-input>\r\n            <br>\r\n            <button mat-raised-button type=\"button\" class=\"btn btn-rose pull-right\" (click)=\"next($event, school.stage + 1)\">NEXT</button>\r\n            <button mat-raised-button type=\"button\" class=\"btn btn-white pull-right\" (click)=\"abort($event)\" style=\"margin-right:10px;\">ABORT</button>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- STAGE 4 -->\r\n        <div class=\"card\" *ngIf=\"school.stage == 3\">\r\n          <div class=\"card-header card-header-rose\">\r\n            <h4 class=\"card-title\">Teacher Information</h4>\r\n            <p class=\"card-category\">Upload the teachers data for {{school.name}}</p>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div>You can download the <a href=\"https://s3.us-east-2.amazonaws.com/mgkslt-prod-public/schoolCreation/Teachers.xlsx.csv\" style=\"color:#007dff\" download>sample file</a> for reference.</div>\r\n            <form>\r\n              <div class=\"row\">\r\n                <div class=\"col col-lg-12\">\r\n                  <div [ngClass]=\"{'drop-zone': !isActive && !isPreviewActive, 'drop-zone-highlighted': isActive && !isPreviewActive, 'text-center': true , 'drop-zone-unmarked': isPreviewActive}\" (dragenter)=\"dragStart($event)\" (dragover)=\"dragOver($event)\" (dragleave)=\"dragEnd($event)\" (drop)=\"onDrop($event)\" style=\"height: 250px\">\r\n                    <div [ngClass]=\"{'schoolImagePreviewOff': !isPreviewActive, 'drop-zone-crosslabel': isPreviewActive}\">\r\n                      <span style=\"cursor:pointer\" (click)=\"clearPreview()\">CLEAR</span>\r\n                    </div>\r\n                    <span [ngClass]=\"{'schoolImagePreviewOff': isPreviewActive, 'drop-zone-label': !isPreviewActive }\" style=\"margin-top:80px\">\r\n                      Drag & Drop Teacher Data CSV file here<br>OR<br>\r\n                      <div mat-raised-button class=\"btn btn-rose text-center\" style=\"font-weight: normal\">\r\n                        Upload File<input type=\"file\" class=\"drop-zone-input\" (change)=\"changeListener($event)\"/>\r\n                      </div>\r\n                    </span>\r\n                    <div [ngClass]=\"{'schoolFilePreview': isPreviewActive, 'schoolImagePreviewOff': !isPreviewActive}\">\r\n                      <span class=\"drop-zone-label\" style=\"margin-top:130px;color:#e91e63\"><i class=\"fa fa-file-excel-o\" style=\"font-size:20px;\"></i>&nbsp;&nbsp;{{schoolImageName}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <br>\r\n              <button mat-raised-button type=\"button\" class=\"btn btn-rose pull-right\" (click)=\"next($event, school.stage + 1)\">NEXT</button>\r\n              <button mat-raised-button type=\"button\" class=\"btn btn-white pull-right\" (click)=\"abort($event)\" style=\"margin-right:10px;\">ABORT</button>\r\n              <div class=\"clearfix\"></div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- STAGE 5 -->\r\n        <div class=\"card\" *ngIf=\"school.stage == 4\">\r\n          <div class=\"card-header card-header-rose\">\r\n            <h4 class=\"card-title\">Subject Information</h4>\r\n            <p class=\"card-category\">Upload the subject data for {{school.name}}</p>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div>You can download the <a href=\"https://s3.us-east-2.amazonaws.com/mgkslt-prod-public/schoolCreation/Teachers.xlsx+-+Sheet2.csv\" style=\"color:#007dff\" download>sample file</a> for reference.</div>\r\n            <br>\r\n            <form>\r\n              <div class=\"row\">\r\n                <div class=\"col col-lg-12\">\r\n                  <div [ngClass]=\"{'drop-zone': !isActive && !isPreviewActive, 'drop-zone-highlighted': isActive && !isPreviewActive, 'text-center': true , 'drop-zone-unmarked': isPreviewActive}\" (dragenter)=\"dragStart($event)\" (dragover)=\"dragOver($event)\" (dragleave)=\"dragEnd($event)\" (drop)=\"onDrop($event)\" style=\"height: 250px\">\r\n                    <div [ngClass]=\"{'schoolImagePreviewOff': !isPreviewActive, 'drop-zone-crosslabel': isPreviewActive}\">\r\n                      <span style=\"cursor:pointer\" (click)=\"clearPreview()\">CLEAR</span>\r\n                    </div>\r\n                    <span [ngClass]=\"{'schoolImagePreviewOff': isPreviewActive, 'drop-zone-label': !isPreviewActive }\" style=\"margin-top:80px\">\r\n                      Drag & Drop Subject Data CSV file here<br>OR<br>\r\n                      <div mat-raised-button class=\"btn btn-rose text-center\" style=\"font-weight: normal\">\r\n                        Upload File<input type=\"file\" class=\"drop-zone-input\" (change)=\"changeListener($event)\"/>\r\n                      </div>\r\n                    </span>\r\n                    <div [ngClass]=\"{'schoolFilePreview': isPreviewActive, 'schoolImagePreviewOff': !isPreviewActive}\">\r\n                      <span class=\"drop-zone-label\" style=\"margin-top:130px;color:#e91e63\"><i class=\"fa fa-file-excel-o\" style=\"font-size:20px;\"></i>&nbsp;&nbsp;{{schoolImageName}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <br>\r\n              <button mat-raised-button type=\"button\" class=\"btn btn-rose pull-right\" (click)=\"next($event, school.stage + 1)\">NEXT</button>\r\n              <button mat-raised-button type=\"button\" class=\"btn btn-white pull-right\" (click)=\"abort($event)\" style=\"margin-right:10px;\">ABORT</button>\r\n              <div class=\"clearfix\"></div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n      <div class=\"col col-lg-1\"></div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/school-creation-wizard/school-creation-wizard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SchoolCreationWizardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StateDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_network_service__ = __webpack_require__("./src/app/services/app-network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_notification_service__ = __webpack_require__("./src/app/services/app-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils__ = __webpack_require__("./src/app/Utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_School__ = __webpack_require__("./src/app/models/School.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_studentinput_studentinput_component__ = __webpack_require__("./src/app/components/studentinput/studentinput.component.ts");
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








var SchoolCreationWizardComponent = (function () {
    function SchoolCreationWizardComponent(apns, ans, dialog, rtr, route, studentInputComponent) {
        this.apns = apns;
        this.ans = ans;
        this.dialog = dialog;
        this.rtr = rtr;
        this.route = route;
        this.studentInputComponent = studentInputComponent;
        this.isActive = false;
        this.isPreviewActive = false;
        this.school = new __WEBPACK_IMPORTED_MODULE_6__models_School__["a" /* School */]();
        this.maxSectionCount = 20;
        this.minSectionCount = 1;
        this.sectionCountArray = [];
        this.isDataAvailable = false;
        this.appNetworkService = apns;
        this.appNotificationService = ans;
        this.router = rtr;
        for (var index = this.minSectionCount; index <= this.maxSectionCount; index++) {
            this.sectionCountArray.push(index);
        }
        this.classStructure = [{
                "levelName": "Preschool",
                "structure": [
                    {
                        "standard": "Pre-Nursery",
                        "selected": false,
                        "sectionCount": 1
                    },
                    {
                        "standard": "Nursery",
                        "selected": false,
                        "sectionCount": 1
                    },
                    {
                        "standard": "U.K.G",
                        "selected": false,
                        "sectionCount": 1
                    },
                    {
                        "standard": "L.K.G",
                        "selected": false,
                        "sectionCount": 1
                    }
                ]
            }];
        this.classStructure.push({
            "levelName": "Middle School",
            "structure": [
                {
                    "standard": "1st",
                    "selected": false,
                    "sectionCount": 1
                },
                {
                    "standard": "2nd",
                    "selected": false,
                    "sectionCount": 1
                },
                {
                    "standard": "3rd",
                    "selected": false,
                    "sectionCount": 1
                }
            ]
        });
        for (var index = 4; index <= 5; index++) {
            this.classStructure[1].structure.push({
                "standard": index + "th",
                "selected": false,
                "sectionCount": 1
            });
        }
        this.classStructure.push({
            "levelName": "High School",
            "structure": []
        });
        for (var index = 6; index <= 12; index++) {
            this.classStructure[2].structure.push({
                "standard": index + "th",
                "selected": false,
                "sectionCount": 1
            });
        }
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
    SchoolCreationWizardComponent.prototype.abort = function (event) {
        var button = event.target;
        var originalTargetHtml = button.innerHTML;
        __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].markBusy(button);
        this.appNetworkService.deleteCookie("roleauth");
        this.router.navigateByUrl("/role");
        __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].markActive(button, originalTargetHtml);
    };
    SchoolCreationWizardComponent.prototype.next = function (event, nextStage) {
        var _this = this;
        var button = event.target;
        var originalTargetHtml = button.innerHTML;
        __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].markBusy(button);
        switch (nextStage) {
            case 1:
                this.networkStage1(event.target, function (success) {
                    if (success) {
                        _this.router.navigateByUrl("/role/schoolCreate/" + _this.school.id);
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].markActive(button, originalTargetHtml);
                    }
                });
                break;
            case 2:
                this.networkStage2(event.target, function (success) {
                    if (success) {
                        _this.ngOnInit();
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].markActive(button, originalTargetHtml);
                    }
                });
                break;
            case 3:
                this.networkStage3(event.target, function (success) {
                    if (success) {
                        _this.ngOnInit();
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].markActive(button, originalTargetHtml);
                    }
                });
                break;
            case 4:
                this.networkStage4(event.target, function (success) {
                    if (success) {
                        _this.ngOnInit();
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].markActive(button, originalTargetHtml);
                    }
                });
                break;
            case 5:
                this.networkStage5(event.target, function (success) {
                    if (success) {
                        _this.router.navigateByUrl("/role");
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].markActive(button, originalTargetHtml);
                    }
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
        if (this.uploadedFile && !__WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].checkFileExtention(this.uploadedFile.name, "jpg") && !__WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].checkFileExtention(this.uploadedFile.name, "jpeg") && !__WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].checkFileExtention(this.uploadedFile.name, "png")) {
            this.appNotificationService.notify("Please upload a jpg, jpeg or png image file", "danger");
            callback(false);
            return;
        }
        var schoolObject = {
            name: this.school.name,
            address: this.school.address,
            city: this.school.city,
            pincode: this.school.pincode,
            boardId: this.school.board.id,
            stateId: this.school.state.id,
            file: this.uploadedFile
        };
        this.appNetworkService.saveSchoolDetail(schoolObject)
            .then(function (d) {
            var data = d.json();
            _this.school.id = data.map.schoolId;
            _this.adminId = data.map.adminId;
            callback(true);
        })
            .catch(function (e) {
            if (e.status >= 500) {
                _this.appNotificationService.notifyGenericError();
            }
            else if (e.status == 400) {
                _this.appNotificationService.notify("Something is wrong with the input. Please check.", "danger");
            }
            else if (e.status == 401) {
                _this.appNetworkService.deleteAllCookies();
                window.location.reload();
            }
            callback(false);
        });
    };
    SchoolCreationWizardComponent.prototype.networkStage2 = function (target, callback) {
        var _this = this;
        var reqBody = [];
        for (var index in this.classStructure) {
            var cs = this.classStructure[index];
            for (var subindex in cs.structure) {
                var st = cs.structure[subindex];
                if (st.selected) {
                    reqBody.push({
                        "standard": st.standard,
                        "sectionCount": st.sectionCount
                    });
                }
            }
        }
        if (reqBody.length == 0) {
            this.appNotificationService.notify("You must select atleast 1 class", "danger");
            callback(false);
        }
        else {
            this.appNetworkService.saveClassDetail(reqBody, this.school.id)
                .then(function (d) {
                callback(true);
            })
                .catch(function (e) {
                if (e.status >= 500) {
                    _this.appNotificationService.notifyGenericError();
                }
                else if (e.status == 400) {
                    _this.appNotificationService.notify("Something is wrong with the input. Please check.", "danger");
                }
                else if (e.status == 401) {
                    _this.appNetworkService.deleteAllCookies();
                    window.location.reload();
                }
                callback(false);
            });
        }
    };
    SchoolCreationWizardComponent.prototype.networkStage3 = function (target, callback) {
        var _this = this;
        if (this.uploadedFile == null || !__WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].checkFileExtention(this.uploadedFile.name, "csv")) {
            this.appNotificationService.notify("Please upload the student data CSV file", "danger");
            callback(false);
        }
        else {
            this.appNetworkService.uploadStudentFile(this.uploadedFile, this.school.id)
                .then(function (d) {
                callback(true);
            })
                .catch(function (e) {
                if (e.status >= 500) {
                    _this.appNotificationService.notifyGenericError();
                }
                else if (e.status == 400) {
                    var error = JSON.parse(e._body).map.error;
                    _this.appNotificationService.notify(error, "danger");
                }
                else if (e.status == 401) {
                    _this.appNetworkService.deleteAllCookies();
                    window.location.reload();
                }
                callback(false);
            });
        }
    };
    SchoolCreationWizardComponent.prototype.networkStage4 = function (target, callback) {
        var _this = this;
        if (this.uploadedFile == null || !__WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].checkFileExtention(this.uploadedFile.name, "csv")) {
            this.appNotificationService.notify("Please upload the teacher data CSV file", "danger");
            callback(false);
        }
        else {
            this.appNetworkService.teacherFileUpload(this.uploadedFile, this.school.id)
                .then(function (d) {
                callback(true);
            })
                .catch(function (e) {
                if (e.status >= 500) {
                    _this.appNotificationService.notifyGenericError();
                }
                else if (e.status == 400) {
                    var error = JSON.parse(e._body).map.error;
                    _this.appNotificationService.notify(error, "danger");
                }
                else if (e.status == 401) {
                    _this.appNetworkService.deleteAllCookies();
                    window.location.reload();
                }
                callback(false);
            });
        }
    };
    SchoolCreationWizardComponent.prototype.networkStage5 = function (target, callback) {
        var _this = this;
        if (this.uploadedFile == null || !__WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].checkFileExtention(this.uploadedFile.name, "csv")) {
            this.appNotificationService.notify("Please upload the subject data CSV file", "danger");
            callback(false);
        }
        else {
            this.appNetworkService.studentTeacherMappingFileUpload(this.uploadedFile, this.school.id)
                .then(function (d) {
                _this.appNotificationService.notify("Congratulations! Your school has been successfully created", "info");
                callback(true);
            })
                .catch(function (e) {
                if (e.status >= 500) {
                    _this.appNotificationService.notifyGenericError();
                }
                else if (e.status == 400) {
                    var error = JSON.parse(e._body).map.error;
                    _this.appNotificationService.notify(error, "danger");
                }
                else if (e.status == 401) {
                    _this.appNetworkService.deleteAllCookies();
                    window.location.reload();
                }
                callback(false);
            });
        }
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
        switch (this.school.stage) {
            case 0:
                this.showImagePreview(event.dataTransfer.files[0]);
                break;
            case 2:
            case 3:
            case 4:
                this.showFileInformation(event.dataTransfer.files[0]);
                break;
        }
    };
    SchoolCreationWizardComponent.prototype.changeListener = function (event) {
        switch (this.school.stage) {
            case 0:
                this.showImagePreview(event.target.files[0]);
                break;
            case 2:
            case 3:
            case 4:
                this.showFileInformation(event.target.files[0]);
                break;
        }
    };
    SchoolCreationWizardComponent.prototype.showImagePreview = function (file) {
        var reader = new FileReader();
        var self = this;
        reader.onload = function (event) {
            self.schoolImageName = file.name;
            self.schoolImagePreview = reader.result;
            self.uploadedFile = file;
            self.isPreviewActive = true;
        };
        reader.readAsDataURL(file);
    };
    SchoolCreationWizardComponent.prototype.showFileInformation = function (file) {
        this.schoolImageName = file.name;
        this.uploadedFile = file;
        this.isPreviewActive = true;
    };
    SchoolCreationWizardComponent.prototype.clearPreview = function () {
        this.schoolImagePreview = null;
        this.isPreviewActive = false;
        this.schoolImageName = null;
        this.isActive = false;
        this.uploadedFile = null;
    };
    SchoolCreationWizardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDataAvailable = false;
        this.clearPreview();
        if (this.router.url !== "/role/schoolCreate") {
            if (!this.school.id) {
                this.route.params.subscribe(function (params) {
                    _this.school.id = params['id'];
                });
            }
            this.appNetworkService.getSchoolForAdmin(this.school.id)
                .then(function (d) {
                var data = d.json();
                _this.school.id = data.id;
                _this.school.name = data.name;
                _this.school.stage = data.stage;
                _this.adminId = data.currentUserAdminId;
                _this.school.classList = data.classList;
                if (!_this.appNetworkService.getCookie("roleauth")) {
                    _this.appNetworkService.getRoleAuthKey("admin", _this.adminId, _this.school.id)
                        .then(function (dt) {
                        if (!dt) {
                            _this.appNotificationService.notifyGenericError();
                            window.location.reload();
                        }
                        else {
                            _this.isDataAvailable = true;
                        }
                    })
                        .catch(function (ex) {
                        if (ex.status >= 500) {
                            _this.appNotificationService.notifyGenericError();
                        }
                        else if (ex.status == 400) {
                            _this.appNotificationService.notify("Something is wrong with the input. Please check.", "danger");
                        }
                        else if (ex.status >= 401) {
                            _this.appNetworkService.deleteAllCookies();
                            window.location.reload();
                        }
                    });
                }
                else {
                    _this.isDataAvailable = true;
                }
            })
                .catch(function (e) {
                if (e.status >= 500) {
                    _this.appNotificationService.notifyGenericError();
                }
                else if (e.status == 400) {
                    _this.appNotificationService.notify("Something is wrong with the input. Please check.", "danger");
                }
                else if (e.status >= 401) {
                    _this.appNetworkService.deleteAllCookies();
                    window.location.reload();
                }
            });
        }
        else {
            this.isDataAvailable = true;
        }
    };
    SchoolCreationWizardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-school-creation-wizard',
            template: __webpack_require__("./src/app/school-creation-wizard/school-creation-wizard.component.html"),
            styles: [__webpack_require__("./src/app/school-creation-wizard/school-creation-wizard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_app_network_service__["a" /* AppNetworkService */], __WEBPACK_IMPORTED_MODULE_2__services_app_notification_service__["a" /* AppNotificationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_7__components_studentinput_studentinput_component__["a" /* StudentInputComponent */]])
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
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatTableDataSource */](_this.boardList);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__services_app_network_service__["a" /* AppNetworkService */]])
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
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatTableDataSource */](_this.stateList);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__services_app_network_service__["a" /* AppNetworkService */]])
    ], StateDialog);
    return StateDialog;
}());



/***/ }),

/***/ "./src/app/school-creation-wizard/state-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>List of States</h2>\r\n<div *ngIf=\"isLoading\">\r\n\tLoading...\r\n</div>\r\n<div *ngIf=\"!isLoading\">\r\n\t<div *ngIf = \"stateListCallFailed\">\r\n\t\tCall failed. try again\r\n\t</div>\r\n\t<div *ngIf = \"!stateListCallFailed\">\r\n\t\t<mat-form-field mat-dialog-title>\r\n\t\t\t<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\r\n\t\t</mat-form-field>\r\n\t\t<mat-dialog-content style=\"height: calc(60vh - 185px);\">\r\n\t\t\t<mat-table #table [dataSource]=\"dataSource\">\r\n\t\t\t    <ng-container matColumnDef=\"name\">\r\n\t\t\t      <mat-header-cell *matHeaderCellDef style=\"cursor: pointer;\"> Name </mat-header-cell>\r\n\t\t\t      <mat-cell style=\"cursor: pointer;\" *matCellDef=\"let element\" [ngClass]=\"popup-option\" (click)=\"selectState(element)\"> {{element.name}} </mat-cell>\r\n\t\t\t    </ng-container>\r\n\t\t\t    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\t  \t\t\t<mat-row style=\"cursor: pointer;\" *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"popup-option\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t</mat-dialog-content>\r\n\t</div>\r\n</div>"

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
        this._baseUrl = "http://stage-sg.mgkslt.com/";
        this._baseUrl2 = "http://stage-sg.mgkslt.com/v1/state/list";
        this.versionString = "v1";
        this.roles = ["ADMIN", "TEACHER", "PARENT"];
        this.roleList = null;
        this.user = null;
        this.boardList = null;
        this.stateList = null;
        this.cookieService = _cookieService;
        if (this.getCookie("authorization") && this.getCookie("authorization").startsWith("Bearer")) {
            this._token = this.getCookie("authorization");
        }
        if (this.getCookie("roleauth") && this.getCookie("roleauth").startsWith("Bearer")) {
            this._token = this.getCookie("roleauth");
        }
    }
    //COOKIE RELATED FUNCTIONS
    AppNetworkService.prototype.getCookie = function (key) {
        return this._cookieService.get(key);
    };
    AppNetworkService.prototype.setCookieWithExpiry = function (key, val, duration) {
        var currentDate = new Date();
        var opts = {
            expires: new Date(currentDate.getTime() + duration)
        };
        this._cookieService.put(key, val, opts);
    };
    AppNetworkService.prototype.setCookie = function (key, val) {
        this._cookieService.put(key, val);
    };
    AppNetworkService.prototype.setPermanentCookie = function (key, val) {
        var opts = {
            expires: new Date('3000-12-31')
        };
        this._cookieService.put(key, val, opts);
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
    AppNetworkService.prototype.verifyIfAlreadyInPortal = function () {
        if (!this.getCookie("roleauth")) {
            return false;
        }
        return true;
    };
    // HTTP REQUESTS WRAPPERS - GET, POST, PATCH
    //request wrapper
    AppNetworkService.prototype.getRequest = function (url, extraHeaders) {
        var _this = this;
        url = this.getUrl(url);
        var headers = this.getHeaders(url, extraHeaders);
        return this.http
            .get(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        }))
            .toPromise()
            .then(function (res) {
            if (res.headers.get("roleauth")) {
                _this._roleauth = res.headers.get("roleauth");
                _this.setPermanentCookie("roleauth", _this._roleauth);
            }
            return res;
        });
    };
    AppNetworkService.prototype.getRequestTest = function (url, extraHeaders) {
        var _this = this;
        var headers = this.getHeaders(url, extraHeaders);
        return this.http
            .get(this._baseUrl2, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        }))
            .toPromise()
            .then(function (res) {
            if (res.headers.get("roleauth")) {
                _this._roleauth = res.headers.get("roleauth");
                _this.setPermanentCookie("roleauth", _this._roleauth);
            }
            return res;
        });
    };
    AppNetworkService.prototype.postRequest = function (url, object, extraHeaders) {
        var _this = this;
        url = this.getUrl(url);
        var headers = this.getHeaders(url, extraHeaders);
        if (extraHeaders) {
            for (var key in extraHeaders) {
                if (extraHeaders.hasOwnProperty(key)) {
                    headers[key] = extraHeaders[key];
                }
            }
        }
        return this.http
            .post(url, object, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        }))
            .toPromise()
            .then(function (res) {
            if (res.headers.get("authorization")) {
                _this._token = res.headers.get("authorization");
                _this.setPermanentCookie("authorization", _this._token);
            }
            if (res.headers.get("roleauth")) {
                _this._roleauth = res.headers.get("roleauth");
                _this.setPermanentCookie("roleauth", _this._roleauth);
            }
            return res;
        });
    };
    AppNetworkService.prototype.patchRequest = function (url, object, extraHeaders) {
        var _this = this;
        url = this.getUrl(url);
        var headers = this.getHeaders(url, extraHeaders);
        if (extraHeaders) {
            for (var key in extraHeaders) {
                if (extraHeaders.hasOwnProperty(key)) {
                    headers[key] = extraHeaders[key];
                }
            }
        }
        return this.http
            .patch(url, object, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        }))
            .toPromise()
            .then(function (res) {
            if (res.headers.get("roleauth")) {
                _this._roleauth = res.headers.get("roleauth");
                _this.setPermanentCookie("roleauth", _this._roleauth);
            }
            return res;
        });
    };
    //upload file
    AppNetworkService.prototype.uploadFile = function (file, url, otherParams) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        if (otherParams) {
            for (var index in otherParams) {
                formData.append(otherParams[index]["key"], otherParams[index]["value"]);
            }
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this._token);
        headers.append('roleauth', this._roleauth);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.getUrl(url), formData, options)
            .toPromise();
    };
    //get header for all request
    AppNetworkService.prototype.getHeaders = function (url, extraHeaders) {
        var _header = {
            "Content-Type": "application/json",
            "Content-Encoding": "gzip",
        };
        if (extraHeaders) {
            for (var key in extraHeaders) {
                if (extraHeaders.hasOwnProperty(key)) {
                    _header[key] = extraHeaders[key];
                }
            }
        }
        if (url.indexOf("/secure/app/") > -1) {
            _header["authorization"] = this._token;
            _header["roleauth"] = this._roleauth;
        }
        else if (url.indexOf("/secure/") > -1) {
            _header["authorization"] = this._token;
        }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](_header);
    };
    //get url
    AppNetworkService.prototype.getUrl = function (url) {
        if (url == "board/list" || url == "state/list" || url == "") {
            return this._baseUrl + url;
        }
        else {
            return this._baseUrl + this.versionString + "/" + url;
        }
    };
    AppNetworkService.prototype.login = function (phone, password) {
        return this.postRequest("user/login", {
            phone: phone,
            password: password
        }, null);
    };
    AppNetworkService.prototype.signup = function (user) {
        return this.postRequest("user", {
            name: user.name,
            email: user.email,
            phone: user.phone,
            password: user.password
        }, null);
    };
    AppNetworkService.prototype.forgotPassword1 = function (phone) {
        return this.patchRequest("user/forgotpassword", {
            phone: phone
        }, null);
    };
    AppNetworkService.prototype.forgotPassword2 = function (phone, otp) {
        return this.postRequest("user/forgotpassword", {
            phone: phone,
            otp: otp
        }, null);
    };
    AppNetworkService.prototype.verifyUser = function (userId, otp) {
        return this.postRequest("user/verify", {
            userId: userId,
            otp: otp
        }, null);
    };
    AppNetworkService.prototype.updatePasswordWithoutLogin = function (newPassword, repeatNewPassword, fpauthorization) {
        var fpauthHeader = {
            "fpauthorization": fpauthorization
        };
        return this.patchRequest("user/updatePassword", {
            newPassword: newPassword,
            repeatNewPassword: repeatNewPassword
        }, fpauthHeader);
    };
    AppNetworkService.prototype.resendOtp = function (phone) {
        return this.postRequest("user/resendOtp", {
            phone: phone
        }, null);
    };
    //get all user details
    AppNetworkService.prototype.getUserAsync = function () {
        var _this = this;
        if (this.user == null) {
            return this.getRequest("secure/user", null)
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
            return this.getRequest("/board/list", null);
        }
        else {
            return new Promise(this.boardList);
        }
    };
    //get all states
    AppNetworkService.prototype.getStateList = function () {
        if (this.stateList == null) {
            return this.getRequest("/state/list", null);
        }
        else {
            return new Promise(this.stateList);
        }
    };
    AppNetworkService.prototype.getStateListTest = function () {
        return this.getRequestTest("/state/list", null);
    };
    //get all user roles
    AppNetworkService.prototype.getUserRoleAsync = function () {
        var _this = this;
        // if(this.roleList == null){
        return this.getRequest("secure/user/listRoles", null)
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
        // } else {
        //   return new Promise(this.roleList);
        // }
    };
    // getUserRole(): Object {
    //   return this.roleList;
    // }
    //save school
    AppNetworkService.prototype.saveSchoolDetail = function (objSchool) {
        var file = objSchool["file"];
        if (file) {
            var otherParams = [];
            otherParams.push({ "key": "name", "value": objSchool["name"] });
            otherParams.push({ "key": "city", "value": objSchool["city"] });
            otherParams.push({ "key": "pincode", "value": objSchool["pincode"] });
            otherParams.push({ "key": "address", "value": objSchool["address"] });
            otherParams.push({ "key": "boardId", "value": objSchool["boardId"] });
            otherParams.push({ "key": "stateId", "value": objSchool["stateId"] });
            return this.uploadFile(file, "secure/schooldp/", otherParams);
        }
        else {
            return this.postRequest("secure/school/", objSchool, null);
        }
    };
    // get school details for admin
    AppNetworkService.prototype.getSchoolForAdmin = function (schoolId) {
        return this.getRequest("secure/school/" + schoolId, null);
    };
    //save class detail
    AppNetworkService.prototype.saveClassDetail = function (objClass, schoolId) {
        return this.postRequest("secure/app/class", objClass, null);
    };
    // FILE UPLOADS
    AppNetworkService.prototype.uploadStudentFile = function (uri, schoolId) {
        return this.uploadFile(uri, "secure/app/user/student", null);
    };
    AppNetworkService.prototype.teacherFileUpload = function (uri, schoolId) {
        return this.uploadFile(uri, "secure/app/user/teacher", null);
    };
    AppNetworkService.prototype.studentTeacherMappingFileUpload = function (uri, schoolId) {
        return this.uploadFile(uri, "secure/app/user/stmapping", null);
    };
    //role auth key
    AppNetworkService.prototype.getRoleAuthKey = function (type, id, sid) {
        var _this = this;
        return this.getRequest(("secure/user/roleauth/" + type + "/" + id + "?sid=" + sid), null)
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
            timer: 2000,
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