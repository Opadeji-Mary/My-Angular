import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LandingpagetwoComponent } from '../landingpagetwo/landingpagetwo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface MyItem{
  firstname:String,
  Lastname:String,
  Email:String,
  PhoneNo:string,
  Address:string,
  Gender:string
}

@Component({
  selector: 'app-viewpage',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './viewpage.component.html',
  styleUrl: './viewpage.component.css'
})
export class ViewpageComponent {
  contactarray: MyItem[] = [];

  constructor(private LandingpagetwoComponent: LandingpagetwoComponent, public activated:ActivatedRoute , public routes:Router) { }
  

  ngOnInit(): void {
    this.contactarray = this.LandingpagetwoComponent.contactarray;
    console.log(this.activated.snapshot.params['name']);
    
    // views(){
    //   this.routes.navigate(['view'])
    // }
  }
}

