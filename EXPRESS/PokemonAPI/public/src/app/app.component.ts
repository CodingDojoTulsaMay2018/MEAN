import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular';
  tasks = []
  snacks: string[]
  loggedIn: boolean;
  constructor(private _httpService: HttpService){
    
  }
  ngOnInit(){
    this.getTasksFromService()
    this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
    this.loggedIn = true;
    

  }

  getTasksFromService(){
    let observable = this._httpService.getPokemon(1)
    observable.subscribe(data=>{
      console.log("Got our data!", data)
      this.tasks = data ['tasks']
    })
  }
  

}
