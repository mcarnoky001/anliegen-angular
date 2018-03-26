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

/***/ "./src/app/administration/selected-task/selected-task.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administration/selected-task/selected-task.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui menu\">\r\n\t<div class=\"item header\">\r\n\t\t<h2>{{ task.name }}</h2>\r\n\t</div>\r\n  <div class=\"item right\">\r\n\t\t<h2>#{{ task.contractId }}</h2>\r\n\t</div>\r\n  <div class=\"item\">\r\n    <div class=\"ui primary tiny button\" (click)=\"selectTask()\"><i class=\"search icon\"></i>Select Task</div>\r\n  </div>\r\n</div>\r\n\r\n<table class=\"ui celled striped table\">\r\n  <thead>\r\n  \t<tr><th class=\"single line\" colspan=\"2\">{{ task.name }}</th>\r\n  </tr></thead>\r\n  <tbody>\r\n  \t<tr *ngFor=\"let subtask of subtasks\">\r\n  \t\t<td>\r\n  \t\t\t{{ subtask.name }}\r\n  \t\t</td>\r\n  \t\t<td class=\"right aligned\">\r\n  \t\t\t<div class=\"ui green button small\" (click)=\"resolveSubtask(subtask)\" [ngClass]=\"{'disabled': subtask.status===1}\">\r\n\t\t\t\t\t<i class=\"check icon\"></i>Resolve\r\n\t\t\t\t</div>\r\n  \t\t</td>\r\n  \t</tr>\r\n  </tbody>\r\n</table>\r\n\r\n\r\n<div class=\"ui modal select\">\r\n  <div class=\"header\">Select Task</div>\r\n  <div class=\"content\">\r\n    <table class=\"ui celled striped table\">\r\n    <thead>\r\n    \t<tr><th class=\"single line\">Name</th>\r\n    \t<th>Description</th>\r\n    \t<th>Contract</th>\r\n    \t<th>Status</th>\r\n    \t<th>Actions</th>\r\n    </tr></thead>\r\n    <tbody>\r\n    \t<tr *ngFor=\"let task of tasks | async\">\r\n    \t\t<td>\r\n    \t\t\t{{ task.name }}\r\n    \t\t</td>\r\n    \t\t<td class=\"single line\">\r\n    \t\t\t{{ task.description }}\r\n    \t\t</td>\r\n    \t\t<td>\r\n    \t\t\t{{ task.contractId }}\r\n    \t\t</td>\r\n    \t\t<td>\r\n    \t\t\t{{ task.status }}\r\n    \t\t</td>\r\n    \t\t<td class=\"right aligned\">\r\n    \t\t\t<div class=\"ui approve button\" (click)=\"applySelectedTask(task)\"><i class=\"caret right icon\"></i>Select</div>\r\n    \t\t</td>\r\n    \t</tr>\r\n    </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"actions\">\r\n    <div class=\"ui cancel button\">Cancel</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/administration/selected-task/selected-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_task_model__ = __webpack_require__("./src/app/models/task.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_task_service__ = __webpack_require__("./src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_subtask_service__ = __webpack_require__("./src/app/services/subtask.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectedTaskComponent = /** @class */ (function () {
    function SelectedTaskComponent(taskService, subtaskService) {
        this.taskService = taskService;
        this.subtaskService = subtaskService;
        this.task = new __WEBPACK_IMPORTED_MODULE_1__models_task_model__["a" /* Task */](1, '', 0, '', 0, 0, '', '', '', '');
    }
    SelectedTaskComponent.prototype.ngOnInit = function () {
        this.getTask();
        this.getSubtasks();
        this.tasks = this.taskService.getTasks('');
    };
    SelectedTaskComponent.prototype.getTask = function () {
        var _this = this;
        this.taskService.getTask(this.task.pk)
            .subscribe(function (res) {
            _this.task = res;
        });
    };
    SelectedTaskComponent.prototype.getSubtasks = function () {
        var _this = this;
        this.subtaskService.getSubtaskByTaskId(this.task.pk)
            .subscribe(function (res) {
            _this.subtasks = res;
        });
    };
    SelectedTaskComponent.prototype.selectTask = function () {
        $('.ui.modal.select')
            .modal('show');
    };
    SelectedTaskComponent.prototype.applySelectedTask = function (task) {
        this.task = task;
        $('.ui.modal.select')
            .modal('hide');
        this.getSubtasks();
    };
    SelectedTaskComponent.prototype.resolveSubtask = function (subtask) {
        subtask.status = 1;
        this.subtaskService.updateSubtask(subtask)
            .subscribe(function (res) { });
        this.getSubtasks();
    };
    SelectedTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-selected-task',
            template: __webpack_require__("./src/app/administration/selected-task/selected-task.component.html"),
            styles: [__webpack_require__("./src/app/administration/selected-task/selected-task.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_subtask_service__["a" /* SubtaskService */], __WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_subtask_service__["a" /* SubtaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_subtask_service__["a" /* SubtaskService */]) === "function" && _b || Object])
    ], SelectedTaskComponent);
    return SelectedTaskComponent;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/selected-task.component.js.map

/***/ }),

/***/ "./src/app/administration/skills/skills.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administration/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui menu\">\r\n\t<div class=\"item header\">\r\n\t\t<h2>Skills</h2>\r\n\t</div>\r\n  <div class=\"item right\">\r\n\t\t<div class=\"ui primary button\" (click)=\"newSkill()\"><i class=\"plus icon\"></i>New Skill</div>\r\n\t</div>\r\n</div>\r\n\r\n<form class=\"ui form\">\r\n  <div class=\"field\">\r\n    <label>Search</label>\r\n\t\t<input type=\"text\" [(ngModel)]=\"searchQuery\" placeholder=\"Search\" name=\"search\">\r\n\t</div>\r\n</form>\r\n\r\n<table class=\"ui celled striped table\">\r\n<thead>\r\n\t<tr><th class=\"single line\">Name</th>\r\n\t<th>Actions</th>\r\n</tr></thead>\r\n<tbody>\r\n\t<tr *ngFor=\"let skill of skills | async\">\r\n\t\t<td>\r\n\t\t\t{{ skill.name }}\r\n\t\t</td>\r\n\t\t<td class=\"right aligned\">\r\n\t\t\t<div class=\"ui button small\" (click)=\"editSkill(skill)\"><i class=\"pencil alternate icon\"></i>Edit</div>\r\n\t\t\t<div class=\"ui red button small\" (click)=\"deleteSkill(skill.pk)\"><i class=\"trash alternate icon\"></i>Delete</div>\r\n\t\t</td>\r\n\t</tr>\r\n</tbody>\r\n</table>\r\n\r\n<button class=\"ui teal button\" (click)=\"getSkills()\"><i class=\"download icon\"></i>Get Skills</button>\r\n\r\n\r\n<div class=\"ui modal edit\">\r\n  <div class=\"header\">Edit Skills</div>\r\n  <div *ngIf=\"currentSkill\" class=\"content\">\r\n\t\t<form class=\"ui form\">\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>Name</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"currentSkill.name\" placeholder=\"Name\" name=\"name\">\r\n\t\t\t</div>\r\n\t\t</form>\r\n  </div>\r\n  <div class=\"actions\">\r\n\t\t<button class=\"ui primary approve button\" (click)=\"updateSkill(currentSkill)\">Save</button>\r\n    <div class=\"ui cancel button\">Cancel</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui modal new\">\r\n  <div class=\"header\">New Skill</div>\r\n  <div *ngIf=\"currentSkill\" class=\"content\">\r\n\t\t<form class=\"ui form\">\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>Name</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"currentSkill.name\" placeholder=\"Name\" name=\"name\">\r\n\t\t\t</div>\r\n\t\t</form>\r\n  </div>\r\n  <div class=\"actions\">\r\n\t\t<button class=\"ui primary approve button\" (click)=\"saveSkill(currentSkill)\">Save</button>\r\n    <div class=\"ui cancel button\">Cancel</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/administration/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_skill_model__ = __webpack_require__("./src/app/models/skill.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_skill_service__ = __webpack_require__("./src/app/services/skill.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(router, skillService) {
        this.router = router;
        this.skillService = skillService;
        this.searchQuery = '';
    }
    SkillsComponent.prototype.ngOnInit = function () {
        this.getSkills();
    };
    SkillsComponent.prototype.getSkills = function () {
        this.skills = this.skillService.getSkills(this.searchQuery);
    };
    SkillsComponent.prototype.deleteSkill = function (id) {
        var _this = this;
        this.skillService.deleteSkill(id)
            .subscribe(function (res) { return _this.getSkills(); });
    };
    SkillsComponent.prototype.updateSkill = function (skill) {
        var _this = this;
        this.skillService.updateSkill(skill)
            .subscribe(function (res) { return _this.getSkills(); });
    };
    SkillsComponent.prototype.editSkill = function (skill) {
        this.currentSkill = skill;
        $('.ui.modal.edit')
            .modal('show');
    };
    SkillsComponent.prototype.newSkill = function () {
        this.currentSkill = new __WEBPACK_IMPORTED_MODULE_2__models_skill_model__["a" /* Skill */](0, 'CSS');
        $('.ui.modal.new')
            .modal('show');
    };
    SkillsComponent.prototype.saveSkill = function (skill) {
        var _this = this;
        this.skillService.saveSkill(skill)
            .subscribe(function (res) { return _this.getSkills(); });
        ;
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("./src/app/administration/skills/skills.component.html"),
            styles: [__webpack_require__("./src/app/administration/skills/skills.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_skill_service__["a" /* SkillService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_skill_service__["a" /* SkillService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_skill_service__["a" /* SkillService */]) === "function" && _b || Object])
    ], SkillsComponent);
    return SkillsComponent;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/skills.component.js.map

/***/ }),

