import { Injectable } from '@angular/core';
import {Curso} from '../modulos/CursosInterfaces'
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CursosService {


  cursos:Curso[] = [{ id: 1, nombre:  "Curso Angular", integrantes: []},
  { id: 2, nombre:  "Curso Go", integrantes: []},
  { id: 3, nombre:  "Curso Flutter", integrantes: []},
  { id: 4, nombre:  "Curso React", integrantes: []},
  { id: 5, nombre:  "Curso java", integrantes: []},
];


  subscripcionCursos= new Subject<Curso[]>();


  constructor() { }

  public getCursos(): Curso[] {
    return this.cursos;
  }

  public setCursos(cursos: Curso[]){
    this.cursos = cursos;
    this.subscripcionCursos.next(this.cursos)
  }

  public  getsubscripcionCursos(){
   return this.subscripcionCursos.asObservable();
  }

}
