import {Component, OnDestroy} from '@angular/core';
import {NavigationService} from './shared/navigation/navigation.service';
import {NavigationTab} from './shared/constants/navigationTabs.enum';
import {Subscription} from 'rxjs';
import {ShoppingListService} from './shopping-list/shoppingList.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NavigationService, ShoppingListService]
})
export class AppComponent implements OnDestroy {
  activeTab: NavigationTab = NavigationTab.Recipes;
  navigationTab = NavigationTab;
  subscription: Subscription;

  constructor(public NavigationService: NavigationService) {
    this.subscription = NavigationService.activeTab$.subscribe(
      (activeType: NavigationTab) => {
        //this.setActiveTab(activeType);
      }
    );
  }

  setActiveTab(activeType: NavigationTab): void {
    this.activeTab = activeType;
  }

  onActiveTabChanged(activeType: NavigationTab): void {
    this.activeTab = activeType;
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
