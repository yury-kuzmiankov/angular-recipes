import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeNavigationService} from '../recipeNavigation.service';
import {ShoppingListService} from '../../shopping-list/shoppingList.service';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  private recipe: Recipe;

  constructor(private recipeNavigationService: RecipeNavigationService,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeNavigationService.activeRecipe$.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }

  addToShoppingList() {
    this.recipeService.addIngredients(this.recipe.ingredients);
  }
}
