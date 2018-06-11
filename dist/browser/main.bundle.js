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

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".desc-wrapper-container {\n  min-height: 0;\n  /* padding: 130px 0; */\n  padding: 0px 0px 60px 0px;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.desc-wrapper {\n  -webkit-animation: feature-text-anim .75s ease-in-out;\n          animation: feature-text-anim .75s ease-in-out;\n  z-index: 100;\n  position: relative;\n  width: 100%;\n  max-width: 956px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 32px;\n  text-align: center;\n  text-rendering: optimizeLegibility;\n}\n\n.desc-smaller-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 28px;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  color: #c3c1c1;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.kohan-header-tagline {\n  display: block;\n  font-weight: 300;\n  font-style: normal;\n  font-size: 58px;\n  letter-spacing: 0px;\n  text-transform: none;\n  line-height: 1.1em;\n  color: #FFFFFF;\n}\n\n.kohan-header-button {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  border: 2px solid #FFFFFF !important;\n  color: #FFFFFF;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1em 1.75em;\n  display: inline-block;\n  line-height: 1em;\n  margin: 20px 0;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;  \n  cursor: pointer;\n}\n\n.kohan-header-button:hover {\n  background-color: #FFFFFF;\n  color: #181818;\n  cursor: pointer;\n}\n\n.spacing-section {\n  margin-top: 8%;\n}\n\n.kohan-secondary-statement {\n  text-align: left;\n  font-weight: 300;\n  font-size: 24px;\n  /* color: #FFFFFF; */\n  color: rgba(31,31,31,.5);\n}\n\n.services-image-margins {\n  margin-bottom: 8%;\n}\n\n.service-offering-container {\n  padding-bottom: 17px;\n  padding-top: 17px;\n  padding-left: 17px;\n  padding-right: 17px;\n  position: relative;\n  height: auto;\n  outline: none;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n          box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n  -webkit-transition: -webkit-box-shadow .2s ease-in-out;\n  transition: -webkit-box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out, -webkit-box-shadow .2s ease-in-out;\n}\n\n.service-offerings-content {\n  cursor: auto;\n  outline: none;\n}\n\n.service-offerings-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n}\n\n.link-to-services {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  cursor: pointer;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.services-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n.img-cursor {\n  cursor: pointer;\n}\n\n.work-with-us-modal-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button-disabled {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: not-allowed;\n}\n\n.work-with-us-modal-button-disabled:hover {\n  /* background-color: #000000; */\n  /* color: #EFEFEF; */\n  color: #000000;\n  background-color: #CCCCCC;\n  cursor: not-allowed;\n}\n\n.lighter-font-weight {\n  font-weight: 300;\n}\n\n.learn-more-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  margin-top: 10%;\n}\n\n.hover-shadow:hover {\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\n}\n\n.about-us-background {\n  /* background: url('../../assets/img/about_background.png') no-repeat center center; */\n  /* background: url('../../assets/img/about_background.png') no-repeat; */\n  background: url('https://firebasestorage.googleapis.com/v0/b/kohan-creative.appspot.com/o/about_background.png?alt=media&token=863bc74a-5dbe-4df9-aeb2-c2c0fe7334cd') no-repeat;\n  /* background-size: 100vh; */\n  /* background-size: 100%; */\n  background-size: cover;\n  background-position: 30% 60%;\n  /* padding: 10%; */\n  text-align: center;\n  background-color: #e4e0dc;\n}\n\n.sign-up-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 1em 1.75em;\n}\n\n.sign-up-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.button-spacing {\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.invalid-text {\n  font-weight: 300;\n  color: #dc3545;\n}\n\n@media only screen and (max-width: 640px) {\n  .desc-wrapper-container {\n    min-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .desc-smaller-text {\n    font-weight: 300;\n    font-style: normal;\n    font-size: 18px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 1.3em;\n    color: #c3c1c1;\n    margin: 10px auto;\n    text-align: center;\n  }\n\n  .kohan-header-tagline {\n    display: block;\n    font-weight: 300;\n    font-style: normal;\n    font-size: 30px;\n    letter-spacing: 0px;\n    text-transform: none;\n    line-height: 1.1em;\n    color: #FFFFFF;\n  }\n\n  .kohan-secondary-statement {\n    /* font-size: 26px; */\n    font-size: 16px;\n    /* color: #FFFFFF; */\n    color: rgba(31,31,31,.5);\n  }\n\n  .button-spacing {\n    margin-top: 10%;\n    margin-bottom: 5%;\n  }\n\n  .about-us-background {\n    background-position: 30% 90%;\n  }\n}\n\n@-webkit-keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}\n\n@keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header-unit\"></div>\n<kohan-navbar></kohan-navbar>\n\n<section class=\"full-individual-section\">\n  <!-- <div class=\"header-unit\"> -->\n  <!-- <div class=\"color-overlay\"></div> -->\n  <div id=\"video-container\">\n    <video autoplay loop muted playsinline class=\"fillWidth\" style=\"object-fit: cover;\">\n      <source src=\"https://firebasestorage.googleapis.com/v0/b/kohan-creative.appspot.com/o/City%20-%203249.mp4?alt=media&token=04841c9c-82dd-4ce5-92d4-c74feeeeabcb\"\n        type=\"video/mp4\" />\n    </video>\n  </div>\n  <!-- end video-container -->\n\n  <!-- <div class=\"desc-wrapper-container\"> -->\n\n  <!-- Work With Us Modal -->\n  <ngx-smart-modal #myModal identifier=\"myModal\" customClass=\"nsm-dialog-animation-btt\">\n    <kohan-work-with-us></kohan-work-with-us>\n  </ngx-smart-modal>\n\n  <div class=\"outer\">\n    <div class=\"middle\">\n      <div class=\"inner\">\n        <!-- <p class=\"desc-smaller-text text-align-center\">Kohan Creative</p> -->\n        <h1 class=\"kohan-header-tagline text-align-center\">Who We Are</h1>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"scroll-down-header-arrow-container scroll-down-arrow-center hide-on-mobile\">\n    <div class=\"text-align-center\">\n      <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('tagline')\">\n        <fa name=\"chevron-down\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('tagline')\"></fa>\n      </div>\n    </div>\n  </div>\n\n  <!-- <div class=\"desc-wrapper\">\n        <p class=\"desc-smaller-text\">Kohan Creative</p>\n        <h1 class=\"kohan-header-tagline\">Who We Are</h1> -->\n  <!-- <a class=\"kohan-header-button\" routerLink=\"/home\">Work With Us</a> -->\n  <!-- <div class=\"kohan-header-button\" (click)=\"openWorkWithUsModal()\">Get Started Now</div> -->\n  <!-- </div> -->\n\n  <!-- <div class=\"scroll-down-container container\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-align-center\">\n            <div class=\"kohan-header-more-link\" (click)=\"scrollToPageSection('who-we-are')\">More</div>\n            <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('who-we-are')\">\n              <fa name=\"chevron-down\" class=\"scroll-down-animation\" style=\"color: #FFFFFF;\"></fa>\n            </div>\n          </div>\n        </div>\n      </div> -->\n  <!-- </div> -->\n  <!-- </div> -->\n  <!-- end .header-unit -->\n</section>\n\n<div class=\"about-us-background\">\n  <!-- <particles [params]=\"myParams\" [style]=\"myStyle\" [width]=\"width\" [height]=\"height\"></particles> -->\n  <div class=\"container\">\n    <section id=\"tagline\" class=\"full-individual-section\">\n      <!-- <div class=\"sphere-scene\">\n        <div class=\"sphere-wrapper\">\n          <div class=\"ball\">\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n          </div>\n        </div>\n      </div> -->\n      <div class=\"row align-items-center align-content-center\">\n        <!-- <div class=\"col-lg-1\"></div> -->\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\">\n          <img src=\"../../assets/img/about_text.png\" class=\"img-fluid\">\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 py-2\" [class.slide-in-elliptic-bottom-fwd]=\"pageSection == 'tagline'\">\n          <h2 class=\"kohan-secondary-statement py-2\">\n            Born from the <a class=\"link-to-services\" href=\"http://kohaninc.com/\" target=\"_blank\">KOHAN Group</a>, a leader in healthcare and dental specialty office design, KOHAN Creative is comprised of a group of young programmers, designers, and arists who came together from their prospective fields for the sole purpose of producting trend-forward, enticing, and beautiful websites, marketing material, and full branding assets for the Dental Community.\n          </h2>\n          <h2 class=\"kohan-secondary-statement py-2\">\n            Dedicated to a fresh take on the industry, we provide a comprehensive suite of services, starting the moment you have a grander vision of your Dental Practice. From branding to building your website and digital presence, we offer a unique set of services tailored specifically to the Dental industry.\n          </h2>\n          <div class=\"button-spacing text-align-center\">\n            <button type=\"button\" class=\"sign-up-button\" (click)=\"openWorkWithUsModal()\">Get Started Now</button>\n          </div>\n        </div>\n        <!-- <div class=\"col-lg-1\"></div> -->\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-align-center hide-on-mobile\">\n          <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('header-unit')\">\n            <fa name=\"chevron-up\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('header-unit')\"></fa>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- <section id=\"who-we-are\" class=\"full-individual-section\">\n      <div class=\"row align-items-center align-content-center\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n          <h2 class=\"kohan-secondary-statement\">\n            We provide a comprehensive suite of services, starting the moment you have a grander vision of your dental practice.\n            <br>\n            <br>From architectural and interior design, to construction, to building your website and digital presence, we offer\n            a unique set of services tailored specifically to the dental industry.\n          </h2>\n          <div class=\"button-spacing text-align-center\">\n            <button type=\"button\" class=\"sign-up-button\" (click)=\"openWorkWithUsModal()\">Get Started Now</button>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-align-center hide-on-mobile\">\n          <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('header-unit')\">\n            <fa name=\"chevron-up\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('header-unit')\"></fa>\n          </div>\n        </div>\n      </div>\n    </section> -->\n    <!-- <section id=\"sphere-animation\" class=\"full-individual-section\">\n      <div class=\"sphere-scene\">\n        <div class=\"sphere-wrapper\">\n          <div class=\"ball\">\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n            <div class=\"ring\"></div>\n          </div>\n        </div>\n      </div>\n    </section> -->\n  </div>\n  <kohan-footer></kohan-footer>\n</div>\n<!-- <particles [params]=\"myParams\" [style]=\"myStyle\" [width]=\"width\" [height]=\"height\"></particles> -->"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_smart_modal__ = __webpack_require__("./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire_lite__ = __webpack_require__("./node_modules/angularfire-lite/esm5/angularfire-lite.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_scroll_service__ = __webpack_require__("./src/app/services/scroll.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_window_service__ = __webpack_require__("./src/app/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_three__ = __webpack_require__("./node_modules/three/build/three.module.js");
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








var AboutUsComponent = (function () {
    function AboutUsComponent(router, ngxSmartModalService, db, auth, fireStore, httpClient, scrollService, window) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.db = db;
        this.auth = auth;
        this.fireStore = fireStore;
        this.httpClient = httpClient;
        this.scrollService = scrollService;
        this.window = window;
        this.endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/httpEmail';
        // particles variables
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.document = window.document;
        this.message = 'Hello';
        this.auth.signinAnonymously();
        this.fireStore.read('contacts').subscribe(function (data) {
            _this.fireStoreData = data;
        });
        console.log(window);
        // this.configureParticles();
        // this.initializeSmoke();
    };
    AboutUsComponent.prototype.navigateToPage = function (route) {
        this.router.navigate([route]);
    };
    AboutUsComponent.prototype.openWorkWithUsModal = function () {
        window.scrollTo(0, 0);
        this.ngxSmartModalService.getModal('myModal').open();
    };
    AboutUsComponent.prototype.scrollToPageSection = function (target) {
        this.pageSection = target;
        this.scrollService.triggerScrollTo(target);
        // this.scrollService.triggerScrollToWithSpeed(target);
    };
    AboutUsComponent.prototype.configureParticles = function () {
        this.myStyle = {
            'position': "absolute",
            "width": '100%',
            'height': "100vh",
        };
        this.myParams = {
            particles: {
                number: {
                    value: 200,
                },
                color: {
                    value: '#20bad2'
                },
                shape: {
                    type: 'circle',
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#0574ac",
                    opacity: 0.4,
                    width: 1
                },
            }
        };
    };
    AboutUsComponent.prototype.initializeSmoke = function () {
        this.renderer = new __WEBPACK_IMPORTED_MODULE_7_three__["k" /* WebGLRenderer */]({ alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.scene = new __WEBPACK_IMPORTED_MODULE_7_three__["j" /* Scene */]();
        this.camera = new __WEBPACK_IMPORTED_MODULE_7_three__["h" /* PerspectiveCamera */](75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;
        this.scene.add(this.camera);
        this.geometry = new __WEBPACK_IMPORTED_MODULE_7_three__["c" /* CubeGeometry */](200, 200, 200);
        this.material = new __WEBPACK_IMPORTED_MODULE_7_three__["g" /* MeshLambertMaterial */]({
            // color: 0xaa6666,
            color: 0xFFFFFF,
            wireframe: false
        });
        this.mesh = new __WEBPACK_IMPORTED_MODULE_7_three__["f" /* Mesh */](this.geometry, this.material);
        this.cubeSineDriver = 0;
        var textGeo = new __WEBPACK_IMPORTED_MODULE_7_three__["i" /* PlaneGeometry */](300, 300);
        __WEBPACK_IMPORTED_MODULE_7_three__["e" /* ImageUtils */].crossOrigin = '';
        var textTexture = __WEBPACK_IMPORTED_MODULE_7_three__["e" /* ImageUtils */].loadTexture('../../assets/img/about_text.png');
        // var textTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/quickText.png');
        // var textTexture = THREE.ImageUtils.loadTexture('https://firebasestorage.googleapis.com/v0/b/kohan-creative.appspot.com/o/about_background.png?alt=media&token=863bc74a-5dbe-4df9-aeb2-c2c0fe7334cd');
        var textMaterial = new __WEBPACK_IMPORTED_MODULE_7_three__["g" /* MeshLambertMaterial */]({
            color: 0x00ffff,
            opacity: 1,
            map: textTexture,
            transparent: true,
            blending: __WEBPACK_IMPORTED_MODULE_7_three__["a" /* AdditiveBlending */]
        });
        var text = new __WEBPACK_IMPORTED_MODULE_7_three__["f" /* Mesh */](textGeo, textMaterial);
        text.position.z = 800;
        // this.scene.add(text);
        this.light = new __WEBPACK_IMPORTED_MODULE_7_three__["d" /* DirectionalLight */](0xffffff, 0.5);
        this.light.position.set(-1, 0, 1);
        this.scene.add(this.light);
        var smokeTexture = __WEBPACK_IMPORTED_MODULE_7_three__["e" /* ImageUtils */].loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
        var smokeMaterial = new __WEBPACK_IMPORTED_MODULE_7_three__["g" /* MeshLambertMaterial */]({
            color: 0x00dddd,
            map: smokeTexture,
            transparent: true
        });
        var smokeGeo = new __WEBPACK_IMPORTED_MODULE_7_three__["i" /* PlaneGeometry */](300, 300);
        this.smokeParticles = [];
        for (var p = 0; p < 150; p++) {
            var particle = new __WEBPACK_IMPORTED_MODULE_7_three__["f" /* Mesh */](smokeGeo, smokeMaterial);
            particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
            particle.rotation.z = Math.random() * 360;
            this.scene.add(particle);
            this.smokeParticles.push(particle);
        }
        this.document.body.appendChild(this.renderer.domElement);
        // this.document.getElementById('tagline').appendChild(this.renderer.domElement);
        this.animate();
    };
    AboutUsComponent.prototype.animate = function () {
        var _this = this;
        window.requestAnimationFrame(function () { return _this.animate(); });
        this.evolveSmoke();
        this.render();
    };
    AboutUsComponent.prototype.evolveSmoke = function () {
        var sp = this.smokeParticles.length;
        var delta = new __WEBPACK_IMPORTED_MODULE_7_three__["b" /* Clock */]();
        while (sp--) {
            // this.smokeParticles[sp].rotation.z += (delta.getDelta() * 0.2);
            this.smokeParticles[sp].rotation.z += (delta.getDelta() * 0.8);
        }
    };
    AboutUsComponent.prototype.render = function () {
        this.mesh.rotation.x += 0.05;
        this.mesh.rotation.y += 0.01;
        this.cubeSineDriver += 0.01;
        this.mesh.rotation.z = 100 + (Math.sin(this.cubeSineDriver) * 500);
        this.renderer.render(this.scene, this.camera);
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'kohan-about-us',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__services_window_service__["a" /* WINDOW */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_smart_modal__["b" /* NgxSmartModalService */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire_lite__["c" /* AngularFireLiteDatabase */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire_lite__["b" /* AngularFireLiteAuth */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire_lite__["d" /* AngularFireLiteFirestore */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__services_scroll_service__["a" /* ScrollService */],
            Window])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <kohan-navbar></kohan-navbar> -->\n<router-outlet></router-outlet>\n<!-- <kohan-footer></kohan-footer> -->"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_particle__ = __webpack_require__("./node_modules/angular-particle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__web_development_web_development_component__ = __webpack_require__("./src/app/web-development/web-development.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__graphic_design_graphic_design_component__ = __webpack_require__("./src/app/graphic-design/graphic-design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__social_media_social_media_component__ = __webpack_require__("./src/app/social-media/social-media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pricing_pricing_component__ = __webpack_require__("./src/app/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__work_with_us_work_with_us_component__ = __webpack_require__("./src/app/work-with-us/work-with-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_contact_service__ = __webpack_require__("./src/app/services/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_sharing_service__ = __webpack_require__("./src/app/services/sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_scroll_service__ = __webpack_require__("./src/app/services/scroll.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_window_service__ = __webpack_require__("./src/app/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__nguniversal_common__ = __webpack_require__("./node_modules/@nguniversal/common/esm5/common.es5.js");
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
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__web_development_web_development_component__["a" /* WebDevelopmentComponent */],
                __WEBPACK_IMPORTED_MODULE_16__graphic_design_graphic_design_component__["a" /* GraphicDesignComponent */],
                __WEBPACK_IMPORTED_MODULE_17__social_media_social_media_component__["a" /* SocialMediaComponent */],
                __WEBPACK_IMPORTED_MODULE_18__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pricing_pricing_component__["a" /* PricingComponent */],
                __WEBPACK_IMPORTED_MODULE_20__contact_contact_component__["a" /* ContactUsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__work_with_us_work_with_us_component__["a" /* WorkWithUsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__about_about_component__["a" /* AboutUsComponent */]
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
                __WEBPACK_IMPORTED_MODULE_10__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_angular_particle__["a" /* ParticlesModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */] },
                    { path: 'web-design-development', component: __WEBPACK_IMPORTED_MODULE_15__web_development_web_development_component__["a" /* WebDevelopmentComponent */] },
                    { path: 'graphic-design-branding', component: __WEBPACK_IMPORTED_MODULE_16__graphic_design_graphic_design_component__["a" /* GraphicDesignComponent */] },
                    { path: 'social-media-marketing', component: __WEBPACK_IMPORTED_MODULE_17__social_media_social_media_component__["a" /* SocialMediaComponent */] },
                    { path: 'packages', component: __WEBPACK_IMPORTED_MODULE_19__pricing_pricing_component__["a" /* PricingComponent */] },
                    { path: 'about-us', component: __WEBPACK_IMPORTED_MODULE_22__about_about_component__["a" /* AboutUsComponent */] },
                    { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
                    { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule' }
                ]),
                __WEBPACK_IMPORTED_MODULE_27__nguniversal_common__["a" /* TransferHttpCacheModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__services_contact_service__["a" /* ContactService */],
                __WEBPACK_IMPORTED_MODULE_24__services_sharing_service__["a" /* SharingService */],
                __WEBPACK_IMPORTED_MODULE_25__services_scroll_service__["a" /* ScrollService */],
                __WEBPACK_IMPORTED_MODULE_26__services_window_service__["b" /* WINDOW_PROVIDERS */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ".work-with-us-modal-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.lighter-font-weight {\n  font-weight: 300;\n}\n\n.invalid-text {\n  font-weight: 300;\n  color: #dc3545;\n}\n\n.work-with-us-modal-button-disabled {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: not-allowed;\n}\n\n.work-with-us-modal-button-disabled:hover {\n  /* background-color: #000000; */\n  /* color: #EFEFEF; */\n  color: #000000;\n  background-color: #CCCCCC;\n  cursor: not-allowed;\n}\n\n.stripes-background {\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  display: -ms-grid;\n  display: grid;\n  -webkit-transform: skewY(-12deg);\n  transform: skewY(-12deg);\n  top: 0;\n  grid: repeat(4,100px)/repeat(10,1fr);\n  -webkit-transform-origin: 0;\n  transform-origin: 0;\n  background: -webkit-gradient(linear,left top, left bottom,from(#507eb1),color-stop(10%, #709dc7),color-stop(38%, #dde9f5),color-stop(48%, #eaf2f9),color-stop(62%, #f6f9fc));\n  background: linear-gradient(#507eb1,#709dc7 10%,#dde9f5 38%,#eaf2f9 48%,#f6f9fc 62%);\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-align-center\">\n    <img class=\"img-fluid kohan-logo\" src=\"../assets/img/KOHAN-Creative-Logo.png\">\n  </div>\n  <form *ngIf=\"!submitted\" [formGroup]=\"contactUsForm\" (ngSubmit)=\"saveContactInformation()\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"firstName\" class=\"lighter-font-weight\">First Name *</label>\n        <input type=\"text\" class=\"form-control lighter-font-weight\" id=\"firstName\" placeholder=\"First Name\" formControlName=\"firstName\">\n        <small *ngIf=\"contactUsForm.controls['firstName'].errors && (contactUsForm.controls['firstName'].dirty || contactUsForm.controls['firstName'].touched)\"\n          class=\"form-text invalid-text\">Please enter your first name.</small>\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"lastName\" class=\"lighter-font-weight\">Last Name *</label>\n        <input type=\"text\" class=\"form-control lighter-font-weight\" id=\"lastName\" placeholder=\"Last Name\" formControlName=\"lastName\">\n        <small *ngIf=\"contactUsForm.controls['lastName'].errors && (contactUsForm.controls['lastName'].dirty || contactUsForm.controls['lastName'].touched)\"\n          class=\"form-text invalid-text\">Please enter your last name.</small>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"exampleInputEmail1\" class=\"lighter-font-weight\">Email address *</label>\n        <input type=\"email\" class=\"form-control lighter-font-weight\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Email Address\"\n          formControlName=\"email\">\n        <small *ngIf=\"contactUsForm.controls['email'].errors && (contactUsForm.controls['email'].dirty || contactUsForm.controls['email'].touched)\"\n          class=\"form-text invalid-text\">Please enter your email address.</small>\n        <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"practiceName\" class=\"lighter-font-weight\">Name of Practice *</label>\n        <input type=\"text\" class=\"form-control lighter-font-weight\" id=\"practiceName\" placeholder=\"Dental or Medical Practice\" formControlName=\"practiceName\">\n        <small *ngIf=\"contactUsForm.controls['practiceName'].errors && (contactUsForm.controls['practiceName'].dirty || contactUsForm.controls['practiceName'].touched)\"\n          class=\"form-text invalid-text\">Please provide the name of your practice.</small>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlTextarea1\" class=\"lighter-font-weight\">Message or Question</label>\n      <textarea class=\"form-control lighter-font-weight\" id=\"exampleFormControlTextarea1\" rows=\"3\" placeholder=\"Have a message or question? Type it in here!\"></textarea>\n    </div>\n    <button type=\"submit\" [class.work-with-us-modal-button-disabled]=\"contactUsForm.invalid\" class=\"work-with-us-modal-button\"\n      [disabled]=\"contactUsForm.invalid\">Submit</button>\n    <!-- <small *ngIf=\"contactUsForm.invalid && (contactUsForm.dirty || contactUsForm.touched)\" class=\"form-text invalid-text\">Please fill out all required fields.</small> -->\n  </form>\n\n  <div class=\"text-align-center mt-5\" *ngIf=\"submitted\">\n    <p style=\"font-weight: 300;\">Thank you! We will reach out to you shortly via email to learn more about your needs and to schedule a time to chat.</p>\n  </div>\n\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sharing_service__ = __webpack_require__("./src/app/services/sharing.service.ts");
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
    function ContactUsComponent(router, ngxSmartModalService, db, auth, fireStore, httpClient, sharingService) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.db = db;
        this.auth = auth;
        this.fireStore = fireStore;
        this.httpClient = httpClient;
        this.sharingService = sharingService;
        this.contactUsForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            practiceName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            contactUsMessage: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null)
        });
        this.endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/contactUsEmail';
        this.submitted = false;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = 'Hello';
        this.auth.signinAnonymously();
        this.fireStore.read('contacts').subscribe(function (data) {
            _this.fireStoreData = data;
        });
        this.sharingService.currentEmailAddress.subscribe(function (emailAddress) {
            _this.previouslySubmittedEmail = emailAddress;
            _this.contactUsForm.patchValue({
                email: _this.previouslySubmittedEmail
            });
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
            _this.sendEmailToSharedService(contactInfo.email);
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
            // toEmail: 'sfarrugia@kohaninc.com',
            // toName: 'Sabina Farrugia',
            toEmail: 'info@kohancreative.com',
            toName: 'Kohan Creative',
            leadFirstName: contactUsInfo.firstName,
            leadLastName: contactUsInfo.lastName,
            leadEmailAddress: contactUsInfo.email,
            leadPracticeName: contactUsInfo.practiceName,
            contactUsMessage: contactUsInfo.contactUsMessage
        };
        this.httpClient.post(this.endpoint, data, { headers: apiHeaders }).subscribe();
        this.submitted = true;
    };
    ContactUsComponent.prototype.sendEmailToSharedService = function (emailAddress) {
        this.sharingService.changeEmailAddress(emailAddress);
        console.log('storing email address for other forms: ' + emailAddress);
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
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__services_sharing_service__["a" /* SharingService */]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".social-footer-section {\n  color: #1F1F1F;\n  background-color: #F0F0F0;\n  -webkit-font-smoothing: subpixel-antialiased;\n  padding-top: 3%;\n  padding-bottom: 3%; \n}\n\n.social-footer-inner {\n  -webkit-transition: all .25s ease-in-out .1s;\n  transition: all .25s ease-in-out .1s;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.social-button-padding {\n  padding-left: 2%;\n  padding-right: 2%;\n  cursor: pointer;\n}\n\n.footer-section {\n  color: rgba(255,255,255,.4);\n  /* background-color: #201a16; */\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  padding-top: 3%;\n  padding-bottom: 3%;\n}\n\n.powered-by-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  margin-top: 1em;\n}\n\n.link-to-kasuria {\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  cursor: pointer;\n  color: rgba(255,255,255,.4);\n}\n\n.all-rights-reserved {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 12px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  margin-top: 1em;\n  color: #888888;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"social-footer-section\">\n  <div class=\"social-footer-inner\">\n    <div class=\"row\">\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\"></div>\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 text-align-center\">\n        <fa name=\"fab fa-instagram\" class=\"social-button-padding\"></fa>\n        <fa name=\"fab fa-facebook-f\" class=\"social-button-padding\"></fa>\n        <fa name=\"fab fa-twitter\" class=\"social-button-padding\"></fa>\n      </div>\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\"></div>\n    </div>\n  </div>\n</div> -->\n<div class=\"footer-section\">\n  <div class=\"social-footer-inner\">\n    <div class=\"row\">\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\"></div>\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 text-align-center\">\n        <!-- <p class=\"powered-by-text\">Custom-made by <a class=\"link-to-kasuria\" href=\"https://kohan-creative.herokuapp.com\">Kohan Creative</a></p> -->\n        <p class=\"all-rights-reserved\">Copyright &copy; 2018 KOHAN. All Rights Reserved.</p>\n      </div>\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\"></div>\n    </div>\n  </div>\n</div>"

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

module.exports = ".desc-wrapper-container {\n  min-height: 0;\n  /* padding: 130px 0; */\n  padding: 0px 0px 60px 0px;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.desc-wrapper {\n  -webkit-animation: feature-text-anim .75s ease-in-out;\n          animation: feature-text-anim .75s ease-in-out;\n  z-index: 100;\n  position: relative;\n  width: 100%;\n  max-width: 956px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 32px;\n  text-align: center;\n  text-rendering: optimizeLegibility;\n}\n\n.desc-smaller-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 28px;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  color: #c3c1c1;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.kohan-header-tagline {\n  display: block;\n  font-weight: 300;\n  font-style: normal;\n  font-size: 58px;\n  letter-spacing: 0px;\n  text-transform: none;\n  line-height: 1.1em;\n  color: #FFFFFF;\n}\n\n.kohan-header-button {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  border: 2px solid #FFFFFF !important;\n  color: #FFFFFF;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1em 1.75em;\n  display: inline-block;\n  line-height: 1em;\n  margin: 10px 0;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  cursor: pointer;\n}\n\n.kohan-header-button:hover {\n  background-color: #FFFFFF;\n  color: #181818;\n  cursor: pointer;\n}\n\n.spacing-section {\n  margin-top: 8%;\n}\n\n.kohan-secondary-statement {\n  text-align: center;\n  font-weight: 300;\n}\n\n.services-image-margins {\n  margin-bottom: 8%;\n}\n\n.service-offerings-content {\n  cursor: auto;\n  outline: none;\n}\n\n.service-offerings-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n}\n\n.link-to-services {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  /* cursor: pointer; */\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.services-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n.work-with-us-modal-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.lighter-font-weight {\n  font-weight: 300;\n}\n\n.sign-up-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 1em 1.75em;\n}\n\n.sign-up-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.button-spacing {\n  margin-top: 5%;\n}\n\n.learn-more-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  margin-top: 10%;\n}\n\n.contact-link {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  cursor: pointer;\n}\n\n.invalid-text {\n  font-weight: 300;\n  color: #dc3545;\n}\n\n.work-with-us-modal-button-disabled {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: not-allowed;\n}\n\n.work-with-us-modal-button-disabled:hover {\n  /* background-color: #000000; */\n  /* color: #EFEFEF; */\n  color: #000000;\n  background-color: #CCCCCC;\n  cursor: not-allowed;\n}\n\n@media only screen and (max-width: 640px) {\n  .desc-wrapper-container {\n    min-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .desc-smaller-text {\n    font-weight: 300;\n    font-style: normal;\n    font-size: 12px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 1.3em;\n    color: #c3c1c1;\n    margin: 10px auto;\n    text-align: center;\n  }\n\n  .kohan-header-tagline {\n    display: block;\n    font-weight: 300;\n    font-style: normal;\n    font-size: 24px;\n    letter-spacing: 0px;\n    text-transform: none;\n    line-height: 1.1em;\n    color: #FFFFFF;\n  }\n\n  .service-offering-container {\n    padding-top: 10%;\n    padding-bottom: 10%;\n  }\n\n  .kohan-secondary-statement {\n    font-size: 26px;\n  }\n\n  .desc-wrapper {\n    padding: 84px 32px 64px 32px;\n  }\n}\n\n@-webkit-keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}\n\n@keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}"

/***/ }),

/***/ "./src/app/graphic-design/graphic-design.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header-unit\"></div>\n<kohan-navbar></kohan-navbar>\n\n<section class=\"full-individual-section\">\n\n  <!-- Contact Us Modal -->\n  <ngx-smart-modal #contactUsModal identifier=\"contactUsModal\" customClass=\"nsm-dialog-animation-btt\">\n    <kohan-contact-us></kohan-contact-us>\n  </ngx-smart-modal>\n\n  <div id=\"video-container\">\n    <video autoplay loop muted playsinline class=\"fillWidth\" style=\"object-fit: cover;\">\n      <source src=\"https://firebasestorage.googleapis.com/v0/b/kohan-creative.appspot.com/o/Ankara%20-%2012717.mp4?alt=media&token=6f0995f6-a854-4064-95e5-1f8b827f6fd3\"\n        type=\"video/mp4\" />\n    </video>\n  </div>\n  <!-- end video-container -->\n\n  <!-- Work With Us Modal -->\n  <ngx-smart-modal #myModal identifier=\"myModal\" customClass=\"nsm-dialog-animation-btt\">\n    <kohan-work-with-us></kohan-work-with-us>\n  </ngx-smart-modal>\n\n  <div class=\"outer\">\n    <div class=\"middle\">\n      <div class=\"inner\">\n        <h1 class=\"kohan-header-tagline text-align-center\">Graphic Design & Branding</h1>\n        <p class=\"desc-smaller-text text-align-center\">Craft Your Visually Compelling Story</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"scroll-down-header-arrow-container scroll-down-arrow-center hide-on-mobile\">\n    <div class=\"text-align-center\">\n      <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('visual-storytelling')\">\n        <fa name=\"chevron-down\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('visual-storytelling')\"></fa>\n      </div>\n    </div>\n  </div>\n\n  <!-- end .header-unit -->\n</section>\n\n<div class=\"app-background\">\n  <div class=\"container\">\n\n\n    <section class=\"full-individual-section\" id=\"visual-storytelling\">\n      <div class=\"row align-items-center align-content-center\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\">\n          <img src=\"../assets/img/branding_logos_1@1.5x.png\" class=\"img-fluid\" [class.slide-in-left]=\"pageSection == 'visual-storytelling'\">\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\" [class.slide-in-right]=\"pageSection == 'visual-storytelling'\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Visual Storytelling</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            We work closely with you to get to know the true purpose and story behind your dental practice, with the intent of reimagining\n            your brand and building a foundation that is in harmony with your overall vision.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <button type=\"button\" class=\"sign-up-button\" (click)=\"openContactUsModal()\">Learn More</button>\n          </h3>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-align-center pt-5 hide-on-mobile\">\n          <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('purposeful-assets')\">\n            <fa name=\"chevron-down\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('purposeful-assets')\"></fa>\n          </div>\n        </div>\n      </div>\n    </section>\n\n\n    <section class=\"full-individual-section\" id=\"purposeful-assets\">\n      <div class=\"row align-items-center align-content-center\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\" [class.slide-in-elliptic-top-fwd]=\"pageSection == 'purposeful-assets'\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Purposeful Assets</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Your brand isn't just your logo. From health history and referral forms to appointment and business cards, we create assets\n            specifically tailored to accommodate your growing dental practice's needs.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <button type=\"button\" class=\"sign-up-button\" (click)=\"openContactUsModal()\">Get In Touch</button>\n          </h3>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 order-first order-md-2 text-align-center\">\n          <img src=\"../assets/img/LittleBytesReferral.png\" class=\"img-fluid\" [class.slide-in-elliptic-top-fwd]=\"pageSection == 'purposeful-assets'\">\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-align-center pt-5 order-last hide-on-mobile\">\n          <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('lasting-impressions')\">\n            <fa name=\"chevron-down\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('digital-office')\"></fa>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"full-individual-section\" id=\"lasting-impressions\">\n      <div class=\"row align-items-center align-content-center\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\">\n          <img src=\"../assets/img/ali_referring form_front_CVC.png\" class=\"img-fluid\" [class.scale-in-center]=\"pageSection == 'lasting-impressions'\">\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\" [class.scale-in-center]=\"pageSection == 'lasting-impressions'\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Lasting Impressions</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            For your dental or medical practice, experience is everything. We extend the comforting, luxurious experience you carefully\n            cultivate by infusing your brand with the same empathy and passion, further strengthening the bond you share\n            with your patients.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <button type=\"button\" class=\"sign-up-button\" (click)=\"openContactUsModal()\">Learn More</button>\n          </h3>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-align-center pt-5 hide-on-mobile\">\n          <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('header-unit')\">\n            <fa name=\"chevron-up\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('header-unit')\"></fa>\n          </div>\n        </div>\n      </div>\n    </section>\n\n  </div>\n  <kohan-footer></kohan-footer>\n</div>\n\n<!-- Fixed site navigation -->\n<div class=\"site-side-nav\">\n  <ul>\n    <li class=\"site-side-nav-item\" [style.font-weight]=\"pageSection == 'header-unit' ? 600 : 400\" (click)=\"scrollToPageSection('header-unit')\">\n      <div (click)=\"scrollToPageSection('header-unit')\">TOP</div>\n    </li>\n    <li class=\"site-side-nav-item\" [style.font-weight]=\"pageSection == 'visual-storytelling' ? 600 : 400\" (click)=\"scrollToPageSection('visual-storytelling')\">\n      <div (click)=\"scrollToPageSection('visual-storytelling')\">STORY</div>\n    </li>\n    <li class=\"site-side-nav-item\" [style.font-weight]=\"pageSection == 'purposeful-assets' ? 600 : 400\" (click)=\"scrollToPageSection('purposeful-assets')\">\n      <div (click)=\"scrollToPageSection('purposeful-assets')\">PURPOSE</div>\n    </li>\n    <li class=\"site-side-nav-item\" [style.font-weight]=\"pageSection == 'lasting-impressions' ? 600 : 400\" (click)=\"scrollToPageSection('lasting-impressions')\">\n      <div (click)=\"scrollToPageSection('lasting-impressions')\">LASTING</div>\n    </li>\n  </ul>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_scroll_service__ = __webpack_require__("./src/app/services/scroll.service.ts");
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
    function GraphicDesignComponent(router, ngxSmartModalService, db, auth, fireStore, httpClient, scrollService) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.db = db;
        this.auth = auth;
        this.fireStore = fireStore;
        this.httpClient = httpClient;
        this.scrollService = scrollService;
        this.newContactForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            practiceName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required)
        });
        this.endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/httpEmail';
    }
    GraphicDesignComponent.prototype.ngOnInit = function () {
        this.message = 'Hello';
        this.pageSection = 'header-unit';
    };
    GraphicDesignComponent.prototype.navigateToPage = function (route) {
        this.router.navigate([route]);
    };
    GraphicDesignComponent.prototype.openContactUsModal = function () {
        // window.scrollTo({
        //   top: 0,
        //   left: 0,
        //   behavior: "smooth"
        // });
        window.scrollTo({
            top: 0,
            left: 0
        });
        this.ngxSmartModalService.getModal('contactUsModal').open();
    };
    GraphicDesignComponent.prototype.openWorkWithUsModal = function () {
        // window.scrollTo({
        //   top: 0,
        //   left: 0,
        //   behavior: "smooth"
        // });
        window.scrollTo({
            top: 0,
            left: 0
        });
        this.ngxSmartModalService.getModal('myModal').open();
    };
    GraphicDesignComponent.prototype.scrollToPageSection = function (target) {
        this.pageSection = target;
        this.scrollService.triggerScrollTo(target);
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
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__services_scroll_service__["a" /* ScrollService */]])
    ], GraphicDesignComponent);
    return GraphicDesignComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".desc-wrapper-container {\n  min-height: 0;\n  padding: 0px 0px 60px 0px;\n  position: relative;\n  /* overflow: hidden; */\n  width: 100%;\n}\n\n.desc-wrapper {\n  -webkit-animation: feature-text-anim .75s ease-in-out;\n          animation: feature-text-anim .75s ease-in-out;\n  /* z-index: 100; */\n  position: relative;\n  width: 100%;\n  /* max-width: 956px; */\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 32px;\n  text-align: center;\n  text-rendering: optimizeLegibility;\n}\n\n.desc-smaller-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 28px;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  color: #c3c1c1;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.kohan-header-tagline {\n  display: block;\n  font-weight: 300;\n  font-style: normal;\n  font-size: 58px;\n  letter-spacing: 0px;\n  text-transform: none;\n  line-height: 1.1em;\n  color: #FFFFFF;\n}\n\n.kohan-header-button {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  border: 2px solid #FFFFFF !important;\n  color: #FFFFFF;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1em 1.75em;\n  display: inline-block;\n  line-height: 1em;\n  margin: 20px 0;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;  \n  cursor: pointer;\n}\n\n.kohan-header-button:hover {\n  background-color: #FFFFFF;\n  color: #181818;\n  cursor: pointer;\n}\n\n.kohan-header-more-link {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  color: #FFFFFF;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1em 1.75em;\n  display: inline-block;\n  line-height: 1em;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;  \n  cursor: pointer;\n}\n\n.kohan-section-more-link {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  color: rgba(31,31,31,.5);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 2%;\n  display: inline-block;\n  line-height: 1em;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;  \n  cursor: pointer;\n  text-align: center;\n}\n\n.spacing-section {\n  margin-top: 8%;\n}\n\n.kohan-secondary-statement {\n  text-align: center;\n  font-weight: 300;\n}\n\n.services-image-margins {\n  margin-bottom: 8%;\n}\n\n.service-offerings-content {\n  cursor: auto;\n  outline: none;\n}\n\n.service-offerings-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.text-align-left {\n  text-align: left;\n}\n\n.services-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n.img-cursor {\n  cursor: pointer;\n}\n\n.img-cursor:hover {\n  -webkit-transition: all 600ms cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition:         all 600ms cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.work-with-us-modal-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button-disabled {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: not-allowed;\n}\n\n.work-with-us-modal-button-disabled:hover {\n  /* background-color: #000000; */\n  /* color: #EFEFEF; */\n  color: #000000;\n  background-color: #CCCCCC;\n  cursor: not-allowed;\n}\n\n.lighter-font-weight {\n  font-weight: 300;\n}\n\n.learn-more-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  margin-top: 10%;\n}\n\n.hover-shadow:hover {\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\n}\n\n.sign-up-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 1em 1.75em;\n}\n\n.sign-up-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.button-spacing {\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.invalid-text {\n  font-weight: 300;\n  color: #dc3545;\n}\n\n@media only screen and (max-width: 640px) {\n  .desc-wrapper-container {\n    min-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .desc-smaller-text {\n    font-weight: 300;\n    font-style: normal;\n    font-size: 18px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 1.3em;\n    color: #c3c1c1;\n    margin: 10px auto;\n    text-align: center;\n  }\n\n  .kohan-header-tagline {\n    display: block;\n    font-weight: 300;\n    font-style: normal;\n    font-size: 30px;\n    letter-spacing: 0px;\n    text-transform: none;\n    line-height: 1.1em;\n    color: #FFFFFF;\n  }\n\n  .kohan-secondary-statement {\n    font-size: 26px;\n  }\n\n  .button-spacing {\n    margin-top: 10%;\n    margin-bottom: 5%;\n  }\n\n  .service-offering-container {\n    padding-top: 17px;\n    padding-bottom: 17px;\n  }\n}\n\n@-webkit-keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}\n\n@keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}\n\n@-webkit-keyframes arrow-bounce {\n  0%{\n      transform:translateY(0);\n      -webkit-transform:translateY(0)\n  }\n  50%{\n      transform:translateY(20%);\n      -webkit-transform:translateY(20%)\n  }\n  100%{\n      transform:translateY(0);\n      -webkit-transform:translateY(0)\n  }\n}\n\n@keyframes arrow-bounce {\n  0%{\n      transform:translateY(0);\n      -webkit-transform:translateY(0)\n  }\n  50%{\n      transform:translateY(20%);\n      -webkit-transform:translateY(20%)\n  }\n  100%{\n      transform:translateY(0);\n      -webkit-transform:translateY(0)\n  }\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header-unit\"></div>\n<kohan-navbar></kohan-navbar>\n\n<section class=\"full-individual-section\">\n  <div id=\"video-container\">\n    <video autoplay loop muted playsinline class=\"fillWidth\" style=\"object-fit: cover;\">\n      <source src=\"https://firebasestorage.googleapis.com/v0/b/kohan-creative.appspot.com/o/Berlin%20-%2015183.mp4?alt=media&token=1de64bf7-8619-4fc9-b5d8-8eba02a073df\"\n        type=\"video/mp4\" />\n    </video>\n  </div>\n  <!-- end video-container -->\n\n\n  <!-- Work With Us Modal -->\n  <ngx-smart-modal #myModal identifier=\"myModal\" customClass=\"nsm-dialog-animation-btt\">\n    <kohan-work-with-us></kohan-work-with-us>\n  </ngx-smart-modal>\n\n  <div class=\"outer\">\n    <div class=\"middle\">\n      <div class=\"inner\">\n        <!-- <p class=\"desc-smaller-text text-align-center\">Kohan Creative</p> -->\n        <h1 class=\"kohan-header-tagline text-align-center\">Creative Web Design for\n          <br>Your Dental & Medical Practice</h1>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"scroll-down-header-arrow-container scroll-down-arrow-center hide-on-mobile\">\n    <div class=\"text-align-center\">\n      <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('web-design-development')\">\n        <fa name=\"chevron-down\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('web-design-development')\"></fa>\n      </div>\n    </div>\n  </div>\n  \n  <!-- end .header-unit -->\n</section>\n\n\n<div class=\"app-background\">\n\n  <div class=\"container\">\n\n    <!-- <section id=\"web-design-development\" (mouseenter)=\"fireAnimation(true)\" (mouseleave)=\"fireAnimation(false)\" class=\"full-individual-section\"> -->\n    <section id=\"web-design-development\" class=\"full-individual-section\">\n      <div class=\"row align-items-center align-content-center\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\">\n          <img src=\"../assets/img/design_graphic.png\" class=\"img-fluid img-cursor\" (click)=\"navigateToPage('web-design-development')\" [class.slide-in-left]=\"pageSection == 'web-design-development'\">\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\" [class.slide-in-right]=\"pageSection == 'web-design-development'\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <a routerLink=\"/web-design-development\" class=\"link-to-services text-align-center\">Website Design & Development</a>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            We design and develop custom websites that mirror the aesthetic and warmth of your dental or medical practice, evoking a\n            consistent emotion across your physical and digital properties.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <a routerLink=\"/web-design-development\" class=\"link-to-services text-align-center\">Learn More</a>\n            <!-- <button type=\"button\" class=\"sign-up-button\" (click)=\"navigateToPage('web-design-development')\">Learn More</button> -->\n          </h3>\n        </div>\n        <div class=\"col-lg-12 text-align-center hide-on-mobile\">\n          <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('graphic-design-branding')\">\n            <fa name=\"chevron-down\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('graphic-design-branding')\"></fa>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"graphic-design-branding\" class=\"full-individual-section\">\n      <div class=\"row align-items-center align-content-center\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\">\n          <img src=\"../assets/img/branding_graphic.png\" class=\"img-fluid img-cursor\" (click)=\"navigateToPage('graphic-design-branding')\" [class.slide-in-elliptic-top-fwd]=\"pageSection == 'graphic-design-branding'\">\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\" [class.slide-in-elliptic-top-fwd]=\"pageSection == 'graphic-design-branding'\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <a routerLink=\"/graphic-design-branding\" class=\"link-to-services text-align-center\">Graphic Design & Branding</a>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Whether you're starting your own practice or looking to modernize your current one, we specialize in creating custom logos\n            and brand assets that build on your story and set you apart.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <!-- <button type=\"button\" class=\"sign-up-button\" (click)=\"navigateToPage('graphic-design-branding')\">Learn More</button> -->\n            <a routerLink=\"/graphic-design-branding\" class=\"link-to-services text-align-center\">Learn More</a>\n          </h3>\n        </div>\n        <div class=\"col-lg-12 text-align-center hide-on-mobile\">\n          <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('social-media-marketing')\">\n            <fa name=\"chevron-down\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('social-media-marketing')\"></fa>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"social-media-marketing\" class=\"full-individual-section\">\n      <div class=\"row align-items-center align-content-center\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\">\n          <img src=\"../assets/img/social_graphic.png\" class=\"img-fluid img-cursor\" (click)=\"navigateToPage('social-media-marketing')\" [class.scale-in-center]=\"pageSection == 'social-media-marketing'\">\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\" [class.scale-in-center]=\"pageSection == 'social-media-marketing'\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <a routerLink=\"/social-media-marketing\" class=\"link-to-services text-align-center\">Social Media Marketing</a>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Extend your brand presence outside the office, at all hours of the day. We engage your patients and anticipate their needs\n            by managing your social accounts with thoughtfulness, attention, and compassion.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <!-- <button type=\"button\" class=\"sign-up-button\" (click)=\"navigateToPage('social-media-marketing')\">Learn More</button> -->\n            <a routerLink=\"/social-media-marketing\" class=\"link-to-services text-align-center\">Learn More</a>\n          </h3>\n        </div>\n        <div class=\"col-lg-12 text-align-center hide-on-mobile\">\n          <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('header-unit')\">\n            <fa name=\"chevron-up\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('header-unit')\"></fa>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- <div class=\"mockup_wrap\">\n          <div class=\"md-macbook-pro\">\n            <div class=\"md-lid\">\n              <div class=\"md-camera\"></div>\n      \n              <div class=\"md-screen\">\n              </div>\n      \n            </div>\n            <div class=\"md-base\"></div>\n          </div>\n        </div> -->\n\n  </div>\n\n  <kohan-footer></kohan-footer>\n\n</div>\n\n<!-- Fixed site navigation -->\n<div class=\"site-side-nav\">\n  <ul>\n    <li class=\"site-side-nav-item\" [style.font-weight]=\"pageSection == 'header-unit' ? 600 : 400\" (click)=\"scrollToPageSection('header-unit')\">\n      <div (click)=\"scrollToPageSection('header-unit')\">TOP</div>\n    </li>\n    <li class=\"site-side-nav-item\" [style.font-weight]=\"pageSection == 'web-design-development' ? 600 : 400\" (click)=\"scrollToPageSection('web-design-development')\">\n      <div (click)=\"scrollToPageSection('web-design-development')\">DESIGN</div>\n    </li>\n    <li class=\"site-side-nav-item\" [style.font-weight]=\"pageSection == 'graphic-design-branding' ? 600 : 400\" (click)=\"scrollToPageSection('graphic-design-branding')\">\n      <div (click)=\"scrollToPageSection('graphic-design-branding')\">BRANDING</div>\n    </li>\n    <li class=\"site-side-nav-item\" [style.font-weight]=\"pageSection == 'social-media-marketing' ? 600 : 400\" (click)=\"scrollToPageSection('social-media-marketing')\">\n      <div (click)=\"scrollToPageSection('social-media-marketing')\">SOCIAL</div>\n    </li>\n  </ul>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_scroll_service__ = __webpack_require__("./src/app/services/scroll.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sharing_service__ = __webpack_require__("./src/app/services/sharing.service.ts");
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
    function HomeComponent(router, ngxSmartModalService, db, auth, fireStore, httpClient, scrollService, sharingService) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.db = db;
        this.auth = auth;
        this.fireStore = fireStore;
        this.httpClient = httpClient;
        this.scrollService = scrollService;
        this.sharingService = sharingService;
        this.endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/httpEmail';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = 'Hello';
        this.pageSection = 'header-unit';
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
    HomeComponent.prototype.scrollToPageSection = function (target) {
        this.pageSection = target;
        this.scrollService.triggerScrollTo(target);
    };
    HomeComponent.prototype.fireAnimation = function (animationBool) {
        this.animationBoolean = animationBool;
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
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__services_scroll_service__["a" /* ScrollService */],
            __WEBPACK_IMPORTED_MODULE_6__services_sharing_service__["a" /* SharingService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".kohan-navbar-background {\n  background-color: transparent !important;\n}\n\n.kohan-header {\n  padding: 0 20px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  width: 100%;\n  line-height: 1em;\n  /* background-color: #fff; */\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: subpixel-antialiased;\n  /* position: relative; */\n  position: absolute;\n}\n\n.kohan-inner-header {\n  padding: 16px 0;\n  display: table;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-animation: header-anim 1s ease-in-out;\n          animation: header-anim 1s ease-in-out;\n}\n\n.kohan-header-nav {\n  text-align: left;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.main-nav-wrapper {\n  position: relative;\n  z-index: 1000;\n}\n\n.work-with-us-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n.services-item-container {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0; \n}\n\n.services-link {\n  font-family: futura-pt, sans-serif;\n  font-weight: 500;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  line-height: 1em;\n  /* color: #000000; */\n  color: #FFFFFF;\n  display: block;\n  padding: 1em 1.5em !important;\n}\n\n.services-link-button {\n  font-family: futura-pt, sans-serif;\n  font-weight: 500;\n  font-style: normal;\n  font-size: 13px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  line-height: 1em;\n  display: block;\n  /* color: #000000; */\n  color: #FFFFFF;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  margin-left: 1em !important;\n  padding: 1em 1.5em !important;\n  cursor: pointer;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n}\n\n.services-link-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.dropdown-container {\n  border-color: transparent;\n  background-color: transparent;\n}\n\n.dropdown-link {\n  width: 100%;\n  clear: both;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n@media only screen and (max-width: 640px) {\n  .mobile-padding {\n    /* padding: 24px 36px; */\n    padding: 0px 0px;\n    background-color: #FFFFFF;\n  }\n  .services-link-button {\n    text-align: center;\n  }\n\n  .services-link {\n    text-align: center;\n    color: #000000;\n  }\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"kohan-header\">\n  <div class=\"kohan-inner-header\">\n    <div class=\"kohan-header-nav\">\n      <nav class=\"navbar navbar-expand-lg navbar-light kohan-navbar-background\">\n        <a class=\"navbar-brand\" routerLink=\"/home\">\n          <img class=\"kohan-logo img-fluid\" src=\"../assets/img/KOHAN-Creative-Logo.png\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\" style=\"border-color: transparent;\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav ml-auto mobile-padding\">\n            <li class=\"services-item-container dropdown\">\n              <a class=\"services-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                aria-expanded=\"false\">\n                Services\n              </a>\n              <div class=\"dropdown-menu dropdown-container\" aria-labelledby=\"navbarDropdown\">\n                <a class=\"dropdown-link services-link\" routerLink=\"/web-design-development\">Web Design & Development</a>\n                <a class=\"dropdown-link services-link\" routerLink=\"/graphic-design-branding\">Graphic Design & Branding</a>\n                <a class=\"dropdown-link services-link\" routerLink=\"/social-media-marketing\">Social Media Marketing</a>\n              </div>\n            </li>\n            <!-- <li class=\"services-item-container\">\n              <a class=\"services-link\" routerLink=\"/web-design-development\">Web Design & Development\n                <span class=\"sr-only\">(current)</span>\n              </a>\n            </li>\n            <li class=\"services-item-container\">\n              <a class=\"services-link\" routerLink=\"/graphic-design-branding\">Branding & Graphic Design\n                <span class=\"sr-only\">(current)</span>\n              </a>\n            </li>\n            <li class=\"services-item-container\">\n              <a class=\"services-link\" routerLink=\"/social-media-marketing\">Social Media Marketing\n                <span class=\"sr-only\">(current)</span>\n              </a>\n            </li> -->\n            <li class=\"services-item-container\">\n              <a class=\"services-link\" routerLink=\"/packages\">Packages\n                <span class=\"sr-only\">(current)</span>\n              </a>\n            </li>\n            <li class=\"services-item-container\">\n              <a class=\"services-link\" routerLink=\"/about-us\">About Us\n                <span class=\"sr-only\">(current)</span>\n              </a>\n            </li>\n            <!-- <li class=\"services-item-container\">\n              <a class=\"services-link\" href=\"#\">About</a>\n            </li> -->\n            <!-- <li class=\"services-item-container\">\n              <div class=\"services-link-button\" (click)=\"openWorkWithUsModal()\">Work With Us</div>\n            </li> -->\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </div>\n</div>\n\n<!-- Work With Us Modal -->\n<ngx-smart-modal #myModal identifier=\"myModal\">\n  <kohan-work-with-us></kohan-work-with-us>\n</ngx-smart-modal>"

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

module.exports = ".desc-wrapper-container {\n  min-height: 0;\n  /* padding: 130px 0; */\n  padding: 0px 0px 60px 0px;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.desc-wrapper {\n  -webkit-animation: feature-text-anim .75s ease-in-out;\n          animation: feature-text-anim .75s ease-in-out;\n  z-index: 100;\n  position: relative;\n  width: 100%;\n  max-width: 956px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 32px;\n  text-align: center;\n  text-rendering: optimizeLegibility;\n}\n\n.desc-smaller-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 28px;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  color: #c3c1c1;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.kohan-header-tagline {\n  display: block;\n  font-weight: 300;\n  font-style: normal;\n  font-size: 58px;\n  letter-spacing: 0px;\n  text-transform: none;\n  line-height: 1.1em;\n  color: #FFFFFF;\n}\n\n.kohan-header-button {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  border: 2px solid #FFFFFF !important;\n  color: #FFFFFF;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1em 1.75em;\n  display: inline-block;\n  line-height: 1em;\n  margin: 20px 0;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;  \n  cursor: pointer;\n}\n\n.kohan-header-button:hover {\n  background-color: #FFFFFF;\n  color: #181818;\n  cursor: pointer;\n}\n\n.spacing-section {\n  margin-top: 8%;\n}\n\n.kohan-secondary-statement {\n  text-align: center;\n  font-weight: 300;\n}\n\n.services-image-margins {\n  margin-bottom: 8%;\n}\n\n.service-offering-container {\n  padding-bottom: 17px;\n  padding-top: 17px;\n  padding-left: 17px;\n  padding-right: 17px;\n  position: relative;\n  height: auto;\n  outline: none;\n  -webkit-box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n          box-shadow: inset 0 0 0 1px rgba(128,128,128,0);\n  -webkit-transition: -webkit-box-shadow .2s ease-in-out;\n  transition: -webkit-box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out;\n  transition: box-shadow .2s ease-in-out, -webkit-box-shadow .2s ease-in-out;\n}\n\n.service-offerings-content {\n  cursor: auto;\n  outline: none;\n}\n\n.service-offerings-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 28px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n}\n\n.package-subheader {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n}\n\n.link-to-services {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  cursor: pointer;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.text-align-left {\n  text-align: left;\n}\n\n.services-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n.img-cursor {\n  cursor: pointer;\n}\n\n.work-with-us-modal-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.lighter-font-weight {\n  font-weight: 300;\n}\n\n.red-package {\n  color: rgb(255, 69, 21);\n  /* box-shadow: 0 0.25rem 0.75rem rgb(255, 69, 21) !important; */\n}\n\n.gold-package {\n  color: rgb(255, 214, 38);\n  /* box-shadow: 0 0.25rem 0.75rem rgb(255, 214, 38) !important; */\n}\n\n.black-package {\n  -webkit-box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05) !important;\n          box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05) !important;\n}\n\n.pricing-subsection-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 14px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  line-height: 1.6em;\n  text-align: left;\n}\n\n.package-features-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n.package-features-muted {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 80%;\n  letter-spacing: .5px;\n  line-height: 1em;\n  color: #1F1F1F;\n  margin-top: 10%;\n  text-align: left;\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.sign-up-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  /* padding: 1em 1.75em; */\n  padding: 16px 28px;\n  font-size: 16px;\n}\n\n.sign-up-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.question-tooltip {\n  cursor: help;\n}\n\n.hover-shadow {\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\n}\n\n.contact-us-modal {\n  top: 50% !important;\n}\n\n.invalid-text {\n  font-weight: 300;\n  color: #dc3545;\n}\n\n.work-with-us-modal-button-disabled {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: not-allowed;\n}\n\n.work-with-us-modal-button-disabled:hover {\n  /* background-color: #000000; */\n  /* color: #EFEFEF; */\n  color: #000000;\n  background-color: #CCCCCC;\n  cursor: not-allowed;\n}\n\n.iphone-background {\n  background-image: url('iPhone.2f776eec6b2b35aed62e.png');\n  background-size: 100% 100%;\n  min-height: 800px;\n}\n\n.iphone-padding {\n  padding: 4% 8% 4% 10%;\n}\n\n.iphone-margins {\n  margin-top: 35%;\n}\n\n.responsive-iphone-container {\n  /* font-size: 0.85px; */\n  display: none;\n}\n\n.individual-iphone-margins {\n  margin: 2%;\n}\n\n@media only screen and (max-width: 640px) {\n  .desc-wrapper-container {\n    min-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .desc-smaller-text {\n    font-weight: 300;\n    font-style: normal;\n    font-size: 12px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 1.3em;\n    color: #c3c1c1;\n    margin: 10px auto;\n    text-align: center;\n  }\n\n  .kohan-header-tagline {\n    display: block;\n    font-weight: 300;\n    font-style: normal;\n    font-size: 24px;\n    letter-spacing: 0px;\n    text-transform: none;\n    line-height: 1.1em;\n    color: #FFFFFF;\n  }\n\n  .kohan-secondary-statement {\n    font-size: 26px;\n  }\n\n  .desc-wrapper {\n    padding: 84px 32px 64px 32px;\n  }\n\n  .service-offerings-title {\n    font-size: 20px;\n  }\n\n  .package-subheader {\n    font-size: 12px;\n  }\n\n  .responsive-iphone-container {\n    font-size: 0.69px;\n    display: block;\n  }\n  \n  .individual-iphone-margins {\n    margin-top: 5%;\n    margin-bottom: 5%;\n  }\n\n  .package-features-paragraph {\n    font-size: 12px;\n  }\n\n  .sign-up-button {\n    color: #000000;\n    border: 1px solid #000000;\n    background-color: transparent;\n    -webkit-font-smoothing: subpixel-antialiased;\n    cursor: pointer;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    padding: 8px 14px;\n    font-size: 12px;\n  }\n}\n\n@-webkit-keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}\n\n@keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}"

/***/ }),

/***/ "./src/app/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header-unit\"></div>\n<kohan-navbar></kohan-navbar>\n\n<section class=\"full-individual-section\">\n\n  <!-- Contact Us Modal -->\n  <ngx-smart-modal #contactUsModal identifier=\"contactUsModal\" customClass=\"nsm-dialog-animation-btt\">\n    <kohan-contact-us></kohan-contact-us>\n  </ngx-smart-modal>\n\n  <div id=\"video-container\">\n    <video autoplay loop muted playsinline class=\"fillWidth\" style=\"object-fit: cover;\">\n      <source src=\"https://firebasestorage.googleapis.com/v0/b/kohan-creative.appspot.com/o/Hong%20Kong%20-%202885.mp4?alt=media&token=e2cbd9a2-b156-44b4-8003-61623902e8d0\"\n        type=\"video/mp4\" />\n    </video>\n  </div>\n  <!-- end video-container -->\n\n\n  <!-- Work With Us Modal -->\n  <ngx-smart-modal #myModal identifier=\"myModal\" customClass=\"nsm-dialog-animation-btt\">\n    <kohan-work-with-us></kohan-work-with-us>\n  </ngx-smart-modal>\n\n  <div class=\"outer\">\n    <div class=\"middle\">\n      <div class=\"inner\">\n        <!-- <p class=\"desc-smaller-text text-align-center\">Kohan Creative</p> -->\n        <h1 class=\"kohan-header-tagline text-align-center\">Design & Creative Packages</h1>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"scroll-down-header-arrow-container scroll-down-arrow-center hide-on-mobile\">\n    <div class=\"text-align-center\">\n      <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('packages')\">\n        <fa name=\"chevron-down\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('packages')\"></fa>\n      </div>\n    </div>\n  </div>\n\n</section>\n\n\n<div class=\"app-background\">\n\n  <!-- iPhone Packages -->\n  <section id=\"packages\">\n    <div class=\"d-flex align-items-center justify-content-center text-align-center\" style=\"width: 100%;\">\n      <div class=\"desktop-iphone-display\">\n        <div class=\"iphone-red-package\">\n          <div class=\"iphone-top\">\n            <span class=\"camera\"></span>\n            <span class=\"sensor\"></span>\n            <span class=\"speaker\"></span>\n          </div>\n          <div class=\"top-bar\"></div>\n          <div class=\"iphone-screen\">\n            <ul class=\"list-unstyled text-align-left iphone-padding mb-0\">\n              <h4 class=\"mb-2 font-weight-normal text-align-center service-offerings-title red-package\">Red</h4>\n              <h4 class=\"mt-2 font-weight-normal text-align-left package-subheader\">Web Design</h4>\n              <li class=\"package-features-paragraph\">Standard monthly web hosting</li>\n              <li class=\"package-features-paragraph\">Mobile optimized site</li>\n              <li class=\"package-features-paragraph\">Pre-designed template with up to 30 pages</li>\n              <li class=\"package-features-paragraph\">Up to two hours of site updates per month</li>\n              <li class=\"package-features-paragraph\">SEO enhancement on up to two pages per month</li>\n              <li class=\"package-features-paragraph\">Updated logo with full rights</li>\n            </ul>\n            <ul class=\"list-unstyled text-align-left iphone-padding mb-0\">\n              <h4 class=\"my-0 font-weight-normal text-align-left package-subheader\">Social Media</h4>\n              <li class=\"package-features-paragraph\">Setup of two social media accounts</li>\n              <li class=\"package-features-paragraph\">Two posts per month for your two selected accounts</li>\n            </ul>\n            <button type=\"button\" class=\"sign-up-button mt-2\" (click)=\"openContactUsModal()\">Contact Us</button>\n          </div>\n          <div class=\"buttons\">\n            <span class=\"on-off\"></span>\n            <span class=\"sleep\"></span>\n            <span class=\"up\"></span>\n            <span class=\"down\"></span>\n          </div>\n          <div class=\"bottom-bar\"></div>\n          <div class=\"iphone-bottom\">\n            <span></span>\n          </div>\n        </div>\n\n        <div class=\"iphone-black-package\">\n          <div class=\"iphone-top\">\n            <span class=\"camera\"></span>\n            <span class=\"sensor\"></span>\n            <span class=\"speaker\"></span>\n          </div>\n          <div class=\"top-bar\"></div>\n          <div class=\"iphone-screen\">\n            <ul class=\"list-unstyled text-align-left iphone-padding mb-0\">\n              <h4 class=\"mb-2 font-weight-normal text-align-center service-offerings-title\">Black</h4>\n              <h4 class=\"mt-2 font-weight-normal text-align-left package-subheader\">Web Design</h4>\n              <li class=\"package-features-paragraph\">Standard monthly web hosting</li>\n              <li class=\"package-features-paragraph\">Mobile optimized site</li>\n              <li class=\"package-features-paragraph\">Complete custom website design and development with up to 60 pages</li>\n              <li class=\"package-features-paragraph\">Up to five hours of site updates per month</li>\n              <li class=\"package-features-paragraph\">SEO enhancement on up to five pages per month</li>\n              <li class=\"package-features-paragraph\">Premium services and integrations</li>\n              <li class=\"package-features-paragraph\">Custom logo and suite of brand assets</li>\n            </ul>\n            <ul class=\"list-unstyled text-align-left iphone-padding mb-0\">\n              <h4 class=\"my-0 font-weight-normal text-align-left package-subheader\">Social Media</h4>\n              <li class=\"package-features-paragraph\">Setup of four social media accounts</li>\n              <li class=\"package-features-paragraph\">One post per week for each of your four social media accounts</li>\n            </ul>\n            <button type=\"button\" class=\"sign-up-button mt-2\" (click)=\"openContactUsModal()\">Contact Us</button>\n          </div>\n          <div class=\"buttons\">\n            <span class=\"on-off\"></span>\n            <span class=\"sleep\"></span>\n            <span class=\"up\"></span>\n            <span class=\"down\"></span>\n          </div>\n          <div class=\"bottom-bar\"></div>\n          <div class=\"iphone-bottom\">\n            <span></span>\n          </div>\n        </div>\n\n\n        <div class=\"iphone-gold-package\">\n          <div class=\"iphone-top\">\n            <span class=\"camera\"></span>\n            <span class=\"sensor\"></span>\n            <span class=\"speaker\"></span>\n          </div>\n          <div class=\"top-bar\"></div>\n          <div class=\"iphone-screen\">\n            <ul class=\"list-unstyled text-align-left iphone-padding mb-0\">\n              <h4 class=\"mb-2 font-weight-normal text-align-center service-offerings-title gold-package\">Gold</h4>\n              <h4 class=\"mt-2 font-weight-normal text-align-left package-subheader\">Web Design</h4>\n              <li class=\"package-features-paragraph\">Standard monthly web hosting</li>\n              <li class=\"package-features-paragraph\">Mobile optimized site</li>\n              <li class=\"package-features-paragraph\">Pre-designed template with up to 40 pages</li>\n              <li class=\"package-features-paragraph\">Up to two hours of site updates per month</li>\n              <li class=\"package-features-paragraph\">SEO enhancement on up to three pages per month</li>\n              <li class=\"package-features-paragraph\">Newly designed logo and business cards</li>\n            </ul>\n            <ul class=\"list-unstyled text-align-left iphone-padding mb-0\">\n              <h4 class=\"my-0 font-weight-normal text-align-left package-subheader\">Social Media</h4>\n              <li class=\"package-features-paragraph\">Setup of three social media accounts</li>\n              <li class=\"package-features-paragraph\">Three posts per month for your three selected accounts</li>\n            </ul>\n            <button type=\"button\" class=\"sign-up-button mt-2\" (click)=\"openContactUsModal()\">Contact Us</button>\n          </div>\n          <div class=\"buttons\">\n            <span class=\"on-off\"></span>\n            <span class=\"sleep\"></span>\n            <span class=\"up\"></span>\n            <span class=\"down\"></span>\n          </div>\n          <div class=\"bottom-bar\"></div>\n          <div class=\"iphone-bottom\">\n            <span></span>\n          </div>\n        </div>\n      </div>\n\n      <!-- Mobile responsive iPhone Packages -->\n      <div class=\"responsive-iphone-container\">\n\n        <div class=\"marvel-device iphone8 silver individual-iphone-margins\">\n          <div class=\"top-bar\"></div>\n          <div class=\"sleep\"></div>\n          <div class=\"volume\"></div>\n          <div class=\"camera\"></div>\n          <div class=\"sensor\"></div>\n          <div class=\"speaker\"></div>\n          <div class=\"screen\">\n            <ul class=\"list-unstyled text-align-left iphone-padding mb-0\">\n              <h4 class=\"mb-2 font-weight-normal text-align-center service-offerings-title red-package\">Red</h4>\n              <h4 class=\"mt-2 font-weight-normal text-align-left package-subheader\">Web Design</h4>\n              <li class=\"package-features-paragraph\">Standard monthly web hosting</li>\n              <li class=\"package-features-paragraph\">Mobile optimized site</li>\n              <li class=\"package-features-paragraph\">Pre-designed template with up to 30 pages</li>\n              <li class=\"package-features-paragraph\">Up to two hours of site updates per month</li>\n              <li class=\"package-features-paragraph\">SEO enhancement on up to two pages per month</li>\n              <li class=\"package-features-paragraph\">Updated logo with full rights</li>\n            </ul>\n            <ul class=\"list-unstyled text-align-left iphone-padding mb-0\">\n              <h4 class=\"my-0 font-weight-normal text-align-left package-subheader\">Social Media</h4>\n              <li class=\"package-features-paragraph\">Setup of two social media accounts</li>\n              <li class=\"package-features-paragraph\">Two posts per month for your two selected accounts</li>\n            </ul>\n            <button type=\"button\" class=\"sign-up-button mt-2\" (click)=\"openContactUsModal()\">Contact Us</button>\n          </div>\n          <div class=\"home\"></div>\n          <div class=\"bottom-bar\"></div>\n        </div>\n\n        <div class=\"marvel-device iphone8 silver individual-iphone-margins\">\n          <div class=\"top-bar\"></div>\n          <div class=\"sleep\"></div>\n          <div class=\"volume\"></div>\n          <div class=\"camera\"></div>\n          <div class=\"sensor\"></div>\n          <div class=\"speaker\"></div>\n          <div class=\"screen\">\n            <ul class=\"list-unstyled text-align-left iphone-padding mb-0\">\n              <h4 class=\"mb-2 font-weight-normal text-align-center service-offerings-title\">Black</h4>\n              <h4 class=\"mt-2 font-weight-normal text-align-left package-subheader\">Web Design</h4>\n              <li class=\"package-features-paragraph\">Standard monthly web hosting</li>\n              <li class=\"package-features-paragraph\">Mobile optimized site</li>\n              <li class=\"package-features-paragraph\">Complete custom website design and development with up to 60 pages</li>\n              <li class=\"package-features-paragraph\">Up to five hours of site updates per month</li>\n              <li class=\"package-features-paragraph\">SEO enhancement on up to five pages per month</li>\n              <li class=\"package-features-paragraph\">Premium services and integrations</li>\n              <li class=\"package-features-paragraph\">Custom logo and suite of brand assets</li>\n            </ul>\n            <ul class=\"list-unstyled text-align-left iphone-padding mb-0\">\n              <h4 class=\"my-0 font-weight-normal text-align-left package-subheader\">Social Media</h4>\n              <li class=\"package-features-paragraph\">Setup of four social media accounts</li>\n              <li class=\"package-features-paragraph\">One post per week for each of your four social media accounts</li>\n            </ul>\n            <button type=\"button\" class=\"sign-up-button mt-2\" (click)=\"openContactUsModal()\">Contact Us</button>\n          </div>\n          <div class=\"home\"></div>\n          <div class=\"bottom-bar\"></div>\n        </div>\n\n        <div class=\"marvel-device iphone8 silver individual-iphone-margins\">\n          <div class=\"top-bar\"></div>\n          <div class=\"sleep\"></div>\n          <div class=\"volume\"></div>\n          <div class=\"camera\"></div>\n          <div class=\"sensor\"></div>\n          <div class=\"speaker\"></div>\n          <div class=\"screen\">\n            <ul class=\"list-unstyled text-align-left iphone-padding mb-0\">\n              <h4 class=\"mb-2 font-weight-normal text-align-center service-offerings-title gold-package\">Gold</h4>\n              <h4 class=\"mt-2 font-weight-normal text-align-left package-subheader\">Web Design</h4>\n              <li class=\"package-features-paragraph\">Standard monthly web hosting</li>\n              <li class=\"package-features-paragraph\">Mobile optimized site</li>\n              <li class=\"package-features-paragraph\">Pre-designed template with up to 40 pages</li>\n              <li class=\"package-features-paragraph\">Up to two hours of site updates per month</li>\n              <li class=\"package-features-paragraph\">SEO enhancement on up to three pages per month</li>\n              <li class=\"package-features-paragraph\">Newly designed logo and business cards</li>\n            </ul>\n            <ul class=\"list-unstyled text-align-left iphone-padding mb-0\">\n              <h4 class=\"my-0 font-weight-normal text-align-left package-subheader\">Social Media</h4>\n              <li class=\"package-features-paragraph\">Setup of three social media accounts</li>\n              <li class=\"package-features-paragraph\">Three posts per month for your three selected accounts</li>\n            </ul>\n            <button type=\"button\" class=\"sign-up-button mt-2\" (click)=\"openContactUsModal()\">Contact Us</button>\n          </div>\n          <div class=\"home\"></div>\n          <div class=\"bottom-bar\"></div>\n        </div>\n\n      </div>\n\n\n    </div>\n  </section>\n  <kohan-footer></kohan-footer>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_scroll_service__ = __webpack_require__("./src/app/services/scroll.service.ts");
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
    function PricingComponent(router, ngxSmartModalService, db, auth, fireStore, httpClient, scrollService) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.db = db;
        this.auth = auth;
        this.fireStore = fireStore;
        this.httpClient = httpClient;
        this.scrollService = scrollService;
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
    PricingComponent.prototype.scrollToPageSection = function (target) {
        this.scrollService.triggerScrollTo(target);
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
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__services_scroll_service__["a" /* ScrollService */]])
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

/***/ "./src/app/services/scroll.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollService = (function () {
    function ScrollService(scrollToService) {
        this.scrollToService = scrollToService;
    }
    ScrollService.prototype.triggerScrollTo = function (target) {
        var config = {
            target: target
        };
        this.scrollToService.scrollTo(config);
    };
    ScrollService.prototype.triggerScrollToWithSpeed = function (target) {
        var config = {
            target: target,
            duration: 250
        };
        this.scrollToService.scrollTo(config);
    };
    ScrollService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */]])
    ], ScrollService);
    return ScrollService;
}());



