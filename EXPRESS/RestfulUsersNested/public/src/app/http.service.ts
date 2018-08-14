
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { 
    // this.getTasks();
  }

  createUser(newUser){
    
    return this._http.post('/users', newUser)
  }
  getUsers(){
    return this._http.get('/users')
  }

  updateUser(_id,user){
    console.log("http service******"+_id);
    
    return this._http.put('/users/'+_id,user)

  }

  selectUser(_id){
    console.log(_id);
    
    return this._http.get('/users/'+_id)
  }

  deleteUser(_id){
    console.log(_id);
    
    return this._http.delete('/users/'+_id)
  }

}
