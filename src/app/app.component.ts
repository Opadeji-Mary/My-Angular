import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LandingpagetwoComponent } from './landingpagetwo/landingpagetwo.component';
interface ObjectName{
    firstname:string,
    lastname:string,
    age:number
}
interface ObjectName2{
  email:string,
  address:string,
  firstname:string
}
interface ObjectName3{
  firstname:string,
  lastname:String,
  age:number,
  address:string
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingpageComponent, LandingpagetwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'decemberproject';

  public firstname = 'sunday'
  private lastname = 'samuel'
  public age:undefined|number|string|boolean
  public bool = true

  // typescript

  public address:string='No 10, Ogbomoso, Oyo state, Nigeria'
  public email:string='samuel@gmail.com'
  public firststlying='form-control my-2 w-50'
  public secstyling='col-4 mx-auto shadow-lg'
  public special=true
  



  public obj1: ObjectName={
    firstname:'Daniel',
    lastname:'Segun',
    age:57
  }

  public obj2: ObjectName2={
    email:'mary@gmail.com',
    address:'oke osuru',
    firstname:'mary'
  }


  public array1:number[]=[67,57,32,34]
  public array2:string[]=['oyin', 'lola', 'daniel', 'olamide']
  public array3:ObjectName3[]=[
    {
      firstname:'Doyin',
      lastname:'tobiloba',
      age:16,
      address:'Ogbomoso',
    },
    {
      firstname:'Toyin',
      lastname: 'Tobiloba',
      age:16,
      address:'Oyo'

    }
  ]

checkindex(index:number){
  console.log(index);
}

check(){
  // this.special=false
  this.special=!this.special
  console.log(this.special);
}

  ngOnInit(){
    this.firstname='Tobi'
    this.bool=true
    this.age=false
    for (let index = 0; index < this.array3.length; index ++){
    }
    console.log(this.firstname);
  }
}

// Union, inference, interface