/***/ }),

/***/ "./src/app/services/sharing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharingService = (function () {
    function SharingService() {
        this.emailAddressSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.currentEmailAddress = this.emailAddressSource.asObservable();
        this.practiceNameSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.currentPracticeName = this.practiceNameSource.asObservable();
        this.screenHeightSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.currentScreenHeight = this.screenHeightSource.asObservable();
    }
    SharingService.prototype.changeEmailAddress = function (emailAddress) {
        this.emailAddressSource.next(emailAddress);
    };
    SharingService.prototype.changePracticeName = function (practiceName) {
        this.practiceNameSource.next(practiceName);
    };
    SharingService.prototype.changeScreenHeight = function (screenHeight) {
        this.screenHeightSource.next(screenHeight);
    };
    SharingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SharingService);
    return SharingService;
}());



/***/ }),

/***/ "./src/app/services/window.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WINDOW; });
/* unused harmony export WindowRef */
/* unused harmony export BrowserWindowRef */
/* unused harmony export windowFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WINDOW_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/* Create a new injection token for injecting the window into a component */
var WINDOW = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* InjectionToken */]('WindowToken');
/* Define abstract class for obtaining reference to the global window object */
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            throw new Error('Not implemented');
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());

/* Define class that implements the abstract class and returns the native window object. */
var BrowserWindowRef = (function (_super) {
    __extends(BrowserWindowRef, _super);
    function BrowserWindowRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserWindowRef;
}(WindowRef));

