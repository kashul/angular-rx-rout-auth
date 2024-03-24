import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstLevelPageOneComponent } from './first-level-page-one.component';

const routes: Routes = [{ path: '', component: FirstLevelPageOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstLevelPageOneRoutingModule { }
