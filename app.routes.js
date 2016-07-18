"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var login_routes_1 = require('./login/login.routes');
exports.routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent }
].concat(login_routes_1.LoginRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes),
    login_routes_1.authProviders
];
//# sourceMappingURL=app.routes.js.map