import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: ':id',
    component: TabsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TabsRoutesModule {}
