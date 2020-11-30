import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDecisionThreadComponent } from './show-decision-thread.component';

describe('ShowDecisionThreadComponent', () => {
  let component: ShowDecisionThreadComponent;
  let fixture: ComponentFixture<ShowDecisionThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDecisionThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDecisionThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
