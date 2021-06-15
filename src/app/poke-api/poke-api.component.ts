import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../Services/pokemon.service';
import {Pokemon} from '../modulos/Pokemon'

@Component({
  selector: 'app-poke-api',
  templateUrl: './poke-api.component.html',
  styleUrls: ['./poke-api.component.scss']
})
export class PokeApiComponent implements OnInit {

  name:string
  urlImage:string
  urlHabilidad1:string
  urlHabilidad2:string
  ListaPokemon : any[] = []
                                                  //Aquí uso el PokemonService de la carpeta Services 
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.look()
    
  }

  search(){
    this.pokemonService.getPokemon(this.name).subscribe((data : any ) => {
      this.urlImage = data.sprites.front_default;
      this.urlHabilidad1 = `Habilidades:  ${data.abilities[0].ability.name}`
      this.urlHabilidad2 = data.abilities[1].ability.name
      console.log(data)
    
  }     )
  }

  look(){
    for (let i=0; i<500; i++){
      this.pokemonService.getJson(i).subscribe((data:any)=>{
        console.log(data)
        const poke = new Pokemon(
                                                      data.species.name,
                                                      data.id,
                                                      data.sprites.front_default
        ) 
        this.ListaPokemon.push(poke)
    })
  }
  }
}
