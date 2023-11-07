import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { PaymentComponent } from './components/order-details/payment/payment.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { HomeComponent } from './components/home/home.component';
import { UserTableServicesService } from './services/user-table.service';
import { TableReservationComponent } from './components/restaurant/table-reservation/table-reservation.component';
import { ReserveTableComponent } from './components/reserve-table/reserve-table.component';

import { OrdersComponent } from './components/orders/orders.component';
import { OrderUserDetailsComponent } from './components/order-user-details/order-user-details.component';

import { RecipeComponent } from './components/recipe/recipe.component';
import { AdminOrderContainerComponent } from './components/admin-order-container/admin-order-container.component';
import { AdminOrderDetailsComponent } from './components/admin-order-details/admin-order-details.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminTablesComponent } from './components/admin-tables/admin-tables.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { CreateResturantComponent } from './components/create-resturant/create-resturant.component';
import { CreateCoponComponent } from './components/create-copon/create-copon.component';
import { CreateMenuComponent } from './components/create-menu/create-menu.component';
import { CreateTableComponent } from './components/create-table/create-table.component';

import { ProfileComponent } from './components/profile/profile.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent },
  { path: 'userTableReservation', component: ReserveTableComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'orderDetials', component: OrderDetailsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'recipe/:id', component: RecipeDetailsComponent },
  { path: 'restaurant/:id', component: RestaurantComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'recipes', component: RecipeComponent },
  { path: 'orders/OrderUserDetails/:id', component: OrderUserDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'test', component: PaginationComponent },
  
  // admin

  { path: 'admin/orders', component: AdminOrderContainerComponent },
  { path: 'coupon', component: CreateCoponComponent },
  { path: 'menu', component: CreateMenuComponent },
  { path: 'table', component: CreateTableComponent },
  { path: 'admin/reservation', component: AdminTablesComponent },
  { path: 'admin', component: CreateResturantComponent },
  // create recipe
  // { path: 'admin', component: CreateRecipeComponent },

  /////////////////////////////////////////////////////////////////////////////////
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