/* Create a factory function that returns the native window object */
function windowFactory(browserWindowRef, platformId) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_common__["j" /* isPlatformBrowser */])(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
/* Create an injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
var browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
/* Create an injectable provider that uses the windowFactory function for returining the native window object. */
var windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* PLATFORM_ID */]]
};
/* Create an array of providers */
var WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider
];


/***/ }),

/***/ "./src/app/social-media/social-media.component.css":
/***/ (function(module, exports) {

module.exports = ".desc-wrapper-container {\n  min-height: 0;\n  /* padding: 130px 0; */\n  padding: 0px 0px 60px 0px;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.desc-wrapper {\n  -webkit-animation: feature-text-anim .75s ease-in-out;\n          animation: feature-text-anim .75s ease-in-out;\n  z-index: 100;\n  position: relative;\n  width: 100%;\n  max-width: 956px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 32px;\n  text-align: center;\n  text-rendering: optimizeLegibility;\n}\n\n.desc-smaller-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 28px;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  color: #c3c1c1;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.kohan-header-tagline {\n  display: block;\n  font-weight: 300;\n  font-style: normal;\n  font-size: 58px;\n  letter-spacing: 0px;\n  text-transform: none;\n  line-height: 1.1em;\n  color: #FFFFFF;\n}\n\n.kohan-header-button {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  border: 2px solid #FFFFFF !important;\n  color: #FFFFFF;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1em 1.75em;\n  display: inline-block;\n  line-height: 1em;\n  margin: 10px 0;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  cursor: pointer;\n}\n\n.kohan-header-button:hover {\n  background-color: #FFFFFF;\n  color: #181818;\n  cursor: pointer;\n}\n\n.spacing-section {\n  margin-top: 8%;\n}\n\n.kohan-secondary-statement {\n  text-align: center;\n  font-weight: 300;\n}\n\n.services-image-margins {\n  margin-bottom: 8%;\n}\n\n.service-offerings-content {\n  cursor: auto;\n  outline: none;\n}\n\n.service-offerings-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n}\n\n.link-to-services {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  /* cursor: pointer; */\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.services-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n.work-with-us-modal-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.lighter-font-weight {\n  font-weight: 300;\n}\n\n.sign-up-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 1em 1.75em;\n}\n\n.sign-up-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.button-spacing {\n  margin-top: 5%;\n}\n\n.learn-more-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  margin-top: 10%;\n}\n\n.contact-link {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  cursor: pointer;\n}\n\n.invalid-text {\n  font-weight: 300;\n  color: #dc3545;\n}\n\n.work-with-us-modal-button-disabled {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: not-allowed;\n}\n\n.work-with-us-modal-button-disabled:hover {\n  /* background-color: #000000; */\n  /* color: #EFEFEF; */\n  color: #000000;\n  background-color: #CCCCCC;\n  cursor: not-allowed;\n}\n\n@media only screen and (max-width: 640px) {\n  .desc-wrapper-container {\n    min-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .desc-smaller-text {\n    font-weight: 300;\n    font-style: normal;\n    font-size: 12px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 1.3em;\n    color: #c3c1c1;\n    margin: 10px auto;\n    text-align: center;\n  }\n\n  .kohan-header-tagline {\n    display: block;\n    font-weight: 300;\n    font-style: normal;\n    font-size: 24px;\n    letter-spacing: 0px;\n    text-transform: none;\n    line-height: 1.1em;\n    color: #FFFFFF;\n  }\n\n  .service-offering-container {\n    padding-top: 10%;\n    padding-bottom: 10%;\n  }\n\n  .kohan-secondary-statement {\n    font-size: 26px;\n  }\n\n  .desc-wrapper {\n    padding: 84px 32px 64px 32px;\n  }\n}\n\n@-webkit-keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}\n\n@keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}"

/***/ }),