/***/ "./src/app/administration/subtasks/subtasks.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administration/subtasks/subtasks.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui menu\">\r\n\t<div class=\"item header\">\r\n\t\t<h2>Subtasks</h2>\r\n\t</div>\r\n  <div class=\"item right\">\r\n\t\t<div class=\"ui primary button\" (click)=\"newSubtask()\"><i class=\"plus icon\"></i>New Subtask</div>\r\n\t</div>\r\n</div>\r\n\r\n<form class=\"ui form\">\r\n  <div class=\"field\">\r\n    <label>Search</label>\r\n\t\t<input type=\"text\" [(ngModel)]=\"searchQuery\" placeholder=\"Search\" name=\"search\">\r\n\t</div>\r\n</form>\r\n\r\n<table class=\"ui celled striped table\">\r\n<thead>\r\n\t<tr><th class=\"single line\">Name</th>\r\n\t<th>Description</th>\r\n\t<th>User</th>\r\n\t<th>Status</th>\r\n  <th>Task</th>\r\n\t<th>Actions</th>\r\n</tr></thead>\r\n<tbody>\r\n\t<tr *ngFor=\"let subtask of subtasks | async\">\r\n\t\t<td>\r\n\t\t\t{{ subtask.name }}\r\n\t\t</td>\r\n\t\t<td class=\"single line\">\r\n\t\t\t{{ subtask.description }}\r\n\t\t</td>\r\n\t\t<td>\r\n\t\t\t{{ subtask.user }}\r\n\t\t</td>\r\n\t\t<td>\r\n\t\t\t{{ subtask.status }}\r\n\t\t</td>\r\n    <td>\r\n\t\t\t{{ subtask.task }}\r\n\t\t</td>\r\n\t\t<td class=\"right aligned\">\r\n\t\t\t<div class=\"ui button small\" (click)=\"editSubtask(subtask)\"><i class=\"pencil alternate icon\"></i>Edit</div>\r\n\t\t\t<div class=\"ui red button small\" (click)=\"deleteSubtask(subtask.pk)\"><i class=\"trash alternate icon\"></i>Delete</div>\r\n\t\t</td>\r\n\t</tr>\r\n</tbody>\r\n</table>\r\n\r\n<button class=\"ui teal button\" (click)=\"getSubtasks()\"><i class=\"download icon\"></i>Get Subtasks</button>\r\n\r\n\r\n<div class=\"ui modal edit\">\r\n  <div class=\"header\">Edit Subtask</div>\r\n  <div *ngIf=\"currentSubtask\" class=\"content\">\r\n\t\t<form class=\"ui form\">\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>Name</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"currentSubtask.name\" placeholder=\"Name\" name=\"name\">\r\n\t\t\t</div>\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>Description</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"currentSubtask.description\" placeholder=\"Description\" name=\"description\">\r\n\t\t\t</div>\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>User</label>\r\n\t\t\t\t<input type=\"number\" [(ngModel)]=\"currentSubtask.user\" placeholder=\"User\" name=\"user\">\r\n\t\t\t</div>\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>Status</label>\r\n\t\t\t\t  <select type=\"hidden\" class=\"dropdown\" name=\"status\" [(ngModel)]=\"currentSubtask.status\" placeholder=\"Status\">\r\n\t\t\t\t    <option value=\"1\">1</option>\r\n\t\t\t\t    <option value=\"0\">0</option>\r\n\t\t\t\t \t</select>\r\n\r\n\t\t\t</div>\r\n      <div class=\"field\">\r\n\t\t    <label>Task</label>\r\n\t\t\t\t<input type=\"number\" [(ngModel)]=\"currentSubtask.task\" placeholder=\"Task\" name=\"task\">\r\n\t\t\t</div>\r\n\t\t</form>\r\n  </div>\r\n  <div class=\"actions\">\r\n\t\t<button class=\"ui primary approve button\" (click)=\"updateSubtask(currentSubtask)\">Save</button>\r\n    <div class=\"ui cancel button\">Cancel</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui modal new\">\r\n  <div class=\"header\">New Subtask</div>\r\n  <div *ngIf=\"currentSubtask\" class=\"content\">\r\n\t\t<form class=\"ui form\">\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>Name</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"currentSubtask.name\" placeholder=\"Name\" name=\"name\">\r\n\t\t\t</div>\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>Description</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"currentSubtask.description\" placeholder=\"Description\" name=\"description\">\r\n\t\t\t</div>\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>User</label>\r\n\t\t\t\t<input type=\"number\" [(ngModel)]=\"currentSubtask.user\" placeholder=\"User\" name=\"user\">\r\n\t\t\t</div>\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>Status</label>\r\n\t\t\t\t<input type=\"number\" [(ngModel)]=\"currentSubtask.status\" placeholder=\"Status\" name=\"status\">\r\n\t\t\t</div>\r\n      <div class=\"field\">\r\n\t\t    <label>Task</label>\r\n\t\t\t\t<input type=\"number\" [(ngModel)]=\"currentSubtask.task\" placeholder=\"Task\" name=\"task\">\r\n\t\t\t</div>\r\n\t\t</form>\r\n  </div>\r\n  <div class=\"actions\">\r\n\t\t<button class=\"ui primary approve button\" (click)=\"saveSubtask(currentSubtask)\">Save</button>\r\n    <div class=\"ui cancel button\">Cancel</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/administration/subtasks/subtasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubtasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_subtask_model__ = __webpack_require__("./src/app/models/subtask.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_subtask_service__ = __webpack_require__("./src/app/services/subtask.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubtasksComponent = /** @class */ (function () {
    function SubtasksComponent(router, subtaskService) {
        this.router = router;
        this.subtaskService = subtaskService;
        this.searchQuery = '';
    }
    SubtasksComponent.prototype.ngOnInit = function () {
        this.getSubtasks();
    };
    SubtasksComponent.prototype.getSubtasks = function () {
        this.subtasks = this.subtaskService.getSubtasks(this.searchQuery);
    };
    SubtasksComponent.prototype.deleteSubtask = function (id) {
        var _this = this;
        this.subtaskService.deleteSubtask(id)
            .subscribe(function (res) { return _this.getSubtasks(); });
    };
    SubtasksComponent.prototype.updateSubtask = function (subtask) {
        var _this = this;
        this.subtaskService.updateSubtask(subtask)
            .subscribe(function (res) { return _this.getSubtasks(); });
    };
    SubtasksComponent.prototype.editSubtask = function (subtask) {
        this.currentSubtask = subtask;
        $('.ui.modal.edit')
            .modal('show');
    };
    SubtasksComponent.prototype.newSubtask = function () {
        this.currentSubtask = new __WEBPACK_IMPORTED_MODULE_2__models_subtask_model__["a" /* Subtask */](0, 'Subtask for main task', 0, 'Created from angular client', 0, 2);
        $('.ui.modal.new')
            .modal('show');
    };
    SubtasksComponent.prototype.saveSubtask = function (subtask) {
        var _this = this;
        this.subtaskService.saveSubtask(subtask)
            .subscribe(function (res) { return _this.getSubtasks(); });
    };
    SubtasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-subtasks',
            template: __webpack_require__("./src/app/administration/subtasks/subtasks.component.html"),
            styles: [__webpack_require__("./src/app/administration/subtasks/subtasks.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_subtask_service__["a" /* SubtaskService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_subtask_service__["a" /* SubtaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_subtask_service__["a" /* SubtaskService */]) === "function" && _b || Object])
    ], SubtasksComponent);
    return SubtasksComponent;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/subtasks.component.js.map

/***/ }),

