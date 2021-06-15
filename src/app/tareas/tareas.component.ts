import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Tarea} from '../modulos/Tarea'
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})

export class TareasComponent implements OnInit {
  form: FormGroup;
  title:string;
  note:string;
  date:Date;
  ListaNotas: any []= [];
//Hacemos esto para crear el formulario y poder resgistrar
// los datos necesarios para la lista de notas.
  ngOnInit() {
    this.form = new FormGroup({
      plazo:new FormControl('Corto plazo'),
      nota: new FormControl(''),
      titulo: new FormControl('Tarea'),
      date: new FormControl(''),
    });
  }

  onSubmit(mediaItem) {
    console.log (mediaItem);
  }

  Registrar(){
    const nota= new Tarea(this.title,this.note,this.date)
    this.ListaNotas.push(nota)

  }

  constructor() { }
}
