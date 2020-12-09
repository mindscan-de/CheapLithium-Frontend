import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDecisionModelDialogComponent } from './start-decision-model-dialog.component';

describe('StartDecisionModelDialogComponent', () => {
  let component: StartDecisionModelDialogComponent;
  let fixture: ComponentFixture<StartDecisionModelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartDecisionModelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartDecisionModelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
