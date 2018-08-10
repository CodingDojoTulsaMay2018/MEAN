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
  constructor(private _httpService: HttpService){
    
  }

  ngOnInit(){
    this.getTasksFromService()
    
  }


  getTasksFromService(){
    let observable =  this._httpService.getAll()
    observable.subscribe(data=>{
      console.log("Got the data", data)
      this.allUsers = data['data'] 
      
     
      
    })
  }

}
