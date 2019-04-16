import { Component, OnInit } from '@angular/core';
import {RecipeService} from './recipe.service';
import {RecipeNavigationService} from './recipeNavigation.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService, RecipeNavigationService]
})
export class RecipesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
