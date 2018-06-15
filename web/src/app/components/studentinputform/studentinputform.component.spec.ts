import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInputFormComponent } from './studentinputform.component';

describe('StudentInputFormComponent', () => {
  let component: StudentInputFormComponent;
  let fixture: ComponentFixture<StudentInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
