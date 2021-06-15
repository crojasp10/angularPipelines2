import { Component, OnInit, Input } from '@angular/core';
import {vehiculo,moto} from '../modulos/vehiculos'
@Component({
  selector: 'app-vehiculo-calculos',
  templateUrl: './vehiculo-calculos.component.html',
  styleUrls: ['./vehiculo-calculos.component.scss']
})
export class VehiculoCalculosComponent implements OnInit {

  @Input() porcentaje:number;
  precio:number =100000;
  ListaObjetos:any[]=[]
  ListaObjetos2:any[]=[]
  constructor() { }

  ngOnInit(): void {
    this.Listar2();
    this.Listar();
  }
  
  //askPorcentaje(porcent){
   // this.ListaObjetos.precio=this.precio-(this.precio*(porcent/100));
  //}

  ListaVehiculos = [
    {marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Chevrolet', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico'},
  ];
  ListaMotos: any[]=[{marca: 'Honda', modelo: 'Xr', year: 2018, cc: 200, precio: 6000, color: 'Negro'},
    {marca: 'Suzuki', modelo: 'Gixxer', year: 2020, cc: 250, precio: 2000, color: 'Negro'},
    {marca: 'Kawasaki', modelo: 'Ninja', year: 2021, cc: 500, precio: 7000, color: 'Negro'},
    {marca: 'Yamaha', modelo: 'FZ25', year: 2020, cc: 250, precio: 6000, color: 'Negro'},
    {marca: 'Yamaha', modelo: 'ZR', year: 2020, cc: 750, precio: 8000, color: 'Negro'},
    {marca: 'Suzuki', modelo: 'Gixxer', year: 2019, cc: 200, precio: 12000, color: 'Negro'},
    {marca: 'Kawasaki', modelo: 'Vulvan', year: 2020, cc: 390, precio: 13000, color: 'Negro'},
    {marca: 'Yamaha', modelo: 'FZ35', year: 2021, cc: 250, precio: 5000, color: 'Negro'},
    {marca: 'Suzuki', modelo: 'Gixxer', year: 2020, cc: 250, precio: 6000, color: 'Negro'},
    {marca: 'Kawasaki', modelo: 'Vulvan', year: 2020, cc: 390, precio: 6000, color: 'Negro'},
    {marca: 'Honda', modelo: 'hrv', year: 2019, cc: 250, precio: 6000, color: 'Negro'},
    {marca: 'Yamaha', modelo: 'FZ35', year: 2021, cc: 250, precio: 2000, color: 'Negro'},
    {marca: 'Honda', modelo: 'hrv', year: 2019, cc: 250, precio: 6000, color: 'Negro'},
    {marca: 'Kawasaki', modelo: 'Ninja', year: 2021, cc: 500, precio: 6000, color: 'Negro'},
    {marca: 'Yamaha', modelo: 'FZ27', year: 2017, cc: 250, precio: 8000, color: 'Negro'},
    {marca: 'Suzuki', modelo: 'Gixxer 250', year: 2021, cc: 250, precio: 6000, color: 'Negro'},
  ];

  Listar(){this.ListaVehiculos.forEach(element => {
    let car = new vehiculo(
                            element.marca,
                            element.modelo,
                            element.year,
                            element.precio,
                            element.puertas,
                            element.color,
                            element.transmision
                            )
    this.ListaObjetos.push(car)                       
  });
  }


  Listar2(){this.ListaMotos.forEach(element => {
    let motor = new moto(
                            element.marca,
                            element.modelo,
                            element.year,
                            element.cc,
                            element.precio,
                            element.color,
                            )
    this.ListaObjetos2.push(motor)                       
  });
  }

}


