import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarAddComponent } from './seminar-add.component';

describe('SeminarAddComponent', () => {
  let component: SeminarAddComponent;
  let fixture: ComponentFixture<SeminarAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeminarAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
