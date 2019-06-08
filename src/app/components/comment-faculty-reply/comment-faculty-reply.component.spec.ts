import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFacultyReplyComponent } from './comment-faculty-reply.component';

describe('CommentFacultyReplyComponent', () => {
  let component: CommentFacultyReplyComponent;
  let fixture: ComponentFixture<CommentFacultyReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentFacultyReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentFacultyReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
