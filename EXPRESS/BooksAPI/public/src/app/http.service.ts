
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { 
    // this.getTasks();
  }
  getAllAuthors(){
    return this._http.get('/authors')
  }

  getAuthor(id){
    return this._http.get('/authors/'+id)
  }

  createAuthor(newAuthor){
    console.log("hit here");
    
    return this._http.post('/authors', newAuthor)
  }
}
