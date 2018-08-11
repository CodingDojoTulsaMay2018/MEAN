import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "You're Killing Us!";
  name = ""
  errors = ""
  newAnimal: any
  population: number;
  one = false;
  two = false; 
  three = false;
  four = false;
  err = false
  animals: object
  nameValid=''
  popValid=''

  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    this.newAnimal = {name:"", population: 0}
  }

  showAll(): void { 
    console.log("clicked")
    let observable = this._httpService.getAnimals()
    observable.subscribe(data => {
    this.animals = data;
    this.one = true;
    this.two = false;
    this.three = false;
    this.four = false;
    this.err = false;
    console.log("got data", data)
      
    })
  }

  showOne(): void { 
    let observable = this._httpService.getAnimals()
    observable.subscribe(data => {
    this.animals = data;
    this.one = false;
    this.two = true;
    this.three = false;
    this.four = false;
    this.err = false;
    console.log("got data", data)
    })
  }

  select(num): void { 
    console.log(num)
    let observable = this._httpService.select(num)
    observable.subscribe(data => {
    this.animals = data;
    this.one = false;
    this.two = false;
    this.three = false;
    this.four = true;
    this.err = false;
    console.log("got data", data['name'])
    })
  }

  create(): void { 
    let observable = this._httpService.getAnimals()
    observable.subscribe(data => {
    this.animals = data['data'];
    this.one = false;
    this.two = false;
    this.three = true;
    this.four = false;
    this.err = false;
    console.log("got data", data['data'])
    })
  }

  actuallyCreate(): void { 
    
    console.log("Clicked actuallyCreate")
    console.log(this.newAnimal)
    console.log(this.name, this.population+" THIS ")
    let observable = this._httpService.create(this.newAnimal)
    observable.subscribe(data => {
    this.animals = data['data'];
    this.one = false;
    this.two = false;
    this.three = true;
    this.four = false;
    this.err = false;
    if(data['errors']['name']['message'] != null){
      this.errors = data['errors']['name']['message'] 
      this.err = true;
    }
    console.log(this.errors)
    this.newAnimal = { name: "", population: "" }
    })
  }

  clear(): void {
    this.one = false;
    this.two = false;
    this.three = false;
    this.four = false;
    this.err = false;
  }

  // getUsersFromService(){
  //   let observable = this._httpService.getUsers()
  //   observable.subscribe(data => {
  //     this.users = data['data'];
  //     console.log("got data", data['data'])
      
  //   })
  // }
}
