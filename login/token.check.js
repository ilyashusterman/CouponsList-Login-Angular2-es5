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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
var TokenAuth = (function () {
    function TokenAuth(http) {
        this.http = http;
        this.loginCheck = 'http://localhost:8080/CouponWebAppPhase2/rest/login/checkToken';
    }
    TokenAuth.prototype.checkToken = function (id) {
        //  return this.http.get(this.loginCheck+'/'+id).catch(this.handleError);
        return this.http.get(this.loginCheck + '/' + id)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    TokenAuth.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    TokenAuth.prototype.checkCurrentToken = function () {
        var theToken = JSON.parse(((localStorage.getItem('token'))));
        this.token = this.checkToken(theToken.id);
        console.log('token is ' + token + ' token 2 is' + theToken);
        return theToken.id == theToken.id;
    };
    TokenAuth = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TokenAuth);
    return TokenAuth;
}());
exports.TokenAuth = TokenAuth;
//# sourceMappingURL=token.check.js.map