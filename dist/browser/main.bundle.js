webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./lazy/lazy.module": [
		"./src/app/lazy/lazy.module.ts",
		"lazy.module"
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

module.exports = "<kohan-navbar></kohan-navbar>\n<router-outlet></router-outlet>\n<kohan-footer></kohan-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
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
    function AppComponent(router, pageMeta, pageTitle) {
        this.router = router;
        this.pageMeta = pageMeta;
        this.pageTitle = pageTitle;
        pageTitle.setTitle('Kohan Creative: Dental Website Design & Development');
        pageMeta.addTags([
            { name: 'author', content: 'https://www.kasuriagroup.com/' },
            { name: 'keywords', content: 'dental website design, dental website development, dental branding, dental graphic design, dental social media, social media marketing, graphic design, website development, website design' },
            { name: 'description', content: 'Kohan Creative is a website design and development firm specializing in creating beautiful websites and branding for dental practices.' }
        ]);
    }
    AppComponent.prototype.ngOnInit = function () {
        // Scroll to top on route change
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Meta */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["e" /* Title */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_smart_modal__ = __webpack_require__("./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire_lite__ = __webpack_require__("./node_modules/angularfire-lite/esm5/angularfire-lite.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__web_development_web_development_component__ = __webpack_require__("./src/app/web-development/web-development.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__graphic_design_graphic_design_component__ = __webpack_require__("./src/app/graphic-design/graphic-design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__social_media_social_media_component__ = __webpack_require__("./src/app/social-media/social-media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pricing_pricing_component__ = __webpack_require__("./src/app/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__work_with_us_work_with_us_component__ = __webpack_require__("./src/app/work-with-us/work-with-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_contact_service__ = __webpack_require__("./src/app/services/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__nguniversal_common__ = __webpack_require__("./node_modules/@nguniversal/common/esm5/common.es5.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__web_development_web_development_component__["a" /* WebDevelopmentComponent */],
                __WEBPACK_IMPORTED_MODULE_14__graphic_design_graphic_design_component__["a" /* GraphicDesignComponent */],
                __WEBPACK_IMPORTED_MODULE_15__social_media_social_media_component__["a" /* SocialMediaComponent */],
                __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pricing_pricing_component__["a" /* PricingComponent */],
                __WEBPACK_IMPORTED_MODULE_18__contact_contact_component__["a" /* ContactUsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__work_with_us_work_with_us_component__["a" /* WorkWithUsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'my-app' }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire_lite__["a" /* AngularFireLite */].forRoot(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].config),
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_smart_modal__["a" /* NgxSmartModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
                    { path: 'web-design-development', component: __WEBPACK_IMPORTED_MODULE_13__web_development_web_development_component__["a" /* WebDevelopmentComponent */] },
                    { path: 'graphic-design-branding', component: __WEBPACK_IMPORTED_MODULE_14__graphic_design_graphic_design_component__["a" /* GraphicDesignComponent */] },
                    { path: 'social-media-marketing', component: __WEBPACK_IMPORTED_MODULE_15__social_media_social_media_component__["a" /* SocialMediaComponent */] },
                    { path: 'pricing', component: __WEBPACK_IMPORTED_MODULE_17__pricing_pricing_component__["a" /* PricingComponent */] },
                    { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
                    { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule' }
                ]),
                __WEBPACK_IMPORTED_MODULE_21__nguniversal_common__["a" /* TransferHttpCacheModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__services_contact_service__["a" /* ContactService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ".work-with-us-modal-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.lighter-font-weight {\n  font-weight: 300;\n}\n\n.invalid-text {\n  font-weight: 300;\n  color: #dc3545;\n}\n\n.work-with-us-modal-button-disabled {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: not-allowed;\n}\n\n.work-with-us-modal-button-disabled:hover {\n  /* background-color: #000000; */\n  /* color: #EFEFEF; */\n  color: #000000;\n  background-color: #CCCCCC;\n  cursor: not-allowed;\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4 style=\"text-align: center;\">Contact Kohan Creative</h4>\n  <form [formGroup]=\"contactUsForm\" (ngSubmit)=\"saveContactInformation()\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"firstName\" class=\"lighter-font-weight\">First Name *</label>\n        <input type=\"text\" class=\"form-control lighter-font-weight\" id=\"firstName\" placeholder=\"First Name\" formControlName=\"firstName\">\n        <small *ngIf=\"contactUsForm.controls['firstName'].errors && (contactUsForm.controls['firstName'].dirty || contactUsForm.controls['firstName'].touched)\" class=\"form-text invalid-text\">Please enter your first name.</small>\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"lastName\" class=\"lighter-font-weight\">Last Name *</label>\n        <input type=\"text\" class=\"form-control lighter-font-weight\" id=\"lastName\" placeholder=\"Last Name\" formControlName=\"lastName\">\n        <small *ngIf=\"contactUsForm.controls['lastName'].errors && (contactUsForm.controls['lastName'].dirty || contactUsForm.controls['lastName'].touched)\" class=\"form-text invalid-text\">Please enter your last name.</small>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"exampleInputEmail1\" class=\"lighter-font-weight\">Email address *</label>\n        <input type=\"email\" class=\"form-control lighter-font-weight\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Email Address\"\n          formControlName=\"email\">\n        <small *ngIf=\"contactUsForm.controls['email'].errors && (contactUsForm.controls['email'].dirty || contactUsForm.controls['email'].touched)\" class=\"form-text invalid-text\">Please enter your email address.</small>\n        <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"practiceName\" class=\"lighter-font-weight\">Name of Practice *</label>\n        <input type=\"text\" class=\"form-control lighter-font-weight\" id=\"practiceName\" placeholder=\"Dental or Medical Practice\" formControlName=\"practiceName\">\n        <small *ngIf=\"contactUsForm.controls['practiceName'].errors && (contactUsForm.controls['practiceName'].dirty || contactUsForm.controls['practiceName'].touched)\" class=\"form-text invalid-text\">Please provide the name of your practice.</small>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlTextarea1\" class=\"lighter-font-weight\">Message or Question</label>\n      <textarea class=\"form-control lighter-font-weight\" id=\"exampleFormControlTextarea1\" rows=\"3\" placeholder=\"Have a message or question? Type it in here!\"></textarea>\n    </div>\n    <button type=\"submit\" [class.work-with-us-modal-button-disabled]=\"contactUsForm.invalid\" class=\"work-with-us-modal-button\" [disabled]=\"contactUsForm.invalid\">Submit</button>\n    <!-- <small *ngIf=\"contactUsForm.invalid && (contactUsForm.dirty || contactUsForm.touched)\" class=\"form-text invalid-text\">Please fill out all required fields.</small> -->\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_smart_modal__ = __webpack_require__("./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire_lite__ = __webpack_require__("./node_modules/angularfire-lite/esm5/angularfire-lite.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactUsComponent = (function () {
    function ContactUsComponent(router, ngxSmartModalService, db, auth, fireStore, httpClient) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.db = db;
        this.auth = auth;
        this.fireStore = fireStore;
        this.httpClient = httpClient;
        this.contactUsForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            practiceName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            contactUsMessage: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null)
        });
        this.endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/contactUsEmail';
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = 'Hello';
        this.auth.signinAnonymously();
        this.fireStore.read('contacts').subscribe(function (data) {
            _this.fireStoreData = data;
        });
    };
    ContactUsComponent.prototype.navigateToPage = function (route) {
        this.router.navigate([route]);
    };
    ContactUsComponent.prototype.saveContactInformation = function () {
        var _this = this;
        var contactInfo = {
            firstName: this.contactUsForm.get('firstName').value,
            lastName: this.contactUsForm.get('lastName').value,
            email: this.contactUsForm.get('email').value,
            practiceName: this.contactUsForm.get('practiceName').value,
            contactUsMessage: this.contactUsForm.get('contactUsMessage').value
        };
        this.fireStore.push('contact-us', contactInfo).subscribe(function (data) {
            _this.contactData = data;
            console.log(_this.contactData);
            _this.sendEmailToKohan();
            _this.ngxSmartModalService.getModal('myModal').close();
        }, function (error) {
            console.error(error);
            _this.ngxSmartModalService.getModal('myModal').close();
        });
    };
    ContactUsComponent.prototype.sendEmailToKohan = function () {
        var apiHeaders = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var contactUsInfo = {
            firstName: this.contactUsForm.get('firstName').value,
            lastName: this.contactUsForm.get('lastName').value,
            email: this.contactUsForm.get('email').value,
            practiceName: this.contactUsForm.get('practiceName').value,
            contactUsMessage: this.contactUsForm.get('contactUsMessage').value
        };
        var data = {
            toEmail: 'sfarrugia@kohaninc.com',
            toName: 'Sabina Farrugia',
            leadFirstName: contactUsInfo.firstName,
            leadLastName: contactUsInfo.lastName,
            leadEmailAddress: contactUsInfo.email,
            leadPracticeName: contactUsInfo.practiceName,
            contactUsMessage: contactUsInfo.contactUsMessage
        };
        this.httpClient.post(this.endpoint, data, { headers: apiHeaders }).subscribe();
    };
    ContactUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'kohan-contact-us',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_smart_modal__["b" /* NgxSmartModalService */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire_lite__["c" /* AngularFireLiteDatabase */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire_lite__["b" /* AngularFireLiteAuth */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire_lite__["d" /* AngularFireLiteFirestore */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".social-footer-section {\n  color: #1F1F1F;\n  background-color: #F0F0F0;\n  -webkit-font-smoothing: subpixel-antialiased;\n  padding-top: 3%;\n  padding-bottom: 3%; \n}\n\n.social-footer-inner {\n  -webkit-transition: all .25s ease-in-out .1s;\n  transition: all .25s ease-in-out .1s;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.social-button-padding {\n  padding-left: 2%;\n  padding-right: 2%;\n  cursor: pointer;\n}\n\n.footer-section {\n  color: rgba(255,255,255,.4);\n  background-color: #201a16;\n  -webkit-font-smoothing: antialiased;\n  padding-top: 3%;\n  padding-bottom: 3%;\n}\n\n.powered-by-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  margin-top: 1em;\n}\n\n.link-to-kasuria {\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  cursor: pointer;\n  color: rgba(255,255,255,.4);\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"social-footer-section\">\n  <div class=\"social-footer-inner\">\n    <div class=\"row\">\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\"></div>\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 text-align-center\">\n        <fa name=\"fab fa-instagram\" class=\"social-button-padding\"></fa>\n        <fa name=\"fab fa-facebook-f\" class=\"social-button-padding\"></fa>\n        <fa name=\"fab fa-twitter\" class=\"social-button-padding\"></fa>\n      </div>\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\"></div>\n    </div>\n  </div>\n</div>\n<div class=\"footer-section\">\n  <div class=\"social-footer-inner\">\n    <div class=\"row\">\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\"></div>\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 text-align-center\">\n        <p class=\"powered-by-text\">Custom-made by <a class=\"link-to-kasuria\" href=\"https://kohan-creative.herokuapp.com\">Kohan Creative</a></p>\n      </div>\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function FooterComponent(router) {
        this.router = router;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.message = 'Hello';
    };
    FooterComponent.prototype.navigateHome = function () {
        this.router.navigate(['home']);
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'kohan-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/graphic-design/graphic-design.component.css":
/***/ (function(module, exports) {

module.exports = ".header-unit {\n  height: 638px;\n  border: none;\n  position: relative;\n  padding: 20px;\n}\n\n#video-container {\n  position: absolute;\n}\n\n#video-container {\n  top:0%;\n  left:0%;\n  height:100%;\n  width:100%;\n  overflow: hidden;\n}\n\nvideo {\n  position:absolute;\n  z-index:0;\n}\n\nvideo.fillWidth {\n  width: 100%;\n}\n\n.color-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(32,26,22,.5);\n  z-index: 99;\n}\n\n.desc-wrapper-container {\n  min-height: 0;\n  padding: 130px 0;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.desc-wrapper {\n  -webkit-animation: feature-text-anim .75s ease-in-out;\n          animation: feature-text-anim .75s ease-in-out;\n  z-index: 100;\n  position: relative;\n  width: 100%;\n  max-width: 956px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 32px;\n  text-align: center;\n  text-rendering: optimizeLegibility;\n}\n\n.desc-smaller-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 28px;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  color: #c3c1c1;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.kohan-header-tagline {\n  display: block;\n  font-weight: 300;\n  font-style: normal;\n  font-size: 58px;\n  letter-spacing: 0px;\n  text-transform: none;\n  line-height: 1.1em;\n  color: #FFFFFF;\n}\n\n.kohan-header-button {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  border: 2px solid #FFFFFF !important;\n  color: #FFFFFF;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1em 1.75em;\n  display: inline-block;\n  line-height: 1em;\n  margin: 10px 0;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  cursor: pointer;\n}\n\n.kohan-header-button:hover {\n  background-color: #FFFFFF;\n  color: #181818;\n  cursor: pointer;\n}\n\n.spacing-section {\n  margin-top: 8%;\n}\n\n.services-spacing-section {\n  margin-top: 8%;\n  margin-bottom: 8%;\n}\n\n.kohan-secondary-statement {\n  text-align: center;\n  font-weight: 300;\n}\n\n.services-image-margins {\n  margin-bottom: 8%;\n}\n\n.service-offering-container {\n  padding-bottom: 20%;\n  padding-top: 20%;\n  padding-left: 17px;\n  padding-right: 17px;\n  position: relative;\n  height: auto;\n  outline: none;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n          box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n  -webkit-transition: -webkit-box-shadow .2s ease-in-out;\n  transition: -webkit-box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out, -webkit-box-shadow .2s ease-in-out;\n}\n\n.service-offerings-content {\n  cursor: auto;\n  outline: none;\n}\n\n.service-offerings-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n}\n\n.link-to-services {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  /* cursor: pointer; */\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.services-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n.work-with-us-modal-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.lighter-font-weight {\n  font-weight: 300;\n}\n\n.sign-up-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 1em 1.75em;\n}\n\n.sign-up-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.button-spacing {\n  margin-top: 5%;\n}\n\n.learn-more-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  margin-top: 10%;\n}\n\n.contact-link {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  cursor: pointer;\n}\n\n.invalid-text {\n  font-weight: 300;\n  color: #dc3545;\n}\n\n.work-with-us-modal-button-disabled {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: not-allowed;\n}\n\n.work-with-us-modal-button-disabled:hover {\n  /* background-color: #000000; */\n  /* color: #EFEFEF; */\n  color: #000000;\n  background-color: #CCCCCC;\n  cursor: not-allowed;\n}\n\n@media only screen and (max-width: 640px) {\n  .desc-wrapper-container {\n    min-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .desc-smaller-text {\n    font-weight: 300;\n    font-style: normal;\n    font-size: 12px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 1.3em;\n    color: #c3c1c1;\n    margin: 10px auto;\n    text-align: center;\n  }\n\n  .kohan-header-tagline {\n    display: block;\n    font-weight: 300;\n    font-style: normal;\n    font-size: 24px;\n    letter-spacing: 0px;\n    text-transform: none;\n    line-height: 1.1em;\n    color: #FFFFFF;\n  }\n\n  .header-unit {\n    height: 375px;\n    border: none;\n    position: relative;\n    padding: 20px;\n  }\n\n  .service-offering-container {\n    padding-top: 10%;\n    padding-bottom: 10%;\n  }\n\n  .kohan-secondary-statement {\n    font-size: 26px;\n  }\n\n  video {\n    position:absolute;\n    top: 80px;\n  }\n\n  .desc-wrapper {\n    padding: 84px 32px 64px 32px;\n  }\n}\n\n@-webkit-keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}\n\n@keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}"

/***/ }),

/***/ "./src/app/graphic-design/graphic-design.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-unit\">\n  <div class=\"color-overlay\"></div>\n  <div id=\"video-container\">\n    <video autoplay loop muted playsinline class=\"fillWidth\">\n      <source src=\"https://firebasestorage.googleapis.com/v0/b/wav-studios.appspot.com/o/Paint%20-%206385.mp4?alt=media&token=5b9f2a64-9350-4aa1-bbf4-c9afb901ff56\"\n        type=\"video/mp4\" />\n    </video>\n  </div>\n  <!-- end video-container -->\n\n  <div class=\"desc-wrapper-container\">\n\n    <!-- Work With Us Modal -->\n    <ngx-smart-modal #myModal identifier=\"myModal\">\n      <h4 style=\"text-align: center;\">Work with Kohan Creative</h4>\n      <form style=\"text-align: left;\" [formGroup]=\"newContactForm\" (ngSubmit)=\"saveContactInformation()\" novalidate>\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\" class=\"lighter-font-weight\">Email address *</label>\n          <input type=\"email\" class=\"form-control lighter-font-weight\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\"\n            formControlName=\"email\">\n          <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n          <small *ngIf=\"newContactForm.controls['email'].errors && (newContactForm.controls['email'].dirty || newContactForm.controls['email'].touched)\" class=\"form-text invalid-text\">Please provide your email address!</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\" class=\"lighter-font-weight\">Name of Practice *</label>\n          <input type=\"text\" class=\"form-control lighter-font-weight\" id=\"practiceName\" placeholder=\"Dental or Medical Practice Name\"\n            formControlName=\"practiceName\">\n          <small *ngIf=\"newContactForm.controls['practiceName'].errors && (newContactForm.controls['practiceName'].dirty || newContactForm.controls['practiceName'].touched)\" class=\"form-text invalid-text\">Please provide the name of your practice!</small>\n        </div>\n        <button type=\"submit\" [class.work-with-us-modal-button-disabled]=\"newContactForm.invalid\" class=\"work-with-us-modal-button\" [disabled]=\"newContactForm.invalid\">Submit</button>\n      </form>\n    </ngx-smart-modal>\n\n    <!-- Contact Us Modal -->\n    <ngx-smart-modal #contactUsModal identifier=\"contactUsModal\">\n      <kohan-contact-us></kohan-contact-us>\n    </ngx-smart-modal>\n\n    <div class=\"desc-wrapper\">\n      <h1 class=\"kohan-header-tagline\">Graphic Design & Branding</h1>\n      <p class=\"desc-smaller-text\">Craft Your Visually Compelling Story</p>\n      <div class=\"kohan-header-button\" (click)=\"openWorkWithUsModal()\">Work With Us</div>\n    </div>\n  </div>\n</div>\n<!-- end .header-unit -->\n\n<div class=\"container\">\n  <div class=\"row spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h2 class=\"kohan-secondary-statement\">\n        Utilizing a unique set of design principles, philosophies, and technologies, we elevate your brand and shed light on the\n        true value you deliver.\n      </h2>\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <img src=\"../assets/img/extraordinary_smile_branding.jpg\" class=\"img-fluid services-image-margins\">\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Visual Storytelling</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            We work closely with you to get to know the true purpose and story behind your dental practice, with the intent of reimagining\n            your brand and building a foundation that is in harmony with your overall vision.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <div class=\"contact-link text-align-center\" (click)=\"openContactUsModal()\">Learn More</div>\n          </h3>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Purposeful Assets</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Your brand isn't just your logo. From health history and referral forms to appointment and business cards, we create assets\n            specifically tailored to accommodate your growing dental practice's needs.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <div class=\"contact-link text-align-center\" (click)=\"openContactUsModal()\">Get In Touch</div>\n          </h3>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 order-first order-md-2\">\n      <img src=\"../assets/img/endocare-2.jpg\" class=\"img-fluid services-image-margins\">\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <img src=\"../assets/img/martin_family_dentistry.jpg\" class=\"img-fluid services-image-margins\">\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Lasting Impressions</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            For your dental practice, experience is everything. We extend the comforting, luxurious experience you carefully cultivate\n            by infusing your brand with the same empathy and passion, further strengthening the bond you share with your\n            patients.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <div class=\"contact-link text-align-center\" (click)=\"openContactUsModal()\">Contact Us</div>\n          </h3>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Bottom tagline -->\n  <div class=\"row services-spacing-section\" id=\"contactUsForm\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-align-center\">\n      <h2 class=\"kohan-secondary-statement\">\n        Emphasize your presence and establish your voice with Kohan Creative.\n      </h2>\n      <div class=\"button-spacing\">\n        <button type=\"button\" class=\"sign-up-button\" (click)=\"openWorkWithUsModal()\">Work With Us</button>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/graphic-design/graphic-design.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphicDesignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire_lite__ = __webpack_require__("./node_modules/angularfire-lite/esm5/angularfire-lite.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_smart_modal__ = __webpack_require__("./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GraphicDesignComponent = (function () {
    function GraphicDesignComponent(router, ngxSmartModalService, db, auth, fireStore, httpClient) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.db = db;
        this.auth = auth;
        this.fireStore = fireStore;
        this.httpClient = httpClient;
        this.newContactForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            practiceName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required)
        });
        this.endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/httpEmail';
    }
    GraphicDesignComponent.prototype.ngOnInit = function () {
        this.message = 'Hello';
    };
    GraphicDesignComponent.prototype.navigateToPage = function (route) {
        this.router.navigate([route]);
    };
    GraphicDesignComponent.prototype.saveContactInformation = function () {
        var _this = this;
        var contactInfo = {
            email: this.newContactForm.get('email').value,
            practiceName: this.newContactForm.get('practiceName').value
        };
        this.fireStore.push('contacts', contactInfo).subscribe(function (data) {
            _this.contactData = data;
            console.log(_this.contactData);
            _this.sendEmailToKohan();
            _this.ngxSmartModalService.getModal('myModal').close();
        }, function (error) {
            console.error(error);
            _this.ngxSmartModalService.getModal('myModal').close();
        });
    };
    GraphicDesignComponent.prototype.sendEmailToKohan = function () {
        var apiHeaders = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var signUpInfo = {
            email: this.newContactForm.get('email').value,
            practiceName: this.newContactForm.get('practiceName').value
        };
        var data = {
            toEmail: 'sfarrugia@kohaninc.com',
            toName: 'Sabina Farrugia',
            leadEmailAddress: signUpInfo.email,
            leadPracticeName: signUpInfo.practiceName
        };
        this.httpClient.post(this.endpoint, data, { headers: apiHeaders }).subscribe();
    };
    GraphicDesignComponent.prototype.openContactUsModal = function () {
        window.scrollTo(0, 0);
        this.ngxSmartModalService.getModal('contactUsModal').open();
    };
    GraphicDesignComponent.prototype.openWorkWithUsModal = function () {
        window.scrollTo(0, 0);
        this.ngxSmartModalService.getModal('myModal').open();
    };
    GraphicDesignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'kohan-graphic-design',
            template: __webpack_require__("./src/app/graphic-design/graphic-design.component.html"),
            styles: [__webpack_require__("./src/app/graphic-design/graphic-design.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_smart_modal__["b" /* NgxSmartModalService */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire_lite__["c" /* AngularFireLiteDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire_lite__["b" /* AngularFireLiteAuth */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire_lite__["d" /* AngularFireLiteFirestore */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */]])
    ], GraphicDesignComponent);
    return GraphicDesignComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".header-unit {\n  height: 638px;\n  border: none;\n  position: relative;\n  padding: 20px;\n}\n\n#video-container {\n  position: absolute;\n}\n\n#video-container {\n  top:0%;\n  left:0%;\n  height:100%;\n  width:100%;\n  overflow: hidden;\n}\n\nvideo {\n  position:absolute;\n  z-index:0;\n}\n\nvideo.fillWidth {\n  width: 100%;\n}\n\n.color-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(32,26,22,.5);\n  z-index: 99;\n  height: auto;\n}\n\n.desc-wrapper-container {\n  min-height: 0;\n  padding: 130px 0;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.desc-wrapper {\n  -webkit-animation: feature-text-anim .75s ease-in-out;\n          animation: feature-text-anim .75s ease-in-out;\n  z-index: 100;\n  position: relative;\n  width: 100%;\n  max-width: 956px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 32px;\n  text-align: center;\n  text-rendering: optimizeLegibility;\n}\n\n.desc-smaller-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 28px;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  color: #c3c1c1;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.kohan-header-tagline {\n  display: block;\n  font-weight: 300;\n  font-style: normal;\n  font-size: 58px;\n  letter-spacing: 0px;\n  text-transform: none;\n  line-height: 1.1em;\n  color: #FFFFFF;\n}\n\n.kohan-header-button {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  border: 2px solid #FFFFFF !important;\n  color: #FFFFFF;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1em 1.75em;\n  display: inline-block;\n  line-height: 1em;\n  margin: 20px 0;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;  \n  cursor: pointer;\n}\n\n.kohan-header-button:hover {\n  background-color: #FFFFFF;\n  color: #181818;\n  cursor: pointer;\n}\n\n.spacing-section {\n  margin-top: 8%;\n}\n\n.services-spacing-section {\n  margin-top: 8%;\n  margin-bottom: 8%;\n}\n\n.kohan-secondary-statement {\n  text-align: center;\n  font-weight: 300;\n}\n\n.services-image-margins {\n  margin-bottom: 8%;\n}\n\n.service-offering-container {\n  padding-bottom: 17px;\n  padding-top: 17px;\n  padding-left: 17px;\n  padding-right: 17px;\n  position: relative;\n  height: auto;\n  outline: none;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n          box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n  -webkit-transition: -webkit-box-shadow .2s ease-in-out;\n  transition: -webkit-box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out, -webkit-box-shadow .2s ease-in-out;\n}\n\n.service-offerings-content {\n  cursor: auto;\n  outline: none;\n}\n\n.service-offerings-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n}\n\n.link-to-services {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  cursor: pointer;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.services-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n.img-cursor {\n  cursor: pointer;\n}\n\n.work-with-us-modal-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button-disabled {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: not-allowed;\n}\n\n.work-with-us-modal-button-disabled:hover {\n  /* background-color: #000000; */\n  /* color: #EFEFEF; */\n  color: #000000;\n  background-color: #CCCCCC;\n  cursor: not-allowed;\n}\n\n.lighter-font-weight {\n  font-weight: 300;\n}\n\n.learn-more-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  margin-top: 10%;\n}\n\n.hover-shadow:hover {\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\n}\n\n.about-us-background {\n  background: url('cad_7.5dcea7bc2f487dff731e.jpg') no-repeat center center, #222;\n  background-size: 100%;\n  padding: 10%;\n  text-align: center;\n}\n\n.sign-up-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 1em 1.75em;\n}\n\n.sign-up-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.button-spacing {\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.invalid-text {\n  font-weight: 300;\n  color: #dc3545;\n}\n\n@media only screen and (max-width: 640px) {\n  .desc-wrapper-container {\n    min-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .desc-smaller-text {\n    font-weight: 300;\n    font-style: normal;\n    font-size: 18px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 1.3em;\n    color: #c3c1c1;\n    margin: 10px auto;\n    text-align: center;\n  }\n\n  .kohan-header-tagline {\n    display: block;\n    font-weight: 300;\n    font-style: normal;\n    font-size: 30px;\n    letter-spacing: 0px;\n    text-transform: none;\n    line-height: 1.1em;\n    color: #FFFFFF;\n  }\n\n  .header-unit {\n    height: 375px;\n    border: none;\n    position: relative;\n    padding: 20px;\n  }\n\n  .kohan-secondary-statement {\n    font-size: 26px;\n  }\n\n  video {\n    position:absolute;\n    top: 80px;\n  }\n\n  .button-spacing {\n    margin-top: 10%;\n    margin-bottom: 5%;\n  }\n}\n\n@-webkit-keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}\n\n@keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-unit\">\n  <div class=\"color-overlay\"></div>\n  <div id=\"video-container\">\n    <video autoplay loop muted playsinline class=\"fillWidth\">\n      <source src=\"https://firebasestorage.googleapis.com/v0/b/wav-studios.appspot.com/o/Office%20-%207269.mp4?alt=media&token=abee2fc4-a937-4046-9f9b-384708dece22\"\n        type=\"video/mp4\" />\n    </video>\n  </div>\n  <!-- end video-container -->\n\n  <div class=\"desc-wrapper-container\">\n\n    <!-- Work With Us Modal -->\n    <ngx-smart-modal #myModal identifier=\"myModal\">\n      <kohan-work-with-us></kohan-work-with-us>\n    </ngx-smart-modal>\n\n    <div class=\"desc-wrapper\">\n      <p class=\"desc-smaller-text\">Kohan Creative</p>\n      <h1 class=\"kohan-header-tagline\">Luxurious Digital Design for Your Dental & Medical Practice</h1>\n      <!-- <a class=\"kohan-header-button\" routerLink=\"/home\">Work With Us</a> -->\n      <div class=\"kohan-header-button\" (click)=\"openWorkWithUsModal()\">Work With Us</div>\n    </div>\n  </div>\n</div>\n<!-- end .header-unit -->\n\n<div class=\"container\">\n\n  <!-- Kohan Secondary Tagline -->\n  <div class=\"row spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h2 class=\"kohan-secondary-statement\">\n        Kohan Creative employs the world's best designers, developers, and creators to imbue your private dental and medical practices\n        with digital luxury.\n      </h2>\n    </div>\n  </div>\n\n  <!-- Kohan Service Offerings -->\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-4\">\n      <img src=\"../assets/img/composition-3326183_1280_Darker.jpeg\" class=\"img-fluid services-image-margins img-cursor hover-shadow\"\n        (click)=\"navigateToPage('web-design-development')\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <a routerLink=\"/web-design-development\" class=\"link-to-services text-align-center\">Website Design & Development</a>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            We design and develop custom websites that mirror the aesthetic and warmth of your dental or medical practice, evoking a\n            consistent emotion across your physical and digital properties.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <a routerLink=\"/web-design-development\" class=\"link-to-services text-align-center\">Learn More</a>\n          </h3>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-4\">\n      <img src=\"../assets/img/paper-3146953_1280_darker.jpeg\" class=\"img-fluid services-image-margins img-cursor hover-shadow\"\n        (click)=\"navigateToPage('graphic-design-branding')\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <a routerLink=\"/graphic-design-branding\" class=\"link-to-services text-align-center\">Graphic Design & Branding</a>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Whether you're starting your own practice or looking to modernize your current one, we specialize in creating custom logos\n            and brand assets that build on your story and set you apart.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <a routerLink=\"/graphic-design-branding\" class=\"link-to-services text-align-center\">Learn More</a>\n          </h3>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-4\">\n      <img src=\"../assets/img/paper-3318159_1280_darker.jpeg\" class=\"img-fluid services-image-margins img-cursor hover-shadow\"\n        (click)=\"navigateToPage('social-media-marketing')\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <a routerLink=\"/social-media-marketing\" class=\"link-to-services text-align-center\">Social Media Marketing</a>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Extend your brand presence outside the office, at all hours of the day. We engage your patients and anticipate their needs\n            by managing your social accounts with thoughtfulness, attention, and compassion.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <a routerLink=\"/social-media-marketing\" class=\"link-to-services text-align-center\">Learn More</a>\n          </h3>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<!-- Kohan About Us -->\n<div class=\"row spacing-section about-us-background\">\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <p class=\"desc-smaller-text\">Kohan Creative</p>\n    <h1 class=\"kohan-header-tagline\">Who We Are</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n  <!-- Kohan Secondary Tagline -->\n  <div class=\"row spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h2 class=\"kohan-secondary-statement\">\n        Kohan Creative is the sister company to the <a class=\"link-to-services\" href=\"http://kohaninc.com/\" target=\"_blank\">Kohan Group</a>, the leader in healthcare, dental, orthodontic, and dental speciality\n        office design in North America.\n      </h2>\n      <!-- <h2 class=\"kohan-secondary-statement\">\n        We are the foremost industry leaders in dental, healthcare, orthodontic, and dental speciality web design and branding.\n      </h2> -->\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-2\"></div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-8\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <p class=\"text-align-center services-paragraph\">\n            We provide a comprehensive suite of services, starting the moment you have a grander vision of your dental practice. From\n            architectural and interior design, to construction, to building your website and digital presence, we offer a\n            unique set of services tailored specifically to the dental industry.\n          </p>\n          <div class=\"button-spacing text-align-center\">\n            <button type=\"button\" class=\"sign-up-button\" (click)=\"openWorkWithUsModal()\">Work With Us</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_smart_modal__ = __webpack_require__("./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire_lite__ = __webpack_require__("./node_modules/angularfire-lite/esm5/angularfire-lite.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(router, ngxSmartModalService, db, auth, fireStore, httpClient) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.db = db;
        this.auth = auth;
        this.fireStore = fireStore;
        this.httpClient = httpClient;
        this.endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/httpEmail';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = 'Hello';
        this.auth.signinAnonymously();
        this.fireStore.read('contacts').subscribe(function (data) {
            _this.fireStoreData = data;
        });
    };
    HomeComponent.prototype.navigateToPage = function (route) {
        this.router.navigate([route]);
    };
    HomeComponent.prototype.openWorkWithUsModal = function () {
        window.scrollTo(0, 0);
        this.ngxSmartModalService.getModal('myModal').open();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'kohan-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_smart_modal__["b" /* NgxSmartModalService */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire_lite__["c" /* AngularFireLiteDatabase */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire_lite__["b" /* AngularFireLiteAuth */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire_lite__["d" /* AngularFireLiteFirestore */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".kohan-navbar-background {\n  background-color: #FFFFFF !important;\n}\n\n.kohan-logo {\n  height: auto;\n  max-height: 100px;\n  width: auto;\n  max-width: 150px;\n}\n\n.kohan-header {\n  padding: 0 20px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  line-height: 1em;\n  background-color: #fff;\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: subpixel-antialiased;\n  position: relative;\n}\n\n.kohan-inner-header {\n  padding: 16px 0;\n  display: table;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-animation: header-anim 1s ease-in-out;\n          animation: header-anim 1s ease-in-out;\n}\n\n.kohan-header-nav {\n  text-align: right;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.main-nav-wrapper {\n  position: relative;\n  z-index: 1000;\n}\n\n.work-with-us-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n.services-item-container {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0; \n}\n\n.services-link {\n  font-family: futura-pt, sans-serif;\n  font-weight: 500;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  line-height: 1em;\n  color: #000000;\n  display: block;\n  padding: 1em 1.5em !important;\n}\n\n.services-link-button {\n  font-family: futura-pt, sans-serif;\n  font-weight: 500;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  line-height: 1em;\n  display: block;\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  margin-left: 1em !important;\n  padding: 1em 1.5em !important;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n}\n\n.services-link-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n}\n\n@media only screen and (max-width: 640px) {\n  .mobile-padding {\n    padding: 24px 36px;\n  }\n  .services-link-button {\n    text-align: center;\n  }\n\n  .services-link {\n    text-align: center;\n  }\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"kohan-header\">\n  <div class=\"kohan-inner-header\">\n    <div class=\"kohan-header-nav\">\n      <nav class=\"navbar navbar-expand-lg navbar-light kohan-navbar-background\">\n        <a class=\"navbar-brand\" routerLink=\"/home\">\n          <img class=\"kohan-logo img-fluid\" src=\"../assets/img/KOHAN-Creative-Logo.png\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\" style=\"border-color: transparent;\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav ml-auto mobile-padding\">\n            <li class=\"services-item-container dropdown\">\n              <a class=\"services-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                aria-expanded=\"false\">\n                Services\n              </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" style=\"border-color: transparent;\">\n                <a class=\"dropdown-item\" routerLink=\"web-design-development\">Web Design & Development</a>\n                <a class=\"dropdown-item\" routerLink=\"graphic-design-branding\">Graphic Design & Branding</a>\n                <!-- <div class=\"dropdown-divider\"></div> -->\n                <a class=\"dropdown-item\" routerLink=\"social-media-marketing\">Social Media Marketing</a>\n              </div>\n            </li>\n            <li class=\"services-item-container\">\n              <a class=\"services-link\" routerLink=\"pricing\">Pricing\n                <span class=\"sr-only\">(current)</span>\n              </a>\n            </li>\n            <!-- <li class=\"services-item-container\">\n              <a class=\"services-link\" href=\"#\">About</a>\n            </li> -->\n            <li class=\"services-item-container\">\n              <div class=\"services-link-button\" (click)=\"openWorkWithUsModal()\">Work With Us</div>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </div>\n</div>\n\n<!-- Work With Us Modal -->\n<ngx-smart-modal #myModal identifier=\"myModal\">\n  <kohan-work-with-us></kohan-work-with-us>\n</ngx-smart-modal>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_smart_modal__ = __webpack_require__("./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
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
    function NavbarComponent(router, ngxSmartModalService) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.message = 'Hello';
    };
    NavbarComponent.prototype.navigateHome = function () {
        this.router.navigate(['home']);
    };
    NavbarComponent.prototype.openWorkWithUsModal = function () {
        window.scrollTo(0, 0);
        this.ngxSmartModalService.getModal('myModal').open();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'kohan-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_smart_modal__["b" /* NgxSmartModalService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.component.css":
/***/ (function(module, exports) {

module.exports = ".header-unit {\n  height: 638px;\n  border: none;\n  position: relative;\n  padding: 20px;\n}\n\n#video-container {\n  position: absolute;\n}\n\n#video-container {\n  top:0%;\n  left:0%;\n  height:100%;\n  width:100%;\n  overflow: hidden;\n}\n\nvideo {\n  position:absolute;\n  z-index:0;\n}\n\nvideo.fillWidth {\n  width: 100%;\n}\n\n.color-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(32,26,22,.5);\n  z-index: 99;\n}\n\n.desc-wrapper-container {\n  min-height: 0;\n  padding: 130px 0;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.desc-wrapper {\n  -webkit-animation: feature-text-anim .75s ease-in-out;\n          animation: feature-text-anim .75s ease-in-out;\n  z-index: 100;\n  position: relative;\n  width: 100%;\n  max-width: 956px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 32px;\n  text-align: center;\n  text-rendering: optimizeLegibility;\n}\n\n.desc-smaller-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 28px;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  color: #c3c1c1;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.kohan-header-tagline {\n  display: block;\n  font-weight: 300;\n  font-style: normal;\n  font-size: 58px;\n  letter-spacing: 0px;\n  text-transform: none;\n  line-height: 1.1em;\n  color: #FFFFFF;\n}\n\n.kohan-header-button {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  border: 2px solid #FFFFFF !important;\n  color: #FFFFFF;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1em 1.75em;\n  display: inline-block;\n  line-height: 1em;\n  margin: 20px 0;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;  \n  cursor: pointer;\n}\n\n.kohan-header-button:hover {\n  background-color: #FFFFFF;\n  color: #181818;\n  cursor: pointer;\n}\n\n.spacing-section {\n  margin-top: 8%;\n}\n\n.services-spacing-section {\n  margin-top: 8%;\n  margin-bottom: 8%;\n}\n\n.kohan-secondary-statement {\n  text-align: center;\n  font-weight: 300;\n}\n\n.services-image-margins {\n  margin-bottom: 8%;\n}\n\n.service-offering-container {\n  padding-bottom: 17px;\n  padding-top: 17px;\n  padding-left: 17px;\n  padding-right: 17px;\n  position: relative;\n  height: auto;\n  outline: none;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n          box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n  -webkit-transition: -webkit-box-shadow .2s ease-in-out;\n  transition: -webkit-box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out, -webkit-box-shadow .2s ease-in-out;\n}\n\n.service-offerings-content {\n  cursor: auto;\n  outline: none;\n}\n\n.service-offerings-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n}\n\n.link-to-services {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  cursor: pointer;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.text-align-left {\n  text-align: left;\n}\n\n.services-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n.img-cursor {\n  cursor: pointer;\n}\n\n.work-with-us-modal-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.lighter-font-weight {\n  font-weight: 300;\n}\n\n.red-package {\n  color: rgb(255, 69, 21);\n  /* box-shadow: 0 0.25rem 0.75rem rgb(255, 69, 21) !important; */\n}\n\n.gold-package {\n  color: rgb(255, 214, 38);\n  /* box-shadow: 0 0.25rem 0.75rem rgb(255, 214, 38) !important; */\n}\n\n.black-package {\n  -webkit-box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05) !important;\n          box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05) !important;\n}\n\n.pricing-subsection-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 14px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  line-height: 1.6em;\n  text-align: left;\n}\n\n.package-features-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n.package-features-muted {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 80%;\n  letter-spacing: .5px;\n  line-height: .5em;\n  color: #1F1F1F;\n  margin-top: 10%;\n  text-align: left;\n}\n\n.sign-up-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 1em 1.75em;\n}\n\n.sign-up-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.question-tooltip {\n  cursor: help;\n}\n\n.hover-shadow:hover {\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\n}\n\n.contact-us-modal {\n  top: 50% !important;\n}\n\n.invalid-text {\n  font-weight: 300;\n  color: #dc3545;\n}\n\n.work-with-us-modal-button-disabled {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: not-allowed;\n}\n\n.work-with-us-modal-button-disabled:hover {\n  /* background-color: #000000; */\n  /* color: #EFEFEF; */\n  color: #000000;\n  background-color: #CCCCCC;\n  cursor: not-allowed;\n}\n\n@media only screen and (max-width: 640px) {\n  .desc-wrapper-container {\n    min-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .desc-smaller-text {\n    font-weight: 300;\n    font-style: normal;\n    font-size: 12px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 1.3em;\n    color: #c3c1c1;\n    margin: 10px auto;\n    text-align: center;\n  }\n\n  .kohan-header-tagline {\n    display: block;\n    font-weight: 300;\n    font-style: normal;\n    font-size: 24px;\n    letter-spacing: 0px;\n    text-transform: none;\n    line-height: 1.1em;\n    color: #FFFFFF;\n  }\n\n  .header-unit {\n    height: 375px;\n    border: none;\n    position: relative;\n    padding: 20px;\n  }\n\n  .kohan-secondary-statement {\n    font-size: 26px;\n  }\n\n  video {\n    position:absolute;\n    top: 80px;\n  }\n\n  .desc-wrapper {\n    padding: 84px 32px 64px 32px;\n  }\n}\n\n@-webkit-keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}\n\n@keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}"

/***/ }),

/***/ "./src/app/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-unit\">\n  <div class=\"color-overlay\"></div>\n  <div id=\"video-container\">\n    <video autoplay loop muted playsinline class=\"fillWidth\">\n      <source src=\"https://firebasestorage.googleapis.com/v0/b/wav-studios.appspot.com/o/Whiteboard%20-%201658.mp4?alt=media&token=f67b247c-bee6-4f62-a3dc-ce0c6b7dcc77\"\n        type=\"video/mp4\" />\n    </video>\n  </div>\n  <!-- end video-container -->\n\n  <div class=\"desc-wrapper-container\">\n    <!-- Work With Us Modal -->\n    <ngx-smart-modal #myModal identifier=\"myModal\">\n      <kohan-work-with-us></kohan-work-with-us>\n    </ngx-smart-modal>\n\n    <!-- Contact Us Modal -->\n    <ngx-smart-modal #contactUsModal identifier=\"contactUsModal\">\n      <kohan-contact-us></kohan-contact-us>\n    </ngx-smart-modal>\n\n\n    <div class=\"desc-wrapper\">\n      <p class=\"desc-smaller-text\">Kohan Creative</p>\n      <h1 class=\"kohan-header-tagline\">Packages & Pricing</h1>\n      <div class=\"kohan-header-button\" (click)=\"openWorkWithUsModal()\">Work With Us</div>\n    </div>\n  </div>\n</div>\n<!-- end .header-unit -->\n\n\n\n<div class=\"container\">\n\n  <!-- Kohan Secondary Tagline -->\n  <div class=\"row spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h2 class=\"kohan-secondary-statement\">\n        At Kohan Creative, we believe in optionality.\n      </h2>\n      <h2 class=\"kohan-secondary-statement\">\n        Choose the package that's right for your dental or medical practice.\n      </h2>\n    </div>\n  </div>\n\n  <!-- Kohan Pricing Packages -->\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-4 text-align-center\">\n      <div class=\"card mb-4 box-shadow hover-shadow\">\n        <div class=\"card-header\">\n          <h4 class=\"my-0 font-weight-normal service-offerings-title red-package\">Red</h4>\n        </div>\n        <div class=\"card-body\">\n          <!-- <h1 class=\"card-title pricing-card-title\">$600\n            <small class=\"text-muted\">/ mo</small>\n          </h1> -->\n          <!-- <h4 class=\"pricing-subsection-title\">Web Design & Dev</h4> -->\n          <ul class=\"list-unstyled mt-3 mb-4 text-align-left\">\n            <li class=\"package-features-paragraph\">Standard monthly web hosting</li>\n            <li class=\"package-features-paragraph\">Mobile optimized site</li>\n            <li class=\"package-features-paragraph\">Pre-designed template</li>\n            <li class=\"package-features-paragraph\">Updated logo with full rights</li>\n            <li class=\"package-features-paragraph\">Setup of one social media account and one post per month</li>\n          </ul>\n          <button type=\"button\" class=\"sign-up-button\" (click)=\"openContactUsModal()\">Contact Us</button>\n          <div class=\"package-features-muted\">* Additional $200 flat fee for any site changes</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-4 text-align-center\">\n      <div class=\"card mb-4 box-shadow hover-shadow\">\n        <div class=\"card-header\">\n          <h4 class=\"my-0 font-weight-normal service-offerings-title\">Black</h4>\n        </div>\n        <div class=\"card-body\">\n          <!-- <h1 class=\"card-title pricing-card-title\">$1000\n            <small class=\"text-muted\">/ mo</small>\n          </h1> -->\n          <!-- <h4 class=\"pricing-subsection-title\">Web Design & Dev</h4> -->\n          <ul class=\"list-unstyled mt-3 mb-4 text-align-left\">\n            <li class=\"package-features-paragraph\">Standard monthly web hosting</li>\n            <li class=\"package-features-paragraph\">Mobile optimized site</li>\n            <li class=\"package-features-paragraph\">Complete custom website design and development</li>\n            <li class=\"package-features-paragraph\">Regular monthly maintenance and hosting</li>\n            <li class=\"package-features-paragraph\">Premium services and integrations</li>\n            <li class=\"package-features-paragraph\">Custom logo and suite of brand assets</li>\n            <li class=\"package-features-paragraph\">Setup of four social media accounts</li>\n            <li class=\"package-features-paragraph\">One post per week across four social media accounts</li>\n          </ul>\n          <button type=\"button\" class=\"sign-up-button\" (click)=\"openContactUsModal()\">Contact Us</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-4 text-align-center\">\n      <div class=\"card mb-4 box-shadow hover-shadow\">\n        <div class=\"card-header\">\n          <h4 class=\"my-0 font-weight-normal service-offerings-title gold-package\">Gold</h4>\n        </div>\n        <div class=\"card-body\">\n          <!-- <h1 class=\"card-title pricing-card-title\">$800\n            <small class=\"text-muted\">/ mo</small>\n          </h1> -->\n          <!-- <h4 class=\"pricing-subsection-title\">Web Design & Dev</h4> -->\n          <ul class=\"list-unstyled mt-3 mb-4 text-align-left\">\n            <li class=\"package-features-paragraph\">Standard monthly web hosting</li>\n            <li class=\"package-features-paragraph\">Mobile optimized site</li>\n            <li class=\"package-features-paragraph\">Pre-designed template w/ 2 custom options</li>\n            <li class=\"package-features-paragraph\">One site edit per month</li>\n            <li class=\"package-features-paragraph\">Newly designed logo and business cards</li>\n            <li class=\"package-features-paragraph\">Setup of two social media accounts and two posts per month per account</li>\n          </ul>\n          <button type=\"button\" class=\"sign-up-button\" (click)=\"openContactUsModal()\">Contact Us</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- What Each Package Includes -->\n  <div class=\"row services-spacing-section\" id=\"contactUsForm\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h2 class=\"kohan-secondary-statement\">\n        Ready to get started? Get in touch with us today!\n      </h2>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire_lite__ = __webpack_require__("./node_modules/angularfire-lite/esm5/angularfire-lite.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_smart_modal__ = __webpack_require__("./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PricingComponent = (function () {
    function PricingComponent(router, ngxSmartModalService, db, auth, fireStore, httpClient) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.db = db;
        this.auth = auth;
        this.fireStore = fireStore;
        this.httpClient = httpClient;
        this.endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/httpEmail';
    }
    PricingComponent.prototype.ngOnInit = function () {
        this.message = 'Hello';
        this.premiumTooltip = 'Process payments, accept patient forms, build your patient database, schedule appointments, and more!';
        this.brandingTooltip = 'Custom designed business cards, health history forms, referral cards, appointment cards, and more!';
    };
    PricingComponent.prototype.navigateToPage = function (route) {
        this.router.navigate([route]);
    };
    PricingComponent.prototype.openContactUsModal = function () {
        this.contactUsModalOpen = true;
        window.scrollTo(0, 0);
        this.ngxSmartModalService.getModal('contactUsModal').open();
    };
    PricingComponent.prototype.openWorkWithUsModal = function () {
        window.scrollTo(0, 0);
        this.ngxSmartModalService.getModal('myModal').open();
    };
    PricingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'kohan-pricing',
            template: __webpack_require__("./src/app/pricing/pricing.component.html"),
            styles: [__webpack_require__("./src/app/pricing/pricing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_smart_modal__["b" /* NgxSmartModalService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire_lite__["c" /* AngularFireLiteDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire_lite__["b" /* AngularFireLiteAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire_lite__["d" /* AngularFireLiteFirestore */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
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



var ContactService = (function () {
    function ContactService(http, origin) {
        this.http = http;
        this.contactUrl = 'api/contacts'; // URL to web api
        this.endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/httpEmail';
        this.contactUrl = "" + origin + this.contactUrl;
    }
    ContactService.prototype.getContacts = function () {
        var apiHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        return this.http.get('api/contacts', { headers: apiHeaders });
    };
    ContactService.prototype.addFlaggedPost = function (postId, flaggedPost, authToken) {
        var apiHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        });
        return this.http.post('api/v1/posts/' + postId + '/flag', flaggedPost, { headers: apiHeaders });
    };
    ContactService.prototype.sendKohanEmail = function () {
        var data = {
            toEmail: 'sabina@kohaninc.com',
            toName: 'Sabina Farrugia'
        };
        this.http.post(this.endpoint, data);
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* APP_BASE_HREF */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], String])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/social-media/social-media.component.css":
/***/ (function(module, exports) {

module.exports = ".header-unit {\n  height: 638px;\n  border: none;\n  position: relative;\n  padding: 20px;\n}\n\n#video-container {\n  position: absolute;\n}\n\n#video-container {\n  top:0%;\n  left:0%;\n  height:100%;\n  width:100%;\n  overflow: hidden;\n}\n\nvideo {\n  position:absolute;\n  z-index:0;\n}\n\nvideo.fillWidth {\n  width: 100%;\n}\n\n.color-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(32,26,22,.5);\n  z-index: 99;\n}\n\n.desc-wrapper-container {\n  min-height: 0;\n  padding: 130px 0;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.desc-wrapper {\n  -webkit-animation: feature-text-anim .75s ease-in-out;\n          animation: feature-text-anim .75s ease-in-out;\n  z-index: 100;\n  position: relative;\n  width: 100%;\n  max-width: 956px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 32px;\n  text-align: center;\n  text-rendering: optimizeLegibility;\n}\n\n.desc-smaller-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 28px;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  color: #c3c1c1;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.kohan-header-tagline {\n  display: block;\n  font-weight: 300;\n  font-style: normal;\n  font-size: 58px;\n  letter-spacing: 0px;\n  text-transform: none;\n  line-height: 1.1em;\n  color: #FFFFFF;\n}\n\n.kohan-header-button {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  border: 2px solid #FFFFFF !important;\n  color: #FFFFFF;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1em 1.75em;\n  display: inline-block;\n  line-height: 1em;\n  margin: 10px 0;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  cursor: pointer;\n}\n\n.kohan-header-button:hover {\n  background-color: #FFFFFF;\n  color: #181818;\n  cursor: pointer;\n}\n\n.spacing-section {\n  margin-top: 8%;\n}\n\n.services-spacing-section {\n  margin-top: 8%;\n  margin-bottom: 8%;\n}\n\n.kohan-secondary-statement {\n  text-align: center;\n  font-weight: 300;\n}\n\n.services-image-margins {\n  margin-bottom: 8%;\n}\n\n.service-offering-container {\n  padding-bottom: 20%;\n  padding-top: 20%;\n  padding-left: 17px;\n  padding-right: 17px;\n  position: relative;\n  height: auto;\n  outline: none;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n          box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n  -webkit-transition: -webkit-box-shadow .2s ease-in-out;\n  transition: -webkit-box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out, -webkit-box-shadow .2s ease-in-out;\n}\n\n.service-offerings-content {\n  cursor: auto;\n  outline: none;\n}\n\n.service-offerings-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n}\n\n.link-to-services {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  /* cursor: pointer; */\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.services-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n.work-with-us-modal-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.lighter-font-weight {\n  font-weight: 300;\n}\n\n.sign-up-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 1em 1.75em;\n}\n\n.sign-up-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.button-spacing {\n  margin-top: 5%;\n}\n\n.learn-more-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  margin-top: 10%;\n}\n\n.contact-link {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  cursor: pointer;\n}\n\n.invalid-text {\n  font-weight: 300;\n  color: #dc3545;\n}\n\n.work-with-us-modal-button-disabled {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: not-allowed;\n}\n\n.work-with-us-modal-button-disabled:hover {\n  /* background-color: #000000; */\n  /* color: #EFEFEF; */\n  color: #000000;\n  background-color: #CCCCCC;\n  cursor: not-allowed;\n}\n\n@media only screen and (max-width: 640px) {\n  .desc-wrapper-container {\n    min-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .desc-smaller-text {\n    font-weight: 300;\n    font-style: normal;\n    font-size: 12px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 1.3em;\n    color: #c3c1c1;\n    margin: 10px auto;\n    text-align: center;\n  }\n\n  .kohan-header-tagline {\n    display: block;\n    font-weight: 300;\n    font-style: normal;\n    font-size: 24px;\n    letter-spacing: 0px;\n    text-transform: none;\n    line-height: 1.1em;\n    color: #FFFFFF;\n  }\n\n  .header-unit {\n    height: 375px;\n    border: none;\n    position: relative;\n    padding: 20px;\n  }\n\n  .service-offering-container {\n    padding-top: 10%;\n    padding-bottom: 10%;\n  }\n\n  .kohan-secondary-statement {\n    font-size: 26px;\n  }\n\n  video {\n    position:absolute;\n    top: 80px;\n  }\n\n  .desc-wrapper {\n    padding: 84px 32px 64px 32px;\n  }\n}\n\n@-webkit-keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}\n\n@keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}"

/***/ }),

/***/ "./src/app/social-media/social-media.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-unit\">\n  <div class=\"color-overlay\"></div>\n  <div id=\"video-container\">\n    <video autoplay loop muted playsinline class=\"fillWidth\">\n      <source src=\"https://firebasestorage.googleapis.com/v0/b/wav-studios.appspot.com/o/Ipad%20-%202988.mp4?alt=media&token=b33a1352-94b1-4346-98b0-7a23eef19e74\"\n        type=\"video/mp4\" />\n    </video>\n  </div>\n  <!-- end video-container -->\n\n  <div class=\"desc-wrapper-container\">\n\n    <!-- Work With Us Modal -->\n    <ngx-smart-modal #myModal identifier=\"myModal\">\n      <kohan-work-with-us></kohan-work-with-us>\n    </ngx-smart-modal>\n\n    <!-- Contact Us Modal -->\n    <ngx-smart-modal #contactUsModal identifier=\"contactUsModal\">\n      <kohan-contact-us></kohan-contact-us>\n    </ngx-smart-modal>\n\n    <div class=\"desc-wrapper\">\n      <h1 class=\"kohan-header-tagline\">Social Media Marketing</h1>\n      <p class=\"desc-smaller-text\">Drive Value Through Engagement</p>\n      <div class=\"kohan-header-button\" (click)=\"openWorkWithUsModal()\">Work With Us</div>\n    </div>\n  </div>\n</div>\n<!-- end .header-unit -->\n\n<div class=\"container\">\n  <div class=\"row spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h2 class=\"kohan-secondary-statement\">\n        We help you enhance your carefully constructed patient relationships in a way that extends beyond your office walls.\n      </h2>\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <img src=\"../assets/img/ladder.jpeg\" class=\"img-fluid services-image-margins\">\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Create & Cultivate</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Whether you're starting completely from scratch or are looking for an added boost, we create, maintain, and grow your most vital\n            social media acounts, allowing you to focus on what you do best.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <div class=\"contact-link text-align-center\" (click)=\"openContactUsModal()\">Learn More</div>\n          </h3>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Build a Community</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            From creative posts and crisp videos to engaging polls and interactive digital experiences, we don't just help you connect\n            with your patients - we help you build a lasting community.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <div class=\"contact-link text-align-center\" (click)=\"openContactUsModal()\">Get In Touch</div>\n          </h3>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 order-first order-md-2\">\n      <img src=\"../assets/img/victoria-station-busy-people-victoria-735795.jpeg\" class=\"img-fluid services-image-margins\">\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <img src=\"../assets/img/business_black_white.jpeg\" class=\"img-fluid services-image-margins\">\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Your Brand Ambassadors</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Drawing on the pervasiveness of crowd-sourcing and the \"review economy,\" we employ unique tactics that work towards transforming\n            your patients into your brand ambassadors.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <div class=\"contact-link text-align-center\" (click)=\"openContactUsModal()\">Contact Us</div>\n          </h3>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Bottom tagline -->\n  <div class=\"row services-spacing-section\" id=\"contactUsForm\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-align-center\">\n      <h2 class=\"kohan-secondary-statement\">\n        Build your community and realize your ultimate vision with Kohan Creative.\n      </h2>\n      <div class=\"button-spacing\">\n        <button type=\"button\" class=\"sign-up-button\" (click)=\"openWorkWithUsModal()\">Work With Us</button>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/social-media/social-media.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialMediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire_lite__ = __webpack_require__("./node_modules/angularfire-lite/esm5/angularfire-lite.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_smart_modal__ = __webpack_require__("./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocialMediaComponent = (function () {
    function SocialMediaComponent(router, ngxSmartModalService, db, auth, fireStore, httpClient) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.db = db;
        this.auth = auth;
        this.fireStore = fireStore;
        this.httpClient = httpClient;
        this.endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/httpEmail';
    }
    SocialMediaComponent.prototype.ngOnInit = function () {
        this.message = 'Hello';
    };
    SocialMediaComponent.prototype.navigateToPage = function (route) {
        this.router.navigate([route]);
    };
    SocialMediaComponent.prototype.openWorkWithUsModal = function () {
        window.scrollTo(0, 0);
        this.ngxSmartModalService.getModal('myModal').open();
    };
    SocialMediaComponent.prototype.openContactUsModal = function () {
        window.scrollTo(0, 0);
        this.ngxSmartModalService.getModal('contactUsModal').open();
    };
    SocialMediaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'kohan-social-media',
            template: __webpack_require__("./src/app/social-media/social-media.component.html"),
            styles: [__webpack_require__("./src/app/social-media/social-media.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_smart_modal__["b" /* NgxSmartModalService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire_lite__["c" /* AngularFireLiteDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire_lite__["b" /* AngularFireLiteAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire_lite__["d" /* AngularFireLiteFirestore */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]])
    ], SocialMediaComponent);
    return SocialMediaComponent;
}());



/***/ }),

