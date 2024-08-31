import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecatangleComponent } from './recatangle.component';

describe('RecatangleComponent', () => {
  let component: RecatangleComponent;
  let fixture: ComponentFixture<RecatangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecatangleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecatangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
