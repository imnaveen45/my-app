import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVechileComponent } from './view-vechile.component';

describe('ViewVechileComponent', () => {
  let component: ViewVechileComponent;
  let fixture: ComponentFixture<ViewVechileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVechileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVechileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
