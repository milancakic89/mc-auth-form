import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export const passwordValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {

    const minLength = control.value.length >= 5;
    const hasUppercase = /[A-Z]/.test(control.value);
    const hasNumber = /\d/.test(control.value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(control.value);

    if (minLength && hasUppercase && hasNumber && hasSpecialChar) {
        return null;
    }

    return {
      minLength,
      hasUppercase,
      hasNumber,
      hasSpecialChar,
    };
  };
}