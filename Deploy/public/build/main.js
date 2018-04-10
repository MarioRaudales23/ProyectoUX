webpackJsonp([0],{

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__informacion_informacion__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__informacion_informacion__["a" /* InformacionPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\ProyectoUX\ProyectoUx\src\pages\tabs\tabs.html"*/'<ion-tabs tabsPlacement=\'top\' >\n\n  <ion-tab [root]="tab1Root" tabTitle="INICIO" ></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="CATEGORIAS" ></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="HACER DENUNCIAS" ></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="MAS INFORMACION" ></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\ProyectoUX\ProyectoUx\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, alertCtrl, actionSheetCtrl, afDatabase, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.userRef = afDatabase.list('users');
        this.users = this.userRef.valueChanges();
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.currentUser = null;
                return;
            }
            _this.currentUser = { uid: user.uid, photoURL: user.photoURL };
        });
    }
    AboutPage.prototype.show = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'What do you want to do?',
            buttons: [
                {
                    text: 'LogOut',
                    role: 'destructive',
                    handler: function () {
                        _this.logout();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AboutPage.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider())
            .then(function (response) {
            console.log('resultado login google:', response);
            var userRef = _this.afDatabase.list('users');
            userRef.update(response.user.uid, {
                userId: response.user.uid,
                displayName: response.user.displayName,
                photoURL: response.user.photoURL
            });
        });
    };
    AboutPage.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\ProyectoUX\ProyectoUx\src\pages\about\about.html"*/'<ion-header>\n  <h1 id=\'tit\' style="text-align: center">DENUNCIAS HONDURAS</h1>\n  <div *ngIf="afAuth.authState | async as user; else showLogin">\n    <ion-title>\n      <ion-item class="item item-trns text-center">\n        <ion-avatar item-end *ngIf="afAuth.authState | async" (click)="show()">\n          <img src={{currentUser.photoURL}}>\n        </ion-avatar>\n      </ion-item>\n    </ion-title>\n  </div>\n  <ng-template #showLogin>\n    <button ion-button color="danger" full (click)="login()" icon-right>\n      <ion-icon name="logo-googleplus"></ion-icon>\n      Login with Google\n    </button>\n  </ng-template>\n</ion-header>\n\n<ion-content padding>\n    <div class="allHome">\n      <div class="left">\n\n      </div>\n      <div class="right">\n        <div id=\'search\'>\n          <br>\n          <br>\n\n          <h2>Buscar</h2>\n          <ion-toolbar>\n            <ion-row class="search_row">\n              <ion-col col-9>\n                <ion-item no-lines>\n                  <ion-input type="text" placeholder="Buscar..." [(ngModel)]="search"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3>\n                <div class="buttons" item-right>\n                  <button ion-fab mini [disabled]="search === \'\'">\n                    <ion-icon name="search"></ion-icon>\n                  </button>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-toolbar>\n        </div>\n        <div id=\'denunciasRecientes\'>\n          <br>\n          <br>\n\n          <h2>Denuncias Recientes</h2>\n          <ion-item *ngFor="let message of messages | async" class="itemchat">\n            <div>\n              <p></p>\n            </div>\n          </ion-item>\n        </div>\n        <div>\n          <br>\n          <br>\n          <h2>Contacto</h2>\n          <p>WhatsApp: +1-504-502-7058</p>\n          <p>info@denunciashonduras.com</p>\n        </div>\n      </div>\n    </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\ProyectoUX\ProyectoUx\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, alertCtrl, actionSheetCtrl, afDatabase, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.currentUser = null;
                return;
            }
            _this.currentUser = { uid: user.uid, photoURL: user.photoURL };
        });
    }
    ContactPage.prototype.show = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'What do you want to do?',
            buttons: [
                {
                    text: 'LogOut',
                    role: 'destructive',
                    handler: function () {
                        _this.logout();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ContactPage.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider())
            .then(function (response) {
            console.log('resultado login google:', response);
            var userRef = _this.afDatabase.list('users');
            userRef.update(response.user.uid, {
                userId: response.user.uid,
                displayName: response.user.displayName,
                photoURL: response.user.photoURL
            });
        });
    };
    ContactPage.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\ProyectoUX\ProyectoUx\src\pages\contact\contact.html"*/'<ion-header>\n    <h1 id=\'tit\' style="text-align: center">DENUNCIAS HONDURAS</h1>\n  <div *ngIf="afAuth.authState | async as user; else showLogin">\n    <ion-title>\n      <ion-item class="item item-trns text-center">\n        <ion-avatar item-end *ngIf="afAuth.authState | async" (click)="show()">\n          <img src={{currentUser.photoURL}}>\n        </ion-avatar>\n      </ion-item>\n    </ion-title>\n  </div>\n  <ng-template #showLogin>\n    <button ion-button color="danger" full (click)="login()" icon-right>\n      <ion-icon name="logo-googleplus"></ion-icon>\n      Login with Google\n    </button>\n  </ng-template>\n</ion-header>\n\n<ion-content padding>\n    <div class=\'allHome\'>\n        <div class=\'left\'>\n         <div>\n            <p>Ingresa tu denuncia en el formulario o envíanoslas a nuestro número de WhatsApp: +1-504-5027058.</p>\n         </div>\n         <ion-list>\n            <ion-item>\n              <ion-label color="primary">Nombre (opcional)</ion-label>\n              <ion-input placeholder="nombre"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label color="primary" >Tu email (obligatorio)</ion-label>\n              <ion-input type="tel" placeholder="email"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label color="primary">Encabezado (obligatorio)</ion-label>\n                <ion-input placeholder="encabezado"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color="primary" >Ubicacion (obligatorio)</ion-label>\n                <ion-input type="tel" placeholder="ubicacion"></ion-input>\n              </ion-item>\n\n            <ion-item>\n                <ion-label color="primary" stacked>Descripcion (obligatorio)</ion-label>\n              <ion-textarea placeholder="descripcion"></ion-textarea>\n            </ion-item>\n          </ion-list>\n          <p>Subir archivo como evidencia (Imagen, video o documento). </p>\n          <button ion-button color="primary">ENVIAR</button>\n\n        </div>\n        <div class="right">\n          <div id=\'search\'>\n          <br>\n          <br>\n\n            <h2>Buscar</h2>\n            <ion-toolbar>\n              <ion-row class="search_row">\n                <ion-col col-9>\n                  <ion-item no-lines>\n                    <ion-input type="text" placeholder="Buscar..." [(ngModel)]="search"></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-3>\n                  <div class="buttons" item-right>\n                    <button ion-fab mini [disabled]="search === \'\'">\n                      <ion-icon name="search"></ion-icon>\n                    </button>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-toolbar>\n          </div>\n          <div id=\'denunciasRecientes\'>\n          <br>\n          <br>\n\n            <h2>Denuncias Recientes</h2>\n            <ion-item *ngFor="let message of messages | async" class="itemchat">\n              <div>\n                <p></p>\n              </div>\n            </ion-item>\n          </div>\n          <div>\n              <br>\n              <br>\n              <h2>Contacto</h2>\n              <p>WhatsApp: +1-504-502-7058</p>\n              <p>info@denunciashonduras.com</p>\n\n\n            </div>\n        </div>\n\n      </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\ProyectoUX\ProyectoUx\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object])
    ], ContactPage);
    return ContactPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, actionSheetCtrl, afDatabase, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.currentUser = null;
                return;
            }
            _this.currentUser = { uid: user.uid, photoURL: user.photoURL };
        });
    }
    HomePage.prototype.show = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'What do you want to do?',
            buttons: [
                {
                    text: 'LogOut',
                    role: 'destructive',
                    handler: function () {
                        _this.logout();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider())
            .then(function (response) {
            console.log('resultado login google:', response);
            var userRef = _this.afDatabase.list('users');
            userRef.update(response.user.uid, {
                userId: response.user.uid,
                displayName: response.user.displayName,
                photoURL: response.user.photoURL
            });
        });
    };
    HomePage.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\ProyectoUX\ProyectoUx\src\pages\home\home.html"*/'<ion-header>\n  <h1 id=\'tit\' style="text-align: center">DENUNCIAS HONDURAS</h1>\n  <div *ngIf="afAuth.authState | async as user; else showLogin">\n    <ion-title>\n      <ion-item class="item item-trns text-center">\n        <ion-avatar item-end *ngIf="afAuth.authState | async" (click)="show()">\n          <img src={{currentUser.photoURL}}>\n        </ion-avatar>\n      </ion-item>\n    </ion-title>\n  </div>\n  <ng-template #showLogin>\n    <button ion-button color="danger" full (click)="login()" icon-right>\n      <ion-icon name="logo-googleplus"></ion-icon>\n      Login with Google\n    </button>\n  </ng-template>\n</ion-header>\n\n<ion-content padding>\n  <div class=\'allHome\'>\n\n    <div class=\'left\'>\n\n      <div id=\'intro\'>\n          <ion-row class="search_row">\n          <ion-col col-1>\n                <button ion-fab color="danger" mini>\n                    <ion-icon>\n                      <ion-img src="assets/imgs/youtubejpg.jpg"></ion-img>\n                    </ion-icon>\n                  </button>\n          </ion-col>\n          <ion-col col-2>\n            <div class="buttons" item-right>\n                <button ion-fab mini>\n                    <ion-icon name="mail"></ion-icon>\n                  </button>\n            </div>\n          </ion-col>\n        </ion-row>\n\n\n        <p>Denuncias Honduras es una iniciativa civil para documentar y denunciar las violaciones de derechos humanos cometidas\n          por los entes de seguridad del Estado hondureño después de las Elecciones Generales de 2017. Nuestro alcance es\n          meramente informativo. Exhortamos a quienes son víctimas de violaciones a sus derechos, a que recurran a las instituciones\n          gubernamentales y organizaciones de derechos humanos correspondientes a interponer sus denuncias.\n        </p>\n        <div class=\'categorias\'>\n          <h2 style="text-align: center"> Categorias</h2>\n          <button ion-button color="secondary">ASESINATOS EXTRAJUDIACIALES</button>\n          <button ion-button color="secondary">BRUTALIDAD POLICIAL</button>\n          <br>\n          <button ion-button color="secondary">DESALOJOS VIOLENTOS</button>\n          <button ion-button color="secondary">PERSONAS DESAPARECIDAS</button>\n          <br>\n          <button ion-button color="secondary">PERSONAS DETENIDAS</button>\n          <button ion-button color="secondary">SAQUEOS</button>\n          <br>\n          <button ion-button color="secondary">CENSURA</button>\n          <button ion-button color="secondary">TORTURA</button>\n          <br>\n        </div>\n        <ion-item *ngFor="let message of messages | async" class="itemchat">\n          <div>\n            <ion-card>\n\n            </ion-card>\n          </div>\n\n        </ion-item>\n      </div>\n    </div>\n    <div class="right">\n      <div id=\'search\'>\n      <br>\n      <br>\n\n        <h2>Buscar</h2>\n        <ion-toolbar>\n          <ion-row class="search_row">\n            <ion-col col-9>\n              <ion-item no-lines>\n                <ion-input type="text" placeholder="Buscar..." [(ngModel)]="search"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-3>\n              <div class="buttons" item-right>\n                <button ion-fab mini [disabled]="search === \'\'">\n                  <ion-icon name="search"></ion-icon>\n                </button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-toolbar>\n      </div>\n      <div id=\'denunciasRecientes\'>\n      <br>\n      <br>\n\n        <h2>Denuncias Recientes</h2>\n        <ion-item *ngFor="let message of messages | async" class="itemchat">\n          <div>\n            <p></p>\n          </div>\n        </ion-item>\n      </div>\n      <div>\n          <br>\n          <br>\n          <h2>Contacto</h2>\n          <p>WhatsApp: +1-504-502-7058</p>\n          <p>info@denunciashonduras.com</p>\n\n\n        </div>\n    </div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\ProyectoUX\ProyectoUx\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InformacionPage = /** @class */ (function () {
    function InformacionPage(navCtrl, alertCtrl, actionSheetCtrl, afDatabase, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.currentUser = null;
                return;
            }
            _this.currentUser = { uid: user.uid, photoURL: user.photoURL };
        });
    }
    InformacionPage.prototype.show = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'What do you want to do?',
            buttons: [
                {
                    text: 'LogOut',
                    role: 'destructive',
                    handler: function () {
                        _this.logout();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    InformacionPage.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider())
            .then(function (response) {
            console.log('resultado login google:', response);
            var userRef = _this.afDatabase.list('users');
            userRef.update(response.user.uid, {
                userId: response.user.uid,
                displayName: response.user.displayName,
                photoURL: response.user.photoURL
            });
        });
    };
    InformacionPage.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    InformacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-informacion',template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\ProyectoUX\ProyectoUx\src\pages\informacion\informacion.html"*/'<ion-header>\n    <h1 id=\'tit\' style="text-align: center">DENUNCIAS HONDURAS</h1>\n    <div *ngIf="afAuth.authState | async as user; else showLogin">\n      <ion-title>\n        <ion-item class="item item-trns text-center">\n          <ion-avatar item-end *ngIf="afAuth.authState | async" (click)="show()">\n            <img src={{currentUser.photoURL}}>\n          </ion-avatar>\n        </ion-item>\n      </ion-title>\n    </div>\n    <ng-template #showLogin>\n      <button ion-button color="danger" full (click)="login()" icon-right>\n        <ion-icon name="logo-googleplus"></ion-icon>\n        Login with Google\n      </button>\n    </ng-template>\n  </ion-header>\n\n  <ion-content padding>\n    <div class=\'allHome\'>\n\n      <div class=\'left\'>\n        <br>\n        <br>\n        <h2>¿Quiénes somos?</h2>\n        <br>\n        <p>Denuncias Honduras es una iniciativa civil para documentar y denunciar las violaciones de derechos humanos cometidas por los entes de seguridad del Estado hondureño. La iniciativa surge en el marco de las Elecciones Generales de 2017 y a raíz de la represión policial y el estado de sitio implementados por el gobierno hondureño.</p>\n        <p>Nuestro objetivo es servir como una fuente alternativa a los medios de comunicación nacionales para que la población hondureña y la comunidad internacional se informen acerca de la situación de los derechos humanos dentro del territorio hondureño.</p>\n        <p>Por el momento nuestro alcance es meramente informativo. Exhortamos a quienes son víctimas de violaciones a sus derechos, a que recurran a las instituciones y organizaciones correspondientes a interponer sus denuncias.</p>\n        </div>\n      <div class="right">\n        <div id=\'search\'>\n        <br>\n        <br>\n\n          <h2>Buscar</h2>\n          <ion-toolbar>\n            <ion-row class="search_row">\n              <ion-col col-9>\n                <ion-item no-lines>\n                  <ion-input type="text" placeholder="Buscar..." [(ngModel)]="search"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3>\n                <div class="buttons" item-right>\n                  <button ion-fab mini [disabled]="search === \'\'">\n                    <ion-icon name="search"></ion-icon>\n                  </button>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-toolbar>\n        </div>\n        <div id=\'denunciasRecientes\'>\n        <br>\n        <br>\n\n          <h2>Denuncias Recientes</h2>\n          <ion-item *ngFor="let message of messages | async" class="itemchat">\n            <div>\n              <p></p>\n            </div>\n          </ion-item>\n        </div>\n        <div>\n            <br>\n            <br>\n            <h2>Contacto</h2>\n            <p>WhatsApp: +1-504-502-7058</p>\n            <p>info@denunciashonduras.com</p>\n\n\n          </div>\n      </div>\n\n    </div>\n\n  </ion-content>\n'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\ProyectoUX\ProyectoUx\src\pages\informacion\informacion.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object])
    ], InformacionPage);
    return InformacionPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=informacion.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(305);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_informacion_informacion__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var firebaseConfig = {
    apiKey: "AIzaSyCrWNL1PmCX1Q-Ptp6ZV5hkhGmjuA1ljyc",
    authDomain: "denuncias-962d3.firebaseapp.com",
    databaseURL: "https://denuncias-962d3.firebaseio.com",
    projectId: "denuncias-962d3",
    storageBucket: "denuncias-962d3.appspot.com",
    messagingSenderId: "117044279583"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_informacion_informacion__["a" /* InformacionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_informacion_informacion__["a" /* InformacionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\ProyectoUX\ProyectoUx\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\ProyectoUX\ProyectoUx\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[285]);
//# sourceMappingURL=main.js.map