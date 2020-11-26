import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDecisionModelDialogComponent } from './edit-decision-model-dialog.component';

describe('EditDecisionModelDialogComponent', () => {
  let component: EditDecisionModelDialogComponent;
  let fixture: ComponentFixture<EditDecisionModelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDecisionModelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDecisionModelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
