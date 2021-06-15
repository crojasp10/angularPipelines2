import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SocialServiceService {

  info:any = {};
  cargada=false;
  constructor(private http : HttpClient) { 
    console.log ("Servicio corriendo AQUÍ 2");
  }

  private url: string =  "http://18.189.21.84:5050/users";

  getPost(id: number){
    return this.http.get(`${this.url}.${id}`)
  }

  getPosted(name: string){
    return this.http.get(`${this.url}.${name}`)
  }

  guardarToken(token: string) {
    window.sessionStorage.setItem('app-posts-token', token);
  }

  obtenerToken(): string | null {
    return window.sessionStorage.getItem('app-posts-token');
  }

  guardarNombreUsuario(nombre: string) {
    window.sessionStorage.setItem('app-posts-usuario', nombre);
  }

  obtenerNombreUsuario(): string {
    return window.sessionStorage.getItem('app-posts-usuario') || '';
  }

  guardarUsuario(usuario: any) {
    window.sessionStorage.setItem('app-posts-usuario-objeto', JSON.stringify(usuario));
  }

  obtenerUsuario(): any {
    const usuarioJson = window.sessionStorage.getItem('app-posts-usuario-objeto') || '';
    if (!Boolean(usuarioJson)) {
      return null;
    }
    return JSON.parse(usuarioJson);
  }


}
    