/***/ "./src/app/administration/tasks/new-task/new-task.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administration/tasks/new-task/new-task.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"ui form\">\n  <div class=\"field\">\n    <label>Name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"task.name\" placeholder=\"Name\" name=\"name\">\n\t</div>\n  <div class=\"field\">\n    <label>Description</label>\n\t\t<input type=\"text\" [(ngModel)]=\"task.description\" placeholder=\"Description\" name=\"description\">\n\t</div>\n  <div class=\"field\">\n    <label>Contract</label>\n\t\t<input type=\"number\" [(ngModel)]=\"task.contractId\" placeholder=\"Contract\" name=\"contractId\">\n\t</div>\n  <div class=\"field\">\n    <label>Status</label>\n\t\t<input type=\"number\" [(ngModel)]=\"task.status\" placeholder=\"Status\" name=\"status\">\n\t</div>\n  <button class=\"ui primary button\" (click)=\"saveTask()\">Save</button>\n  <button class=\"ui button\" routerLink=\"\">Back</button>\n</form>\n"

/***/ }),

/***/ "./src/app/administration/tasks/new-task/new-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_task_model__ = __webpack_require__("./src/app/models/task.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_task_service__ = __webpack_require__("./src/app/services/task.service.ts");
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
        this.task = new __WEBPACK_IMPORTED_MODULE_2__models_task_model__["a" /* Task */](0, 'The new task', 'description', 1, 'Created from angular client', 2, 'Blocker', 1, 'Note', '2018-01-01');
    }
    NewTaskComponent.prototype.ngOnInit = function () {
    };
    NewTaskComponent.prototype.saveTask = function () {
        var _this = this;
        this.taskService.saveTask(this.task)
            .subscribe(function (res) { return _this.router.navigate(['/tasks']); });
        ;
    };
    NewTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-new-task',
            template: __webpack_require__("./src/app/administration/tasks/new-task/new-task.component.html"),
            styles: [__webpack_require__("./src/app/administration/tasks/new-task/new-task.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_task_service__["a" /* TaskService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_task_service__["a" /* TaskService */]) === "function" && _b || Object])
    ], NewTaskComponent);
    return NewTaskComponent;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/new-task.component.js.map

