import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "Books API!";
  name = ""
  errors = ""
  country =""
  birthday: Date
  newAuthor: any
  one = false;
  two = false; 
  three = false;
  four = false;
  err = false
  author: object
  nameValid=''
  authors: any
  newBook: any

  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    this.newAuthor = {name:"", country:""}
    this.newBook = {title:"", publisher:"",author:""}
  }

  showAll(): void { 
    console.log("clicked")
    let observable = this._httpService.getAllAuthors()
    observable.subscribe(data => {
    this.authors = data;
    this.one = true;
    this.two = false;
    this.three = false;
    this.four = false;
    this.err = false;
    console.log("got data", data)
      
    })
  }

  getAuthor(id): void { 
    let observable = this._httpService.getAuthor(id)
    observable.subscribe(data => {
    this.authors = data;
    this.one = false;
    this.two = true;
    this.three = false;
    this.four = false;
    this.err = false;
    console.log("got data", data)
    })
  }



  createAuthor(): void { 
    
    console.log("Clicked actuallyCreate")
    console.log(this.newAuthor)
    let observable = this._httpService.createAuthor(this.newAuthor)
    observable.subscribe(data => {
    this.authors = data['data'];
    this.newAuthor = { name: "", country: ""}
    })
  }

  // clear(): void {
  //   this.one = false;
  //   this.two = false;
  //   this.three = false;
  //   this.four = false;
  //   this.err = false;
  // }

  // getUsersFromService(){
  //   let observable = this._httpService.getUsers()
  //   observable.subscribe(data => {
  //     this.users = data['data'];
  //     console.log("got data", data['data'])
      
  //   })
  // }
}

