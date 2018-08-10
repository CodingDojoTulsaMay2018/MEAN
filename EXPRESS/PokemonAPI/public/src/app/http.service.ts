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
    let pokemon

    let tempObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    
    tempObservable.subscribe(data =>   pokemon = data )
         
    tempObservable.subscribe(pokemon)
      
 
    
    
    }
 

}
