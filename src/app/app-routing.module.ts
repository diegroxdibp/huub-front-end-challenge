import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HuubComponent } from './huub/huub.component';
import { ProductsComponent } from './huub/products/products.component';
import { LoginComponent } from './huub/login/login.component';
import { HuubHomeComponent } from './huub/home/home.component';
import { AuthGuard } from './huub/guards/auth.guard';
import { WishlistComponent } from './huub/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: HuubHomeComponent },
  {
    path: 'huub', component: HuubComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HuubHomeComponent, canActivate: [AuthGuard] },
      { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
      { path: 'wishlist', component: WishlistComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: '**', component: HuubHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
