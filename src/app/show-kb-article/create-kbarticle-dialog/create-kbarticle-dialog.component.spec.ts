import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKBArticleDialogComponent } from './create-kbarticle-dialog.component';

describe('CreateKBArticleDialogComponent', () => {
  let component: CreateKBArticleDialogComponent;
  let fixture: ComponentFixture<CreateKBArticleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateKBArticleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKBArticleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
