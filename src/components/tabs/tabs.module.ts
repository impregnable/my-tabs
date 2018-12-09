import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs.component';
import { TabModule } from '../tab/tab.module';
import { TabsRoutesModule } from './tabs.routes';

@NgModule({
  imports: [
    CommonModule,
    TabModule,
    TabsRoutesModule
  ],
  exports: [
    TabsComponent
  ],
  declarations: [
    TabsComponent
  ]
})
export class TabsModule {}
