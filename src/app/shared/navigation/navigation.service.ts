import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
import {NavigationTab} from '../constants/navigationTabs.enum';

@Injectable()
export class NavigationService {

  // Observable string sources
  private activeTab = new Subject<NavigationTab>();

  // Observable string streams
  activeTab$ = this.activeTab.asObservable();

  // Service message commands
  public changeTab(activeTab: NavigationTab) {
    this.activeTab.next(activeTab);
  }
}
