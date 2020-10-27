import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { InfoBarComponent } from './header/info-bar/info-bar.component';
import { ContainerComponent } from './header/container/container.component';
import { HomeComponent } from './home/home.component';
import { FeatureHeaderComponent } from './home/feature-header/feature-header.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { OwnerComponent } from './home/owner/owner.component';
import { BioComponent } from './home/owner/bio/bio.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WomenRoomComponent } from './home/women-room/women-room.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenRoomComponent } from './home/men-room/men-room.component';
import { CompnayFeaturesComponent } from './about/compnay-features/compnay-features.component';
import { BannerComponent } from './home/banner/banner.component';
import { DeveloperComponent } from './developer/developer.component';
import { ContactFormComponent } from './home/contact-form/contact-form.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxsModule} from "@ngxs/store";
import {ProductState} from "../store/states/productState";
import { ImageShowComponent } from './products/image-show/image-show.component';
import {FormsModule} from "@angular/forms";
import { ProductShowComponent } from './products/product-show/product-show.component';
import { AboutComponent } from './about/about.component';
import { AboutTextComponent } from './about/about-text/about-text.component';
import { NavbarSmallScreenComponent } from './header/navbar/navbar-small-screen/navbar-small-screen.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    InfoBarComponent,
    ContainerComponent,
    HomeComponent,
    FeatureHeaderComponent,
    CategoriesComponent,
    OwnerComponent,
    BioComponent,
    WomenRoomComponent,
    MenRoomComponent,
    CompnayFeaturesComponent,
    BannerComponent,
    DeveloperComponent,
    ContactFormComponent,
    ShowcaseComponent,
    ProductsComponent,
    ContactComponent,
    ImageShowComponent,
    ProductShowComponent,
    AboutComponent,
    AboutTextComponent,
    NavbarSmallScreenComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    HttpClientModule,
    NgxsModule.forRoot(
      [ProductState],
      {developmentMode: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
