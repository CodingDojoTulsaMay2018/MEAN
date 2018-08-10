import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Injectable()
  

export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
   
    this.getPokemon(1);
   
    
   }

  //   getTasks(){
  //    let tempObservable = this._http.get('/tasks');
  //    tempObservable.subscribe(data => console.log("Got our tasks!", data))
  //  }

    getPokemon(id){
      console.log("getPokemon has run");
      
    // let pokemon
    // let tempObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/'+id+'/');
    return this._http.get('https://pokeapi.co/api/v2/pokemon/'+id+'/')
    // tempObservable.subscribe(data => {pokemon = data, 
    //                                   console.log(pokemon),
    //                                   console.log(data.abilities[1].ability.name)},)  
      
    }
}
