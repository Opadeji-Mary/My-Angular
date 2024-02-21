import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface studentinterface{
  FirstName:string;
  LastName:string;
  Email:string;
  Age:string;
  Password:string;
}

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
constructor(public routes:Router){}
public email=''
public password=''
public message=''

public studentarray:studentinterface[]=[]
ngOnInit(){
  this.studentarray=JSON.parse(localStorage['newstudents'])
  console.log(this.studentarray);
}
signin(){
  let currentarray=this.studentarray.find((student, index)=>this.email==student.Email
   && this.password==student.Password)
  if(currentarray){
    localStorage.setItem('currebt_user',JSON.stringify("currentuser"))
    this.routes.navigate(['/dashboard'])
  }
  else{
    this.message="User not found"
  }
}
}
