import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFacultyComponent } from './comment-faculty.component';

describe('CommentFacultyComponent', () => {
  let component: CommentFacultyComponent;
  let fixture: ComponentFixture<CommentFacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentFacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