/***/ }),

/***/ "./src/app/administration/tasks/tasks.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administration/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui menu\">\r\n\t<div class=\"item header\">\r\n\t\t<h2>Tasks</h2>\r\n\t</div>\r\n  <div class=\"item right\">\r\n  \t<a routerLink=\"/newtask\">\r\n\t\t\t<div class=\"ui primary button\"><i class=\"plus icon\"></i>New Task</div>\r\n\t\t</a>\r\n\t</div>\r\n</div>\r\n\r\n<form class=\"ui form\">\r\n  <div class=\"field\">\r\n    <label>Search</label>\r\n\t\t<input type=\"text\" [(ngModel)]=\"searchQuery\" placeholder=\"Search\" name=\"search\">\r\n\t</div>\r\n</form>\r\n\r\n<table class=\"ui celled striped table\">\r\n<thead>\r\n\t<tr>\r\n\t<th>Id</th>\r\n\t<th class=\"single line\">Name</th>\r\n\t<th>Description</th>\r\n\t<th>Contract</th>\r\n\t<th>Status</th>\r\n\t<th>Actions</th>\r\n</tr></thead>\r\n<tbody>\r\n\t<tr *ngFor=\"let task of tasks | async\">\r\n\t\t<td>\r\n\t\t\t{{ task.pk }}\r\n\t\t</td>\r\n\t\t<td>\r\n\t\t\t{{ task.name }}\r\n\t\t</td>\r\n\t\t<td class=\"single line\">\r\n\t\t\t{{ task.description }}\r\n\t\t</td>\r\n\t\t<td>\r\n\t\t\t{{ task.contractId }}\r\n\t\t</td>\r\n\t\t<td>\r\n\t\t\t{{ task.status }}\r\n\t\t</td>\r\n\t\t<td class=\"right aligned\">\r\n\t\t\t<div class=\"ui button small\" (click)=\"editTask(task)\"><i class=\"pencil alternate icon\"></i>Edit</div>\r\n\t\t\t<div class=\"ui red button small\" (click)=\"deleteTask(task.pk)\"><i class=\"trash alternate icon\"></i>Delete</div>\r\n\t\t</td>\r\n\t</tr>\r\n</tbody>\r\n</table>\r\n\r\n<button class=\"ui teal button\" (click)=\"getTasks()\"><i class=\"download icon\"></i>Get Tasks</button>\r\n\r\n\r\n<div class=\"ui modal\">\r\n  <div class=\"header\">Edit Task</div>\r\n  <div *ngIf=\"currentTask\" class=\"content\">\r\n\t\t<form class=\"ui form\">\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>Name</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"currentTask.name\" placeholder=\"Name\" name=\"name\">\r\n\t\t\t</div>\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>Description</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"currentTask.description\" placeholder=\"Description\" name=\"description\">\r\n\t\t\t</div>\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>Contract</label>\r\n\t\t\t\t<input type=\"number\" [(ngModel)]=\"currentTask.contractId\" placeholder=\"Contract\" name=\"contractId\">\r\n\t\t\t</div>\r\n\t\t  <div class=\"field\">\r\n\t\t    <label>Status</label>\r\n\t\t\t\t<input type=\"number\" [(ngModel)]=\"currentTask.status\" placeholder=\"Status\" name=\"status\">\r\n\t\t\t</div>\r\n\t\t</form>\r\n  </div>\r\n  <div class=\"actions\">\r\n\t\t<button class=\"ui primary approve button\" (click)=\"updateTask(currentTask)\">Save</button>\r\n    <div class=\"ui cancel button\">Cancel</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/administration/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_service__ = __webpack_require__("./src/app/services/task.service.ts");
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
        this.taskService.deleteTask(id)
            .subscribe(function (res) { return _this.getTasks(); });
    };
    TasksComponent.prototype.updateTask = function (task) {
        var _this = this;
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
            template: __webpack_require__("./src/app/administration/tasks/tasks.component.html"),
            styles: [__webpack_require__("./src/app/administration/tasks/tasks.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */]) === "function" && _a || Object])
    ], TasksComponent);
    return TasksComponent;
    var _a;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/tasks.component.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".ui.menu>.container>.logo {\r\n  width: 140px;\r\n  height: 65px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-content></app-main-content>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.name = 'Angular 5';
        this.text = 'This is text before click.';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__administration_tasks_tasks_component__ = __webpack_require__("./src/app/administration/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_content_main_content_component__ = __webpack_require__("./src/app/main-content/main-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__administration_tasks_new_task_new_task_component__ = __webpack_require__("./src/app/administration/tasks/new-task/new-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__administration_subtasks_subtasks_component__ = __webpack_require__("./src/app/administration/subtasks/subtasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__administration_skills_skills_component__ = __webpack_require__("./src/app/administration/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__administration_selected_task_selected_task_component__ = __webpack_require__("./src/app/administration/selected-task/selected-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__authentication_login_login_component__ = __webpack_require__("./src/app/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_content_main_menu_main_menu_component__ = __webpack_require__("./src/app/main-content/main-menu/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__finalized_tasks_cleark_finalized_tasks_cleark_component__ = __webpack_require__("./src/app/finalized-tasks-cleark/finalized-tasks-cleark.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__subtask_table_subtask_table_component__ = __webpack_require__("./src/app/subtask-table/subtask-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__current_task_cleark_current_task_cleark_component__ = __webpack_require__("./src/app/current-task-cleark/current-task-cleark.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__authentication_login_login_component__["a" /* LoginComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__administration_selected_task_selected_task_component__["a" /* SelectedTaskComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__administration_selected_task_selected_task_component__["a" /* SelectedTaskComponent */] },
    { path: 'tasks', component: __WEBPACK_IMPORTED_MODULE_6__administration_tasks_tasks_component__["a" /* TasksComponent */] },
    { path: 'subtasks', component: __WEBPACK_IMPORTED_MODULE_9__administration_subtasks_subtasks_component__["a" /* SubtasksComponent */] },
    { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_10__administration_skills_skills_component__["a" /* SkillsComponent */] },
    { path: 'newtask', component: __WEBPACK_IMPORTED_MODULE_8__administration_tasks_new_task_new_task_component__["a" /* NewTaskComponent */] },
    { path: 'selectedtask', component: __WEBPACK_IMPORTED_MODULE_11__administration_selected_task_selected_task_component__["a" /* SelectedTaskComponent */] },
    { path: 'finalizedtaskscleark', component: __WEBPACK_IMPORTED_MODULE_16__finalized_tasks_cleark_finalized_tasks_cleark_component__["a" /* FinalizedTasksClearkComponent */] },
    { path: 'currenttaskcleark', component: __WEBPACK_IMPORTED_MODULE_18__current_task_cleark_current_task_cleark_component__["a" /* CurrentTaskClearkComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__administration_tasks_tasks_component__["a" /* TasksComponent */],
                __WEBPACK_IMPORTED_MODULE_7__main_content_main_content_component__["a" /* MainContentComponent */],
                __WEBPACK_IMPORTED_MODULE_8__administration_tasks_new_task_new_task_component__["a" /* NewTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_9__administration_subtasks_subtasks_component__["a" /* SubtasksComponent */],
                __WEBPACK_IMPORTED_MODULE_10__administration_skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__administration_selected_task_selected_task_component__["a" /* SelectedTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_14__authentication_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__main_content_main_menu_main_menu_component__["a" /* MainMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_16__finalized_tasks_cleark_finalized_tasks_cleark_component__["a" /* FinalizedTasksClearkComponent */],
                __WEBPACK_IMPORTED_MODULE_17__subtask_table_subtask_table_component__["a" /* SubtaskTableComponent */],
                __WEBPACK_IMPORTED_MODULE_18__current_task_cleark_current_task_cleark_component__["a" /* CurrentTaskClearkComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/app.module.js.map

/***/ }),

/***/ "./src/app/authentication/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login-container {\r\n  margin: 150px auto;\r\n  max-width: 350px;\r\n}\r\n.login-container .content {\r\n  color: #2185d0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/authentication/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui login-container\">\r\n  <div class=\"column middle aligned center aligned\">\r\n    <h2 class=\"ui teal image header\">\r\n\r\n      <div class=\"content\">\r\n        Log-in to your account\r\n      </div>\r\n    </h2>\r\n    <form class=\"ui form\">\r\n      <div class=\"ui stacked segment\">\r\n        <div class=\"field\">\r\n          <div class=\"ui left icon input\">\r\n            <i class=\"user icon\"></i>\r\n            <input type=\"text\" name=\"username\" placeholder=\"Username\" [(ngModel)]=\"username\">\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"ui left icon input\">\r\n            <i class=\"lock icon\"></i>\r\n            <input type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ui fluid large blue submit button\" (click)=\"login()\">Login</div>\r\n      </div>\r\n\r\n      <div class=\"ui error message\"></div>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.setMessage();
    }
    LoginComponent.prototype.setMessage = function () {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.username, this.password)
            .subscribe(function (res) {
            localStorage.setItem('app-token', JSON.stringify(res));
            localStorage.setItem('app-login', 'true');
            if (_this.authService.isLoggedIn) {
                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : 'finalizedtaskscleark';
                _this.router.navigate([redirect]);
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.setMessage();
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/authentication/login/login.component.html"),
            styles: [__webpack_require__("./src/app/authentication/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/login.component.js.map

/***/ }),

/***/ "./src/app/current-task-cleark/current-task-cleark.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/current-task-cleark/current-task-cleark.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  current-task-cleark works!\n</p>"

/***/ }),

/***/ "./src/app/current-task-cleark/current-task-cleark.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentTaskClearkComponent; });
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

var CurrentTaskClearkComponent = /** @class */ (function () {
    function CurrentTaskClearkComponent() {
    }
    CurrentTaskClearkComponent.prototype.ngOnInit = function () {
    };
    CurrentTaskClearkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-current-task-cleark',
            template: __webpack_require__("./src/app/current-task-cleark/current-task-cleark.component.html"),
            styles: [__webpack_require__("./src/app/current-task-cleark/current-task-cleark.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CurrentTaskClearkComponent);
    return CurrentTaskClearkComponent;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/current-task-cleark.component.js.map

/***/ }),

/***/ "./src/app/finalized-tasks-cleark/finalized-tasks-cleark.component.css":
/***/ (function(module, exports) {

module.exports = ".ui.celled.table tr td.selected {\r\n  background: #ddd;\r\n}\r\n\r\n.ui.celled.table tr td {\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/finalized-tasks-cleark/finalized-tasks-cleark.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"ui celled striped table\">\r\n<thead>\r\n\t<tr>\r\n\t<th>Contract Number</th>\r\n\t<th>Number of Available Tasks</th>\r\n</tr></thead>\r\n<tbody>\r\n\t<tr *ngFor=\"let task of tasks | async\">\r\n\t\t<td (click)=\"clickTableRow(task)\" [ngClass]=\"{ selected: currentTask === task }\">\r\n\t\t\t{{ task.contractId }}\r\n\t\t</td>\r\n\t\t<td (click)=\"clickTableRow(task)\" [ngClass]=\"{ selected: currentTask === task }\">\r\n\t\t\t{{ task.noSubtasks }}\r\n\t\t</td>\r\n\t</tr>\r\n</tbody>\r\n</table>\r\n<app-subtask-table *ngIf=\"taskSelected\" [task]=\"currentTask\"></app-subtask-table>\r\n"

/***/ }),

/***/ "./src/app/finalized-tasks-cleark/finalized-tasks-cleark.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizedTasksClearkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_service__ = __webpack_require__("./src/app/services/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FinalizedTasksClearkComponent = /** @class */ (function () {
    function FinalizedTasksClearkComponent(taskService) {
        this.taskService = taskService;
        this.searchQuery = '';
        this.taskSelected = false;
    }
    FinalizedTasksClearkComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    FinalizedTasksClearkComponent.prototype.getTasks = function () {
        this.tasks = this.taskService.getTasks(this.searchQuery);
    };
    FinalizedTasksClearkComponent.prototype.clickTableRow = function (task) {
        this.taskSelected = true;
        this.currentTask = task;
    };
    FinalizedTasksClearkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-finalized-tasks-cleark',
            template: __webpack_require__("./src/app/finalized-tasks-cleark/finalized-tasks-cleark.component.html"),
            styles: [__webpack_require__("./src/app/finalized-tasks-cleark/finalized-tasks-cleark.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */]) === "function" && _a || Object])
    ], FinalizedTasksClearkComponent);
    return FinalizedTasksClearkComponent;
    var _a;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/finalized-tasks-cleark.component.js.map

/***/ }),

/***/ "./src/app/main-content/main-content.component.css":
/***/ (function(module, exports) {

module.exports = ".main-content {\r\n  margin: 2% calc(10% + 16px);\r\n}\r\n"

/***/ }),

/***/ "./src/app/main-content/main-content.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-menu></app-main-menu>\r\n<div class=\"main-content\">\r\n\t  <router-outlet></router-outlet>\r\n</div>\r\n"

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

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/main-content.component.js.map

/***/ }),

/***/ "./src/app/main-content/main-menu/main-menu.component.css":
/***/ (function(module, exports) {

module.exports = ".ui.menu>.container>.logo {\r\n  width: calc(291px * 0.3);\r\n  height: calc(129px * 0.3);\r\n  margin: 0em 1.14285714em;\r\n  padding: 0px;\r\n}\r\n.ui.menu>.container {\r\n  margin: 0 10% 0 10% !important;\r\n  width: 100%;\r\n}\r\n.ui.menu {\r\n  margin: 0px;\r\n  border: 0px;\r\n  border-radius: 0px;\r\n}\r\n.gray_header {\r\n  background-color: rgb(235, 235,235);\r\n  height: 75px;\r\n}\r\n.blue_header {\r\n  background-color: rgb(17,51,136);\r\n}\r\n.blue_header .item {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main-content/main-menu/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"ui borderless menu blue_header\">\r\n  <div class=\"ui container\">\r\n    <img src=\"../assets/img/allianz_logo.PNG\" alt=\"logo\" class=\"ui image logo item\">\r\n    <div class=\"item\">Moderne Arbeitssteurung</div>\r\n    <div class=\"right menu\">\r\n      <a class=\"item\"><i class=\"logout icon\"></i></a>\r\n      <a class=\"ui dropdown item\" tabindex=\"0\">Administration<i class=\"dropdown icon\"></i>\r\n        <div class=\"menu transition hidden\" tabindex=\"-1\">\r\n          <a class=\"item\" routerLink=\"tasks\">Tasks</a>\r\n          <a class=\"item\" routerLink=\"subtasks\">Subtasks</a>\r\n          <a class=\"item\" routerLink=\"skills\">Skills</a>\r\n          <a class=\"item\" routerLink=\"selectedtask\">Selected Task</a>\r\n        </div>\r\n      </a>\r\n      <a class=\"item\" (click)=\"logout()\"><i class=\"power off icon\"></i></a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<nav class=\"ui borderless menu gray_header\">\r\n  <div class=\"ui container\">\r\n    <a class=\"item\" routerLink=\"currenttaskcleark\">Current Task</a>\r\n    <a class=\"item\" routerLink=\"finalizedtaskscleark\">Completed Tasks</a>\r\n    <a class=\"ui dropdown item\" tabindex=\"0\">Management<i class=\"dropdown icon\"></i>\r\n      <div class=\"menu transition hidden\" tabindex=\"-1\">\r\n        <a class=\"item\" routerLink=\"\">Skills</a>\r\n        <a class=\"item\" routerLink=\"\">Users</a>\r\n        <a class=\"item\" routerLink=\"\">Tasks</a>\r\n      </div>\r\n    </a>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/main-content/main-menu/main-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    MainMenuComponent.prototype.ngOnInit = function () {
        $('.ui.dropdown')
            .dropdown();
    };
    MainMenuComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    MainMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-main-menu',
            template: __webpack_require__("./src/app/main-content/main-menu/main-menu.component.html"),
            styles: [__webpack_require__("./src/app/main-content/main-menu/main-menu.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], MainMenuComponent);
    return MainMenuComponent;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/main-menu.component.js.map

/***/ }),

/***/ "./src/app/models/skill.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skill; });
var Skill = /** @class */ (function () {
    function Skill(pk, name) {
        this.pk = pk;
        this.name = name;
    }
    return Skill;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/skill.model.js.map

/***/ }),

/***/ "./src/app/models/subtask.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subtask; });
var Subtask = /** @class */ (function () {
    function Subtask(pk, name, user, description, task, status) {
        this.pk = pk;
        this.name = name;
        this.user = user;
        this.description = description;
        this.task = task;
        this.status = status;
    }
    return Subtask;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/subtask.model.js.map

/***/ }),

/***/ "./src/app/models/task.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(pk, name, user, description, contractId, status, timeOfInit, noSubtasks, blocker, note) {
        this.pk = pk;
        this.name = name;
        this.user = user;
        this.description = description;
        this.contractId = contractId;
        this.status = status;
        timeOfInit = timeOfInit;
        noSubtasks = noSubtasks;
        blocker = blocker;
        note = note;
    }
    return Task;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/task.model.js.map

/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (localStorage.getItem('app-login') == 'true') {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/auth-guard.service.js.map

/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
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
        'Authorization': localStorage.getItem('app-token')
    })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.ROOT_URL = 'http://localhost:8000/api-token-auth/';
    }
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('app-login') == 'true';
    };
    AuthService.prototype.login = function (username, password) {
        var user = { 'username': username, 'password': password };
        return this.http.post(this.ROOT_URL, user);
    };
    AuthService.prototype.logout = function () {
        localStorage.setItem('app-login', 'false');
        localStorage.setItem('app-token', '');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/auth.service.js.map

/***/ }),

/***/ "./src/app/services/skill.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillService; });
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
var SkillService = /** @class */ (function () {
    function SkillService(http) {
        this.http = http;
        this.ROOT_URL = 'http://localhost:8000/skills';
    }
    SkillService.prototype.saveSkill = function (data) {
        if (data.name != '') {
            return this.http.post(this.ROOT_URL + '/', data, httpOptions);
        }
    };
    SkillService.prototype.getSkills = function (searchQuery) {
        return this.http.get(this.ROOT_URL + '?q=' + searchQuery);
    };
    SkillService.prototype.deleteSkill = function (id) {
        var url = this.ROOT_URL + "/" + id;
        return this.http.delete(url, httpOptions);
    };
    SkillService.prototype.updateSkill = function (data) {
        var url = this.ROOT_URL + "/" + data.pk + "/";
        return this.http.put(url, data, httpOptions);
    };
    SkillService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], SkillService);
    return SkillService;
    var _a;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/skill.service.js.map

/***/ }),

/***/ "./src/app/services/subtask.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubtaskService; });
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
        'Authorization': localStorage.getItem('app-token')
    })
};
var SubtaskService = /** @class */ (function () {
    function SubtaskService(http) {
        this.http = http;
        this.ROOT_URL = 'http://localhost:8000/subtasks';
    }
    SubtaskService.prototype.saveSubtask = function (data) {
        if (data.name != '' && data.description != '') {
            return this.http.post(this.ROOT_URL + '/', data, httpOptions);
        }
    };
    SubtaskService.prototype.getSubtasks = function (searchQuery) {
        return this.http.get(this.ROOT_URL + '?q=' + searchQuery);
    };
    SubtaskService.prototype.getSubtaskByTaskId = function (id) {
        return this.http.get(this.ROOT_URL + "?id=" + id);
    };
    SubtaskService.prototype.deleteSubtask = function (id) {
        var url = this.ROOT_URL + "/" + id;
        return this.http.delete(url, httpOptions);
    };
    SubtaskService.prototype.updateSubtask = function (data) {
        var url = this.ROOT_URL + "/" + data.pk + "/";
        return this.http.put(url, data, httpOptions);
    };
    SubtaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], SubtaskService);
    return SubtaskService;
    var _a;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/subtask.service.js.map

