
import {
    ValidatorFn,
    ValidationErrors,
    AbstractControl,
  } from '@angular/forms';
  export function BirhdateValidator(): ValidatorFn {
    var validationFunction = (
      control: AbstractControl
    ): ValidationErrors | null => {
      let birthdateYear = new Date(control.value).getFullYear();
      let today = new Date().getFullYear();
      let yearRule=false;
      if(today-birthdateYear > 16)
      {yearRule = true; }
      else{yearRule = false};
      const isValid = yearRule;
      return isValid ? null : { birthdateFormat: true };
    };
    return validationFunction;
  }
