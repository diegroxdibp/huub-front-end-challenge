import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { HuubComponent } from './huub/huub.component';
import { ProductsComponent } from './huub/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorComponent } from './huub/paginator/paginator.component';
import { ProductsSearchComponent } from './huub/search/search.component';
import { ProductsListComponent } from './huub/products-list/products-list.component';
import { LoginComponent } from './huub/login/login.component';
import { ProductComponent } from './huub/product/product.component';
import { HuubHomeComponent } from './huub/home/home.component';
import { WishlistComponent } from './huub/wishlist/wishlist.component';
import { NavbarsComponent } from './huub/navbars/navbars.component';
import { HuubNavHomeComponent } from './huub/navbars/huub-nav-home/huub-nav-home.component';
import { HuubNavProductsComponent } from './huub/navbars/huub-nav-products/huub-nav-products.component';
import { HuubNavWishlistComponent } from './huub/navbars/huub-nav-wishlist/huub-nav-wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HuubComponent,
    HuubHomeComponent,
    LoginComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductComponent,
    PaginatorComponent,
    ProductsSearchComponent,
    WishlistComponent,
    NavbarsComponent,
    ProductsComponent,
    HuubNavHomeComponent,
    HuubNavProductsComponent,
    HuubNavWishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
