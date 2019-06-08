import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentAppComponent } from './comment-app.component';

describe('CommentAppComponent', () => {
  let component: CommentAppComponent;
  let fixture: ComponentFixture<CommentAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
