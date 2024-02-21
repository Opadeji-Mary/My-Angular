import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';

export const studentGuard: CanActivateFn = (route, state) => {
  const routes = inject(Router);
  const user = JSON.parse(localStorage.getItem("currentuser")!);
  
  if(!user){
    routes.navigate(['/signin'])
  }
  else{
    routes.navigate(['/dashboard'])
  }
  return true
};
