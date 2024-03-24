import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstLevelPageThreeRoutingModule } from './first-level-page-three-routing.module';
import { FirstLevelPageThreeComponent } from './first-level-page-three.component';
import { SecondLevelPageOneComponent } from './second-level-page-one/second-level-page-one.component';
import { SecondLevelPageTwoComponent } from './second-level-page-two/second-level-page-two.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FirstLevelPageThreeComponent,
    SecondLevelPageOneComponent,
    SecondLevelPageTwoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    FirstLevelPageThreeRoutingModule
  ]
})
export class FirstLevelPageThreeModule { }
