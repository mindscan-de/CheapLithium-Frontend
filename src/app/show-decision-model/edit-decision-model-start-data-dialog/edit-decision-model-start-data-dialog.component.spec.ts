import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDecisionModelStartDataDialogComponent } from './edit-decision-model-start-data-dialog.component';

describe('EditDecisionModelStartDataDialogComponent', () => {
  let component: EditDecisionModelStartDataDialogComponent;
  let fixture: ComponentFixture<EditDecisionModelStartDataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDecisionModelStartDataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDecisionModelStartDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
