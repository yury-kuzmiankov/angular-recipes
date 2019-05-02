import {Ingredient} from '../shared/ingredient/ingredient.model';
import {Subject} from 'rxjs';
import {Recipe} from '../recipes/recipe.model';

export class ShoppingListService  {

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5, 1),
    new Ingredient("Tomatoes", 10, 2),
  ];

  private fireIngredientChange() {
    this.ingredientsChanged.next(this.getIngredients());
  }

  private getLatestIngredientId() {
    let latestId = 0;
    const ingredient = this.ingredients.forEach((ingredient: Ingredient) => {
      latestId = ingredient.id > latestId ? ingredient.id : latestId;
    });
    return latestId;
  }

  private findIngredientIndex(id: number) {
    const index = this.getIngredients().findIndex((item: Ingredient) => {
      return item.id === id;
    });
    return index
  }

  public ingredientsChanged = new Subject<Ingredient[]>();

  public getIngredient(id: number) {
    const ingredient = this.getIngredients().find((ingredient: Ingredient) => {
      return ingredient.id === +id;
    });
    return ingredient;
  }

  public getIngredients() {
    return [...this.ingredients];
  }

  public addIngredients(ingredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredients);
    this.fireIngredientChange();
  }

  public updateIngredient(ingredient: Ingredient) {
    const index = this.findIngredientIndex(ingredient.id);
    this.ingredients[index] = ingredient;
    this.fireIngredientChange();
  }

  public addIngredient(ingredient: Ingredient) {
    const index = this.getLatestIngredientId();
    ingredient.id = index ? index + 1 : 1;
    this.ingredients.push(ingredient);
    this.fireIngredientChange();
  }

  public removeIngredient(id: number) {
    const index = this.findIngredientIndex(id);
    this.ingredients.splice(index, 1);
    this.fireIngredientChange();
  }

}
