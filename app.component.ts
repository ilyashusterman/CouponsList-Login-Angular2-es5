import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProductService } from './products/product.service';
import { FORM_PROVIDERS } from '@angular/common';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { ProductListComponent } from './products/product-list.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { CouponListComponent } from './products/coupon-list.component';
import { CouponService } from './products/coupon.service';
import { CouponDetailComponent } from './products/coupon-detail.component';
import { Router } from '@angular/router';

@Component({
    selector: 'cm-app',
    template: `
    <div>
        <div class='container'>
            <router-outlet></router-outlet>
            <div class="panel panel-primary">
    <div class="panel-heading">
        {{pageTitle}}
    </div>

    <div class="panel-body">
        <div class="row" >
                <p align="center">
            <br/>
       <a href="http://localhost:8080/CouponWebAppPhase2/rest/test/companies">get all companies</a>
        <br/>
       <a href="http://localhost:8080/CouponWebAppPhase2/rest/login">initiate login</a>
       <br/>
                    <a [routerLink]="['/login']">Login</a>
                    <br/>
                    <a [routerLink]="['/products']">Test Product List</a>
                    <br/>
                    <a [routerLink]="['/coupons']">Test Coupons List</a>
                    <br/>
                  </p>
            <div class="text-center">Developed by:</div>
            <h3 class="text-center">ilya Shusterman</h3>

            <div class="text-center">@ilyashusterman</div>
            <div class="text-center">
                <a href="https://github.com/ilyashusterman/">https://github.com/ilyashusterman/</a>
            </div>

        </div>
    </div>
</div>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService,
                 CouponService,
                 LoginComponent,
                 AdminComponent,
                HTTP_PROVIDERS,]
})
export class AppComponent {
    pageTitle: string = 'Coupon Client Management ';

      constructor() {}

}
