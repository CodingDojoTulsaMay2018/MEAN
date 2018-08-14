
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { 
    // this.getTasks();
  }

  createCake(newCake){
    
    return this._http.post('/cakes', newCake)
  }
  getCakes(){
    return this._http.get('/cakes')
  }

  rateCake(_id,ratedCake){
    console.log("http service******"+_id);
    
    return this._http.put('/rate/'+_id,ratedCake)

  }

  selectCake(_id){
    console.log("http service.ts:  "+_id);
    
    return this._http.get('/cakes/'+_id)
  }


}
