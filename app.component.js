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
require('rxjs/Rx'); // Load all features
var router_1 = require('@angular/router');
var product_service_1 = require('./products/product.service');
var login_component_1 = require('./login/login.component');
var admin_component_1 = require('./admin/admin.component');
var coupon_service_1 = require('./products/coupon.service');
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Coupon Client Management ';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'cm-app',
            template: "\n    <div>\n        <div class='container'>\n            <router-outlet></router-outlet>\n            <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n        {{pageTitle}}\n    </div>\n\n    <div class=\"panel-body\">\n        <div class=\"row\" >\n                <p align=\"center\">\n            <br/>\n       <a href=\"http://localhost:8080/CouponWebAppPhase2/rest/test/companies\">get all companies</a>\n        <br/>\n       <a href=\"http://localhost:8080/CouponWebAppPhase2/rest/login\">initiate login</a>\n       <br/>\n                    <a [routerLink]=\"['/login']\">Login</a>\n                    <br/>\n                    <a [routerLink]=\"['/products']\">Test Product List</a>\n                    <br/>\n                    <a [routerLink]=\"['/coupons']\">Test Coupons List</a>\n                    <br/>\n                  </p>\n            <div class=\"text-center\">Developed by:</div>\n            <h3 class=\"text-center\">ilya Shusterman</h3>\n\n            <div class=\"text-center\">@ilyashusterman</div>\n            <div class=\"text-center\">\n                <a href=\"https://github.com/ilyashusterman/\">https://github.com/ilyashusterman/</a>\n            </div>\n\n        </div>\n    </div>\n</div>\n        </div>\n     </div>\n     ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [product_service_1.ProductService,
                coupon_service_1.CouponService,
                login_component_1.LoginComponent,
                admin_component_1.AdminComponent,
                http_1.HTTP_PROVIDERS,]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map