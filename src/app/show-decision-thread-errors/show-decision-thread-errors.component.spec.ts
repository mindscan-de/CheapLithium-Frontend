import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDecisionThreadErrorsComponent } from './show-decision-thread-errors.component';

describe('ShowDecisionThreadErrorsComponent', () => {
  let component: ShowDecisionThreadErrorsComponent;
  let fixture: ComponentFixture<ShowDecisionThreadErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDecisionThreadErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDecisionThreadErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
