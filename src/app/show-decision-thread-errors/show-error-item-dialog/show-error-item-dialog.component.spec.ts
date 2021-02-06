import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowErrorItemDialogComponent } from './show-error-item-dialog.component';

describe('ShowErrorItemDialogComponent', () => {
  let component: ShowErrorItemDialogComponent;
  let fixture: ComponentFixture<ShowErrorItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowErrorItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowErrorItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