/***/ "./src/app/social-media/social-media.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header-unit\"></div>\n<kohan-navbar></kohan-navbar>\n\n<section class=\"full-individual-section\">\n\n  <!-- Contact Us Modal -->\n  <ngx-smart-modal #contactUsModal identifier=\"contactUsModal\" customClass=\"nsm-dialog-animation-btt\">\n    <kohan-contact-us></kohan-contact-us>\n  </ngx-smart-modal>\n\n  <div id=\"video-container\">\n    <video autoplay loop muted playsinline class=\"fillWidth\" style=\"object-fit: cover;\">\n      <source src=\"https://firebasestorage.googleapis.com/v0/b/kohan-creative.appspot.com/o/Drone%20-%209732.mp4?alt=media&token=b70707ca-b1cd-4c3e-bf96-c97e27c12b88\"\n        type=\"video/mp4\" />\n    </video>\n  </div>\n  <!-- end video-container -->\n\n  <!-- Work With Us Modal -->\n  <ngx-smart-modal #myModal identifier=\"myModal\" customClass=\"nsm-dialog-animation-btt\">\n    <kohan-work-with-us></kohan-work-with-us>\n  </ngx-smart-modal>\n\n  <div class=\"outer\">\n    <div class=\"middle\">\n      <div class=\"inner\">\n        <h1 class=\"kohan-header-tagline text-align-center\">Social Media Marketing</h1>\n        <p class=\"desc-smaller-text text-align-center\">Drive Value Through Engagement</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"scroll-down-header-arrow-container scroll-down-arrow-center hide-on-mobile\">\n    <div class=\"text-align-center\">\n      <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('create-cultivate')\">\n        <fa name=\"chevron-down\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('create-cultivate')\"></fa>\n      </div>\n    </div>\n  </div>\n\n  <!-- end .header-unit -->\n</section>\n\n<div class=\"app-background\">\n  <div class=\"container\">\n\n\n    <section class=\"full-individual-section\" id=\"create-cultivate\">\n      <div class=\"row align-items-center align-content-center\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\">\n          <img src=\"../assets/img/periodontics_instagram.png\" class=\"img-fluid\" style=\"max-width: 80%;\" [class.slide-in-left]=\"pageSection == 'create-cultivate'\">\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\" [class.slide-in-right]=\"pageSection == 'create-cultivate'\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Create & Cultivate</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Whether you're starting completely from scratch or are looking for an added boost, we create, maintain, and grow your most\n            vital social media acounts, allowing you to focus on what you do best.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <button type=\"button\" class=\"sign-up-button\" (click)=\"openContactUsModal()\">Learn More</button>\n          </h3>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-align-center pt-5 hide-on-mobile\">\n          <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('build-community')\">\n            <fa name=\"chevron-down\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('build-community')\"></fa>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"full-individual-section\" id=\"build-community\">\n      <div class=\"row align-items-center align-content-center\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\" [class.slide-in-elliptic-top-fwd]=\"pageSection == 'build-community'\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Build a Community</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            From creative posts and crisp videos to engaging polls and interactive digital experiences, we don't just help you connect\n            with your patients - we help you build a lasting community.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <button type=\"button\" class=\"sign-up-button\" (click)=\"openContactUsModal()\">Get In Touch</button>\n          </h3>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 order-first order-md-2 text-align-center\">\n          <img src=\"../assets/img/Female_Holding_Twitter.png\" class=\"img-fluid\" style=\"max-width: 80%;\" [class.slide-in-elliptic-top-fwd]=\"pageSection == 'build-community'\">\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-align-center pt-5 order-last hide-on-mobile\">\n          <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('brand-ambassadors')\">\n            <fa name=\"chevron-down\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('brand-ambassadors')\"></fa>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"full-individual-section\" id=\"brand-ambassadors\">\n      <div class=\"row align-items-center align-content-center\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\">\n          <img src=\"../assets/img/All_Smiles_Dental_1.png\" class=\"img-fluid\" style=\"max-width: 50%;\" [class.scale-in-center]=\"pageSection == 'brand-ambassadors'\">\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\" [class.scale-in-center]=\"pageSection == 'brand-ambassadors'\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Your Brand Ambassadors</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Drawing on the pervasiveness of crowd-sourcing and the \"review economy,\" we employ unique tactics that work towards transforming\n            your patients into your brand ambassadors.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <button type=\"button\" class=\"sign-up-button\" (click)=\"openContactUsModal()\">Learn More</button>\n          </h3>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-align-center pt-5 hide-on-mobile\">\n          <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('header-unit')\">\n            <fa name=\"chevron-up\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('header-unit')\"></fa>\n          </div>\n        </div>\n      </div>\n    </section>\n\n  </div>\n  <kohan-footer></kohan-footer>\n</div>\n\n<!-- Fixed site navigation -->\n<div class=\"site-side-nav\">\n  <ul>\n    <li class=\"site-side-nav-item\" [style.font-weight]=\"pageSection == 'header-unit' ? 600 : 400\" (click)=\"scrollToPageSection('header-unit')\">\n      <div (click)=\"scrollToPageSection('header-unit')\">TOP</div>\n    </li>\n    <li class=\"site-side-nav-item\" [style.font-weight]=\"pageSection == 'create-cultivate' ? 600 : 400\" (click)=\"scrollToPageSection('create-cultivate')\">\n      <div (click)=\"scrollToPageSection('create-cultivate')\">CULTIVATE</div>\n    </li>\n    <li class=\"site-side-nav-item\" [style.font-weight]=\"pageSection == 'build-community' ? 600 : 400\" (click)=\"scrollToPageSection('build-community')\">\n      <div (click)=\"scrollToPageSection('build-community')\">ENGAGE</div>\n    </li>\n    <li class=\"site-side-nav-item\" [style.font-weight]=\"pageSection == 'brand-ambassadors' ? 600 : 400\" (click)=\"scrollToPageSection('brand-ambassadors')\">\n      <div (click)=\"scrollToPageSection('brand-ambassadors')\">TRANSFORM</div>\n    </li>\n  </ul>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_scroll_service__ = __webpack_require__("./src/app/services/scroll.service.ts");
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
    function SocialMediaComponent(router, ngxSmartModalService, db, auth, fireStore, httpClient, scrollService) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.db = db;
        this.auth = auth;
        this.fireStore = fireStore;
        this.httpClient = httpClient;
        this.scrollService = scrollService;
        this.endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/httpEmail';
    }
    SocialMediaComponent.prototype.ngOnInit = function () {
        this.message = 'Hello';
        this.pageSection = 'header-unit';
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
    SocialMediaComponent.prototype.scrollToPageSection = function (target) {
        this.pageSection = target;
        this.scrollService.triggerScrollTo(target);
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
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__services_scroll_service__["a" /* ScrollService */]])
    ], SocialMediaComponent);
    return SocialMediaComponent;
}());



