import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user_info',
  templateUrl: './user_info.component.html',
  styleUrls: ['./user_info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() userToShow: any

  constructor() { }

  ngOnInit() {
  }
  

}
