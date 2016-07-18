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
var router_1 = require('@angular/router');
var coupon_1 = require('./coupon');
var coupon_filter_pipe_1 = require('./coupon-filter.pipe');
var company_filter_pipe_1 = require('./company-filter.pipe');
var coupon_service_1 = require('./coupon.service');
var CouponListComponent = (function () {
    function CouponListComponent(_couponService) {
        this._couponService = _couponService;
        this.pageTitle = 'List of ';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.Addlisting = false;
        this.CouponTypes = ['Electricity', 'Food',
            'Health', 'Beauty'];
        this.newCoupon = new coupon_1.Coupon();
        this.submitted = false;
    }
    CouponListComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(CouponListComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.newCoupon); },
        enumerable: true,
        configurable: true
    });
    CouponListComponent.prototype.timeToDate = function (nanos) {
        var time = new Date(0).getTime();
        var date = new Date(time);
        return new Date((nanos * 10000) - time);
    };
    CouponListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    CouponListComponent.prototype.toggleCouponListing = function () {
        this.Addlisting = !this.Addlisting;
    };
    CouponListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._couponService.getCoupons()
            .subscribe(function (coupons) { return _this.coupons = coupons; }, function (error) { return _this.errorMessage = error; });
        this._couponService.getCompaniesAll()
            .subscribe(function (companies) { return _this.companies = companies; }, function (error) { return _this.errorMessage = error; });
    };
    CouponListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'List: ' + message;
    };
    CouponListComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/products/coupon-list.component.html',
            styleUrls: ['app/products/coupon-list.component.css', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'],
            pipes: [coupon_filter_pipe_1.CouponFilterPipe, company_filter_pipe_1.CompanyFilterPipe],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [coupon_service_1.CouponService])
    ], CouponListComponent);
    return CouponListComponent;
}());
exports.CouponListComponent = CouponListComponent;
//# sourceMappingURL=coupon-list.component.js.map