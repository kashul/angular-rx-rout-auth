import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLevelPageThreeComponent } from './first-level-page-three.component';

describe('FirstLevelPageThreeComponent', () => {
  let component: FirstLevelPageThreeComponent;
  let fixture: ComponentFixture<FirstLevelPageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstLevelPageThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstLevelPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
