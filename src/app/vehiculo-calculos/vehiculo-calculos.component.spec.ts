import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoCalculosComponent } from './vehiculo-calculos.component';

describe('VehiculoCalculosComponent', () => {
  let component: VehiculoCalculosComponent;
  let fixture: ComponentFixture<VehiculoCalculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoCalculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