/***/ }),

/***/ "./src/app/web-development/web-development.component.css":
/***/ (function(module, exports) {

module.exports = ".desc-wrapper-container {\n  min-height: 0;\n  /* padding: 130px 0; */\n  padding: 0px 0px 60px 0px;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.desc-wrapper {\n  -webkit-animation: feature-text-anim .75s ease-in-out;\n          animation: feature-text-anim .75s ease-in-out;\n  z-index: 100;\n  position: relative;\n  width: 100%;\n  max-width: 956px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 auto;\n  padding: 32px;\n  text-align: center;\n  text-rendering: optimizeLegibility;\n}\n\n.desc-smaller-text {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 28px;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  color: #c3c1c1;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.kohan-header-tagline {\n  display: block;\n  font-weight: 300;\n  font-style: normal;\n  font-size: 58px;\n  letter-spacing: 0px;\n  text-transform: none;\n  line-height: 1.1em;\n  color: #FFFFFF;\n}\n\n.kohan-header-button {\n  background-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  border: 2px solid #FFFFFF !important;\n  color: #FFFFFF;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1em 1.75em;\n  display: inline-block;\n  line-height: 1em;\n  margin: 10px 0;\n  -webkit-transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;\n  transition: background-color .1s 0s ease-in-out, color .1s 0s ease-in-out;  \n  cursor: pointer;\n}\n\n.kohan-header-button:hover {\n  background-color: #FFFFFF;\n  color: #181818;\n  cursor: pointer;\n}\n\n.spacing-section {\n  margin-top: 8%;\n}\n\n.kohan-secondary-statement {\n  text-align: center;\n  font-weight: 300;\n}\n\n.services-image-margins {\n  margin-bottom: 8%;\n}\n\n.service-offerings-content {\n  cursor: auto;\n  outline: none;\n}\n\n.service-offerings-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 20px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n}\n\n.link-to-services {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  /* cursor: pointer; */\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.services-paragraph {\n  font-weight: 300;\n  font-style: normal;\n  font-size: 18px;\n  letter-spacing: .5px;\n  line-height: 1.6em;\n  color: #1F1F1F;\n  margin-top: 1em;\n}\n\n.work-with-us-modal-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n}\n\n.work-with-us-modal-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.lighter-font-weight {\n  font-weight: 300;\n}\n\n.sign-up-button {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 1em 1.75em;\n}\n\n.sign-up-button:hover {\n  background-color: #000000;\n  color: #EFEFEF;\n  cursor: pointer;\n}\n\n.button-spacing {\n  margin-top: 5%;\n}\n\n.learn-more-title {\n  color: #1F1F1F;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  line-height: 1.3em;\n  margin-top: 10%;\n}\n\n.contact-link {\n  color: rgba(31,31,31,.5);\n  text-decoration: none;\n  word-wrap: break-word;\n  background: transparent;\n  cursor: pointer;\n}\n\n.invalid-text {\n  font-weight: 300;\n  color: #dc3545;\n}\n\n.work-with-us-modal-button-disabled {\n  color: #000000;\n  border: 2px solid #000000;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  cursor: not-allowed;\n}\n\n.work-with-us-modal-button-disabled:hover {\n  /* background-color: #000000; */\n  /* color: #EFEFEF; */\n  color: #000000;\n  background-color: #CCCCCC;\n  cursor: not-allowed;\n}\n\n@media only screen and (max-width: 640px) {\n  .desc-wrapper-container {\n    min-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  .desc-smaller-text {\n    font-weight: 300;\n    font-style: normal;\n    font-size: 12px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 1.3em;\n    color: #c3c1c1;\n    margin: 10px auto;\n    text-align: center;\n  }\n\n  .kohan-header-tagline {\n    display: block;\n    font-weight: 300;\n    font-style: normal;\n    font-size: 24px;\n    letter-spacing: 0px;\n    text-transform: none;\n    line-height: 1.1em;\n    color: #FFFFFF;\n  }\n\n  .service-offering-container {\n    padding-top: 8%;\n    padding-bottom: 8%;\n  }\n\n  .kohan-secondary-statement {\n    font-size: 26px;\n  }\n\n  .desc-wrapper {\n    padding: 84px 32px 64px 32px;\n  }\n}\n\n@-webkit-keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}\n\n@keyframes feature-text-anim {\n  0% {\n    opacity: 0;\n    position:relative;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  75% {\n    opacity: 0;\n    -webkit-transform:( translate3d(0,10px,0) );\n            transform:( translate3d(0,10px,0) );\n  }\n  100% {\n    opacity:1;\n    -webkit-transform:( translate3d(0,0,0) );\n            transform:( translate3d(0,0,0) );\n  }\n}"

/***/ }),

