import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLevelPageOneComponent } from './second-level-page-one.component';

describe('SecondLevelPageOneComponent', () => {
  let component: SecondLevelPageOneComponent;
  let fixture: ComponentFixture<SecondLevelPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondLevelPageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondLevelPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
