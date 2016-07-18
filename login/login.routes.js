"use strict";
var admin_component_1 = require('../admin/admin.component');
var admin_guard_1 = require('../admin/admin.guard');
exports.LoginRoutes = [
    {
        path: 'admin', component: admin_component_1.AdminComponent, canActivate: [admin_guard_1.AdminGuard] },
];
// { path:'admin', useValue: () => isLoggedin('ADMIN')},
// provideRouter([{
//   path: 'admin',
//   component: AdminComponent,
//   canActivate: ['AdminComponent']
// }]),
exports.authProviders = [admin_guard_1.AdminGuard]; //customer gaurd , company guard
//# sourceMappingURL=login.routes.js.map