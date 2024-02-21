import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveformComponent, CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  public firstname:any=''
constructor (public FormBuilder:FormBuilder){}
public formone=this.FormBuilder.group({
  firstname:['', Validators.required],
  email:[''],
  password:['']
})
  ngOnInit(){
    console.log(this.formone.value['email']);
    this.firstname=this.formone.value['email']

    this.formone.controls['firstname'].setValue('')
    this.formone.controls['email'].setValue('')
    this.formone.controls['password'].setValue('')
  }

}
