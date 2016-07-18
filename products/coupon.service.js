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
var CouponService = (function () {
    function CouponService(_http) {
        this._http = _http;
        this._couponUrl = 'api/products/coupons.json';
        this._companyUrl = 'api/products/companies.json';
    }
    CouponService.prototype.getCoupons = function () {
        return this._http.get(this._couponUrl)
            .map(function (response) { return response.json().coupon; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    CouponService.prototype.getCompanies = function () {
        return this._http.get(this._companyUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    CouponService.prototype.getCompaniesAll = function () {
        return this._http.get(this._companyUrl)
            .map(function (response) { return response.json().company; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    CouponService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    CouponService.prototype.getCoupon = function (id) {
        return this.getCoupons()
            .map(function (coupons) { return coupons.find(function (p) { return p.id === id; }); });
    };
    CouponService.prototype.getCompany = function (id) {
        return this.getCompanies()
            .map(function (companies) { return companies.find(function (p) { return p.id === id; }); });
    };
    CouponService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    CouponService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CouponService);
    return CouponService;
}());
exports.CouponService = CouponService;
//# sourceMappingURL=coupon.service.js.map