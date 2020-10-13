import { Component, OnInit } from '@angular/core';

import { UserServicesService} from "../services/user-services.service"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userServiceService: UserServicesService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userServiceService
    .getUser()
    .subscribe((response)=>{
      console.log(response)
    })
  }
}
