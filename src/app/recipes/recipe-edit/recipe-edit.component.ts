import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  private recipe: Recipe;
  private isEditMode: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        if (params.id) {
          this.isEditMode = true;
          this.recipe = this.recipeService.getRecipe(params.id);
        } else {
          this.isEditMode = false;
        }
      }
    );
  }

}
