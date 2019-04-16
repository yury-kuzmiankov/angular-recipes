import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeNavigationService} from '../../recipeNavigation.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeNavigationService: RecipeNavigationService) { }

  ngOnInit() {
  }

  selectRecipe() {
    this.recipeNavigationService.selectRecipe(this.recipe.id);
  }
}
