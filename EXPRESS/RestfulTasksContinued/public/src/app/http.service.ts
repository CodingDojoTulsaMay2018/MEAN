import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Injectable()
  

export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.getAll();  
    // this.getUser('5b6cd736db4e1196f3bd554a');
    // this.create("billybob")   
    // this.update('5b6cd72adb4e1196f3bd5549','lisa')
    // this.delete("5b6cde426a5e0c9a45f505b3") 
    
   }

  //   getTasks(){
  //    let tempObservable = this._http.get('/tasks');
  //    tempObservable.subscribe(data => console.log("Got our tasks!", data))
  //  }
  getAll(){
    return this._http.get('/users');
    // tempObservable.subscribe(data => console.log("Got all our users!", data))
   }
  //  getAll(){
  //   let tempObservable = this._http.get('/users');
  //   tempObservable.subscribe(data => console.log("Got all our users!", data))
  //  }

   getUser(id){
    let tempObservable = this._http.get('/users/'+id);
    tempObservable.subscribe(data => console.log("Got one user!", data))
   }

   create(name){
    let tempObservable = this._http.post('/users',{name:name});
    tempObservable.subscribe(data => console.log("Added a user!", data))
   }
   update(id,name){
    let tempObservable = this._http.put('/users/'+id,{name:name});
    tempObservable.subscribe(data => console.log("Updated a user!", data))
   }
   delete(id){
    let tempObservable = this._http.delete('/users/'+id);
    tempObservable.subscribe(data => console.log("Deleted a user!", data))
   }


  


}
