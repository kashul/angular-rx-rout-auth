import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLevelPageOneComponent } from './first-level-page-one.component';

describe('FirstLevelPageOneComponent', () => {
  let component: FirstLevelPageOneComponent;
  let fixture: ComponentFixture<FirstLevelPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstLevelPageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstLevelPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
