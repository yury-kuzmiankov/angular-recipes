import {Component, OnDestroy} from '@angular/core';
import {NavigationService} from './shared/navigation/navigation.service';
import {NavigationTab} from './shared/constants/navigationTabs.enum';
import {Subscription} from 'rxjs';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {RecipeService} from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NavigationService, ShoppingListService, RecipeService]
})
export class AppComponent {
}
