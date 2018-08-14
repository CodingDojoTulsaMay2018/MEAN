import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  newUser: any //Creates 1 user
  editUser: any
  users: any //Gets all users
  user: any //Gets 1 user
  one = false; //displays div to edit user
  two = false;
  user_info = false;
  //displays error message
  errors = {name:"", age:""}
 
  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    
    this.getUsers()
    this.newUser = {name:"", age:Number}
  }
  createUser(){
    this.two = false;
    console.log("CreatingUser" + this.newUser);
    let observable = this._httpService.createUser(this.newUser)
    observable.subscribe(data=>{
    this.newUser = {name:"",age:Number}
    if(data['errors'] != null){
      this.errors.name = (data['errors']['name'] == undefined ?  "": data['errors']['name']['message'] )
      this.errors.age = (data['errors']['age'] == undefined ?  "": data['errors']['age']['message'] )
      this.two = true;

    }
    this.getUsers()
    })
  }


  updateUser(){
    
    let _id = this.editUser._id
    
    console.log("CreatingUser" + this.editUser);
    let observable = this._httpService.updateUser(_id,this.editUser)
    observable.subscribe(data=>{
    this.editUser = {name:"",age:Number}
    this.two = false;
    this.getUsers()
   
    })
  }
  getUsers(): void {
    let observable = this._httpService.getUsers() 
    observable.subscribe(data =>{
    this.users = data;
    
    
    })
  }
  selectUser(_id){
    console.log("Clicked!!!!!!!!" + _id);
    
    let observable = this._httpService.selectUser(_id) 
    observable.subscribe(data =>{
    this.user = data;
    this.one =true;
    this.two = false;
    this.user_info = true;
    this.editUser = {name:data['name'],age:data['age'],_id:data['_id']}
    console.log(data);    
    })
  }
  deleteUser(_id){
    
    let observable = this._httpService.deleteUser(_id) 
    observable.subscribe(data =>{
    this.user = data;
    this.two = false;
    this.getUsers()
    
    })
  }
}



