import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient/ingredient.model';
import {Recipe} from '../../recipes/recipe.model';
import {ShoppingListService} from '../shopping-list.service';
import {Form, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  public selectedIngredient: Ingredient;
  public isEditMode: boolean;

  @ViewChild('form') form;

  @Input()
  set selectedIngredientId(ingredientId: number) {
    const ingredient = this.shoppingListService.getIngredient(ingredientId);
    if (ingredient) {
      this.form.setValue({
        name: ingredient.name,
        amount: ingredient.amount
      });
      this.isEditMode = true;
      this.selectedIngredient = ingredient;
    } else{
      this.isEditMode = false;
    }
  }

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() { }

  publishIngredient(ingredientsForm: NgForm) {
    let ingredient;
    const name = ingredientsForm.value.name;
    const amount = ingredientsForm.value.amount;
    if (this.isEditMode) {
      this.selectedIngredient.name = name;
      this.selectedIngredient.amount = amount;
      ingredient = this.selectedIngredient;
      this.shoppingListService.updateIngredient(ingredient);
    } else {
      ingredient = new Ingredient(name, amount);
      this.shoppingListService.addIngredient(ingredient);
    }
  }

  removeIngredient(id: number) {
    this.cancelChanges();
    this.shoppingListService.removeIngredient(id);
  }

  cancelChanges() {
    this.form.resetForm();
    if (this.isEditMode) {
      this.isEditMode = false;
      this.selectedIngredient = null;
    }
  }
}
