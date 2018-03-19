webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui left fixed vertical menu\">\r\n  <div class=\"item\">\r\n    <div class=\"header\"><h2>Tasks app</h2></div>\r\n    <div class=\"menu\">\r\n      <a class=\"item\" routerLink=\"\"><h3>Tasks</h3></a>\r\n      <a class=\"item\"><h3>Subtasks</h3></a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-main-content></app-main-content>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Angular 5';
        this.text = 'This is text before click.';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tasks_tasks_component__ = __webpack_require__("./src/app/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_content_main_content_component__ = __webpack_require__("./src/app/main-content/main-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tasks_new_task_new_task_component__ = __webpack_require__("./src/app/tasks/new-task/new-task.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__tasks_tasks_component__["a" /* TasksComponent */] },
    { path: 'newtask', component: __WEBPACK_IMPORTED_MODULE_8__tasks_new_task_new_task_component__["a" /* NewTaskComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__tasks_tasks_component__["a" /* TasksComponent */], __WEBPACK_IMPORTED_MODULE_6__main_content_main_content_component__["a" /* MainContentComponent */], __WEBPACK_IMPORTED_MODULE_8__tasks_new_task_new_task_component__["a" /* NewTaskComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/src/app.module.js.map

/***/ }),

/***/ "./src/app/main-content/main-content.component.css":
/***/ (function(module, exports) {

module.exports = ".main-content {\r\n  padding-left: 15rem;\r\n  margin: 1rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main-content/main-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n\t  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-content/main-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainContentComponent = /** @class */ (function () {
    function MainContentComponent() {
    }
    MainContentComponent.prototype.ngOnInit = function () {
    };
    MainContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-main-content',
            template: __webpack_require__("./src/app/main-content/main-content.component.html"),
            styles: [__webpack_require__("./src/app/main-content/main-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainContentComponent);
    return MainContentComponent;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/src/main-content.component.js.map

/***/ }),

/***/ "./src/app/models/task.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(pk, name, user, description, contractId, status) {
        this.pk = pk;
        this.name = name;
        this.user = user;
        this.description = description;
        this.contractId = contractId;
        this.status = status;
    }
    return Task;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/src/task.model.js.map

/***/ }),

/***/ "./src/app/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.ROOT_URL = 'http://localhost:8000/tasks';
    }
    TaskService.prototype.saveTask = function (data) {
        if (data.name != '' && data.description != '' && data.contractId != 0) {
            return this.http.post(this.ROOT_URL + '/', data, httpOptions);
        }
    };
    TaskService.prototype.getTasks = function (searchQuery) {
        return this.http.get(this.ROOT_URL + '?q=' + searchQuery);
    };
    TaskService.prototype.deleteTask = function (id) {
        var url = this.ROOT_URL + "/" + id;
        return this.http.delete(url, httpOptions);
    };
    TaskService.prototype.updateTask = function (data) {
        var url = this.ROOT_URL + "/" + data.pk + "/";
        return this.http.put(url, data, httpOptions);
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], TaskService);
    return TaskService;
    var _a;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/src/task.service.js.map

/***/ }),

/***/ "./src/app/tasks/new-task/new-task.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tasks/new-task/new-task.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"ui form\">\n  <div class=\"field\">\n    <label>Name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"task.name\" placeholder=\"Name\" name=\"name\">\n\t</div>\n  <div class=\"field\">\n    <label>Description</label>\n\t\t<input type=\"text\" [(ngModel)]=\"task.description\" placeholder=\"Description\" name=\"description\">\n\t</div>\n  <div class=\"field\">\n    <label>Contract</label>\n\t\t<input type=\"number\" [(ngModel)]=\"task.contractId\" placeholder=\"Contract\" name=\"contractId\">\n\t</div>\n  <div class=\"field\">\n    <label>Status</label>\n\t\t<input type=\"number\" [(ngModel)]=\"task.status\" placeholder=\"Status\" name=\"status\">\n\t</div>\n  <button class=\"ui button\" (click)=\"saveTask()\">Save</button>\n</form>\n"

/***/ }),

/***/ "./src/app/tasks/new-task/new-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_task_model__ = __webpack_require__("./src/app/models/task.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_service__ = __webpack_require__("./src/app/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewTaskComponent = /** @class */ (function () {
    function NewTaskComponent(router, taskService) {
        this.router = router;
        this.taskService = taskService;
        this.task = new __WEBPACK_IMPORTED_MODULE_1__models_task_model__["a" /* Task */](0, 'The new task', 1, 'Created from angular client', 57381, 2);
    }
    NewTaskComponent.prototype.ngOnInit = function () {
    };
    NewTaskComponent.prototype.saveTask = function () {
        var _this = this;
        var data = {
            pk: this.task.pk,
            name: this.task.name,
            user: this.task.user,
            description: this.task.description,
            contractId: this.task.contractId,
            status: this.task.status
        };
        this.taskService.saveTask(data)
            .subscribe(function (res) { return _this.router.navigate(['/']); });
        ;
    };
    NewTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-new-task',
            template: __webpack_require__("./src/app/tasks/new-task/new-task.component.html"),
            styles: [__webpack_require__("./src/app/tasks/new-task/new-task.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */]) === "function" && _b || Object])
    ], NewTaskComponent);
    return NewTaskComponent;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/src/new-task.component.js.map

/***/ }),

