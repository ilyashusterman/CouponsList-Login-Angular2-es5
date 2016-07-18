import { provideRouter, RouterConfig } from '@angular/router';
import { Router, CanActivate } from '@angular/router';
import {isLoggedin}  from './isLoggedIn.service';
import { AdminComponent } from '../admin/admin.component';
import { AdminGuard } from '../admin/admin.guard';

export const LoginRoutes: RouterConfig = [
  {
     path: 'admin', component: AdminComponent, canActivate:[AdminGuard]},
  
//   { path: 'cus/:id', component: ProductDetailComponent }
];
  // { path:'admin', useValue: () => isLoggedin('ADMIN')},
  // provideRouter([{
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivate: ['AdminComponent']
  // }]),

  export const authProviders = [AdminGuard];//customer gaurd , company guard