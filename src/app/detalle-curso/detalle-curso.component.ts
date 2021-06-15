import { Component, OnInit } from '@angular/core';
import {Curso} from '../modulos/CursosInterfaces'
import {ActivatedRoute} from '@angular/router';
import {CursosService} from '../Services/cursos.service'

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.scss']
})
export class DetalleCursoComponent implements OnInit {

  cursos : Curso[] = [
  ];

  curso: Curso = {id : 0, nombre: '', integrantes: []}
  id: number=0;

  constructor(
    private activeRoute: ActivatedRoute,
    private servicioCursos:CursosService
  ) { }

  ngOnInit(): void {

   //this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  this.cursos= this.servicioCursos.getCursos();
   console.log(this.activeRoute.snapshot.queryParamMap);
   this.id = Number(this.activeRoute.snapshot.queryParamMap.get('id')); // Query params
   this.curso= this.buscarCurso(this.id)
  }
    
  buscarCurso(id: number): Curso {
    const curso = this.cursos.find(i => i.id === id);
    return curso || { id: 0, nombre: '', integrantes: [] };
  }



}
