import {Component, EventEmitter, Output} from '@angular/core';
import {NavigationTab} from '../shared/constants/navigationTabs.enum';
import {NavigationService} from '../shared/navigation/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  activeTab: NavigationTab = NavigationTab.Recipes;
  navigationTab = NavigationTab;
  @Output() activeTabChanged = new EventEmitter<NavigationTab>();

  constructor(public NavigationService: NavigationService) {}

  setActiveTab(activeType: NavigationTab) {
    this.activeTab = activeType;
    this.activeTabChanged.emit(activeType);
    this.NavigationService.changeTab(activeType);
  }

  getActiveClass(tab: NavigationTab): string{
    return tab === this.activeTab ? "active" : "";
  }
}
