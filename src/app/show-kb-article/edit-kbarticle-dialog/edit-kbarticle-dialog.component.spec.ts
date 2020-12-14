import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKBArticleDialogComponent } from './edit-kbarticle-dialog.component';

describe('EditKBArticleDialogComponent', () => {
  let component: EditKBArticleDialogComponent;
  let fixture: ComponentFixture<EditKBArticleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKBArticleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKBArticleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
