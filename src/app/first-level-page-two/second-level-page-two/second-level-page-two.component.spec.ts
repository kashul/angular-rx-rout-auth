import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLevelPageTwoComponent } from './second-level-page-two.component';

describe('SecondLevelPageTwoComponent', () => {
  let component: SecondLevelPageTwoComponent;
  let fixture: ComponentFixture<SecondLevelPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondLevelPageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondLevelPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
