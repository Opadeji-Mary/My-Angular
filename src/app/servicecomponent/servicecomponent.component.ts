import { Component } from '@angular/core';
import { LandingpageserviceService } from '../service/landingpageservice.service';

@Component({
  selector: 'app-servicecomponent',
  standalone: true,
  imports: [],
  templateUrl: './servicecomponent.component.html',
  styleUrl: './servicecomponent.component.css'
})
export class ServicecomponentComponent {
constructor(public service:LandingpageserviceService){}
public user='Honey'
ngOnInit(){
  console.log(this.service.returnitem());
  this.user=this.service.returnitem()
  console.log(this.user);

  console.log(this.service.returnnum());
  // this.item=this.service.returnnum()
}
}
