import { Component } from '@angular/core';

import { ITab } from '../../interfaces/ITab';
import { TABS } from '../../mock/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  public DEFAULT_TABS: Array<ITab>;

  constructor() {
    this.DEFAULT_TABS = TABS;
  }
}
