import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstLevelPageTwoRoutingModule } from './first-level-page-two-routing.module';
import { FirstLevelPageTwoComponent } from './first-level-page-two.component';
import { SecondLevelPageOneComponent } from './second-level-page-one/second-level-page-one.component';
import { SecondLevelPageTwoComponent } from './second-level-page-two/second-level-page-two.component';


@NgModule({
  declarations: [
    FirstLevelPageTwoComponent,
    SecondLevelPageOneComponent,
    SecondLevelPageTwoComponent
  ],
  imports: [
    CommonModule,
    FirstLevelPageTwoRoutingModule
  ]
})
export class FirstLevelPageTwoModule { }
