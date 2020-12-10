import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminGuard } from './admin.guard';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children:
    [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'order', loadChildren: () => import('./order/order.module').then( m => m.OrderModule )},
      { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomeModule )},
      { path: 'products', loadChildren: () => import('./product/product.module').then( m => m.ProductModule )},
      { path: 'contact', loadChildren: () => import('./contact/contact.module').then( m => m.ContactModule )}
    ]
  },
  { path: 'admin', canActivate: [ AdminGuard ], loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule )},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )},
  { path: '**', loadChildren: () => import('./error/error.module').then( m => m.ErrorModule )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
