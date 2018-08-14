import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  newCake: any //Creates 1 user
  ratedCake: any
  cakes: any //Gets all cakes
  cake: any //Gets 1 user
  one = false; //displays div to edit user
  two = false;
  cake_info = false;
  //displays error message
  errors = {name:"", image:""}
 
 
  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    
    this.getCakes()
    this.newCake = {name:"", image:""}
    this.ratedCake = {stars:"", comment:""}
  }
  createCake(){
    this.two = false;
    
    let observable = this._httpService.createCake(this.newCake)
    observable.subscribe(data=>{
    this.newCake = {name:"",image:""}
    if(data['errors'] != null){
      this.errors.name = (data['errors']['name'] == undefined ?  "": data['errors']['name']['message'] )
      this.errors.image = (data['errors']['image'] == undefined ?  "": data['errors']['image']['message'] )
      this.two = true;

    }
    // this.getCakes()
    })
  }


  rateCake(id){
    console.log("Called rateCake ");
    console.log(this.ratedCake);
    console.log("Stars :" +this.ratedCake.stars);
    console.log("Id :" +id)
    console.log("Stars :" +this.ratedCake.comment);
    

    this.ratedCake = {stars:this.ratedCake.stars,
                 comment: this.ratedCake.comment}
    let observable = this._httpService.rateCake(id,this.ratedCake)
    observable.subscribe(data=>{
      
    })
    
   
    
   
    
    
    
    
    
    
    
    
    // let _id = this.editCake._id
    // console.log("RateCake" + this.editCake);
    // let observable = this._httpService.rateCake(_id,this.editCake)
    // observable.subscribe(data=>{
    // // this.editCake = {name:"",image:""}
    // // this.two = false;
    
   
    // })
  }
  getCakes(): void {
    let observable = this._httpService.getCakes() 
    observable.subscribe(data =>{
    this.cakes = data;
    
    
    })
  }
  // selectCake(_id){
  //   console.log("Clicked!!!!!!!!" + _id);  
  //   let observable = this._httpService.selectCake(_id) 
  //   observable.subscribe(data =>{
  //   this.cake = data;
  //   this.one =true;
  //   this.two = false;
  //   this.cake_info = true;
  //   this.editCake = {name:data['name'],image:data['image'],_id:data['_id']}
  
    
  //   })
  // }

}



