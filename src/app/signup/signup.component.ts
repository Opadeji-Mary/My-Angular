import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface signUpinterface{
  FirstName:string,
  LastName:string,
  Email:string,
  Age:string,
  Password:string
}
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
constructor (public navigate:Router){}
public FirstName:string=""
public LastName:string=""
public Email:string=""
public Age:string=""
public Password:string=""
public getError : string =""
public studentarray: signUpinterface[]=[]
public newArry : any = []
public comfirm:boolean=false

signup(){
let studentObject: signUpinterface={
  FirstName:this.FirstName,
  LastName:this.LastName,
  Email:this.Email,
  Age:this.Age,
  Password:this.Password
}

let getRes = this.studentarray.push(studentObject);
if(!getRes){
  this.comfirm = true;
  this.getError = "Register failed"
  setTimeout(()=>{
    this.getError = ""
    this.comfirm = false;
  }, 3000);
}
else{
  localStorage.setItem("StudentDetails",JSON.stringify(this.studentarray));
  this.navigate.navigate(['/signIn']);
}
}
ngOnInit(){
  if(localStorage['StudentDetails']){
    this.studentarray = JSON.parse(localStorage['StudentDetails']);
  }
}
}
