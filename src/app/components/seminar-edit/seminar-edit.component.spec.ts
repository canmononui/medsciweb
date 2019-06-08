import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarEditComponent } from './seminar-edit.component';

describe('SeminarEditComponent', () => {
  let component: SeminarEditComponent;
  let fixture: ComponentFixture<SeminarEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeminarEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
