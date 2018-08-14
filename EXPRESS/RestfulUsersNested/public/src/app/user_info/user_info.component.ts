import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user_info',
  templateUrl: './user_info.component.html',
  styleUrls: ['./user_info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() userToShow: any
  @Output() updateUser = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  callParent(){
    console.log("made it to the child function");
    console.log(this.userToShow);
    
    this.updateUser.emit(this.userToShow)
  }
  

}
