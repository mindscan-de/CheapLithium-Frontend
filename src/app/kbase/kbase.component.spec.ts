import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KbaseComponent } from './kbase.component';

describe('KbaseComponent', () => {
  let component: KbaseComponent;
  let fixture: ComponentFixture<KbaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KbaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