/***/ }),

/***/ "./src/app/services/task.service.ts":
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
    TaskService.prototype.getTask = function (id) {
        var url = this.ROOT_URL + "/" + id;
        return this.http.get(url, httpOptions);
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

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/task.service.js.map

/***/ }),

/***/ "./src/app/subtask-table/subtask-table.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/subtask-table/subtask-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n<table class=\"ui celled striped table\">\r\n<thead>\r\n\t<tr>\r\n\t<th>Skill Name</th>\r\n\t<th>Task Type</th>\r\n\t<th>Time of Initiation</th>\r\n</tr></thead>\r\n<tbody>\r\n\t<tr *ngFor=\"let subtask of subtasks\">\r\n\t\t<td>\r\n\t\t\t{{ subtask.name }}\r\n\t\t</td>\r\n\t\t<td>\r\n\t\t\t{{ subtask.description }}\r\n\t\t</td>\r\n\t\t<td>\r\n\t\t\t{{ task.timeOfInit }}\r\n\t\t</td>\r\n\t</tr>\r\n</tbody>\r\n</table>\r\n</div>"

/***/ }),

/***/ "./src/app/subtask-table/subtask-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubtaskTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_task_model__ = __webpack_require__("./src/app/models/task.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_subtask_service__ = __webpack_require__("./src/app/services/subtask.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubtaskTableComponent = /** @class */ (function () {
    function SubtaskTableComponent(subtaskService) {
        this.subtaskService = subtaskService;
        this.searchQuery = '';
    }
    SubtaskTableComponent.prototype.ngOnInit = function () {
        this.getSubTasks();
    };
    SubtaskTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes.task) {
            this.getSubTasks();
        }
    };
    SubtaskTableComponent.prototype.getSubTasks = function () {
        var _this = this;
        this.subtaskService.getSubtaskByTaskId(this.task.pk)
            .subscribe(function (res) { return _this.subtasks = res; });
    };
    SubtaskTableComponent.prototype.clickTableRow = function (task) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_task_model__["a" /* Task */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_task_model__["a" /* Task */]) === "function" && _a || Object)
    ], SubtaskTableComponent.prototype, "task", void 0);
    SubtaskTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-subtask-table',
            template: __webpack_require__("./src/app/subtask-table/subtask-table.component.html"),
            styles: [__webpack_require__("./src/app/subtask-table/subtask-table.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_subtask_service__["a" /* SubtaskService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_subtask_service__["a" /* SubtaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_subtask_service__["a" /* SubtaskService */]) === "function" && _b || Object])
    ], SubtaskTableComponent);
    return SubtaskTableComponent;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/subtask-table.component.js.map

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
//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/environment.js.map

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
//# sourceMappingURL=C:/Users/sbelay001/Documents/GitHub/angular-anliegen/frontend/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map