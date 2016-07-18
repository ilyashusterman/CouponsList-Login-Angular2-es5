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
var core_1 = require('@angular/core');
var User_1 = require('./User');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var headers_1 = require('../common/headers');
var Observable_1 = require('rxjs/Observable');
var LoginComponent = (function () {
    function LoginComponent(router, http) {
        this.router = router;
        this.http = http;
        this.pageTitle = 'Welcome to Coupon Managment System';
        this.errorMessage = 'Login Failed ';
        this.loading = false;
        this.debugWindow = false;
        this.isLoggedIn = true;
        this.errorFlag = false;
        this.user = new User_1.User();
        this.clientTypes = ['ADMIN', 'COMPANY',
            'CUSTOMER'];
        this.SERVER_URL = 'http://localhost:8080/CouponWebAppPhase2/rest/login/';
        this.token = localStorage.getItem('token');
    }
    LoginComponent.prototype.login = function (event, user) {
        var _this = this;
        this.loading = true;
        event.preventDefault();
        var body = JSON.stringify(user);
        this.http.post('http://localhost:8080/CouponWebAppPhase2/rest/login', body, { headers: headers_1.contentHeaders })
            .subscribe(function (response) {
            var data = response.json();
            console.log(JSON.stringify(data)); // this to lines of code
            // console.log(user)//just for checking in console for debug 
            localStorage.setItem('token', JSON.stringify(data));
            //   this.router.navigate(['/home']);
            switch (user.clientType) {
                case 'ADMIN':
                    _this.router.navigate(['/admin']);
                    break;
                case 'COMPANY':
                    _this.router.navigate(['/company']);
                    break;
                case 'CUSTOMER':
                    _this.router.navigate(['/customer']);
                    break;
                default:
                    break;
            }
            _this.loading = false;
        }, function (error) {
            alert(error.text());
            console.log(error.text());
            _this.loading = false;
            _this.setErrorMessage('Login failed ' + error.text());
            _this.errorFlag = true;
        });
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        return this.http.get(this.SERVER_URL + '/logout', {
            headers: new http_1.Headers({
                //    'token': this.token
                'Content-Type': 'application/json'
            })
        })
            .map(function (res) {
            _this.token = undefined;
            localStorage.removeItem('token');
            Observable_1.Observable.of(true);
            _this.router.navigate(['/login']);
        });
        //   this.token = undefined;
        // localStorage.removeItem('token');
        // return Observable.of(true);
    };
    LoginComponent.prototype.toggleDebugWindow = function () {
        this.debugWindow = !this.debugWindow;
    };
    Object.defineProperty(LoginComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.user); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.setLogin = function () {
        this.isLoggedIn = false;
    };
    LoginComponent.prototype.setErrorMessage = function (message) {
        this.errorMessage = message;
    };
    LoginComponent.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        this.setErrorMessage('Authentucation error ' + error.statusText);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    LoginComponent = __decorate([
        core_1.Component({
            directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            styleUrls: ['app/login/login.component.css', 'app/login/loading.component.css', 'app/login/field.component.css'],
            templateUrl: 'app/login/login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map