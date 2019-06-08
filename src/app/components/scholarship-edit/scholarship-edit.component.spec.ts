import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipEditComponent } from './scholarship-edit.component';

describe('ScholarshipEditComponent', () => {
  let component: ScholarshipEditComponent;
  let fixture: ComponentFixture<ScholarshipEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholarshipEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
