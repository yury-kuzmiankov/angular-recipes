import {Component, EventEmitter, Output} from '@angular/core';
import {NavigationTab} from '../shared/constants/navigationTabs.enum';
import {NavigationService} from '../shared/navigation/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  navigationTab = NavigationTab;

  constructor() {}

}
