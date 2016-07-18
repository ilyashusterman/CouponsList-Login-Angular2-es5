import { provideRouter, RouterConfig } from '@angular/router';
import { Router, CanActivate } from '@angular/router';
import {isLoggedin}  from './login/isLoggedIn.service';
import { LoginComponent } from './login/login.component';
import { LoginRoutes,authProviders }        from './login/login.routes';
import {AdminComponent} from './admin/admin.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  ...LoginRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  authProviders

];
