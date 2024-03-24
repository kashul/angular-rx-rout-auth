import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteMatchTestComponent } from './route-match-test.component';

describe('RouteMatchTestComponent', () => {
  let component: RouteMatchTestComponent;
  let fixture: ComponentFixture<RouteMatchTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteMatchTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteMatchTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