/***/ "./src/app/web-development/web-development.component.css":
/***/ (function(module, exports) {

module.exports = ".header-unit {\n  height: 638px;\n  border: none;\n  position: relative;\n  padding: 20px;\n}\n\n#video-container {\n  position: absolute;\n}\n\n#video-container {\n  top:0%;\n  left:0%;\n  height:100%;\n  width:100%;\n  overflow: hidden;\n}\n\nvideo {\n  position:absolute;\n  z-index:0;\n}\n\nvideo.fillWidth {\n  width: 100%;\n}\n\n.color-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(32,26,22,.5);\n  z-index: 99;\n}\n\n.desc-wrapper-container {\n  min-height: 0;\n  padding: 130px 0;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.desc-wrapper {\n  -webkit-animation: feature-text-anim .75s ease-in-out;\n          animation: feature-text-anim .75s ease-in-out;\n  z-index: 100;\n  position: relative;\n  width: 100%;\n  max-width: 956px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 32px;\n  text-align: center;\n  text-rendering: optimizeLegibility;\n}\n\n.desc-smaller-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 28px;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  color: #c3c1c1;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.kohan-header-tagline {\n  display: block;\n  font-weight: 300;\n  font-style: normal;\n  font-size: 58px;\n  letter-spacing: 0px;\n  text-transform: none;\n  line-height: 1.1em;\n  color: #FFFFFF;\n}\n\n.kohan-header-button {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  border: 2px solid #FFFFFF !important;\n  color: #FFFFFF;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1em 1.75em;\n  display: inline-block;\n  line-height: 1em;\n  margin: 10px 0;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;  \n  cursor: pointer;\n}\n\n.kohan-header-button:hover {\n  background-color: #FFFFFF;\n  color: #181818;\n  cursor: pointer;\n}\n\n.spacing-section {\n  margin-top: 8%;\n}\n\n.services-spacing-section {\n  margin-top: 8%;\n  margin-bottom: 8%;\n}\n\n.kohan-secondary-statement {\n  text-align: center;\n  font-weight: 300;\n}\n\n.services-image-margins {\n  margin-bottom: 8%;\n}\n\n.service-offering-container {\n  padding-bottom: 16%;\n  padding-top: 16%;\n  padding-left: 17px;\n  padding-right: 17px;\n  position: relative;\n  height: auto;\n  outline: none;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n          box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n  -webkit-transition: -webkit-box-shadow .2s ease-in-out;\n  transition: -webkit-box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out, -webkit-box-shadow .2s ease-in-out;\n}\n\n.service-offerings-content {\n  cursor: auto;\n  outline: none;\n}\n\n.service-offerings-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n}\n\n.link-to-services {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  /* cursor: pointer; */\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.services-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n.work-with-us-modal-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.lighter-font-weight {\n  font-weight: 300;\n}\n\n.sign-up-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 1em 1.75em;\n}\n\n.sign-up-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.button-spacing {\n  margin-top: 5%;\n}\n\n.learn-more-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  margin-top: 10%;\n}\n\n.contact-link {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  cursor: pointer;\n}\n\n.invalid-text {\n  font-weight: 300;\n  color: #dc3545;\n}\n\n.work-with-us-modal-button-disabled {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: not-allowed;\n}\n\n.work-with-us-modal-button-disabled:hover {\n  /* background-color: #000000; */\n  /* color: #EFEFEF; */\n  color: #000000;\n  background-color: #CCCCCC;\n  cursor: not-allowed;\n}\n\n@media only screen and (max-width: 640px) {\n  .desc-wrapper-container {\n    min-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .desc-smaller-text {\n    font-weight: 300;\n    font-style: normal;\n    font-size: 12px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 1.3em;\n    color: #c3c1c1;\n    margin: 10px auto;\n    text-align: center;\n  }\n\n  .kohan-header-tagline {\n    display: block;\n    font-weight: 300;\n    font-style: normal;\n    font-size: 24px;\n    letter-spacing: 0px;\n    text-transform: none;\n    line-height: 1.1em;\n    color: #FFFFFF;\n  }\n\n  .header-unit {\n    height: 375px;\n    border: none;\n    position: relative;\n    padding: 20px;\n  }\n\n  .service-offering-container {\n    padding-top: 10%;\n    padding-bottom: 10%;\n  }\n\n  .kohan-secondary-statement {\n    font-size: 26px;\n  }\n\n  video {\n    position:absolute;\n    top: 80px;\n  }\n\n  .desc-wrapper {\n    padding: 84px 32px 64px 32px;\n  }\n}\n\n@-webkit-keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}\n\n@keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}"

/***/ }),

