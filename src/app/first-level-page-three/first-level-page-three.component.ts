import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-first-level-page-three',
  templateUrl: './first-level-page-three.component.html',
  styleUrls: ['./first-level-page-three.component.scss']
})
export class FirstLevelPageThreeComponent implements OnInit {

  public numbers$ = of(1, 2, 3);
  constructor() { }

  ngOnInit(): void {
    this.numbers$.subscribe(value => console.log('Observable emitted the next value: ' + value));
  }

}
