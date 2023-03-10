import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaAutenticateComponent } from './prueba-autenticate.component';

describe('PruebaAutenticateComponent', () => {
  let component: PruebaAutenticateComponent;
  let fixture: ComponentFixture<PruebaAutenticateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaAutenticateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaAutenticateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
