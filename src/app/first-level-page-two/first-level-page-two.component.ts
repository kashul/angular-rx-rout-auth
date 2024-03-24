import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TestStateObject, AppState } from '../redux-store/test-redux-store.reducer';

@Component({
  selector: 'app-first-level-page-two',
  templateUrl: './first-level-page-two.component.html',
  styleUrls: ['./first-level-page-two.component.scss']
})
export class FirstLevelPageTwoComponent implements OnInit {

  state_date: TestStateObject = new TestStateObject();
  constructor(private store: Store<AppState>) {
    this.store.select('testtwo').subscribe((test) => {
      this.state_date = test;
     
    });
  }

  ngOnInit(): void {
  }

}
