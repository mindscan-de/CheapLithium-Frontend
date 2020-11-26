import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyDecisionModelDialogComponent } from './copy-decision-model-dialog.component';

describe('CopyDecisionModelDialogComponent', () => {
  let component: CopyDecisionModelDialogComponent;
  let fixture: ComponentFixture<CopyDecisionModelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyDecisionModelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyDecisionModelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