/***/ "./src/app/web-development/web-development.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header-unit\"></div>\n<kohan-navbar></kohan-navbar>\n\n<section class=\"full-individual-section\">\n\n  <!-- Contact Us Modal -->\n  <ngx-smart-modal #contactUsModal identifier=\"contactUsModal\" customClass=\"nsm-dialog-animation-btt\">\n    <kohan-contact-us></kohan-contact-us>\n  </ngx-smart-modal>\n\n  <div id=\"video-container\">\n    <video autoplay loop muted playsinline class=\"fillWidth\" style=\"object-fit: cover;\">\n      <source src=\"https://firebasestorage.googleapis.com/v0/b/kohan-creative.appspot.com/o/Metropole%20-%202337.mp4?alt=media&token=3626e458-3e60-42f9-ab22-2572c157686e\"\n        type=\"video/mp4\" />\n    </video>\n  </div>\n  <!-- end video-container -->\n\n  <!-- Work With Us Modal -->\n  <ngx-smart-modal #myModal identifier=\"myModal\" customClass=\"nsm-dialog-animation-btt\">\n    <kohan-work-with-us></kohan-work-with-us>\n  </ngx-smart-modal>\n\n  <div class=\"outer\">\n    <div class=\"middle\">\n      <div class=\"inner\">\n        <h1 class=\"kohan-header-tagline text-align-center\">Web Design & Development</h1>\n        <p class=\"desc-smaller-text text-align-center\">Where Our Passions and Expertise Meet</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"scroll-down-header-arrow-container scroll-down-arrow-center hide-on-mobile\">\n    <div class=\"text-align-center\">\n      <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('holistic-design')\">\n        <fa name=\"chevron-down\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('holistic-design')\"></fa>\n      </div>\n    </div>\n  </div>\n\n  <!-- end .header-unit -->\n</section>\n\n<div class=\"app-background\">\n  <div class=\"container\">\n\n    <section class=\"full-individual-section\" id=\"holistic-design\">\n      <div class=\"row align-items-center align-content-center\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\">\n          <img src=\"../assets/img/kohan_laptop_template1.png\" class=\"img-fluid\" [class.slide-in-left]=\"pageSection == 'holistic-design'\">\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\" [class.slide-in-right]=\"pageSection == 'holistic-design'\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Holistic Design & Development</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Similar to how you provide your patients with thorough, holistic dental care in a luxurious, comfortable environment, we\n            design and develop your website with the same intent - embedding your digital property and presence with the\n            same harmonious feel as your physical one.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <button type=\"button\" class=\"sign-up-button\" (click)=\"openContactUsModal()\">Learn More</button>\n          </h3>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-align-center pt-5 hide-on-mobile\">\n          <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('optimization')\">\n            <fa name=\"chevron-down\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('optimization')\"></fa>\n          </div>\n        </div>\n      </div>\n    </section>\n\n\n    <section class=\"full-individual-section\" id=\"optimization\">\n      <div class=\"row align-items-center align-content-center\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\" [class.slide-in-elliptic-top-fwd]=\"pageSection == 'optimization'\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Built for Maximum Optimization</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            We employ cutting-edge web development practices and frameworks, optimized for search engines and across all mobile devices,\n            to ensure the highest perceived performance and speed with an enhanced user experience to match.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <button type=\"button\" class=\"sign-up-button\" (click)=\"openContactUsModal()\">Get In Touch</button>\n          </h3>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 order-first order-md-2 text-align-center\">\n          <img src=\"../assets/img/Endodontic_Desktop.png\" class=\"img-fluid\" [class.slide-in-elliptic-top-fwd]=\"pageSection == 'optimization'\">\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-align-center pt-5 order-last hide-on-mobile\">\n          <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('digital-office')\">\n            <fa name=\"chevron-down\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('digital-office')\"></fa>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"full-individual-section\" id=\"digital-office\">\n      <div class=\"row align-items-center align-content-center\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\">\n          <img src=\"../assets/img/iphone_example.png\" class=\"img-fluid\" [class.scale-in-center]=\"pageSection == 'digital-office'\">\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 text-align-center\" [class.scale-in-center]=\"pageSection == 'digital-office'\">\n          <h3 class=\"service-offerings-title text-align-center\">\n            <div class=\"link-to-services text-align-center\">Your Digital Dental Office</div>\n          </h3>\n          <p class=\"text-align-center services-paragraph\">\n            Your website is the digital extension of your physical dental office. Therefore, we build your site with a focus on purpose,\n            employing proprietary and third-party technologies that allow you to connect with your patients, process payments,\n            schedule appointments, and more.\n          </p>\n          <h3 class=\"learn-more-title text-align-center\">\n            <button type=\"button\" class=\"sign-up-button\" (click)=\"openContactUsModal()\">Learn More</button>\n          </h3>\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-align-center pt-5 hide-on-mobile\">\n          <div class=\"scroll-down-animation\" (click)=\"scrollToPageSection('header-unit')\">\n            <fa name=\"chevron-up\" size=\"2x\" class=\"scroll-down-animation\" (click)=\"scrollToPageSection('header-unit')\"></fa>\n          </div>\n        </div>\n      </div>\n    </section>\n\n  </div>\n  <kohan-footer></kohan-footer>\n</div>\n\n<!-- Fixed site navigation -->\n<div class=\"site-side-nav\">\n  <ul>\n    <li class=\"site-side-nav-item\" [style.font-weight]=\"pageSection == 'header-unit' ? 600 : 400\" (click)=\"scrollToPageSection('header-unit')\">\n      <div (click)=\"scrollToPageSection('header-unit')\">TOP</div>\n    </li>\n    <li class=\"site-side-nav-item\" [style.font-weight]=\"pageSection == 'holistic-design' ? 600 : 400\" (click)=\"scrollToPageSection('holistic-design')\">\n      <div (click)=\"scrollToPageSection('holistic-design')\">HOLISTIC</div>\n    </li>\n    <li class=\"site-side-nav-item\" [style.font-weight]=\"pageSection == 'optimization' ? 600 : 400\" (click)=\"scrollToPageSection('optimization')\">\n      <div (click)=\"scrollToPageSection('optimization')\">OPTIMIZE</div>\n    </li>\n    <li class=\"site-side-nav-item\" [style.font-weight]=\"pageSection == 'digital-office' ? 600 : 400\" (click)=\"scrollToPageSection('digital-office')\">\n      <div (click)=\"scrollToPageSection('digital-office')\">EXTEND</div>\n    </li>\n  </ul>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_scroll_service__ = __webpack_require__("./src/app/services/scroll.service.ts");
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
    function WebDevelopmentComponent(router, ngxSmartModalService, db, auth, fireStore, httpClient, scrollService) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.db = db;
        this.auth = auth;
        this.fireStore = fireStore;
        this.httpClient = httpClient;
        this.scrollService = scrollService;
        this.endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/httpEmail';
    }
    WebDevelopmentComponent.prototype.ngOnInit = function () {
        this.message = 'Hello';
        this.pageSection = 'header-unit';
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
    WebDevelopmentComponent.prototype.scrollToPageSection = function (target) {
        this.pageSection = target;
        this.scrollService.triggerScrollTo(target);
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
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__services_scroll_service__["a" /* ScrollService */]])
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

