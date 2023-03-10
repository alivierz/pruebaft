import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaIdMatchComponent } from './prueba-id-match.component';

describe('PruebaIdMatchComponent', () => {
  let component: PruebaIdMatchComponent;
  let fixture: ComponentFixture<PruebaIdMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaIdMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaIdMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
