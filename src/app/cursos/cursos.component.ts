import { Component, OnDestroy, OnInit } from '@angular/core';
import {Curso} from '../modulos/CursosInterfaces';
import {CursosService} from '../Services/cursos.service'
import {Subject} from 'rxjs'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {


  cursos : Curso[] = [];
  subscripcionCursos= this.servicioCursos.getsubscripcionCursos()
  .subscribe( listaCursos => {
      this.cursos=listaCursos;

  });
  
  constructor(
    private servicioCursos:CursosService
  ) { }

  ngOnInit(): void {
    this.cursos= this.servicioCursos.getCursos();
  }

  ngOnDestroy() {
    if (this.subscripcionCursos) {
      this.subscripcionCursos.unsubscribe();
    }
  }



}
