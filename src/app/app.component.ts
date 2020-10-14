import { Component } from '@angular/core';
import { UserServicesService } from './user/services/user-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba';

  constructor(private userServiceService: UserServicesService){

  }

  ngOnInit(): void {
    this.getPersons()
  }

  getPersons() {
    this.userServiceService
    .getPerson()
    .subscribe((response)=>{
      console.log(response)
    })
  }



  
}
