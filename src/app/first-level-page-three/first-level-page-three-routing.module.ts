import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstLevelPageThreeComponent } from './first-level-page-three.component';
import { SecondLevelPageOneComponent } from './second-level-page-one/second-level-page-one.component';
import { SecondLevelPageTwoComponent } from './second-level-page-two/second-level-page-two.component';

const routes: Routes = [
  {
    path: '',
    component: FirstLevelPageThreeComponent,
    title: 'First Level Page Three',
    children: [
      { path: 'second-level-page-one', component: SecondLevelPageOneComponent },
      { path: 'second-level-page-two', component: SecondLevelPageTwoComponent },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstLevelPageThreeRoutingModule {}
