import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDecisionNodeDialogComponent } from './create-decision-node-dialog.component';

describe('CreateDecisionNodeDialogComponent', () => {
  let component: CreateDecisionNodeDialogComponent;
  let fixture: ComponentFixture<CreateDecisionNodeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDecisionNodeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDecisionNodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
