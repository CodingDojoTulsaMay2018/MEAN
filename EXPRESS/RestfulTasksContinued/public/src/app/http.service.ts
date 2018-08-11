import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Injectable()
  

export class HttpService {
  constructor(private _http: HttpClient) {

    
   }

  getAll(){
    return this._http.get('/users');
   }
   getUser(id){
    return this._http.get('/users/'+id);   
   }
   create(name){
    return this._http.post('/users',{name:name});
    
   }
   update(id,name){
    return this._http.put('/users/'+id,{name:name});
    
   }
   delete(id){
    return this._http.delete('/users/'+id);
    
   }
   postToServer(num){
    return this._http.post('/tasks', num);  
}


  


}
