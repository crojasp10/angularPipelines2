import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
// Para poder usar el HttpClient tengo que importar el httpClientModule en app.Module
  info:any = {};
  cargada=false;
  constructor(private http : HttpClient) { 
    console.log ("Servicio corriendo AQUÍ 2");
    http.get(this.url2)
      .subscribe(resp =>{
        this.info=resp;
        this.cargada= true;
      })
  }

  private url: string = "https://pokeapi.co/api/v2/pokemon";
  private url2 : string = "https://pokeapi.co/api/v2/pokemon";

  getJson(value:number){
    return this.http.get(`${this.url2}/${value}`);
    
  }                                

  getPokemon(name: string){
    return this.http.get(`${this.url}/${name}`)
  }
}
    
