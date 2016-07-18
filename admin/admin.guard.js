"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var isLoggedIn_service_1 = require('../login/isLoggedIn.service');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var AdminGuard = (function () {
    function AdminGuard(router, http) {
        this.router = router;
        this.http = http;
        this.errorMessage = '';
        this.loginCheck = 'http://localhost:8080/CouponWebAppPhase2/rest/login/checkToken/';
    }
    AdminGuard.prototype.getTokenFromServer = function (tokenid) {
        return this.http.get(this.loginCheck + tokenid)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminGuard.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    AdminGuard.prototype.getToken = function (id) {
        var _this = this;
        this.getTokenFromServer(id)
            .subscribe(function (token) { return _this.token = token; }, function (error) { return _this.errorMessage = error; });
    };
    AdminGuard.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    AdminGuard.prototype.canActivate = function () {
        if (isLoggedIn_service_1.isLoggedin("ADMIN")) {
            //  let BWtoken  =getTokenFromBrowser();
            //  console.log('the login check = '+this.loginCheck+BWtoken.id)
            //  this.getToken(BWtoken.id);
            //  console.log('the token is'+this.token.id)
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AdminGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], AdminGuard);
    return AdminGuard;
}());
exports.AdminGuard = AdminGuard;
//# sourceMappingURL=admin.guard.js.map