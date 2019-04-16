import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient/ingredient.model';
import {Recipe} from '../../recipes/recipe.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("ingredientAmount") ingredientAmountRef: ElementRef;
  @Output() ingredientToAdd = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngredient(ingredientName) {
    const name = ingredientName.value;
    const amount = this.ingredientAmountRef.nativeElement.value;
    const ingredient = new Ingredient(name, amount)
    this.ingredientToAdd.emit(ingredient);
  }
}
