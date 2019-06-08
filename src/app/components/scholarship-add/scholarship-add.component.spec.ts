import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipAddComponent } from './scholarship-add.component';

describe('ScholarshipAddComponent', () => {
  let component: ScholarshipAddComponent;
  let fixture: ComponentFixture<ScholarshipAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholarshipAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarshipAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
