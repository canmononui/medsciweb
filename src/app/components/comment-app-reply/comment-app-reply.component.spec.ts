import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentAppReplyComponent } from './comment-app-reply.component';

describe('CommentAppReplyComponent', () => {
  let component: CommentAppReplyComponent;
  let fixture: ComponentFixture<CommentAppReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentAppReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentAppReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
