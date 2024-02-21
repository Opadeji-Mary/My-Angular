import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-displaycontact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './displaycontact.component.html',
  styleUrl: './displaycontact.component.css'
})
export class DisplaycontactComponent {
constructor(public activated:ActivatedRoute , public routes:Router){}
  ngOnInit(){
    console.log(this.activated.snapshot.params['name']);
  };
check(){
  this.routes.navigate(['home'])
}
}



