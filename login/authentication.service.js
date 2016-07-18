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
// authentication.ts
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var Authentication = (function () {
    function Authentication() {
        this.SERVER_URL_LOGGOUT = 'http://localhost:8080/CouponWebAppPhase2/rest/login/logout';
        this.token = localStorage.getItem('token');
    }
    Authentication.prototype.logout = function () {
        // If we had a login api, we would have done something like this
        var _this = this;
        return this.http.get(this.config.serverUrl + '/auth/logout', {
            headers: new Headers({
                'x-security-token': this.token
            })
        })
            .map(function (res) {
            _this.token = undefined;
            localStorage.removeItem('token');
        });
        this.token = undefined;
        localStorage.removeItem('token');
        return Observable_1.Observable.of(true);
    };
    Authentication = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Authentication);
    return Authentication;
}());
exports.Authentication = Authentication;
//# sourceMappingURL=authentication.service.js.map