/***/ "./src/app/web-development/web-development.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-unit\">\n  <div class=\"color-overlay\"></div>\n  <div id=\"video-container\">\n    <video autoplay loop muted playsinline class=\"fillWidth\">\n      <source src=\"https://firebasestorage.googleapis.com/v0/b/wav-studios.appspot.com/o/563397345.mp4?alt=media&token=5c400ba8-c1e2-4864-904e-e5b1d5e15765\"\n        type=\"video/mp4\" />\n    </video>\n  </div>\n  <!-- end video-container -->\n\n  <div class=\"desc-wrapper-container\">\n\n    <!-- Work With Us Modal -->\n    <ngx-smart-modal #myModal identifier=\"myModal\">\n      <kohan-work-with-us></kohan-work-with-us>\n    </ngx-smart-modal>\n\n    <!-- Contact Us Modal -->\n    <ngx-smart-modal #contactUsModal identifier=\"contactUsModal\">\n      <kohan-contact-us></kohan-contact-us>\n    </ngx-smart-modal>\n\n    <div class=\"desc-wrapper\">\n      <h1 class=\"kohan-header-tagline\">Web Design & Development</h1>\n      <p class=\"desc-smaller-text\">Where Our Passions and Expertise Meet</p>\n      <!-- <a class=\"kohan-header-button\" routerLink=\"/home\">Work With Us</a> -->\n      <div class=\"kohan-header-button\" (click)=\"openWorkWithUsModal()\">Work With Us</div>\n    </div>\n  </div>\n</div>\n<!-- end .header-unit -->\n\n<div class=\"container\">\n  <div class=\"row spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h2 class=\"kohan-secondary-statement\">\n        At Kohan Creative, we design beautiful, luxurious websites with high-performance technologies and advanced capabilities to\n        modernize your dental and medical practice.\n      </h2>\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <img src=\"../assets/img/brigher_dental_in_laptop.png\" class=\"img-fluid services-image-margins\">\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Holistic Design & Development</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Similar to how you provide your patients with thorough, holistic dental care in a luxurious, comfortable environment, we\n            design and develop your website with the same intent - embedding your digital property and presence with the\n            same harmonious feel as your physical one.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <div class=\"contact-link text-align-center\" (click)=\"openContactUsModal()\">Learn More</div>\n          </h3>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Built for Maximum Optimization</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            We employ cutting-edge web development practices and frameworks, optimized for search engines and across all mobile devices,\n            to ensure the highest perceived performance and speed with an enhanced user experience to match.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <div class=\"contact-link text-align-center\" (click)=\"openContactUsModal()\">Get In Touch</div>\n          </h3>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 order-first order-md-2\">\n      <img src=\"../assets/img/Endodontic_Desktop.png\" class=\"img-fluid services-image-margins\">\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <img src=\"../assets/img/iphone_example.png\" class=\"img-fluid services-image-margins\">\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Your Digital Dental Office</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Your website is the digital extension of your physical dental office. Therefore, we build your site with a focus on purpose,\n            employing proprietary and third-party technologies that allow you to connect with your patients, process payments,\n            schedule appointments, and more.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <div class=\"contact-link text-align-center\" (click)=\"openContactUsModal()\">Contact Us</div>\n          </h3>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Bottom tagline -->\n  <div class=\"row services-spacing-section\" id=\"contactUsForm\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-align-center\">\n      <h2 class=\"kohan-secondary-statement\">\n        Build a beautiful, high-performing website with Kohan Creative today.\n      </h2>\n      <div class=\"button-spacing\">\n        <button type=\"button\" class=\"sign-up-button\" (click)=\"openWorkWithUsModal()\">Work With Us</button>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/web-development/web-development.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebDevelopmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire_lite__ = __webpack_require__("./node_modules/angularfire-lite/esm5/angularfire-lite.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_smart_modal__ = __webpack_require__("./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebDevelopmentComponent = (function () {
    function WebDevelopmentComponent(router, ngxSmartModalService, db, auth, fireStore, httpClient) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.db = db;
        this.auth = auth;
        this.fireStore = fireStore;
        this.httpClient = httpClient;
        this.endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/httpEmail';
    }
    WebDevelopmentComponent.prototype.ngOnInit = function () {
        this.message = 'Hello';
    };
    WebDevelopmentComponent.prototype.navigateToPage = function (route) {
        this.router.navigate([route]);
    };
    WebDevelopmentComponent.prototype.openContactUsModal = function () {
        window.scrollTo(0, 0);
        this.ngxSmartModalService.getModal('contactUsModal').open();
    };
    WebDevelopmentComponent.prototype.openWorkWithUsModal = function () {
        window.scrollTo(0, 0);
        this.ngxSmartModalService.getModal('myModal').open();
    };
    WebDevelopmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'kohan-web-development',
            template: __webpack_require__("./src/app/web-development/web-development.component.html"),
            styles: [__webpack_require__("./src/app/web-development/web-development.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_smart_modal__["b" /* NgxSmartModalService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire_lite__["c" /* AngularFireLiteDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire_lite__["b" /* AngularFireLiteAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire_lite__["d" /* AngularFireLiteFirestore */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]])
    ], WebDevelopmentComponent);
    return WebDevelopmentComponent;
}());



