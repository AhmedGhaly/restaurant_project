import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent {
  //implements OnInit {
  recipes: Recipe[] = [];
  selectedCategoryFilter: string = 'All Categories';
  uniqueCategories: string[] = [];
  filteredRecipes: Recipe[] = [];
  searchText: string = '';
  minRating: number = 0;
  maxRating: number = 5;
  minPrice: number = 0;
  maxPrice: number = 1000;
  restaurantFilter: string = '';
  uniqueRestaurants: string[] = [];
  selectedCategories: { [category: string]: boolean } = {};
  selectedRatings: { [rating: number]: boolean } = {};

  constructor(private recipeService: RecipeService) {
    this.filteredRecipes = [];
  }
  ngOnInit() {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
      this.filteredRecipes = recipes;
      this.uniqueRestaurants = this.getUniqueRestaurants();
      this.uniqueCategories = this.getUniqueCategories();
    });
  }
  private getUniqueCategories(): string[] {
    const uniqueCategories = [
      ...new Set(this.recipes.map((recipe) => recipe.category)),
    ];
    return uniqueCategories;
  }

  private getUniqueRestaurants(): string[] {
    const uniqueNames = [
      ...new Set(this.recipes.map((recipe) => recipe.restaurantName)),
    ];
    return uniqueNames;
  }

  filterByRestaurant(restaurant: string) {
    this.restaurantFilter = restaurant;
    this.filterRecipes();
  }

  filterRecipes() {
    this.filteredRecipes = this.recipes.filter((recipe) => {
      const nameMatch = recipe.name
        .toLowerCase()
        .includes(this.searchText.toLowerCase());
      const ratingMatch =
        recipe.rating >= this.minRating && recipe.rating <= this.maxRating;
      const priceMatch =
        recipe.price >= this.minPrice && recipe.price <= this.maxPrice;

      if (this.restaurantFilter) {
        const restaurantMatch = recipe.restaurantName
          .toLowerCase()
          .includes(this.restaurantFilter.toLowerCase());
        return nameMatch && ratingMatch && priceMatch && restaurantMatch;
      } else {
        return nameMatch && ratingMatch && priceMatch;
      }
    });
  }

  filterByCategory() {
    this.filteredRecipes = this.recipes.filter((recipe) => {
      const nameMatch = recipe.name
        .toLowerCase()
        .includes(this.searchText.toLowerCase());
      const ratingMatch =
        recipe.rating >= this.minRating && recipe.rating <= this.maxRating;
      const priceMatch =
        recipe.price >= this.minPrice && recipe.price <= this.maxPrice;

      if (Object.values(this.selectedCategories).some((selected) => selected)) {
        return (
          nameMatch &&
          ratingMatch &&
          priceMatch &&
          (Object.keys(this.selectedCategories).length === 0 ||
            Object.keys(this.selectedCategories).some(
              (category) =>
                this.selectedCategories[category] &&
                recipe.category === category
            ))
        );
      } else {
        return nameMatch && ratingMatch && priceMatch;
      }
    });
  }

  sortRecipesByPrice() {
    this.filteredRecipes.sort((a, b) => a.price - b.price);

    const cheapestContainer = document.querySelector(
      '.cheapest-container'
    ) as HTMLElement;
    cheapestContainer.style.backgroundColor = 'orange';
  }

  appliedFilters: string[] = [];

  removeFilter(filter: string) {
    const index = this.appliedFilters.indexOf(filter);
    if (index !== -1) {
      this.appliedFilters.splice(index, 1);
    }
  }

  addFilterToApplied(filter: string) {
    this.appliedFilters.push(filter);
  }
}
