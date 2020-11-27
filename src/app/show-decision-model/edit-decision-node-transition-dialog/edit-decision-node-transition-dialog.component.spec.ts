import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDecisionNodeTransitionDialogComponent } from './edit-decision-node-transition-dialog.component';

describe('EditDecisionNodeTransitionDialogComponent', () => {
  let component: EditDecisionNodeTransitionDialogComponent;
  let fixture: ComponentFixture<EditDecisionNodeTransitionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDecisionNodeTransitionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDecisionNodeTransitionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
