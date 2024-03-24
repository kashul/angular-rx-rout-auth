import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../redux-store/test-redux-store.reducer';

@Component({
  selector: 'app-first-level-page-one',
  templateUrl: './first-level-page-one.component.html',
  styleUrls: ['./first-level-page-one.component.scss']
})
export class FirstLevelPageOneComponent implements OnInit {
  name!: Observable<string>;
  constructor(private store:Store<AppState>) {
    this.name = this.store.select('testone');
   }

  ngOnInit(): void {
  }

}
