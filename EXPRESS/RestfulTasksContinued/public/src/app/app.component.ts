import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular';
  allUsers = []
  addedUser: object
  constructor(private _httpService: HttpService){
    
  }

  ngOnInit(){
   
    
  }


  // getTasksFromService(){
  //   let observable =  this._httpService.getAll()
  //   observable.subscribe(data=>{
  //     console.log("Got the data", data)
  //     this.allUsers = data['data']      
  //   })
  // }
  
  onButtonGetAll(){
    let observable =  this._httpService.getAll()
    observable.subscribe(data=>{
      console.log("Got the data", data)
      this.allUsers = data['data']      
    })
  }
  onButtonGetUser(_id){
    let observable =  this._httpService.getUser(_id)
    observable.subscribe(data=>{
      console.log("Got the data", data)
      this.allUsers = data['data']      
    })
  }
  onButtonCreateUser(name){
    let observable =  this._httpService.create(name)
    observable.subscribe(data=>{
      console.log("Got the data", data)   
      this.addedUser = data  
      console.log("the user i added "+this.addedUser);
         
    })
  }
  onButtonUpdateUser(_id,name){
    let observable =  this._httpService.update(_id,name)
    observable.subscribe(data=>{
      console.log("Got the data", data)
      this.allUsers = data['data']      
    })
  }
  onButtonDeleteUser(_id){
    let observable =  this._httpService.delete(_id)
    observable.subscribe(data=>{
      console.log("Got the data", data)
      this.allUsers = data['data']      
    })
  }

  
  
  


  










  onButtonClick(): void { 
    console.log(`Click event is working`);
  }
  onButtonClickParam(num: Number): void { 
      console.log(`Click event is working with num param: ${num}`);
  }
  onButtonClickParams(num: Number, str: String): void { 
      console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  }
  onButtonClickEvent(event: any): void { 
      console.log(`Click event is working with event: ${event}`);
  }


}
