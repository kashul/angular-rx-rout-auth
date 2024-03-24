import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLevelPageOneComponent } from './first-level-page-one.component';
import { Routes } from '@angular/router';
import { FirstLevelPageOneRoutingModule } from './first-level-page-one-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'first-level-page-one', pathMatch: 'full' },
  { path: 'first-level-page-one', component: FirstLevelPageOneComponent },
]
@NgModule({
  declarations: [
    FirstLevelPageOneComponent
  ],
  imports: [
    FirstLevelPageOneRoutingModule,
    CommonModule
  ]
})
export class FirstLevelPageOneModule { }
