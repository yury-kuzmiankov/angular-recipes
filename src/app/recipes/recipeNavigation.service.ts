import {Recipe} from './recipe.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {RecipeService} from './recipe.service';

@Injectable()
export class RecipeNavigationService  {
  // Observable string sources
  private activeRecipe = new Subject<Recipe>();

  // Observable string streams
  public activeRecipe$ = this.activeRecipe.asObservable();

  constructor(private recipeService: RecipeService){ }

  // Service message commands
  public selectRecipe(activeRecipeId: number) {
    const selectedRecipe = this.recipeService.getRecipes().find((item: Recipe) => {
      return item.id === activeRecipeId;
    });
    this.activeRecipe.next(selectedRecipe);
  }

}
