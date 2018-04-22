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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_smart_modal__ = __webpack_require__("./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__web_development_web_development_component__ = __webpack_require__("./src/app/web-development/web-development.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphic_design_graphic_design_component__ = __webpack_require__("./src/app/graphic-design/graphic-design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__social_media_social_media_component__ = __webpack_require__("./src/app/social-media/social-media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pricing_pricing_component__ = __webpack_require__("./src/app/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nguniversal_common__ = __webpack_require__("./node_modules/@nguniversal/common/esm5/common.es5.js");
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__web_development_web_development_component__["a" /* WebDevelopmentComponent */],
                __WEBPACK_IMPORTED_MODULE_10__graphic_design_graphic_design_component__["a" /* GraphicDesignComponent */],
                __WEBPACK_IMPORTED_MODULE_11__social_media_social_media_component__["a" /* SocialMediaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pricing_pricing_component__["a" /* PricingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'my-app' }),
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_smart_modal__["a" /* NgxSmartModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
                    { path: 'web-design-development', component: __WEBPACK_IMPORTED_MODULE_9__web_development_web_development_component__["a" /* WebDevelopmentComponent */] },
                    { path: 'graphic-design-branding', component: __WEBPACK_IMPORTED_MODULE_10__graphic_design_graphic_design_component__["a" /* GraphicDesignComponent */] },
                    { path: 'social-media-marketing', component: __WEBPACK_IMPORTED_MODULE_11__social_media_social_media_component__["a" /* SocialMediaComponent */] },
                    { path: 'pricing', component: __WEBPACK_IMPORTED_MODULE_13__pricing_pricing_component__["a" /* PricingComponent */] },
                    { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
                    { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule' }
                ]),
                __WEBPACK_IMPORTED_MODULE_14__nguniversal_common__["a" /* TransferHttpCacheModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".social-footer-section {\n  color: #1F1F1F;\n  background-color: #F0F0F0;\n  -webkit-font-smoothing: subpixel-antialiased;\n  padding-top: 3%;\n  padding-bottom: 3%; \n}\n\n.social-footer-inner {\n  -webkit-transition: all .25s ease-in-out .1s;\n  transition: all .25s ease-in-out .1s;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.social-button-padding {\n  padding-left: 2%;\n  padding-right: 2%;\n  cursor: pointer;\n}\n\n.footer-section {\n  color: rgba(255,255,255,.4);\n  background-color: #201a16;\n  -webkit-font-smoothing: antialiased;\n  padding-top: 3%;\n  padding-bottom: 3%;\n}\n\n.powered-by-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  margin-top: 1em;\n}\n\n.link-to-kasuria {\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  cursor: pointer;\n  color: rgba(255,255,255,.4);\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"social-footer-section\">\n  <div class=\"social-footer-inner\">\n    <div class=\"row\">\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\"></div>\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 text-align-center\">\n        <fa name=\"fab fa-instagram\" class=\"social-button-padding\"></fa>\n        <fa name=\"fab fa-facebook-f\" class=\"social-button-padding\"></fa>\n        <fa name=\"fab fa-twitter\" class=\"social-button-padding\"></fa>\n      </div>\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\"></div>\n    </div>\n  </div>\n</div>\n<div class=\"footer-section\">\n  <div class=\"social-footer-inner\">\n    <div class=\"row\">\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\"></div>\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 text-align-center\">\n        <p class=\"powered-by-text\">Powered by <a class=\"link-to-kasuria\" href=\"https://www.kasuriagroup.com\">Kasuria Group</a></p>\n      </div>\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\"></div>\n    </div>\n  </div>\n</div>"

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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/graphic-design/graphic-design.component.css":
/***/ (function(module, exports) {

module.exports = ".header-unit {\n  height: 638px;\n  border: none;\n  position: relative;\n  padding: 20px;\n}\n\n#video-container {\n  position: absolute;\n}\n\n#video-container {\n  top:0%;\n  left:0%;\n  height:100%;\n  width:100%;\n  overflow: hidden;\n}\n\nvideo {\n  position:absolute;\n  z-index:0;\n}\n\nvideo.fillWidth {\n  width: 100%;\n}\n\n.color-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(32,26,22,.5);\n  z-index: 99;\n}\n\n.desc-wrapper-container {\n  min-height: 0;\n  padding: 130px 0;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.desc-wrapper {\n  -webkit-animation: feature-text-anim .75s ease-in-out;\n          animation: feature-text-anim .75s ease-in-out;\n  z-index: 100;\n  position: relative;\n  width: 100%;\n  max-width: 956px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 32px;\n  text-align: center;\n  text-rendering: optimizeLegibility;\n}\n\n.desc-smaller-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 28px;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  color: #c3c1c1;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.kohan-header-tagline {\n  display: block;\n  font-weight: 300;\n  font-style: normal;\n  font-size: 58px;\n  letter-spacing: 0px;\n  text-transform: none;\n  line-height: 1.1em;\n  color: #FFFFFF;\n}\n\n.kohan-header-button {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  border: 2px solid #FFFFFF !important;\n  color: #FFFFFF;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1em 1.75em;\n  display: inline-block;\n  line-height: 1em;\n  margin: 10px 0;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;  \n}\n\n.kohan-header-button:hover {\n  background-color: #FFFFFF;\n  color: #181818;\n}\n\n.spacing-section {\n  margin-top: 8%;\n}\n\n.services-spacing-section {\n  margin-top: 8%;\n  margin-bottom: 8%;\n}\n\n.kohan-secondary-statement {\n  text-align: center;\n  font-weight: 300;\n}\n\n.services-image-margins {\n  margin-bottom: 8%;\n}\n\n.service-offering-container {\n  padding-bottom: 20%;\n  padding-top: 20%;\n  padding-left: 17px;\n  padding-right: 17px;\n  position: relative;\n  height: auto;\n  outline: none;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n          box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n  -webkit-transition: -webkit-box-shadow .2s ease-in-out;\n  transition: -webkit-box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out, -webkit-box-shadow .2s ease-in-out;\n}\n\n.service-offerings-content {\n  cursor: auto;\n  outline: none;\n}\n\n.service-offerings-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n}\n\n.link-to-services {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  /* cursor: pointer; */\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.services-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n@media only screen and (max-width: 640px) {\n  .desc-wrapper-container {\n    min-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .desc-smaller-text {\n    font-weight: 300;\n    font-style: normal;\n    font-size: 18px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 1.3em;\n    color: #c3c1c1;\n    margin: 10px auto;\n    text-align: center;\n  }\n}"

/***/ }),

/***/ "./src/app/graphic-design/graphic-design.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-unit\">\n  <div class=\"color-overlay\"></div>\n  <div id=\"video-container\">\n    <video autoplay loop class=\"fillWidth\">\n      <source src=\"https://firebasestorage.googleapis.com/v0/b/wav-studios.appspot.com/o/Paint%20-%206385.mp4?alt=media&token=5b9f2a64-9350-4aa1-bbf4-c9afb901ff56\"\n        type=\"video/mp4\" />\n    </video>\n  </div>\n  <!-- end video-container -->\n\n  <div class=\"desc-wrapper-container\">\n    <div class=\"desc-wrapper\">\n      <h1 class=\"kohan-header-tagline\">Graphic Design & Branding</h1>\n      <p class=\"desc-smaller-text\">Craft Your Visually Compelling Story</p>\n      <p>\n        <a class=\"kohan-header-button\" routerLink=\"/home\">Work With Us</a>\n      </p>\n    </div>\n  </div>\n</div>\n<!-- end .header-unit -->\n\n<div class=\"container\">\n  <div class=\"row spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h2 class=\"kohan-secondary-statement\">\n        Utilizing a unique set of design principles, philosophies, and technologies, we elevate your brand and shed light on the true value you deliver.\n      </h2>\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <img src=\"../assets/img/composition-3326183_1280_Darker.jpeg\" class=\"img-fluid services-image-margins\">\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Visual Storytelling</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            We work closely with you to get to know the true purpose and story behind your dental practice, with the intent of reimagining your brand and building a foundation that is in harmony with your overall vision.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Purposeful Assets</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Your brand isn't just your logo. From health history and referral forms to appointment and business cards, we create assets specifically tailored to accommodate your growing dental practice's needs.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <img src=\"../assets/img/composition-3326183_1280_Darker.jpeg\" class=\"img-fluid services-image-margins\">\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <img src=\"../assets/img/composition-3326183_1280_Darker.jpeg\" class=\"img-fluid services-image-margins\">\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Lasting Impressions</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            For your dental practice, experience is everything. We extend the comforting, luxurious experience you carefully cultivate by infusing your brand with the same empathy and passion, further strengthening the bond you share with your patients.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/graphic-design/graphic-design.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphicDesignComponent; });
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


var GraphicDesignComponent = (function () {
    function GraphicDesignComponent(router) {
        this.router = router;
    }
    GraphicDesignComponent.prototype.ngOnInit = function () {
        this.message = 'Hello';
    };
    GraphicDesignComponent.prototype.navigateToPage = function (route) {
        this.router.navigate([route]);
    };
    GraphicDesignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'kohan-graphic-design',
            template: __webpack_require__("./src/app/graphic-design/graphic-design.component.html"),
            styles: [__webpack_require__("./src/app/graphic-design/graphic-design.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], GraphicDesignComponent);
    return GraphicDesignComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".header-unit {\n  height: 638px;\n  border: none;\n  position: relative;\n  padding: 20px;\n}\n\n#video-container {\n  position: absolute;\n}\n\n#video-container {\n  top:0%;\n  left:0%;\n  height:100%;\n  width:100%;\n  overflow: hidden;\n}\n\nvideo {\n  position:absolute;\n  z-index:0;\n}\n\nvideo.fillWidth {\n  width: 100%;\n}\n\n.color-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(32,26,22,.5);\n  z-index: 99;\n}\n\n.desc-wrapper-container {\n  min-height: 0;\n  padding: 130px 0;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.desc-wrapper {\n  -webkit-animation: feature-text-anim .75s ease-in-out;\n          animation: feature-text-anim .75s ease-in-out;\n  z-index: 100;\n  position: relative;\n  width: 100%;\n  max-width: 956px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 32px;\n  text-align: center;\n  text-rendering: optimizeLegibility;\n}\n\n.desc-smaller-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 28px;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  color: #c3c1c1;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.kohan-header-tagline {\n  display: block;\n  font-weight: 300;\n  font-style: normal;\n  font-size: 58px;\n  letter-spacing: 0px;\n  text-transform: none;\n  line-height: 1.1em;\n  color: #FFFFFF;\n}\n\n.kohan-header-button {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  border: 2px solid #FFFFFF !important;\n  color: #FFFFFF;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1em 1.75em;\n  display: inline-block;\n  line-height: 1em;\n  margin: 20px 0;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;  \n  cursor: pointer;\n}\n\n.kohan-header-button:hover {\n  background-color: #FFFFFF;\n  color: #181818;\n  cursor: pointer;\n}\n\n.spacing-section {\n  margin-top: 8%;\n}\n\n.services-spacing-section {\n  margin-top: 8%;\n  margin-bottom: 8%;\n}\n\n.kohan-secondary-statement {\n  text-align: center;\n  font-weight: 300;\n}\n\n.services-image-margins {\n  margin-bottom: 8%;\n}\n\n.service-offering-container {\n  padding-bottom: 17px;\n  padding-top: 17px;\n  padding-left: 17px;\n  padding-right: 17px;\n  position: relative;\n  height: auto;\n  outline: none;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n          box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n  -webkit-transition: -webkit-box-shadow .2s ease-in-out;\n  transition: -webkit-box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out, -webkit-box-shadow .2s ease-in-out;\n}\n\n.service-offerings-content {\n  cursor: auto;\n  outline: none;\n}\n\n.service-offerings-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n}\n\n.link-to-services {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  cursor: pointer;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.services-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n.img-cursor {\n  cursor: pointer;\n}\n\n.work-with-us-modal-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.lighter-font-weight {\n  font-weight: 300;\n}\n\n@media only screen and (max-width: 640px) {\n  .desc-wrapper-container {\n    min-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .desc-smaller-text {\n    font-weight: 300;\n    font-style: normal;\n    font-size: 18px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 1.3em;\n    color: #c3c1c1;\n    margin: 10px auto;\n    text-align: center;\n  }\n\n  .kohan-header-tagline {\n    display: block;\n    font-weight: 300;\n    font-style: normal;\n    font-size: 30px;\n    letter-spacing: 0px;\n    text-transform: none;\n    line-height: 1.1em;\n    color: #FFFFFF;\n  }\n\n  .header-unit {\n    height: 375px;\n    border: none;\n    position: relative;\n    padding: 20px;\n  }\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-unit\">\n  <div class=\"color-overlay\"></div>\n  <div id=\"video-container\">\n    <video autoplay loop class=\"fillWidth\">\n      <source src=\"https://firebasestorage.googleapis.com/v0/b/wav-studios.appspot.com/o/Office%20-%207269.mp4?alt=media&token=abee2fc4-a937-4046-9f9b-384708dece22\"\n        type=\"video/mp4\" />\n    </video>\n  </div>\n  <!-- end video-container -->\n\n  <div class=\"desc-wrapper-container\">\n    <div class=\"desc-wrapper\">\n      <p class=\"desc-smaller-text\">Kohan Creative</p>\n      <h1 class=\"kohan-header-tagline\">Luxurious Digital Design for Your Dental & Medical Practice</h1>\n      <!-- <a class=\"kohan-header-button\" routerLink=\"/home\">Work With Us</a> -->\n      <div class=\"kohan-header-button\" (click)=\"ngxSmartModalService.getModal('myModal').open()\">Work With Us</div>\n\n      <!-- Work With Us Modal -->\n      <ngx-smart-modal #myModal identifier=\"myModal\">\n        <h1>Work with Kohan Creative</h1>\n        <form style=\"text-align: left;\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\" class=\"lighter-font-weight\">Email address</label>\n            <input type=\"email\" class=\"form-control lighter-font-weight\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\" class=\"lighter-font-weight\">Name of Practice</label>\n            <input type=\"password\" class=\"form-control lighter-font-weight\" id=\"exampleInputPassword1\" placeholder=\"Dental or Medical Practice Name\">\n          </div>\n          <button type=\"submit\" class=\"work-with-us-modal-button\">Submit</button>\n        </form>\n      </ngx-smart-modal>\n\n    </div>\n  </div>\n</div>\n<!-- end .header-unit -->\n\n<div class=\"container\">\n\n  <!-- Kohan Secondary Tagline -->\n  <div class=\"row spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h2 class=\"kohan-secondary-statement\">\n        Kohan Creative employs the world's best designers, developers, and creators to imbue your private dental and medical practices\n        with digital luxury.\n      </h2>\n    </div>\n  </div>\n\n  <!-- Kohan Service Offerings -->\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-4\">\n      <img src=\"../assets/img/composition-3326183_1280_Darker.jpeg\" class=\"img-fluid services-image-margins img-cursor\" (click)=\"navigateToPage('web-design-development')\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <a routerLink=\"/web-design-development\" class=\"link-to-services text-align-center\">Website Design & Development</a>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            We design and develop custom websites that mirror the aesthetic and warmth of your dental or medical practice, evoking a\n            consistent emotion across your physical and digital properties.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-4\">\n      <img src=\"../assets/img/paper-3146953_1280_darker.jpeg\" class=\"img-fluid services-image-margins img-cursor\" (click)=\"navigateToPage('graphic-design-branding')\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <a routerLink=\"/home\" class=\"link-to-services text-align-center\">Graphic Design & Branding</a>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Whether you're starting your own practice or looking to modernize your current one, we specialize in creating custom logos\n            and brand assets that build on your story and set you apart.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-4\">\n      <img src=\"../assets/img/paper-3318159_1280_darker.jpeg\" class=\"img-fluid services-image-margins img-cursor\" (click)=\"navigateToPage('social-media-marketing')\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <a routerLink=\"/home\" class=\"link-to-services text-align-center\">Social Media Marketing</a>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Extend your brand presence outside the office, at all hours of the day. We engage your patients and anticipate their needs\n            by managing your social accounts with thoughtfulness, attention, and compassion.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Kohan Pricing / Plans -->\n  <!-- <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h2 class=\"kohan-secondary-statement\">\n        Kohan Creative employs the world's best designers, developers, and creators to imbue your private dental and medical practices\n        with digital luxury.\n      </h2>\n    </div>\n  </div> -->\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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



var HomeComponent = (function () {
    // animationStarted(event: AnimationEvent) {
    //   console.warn('Animation started: ', event);
    // }
    // animationDone(event: AnimationEvent) {
    //   console.warn('Animation done: ', event);
    // }
    function HomeComponent(router, ngxSmartModalService) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.message = 'Hello';
    };
    HomeComponent.prototype.navigateToPage = function (route) {
        this.router.navigate([route]);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'kohan-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ngx_smart_modal__["b" /* NgxSmartModalService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".kohan-navbar-background {\n  background-color: #FFFFFF !important;\n}\n\n.kohan-logo {\n  height: auto;\n  max-height: 100px;\n  width: auto;\n  max-width: 150px;\n}\n\n.kohan-header {\n  padding: 0 20px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  line-height: 1em;\n  background-color: #fff;\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: subpixel-antialiased;\n  position: relative;\n}\n\n.kohan-inner-header {\n  padding: 16px 0;\n  display: table;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-animation: header-anim 1s ease-in-out;\n          animation: header-anim 1s ease-in-out;\n}\n\n.kohan-header-nav {\n  text-align: right;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.main-nav-wrapper {\n  position: relative;\n  z-index: 1000;\n}\n\n.work-with-us-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n.services-item-container {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0; \n}\n\n.services-link {\n  font-family: futura-pt, sans-serif;\n  font-weight: 500;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  line-height: 1em;\n  color: #000000;\n  display: block;\n  padding: 1em 1.5em !important;\n}\n\n.services-link-button {\n  font-family: futura-pt, sans-serif;\n  font-weight: 500;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  line-height: 1em;\n  display: block;\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  margin-left: 1em !important;\n  padding: 1em 1.5em !important;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n}\n\n.services-link-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"kohan-header\">\n  <div class=\"kohan-inner-header\">\n    <div class=\"kohan-header-nav\">\n      <nav class=\"navbar navbar-expand-lg navbar-light kohan-navbar-background\">\n        <a class=\"navbar-brand\" routerLink=\"/home\">\n          <img class=\"kohan-logo img-fluid\" src=\"../assets/img/KOHAN-Creative-Logo.png\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav ml-auto\">\n            <li class=\"services-item-container dropdown\">\n              <a class=\"services-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                aria-expanded=\"false\">\n                Services\n              </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                <a class=\"dropdown-item\" routerLink=\"web-design-development\">Web Design & Development</a>\n                <a class=\"dropdown-item\" routerLink=\"graphic-design-branding\">Graphic Design & Branding</a>\n                <!-- <div class=\"dropdown-divider\"></div> -->\n                <a class=\"dropdown-item\" routerLink=\"social-media-marketing\">Social Media Marketing</a>\n              </div>\n            </li>\n            <li class=\"services-item-container\">\n              <a class=\"services-link\" routerLink=\"pricing\">Pricing\n                <span class=\"sr-only\">(current)</span>\n              </a>\n            </li>\n            <li class=\"services-item-container\">\n              <a class=\"services-link\" href=\"#\">About</a>\n            </li>\n            <li class=\"services-item-container\">\n              <a class=\"services-link-button\" href=\"#\">Work With Us</a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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


var NavbarComponent = (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.message = 'Hello';
    };
    NavbarComponent.prototype.navigateHome = function () {
        this.router.navigate(['home']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'kohan-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.component.css":
/***/ (function(module, exports) {

module.exports = ".header-unit {\n  height: 638px;\n  border: none;\n  position: relative;\n  padding: 20px;\n}\n\n#video-container {\n  position: absolute;\n}\n\n#video-container {\n  top:0%;\n  left:0%;\n  height:100%;\n  width:100%;\n  overflow: hidden;\n}\n\nvideo {\n  position:absolute;\n  z-index:0;\n}\n\nvideo.fillWidth {\n  width: 100%;\n}\n\n.color-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(32,26,22,.5);\n  z-index: 99;\n}\n\n.desc-wrapper-container {\n  min-height: 0;\n  padding: 130px 0;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.desc-wrapper {\n  -webkit-animation: feature-text-anim .75s ease-in-out;\n          animation: feature-text-anim .75s ease-in-out;\n  z-index: 100;\n  position: relative;\n  width: 100%;\n  max-width: 956px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 32px;\n  text-align: center;\n  text-rendering: optimizeLegibility;\n}\n\n.desc-smaller-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 28px;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  color: #c3c1c1;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.kohan-header-tagline {\n  display: block;\n  font-weight: 300;\n  font-style: normal;\n  font-size: 58px;\n  letter-spacing: 0px;\n  text-transform: none;\n  line-height: 1.1em;\n  color: #FFFFFF;\n}\n\n.kohan-header-button {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  border: 2px solid #FFFFFF !important;\n  color: #FFFFFF;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1em 1.75em;\n  display: inline-block;\n  line-height: 1em;\n  margin: 20px 0;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;  \n  cursor: pointer;\n}\n\n.kohan-header-button:hover {\n  background-color: #FFFFFF;\n  color: #181818;\n  cursor: pointer;\n}\n\n.spacing-section {\n  margin-top: 8%;\n}\n\n.services-spacing-section {\n  margin-top: 8%;\n  margin-bottom: 8%;\n}\n\n.kohan-secondary-statement {\n  text-align: center;\n  font-weight: 300;\n}\n\n.services-image-margins {\n  margin-bottom: 8%;\n}\n\n.service-offering-container {\n  padding-bottom: 17px;\n  padding-top: 17px;\n  padding-left: 17px;\n  padding-right: 17px;\n  position: relative;\n  height: auto;\n  outline: none;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n          box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n  -webkit-transition: -webkit-box-shadow .2s ease-in-out;\n  transition: -webkit-box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out, -webkit-box-shadow .2s ease-in-out;\n}\n\n.service-offerings-content {\n  cursor: auto;\n  outline: none;\n}\n\n.service-offerings-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n}\n\n.link-to-services {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  cursor: pointer;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.text-align-left {\n  text-align: left;\n}\n\n.services-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n.img-cursor {\n  cursor: pointer;\n}\n\n.work-with-us-modal-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.lighter-font-weight {\n  font-weight: 300;\n}\n\n.red-package {\n  color: rgb(255, 69, 21);\n  /* box-shadow: 0 0.25rem 0.75rem rgb(255, 69, 21) !important; */\n}\n\n.gold-package {\n  color: rgb(255, 214, 38);\n  /* box-shadow: 0 0.25rem 0.75rem rgb(255, 214, 38) !important; */\n}\n\n.black-package {\n  -webkit-box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05) !important;\n          box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05) !important;\n}\n\n.pricing-subsection-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 14px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  line-height: 1.6em;\n  text-align: left;\n}\n\n.package-features-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n.package-features-muted {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 80%;\n  letter-spacing: .5px;\n  line-height: .5em;\n  color: #1F1F1F;\n  margin-top: 10%;\n  text-align: left;\n}\n\n.sign-up-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 1em 1.75em;\n}\n\n.sign-up-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.question-tooltip {\n  cursor: help;\n}\n\n@media only screen and (max-width: 640px) {\n  .desc-wrapper-container {\n    min-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .desc-smaller-text {\n    font-weight: 300;\n    font-style: normal;\n    font-size: 18px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 1.3em;\n    color: #c3c1c1;\n    margin: 10px auto;\n    text-align: center;\n  }\n}"

/***/ }),

/***/ "./src/app/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-unit\">\n  <div class=\"color-overlay\"></div>\n  <div id=\"video-container\">\n    <video autoplay loop class=\"fillWidth\">\n      <source src=\"https://firebasestorage.googleapis.com/v0/b/wav-studios.appspot.com/o/Whiteboard%20-%201658.mp4?alt=media&token=f67b247c-bee6-4f62-a3dc-ce0c6b7dcc77\"\n        type=\"video/mp4\" />\n    </video>\n  </div>\n  <!-- end video-container -->\n\n  <div class=\"desc-wrapper-container\">\n    <div class=\"desc-wrapper\">\n      <p class=\"desc-smaller-text\">Kohan Creative</p>\n      <h1 class=\"kohan-header-tagline\">Packages & Pricing</h1>\n      <div class=\"kohan-header-button\" (click)=\"ngxSmartModalService.getModal('myModal').open()\">Work With Us</div>\n\n      <!-- Work With Us Modal -->\n      <ngx-smart-modal #myModal identifier=\"myModal\">\n        <h1>Work with Kohan Creative</h1>\n        <form style=\"text-align: left;\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\" class=\"lighter-font-weight\">Email address</label>\n            <input type=\"email\" class=\"form-control lighter-font-weight\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\" class=\"lighter-font-weight\">Name of Practice</label>\n            <input type=\"password\" class=\"form-control lighter-font-weight\" id=\"exampleInputPassword1\" placeholder=\"Dental or Medical Practice Name\">\n          </div>\n          <button type=\"submit\" class=\"work-with-us-modal-button\">Submit</button>\n        </form>\n      </ngx-smart-modal>\n\n    </div>\n  </div>\n</div>\n<!-- end .header-unit -->\n\n\n\n<div class=\"container\">\n\n  <!-- Kohan Secondary Tagline -->\n  <div class=\"row spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h2 class=\"kohan-secondary-statement\">\n        At Kohan Creative, we believe in optionality.\n      </h2>\n      <h2 class=\"kohan-secondary-statement\">\n        Choose the package that's right for your dental or medical practice.\n      </h2>\n    </div>\n  </div>\n\n  <!-- Kohan Pricing Packages -->\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-4 text-align-center\">\n      <div class=\"card mb-4 box-shadow\">\n        <div class=\"card-header\">\n          <h4 class=\"my-0 font-weight-normal service-offerings-title red-package\">Red</h4>\n        </div>\n        <div class=\"card-body\">\n          <h1 class=\"card-title pricing-card-title\">$600\n            <small class=\"text-muted\">/ mo</small>\n          </h1>\n          <!-- <h4 class=\"pricing-subsection-title\">Web Design & Dev</h4> -->\n          <ul class=\"list-unstyled mt-3 mb-4 text-align-left\">\n            <li class=\"package-features-paragraph\">Standard monthly web hosting</li>\n            <li class=\"package-features-paragraph\">Mobile optimized site</li>\n            <li class=\"package-features-paragraph\">Pre-designed template</li>\n            <li class=\"package-features-paragraph\">Updated logo with full rights</li>\n          </ul>\n          <button type=\"button\" class=\"sign-up-button\">Sign Up Now</button>\n          <div class=\"package-features-muted\">* Additional $200 flat fee for any site changes</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-4 text-align-center\">\n      <div class=\"card mb-4 box-shadow\">\n        <div class=\"card-header\">\n          <h4 class=\"my-0 font-weight-normal service-offerings-title\">Black</h4>\n        </div>\n        <div class=\"card-body\">\n          <h1 class=\"card-title pricing-card-title\">$1000\n            <small class=\"text-muted\">/ mo</small>\n          </h1>\n          <!-- <h4 class=\"pricing-subsection-title\">Web Design & Dev</h4> -->\n          <ul class=\"list-unstyled mt-3 mb-4 text-align-left\">\n            <li class=\"package-features-paragraph\">Standard monthly web hosting</li>\n            <li class=\"package-features-paragraph\">Mobile optimized site</li>\n            <li class=\"package-features-paragraph\">Complete custom website design and development</li>\n            <li class=\"package-features-paragraph\">Regular monthly maintenance and hosting</li>\n            <li class=\"package-features-paragraph\">Premium services and integrations</li>\n            <li class=\"package-features-paragraph\">Custom logo and suite of brand assets</li>\n          </ul>\n          <button type=\"button\" class=\"sign-up-button\">Sign Up Now</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-4 text-align-center\">\n      <div class=\"card mb-4 box-shadow\">\n        <div class=\"card-header\">\n          <h4 class=\"my-0 font-weight-normal service-offerings-title gold-package\">Gold</h4>\n        </div>\n        <div class=\"card-body\">\n          <h1 class=\"card-title pricing-card-title\">$800\n            <small class=\"text-muted\">/ mo</small>\n          </h1>\n          <!-- <h4 class=\"pricing-subsection-title\">Web Design & Dev</h4> -->\n          <ul class=\"list-unstyled mt-3 mb-4 text-align-left\">\n            <li class=\"package-features-paragraph\">Standard monthly web hosting</li>\n            <li class=\"package-features-paragraph\">Mobile optimized site</li>\n            <li class=\"package-features-paragraph\">Pre-designed template w/ 2 custom options</li>\n            <li class=\"package-features-paragraph\">One site edit per month</li>\n            <li class=\"package-features-paragraph\">Newly designed logo and business cards</li>\n          </ul>\n          <button type=\"button\" class=\"sign-up-button\">Sign Up Now</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- What Each Package Includes -->\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h2 class=\"kohan-secondary-statement\">\n        At Kohan Creative, we believe in optionality.\n      </h2>\n      <h2 class=\"kohan-secondary-statement\">\n        Choose the package that's right for your dental or medical practice.\n      </h2>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
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



var PricingComponent = (function () {
    function PricingComponent(router, ngxSmartModalService) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
    }
    PricingComponent.prototype.ngOnInit = function () {
        this.message = 'Hello';
        this.premiumTooltip = 'Process payments, accept patient forms, build your patient database, schedule appointments, and more!';
        this.brandingTooltip = 'Custom designed business cards, health history forms, referral cards, appointment cards, and more!';
    };
    PricingComponent.prototype.navigateToPage = function (route) {
        this.router.navigate([route]);
    };
    PricingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'kohan-pricing',
            template: __webpack_require__("./src/app/pricing/pricing.component.html"),
            styles: [__webpack_require__("./src/app/pricing/pricing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ngx_smart_modal__["b" /* NgxSmartModalService */]])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/social-media/social-media.component.css":
/***/ (function(module, exports) {

module.exports = ".header-unit {\n  height: 638px;\n  border: none;\n  position: relative;\n  padding: 20px;\n}\n\n#video-container {\n  position: absolute;\n}\n\n#video-container {\n  top:0%;\n  left:0%;\n  height:100%;\n  width:100%;\n  overflow: hidden;\n}\n\nvideo {\n  position:absolute;\n  z-index:0;\n}\n\nvideo.fillWidth {\n  width: 100%;\n}\n\n.color-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(32,26,22,.5);\n  z-index: 99;\n}\n\n.desc-wrapper-container {\n  min-height: 0;\n  padding: 130px 0;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.desc-wrapper {\n  -webkit-animation: feature-text-anim .75s ease-in-out;\n          animation: feature-text-anim .75s ease-in-out;\n  z-index: 100;\n  position: relative;\n  width: 100%;\n  max-width: 956px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 32px;\n  text-align: center;\n  text-rendering: optimizeLegibility;\n}\n\n.desc-smaller-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 28px;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  color: #c3c1c1;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.kohan-header-tagline {\n  display: block;\n  font-weight: 300;\n  font-style: normal;\n  font-size: 58px;\n  letter-spacing: 0px;\n  text-transform: none;\n  line-height: 1.1em;\n  color: #FFFFFF;\n}\n\n.kohan-header-button {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  border: 2px solid #FFFFFF !important;\n  color: #FFFFFF;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1em 1.75em;\n  display: inline-block;\n  line-height: 1em;\n  margin: 10px 0;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;  \n}\n\n.kohan-header-button:hover {\n  background-color: #FFFFFF;\n  color: #181818;\n}\n\n.spacing-section {\n  margin-top: 8%;\n}\n\n.services-spacing-section {\n  margin-top: 8%;\n  margin-bottom: 8%;\n}\n\n.kohan-secondary-statement {\n  text-align: center;\n  font-weight: 300;\n}\n\n.services-image-margins {\n  margin-bottom: 8%;\n}\n\n.service-offering-container {\n  padding-bottom: 20%;\n  padding-top: 20%;\n  padding-left: 17px;\n  padding-right: 17px;\n  position: relative;\n  height: auto;\n  outline: none;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n          box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n  -webkit-transition: -webkit-box-shadow .2s ease-in-out;\n  transition: -webkit-box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out, -webkit-box-shadow .2s ease-in-out;\n}\n\n.service-offerings-content {\n  cursor: auto;\n  outline: none;\n}\n\n.service-offerings-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n}\n\n.link-to-services {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  /* cursor: pointer; */\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.services-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n@media only screen and (max-width: 640px) {\n  .desc-wrapper-container {\n    min-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .desc-smaller-text {\n    font-weight: 300;\n    font-style: normal;\n    font-size: 18px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 1.3em;\n    color: #c3c1c1;\n    margin: 10px auto;\n    text-align: center;\n  }\n}"

/***/ }),

/***/ "./src/app/social-media/social-media.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-unit\">\n  <div class=\"color-overlay\"></div>\n  <div id=\"video-container\">\n    <video autoplay loop class=\"fillWidth\">\n      <source src=\"https://firebasestorage.googleapis.com/v0/b/wav-studios.appspot.com/o/Ipad%20-%202988.mp4?alt=media&token=b33a1352-94b1-4346-98b0-7a23eef19e74\"\n        type=\"video/mp4\" />\n    </video>\n  </div>\n  <!-- end video-container -->\n\n  <div class=\"desc-wrapper-container\">\n    <div class=\"desc-wrapper\">\n      <h1 class=\"kohan-header-tagline\">Social Media Marketing</h1>\n      <p class=\"desc-smaller-text\">Drive Value Through Engagement</p>\n      <p>\n        <a class=\"kohan-header-button\" routerLink=\"/home\">Work With Us</a>\n      </p>\n    </div>\n  </div>\n</div>\n<!-- end .header-unit -->\n\n<div class=\"container\">\n  <div class=\"row spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h2 class=\"kohan-secondary-statement\">\n        We help you enhance your carefully constructed patient relationships in a way that extends beyond your office walls.\n      </h2>\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <img src=\"../assets/img/composition-3326183_1280_Darker.jpeg\" class=\"img-fluid services-image-margins\">\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Create & Cultivate</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Whether you're starting completely from scratch or are looking for an added boost, we create and maintain your most vital\n            social media acounts, allowing you to focus on what you do best.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Build a Community</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            From creative posts and crisp videos to engaging polls and interactive digital experiences, we don't just help you connect\n            with your patients - we help you build a lasting community.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <img src=\"../assets/img/composition-3326183_1280_Darker.jpeg\" class=\"img-fluid services-image-margins\">\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <img src=\"../assets/img/composition-3326183_1280_Darker.jpeg\" class=\"img-fluid services-image-margins\">\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Your Brand Ambassadors</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Drawing on the pervasiveness of crowd-sourcing and the \"review economy,\" we employ unique tactics that work towards transforming\n            your patients into your brand ambassadors.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/social-media/social-media.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialMediaComponent; });
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


var SocialMediaComponent = (function () {
    function SocialMediaComponent(router) {
        this.router = router;
    }
    SocialMediaComponent.prototype.ngOnInit = function () {
        this.message = 'Hello';
    };
    SocialMediaComponent.prototype.navigateToPage = function (route) {
        this.router.navigate([route]);
    };
    SocialMediaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'kohan-social-media',
            template: __webpack_require__("./src/app/social-media/social-media.component.html"),
            styles: [__webpack_require__("./src/app/social-media/social-media.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SocialMediaComponent);
    return SocialMediaComponent;
}());



/***/ }),

/***/ "./src/app/web-development/web-development.component.css":
/***/ (function(module, exports) {

module.exports = ".header-unit {\n  height: 638px;\n  border: none;\n  position: relative;\n  padding: 20px;\n}\n\n#video-container {\n  position: absolute;\n}\n\n#video-container {\n  top:0%;\n  left:0%;\n  height:100%;\n  width:100%;\n  overflow: hidden;\n}\n\nvideo {\n  position:absolute;\n  z-index:0;\n}\n\nvideo.fillWidth {\n  width: 100%;\n}\n\n.color-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(32,26,22,.5);\n  z-index: 99;\n}\n\n.desc-wrapper-container {\n  min-height: 0;\n  padding: 130px 0;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.desc-wrapper {\n  -webkit-animation: feature-text-anim .75s ease-in-out;\n          animation: feature-text-anim .75s ease-in-out;\n  z-index: 100;\n  position: relative;\n  width: 100%;\n  max-width: 956px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 32px;\n  text-align: center;\n  text-rendering: optimizeLegibility;\n}\n\n.desc-smaller-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 28px;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  color: #c3c1c1;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.kohan-header-tagline {\n  display: block;\n  font-weight: 300;\n  font-style: normal;\n  font-size: 58px;\n  letter-spacing: 0px;\n  text-transform: none;\n  line-height: 1.1em;\n  color: #FFFFFF;\n}\n\n.kohan-header-button {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  border: 2px solid #FFFFFF !important;\n  color: #FFFFFF;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1em 1.75em;\n  display: inline-block;\n  line-height: 1em;\n  margin: 10px 0;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;  \n}\n\n.kohan-header-button:hover {\n  background-color: #FFFFFF;\n  color: #181818;\n}\n\n.spacing-section {\n  margin-top: 8%;\n}\n\n.services-spacing-section {\n  margin-top: 8%;\n  margin-bottom: 8%;\n}\n\n.kohan-secondary-statement {\n  text-align: center;\n  font-weight: 300;\n}\n\n.services-image-margins {\n  margin-bottom: 8%;\n}\n\n.service-offering-container {\n  padding-bottom: 20%;\n  padding-top: 20%;\n  padding-left: 17px;\n  padding-right: 17px;\n  position: relative;\n  height: auto;\n  outline: none;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n          box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n  -webkit-transition: -webkit-box-shadow .2s ease-in-out;\n  transition: -webkit-box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out, -webkit-box-shadow .2s ease-in-out;\n}\n\n.service-offerings-content {\n  cursor: auto;\n  outline: none;\n}\n\n.service-offerings-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n}\n\n.link-to-services {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  /* cursor: pointer; */\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.services-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n@media only screen and (max-width: 640px) {\n  .desc-wrapper-container {\n    min-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .desc-smaller-text {\n    font-weight: 300;\n    font-style: normal;\n    font-size: 18px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 1.3em;\n    color: #c3c1c1;\n    margin: 10px auto;\n    text-align: center;\n  }\n}"

/***/ }),

/***/ "./src/app/web-development/web-development.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-unit\">\n  <div class=\"color-overlay\"></div>\n  <div id=\"video-container\">\n    <video autoplay loop class=\"fillWidth\">\n      <source src=\"https://firebasestorage.googleapis.com/v0/b/wav-studios.appspot.com/o/563397345.mp4?alt=media&token=5c400ba8-c1e2-4864-904e-e5b1d5e15765\"\n        type=\"video/mp4\" />\n    </video>\n  </div>\n  <!-- end video-container -->\n\n  <div class=\"desc-wrapper-container\">\n    <div class=\"desc-wrapper\">\n      <h1 class=\"kohan-header-tagline\">Web Design & Development</h1>\n      <p class=\"desc-smaller-text\">Where Our Passions and Expertise Meet</p>\n      <!-- <a class=\"kohan-header-button\" routerLink=\"/home\">Work With Us</a> -->\n      <div class=\"kohan-header-button\" (click)=\"ngxSmartModalService.getModal('myModal').open()\">Work With Us</div>\n\n      <!-- Work With Us Modal -->\n      <ngx-smart-modal #myModal identifier=\"myModal\">\n        <h1>Work with Kohan Creative</h1>\n        <form style=\"text-align: left;\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\" class=\"lighter-font-weight\">Email address</label>\n            <input type=\"email\" class=\"form-control lighter-font-weight\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\" class=\"lighter-font-weight\">Name of Practice</label>\n            <input type=\"password\" class=\"form-control lighter-font-weight\" id=\"exampleInputPassword1\" placeholder=\"Dental or Medical Practice Name\">\n          </div>\n          <button type=\"submit\" class=\"work-with-us-modal-button\">Submit</button>\n        </form>\n      </ngx-smart-modal>\n\n    </div>\n  </div>\n</div>\n<!-- end .header-unit -->\n\n<div class=\"container\">\n  <div class=\"row spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h2 class=\"kohan-secondary-statement\">\n        At Kohan Creative, we design beautiful, luxurious websites with high-performance technologies and advanced capabilities to modernize your dental and medical practice.\n      </h2>\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <img src=\"../assets/img/composition-3326183_1280_Darker.jpeg\" class=\"img-fluid services-image-margins\">\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Holistic Design & Development</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Similar to how you provide your patients with thorough, holistic dental care in a luxurious, comfortable environment, we design and develop your website with the same intent - embedding your digital property and presence with the same harmonious feel as your physical one.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Built for Maximum Optimization</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            We employ cutting-edge web development practices and frameworks, optimized for search engines and across all mobile devices, to ensure the highest perceived performance and speed with an enhanced user experience to match.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <img src=\"../assets/img/composition-3326183_1280_Darker.jpeg\" class=\"img-fluid services-image-margins\">\n    </div>\n  </div>\n  <div class=\"row services-spacing-section\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <img src=\"../assets/img/composition-3326183_1280_Darker.jpeg\" class=\"img-fluid services-image-margins\">\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\n      <div class=\"service-offering-container\">\n        <div class=\"service-offerings-content\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Your Digital Dental Office</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Your website is the digital extension of your physical dental office. Therefore, we build your site with a focus on purpose, employing proprietary and third-party technologies that allow you to connect with your patients, process payments, schedule appointments, and more.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/web-development/web-development.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebDevelopmentComponent; });
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



var WebDevelopmentComponent = (function () {
    function WebDevelopmentComponent(router, ngxSmartModalService) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
    }
    WebDevelopmentComponent.prototype.ngOnInit = function () {
        this.message = 'Hello';
    };
    WebDevelopmentComponent.prototype.navigateToPage = function (route) {
        this.router.navigate([route]);
    };
    WebDevelopmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'kohan-web-development',
            template: __webpack_require__("./src/app/web-development/web-development.component.html"),
            styles: [__webpack_require__("./src/app/web-development/web-development.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ngx_smart_modal__["b" /* NgxSmartModalService */]])
    ], WebDevelopmentComponent);
    return WebDevelopmentComponent;
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




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
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