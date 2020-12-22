import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDecisionThreadReportComponent } from './show-decision-thread-report.component';

describe('ShowDecisionThreadReportComponent', () => {
  let component: ShowDecisionThreadReportComponent;
  let fixture: ComponentFixture<ShowDecisionThreadReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDecisionThreadReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDecisionThreadReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
