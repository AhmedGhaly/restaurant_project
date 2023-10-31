import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from 'isotope-layout';
import { Menu } from 'src/app/interfaces/menu';
import { Recipe } from 'src/app/interfaces/recipe';
import { RestaurantInfo } from 'src/app/interfaces/restaurant-info';
import { MenuService } from 'src/app/services/menu.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { MenuComponent } from './menu/menu.component';
import { ActivatedRoute, TitleStrategy } from '@angular/router';



@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  currentRestaurant!: RestaurantInfo;
  id!: number;
  images!: string[];
  // menus!: Menu[];
  // recipes!: Recipe[];
  looding: boolean = false

  @ViewChild("menu") menuCompent!: MenuComponent;
  constructor(private restaurantService: RestaurantService, private menuService: MenuService, activeRoute : ActivatedRoute){
    this.id =activeRoute.snapshot.params["id"];

    this.restaurantService.getRestaurantById(this.id).subscribe({
      next: data => {this.currentRestaurant = data;}
    })
    this.restaurantService.getRestaurantImages(this.id).subscribe({
      next: data => this.images = data
    })
    this.menuService.getMenuByRestaurnatId(this.id).subscribe({
      
      next: data => {
        this.menuCompent.menus = data.menuDto;
        this.menuCompent.recipes = data.recipeDtos;
      }
    })


  }



}
