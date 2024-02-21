import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

// interface ObjectName{
//   first_name:string,
//   email:string,
//   phoneNo:number,
//   address:string,
//   lastname:string,
//   gender:string
// }
interface contactinterface{
  firstname:String,
  Lastname:String,
  Email:String,
  PhoneNo:string,
  Address:string,
  Gender:string
}
@Component({
  selector: 'app-landingpagetwo',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './landingpagetwo.component.html',
  styleUrl: './landingpagetwo.component.css'
})
export class LandingpagetwoComponent {

// public object1:ObjectName={
//   first_name:'',
//   last_name:'',
//   email:'',
//   address:'',
//   lastname:'',
//   gender:'',
//   phoneNo: 34

// }
  public first_name=''
  public last_name=''
  public email=''
  public phoneNo=''
  public address=''
  public gender=''

//  public first_name=''
 public styles='form-control my-2 w-50'
 public contactarray:contactinterface[]=[]
 ngOnInit(){
  if(localStorage['contacts']){
    this.contactarray=JSON.parse(localStorage['contacts'])
    console.log(this.contactarray);
  }
 }

addContact(){
  let contactobj={
    firstname:this.first_name,
    Lastname:this.last_name,
    Email:this.email,
    PhoneNo:this.phoneNo,
    Address:this.address,
    Gender:this.gender
  }
  this.contactarray.push(contactobj)
  console.log(this.contactarray);
  localStorage.setItem('contacts',JSON.stringify(this.contactarray))
}



// view(v:string){
//   console.log(v);
//   this.addContact
// }

//  ngOnInit(){
//     for (let index = 0; index < this.contactarray.length; index ++){
//     }
//     console.log(this.contactarray);
//   }
}
