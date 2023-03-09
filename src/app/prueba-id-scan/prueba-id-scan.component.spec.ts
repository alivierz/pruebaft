import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaIdScanComponent } from './prueba-id-scan.component';

describe('PruebaIdScanComponent', () => {
  let component: PruebaIdScanComponent;
  let fixture: ComponentFixture<PruebaIdScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaIdScanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaIdScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
