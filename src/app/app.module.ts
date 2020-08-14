import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Routes,RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { TrendingBrandComponent } from './trending-brand/trending-brand.component';
import { BrandFocusComponent } from './brand-focus/brand-focus.component';
import { SigninComponent } from './signin/signin.component';
import { ContentComponent } from './content/content.component';
import { SignupComponent } from './signup/signup.component';
import { SingleDetailsPageComponent } from './single-details-page/single-details-page.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CartComponent } from './cart/cart.component';

const appRoutes : Routes = [
  { path : "",component:ContentComponent},
  { path: "signin",component:SigninComponent},
  { path: "signup",component:SignupComponent},
  { path: "wish-list",component:WishListComponent},
  { path:"single-details-page",component:SingleDetailsPageComponent},
  { path:"cart",component:CartComponent},
  { path : "**",component:PagenotfoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    AboutusComponent,
    WelcomeComponent,
    NavbarComponent,
    FooterComponent,
    PagenotfoundComponent,
    MainComponent,
    CarouselComponent,
    TrendingBrandComponent,
    BrandFocusComponent,
    SigninComponent,
    ContentComponent,
    SignupComponent,
    SingleDetailsPageComponent,
    WishListComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
