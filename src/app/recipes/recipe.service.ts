import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient/ingredient.model';
import {Injectable} from '@angular/core';
import {ShoppingListService} from '../shopping-list/shoppingList.service';

@Injectable()
export class RecipeService  {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'A Test Recipe',
      'This is simply a test',
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA',
      [
        new Ingredient('tomatoes', 10),
        new Ingredient('apples', 3),
      ]
    ),
    new Recipe(2, 'A Test Recipe1', 'This is simply a test1', 'https://recipes.timesofindia.com/photo/54673639.cms', [
      new Ingredient('chicken', 5),
      new Ingredient('mushrooms', 15),
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  public getRecipe(id: string) {
    const recipe = this.getRecipes().find((recipe: Recipe) =>{
      return recipe.id === +id;
    });
    return recipe;
  }

  public getRecipes() {
    return [...this.recipes];
  }

  public addIngredients(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
