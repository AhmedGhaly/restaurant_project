import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxStarRatingModule } from 'ngx-star-rating-latest';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ReserveTableComponent } from './components/reserve-table/reserve-table.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { MenuComponent } from './components/menu/menu.component';
import { SliderComponent } from './components/slider/slider.component';
import { RestaurantOrdersComponent } from './components/restaurant-orders/restaurant-orders.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { MostPopularComponent } from './components/most-popular/most-popular.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RestaurantOwlCarouselComponent } from './components/restaurant-owl-carousel/restaurant-owl-carousel.component';
import { SerchRetaurantComponent } from './components/serch-retaurant/serch-retaurant.component';
import { SearchTableComponent } from './components/reserve-table/search-table/search-table.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    RecipeDetailsComponent,
    OrderDetailsComponent,
    ShoppingCartComponent,
    ReserveTableComponent,
    LoginComponent,
    SignupComponent,
    FeedbackComponent,
    MenuComponent,
    SliderComponent,
    RestaurantOrdersComponent,
    NavbarComponent,
    MostPopularComponent,
    SearchComponent,
    ContactUsComponent,
    RestaurantOwlCarouselComponent,
    SerchRetaurantComponent,
    SearchTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxStarRatingModule,
    FormsModule,
    CarouselModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
