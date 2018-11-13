import { AbstractControl } from '@angular/forms';

export function ValidateMinAge(control: AbstractControl) {
  let minAge = 18;
  
  if(control.value){
    var timeDiff = Math.abs(Date.now() - control.value);
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    if(age < minAge) {
      return { validAge: true };
    }
  }
  return null;
}