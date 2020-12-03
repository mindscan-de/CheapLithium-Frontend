import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDecisionNodeTransitionDialogComponent } from './create-decision-node-transition-dialog.component';

describe('CreateDecisionNodeTransitionDialogComponent', () => {
  let component: CreateDecisionNodeTransitionDialogComponent;
  let fixture: ComponentFixture<CreateDecisionNodeTransitionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDecisionNodeTransitionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDecisionNodeTransitionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
