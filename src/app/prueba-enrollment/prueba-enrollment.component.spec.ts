import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaEnrollmentComponent } from './prueba-enrollment.component';

describe('PruebaEnrollmentComponent', () => {
  let component: PruebaEnrollmentComponent;
  let fixture: ComponentFixture<PruebaEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaEnrollmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
