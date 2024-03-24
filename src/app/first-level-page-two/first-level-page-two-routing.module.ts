import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstLevelPageTwoComponent } from './first-level-page-two.component';
import { SecondLevelPageOneComponent } from './second-level-page-one/second-level-page-one.component';
import { SecondLevelPageTwoComponent } from './second-level-page-two/second-level-page-two.component';

const routes: Routes = [
  { path: 'second-level-page-one', component: SecondLevelPageOneComponent },
  { path: 'second-level-page-two', component: SecondLevelPageTwoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstLevelPageTwoRoutingModule {}
