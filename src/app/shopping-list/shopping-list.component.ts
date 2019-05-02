import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private selectedIngredientId: number;
  private ingredients: Ingredient[];
  private ingredientsChangedSubscription: Subscription;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsChangedSubscription = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  editIngredient(ingredient: Ingredient) {
    this.selectedIngredientId = ingredient.id;
  }

  ngOnDestroy() {
    this.ingredientsChangedSubscription.unsubscribe();
  }

}
