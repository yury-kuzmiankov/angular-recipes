import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  private recipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe(this.activatedRoute.snapshot.params.id);
    this.activatedRoute.params.subscribe(
      (params) => {
        this.recipe = this.recipeService.getRecipe(params.id);
      }
    );
  }

  addToShoppingList() {
    this.recipeService.addIngredients(this.recipe.ingredients);
  }

  editRecipe() {
    this.router.navigate(['../edit'], { relativeTo: this.activatedRoute });
  }
}
