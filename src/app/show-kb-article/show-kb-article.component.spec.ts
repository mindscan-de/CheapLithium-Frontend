import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowKbArticleComponent } from './show-kb-article.component';

describe('ShowKbArticleComponent', () => {
  let component: ShowKbArticleComponent;
  let fixture: ComponentFixture<ShowKbArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowKbArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowKbArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
