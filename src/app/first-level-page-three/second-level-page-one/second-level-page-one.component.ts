import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/redux-store/test-redux-store.reducer';



@Component({
  selector: 'app-second-level-page-one',
  templateUrl: './second-level-page-one.component.html',
  styleUrls: ['./second-level-page-one.component.scss']
})
export class SecondLevelPageOneComponent implements OnInit {

  name!: Observable<string>;
  constructor(private store:Store<AppState>) {

    this.name = this.store.select('testone');
   }

  ngOnInit(): void {
  }
 chageName(number: string) {

  this.store.dispatch({type:number,test:{id:1}}) //wecan send any data to reducer function
 }
}
