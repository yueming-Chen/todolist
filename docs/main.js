(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mytask_mytask_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mytask/mytask.component */ "./src/app/mytask/mytask.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'mytask', component: _mytask_mytask_component__WEBPACK_IMPORTED_MODULE_4__["MytaskComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _mytask_mytask_component__WEBPACK_IMPORTED_MODULE_4__["MytaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mytask/mytask.component.html":
/*!**********************************************!*\
  !*** ./src/app/mytask/mytask.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header flex\">\n  <div class=\"f2\"></div>\n  <div class=\"tab active f1\">My task</div>\n  <div class=\"tab f1\">in Porgress</div>\n  <div class=\"tab f1\">Completed</div>\n  <div class=\"f2\"></div>\n</header>\n\n<section class=\"flex\">\n  <div class=\"f1\"></div>\n  <div class=\"f2 list\">\n    <div class=\"card\">\n      <input type=\"text\" name=\"\" id=\"\" class=\"addTask\" placeholder=\" + add task\">\n    </div>\n    <div class=\"task\">\n      <div class=\"check\">\n        <label for=\"c1\">\n          <input type=\"checkbox\" name=\"c1\" id=\"\">\n          <span> </span>\n        </label>\n      </div>\n      <div class=\"info f2\">\n        <div class=\"title\">Type something here....</div>\n        <div class=\"date\">\n          <i class=\"fas fa-calendar-alt\"></i>5/14</div>\n      </div>\n      <div class=\"edit f1\">\n        <i class=\"fas fa-star\"></i>\n        <i class=\"fas fa-edit\"></i>\n      </div>\n    </div>\n    <div class=\"task star\">\n      <div class=\"check\">\n        <label for=\"c1\">\n          <input type=\"checkbox\" name=\"c1\" id=\"\">\n          <span> </span>\n        </label>\n      </div>\n      <div class=\"info f2\">\n        <div class=\"title\">Type something here....</div>\n        <div class=\"date\">\n          <i class=\"fas fa-calendar-alt\"></i>5/14</div>\n      </div>\n      <div class=\"edit f1\">\n        <i class=\"fas fa-star\"></i>\n        <i class=\"fas fa-edit\"></i>\n      </div>\n    </div>\n    <div class=\"task complete\">\n      <div class=\"check\">\n        <label for=\"c1\">\n          <input type=\"checkbox\" name=\"c1\" id=\"\" checked>\n          <span> </span>\n        </label>\n      </div>\n      <div class=\"info f2\">\n        <div class=\"title\">Type something here....</div>\n        <div class=\"date\">\n          <i class=\"fas fa-calendar-alt\"></i>5/14</div>\n      </div>\n      <div class=\"edit f1\">\n        <i class=\"fas fa-star\"></i>\n        <i class=\"fas fa-edit\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"f1\"></div>\n</section>"

/***/ }),

/***/ "./src/app/mytask/mytask.component.scss":
/*!**********************************************!*\
  !*** ./src/app/mytask/mytask.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  width: 100%;\n  background: #4a90e2;\n  display: flex;\n  justify-content: space-evenly;\n  padding: 0rem 3rem; }\n  .header .tab {\n    text-align: center;\n    padding: 1rem 0rem;\n    color: #00408b;\n    border-bottom: 3px solid #4a90e2; }\n  .header .tab.active {\n      border-bottom: 3px solid #00408b;\n      color: white; }\n  .list {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem; }\n  .list .card {\n    width: 100%; }\n  .list .card .addTask {\n      border: 1px solid #ccc;\n      border-radius: 3px;\n      color: #ccc;\n      width: 100%;\n      padding: .6rem;\n      font-size: 1.1rem;\n      margin-bottom: 1rem; }\n  .list .task {\n    border: 1px solid #ccc;\n    border-radius: 3px;\n    background: #f2f2f2;\n    display: flex;\n    padding: 1rem 1rem;\n    margin-top: 4px; }\n  .list .task .check {\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n  .list .task .info {\n      padding-left: 4px; }\n  .list .task .info .title {\n        font-size: 1.1rem; }\n  .list .task .edit {\n      display: flex;\n      justify-content: flex-end;\n      align-items: center; }\n  .list .task .edit i {\n        font-size: 1.3rem;\n        margin-right: .5rem; }\n  .list .task.star {\n      background: #fff2dc; }\n  .list .task.star .fa-star {\n        color: #f5a623; }\n  .list .task.complete .title {\n      text-decoration: line-through; }\n  .flex {\n  display: flex; }\n  .f1 {\n  flex: 1; }\n  .f2 {\n  flex: 2; }\n"

/***/ }),

/***/ "./src/app/mytask/mytask.component.ts":
/*!********************************************!*\
  !*** ./src/app/mytask/mytask.component.ts ***!
  \********************************************/
/*! exports provided: MytaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytaskComponent", function() { return MytaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MytaskComponent = /** @class */ (function () {
    function MytaskComponent() {
    }
    MytaskComponent.prototype.ngOnInit = function () {
    };
    MytaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mytask',
            template: __webpack_require__(/*! ./mytask.component.html */ "./src/app/mytask/mytask.component.html"),
            styles: [__webpack_require__(/*! ./mytask.component.scss */ "./src/app/mytask/mytask.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MytaskComponent);
    return MytaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chenyueming/todolist/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map