import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingpageserviceService {

  constructor() { }
  public item='My name is mary'
  public numberArray:number[]=[1,2,3,4,5,6,7,8,9]

  returnitem(){
    return this.item
  }
  returnnum(){
    return this.numberArray
  }
}
