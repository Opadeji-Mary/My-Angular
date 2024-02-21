import { Component } from '@angular/core';

interface DetailsSchema{
  firstname:string,
  lastname:string,
  email:string
  age:Number
}


@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

  public name:string='SQI'
  private school='arbc'
   public ages:number=90
   public special:boolean=false
   
   public obj:DetailsSchema={
    firstname:'Ruth',
    lastname:'Ola',
    email:'oyin@gmail.com',
    age:90
   }

  //typescript
  
  public age:number|string = 3674
  private lastname:string|number|boolean = 9000

  ngOnInit(){
    console.log(this.lastname);

    this.lastname=true

  console.log(this.lastname);

console.log(this.name);
console.log(this.school);
  }
}
