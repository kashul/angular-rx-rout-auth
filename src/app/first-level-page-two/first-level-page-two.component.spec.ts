import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLevelPageTwoComponent } from './first-level-page-two.component';

describe('FirstLevelPageTwoComponent', () => {
  let component: FirstLevelPageTwoComponent;
  let fixture: ComponentFixture<FirstLevelPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstLevelPageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstLevelPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
