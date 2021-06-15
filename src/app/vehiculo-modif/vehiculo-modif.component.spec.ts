import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoModifComponent } from './vehiculo-modif.component';

describe('VehiculoModifComponent', () => {
  let component: VehiculoModifComponent;
  let fixture: ComponentFixture<VehiculoModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
