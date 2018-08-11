
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { 
    // this.getTasks();
  }
  getAnimals(){
    return this._http.get('/animals')
  }

  select(num){
    return this._http.get('/animals/'+num)
  }

  create(newAnimal){
    return this._http.post('/animals', newAnimal)
  }
}
