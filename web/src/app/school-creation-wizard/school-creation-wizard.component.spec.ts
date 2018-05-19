import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolCreationWizardComponent } from './school-creation-wizard.component';

describe('SchoolCreationWizardComponent', () => {
  let component: SchoolCreationWizardComponent;
  let fixture: ComponentFixture<SchoolCreationWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolCreationWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolCreationWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
