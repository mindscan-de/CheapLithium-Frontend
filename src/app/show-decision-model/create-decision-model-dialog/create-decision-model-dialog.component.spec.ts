import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDecisionModelDialogComponent } from './create-decision-model-dialog.component';

describe('CreateDecisionModelDialogComponent', () => {
  let component: CreateDecisionModelDialogComponent;
  let fixture: ComponentFixture<CreateDecisionModelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDecisionModelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDecisionModelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