module.exports = "<div class=\"text-align-center\">\n  <img class=\"img-fluid kohan-logo\" src=\"../assets/img/KOHAN-Creative-Logo.png\">\n</div>\n<form *ngIf=\"!submitted\" style=\"text-align: left;\" [formGroup]=\"newContactForm\" (ngSubmit)=\"saveContactInformation()\" novalidate>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\" class=\"lighter-font-weight\">Email address *</label>\n    <input type=\"email\" class=\"form-control lighter-font-weight\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\"\n      formControlName=\"email\">\n    <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n    <small *ngIf=\"newContactForm.controls['email'].errors && (newContactForm.controls['email'].dirty || newContactForm.controls['email'].touched)\"\n      class=\"form-text invalid-text\">Please provide your email address!</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\" class=\"lighter-font-weight\">Name of Practice *</label>\n    <input type=\"text\" class=\"form-control lighter-font-weight\" id=\"practiceName\" placeholder=\"Dental or Medical Practice Name\"\n      formControlName=\"practiceName\">\n    <small *ngIf=\"newContactForm.controls['practiceName'].errors && (newContactForm.controls['practiceName'].dirty || newContactForm.controls['practiceName'].touched)\"\n      class=\"form-text invalid-text\">Please provide the name of your practice!</small>\n  </div>\n  <button type=\"submit\" [class.work-with-us-modal-button-disabled]=\"newContactForm.invalid\" class=\"work-with-us-modal-button\"\n    [disabled]=\"newContactForm.invalid\">Submit</button>\n</form>\n\n<div class=\"text-align-center mt-5\" *ngIf=\"submitted\">\n  <p style=\"font-weight: 300;\">Thank you! We will reach out to you shortly via email to learn more about your needs and to schedule a time to chat.</p>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sharing_service__ = __webpack_require__("./src/app/services/sharing.service.ts");
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
    function WorkWithUsComponent(router, ngxSmartModalService, db, auth, fireStore, httpClient, sharingService) {
        this.router = router;
        this.ngxSmartModalService = ngxSmartModalService;
        this.db = db;
        this.auth = auth;
        this.fireStore = fireStore;
        this.httpClient = httpClient;
        this.sharingService = sharingService;
        this.newContactForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            practiceName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required)
        });
        this.endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/httpEmail';
        this.submitted = false;
    }
    WorkWithUsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = 'Hello';
        this.auth.signinAnonymously();
        this.fireStore.read('contacts').subscribe(function (data) {
            _this.fireStoreData = data;
        });
        this.sharingService.currentEmailAddress.subscribe(function (emailAddress) {
            _this.previouslySubmittedEmail = emailAddress;
            _this.newContactForm.patchValue({
                email: _this.previouslySubmittedEmail
            });
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
            _this.sendEmailToSharedService(contactInfo.email);
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
            // toEmail: 'sfarrugia@kohaninc.com',
            // toName: 'Sabina Farrugia',
            toEmail: 'info@kohancreative.com',
            toName: 'Kohan Creative',
            leadEmailAddress: signUpInfo.email,
            leadPracticeName: signUpInfo.practiceName
        };
        this.httpClient.post(this.endpoint, data, { headers: apiHeaders }).subscribe();
        this.submitted = true;
    };
    WorkWithUsComponent.prototype.sendEmailToSharedService = function (emailAddress) {
        this.sharingService.changeEmailAddress(emailAddress);
        console.log('storing email address for other forms: ' + emailAddress);
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
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__services_sharing_service__["a" /* SharingService */]])
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