/***/ "./src/app/tasks/tasks.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui menu\">\r\n\t<div class=\"item header\">\r\n\t\t<h2>Tasks</h2>\r\n\t</div>\r\n  <div class=\"item right\">\r\n  \t<a routerLink=\"/newtask\">\r\n\t\t\t<div class=\"ui primary button\"><i class=\"plus icon\"></i>New Task</div>\r\n\t\t</a>\r\n\t</div>\r\n</div>\r\n\r\n<form class=\"ui form\">\r\n  <div class=\"field\">\r\n    <label>Search</label>\r\n\t\t<input type=\"text\" [(ngModel)]=\"searchQuery\" placeholder=\"Search\" name=\"search\">\r\n\t</div>\r\n</form>\r\n\r\n<table class=\"ui celled striped table\">\r\n<thead>\r\n\t<tr><th class=\"single line\">Name</th>\r\n\t<th>Description</th>\r\n\t<th>Contract</th>\r\n\t<th>Status</th>\r\n\t<th>Actions</th>\r\n</tr></thead>\r\n<tbody>\r\n\t<tr *ngFor=\"let task of tasks | async\">\r\n\t\t<td>\r\n\t\t\t{{ task.name }}\r\n\t\t</td>\r\n\t\t<td class=\"single line\">\r\n\t\t\t{{ task.description }}\r\n\t\t</td>\r\n\t\t<td>\r\n\t\t\t{{ task.contractId }}\r\n\t\t</td>\r\n\t\t<td>\r\n\t\t\t{{ task.status }}\r\n\t\t</td>\r\n\t\t<td class=\"right aligned\">\r\n\t\t\t<div class=\"ui button small\" (click)=\"editTask(task)\"><i class=\"pencil alternate icon\"></i>Edit</div>\r\n\t\t\t<div class=\"ui red button small\" (click)=\"deleteTask(task.pk)\"><i class=\"trash alternate icon\"></i>Delete</div>\r\n\t\t</td>\r\n\t</tr>\r\n</tbody>\r\n</table>\r\n\r\n<button class=\"ui teal button\" (click)=\"getTasks()\"><i class=\"download icon\"></i>Get Tasks</button>\r\n\r\n\r\n<div class=\"ui modal\">\r\n  <div class=\"header\">Edit Task</div>\r\n  <div *ngIf=\"currentTask\" class=\"content\">\r\n\t\t<form class=\"ui form\">\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>Name</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"currentTask.name\" placeholder=\"Name\" name=\"name\">\r\n\t\t\t</div>\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>Description</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"currentTask.description\" placeholder=\"Description\" name=\"description\">\r\n\t\t\t</div>\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>Contract</label>\r\n\t\t\t\t<input type=\"number\" [(ngModel)]=\"currentTask.contractId\" placeholder=\"Contract\" name=\"contractId\">\r\n\t\t\t</div>\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>Status</label>\r\n\t\t\t\t<input type=\"number\" [(ngModel)]=\"currentTask.status\" placeholder=\"Status\" name=\"status\">\r\n\t\t\t</div>\r\n\t\t</form>\r\n  </div>\r\n  <div class=\"actions\">\r\n\t\t<button class=\"ui primary approve button\" (click)=\"updateTask(currentTask)\">Save</button>\r\n    <div class=\"ui cancel button\">Cancel</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_service__ = __webpack_require__("./src/app/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksComponent = /** @class */ (function () {
    function TasksComponent(taskService) {
        this.taskService = taskService;
        this.searchQuery = '';
    }
    TasksComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    TasksComponent.prototype.getTasks = function () {
        this.tasks = this.taskService.getTasks(this.searchQuery);
    };
    TasksComponent.prototype.deleteTask = function (id) {
        var _this = this;
        console.log(id);
        this.taskService.deleteTask(id)
            .subscribe(function (res) { return _this.getTasks(); });
    };
    TasksComponent.prototype.updateTask = function (task) {
        var _this = this;
        console.log(task);
        this.taskService.updateTask(task)
            .subscribe(function (res) { return _this.getTasks(); });
    };
    TasksComponent.prototype.editTask = function (task) {
        this.currentTask = task;
        $('.ui.modal')
            .modal('show');
    };
    TasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-tasks',
            template: __webpack_require__("./src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__("./src/app/tasks/tasks.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */]) === "function" && _a || Object])
    ], TasksComponent);
    return TasksComponent;
    var _a;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/src/tasks.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map