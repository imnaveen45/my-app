import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestudentFormComponent } from './createstudent-form.component';

describe('CreatestudentFormComponent', () => {
  let component: CreatestudentFormComponent;
  let fixture: ComponentFixture<CreatestudentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatestudentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatestudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
