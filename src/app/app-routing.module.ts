import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {ContactComponent} from "./contact/contact.component";
import {ProductShowComponent} from "./products/product-show/product-show.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collections', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'collections/:pin', component: ProductShowComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
