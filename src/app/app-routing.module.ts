import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {ContactComponent} from "./contact/contact.component";
import {ProductShowComponent} from "./products/product-show/product-show.component";
import {AboutComponent} from "./about/about.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'collections', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'collections/:pin', component: ProductShowComponent},
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
