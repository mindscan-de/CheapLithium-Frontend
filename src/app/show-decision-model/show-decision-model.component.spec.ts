import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDecisionModelComponent } from './show-decision-model.component';

describe('ShowDecisionModelComponent', () => {
  let component: ShowDecisionModelComponent;
  let fixture: ComponentFixture<ShowDecisionModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDecisionModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDecisionModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
