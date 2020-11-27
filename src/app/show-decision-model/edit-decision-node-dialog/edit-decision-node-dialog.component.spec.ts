import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDecisionNodeDialogComponent } from './edit-decision-node-dialog.component';

describe('EditDecisionNodeDialogComponent', () => {
  let component: EditDecisionNodeDialogComponent;
  let fixture: ComponentFixture<EditDecisionNodeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDecisionNodeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDecisionNodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
