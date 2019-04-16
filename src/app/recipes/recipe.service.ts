import {Recipe} from './recipe.model';

export class RecipeService  {
  private recipes: Recipe[] = [
    new Recipe(1, 'A Test Recipe', 'This is simply a test', 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA'),
    new Recipe(2, 'A Test Recipe1', 'This is simply a test1', 'https://recipes.timesofindia.com/photo/54673639.cms')
  ];

  public getRecipes() {
    return [...this.recipes];
  }
}