/***/ }),

/***/ "./src/app/work-with-us/work-with-us.component.css":
/***/ (function(module, exports) {

module.exports = ".work-with-us-modal-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button-disabled {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: not-allowed;\n}\n\n.work-with-us-modal-button-disabled:hover {\n  /* background-color: #000000; */\n  /* color: #EFEFEF; */\n  color: #000000;\n  background-color: #CCCCCC;\n  cursor: not-allowed;\n}\n\n.lighter-font-weight {\n  font-weight: 300;\n}\n\n.invalid-text {\n  font-weight: 300;\n  color: #dc3545;\n}"

/***/ }),

/***/ "./src/app/work-with-us/work-with-us.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 style=\"text-align: center;\">Work with Kohan Creative</h4>\n<form style=\"text-align: left;\" [formGroup]=\"newContactForm\" (ngSubmit)=\"saveContactInformation()\" novalidate>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\" class=\"lighter-font-weight\">Email address *</label>\n    <input type=\"email\" class=\"form-control lighter-font-weight\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\"\n      formControlName=\"email\">\n    <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n    <small *ngIf=\"newContactForm.controls['email'].errors && (newContactForm.controls['email'].dirty || newContactForm.controls['email'].touched)\"\n      class=\"form-text invalid-text\">Please provide your email address!</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\" class=\"lighter-font-weight\">Name of Practice *</label>\n    <input type=\"text\" class=\"form-control lighter-font-weight\" id=\"practiceName\" placeholder=\"Dental or Medical Practice Name\"\n      formControlName=\"practiceName\">\n    <small *ngIf=\"newContactForm.controls['practiceName'].errors && (newContactForm.controls['practiceName'].dirty || newContactForm.controls['practiceName'].touched)\"\n      class=\"form-text invalid-text\">Please provide the name of your practice!</small>\n  </div>\n  <button type=\"submit\" [class.work-with-us-modal-button-disabled]=\"newContactForm.invalid\" class=\"work-with-us-modal-button\"\n    [disabled]=\"newContactForm.invalid\">Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/work-with-us/work-with-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkWithUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_smart_modal__ = __webpack_require__("./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire_lite__ = __webpack_require__("./node_modules/angularfire-lite/esm5/angularfire-lite.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WorkWithUsComponent = (function () {
    function WorkWithUsComponent(router, ngxSmartModalService, db, auth, fireStore, httpClient) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.db = db;
        this.auth = auth;
        this.fireStore = fireStore;
        this.httpClient = httpClient;
        this.newContactForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            practiceName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required)
        });
        this.endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/httpEmail';
    }
    WorkWithUsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = 'Hello';
        this.auth.signinAnonymously();
        this.fireStore.read('contacts').subscribe(function (data) {
            _this.fireStoreData = data;
        });
    };
    WorkWithUsComponent.prototype.saveContactInformation = function () {
        var _this = this;
        var contactInfo = {
            email: this.newContactForm.get('email').value,
            practiceName: this.newContactForm.get('practiceName').value
        };
        this.fireStore.push('contacts', contactInfo).subscribe(function (data) {
            _this.contactData = data;
            console.log(_this.contactData);
            _this.sendEmailToKohan();
            _this.ngxSmartModalService.getModal('myModal').close();
        }, function (error) {
            console.error(error);
            _this.ngxSmartModalService.getModal('myModal').close();
        });
    };
    WorkWithUsComponent.prototype.sendEmailToKohan = function () {
        var apiHeaders = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var signUpInfo = {
            email: this.newContactForm.get('email').value,
            practiceName: this.newContactForm.get('practiceName').value
        };
        var data = {
            toEmail: 'sfarrugia@kohaninc.com',
            toName: 'Sabina Farrugia',
            leadEmailAddress: signUpInfo.email,
            leadPracticeName: signUpInfo.practiceName
        };
        this.httpClient.post(this.endpoint, data, { headers: apiHeaders }).subscribe();
    };
    WorkWithUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'kohan-work-with-us',
            template: __webpack_require__("./src/app/work-with-us/work-with-us.component.html"),
            styles: [__webpack_require__("./src/app/work-with-us/work-with-us.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_smart_modal__["b" /* NgxSmartModalService */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire_lite__["c" /* AngularFireLiteDatabase */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire_lite__["b" /* AngularFireLiteAuth */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire_lite__["d" /* AngularFireLiteFirestore */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]])
    ], WorkWithUsComponent);
    return WorkWithUsComponent;
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
    production: false,
    config: {
        apiKey: "AIzaSyBaRCvNQhZCld2-LW5UgG1Et6Pu5ZCAtIw",
        authDomain: "kohan-creative.firebaseapp.com",
        databaseURL: "https://kohan-creative.firebaseio.com",
        projectId: "kohan-creative",
        storageBucket: "",
        mesagingSenderId: "561699807802"
    }
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




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
});


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map