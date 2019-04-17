import {Ingredient} from '../shared/ingredient/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService  {

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
  ];

  private fireIngredientChange() {
    this.ingredientsChanged.emit(this.getIngredients());
  }

  public ingredientsChanged = new EventEmitter<Ingredient[]>();

  public getIngredients() {
    return [...this.ingredients];
  }

  public addIngredients(ingredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredients);
    this.fireIngredientChange();
  }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.fireIngredientChange();
  }

}
