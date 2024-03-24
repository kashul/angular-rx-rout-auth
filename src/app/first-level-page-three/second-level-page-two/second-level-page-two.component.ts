import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  ActionType,
  AppState,
  TestStateObject,
} from 'src/app/redux-store/test-redux-store.reducer';
import * as ActionsCalsses from 'src/app/redux-store/testreducerActions';

@Component({
  selector: 'app-second-level-page-two',
  templateUrl: './second-level-page-two.component.html',
  styleUrls: ['./second-level-page-two.component.scss'],
})
export class SecondLevelPageTwoComponent implements OnInit {
  name: string = '';
  value: number = 0;
  state_date: TestStateObject = new TestStateObject();
  constructor(private store: Store<AppState>) {
    this.store.select('testtwo').subscribe((test) => {
      this.state_date = test;
      this.name = this.state_date.text;
    });
  }

  ngOnInit(): void {}

  changeText(name: string) {
    this.store.dispatch( new ActionsCalsses.ChangeName(this.name));
  }
  changeaction(action: ActionType) {
  

    switch (action) {
      case ActionType.Add:
        this.store.dispatch(new ActionsCalsses.Add());
        break
      case ActionType.Reduce:
        this.store.dispatch(new ActionsCalsses.Reduce());
        break
      case ActionType.Reset:
        this.store.dispatch(new ActionsCalsses.Reset());
        break

    }
  }

  public get ActionType() {
    return ActionType;
  }
}
